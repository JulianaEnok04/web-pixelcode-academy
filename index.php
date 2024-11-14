<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulir Registrasi</title>
</head>
<body>
    <h2>Formulir Registrasi</h2>
    <form action="./PHP/output.php" method="POST" enctype="multipart/form-data">
        Nama Lengkap: <input type="text" name="nama_lengkap" required><br>
        Jenis Kelamin:
        <input type="radio" name="jenis_kelamin" value="Laki-laki" required> Laki-laki
        <input type="radio" name="jenis_kelamin" value="Perempuan" required> Perempuan<br>
        Tempat, Tanggal Lahir: <input type="text" name="ttl" required><br>
        Alamat: <input type="text" name="alamat" required><br>
        Email: <input type="email" name="email" required><br>
        No HP: <input type="text" name="no_hp" required><br>
        Hobi: <input type="text" name="hobi" required><br>
        Upload Foto: <input type="file" name="foto" accept="image/*" required><br>
        <button type="submit" name="simpan">Simpan</button>
    </form>
</body>
</html>
