const listCategories = document.getElementById("categories");
const listItem = listCategories.querySelectorAll(".item");
const listWidth = listItem.length;
console.log(`Number of categories: ${listWidth}`);

for (const category of listItem) {
  const categoryHeader = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul > li");
  const numberOfElements = categoryElements.length;

  console.log(`Category: ${categoryHeader}`);
  console.log(`Elements: ${numberOfElements}`);
}
