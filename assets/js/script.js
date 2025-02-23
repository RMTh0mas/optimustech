document.addEventListener("DOMContentLoaded", function() {
    fetch("/vagas.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("vagas").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar a página Sobre:", error));

    fetch("/feedbacks.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("feedbacks").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar a página Sobre:", error));

    fetch("/rodape.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("rodape").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar a página Sobre:", error));
});