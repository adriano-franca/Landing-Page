function scrollToElement(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
      const offset = document.querySelector('.header').offsetHeight; // Altura do header
      const elementPosition = element.offsetTop - offset; // Calcula posição com ajuste
      window.scrollTo({
          top: elementPosition,
          behavior: 'smooth' // Scroll suave
      });
  }
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

const commentForm = document.getElementById("comment-form");
const commentName = document.getElementById("comment-name");
const commentText = document.getElementById("comment-text");
const productSelect = document.getElementById("product-select");
const commentsContainer = document.getElementById("comments-container");

// Evento para adicionar novo comentário
commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Valores do formulário
    const commentContent = commentText.value;
    const selectedProduct = productSelect.value;
    const nameContent = commentName.value;

    // Criar elemento de comentário
    const newComment = document.createElement("div");
    newComment.classList.add("comment");

    newComment.innerHTML = `
        <img src="../assets/Foto_UserUndefined.jpg" alt="Usuário">
        <div class="comment-details">
            <h4> ${nameContent}</h4>
            <span>Produto: ${selectedProduct}</span>
            <p>${commentContent}</p>
        </div>
    `;

    // Adicionar o novo comentário ao container
    commentsContainer.appendChild(newComment);

    // Limpar o formulário
    commentName.value = "";
    commentText.value = "";
    productSelect.value = "";
});
