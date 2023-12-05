document.addEventListener('DOMContentLoaded',function() {
    // Alterações em JavaScript no botão de abrir portfolio
    icon_selecionar = document.querySelector('.selecionar_plants')
    clicado = 0
    box = 0
    remove = 0
    main = document.querySelector('main')
    port = document.createElement('section');
    port.innerHTML = 'Abrir Portfolio?';


    icon_selecionar.addEventListener('click', function() {
        if(clicado === 0){
            clicado = 1;
            icon_selecionar.src='img/check.png';
        }  
        else if(clicado === 1){
            icon_selecionar.src='img/add.png';
            clicado = 0;
        }
        if(clicado ===1 && box ===0){
            boxPortfolio = document.createElement('div');
            boxPortfolio.classList.add('box-portfolio');
            boxPortfolio.textContent = 'Abrir Portfolio?';
            // Aplicando as especificações de estilo
            boxPortfolio.style.display = 'flex';
            boxPortfolio.style.flexDirection = 'row';
            boxPortfolio.style.justifyContent = 'center';
            boxPortfolio.style.border = '0.3rem solid black';
            boxPortfolio.style.margin = '0.5rem';
            boxPortfolio.style.padding = '0.75rem';
            boxPortfolio.style.alignItems = 'center';
            boxPortfolio.style.width = '70%';
            boxPortfolio.style.backgroundColor = '#A1A1A1';
            boxPortfolio.style.transform = 'translateX(10%)';

            // Aplicando estilizações da fonte
            boxPortfolio.style.textDecoration = 'none';
            boxPortfolio.style.color = 'black';
            boxPortfolio.style.fontFamily = "'Noto Sans KR', 'Nanum Gothic', sans-serif";
            boxPortfolio.style.fontSize = '1.1rem';
            
            main.appendChild(boxPortfolio);
            // Botão de fechar

            box = 1

            // Criando os botões de sim e não
            const btnSim = document.createElement('button');
            btnSim.textContent = 'Sim';
            btnSim.fontFamily = "'Noto Sans KR', 'Nanum Gothic', sans-serif";
            btnSim.style.marginLeft = '0.5rem'; // Espaçamento entre botões
            btnSim.style.marginRight = '1rem'; // Espaçamento entre botões
            btnSim.style.padding = '0.5rem 1rem'; // Espaçamento interno do botão
            btnSim.style.backgroundColor = '#007D00';
            btnSim.style.color = 'white';
            btnSim.style.border = 'none';
            btnSim.style.borderRadius = '0.3rem';
            btnSim.style.cursor = 'pointer';

            const btnNao = document.createElement('button');
            btnNao.textContent = 'Não';
            btnNao.fontFamily = "'Noto Sans KR', 'Nanum Gothic', sans-serif";
            btnNao.style.padding = '0.5rem 1rem';
            btnNao.style.backgroundColor = '#A1521D';
            btnNao.style.color = 'white';
            btnNao.style.border = 'none';
            btnNao.style.borderRadius = '0.3rem';
            btnNao.style.cursor = 'pointer';

            // Adicionando os botões ao boxPortfolio
            boxPortfolio.appendChild(btnSim);
            boxPortfolio.appendChild(btnNao);

            btnSim.addEventListener('click', function() {
                window.location.href = 'portfolio.html'; 
            });

            btnNao.addEventListener('click', function() {
                boxPortfolio.remove();
                box = 0
            });
        }
    })
})