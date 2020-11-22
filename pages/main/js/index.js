import { pets } from './petsData.js';

const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('.nav__lists');
const navList = document.querySelector('.nav__list');
const navBurger = document.querySelector('.nav-burger');
const header = document.querySelector('#header');
const body = document.querySelector('body');
const modal = document.getElementById("petsModal");
const modalCont = document.querySelector(".modal__box");
const modalBtnClose = document.getElementsByClassName("modal__close")[0];
const slider = document.querySelector('.slider');

menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('visible');
    navList.classList.toggle('nav__list--margin');
    navBurger.classList.toggle('active-burger');
    header.classList.toggle('header-overlay');
    body.classList.toggle('overflow');
})

header.addEventListener('click', (e) => {
    let target = e.target;
    if (target === header) {
        navList.classList.toggle('nav__list--margin');
        header.classList.toggle('header-overlay');
        body.classList.toggle('overflow');
        navBurger.classList.toggle('active-burger');
        menu.classList.toggle('visible');
    } else {
        return
    }
})

for(let i = 0; i < pets.length; i++) {
    let card = document.createElement('div');
    card.classList.add('slider__items');
    card.style.order = i + 1;
    card.addEventListener('click', learnMore);
    card.setAttribute('data-petnumb', i);

    if(card.style.order > 3 && window.innerWidth > 769) {
        card.style.display = 'none'; 
    } else if(card.style.order > 2 && window.innerWidth < 769 && window.innerWidth > 661) {
        card.style.display = 'none'; 
    } else if(card.style.order > 1 && window.innerWidth < 661) {
        card.style.display = 'none'; 
    }

    slider.append(card);
    let imgBox = document.createElement('div');
    imgBox.classList.add('slider__box');
    let img = document.createElement('img');
    img.setAttribute('src', pets[i].img);
    img.classList.add('slider__img');
    imgBox.append(img);
    card.append(imgBox);

    let petName = document.createElement('p');
    petName.classList.add('slider__text');
    petName.innerHTML = pets[i].name;
    card.append(petName);

    let btnPet = document.createElement('button');
    btnPet.classList.add('header-content__button', 'slider__btn');
    btnPet.setAttribute('data-petnumb', i);
    btnPet.addEventListener('click', learnMore)
    btnPet.innerHTML = 'Learn more';
    card.append(btnPet);
}

const cards = document.querySelectorAll('.slider__items');
const btnArrowLeft = document.querySelector('.arrow-left');
const btnArrowRight = document.querySelector('.arrow-right');
const matchMediaX = window.matchMedia("(max-width: 769px) and (min-width:661px)");
const matchMediaXX = window.matchMedia("(max-width: 660px)");

btnArrowLeft.addEventListener('click', () => {

    if(window.innerWidth < 769 && window.innerWidth > 661) {
        for(let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
            cards[i].style.order = parseInt(cards[i].style.order) - 3;
            if(cards[i].style.order <= 0){
                cards[i].style.order = parseInt(cards[i].style.order) + 8;
            }
            if(cards[i].style.order > 2) {
                cards[i].style.display = 'none';
            }
        }
        hiddenLast(matchMediaX);
    } else if(window.innerWidth < 661) {
        for(let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
            cards[i].style.order = parseInt(cards[i].style.order) - 3;
            if(cards[i].style.order <= 0) {
                cards[i].style.order = parseInt(cards[i].style.order) + 8;
            }
            if(cards[i].style.order > 1) {
                cards[i].style.display = 'none';
            }
        }
        hiddenLast(matchMediaXX);
    } else if(window.innerWidth > 769) {
        for(let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
            cards[i].style.order = parseInt(cards[i].style.order) + 3;
            if(cards[i].style.order >= 9) {
                cards[i].style.order = cards[i].style.order - 8;
            }
            if(cards[i].style.order > 3) {
                cards[i].style.display = 'none';
            }
        }
    }
});

btnArrowRight.addEventListener('click', () => {

    if(window.innerWidth < 769 && window.innerWidth > 661) {
        for(let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
            cards[i].style.order = parseInt(cards[i].style.order) + 3;
            if(cards[i].style.order >= 9) {
                cards[i].style.order = cards[i].style.order - 8;
            }
            if(cards[i].style.order > 2) {
                cards[i].style.display = 'none';
            }
        }
        hiddenLast(matchMediaX);
    } else if(window.innerWidth < 661) {
        for(let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
            cards[i].style.order = parseInt(cards[i].style.order) + 3;
            if(cards[i].style.order >= 9) {
                cards[i].style.order = cards[i].style.order - 8;
            }
            if(cards[i].style.order > 1) {
                cards[i].style.display = 'none';
            }
        }
        hiddenLast(matchMediaXX);
    } else if(window.innerWidth > 769) {
        for(let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
            cards[i].style.order = parseInt(cards[i].style.order) + 3;
            if(cards[i].style.order >= 9) {
                cards[i].style.order = cards[i].style.order - 8;
            }
            if(cards[i].style.order > 3) {
                cards[i].style.display = 'none';
            }
        }
    }
    
});

function hiddenLast(matchMediaX) {
    if (matchMediaX.matches) { 
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].style.order > 2) {
                    cards[i].setAttribute('hidden', 'hidden');
                } else {
                    cards[i].removeAttribute('hidden');
            }
        }
    }
}

hiddenLast(matchMediaX);
matchMediaX.addListener(matchMediaX);

function hiddenTwo(matchMediaXX) {
    if (matchMediaXX.matches) { 
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].style.order > 1) {
                cards[i].setAttribute('hidden', 'hidden');
            } else{
                cards[i].removeAttribute('hidden')
            }
        }
    }
}

hiddenTwo(matchMediaXX);
matchMediaXX.addListener(matchMediaXX);

function learnMore() {
    let pet = pets[this.dataset.petnumb];

    modalCont.classList.remove('out');
    modal.style.display = "block";
    modalCont.children[0].children[0].setAttribute('src', `${pet.img}`);
    modalCont.children[1].children[0].innerHTML = pet.name;
    modalCont.children[1].children[1].innerHTML = `${pet.type} - ${pet.breed}`;
    modalCont.children[1].children[2].innerHTML = pet.description;
    modalCont.children[1].children[3].children[0].innerHTML = '<b>Age: </b>'+pet.age;
    modalCont.children[1].children[3].children[1].innerHTML = '<b>Inosulations: </b>' +pet.inoculations;
    modalCont.children[1].children[3].children[2].innerHTML = '<b>Diseases: </b>' + pet.diseases;
    modalCont.children[1].children[3].children[3].innerHTML = '<b>Parasites: </b>' + pet.parasites;
    document.querySelector('body').style.overflow = 'hidden';
}
modalBtnClose.addEventListener('click', () => {
    modal.style.display = "none";
    document.querySelector('body').style.overflow = 'visible';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.querySelector('body').style.overflow = 'visible';
    }
});



