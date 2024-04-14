//alert('funcionou')



//MENU DA VERSÃO MOBILE

var btnmostrar = document.getElementById('iconMenu'); // icone  do menu
var menu = document.getElementById('itens'); // menu a ser ocultado e/ou mostrado
var logo = document.getElementById('logotipo'); // logotipo do site
var btnOcultar = document.getElementById('iconClose') // icone fechar do menu


btnmostrar.addEventListener('click', function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'block';
    }

})

btnmostrar.addEventListener('click', function () {
    if (logo.style.display === 'none') {
        logo.style.display = 'block';
    }
    else {
        logo.style.display = 'none';

    }

})

btnOcultar.addEventListener('click', function () {
    menu.style.display = 'none';
    logo.style.display = 'block'
})


// Slider da pagina de abertura pagina Index

function slide1() {
    document.getElementById('img1Carrosel').src = "imagens/utopia6.jpeg";
    setTimeout("slide2()", 3000)
}



function slide2() {
    document.getElementById('img1Carrosel').src = "imagens/utopia2.jpeg";
    setTimeout("slide3()", 3000)
}

function slide3() {
    document.getElementById('img1Carrosel').src = "imagens/utopia1.jpeg";
    setTimeout("slide4()", 3000)
}

function slide4() {
    document.getElementById('img1Carrosel').src = "imagens/utopia5.jpeg";
    setTimeout("slide5()", 3000)
}



function slide5() {
    document.getElementById('img1Carrosel').src = "imagens/group-cocktail-shot.jpg";
    setTimeout("slide1()", 3000)
}



// slider- cardapio pagina index

var slides = document.querySelector('.slides');
var slide = document.querySelectorAll('.slide');
var intervalTime = 3000; // Tempo de troca de slide
var slideIndex = 0;

var nextSlide = () => {
    slideIndex++;
    if (slideIndex === slide.length) {
        slideIndex = 0;
    }
    updateSlide();
}

var updateSlide = () => {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, intervalTime);



// CLICK DAS IMAGENS PAGINA INDEX

var imagem = document.getElementById('imagemGaleria1');
var imagem2 = document.getElementById('imagemGaleria2');
var imagem3 = document.getElementById('imagemGaleria3');
var imagem4 = document.getElementById('imagemGaleria4');
var imagem5 = document.getElementById('imagemGaleria5');
var imagem6 = document.getElementById('imagemGaleria6');

imagem.addEventListener('click', () => {
  imagem.classList.toggle('zoom');
});

imagem2.addEventListener('click', () => {
    imagem2.classList.toggle('zoom');
  });

  imagem3.addEventListener('click', () => {
    imagem3.classList.toggle('zoom');
  });

  imagem4.addEventListener('click', () => {
    imagem4.classList.toggle('zoom');
  });

  imagem5.addEventListener('click', () => {
    imagem5.classList.toggle('zoom');
  });

  imagem6.addEventListener('click', () => {
    imagem6.classList.toggle('zoom');
  });



//Modal pagina reserva 

var reserva = document.getElementById('confirm-reserva'); //botao enviar reserva
var modal = document.getElementsByClassName('modal-container') //modal a ser exibido



reserva.onclick = function (){
    modal.style.display =='block'
}



