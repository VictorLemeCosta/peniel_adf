let preco = 0;
let nomeProduto;
let idProduto;

function pagarPix() {
  const botaoPix = document.getElementById("botao-pix");

  const produto = botaoPix.getAttribute("data-produto");

  switch (produto) {
    case "camisa-bege-leao":
      preco = 9000;
      nomeProduto = "camisa-bege-leao",
      idProduto = "camisa-000001"
      break;
    case "camisa-verde-leao":
      preco = 9000;
      nomeProduto = "camisa-verde-leao",
      idProduto = "camisa-000002"
      break;
    case "camisa-peniel":
      preco = 9000;
      nomeProduto = "camisa-peniel",
      idProduto = "camisa-000003"
      break;
    case "camisa-cristocentrico":
      preco = 9000;
      nomeProduto = "camisa-cristocentrico",
      idProduto = "camisa-000004"
      break;
    case "ecobag-peniel":
      preco = 4000;
      nomeProduto = "ecobag-peniel",
      idProduto = "ecobag-000001"
      break;
    case "ecobag-leao":
      preco = 4000;
      nomeProduto = "ecobag-leao",
      idProduto = "ecobag-000002"
      break;
    case "sticker-peniel":
      preco = 1500;
      nomeProduto = "sticker-peniel",
      idProduto = "sticker-000001"
      break;
    case "moletom-peniel":
      preco = 16000;
      nomeProduto = "moletom-peniel",
      idProduto = "moletom-000001"
      break;
  }

  console.log("Produto", nomeProduto, " Preço do produto:", preco);
}

function enviaForm() {
  document.addEventListener("DOMContentLoaded", initializeForm);
}

function initializeForm() {
  const form = document.getElementById("form-checkout");
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();

  const reference_id = idProduto;
  const firstName = getValueById("form-checkout__payerFirstName");
  const email = getValueById("form-checkout__email");
  const identificationNumber = getValueById("form-checkout__identificationNumber");
  const address = getValueById("address");
  const addressNumber = getValueById("addressNumber");
  const addressComplement = getValueById("addressComplement");
  const postal_code = getValueById("postal_code");
  const addressLocality = getValueById("addressLocality");
  const addressCity = getValueById("addressCity");
  const addressCountry = "BRA";
  const phoneValue = document.getElementById("phone").value;
  const phone = phoneValue.substring(3, 10);
  const phoneAreaValue = document.getElementById("phone").value;
  const phoneArea = phoneAreaValue.substring(0, 2);
  const phoneCountry = "55";
  const phoneType = "MOBILE";
  const state = document.getElementById("state").value;
  const quantidade = document.getElementById("quantity").value;

  const data = new Date();
  const dia = String(data.getDate() + 1).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  let dataAmanha = `${dia}/${mes}/${ano}`;

  const requestData = {
    reference_id: reference_id,
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
        },
      ],
    },
    items: [
      {
        name: nomeProduto,
        quantity: quantidade,
        unit_amount: preco,
      },
    ],
    qr_code: [
      {
        amount: {
          value: preco * quantidade,
        },
        //expiration_date: dataAmanha,
      },
    ],
    shipping: {
      address: {
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
    notification_urls: ["https://victorlemecosta.github.io/peniel_adf/"],
  };

  console.log(requestData);

  sendRequest(requestData);
}

function getValueById(id) {
  return document.getElementById(id).value;
}

function sendRequest(requestData) {
  fetch('https://sandbox.api.pagseguro.com/orders', {
    method: "POST",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 4B33935AF83F48369F8B8E10E71A8011',
      "content-type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then(response => response.json())
    .then(data => {
      const qrcodeDiv = document.getElementById('qrcode');
      qrcodeDiv.innerHTML = `<img src="${data.qr_code}" alt="QR Code">`;
      console.log(data);
    })
    .catch(error => {
      alert("Erro", error);
      console.error('Erro ao enviar a requisição:', error);
    });
}
