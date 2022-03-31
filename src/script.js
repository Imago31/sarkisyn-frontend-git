/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const level_1 = document.querySelector('.level_1');
const level_2 = document.querySelector('.level_2');
const level_3 = document.querySelector('.level_3');

function level__1() {
    document.location.href = 'game-start.html';
}

function level__2() {
    document.location.href = 'game-start.html';
}

function level__3() {
    document.location.href = 'game-start.html';
}

level_1.addEventListener('click',function(){
    level__1();
});

level_2.addEventListener('click',function(){
    level__2();
});

level_3.addEventListener('click',function(){
    level__3();
});
