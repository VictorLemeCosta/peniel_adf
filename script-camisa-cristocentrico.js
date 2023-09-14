const btn = document.querySelector('#send');

btn.addEventListener("click", function(e){
    e.preventDefault();

    const tamanho1 = document.querySelector("#PP");
    const tamanho2 = document.querySelector("#P");
    const tamanho3 = document.querySelector("#M");
    const tamanho4 = document.querySelector("#G");
    const tamanho5 = document.querySelector("#GG");
    const link = document.querySelector('#whatsBtn');

    if (tamanho1.checked === true){
        link.setAttribute("href", "https://wa.me/5511947461301/?text=Quero%20comprar%20uma%20Camisa%20Peniel%20*Branca*%20Cristocêntrico%20tamanho:%20PP")
        console.log(link.href)
    } if (tamanho2.checked === true){
        link.setAttribute("href", "https://wa.me/5511947461301/?text=Quero%20comprar%20uma%20Camisa%20Peniel%20*Branca*%20Cristocêntrico%20tamanho:%20P")
        console.log(link.href)
    } if (tamanho3.checked === true){
        link.setAttribute("href", "https://wa.me/5511947461301/?text=Quero%20comprar%20uma%20Camisa%20Peniel%20*Branca*%20Cristocêntrico%20tamanho:%20M")
        console.log(link.href)
    } if (tamanho4.checked === true){
        link.setAttribute("href", "https://wa.me/5511947461301/?text=Quero%20comprar%20uma%20Camisa%20Peniel%20*Branca*%20Cristocêntrico%20tamanho:%20G")
        console.log(link.href)
    } if (tamanho5.checked === true){
        link.setAttribute("href", "https://wa.me/5511947461301/?text=Quero%20comprar%20uma%20Camisa%20Peniel%20*Branca*%20Cristocêntrico%20tamanho:%20GG")
        console.log(link.href)
    }

    window.location.href = link.href;
});

// Captura todos os radio buttons e labels
const radioButtons = document.querySelectorAll('.input');
const labels = document.querySelectorAll('.manual-btn');

// Adiciona um ouvinte de evento para cada radio button
radioButtons.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    // Remove a classe 'checked' de todos os labels
    labels.forEach((label) => {
      label.classList.remove('checked');
    });

    // Adiciona a classe 'checked' ao label correspondente ao radio button marcado
    labels[index].classList.add('checked');
  });
});

setInterval(function() {
  document.getElementById("radio" + slideCounter).checked = true;
  updateLabelStyles(); // Chamando a função para atualizar os estilos dos labels
  slideCounter++;

  if (slideCounter > 2) {
      slideCounter = 1;
  }
}, 5000);

// Função para atualizar os estilos dos labels
function updateLabelStyles() {
  for (let i = 1; i <= 2; i++) {
      const label = document.querySelector(`.manual-btn.radio${i}`);
      const radio = document.querySelector(`#radio${i}`);
      
      if (radio.checked) {
          label.classList.add("checked");
      } else {
          label.classList.remove("checked");
      }
  }
}

const slider = document.querySelector('.content-slider');

let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const threshold = 50; // Limiar mínimo de movimento do dedo para contar como um swipe

  if (touchStartX - touchEndX > threshold) {
    // Swipe para a esquerda, avance para o próximo slide
    nextSlide();
  } else if (touchEndX - touchStartX > threshold) {
    // Swipe para a direita, retroceda para o slide anterior
    prevSlide();
  }
}

let slidesCounter = 1;

function nextSlide() {
  slidesCounter++;
  if (slidesCounter > 4) {
    slidesCounter = 1;
  }
  updateSlide();
}

function prevSlide() {
  slidesCounter--;
  if (slidesCounter < 1) {
    slidesCounter = 4;
  }
  updateSlide();
}

function updateSlide() {
  for (let i = 1; i <= 4; i++) {
    const label = document.querySelector(`.manual-btn.radio${i}`);
    const radio = document.querySelector(`#radio${i}`);

    if (i === slideCounter) {
      radio.checked = true;
      label.classList.add('checked');
    } else {
      radio.checked = false;
      label.classList.remove('checked');
    }
  }
}