// searchbar.js
const form = document.getElementById("searchForm");
const filter = document.getElementById("searchInput");
const items = document.querySelectorAll("h2, h5, p, b");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  performSearchAndHighlight(filter.value.trim());
});

function performSearchAndHighlight(searchText) {
  if (searchText === "") {
    alert("Enter the keyword to search!");
    removeHighlight();
    return;
  }

  const keywords = searchText.trim().split(/\s+/);
  removeHighlight();

  if (keywords.length > 0) {
    const escapedKeywords = keywords.map((keyword) =>
      keyword.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    );

    const regexes = escapedKeywords.map(
      (keyword) => new RegExp(`(${keyword})`, "gi")
    );

    let found = false;

    items.forEach((item) => {
      let innerHTML = item.innerHTML;
      regexes.forEach((regex) => {
        innerHTML = innerHTML.replace(
          regex,
          '<span class="highlight">$1</span>'
        );
      });
      if (innerHTML !== item.innerHTML) {
        found = true;
        item.innerHTML = innerHTML;
      }
    });

    if (found) {
      const highlightedItem = document.querySelector(".highlight");
      if (highlightedItem) {
        highlightedItem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      alert("Cannot be found, please try with other keywords.");
    }
  }
}

function removeHighlight() {
  items.forEach((item) => {
    item.innerHTML = item.textContent;
  });
}

filter.addEventListener("input", function () {
  if (this.value.trim() === "") {
    removeHighlight();
  }
});
