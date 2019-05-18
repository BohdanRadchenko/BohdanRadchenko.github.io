'use strict';

const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(event) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll/windowHight * 100;

    progress.style.width = per + '%';
}