'use strict'

let open = false
let slideCounter = 1;
let isMobile = false;

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = !open;
    toggleMenu();
})

document.querySelector('#botao1').addEventListener('click', e => {
    open = false;
    toggleMenu();
    trocarImagem();
})

document.querySelector('#botao2').addEventListener('click', e => {
    open = false;
    toggleMenu();
    trocarImagem();
})

document.querySelector('#botao3').addEventListener('click', e => {
    open = false;
    toggleMenu();
    trocarImagem();
})

document.querySelector('#botao4').addEventListener('click', e => {
    open = false;
    toggleMenu();
    trocarImagem();
})

function toggleMenu() {
    if (open) {
        /*Abre o menu*/
        document.querySelector('#menu').style.visibility = 'visible';
        document.querySelector('#menu').style.opacity = '1';
        document.querySelector('#menu').style.transition = "opacity .7s ease-in-out";
        isMobile = true
        console.log("teste1", isMobile);
        return;
    } 
    
    if (isMobile == true) {
        /*Fecha o menu*/
        document.querySelector('#menu').style.opacity = '0';
        document.querySelector('#menu').style.transition = "opacity .7s ease-in-out";
        setTimeout(function(){
            document.querySelector('#menu').style.visibility = 'hidden';
        }, 700);
        console.log("teste2", isMobile)
    } 
    
}

/*function changeImage(a) {
    document.getElementById("#btnClose").src=a;
}*/

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40)
    {
        document.getElementById("topo").style.height = "60px";
              
        document.getElementById("logo").style.width = "45px";

        document.getElementById("topo").style.transition = ".5s";

        document.getElementById("logo").style.transition = ".5s";

        document.getElementById("menu").style.top = "60px";

        document.getElementById("menu").style.transition = ".5s";
    } 
    else {
        document.getElementById("topo").style.height = "100px";
                      
        document.getElementById("logo").style.width = "80px";

        document.getElementById("menu").style.top = "100px";

        document.getElementById("menu").style.transition = ".5s"
    }
}

const btnImage = document.getElementById("btnMenu");

function trocarImagem() {
    if (open == false) {
        btnImage.src = "./assets/menu-fechado.png";
        return;
    } else {
        btnImage.src = "./assets/menu-aberto.png";
        return;
    }
  }

document.getElementById("btnMenu").addEventListener("click", trocarImagem);