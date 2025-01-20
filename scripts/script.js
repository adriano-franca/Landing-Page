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


