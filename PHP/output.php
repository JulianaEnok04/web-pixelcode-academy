<?php
// Cek jika request menggunakan metode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $namaLengkap = $_POST['nama_lengkap'];
    $jenisKelamin = $_POST['jenis_kelamin'];
    $ttl = $_POST['ttl'];
    $alamat = $_POST['alamat'];
    $email = $_POST['email'];
    $noHp = $_POST['no_hp'];
    $hobi = $_POST['hobi'];

    // Proses upload foto
    if ($_FILES['foto']['error'] == 0) {
        $foto = $_FILES['foto'];
        $uploadsDir = __DIR__ . '/../uploads/'; // Folder upload
        if (!is_dir($uploadsDir)) {
            mkdir($uploadsDir, 0755, true); // Buat folder jika belum ada
        }
        $fotoPath = $uploadsDir . basename($foto['name']);
        move_uploaded_file($foto['tmp_name'], $fotoPath);
        $fotoUrl = '../uploads/' . basename($foto['name']); // Untuk menampilkan gambar di HTML
    } else {
        echo "<script>alert('Upload foto gagal');</script>";
        exit;
    }

    // Validasi apakah semua field terisi
    if (empty($namaLengkap) || empty($jenisKelamin) || empty($ttl) || empty($alamat) || empty($email) || empty($noHp) || empty($hobi) || empty($fotoPath)) {
        echo "<script>alert('Data belum lengkap, harap isi semua field!'); window.history.back();</script>";
        exit;
    }

    // Tentukan warna background berdasarkan jenis kelamin
    $bgColor = $jenisKelamin == 'Laki-laki' ? 'blue' : 'red';
    $fontColor = $jenisKelamin == 'Laki-laki' ? 'black' : 'white';
} else {
    // Jika bukan POST, redirect kembali ke index.php
    header("Location: ../index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kartu Registrasi</title>
    <style>
        .kartu {
            background-color: <?= $bgColor ?>;
            color: <?= $fontColor ?>;
            width: 300px;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
        }
        .kartu img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="kartu">
        <h2>Kartu Registrasi</h2>
        <img src="<?= htmlspecialchars($fotoUrl) ?>" alt="Foto Diri"><br>
        <p>Nama: <?= htmlspecialchars($namaLengkap) ?></p>
        <p>Jenis Kelamin: <?= htmlspecialchars($jenisKelamin) ?></p>
        <p>TTL: <?= htmlspecialchars($ttl) ?></p>
        <p>Alamat: <?= htmlspecialchars($alamat) ?></p>
        <p>Email: <?= htmlspecialchars($email) ?></p>
        <p>No HP: <?= htmlspecialchars($noHp) ?></p>
        <p>Hobi: <?= htmlspecialchars($hobi) ?></p>
    </div>
</body>
</html>
