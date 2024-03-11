var btnsimexame = document.querySelector('#simFomularioExame');
var btnnaoexame = document.querySelector('#naoFormularioExame');
var formExame = document.querySelector('.formExame');

btnsimexame.addEventListener('click', function(){

    if(formExame.style.display === 'block' && btnsimexame == false){
        formExame.style.display = 'none';
    }else {
        formExame.style.display = 'block';
    }

});

btnnaoexame.addEventListener('click', function(){

    if(formExame.style.display === 'none' && btnsimexame == true){
        formExame.style.display = 'block';
    }else {
        formExame.style.display = 'none';
    }

});

var btnsimremedio = document.querySelector('#simFomularioRC');
var btnnaoremedio = document.querySelector('#naoFomularioRC');
var formremedio = document.querySelector('.formRemedios');

btnsimremedio.addEventListener('click', function(){

    if(formremedio.style.display === 'block' && btnsimremedio == false){
        formremedio.style.display = 'none';
    }else {
        formremedio.style.display = 'block';
    }

});

btnnaoremedio.addEventListener('click', function(){

    if(formremedio.style.display === 'none' && btnsimremedio == true){
        formremedio.style.display = 'block';
    }else {
        formremedio.style.display = 'none';
    }

});

var btnsimcirurgia = document.querySelector('#simFormularioCirurgia');
var btnnaocirurgia = document.querySelector('#naoFomularioCirurgia');
var formcirurgia = document.querySelector('.formCirurgias');

btnsimcirurgia.addEventListener('click', function(){

    if(formcirurgia.style.display === 'block' && btnsimcirurgia == false){
        formcirurgia.style.display = 'none';
    }else {
        formcirurgia.style.display = 'block';
    }

});

btnnaocirurgia.addEventListener('click', function(){

    if(formcirurgia.style.display === 'none' && btnsimcirurgia == true){
        formcirurgia.style.display = 'block';
    }else {
        formcirurgia.style.display = 'none';
    }

});

var btnsimalergia = document.querySelector('#simFomularioAlergia');
var btnnaoalergia = document.querySelector('#naoFomularioAlergia');
var formalergia = document.querySelector('.formAlergias');

btnsimalergia.addEventListener('click', function(){

    if(formalergia.style.display === 'block' && btnsimalergia == false){
        formalergia.style.display = 'none';
    }else{
        formalergia.style.display = 'block';
    }

});

btnnaoalergia.addEventListener('click', function(){

    if(formalergia.style.display === 'none' && btnsimalergia == true){
        formalergia.style.display = 'block';
    }else{
        formalergia.style.display = 'none';
    }

});

var btnsimAMedic = document.querySelector('#simFormularioAM');
var btnnaoAmedic = document.querySelector('#naoFormularioAM');
var formAMedic = document.querySelector('.formAlergiaM');

btnsimAMedic.addEventListener('click', function(){

    if(formAMedic.style.display === 'blobk' && btnsimAMedic == false){
        formAMedic.style.display = 'none';
    }else{
        formAMedic.style.display = 'block';
    }

});

btnnaoAmedic.addEventListener('click', function(){

    if(formAMedic.style.display === 'none' && btnsimAMedic == true){
        formAMedic.style.display = 'blobk';
    }else{
        formAMedic.style.display = 'none';
    }

});