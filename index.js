// Responsive navbar

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click" , () =>{
  headerElem.classList.toggle("active");
});




// Creating a portfolio tabbed Component

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll("img-overlay");

p_btns.addEventListener("click",(e) =>{
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) =>{ curElem.classList.remove("p-btn-active")});

    p_btn_clicked.classList.add("p-btn-active");

    //To find the number of data attrubute

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active  = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem)=>curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem)=> curElem.classList.remove("p-image-not-active"));  
});

// Swiper slide testimonial

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
delay:2500,
disanleOInteraction:false,
    },
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
//

const myJsmedia = (widthSize) =>{
  if(widthSize.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay:{
  delay:2500,
  disanleOInteraction:false,
      },
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay:{
  delay:2500,
  disanleOInteraction:false,
      },
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

const widthSize = window.matchMedia("(max-width: 25em)");
// Call listener function at run time

myJsmedia(widthSize);
// Attach listener function on state changes
widthSize.addEventListener("change" ,myJsmedia);


//Scroll to top button

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () =>{
  heroSection.scrollIntoView({behavior: "smooth"});
};

scrollElement.addEventListener("click", scrollTop);



// ==========Animate counter number=====

const counterNum = document.querySelectorAll(".counter-number");

const speed = 200;

counterNum.forEach((curElem) =>{
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);

    const initialNum = parseInt(curElem.innerText);

    const increamentNumber  = Math.trunc(targetNumber / speed);

    if (initialNum < targetNumber){
      curElem.innerText = `${initialNum + increamentNumber}+`;
      setTimeout(updateNumber, 10);
    }
  };
  updateNumber();
}); 