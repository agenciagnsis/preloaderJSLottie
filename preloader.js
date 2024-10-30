const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

// Criando o contêiner do Lottie
const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
`;

// Criando o texto de carregamento
const loadingText = document.createElement('p');
loadingText.innerText = 'Carregando, aguarde...';
loadingText.style.cssText = `
    font-size: 1.2rem;
    color: #333;
    margin-top: 20px;
`;

// Adicionando o Lottie e o texto ao overlay
overlay.appendChild(lottieContainer);
overlay.appendChild(loadingText);

document.body.appendChild(overlay);

function hideOverlay() {
    overlay.style.display = 'none';
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://agenciagnsis.github.io/preloaderJSLottie/coracao.json',
    });
}

window.addEventListener('load', hideOverlay);
