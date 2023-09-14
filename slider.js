$(document).ready(function() {
    let startX = 0;
    let endX = 0;
  
    // Captura os eventos de toque na seção de imagens
    $(".secao-imagens").on("touchstart", function(event) {
      startX = event.touches[0].clientX;
    });
  
    $(".secao-imagens").on("touchend", function(event) {
      endX = event.changedTouches[0].clientX;
  
      // Calcula a diferença entre o início e o fim do toque
      const diffX = startX - endX;
  
      // Se o deslize for maior que 50 pixels, avance ou volte o slider
      if (diffX > 50) {
        // Avança o slider
        nextSlide();
      } else if (diffX < -50) {
        // Volta o slider
        prevSlide();
      }
    });
  
    // Função para avançar para o próximo slide
    function nextSlide() {
      const currentSlide = $(".slides .input:checked");
      const nextSlide = currentSlide.next(".input");
  
      if (nextSlide.length > 0) {
        nextSlide.prop("checked", true);
      } else {
        // Se estiver no último slide, volte para o primeiro
        $(".input:first").prop("checked", true);
      }
  
      // Atualize os estilos dos labels
      updateLabelStyles();
    }
  
    // Função para voltar para o slide anterior
    function prevSlide() {
      const currentSlide = $(".slides .input:checked");
      const prevSlide = currentSlide.prev(".input");
  
      if (prevSlide.length > 0) {
        prevSlide.prop("checked", true);
      } else {
        // Se estiver no primeiro slide, vá para o último
        $(".input:last").prop("checked", true);
      }
  
      // Atualize os estilos dos labels
      updateLabelStyles();
    }
  
    // Função para atualizar os estilos dos labels
    function updateLabelStyles() {
      $(".manual-btn").removeClass("checked");
      $(".input:checked + .manual-btn").addClass("checked");
    }
  
    // Configurar um temporizador para avançar automaticamente os slides
    let slideInterval = setInterval(nextSlide, 2500);
  
    // Pausar o temporizador quando o usuário tocar na seção de imagens
    $(".secao-imagens").on("touchstart", function() {
      clearInterval(slideInterval);
    });
  
    // Retomar o temporizador quando o usuário soltar a seção de imagens
    $(".secao-imagens").on("touchend", function() {
      slideInterval = setInterval(nextSlide, 2500);
    });
  });
  