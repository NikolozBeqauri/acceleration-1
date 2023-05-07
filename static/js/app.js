/*scrollup*/
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*scrollupEnd*/
/*burger*/
const navBurger = document.querySelector(".burger")
const navLinks = document.querySelector(".main-nav-links")

function navLinksToggle() {
  navLinks.classList.toggle("nav-links-active");
}
navBurger.addEventListener("click", navLinksToggle)
/*burgerEnd*/
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
/*sliderEnd*/
/*serviceCards*/
const cardsData = [
  {
    imageUrl: './static/image/services/services-img-1.png',
    title: 'FLIGHT BOOKING',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageUrl: './static/image/services/services-img-2.jpg',
    title: 'HOTEL & RESORT BOOKING',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageUrl: './static/image/services/services-img-3.jpg',
    title: 'FAMILY TRIP PLANNER',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageUrl: './static/image/services/services-img-4.png',
    title: 'CRUISE TOUR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageUrl: './static/image/services/services-img-5.jpg',
    title: 'FIRE CAMP',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageUrl: './static/image/services/services-img-6.png',
    title: 'CORPORATE HOLIDAYS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];


const container = document.getElementById('service-cards-wrapper');

cardsData.forEach((cardData) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.setAttribute('src', cardData.imageUrl);

  const title = document.createElement('h2');
  title.textContent = cardData.title;

  const description = document.createElement('p');
  description.textContent = cardData.description;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);

  container.appendChild(card);
});
/*cardsEnd*/

/*MainModal*/

// Select the modal wrapper and close button
const modalWrapper = document.querySelector('.modal-wrapper');
const closeButton = document.querySelector('.modal-close-button');

// Create a function to open the modal
function openModal(imageUrl, title, description) {
  // Set the modal image, title, and description based on the card data
  const modalImage = modalWrapper.querySelector('.modal-body img');
  modalImage.setAttribute('src', imageUrl);

  const modalTitle = modalWrapper.querySelector('.modal-header');
  modalTitle.textContent = title;

  const modalDescription = modalWrapper.querySelector('.modal-footer');
  modalDescription.textContent = description;

  // Show the modal
  modalWrapper.classList.add('modal-wrapper-active');
}

// Add an event listener to each card
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  const imageUrl = card.querySelector('img').getAttribute('src');
  const title = card.querySelector('h2').textContent;
  const description = card.querySelector('p').textContent;

  card.addEventListener('click', () => {
    openModal(imageUrl, title, description);
  });
});

// Add an event listener to the close button to hide the modal
closeButton.addEventListener('click', () => {
  modalWrapper.classList.remove('modal-wrapper-active');
});

window.addEventListener('click', (e) => {
  if (e.target == document.querySelector(".modal-wrapper")) {
    modalWrapper.classList.remove('modal-wrapper-active');
  }
})
  /*MainModalEnd*/


  /*bookingModal*/
  const bookingModalOpenBtn = document.querySelector(".happy-travelers-footer-button")
  const bookingModalWrapper = document.querySelector(".booking-modal-wrapper")
  const bookingModalCloseBtn = document.querySelector(".booking-modal-close-button")


  function modalToggle () {
    bookingModalWrapper.classList.toggle("booking-modal-wrapper-active")
}

window.addEventListener('click', (e) => {
    if(e.target == document.querySelector(".booking-modal-wrapper")) {
        modalToggle();
    }
})
bookingModalOpenBtn.addEventListener("click", modalToggle);
bookingModalCloseBtn.addEventListener("click", modalToggle);
