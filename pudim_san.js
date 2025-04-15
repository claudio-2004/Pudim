document.addEventListener('DOMContentLoaded', function() {
    // 1. Criação da estrutura do pudim
    const pudimContainer = document.createElement('div');
    pudimContainer.id = 'pudim-container';
    
    const pudim = document.createElement('div');
    pudim.id = 'pudim';
    
    const counter = document.createElement('div');
    counter.id = 'counter';
    counter.textContent = 'PUDIM!!!!: 0';

    // 2. Função de posicionamento responsivo
    function updatePudimPosition() {
        const footer = document.querySelector('footer');
        const footerHeight = footer.offsetHeight;
        const screenWidth = window.innerWidth;
        
        // Ajustes para mobile
        if (screenWidth <= 768) {
            pudimContainer.style.bottom = `${footerHeight + 20}px`;
            pudimContainer.style.right = '10px';
            pudim.style.width = '80px';
            pudim.style.height = '80px';
            counter.style.fontSize = '14px';
        } else {
            pudimContainer.style.bottom = `${footerHeight + 40}px`;
            pudimContainer.style.right = '20px';
            pudim.style.width = '100px';
            pudim.style.height = '100px';
            counter.style.fontSize = '16px';
        }
    }

    // 3. Adiciona elementos ao DOM
    pudimContainer.appendChild(pudim);
    pudimContainer.appendChild(counter);
    document.body.appendChild(pudimContainer);

    // 4. Estilos dinâmicos com responsividade
    const style = document.createElement('style');
    style.textContent = `
        #pudim-container {
            position: fixed;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
        }
        #pudim {
            background-image: url('pudim.png');
            background-size: contain;
            background-repeat: no-repeat;
            transition: transform 0.2s;
        }
        #counter {
            text-align: center;
            font-family: Verdana;
            color: #61370F;
            margin-top: 5px;
            user-select: none;
        }
        
        @media (max-width: 480px) {
            #pudim-container {
                right: 5px !important;
            }
            #counter {
                font-size: 12px !important;
            }
        }
    `;
    document.head.appendChild(style);

    // 5. Lógica de interação melhorada
    let caricias = 0;
    const mensagens = ["Nhami-nhami! 😋", "Obrigado! 😊", "Mais carinho! 🥺", "S2 💖"];
    
    function handleInteraction() {
        caricias++;
        counter.textContent = `PUDIM!!!!: ${caricias}`;
        
        // Animação melhorada
        pudim.style.transform = 'scale(0.9)';
        setTimeout(() => {
            pudim.style.transform = 'scale(1)';
        }, 200);
        
        // Feedback visual
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        counter.style.color = `hsl(${Math.random() * 360}, 70%, 45%)`;
        console.log(mensagemAleatoria);
    }

    // 6. Event listeners para diferentes dispositivos
    pudim.addEventListener('click', handleInteraction);
    pudim.addEventListener('touchstart', function(e) {
        e.preventDefault(); // Previne double tap zoom
        handleInteraction();
    });

    // 7. Atualizações iniciais e listeners
    updatePudimPosition();
    window.addEventListener('resize', updatePudimPosition);
    window.addEventListener('orientationchange', updatePudimPosition);
});