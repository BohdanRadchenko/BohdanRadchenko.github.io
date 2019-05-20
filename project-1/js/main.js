// 'use strict';

/*progress top bar*/
const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll/windowHight * 100;

    progress.style.width = per + '%';
}
/*3d card transform*/
const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove',startRotate);
    card.addEventListener('mouseout',stopRotate);
}

function startRotate(event) {
    const cardItem = this.querySelector('.card__item');
    const halfHieight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHieight)/4 +'deg) rotateY('+(event.offsetX - halfWidth)/4+'deg)';
}

function stopRotate(event) {
    const cardItem = this.querySelector('.card__item');
    cardItem.style.transform = 'rotate(0)';
}