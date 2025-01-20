function scrollToElement(elementId){
  const element = document.getElementById(elementId)
  element.scrollIntoView({ behavior: 'smooth'})
}

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const scrollAmount = 220; 

prevButton.addEventListener('click', () => {
  catalog.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  catalog.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

const viewProductButtons = document.querySelectorAll('.view-product-btn');
viewProductButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Calma aí jovem, estamos em desenvolvimento ainda.');
  });
});
// Evento para adicionar novo comentário
commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Valores do formulário
    const commentContent = commentText.value;
    const selectedProduct = productSelect.value;

    // Criar elemento de comentário
    const newComment = document.createElement("div");
    newComment.classList.add("comment");

    newComment.innerHTML = `
        <img src="https://via.placeholder.com/50" alt="Usuário">
        <div class="comment-details">
            <h4>Usuário Anônimo</h4>
            <span>Produto: ${selectedProduct}</span>
            <p>${commentContent}</p>
        </div>
    `;

    // Adicionar o novo comentário ao container
    commentsContainer.appendChild(newComment);

    // Limpar o formulário
    commentText.value = "";
    productSelect.value = "";
});
