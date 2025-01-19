function scrollToElement(elementId){
    const element = document.getElementById(elementId)
    element.scrollIntoView({ behavior: 'smooth'})
}

const animais = [
    { nome: "Cachorros", imagem: "../assets/Foto_Cachorro.jpg" },
    { nome: "Gatos", imagem: "../assets/Foto_Gato.png" },
    { nome: "Aves", imagem: "../assets/Foto_Passaro.webp" },
    { nome: "Peixes", imagem: "../assets/Foto_Peixe.avif" },
    { nome: "Coelhos", imagem: "../assets/Foto_Coelho.avif" },
    { nome: "Tartarugas", imagem: "../assets/Foto_Tartaruga.jpg" },
    { nome: "Cavalos", imagem: "../assets/Foto_Cavalo.jpg" }
];

const catalog = document.getElementById("catalog");

function criarProdutos(lista) {
    lista.forEach(animal => {
        const produto = document.createElement("div");
        produto.classList.add("product");

        produto.innerHTML = `
            <img src="${animal.imagem}" alt="${animal.nome}">
            <p class="product-name">${animal.nome}</p>
            <button class="view-product-btn">Ver Produtos</button>
        `;

        produto.querySelector(".view-product-btn").addEventListener("click", () => {
            alert(`Calma aí jovem, estamos em desenvolvimento ainda. Produto: ${animal.nome}`);
        });

        catalog.appendChild(produto);
    });
}

criarProdutos(animais);

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const scrollAmount = 220;

prevButton.addEventListener("click", () => {
    catalog.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

nextButton.addEventListener("click", () => {
    catalog.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

const commentForm = document.getElementById("comment-form");
const commentsContainer = document.getElementById("comments-container");
const commentText = document.getElementById("comment-text");
const productSelect = document.getElementById("product-select");

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
