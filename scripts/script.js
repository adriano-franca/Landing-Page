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

// Função para ajustar o padding da seção de apresentação
function ajustarPadding() {
  // Obtém a altura do header
  const header = document.querySelector('.header');
  const alturaHeader = header.offsetHeight;
  
  // Aplica o padding-top à seção de apresentação
  const presentationSection = document.querySelector('.presentation-section');
  presentationSection.style.paddingTop = alturaHeader + 'px';
}

// Chama a função ao carregar a página e sempre que a janela for redimensionada
window.addEventListener('load', ajustarPadding);
window.addEventListener('resize', ajustarPadding);


// Seleção dos elementos
const productList = document.getElementById("product-list");
const sortOptions = document.getElementById("sort-options");
// Função para ordenar os produtos
function sortProducts(criteria) {
  const products = Array.from(productList.children);
  // Ordenar com base no critério
  products.sort((a, b) => {
    const priceA = parseFloat(a.dataset.price);
    const priceB = parseFloat(b.dataset.price);
    const ratingA = parseFloat(a.dataset.rating);
    const ratingB = parseFloat(b.dataset.rating);
    if (criteria === "mais-caros") return priceB - priceA;
    if (criteria === "mais-baratos") return priceA - priceB;
    if (criteria === "melhor-avaliados") return ratingB - ratingA;
  });
  // Atualizar a ordem no DOM
  products.forEach((product) => productList.appendChild(product));
}
// Evento de mudança no filtro de ordenação
sortOptions.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  sortProducts(selectedOption);
});



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


