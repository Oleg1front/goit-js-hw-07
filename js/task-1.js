const categoryNumberList = document.querySelector("#categories");
const categoryItems = categoryNumberList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItemsNumber = item.querySelectorAll("li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsNumber.length}`);
});
