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
        link.setAttribute("href", "https://wa.me/5511947461301/?text=Quero%20comprar%20uma%20camisa%20peniel%20branca%20tamanho:%20PP")
        console.log(link.href)
    } if (tamanho2.checked === true){
        link.setAttribute("href", "https://wa.me/5511947461301/?text=Quero%20comprar%20uma%20camisa%20peniel%20branca%20tamanho:%20P")
        console.log(link.href)
    } if (tamanho3.checked === true){
        link.setAttribute("href", "https://wa.me/5511947461301/?text=Quero%20comprar%20uma%20camisa%20peniel%20branca%20tamanho:%20M")
        console.log(link.href)
    } if (tamanho4.checked === true){
        link.setAttribute("href", "https://wa.me/5511947461301/?text=Quero%20comprar%20uma%20camisa%20peniel%20branca%20tamanho:%20G")
        console.log(link.href)
    } if (tamanho5.checked === true){
        link.setAttribute("href", "https://wa.me/5511947461301/?text=Quero%20comprar%20uma%20camisa%20peniel%20branca%20tamanho:%20GG")
        console.log(link.href)
    }

    window.location.href = link.href;
});