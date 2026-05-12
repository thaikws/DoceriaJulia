document
.getElementById("form-encomenda")
.addEventListener("submit", function(e){

    e.preventDefault();

    let nome =
    document.getElementById("nome").value;

    let whatsapp =
    document.getElementById("whatsapp").value;

    let produto =
    document.getElementById("produto").value;

    let obs =
    document.getElementById("obs").value;

    let mensagem =
`Olá! Meu nome é ${nome}

Produto: ${produto}

WhatsApp: ${whatsapp}

Observações: ${obs}`;

    let url =
`https://wa.me/5511921013005?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

});
