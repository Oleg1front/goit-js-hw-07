const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
function createImgList() {
  const galleryList = document.querySelector(".gallery");
  galleryList.classList.add("img-list");

  const imgList = [];
  images.forEach((img) => {
    const createImg = document.createElement("img");
    createImg.src = img.url;
    createImg.alt = img.alt;
    createImg.classList.add("image");
    const liItem = document.createElement("li");
    liItem.appendChild(createImg);
    imgList.push(liItem);
  });

  galleryList.append(...imgList);
}
createImgList();
