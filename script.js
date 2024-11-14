 // 2. Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();  // Impede o envio padrão do formulário

        // Obtém os dados do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Cria a mensagem de confirmação
        const messageContent = `
            Obrigado, ${name}!<br>
            Sua mensagem foi enviada com sucesso.<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Mensagem:</strong> ${message}
        `;
        
        // Exibe a mensagem de confirmação
        confirmationMessage.innerHTML = messageContent;
        confirmationMessage.style.display = 'block';

        // Reseta o formulário
        contactForm.reset();
    });
    // 3. Avaliação de Atendimento (Estrelas)
    const stars = document.querySelectorAll('#starRating .star');
    const ratingMessage = document.getElementById('ratingMessage');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('mouseover', () => highlightStars(star.dataset.star));
        star.addEventListener('click', () => setRating(star.dataset.star));
        star.addEventListener('mouseout', () => resetStars());
    });

    function highlightStars(rating) {
        stars.forEach(star => {
            star.style.color = star.dataset.star <= rating ? '#FFD700' : '#888888';  // Dourado para as estrelas destacadas
        });
    }

    function setRating(rating) {
        selectedRating = rating;
        ratingMessage.textContent = `Obrigado pela sua avaliação de ${rating} estrelas!`;
        highlightStars(rating);  // Destaca as estrelas após a seleção
    }

    function resetStars() {
        stars.forEach(star => {
            star.style.color = star.dataset.star <= selectedRating ? '#FFD700' : '#888888';  // Mantém as estrelas destacadas
        });
    }

