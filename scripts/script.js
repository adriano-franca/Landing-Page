
// Função pra fazer os botoes da nav
function scrollToElement(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
      const offset = document.querySelector('.header').offsetHeight; 
      const elementPosition = element.offsetTop - offset; 
      window.scrollTo({
          top: elementPosition,
          behavior: 'smooth' 
      });
  }
}

// Função para ajustar o padding da seção de apresentação
function ajustarPadding() {
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
  products.sort((a, b) => {
    const priceA = parseFloat(a.dataset.price);
    const priceB = parseFloat(b.dataset.price);
    const ratingA = parseFloat(a.dataset.rating);
    const ratingB = parseFloat(b.dataset.rating);
    if (criteria === "mais-caros") return priceB - priceA;
    if (criteria === "mais-baratos") return priceA - priceB;
    if (criteria === "melhor-avaliados") return ratingB - ratingA;
  });
  products.forEach((product) => productList.appendChild(product));
}
// Evento de mudança no filtro de ordenação
sortOptions.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  sortProducts(selectedOption);
});

// Botao pra adicionar ao carrinho
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Calma aí jovem, estamos em desenvolvimento ainda.');
  });
});

// Setas pra passar o carrossel 
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const scrollAmount = 220; 
prevButton.addEventListener('click', () => {
  catalog.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
nextButton.addEventListener('click', () => {
  catalog.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Botao de ver mais sobre os animais
const viewProductButtons = document.querySelectorAll('.view-product-btn');
viewProductButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Calma aí jovem, estamos em desenvolvimento ainda.');
  });
});

// Evento para adicionar novo comentário
const commentForm = document.getElementById("comment-form");
const commentName = document.getElementById("comment-name");
const commentText = document.getElementById("comment-text");
const productSelect = document.getElementById("product-select");
const commentsContainer = document.getElementById("comments-container");
commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const commentContent = commentText.value;
    const selectedProduct = productSelect.value;
    const nameContent = commentName.value;

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

    commentsContainer.appendChild(newComment);
    commentName.value = "";
    commentText.value = "";
    productSelect.value = "";
    
});


