document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Obtém o valor inserido no campo de pesquisa e converte para minúsculas
        var searchTerm = document.getElementById('query').value.toLowerCase();

        // Verifica se o termo de pesquisa corresponde a "orquídea" ou suas variações
        if (searchTerm.includes('orquidea') || searchTerm.includes('orquídea')) {
            window.location.href = 'plants.html'; // Redireciona para outra página
        } else {
            // Se não corresponder a "orquídea" ou suas variações, continua com o envio padrão do formulário
            this.submit();
        }
    });

})