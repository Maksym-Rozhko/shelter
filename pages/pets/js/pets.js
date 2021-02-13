import { pets } from './petsData.js';

const cards = document.querySelectorAll('.slider__items');
const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('.nav__lists');
const navList = document.querySelector('.nav__list');
const navBurger = document.querySelector('.nav-burger');
const header = document.querySelector('#header');
const body = document.querySelector('body');
const next = document.querySelector(".btn__nav");
const prev = document.querySelector(".btn__prev");
const first = document.querySelector(".btn__first");
const last = document.querySelector(".btn__last");
const content = document.querySelector(".slider");
const pagin = document.querySelector('.btn__pagin');
const modalCont = document.querySelector(".modal__box");
const modal = document.getElementById("petsModal");
const modalBtnClose = document.getElementsByClassName("modal__close")[0];
const prevPage = document.querySelector('#prevPage');
const firstPage = document.querySelector('#firstPage');
const lastPage = document.querySelector('#lastPage');
const nextPage = document.querySelector('#nextPage');
let currentPage = 1;
let perPage1280 = 8;
let perPage768 = 6;
let perPage1320 = 3;

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

for(let i = 0; i < cards.length; i++) {
    cards[i].style.order = i + 1;
}

function hiddenLast(matchMediaX) {
    if (matchMediaX.matches) { 
        for(let i = 0; i < cards.length; i++ ) {
            if(cards[i].style.order > 6) {
                cards[i].setAttribute('hidden', 'hidden');
            } else {
                cards[i].removeAttribute('hidden');
            }
        }
    }
}

let matchMediaX = window.matchMedia("(max-width: 880px)");
hiddenLast(matchMediaX);
matchMediaX.addListener(hiddenLast);

function hiddenLot(matchMediaXX) {
    if (matchMediaXX.matches) { 
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].style.order === 1 || cards[i].style.order === 3  || cards[i].style.order === 5 ) {
                cards[i].removeAttribute('hidden');
            } else{
                cards[i].setAttribute('hidden', 'hidden');
            }
        }
    }
}

let matchMediaXX = window.matchMedia("(max-width: 605px)");
hiddenLot(matchMediaXX);
matchMediaXX.addListener(hiddenLot);
pagin.innerHTML = currentPage;

prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
});

firstPage.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage = 1;
        changePage(currentPage);
    }
});

lastPage.addEventListener('click', () => {
    if (currentPage < numPages()) {
        currentPage = numPages();
        changePage(currentPage);
    }
}); 

nextPage.addEventListener('click', () => {
    if (currentPage < numPages()) {
        currentPage++;
        changePage(currentPage);
    }
});
    
function changePage(page){ 
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();
    content.innerHTML = "";
    if(window.innerWidth > 880) {
        for (var i = (page - 1) * perPage1280; i < (page * perPage1280) && i < pets.length; i++) {
        addContent(pets[i]);
        }
        if (page === 1) {
            prev.classList.add('disabled');
            prev.classList.remove('btn__nav');
            first.classList.add('disabled');
            first.classList.remove('btn__nav');
        } else {
            prev.classList.remove('disabled');
            prev.classList.add('btn__nav');
            first.classList.remove('disabled');
            first.classList.add('btn__nav');
        }

        if (page === numPages()) {
            next.classList.add('disabled');
            next.classList.remove('btn__nav');
            last.classList.add('disabled');
            last.classList.remove('btn__nav');
        } else {
            next.classList.remove('disabled');
            next.classList.add('btn__nav');
            last.classList.remove('disabled');
            last.classList.add('btn__nav');
        }
    } else if( window.innerWidth < 880 && window.innerWidth > 605) {
        for (var i = (page - 1) * perPage768; i < (page * perPage768) && i < pets.length; i++) {
            addContent(pets[i]);
        }
        if (page === 1) {
            prev.classList.add('disabled');
            prev.classList.remove('btn__nav');
            first.classList.add('disabled');
            first.classList.remove('btn__nav');
        } else {
            prev.classList.remove('disabled');
            prev.classList.add('btn__nav');  
            first.classList.remove('disabled');
            first.classList.add('btn__nav');  
        }
        if (page === numPages()) {
            next.classList.add('disabled');
            next.classList.remove('btn__nav');
            last.classList.add('disabled');
            last.classList.remove('btn__nav');
        } else {
            next.classList.remove('disabled');
            next.classList.add('btn__nav');
            last.classList.remove('disabled');
            last.classList.add('btn__nav');
        }
    } else if(window.innerWidth < 605) {
        for (var i = (page - 1) * perPage1320; i < (page * perPage1320) && i < pets.length; i++) {
            addContent(pets[i]);
        }
        if (page === 1) {
            prev.classList.add('disabled');
            prev.classList.remove('btn__nav');
            first.classList.add('disabled');
            first.classList.remove('btn__nav');
        } else {
            prev.classList.remove('disabled');
            prev.classList.add('btn__nav');
            first.classList.remove('disabled');
            first.classList.add('btn__nav');
        }
        if (page === numPages()) {
            next.classList.add('disabled');
            next.classList.remove('btn__nav');
            last.classList.add('disabled');
            last.classList.remove('btn__nav');
        } else {
            next.classList.remove('disabled');
            next.classList.add('btn__nav');
            last.classList.remove('disabled');
            last.classList.add('btn__nav');
        }
    }
    pagin.innerHTML = page;
}

function numPages() {
    if(window.innerWidth > 880) {
        return Math.ceil(pets.length / perPage1280);
    } else if (window.innerWidth < 880 && window.innerWidth > 605) {
        return Math.ceil(pets.length / perPage768);
    } else if (window.innerWidth < 605) {
        return Math.ceil(pets.length / perPage1320);
    }
}

function addContent(pet){
    const petDiv = document.createElement('div');
    petDiv.classList.add('slider__items');
    petDiv.addEventListener('click', learnMore);
    petDiv.setAttribute('data-petnum', pets.indexOf(pet));
    petDiv.setAttribute('id', `card${pets.indexOf(pet)}`);
    content.append(petDiv);
    const imgBox = document.createElement('div');
    imgBox.classList.add('slider__box');
    const img = document.createElement('img');
    img.setAttribute('src', pet.img);
    img.setAttribute('class', 'slider__img');
    imgBox.append(img);
    petDiv.appendChild(imgBox);
    const petName = document.createElement('p');
    petName.classList.add('slider__text');
    petName.innerHTML = pet.name;
    petDiv.append(petName);
    const btnPet = document.createElement('button');
    btnPet.classList.add('header-content__button', 'slider__btn');
    btnPet.innerHTML = 'Learn more';
    btnPet.setAttribute('id', `btn${pets.indexOf(pet)}`);
    btnPet.setAttribute('data-petnum', pets.indexOf(pet));
    btnPet.addEventListener('click', learnMore)
    petDiv.append(btnPet);
    petDiv.onmouseover = function(){
        this.children[2].style.backgroundColor = '#fddcc4';
        this.children[2].style.border = '1px solid #fddcc4';
    }
    petDiv.onmouseout = function(){
        this.children[2].style.backgroundColor = '#fafafa';
        this.children[2].style.border = '1px solid #F1CDB3';
    }
}

function learnMore() {
    let pet = pets[this.dataset.petnum];

    modalCont.classList.remove('out');
    modal.style.display = "block";
    modalCont.children[0].children[0].setAttribute('src', pet.img);
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

window.onload = function() {
    changePage(1);
};

