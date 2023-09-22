<?php
$curl = curl_init();

    $url_ambiente == '1';

    if($url_ambiente == '1'){
        $url_transacao = 'https://sandbox.api.pagseguro.com/orders'; //TESTES
    } else {
        $url_transacao = 'https:// api.pagseguro.com/orders': //PRODUCAO
    }

    //ID da transacao (pode ser o ID do seu banco de dados)
    $dados["reference_id"] = "123";

    //DADOS CLIENTE
    $dados["customer"]["name"] = "Jose da silva";
    $dados["customer"]["email"] = "teste@teste.com";
    $dados["customer"]["tax_id"] = "12345678909";

    //TELEFONE CLIENTE
    $dados["customer"]["phones"][0]["country"] = "55";
    $dados["customer"]["phones"][0]["area"] = "11";
    $dados["customer"]["phones"][0]["number"] = "947461301";
    $dados["customer"]["phones"][0]["type"] = "MOBILE";

    //PRODUTOS
    $dados["items"][0]["name"] = "nome do item";
    $dados["items"][0]["quantity"] = "1";
    $dados["items"][0]["unit_amount"] = "500";

    //qrcode
    $dados["qr_codes"][0]["amount"]["value"] = "500";

    //ENDERECO CLIENTE

    $dados["shipping"]["address"]["street"] = "Avenida Brigadeiro Faria Lima";
    $dados["shipping"]["address"]["number"] = "123";
    $dados["shipping"]["address"]["complement"] = "test";
    $dados["shipping"]["address"]["lacality"] = "Sao paulo";
    $dados["shipping"]["address"]["city"] = "Pinheiros";
    $dados["shipping"]["address"]["region_code"] = "SP";
    $dados["shipping"]["address"]["country"] = "BRA";
    $dados["shipping"]["address"]["postal_code"] = "01452002";

    //URL DE NOTIFICACAO
    $dados["notification_urls"][0] = "https://meusite.com/notificacoes";

    curl_setopt_array($curl, array (
        CURLOPT_URL => $url_transacao,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode($dados),
        CURLOPT_HTTPHEADER => array(
            'contetn-type: application/json',
            'Authorization: Bearer 4B33935AF83F48369F8B8E10E71A8011'
        
        ),
        ));
        $response = curl_exec($curl);
        $resultado = json_decode($response);
        //var_dump($response);
        //echo '<br><br>';

        foreach($resultado->qr_codes as $linhas){
            echo $linhas->text;
            foreach($linhas->links as $url){
                if($url -> rel == "QRCODE.PNG"){
                    echo '<img src="'.$url->href.'"/>';
                }
            }
        }

curl_close($curl);
?>