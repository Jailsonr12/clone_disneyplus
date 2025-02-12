document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelectorAll("[data-tab-button]");
    const questions = document.querySelectorAll("[data-faq-question]");

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbbas();
            aba.classList.add("shows__list--is-active");
            removeBotaoAtivo();
            botao.target.classList.add("shows__tabs__button--is-active");
        });
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", abreOuFechaResposta);
    }
});
function abreOuFechaResposta(element) {
    const classe = "faq__questions__item--is-open";
    const elementoPai = element.target.parentNode;
    elementoPai.classList.toggle(classe);
}
function removeBotaoAtivo() {
    const button = document.querySelectorAll("[data-tab-button]");

    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove("shows__tabs__button--is-active");
    }
}

function escondeTodasAbbas() {
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove("shows__list--is-active");
    }
}
