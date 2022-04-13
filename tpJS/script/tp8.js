const addi = document.getElementById('addi');
const soustra = document.getElementById('soustra');
const multi = document.getElementById('multi');
const divis = document.getElementById('divis');

addi.addEventListener('click', function onClick(event){
    var nmb1 = document.getElementById('nb1').value;
    var nmb2 = document.getElementById('nb2').value;
    nmb1 = parseInt(nmb1);
    nmb2 = parseInt(nmb2);
    var add = nmb1 + nmb2;
    var resultat = document.getElementById('resultat');
    resultat.innerHTML = ('<p> le resultat est ' + add + '</p>');
});
soustra.addEventListener('click', function onClick(event){
    var nmb1 = document.getElementById('nb1').value;
    var nmb2 = document.getElementById('nb2').value;
    nmb1 = parseInt(nmb1);
    nmb2 = parseInt(nmb2);
    var sub = nmb1 - nmb2;
    var resultat = document.getElementById('resultat');
    resultat.innerHTML = ('<p> le resultat est ' + sub + '</p>');
});
multi.addEventListener('click', function onClick(event){
    var nmb1 = document.getElementById('nb1').value;
    var nmb2 = document.getElementById('nb2').value;
    nmb1 = parseInt(nmb1);
    nmb2 = parseInt(nmb2);
    var mult = nmb1 * nmb2;
    var resultat = document.getElementById('resultat');
    resultat.innerHTML = ('<p> le resultat est ' + mult + '</p>');
});
divis.addEventListener('click', function onClick(event){
    var nmb1 = document.getElementById('nb1').value;
    var nmb2 = document.getElementById('nb2').value;
    nmb1 = parseInt(nmb1);
    nmb2 = parseInt(nmb2);
    var divi = nmb1 / nmb2;
    var resultat = document.getElementById('resultat');
    resultat.innerHTML = ('<p> le resultat est ' + divi + '</p>');
});