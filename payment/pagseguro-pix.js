document.addEventListener("DOMContentLoaded", function () {
  // Selecione o formulário pelo ID
   const form = document.getElementById("form-checkout");
  
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Obtenha os valores dos campos de entrada
        const firstName = document.getElementById("form-checkout__payerFirstName").value;
        const lastName = document.getElementById("form-checkout__payerLastName").value;
        const email = document.getElementById("form-checkout__email").value;
        const identificationType = document.getElementById("form-checkout__identificationType").value;
        const identificationNumber = document.getElementById("form-checkout__identificationNumber").value;
        const transactionAmount = document.getElementById("transactionAmount").value;
        const description = document.getElementById("description").value;
  
        // Crie um objeto com os dados a serem enviados à API
        const requestData = {
            payerFirstName: firstName,
            payerLastName: lastName,
            email: email,
            identificationType: identificationType,
            identificationNumber: identificationNumber,
            transactionAmount: transactionAmount,
            description: description
        };
  
        // Realize a solicitação HTTP para a API do PagSeguro usando uma biblioteca como axios ou fetch
        // Substitua a URL abaixo pela URL correta da API do PagSeguro
        const apiUrl = "https://sandbox.api.pagseguro.com/orders";
        fetch(apiUrl, {
            //mode: 'no-cors',
            method: "POST",
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer 4B33935AF83F48369F8B8E10E71A8011',
              'content-type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
            // Lide com a resposta da API aqui
            console.log(data);
        })
        .catch(error => {
            // Lide com erros de solicitação aqui
            console.error(error);
        });
    });
});