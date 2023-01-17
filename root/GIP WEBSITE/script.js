const carousel1 = document.querySelector('.carousel1');
const carousel2 = document.querySelector('.carousel2');
const itemsContainer1 = carousel1.querySelector('.carousel-items');
const itemsContainer2 = carousel2.querySelector('.carousel-items');
const items1 = Array.from(itemsContainer1.children);
const items2 = Array.from(itemsContainer2.children);
const prevButton1 = carousel1.querySelector('.carousel-button-prev');
const nextButton1 = carousel1.querySelector('.carousel-button-next');
const prevButton2 = carousel2.querySelector('.carousel-button-prev');
const nextButton2 = carousel2.querySelector('.carousel-button-next');

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

let currentItemIndex1 = 0;
let currentItemIndex2 = 0;
let itemsPerPage1 = 5.01;
let itemsPerPage2 = 5.01;



function goToItem1(index) {
  if (index < 0) {
    index = items1.length - itemsPerPage1;
  } else if (index > items1.length - itemsPerPage1) {
    index = 0;
  }
  itemsContainer1.style.transition = 'transform 0.5s ease';
  itemsContainer1.style.transform = `translateX(-${index * (100 / itemsPerPage1)}%)`;
  currentItemIndex1 = index;
}

function goToItem2(index) {
  if (index < 0) {
    index = items2.length - itemsPerPage2;
  } else if (index > items2.length - itemsPerPage2) {
    index = 0;
  }
  itemsContainer2.style.transition = 'transform 0.5s ease';
  itemsContainer2.style.transform = `translateX(-${index * (100 / itemsPerPage2)}%)`;
  currentItemIndex2 = index;
}

prevButton1.addEventListener('click', () => {
  goToItem1(currentItemIndex1 - 1);
});

nextButton1.addEventListener('click', () => {
  goToItem1(currentItemIndex1 + 1);
});

prevButton2.addEventListener('click', () => {
  goToItem2(currentItemIndex2 - 1);
});

nextButton2.addEventListener('click', () => {
  goToItem2(currentItemIndex2 + 1);
});

goToItem1(currentItemIndex1);
goToItem2(currentItemIndex2);

window.addEventListener('resize', () => {
  if (window.innerWidth < 800) {
    itemsPerPage1 = 2;
    itemsPerPage2 = 2;
  } else {
    itemsPerPage1 = 6;
    itemsPerPage2 = 6;
  }
  goToItem1(currentItemIndex1);
  goToItem2(currentItemIndex2);
});

