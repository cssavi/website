const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
});

const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const aboutLink = document.getElementById("about-link");
const cardSection = document.getElementById("card-section");

aboutLink.addEventListener("click", (event) => {
  event.preventDefault();

  cardSection.scrollIntoView({ behavior: "smooth" });
});

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("But in a much more real sense, I have no idea what I'm doing.");

const blob = document.getElementById("blob");

const updateBlobPosition = (clientX, clientY, scrollY) => {
  const blobWidth = blob.clientWidth;
  const blobHeight = blob.clientHeight;

  blob.style.left = `${clientX - blobWidth / 2}px`; // Subtract half the blob width
  blob.style.top = `${clientY + scrollY - blobHeight / 2}px`; // Subtract half the blob height
};

window.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  const scrollY = window.scrollY || window.pageYOffset;
  updateBlobPosition(clientX, clientY, scrollY);
});

window.addEventListener("scroll", () => {
  const { clientX, clientY } = lastMousePosition;
  const scrollY = window.scrollY || window.pageYOffset;
  updateBlobPosition(clientX, clientY, scrollY);
});

let lastMousePosition = { clientX: 0, clientY: 0 };

window.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  lastMousePosition = { clientX, clientY };
});

const experiencesLink = document.querySelector('.menu-item a[href="#experiences"]');

experiencesLink.addEventListener('click', function(event) {
    event.preventDefault();

    const experiencesSection = document.getElementById('experiences');

    experiencesSection.scrollIntoView({ behavior: 'smooth' });
});

const contactLink = document.querySelector('.menu-item[href="#contact-section"]');

contactLink.addEventListener('click', function(event) {
    event.preventDefault();

    const contactSection = document.getElementById('contact-section');

    contactSection.scrollIntoView({ behavior: 'smooth' });
});
