document.getElementById('formInscricao').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio real do formulário

    // Simulando o processamento
    const btn = document.querySelector('#formInscricao button');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Atraso de 2 segundos para simular envio para o servidor
    setTimeout(() => {
        const nome = document.getElementById('nomeParticipante').value;
        const msgDiv = document.getElementById('msgInscricao');

        // Esconder o formulário
        document.getElementById('formInscricao').style.display = 'none';

        // Mostrar mensagem
        msgDiv.textContent = `Inscrição confirmada, ${nome}! Verifique seu e-mail para mais detalhes.`;
        msgDiv.style.display = 'block';

        // Restaurar botão (mesmo que escondido)
        btn.textContent = originalText;
        btn.disabled = false;
    }, 2000);
});

// Efeito simples de smooth scroll para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Pega a altura do header fixo para descontar no scroll
        const headerOffset = document.querySelector('.header-centrado').offsetHeight;
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
