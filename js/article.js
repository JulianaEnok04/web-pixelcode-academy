function filterArticles() {
  const selectedCategory = document.getElementById("category").value;
  const articles = document.querySelectorAll(".article-card");

  articles.forEach((article) => {
    if (
      selectedCategory === "all" ||
      article.dataset.category === selectedCategory
    ) {
      article.style.display = "block"; // Tampilkan artikel
    } else {
      article.style.display = "none"; // Sembunyikan artikel
    }
  });
}
