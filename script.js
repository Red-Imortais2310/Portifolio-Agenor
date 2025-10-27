document.addEventListener('DOMContentLoaded', () => {

    // 1. Rolagem Suave (Smooth Scrolling) - FUNÇÃO MANTIDA E FUNCIONANDO
    document.querySelectorAll('.smoothscroll[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' 
                });
            }
        });
    });

    // 2. Tratamento do Formulário de Contato: REMOVIDO COMPLETAMENTE.
    // Garantia de que NENHUM JavaScript bloqueie o envio do Netlify.
});