let preco = 0;
let nomeProduto;

function pagarPix() {
  const botaoPix = document.getElementById("botao-pix");

  const produto = botaoPix.getAttribute("data-produto");

  switch (produto) {
    case "camisa-bege-leao":
      preco = 90;
      nomeProduto = "camisa-bege-leao"
      break;
    case "camisa-verde-leao":
      preco = 90;
      nomeProduto = "camisa-verde-leao"
      break;
    case "camisa-peniel":
      preco = 90;
      nomeProduto = "camisa-peniel"
      break;
    case "camisa-cristocentrico":
      preco = 90;
      nomeProduto = "camisa-cristocentrico"
      break;
    case "ecobag-peniel":
      preco = 40;
      nomeProduto = "ecobag-peniel"
      break;
    case "ecobag-leao":
      preco = 40;
      nomeProduto = "ecobag-leao"
      break;
    case "sticker-peniel":
      preco = 15;
      nomeProduto = "sticker-peniel"
      break;
    case "moletom-peniel":
      preco = 160;
      nomeProduto = "moletom-peniel"
      break;
  }

  console.log("Produto", nomeProduto, " Preço do produto:", preco);
}

function form() {
  document.addEventListener("DOMContentLoaded", function () {
    // Selecione o formulário pelo ID
     const form = document.getElementById("form-checkout");
    
    
      form.addEventListener("submit", function (e) {
          e.preventDefault(); // Impede o envio padrão do formulário
  
          // Obtenha os valores dos campos de entrada
          const firstName = document.getElementById("form-checkout__payerFirstName").value;
          const email = document.getElementById("form-checkout__email").value;
          const identificationNumber = document.getElementById("form-checkout__identificationNumber").value;
          const address = document.getElementById("address").value;
          const addressNumber = document.getElementById("addressNumber").value;
          const addressComplement = document.getElementById("addressComplement").value;
          const postal_code = document.getElementById("postal_code").value;
          const addressLocality = document.getElementById("addressLocality").value;
          const addressCity = document.getElementById("addressCity").value;
          const addressCountry = "BRA"
          const phoneInput = document.getElementById("phone");
          const phoneValue = phoneInput.value;
          const phone = phoneValue.substring(3,10);
          const phoneAreaInput = document.getElementById("phone");
          const phoneAreaValue = phoneAreaInput.value;
          const phoneArea = phoneAreaValue.substring(0,2);
          const phoneCountry = "+55"
          const phoneType = "MOBILE"
          const state = document.getElementById("state").value;
          const quantidadeElement = document.getElementById("quantity");
          const quantidade = quantidadeElement.value;
          const data = new Date();
    
          const dia = String(data.getDate()+1).padStart(2,'0');
          const mes = String(data.getMonth()+1).padStart(2,'0');
          const ano = data.getFullYear()

          let dataAmanha = `${dia}/${mes}/${ano}`;

          if (state == "Acre") {
            state = "AC"
          } if (state == "Alagoas") {
            state = "AL"
          } if (state == "Amapá") {
            state = "AP"
          } if (state == "Amazonas") {
            state = "AM"
          } if (state == "Bahia") {
            state = "BA"
          } if (state == "Ceará") {
            state = "CE"
          } if (state == "Espírito Santo") {
            state = "ES"
          } if (state == "Goiás") {
            state = "GO"
          } if (state == "Maranhão") {
            state = "MA"
          } if (state == "Mato Grosso") {
            state = "MT"
          } if (state == "Mato Grosso do Sul") {
            state = "MS"
          } if (state == "Minas Gerais") {
            state = "MG"
          } if (state == "Pará") {
            state = "PA"
          } if (state == "Paraíba") {
            state = "PB"
          } if (state == "Paraná") {
            state = "PR"
          } if (state == "Pernambuco") {
            state = "PE"
          } if (state == "Piauí") {
            state = "PI"
          } if (state == "Rio de Janeiro") {
            state = "RJ"
          } if (state == "Rio Grande do Norte") {
            state = "RN"
          } if (state == "Rio Grande do Sul") {
            state = "RS"
          } if (state == "Rondônia") {
            state = "RO"
          } if (state == "Roraima") {
            state = "RR"
          } if (state == "Santa Catarina") {
            state = "SC"
          } if (state == "São Paulo") {
            state = "SP"
          } if (state == "Sergipe") {
            state = "SE"
          } if (state == "Tocantins") {
            state = "TO"
          } if (state == "Distrito Federal") {
            state = "DF"
          };

          const requestData = {
              reference_id: "ex-000001",
              customer: {
                name: firstName,
                email: email,
                tax_id: identificationNumber,
                phones: [
                  {
                    country: phoneCountry,
                    area: phoneArea,
                    number: phone,
                    type: phoneType,
                  }
                ],
              },

              items: [
                {
                  name: nomeProduto,
                  quantity: quantidade,
                  unit_amount: preco,
                }
              ],

              qr_code: [
                {
                  amount: {
                    value: preco * quantidade,
                  },
                  expiration_date: dataAmanha,
                }
              ],

              shipping: {
                address:{
                  street: address,
                  number: addressNumber,
                  complement: addressComplement,
                  locality: addressLocality,
                  city: addressCity,
                  region_code: state,
                  country: addressCountry,
                  postal_code: postal_code,
                },
              }, 

              notification_urls: [
                "https://victorlemecosta.github.io/peniel_adf/"
              ]
          };
    
          fetch('https://sandbox.api.pagseguro.com/orders', {
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
              alert("Erro", error)
              console.error('Erro ao enviar a requisição:', error);
          });
      });
  });
} 