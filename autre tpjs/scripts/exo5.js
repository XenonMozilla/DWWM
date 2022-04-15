var un = document.getElementById('un');
var deux = document.getElementById('deux');
var trois = document.getElementById('trois');
var quatre = document.getElementById('quatre');
var cinq = document.getElementById('cinq');
var textArea = document.getElementById('leTexteArea');

un.addEventListener('click', function onClick(event){
    textArea.textContent = '1';
});

deux.addEventListener('click', function onClick(event){
    textArea.textContent = '2';
});

trois.addEventListener('click', function onClick(event){
    textArea.textContent = '3';
});

quatre.addEventListener('click', function onClick(event){
    textArea.textContent = '4';
});

cinq.addEventListener('click', function onClick(event){
    textArea.textContent = '5';
});