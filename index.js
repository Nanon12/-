var mainBtn = document.querySelector('button');
var paranja = document.querySelector('section')

mainBtn.addEventListener('click', function(){
    paranja.style = 'display: block;';
});

var clous = document.querySelector('span');

clous.addEventListener('click', function(){
    var paranja = document.querySelector('section')
    paranja.style = ('display: none;');
});