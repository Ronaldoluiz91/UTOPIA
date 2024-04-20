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
});





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



//Pagina reserva

function enviarReserva() {

    var nome = document.getElementById('nomeReserva').value;
    var telefone = document.getElementById('telefoneReserva').value;
    var reserva = document.getElementById('reserva').value;
    var quantidade = document.getElementById('quantidade').value;
    var horario = document.getElementById('horarioReserva').value;
    var status = document.getElementById('status')

    var inputDate = document.getElementById('dataReserva');
    // Adicionando um ouvinte de evento 'change' para capturar a mudança de valor
    inputDate.addEventListener('change', function () {
        // Obtendo o valor do input
        var dataReserva = this.value;
    });


    // Função para mostrar o modal de preencha todos os campos
    function mostrarModalPreenchaCampos() {
        document.getElementById('modalPreenchaCampos').style.display = 'block';
    }

    //verifica se todos os campos estão preenchidos
    if (nome === "" || telefone === "" || reserva === "" || quantidade === "" || dataReserva === "" || horario === "") {
        mostrarModalPreenchaCampos();
    } else {

        // Mostrar o loading
        document.getElementById('loading').style.display = 'block';

        document.getElementById('reservaRelatorio').innerHTML = nome
        document.getElementById('telRelatorio').innerHTML = telefone
        document.getElementById('tipoRelatorio').innerHTML = reserva
        document.getElementById('quantRelatorio').innerHTML = quantidade
        document.getElementById('dataRelatorio').innerHTML = dataReserva.value
        document.getElementById('horaRelatorio').innerHTML = horario

        status.style.display = 'block'

        var modalRelatorio = document.getElementById('modal-relatorio')

        setTimeout(function () {
            // Esconder o loading e mostrar o modal
            document.getElementById('loading').style.display = 'none';
            document.getElementById('modal-relatorio').style.display = 'block';
        }, 3000);


        // Limpar os campos após enviar
        document.getElementById('nomeReserva').value = "";
        document.getElementById('telefoneReserva').value = "";
        document.getElementById('reserva').value = "";
        document.getElementById('quantidade').value = "";
        document.getElementById('dataReserva').value = "";
        document.getElementById('horarioReserva').value = "";

    }


}


function fechaModal() {
    var modalRelatorio = document.getElementById('modal-relatorio'); // Definido dentro da função

    modalRelatorio.style.display = 'none';
}

// Função para fechar o modal de preencha todos os campos
function fecharModalPreenchaCampos() {
    document.getElementById('modalPreenchaCampos').style.display = 'none';
}





