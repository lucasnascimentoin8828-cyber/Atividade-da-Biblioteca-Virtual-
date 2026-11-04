const busca = document.getElementById("busca");
const cards = document.querySelectorAll(".card");

busca.addEventListener("input", function() {

    const texto = busca.value.toLocaleLowerCase();

    cards.forEach(function(card) {

        const nome = card.textContent.toLocaleLowerCase();

        if (nome.includes(texto)) {
            card.hidden = false;
        } else {
            card.hidden = true;
        }

    });

});


const formulario = document.getElementById("formulario");
const personagem = document.getElementById("personagem");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (personagem.value.trim().length < 3) {

        mensagem.textContent = "Digite um nome com pelo menos 3 caracteres.";

    } else {

        mensagem.textContent = "Personagem indicado com sucesso!";

        formulario.reset();

    }

});
