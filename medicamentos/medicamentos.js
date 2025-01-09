const logo = document.querySelector('.logo img');
logo.addEventListener('mouseover', () => {
    logo.style.transition = 'transform 0.5s';
    logo.style.transform = 'rotate(360deg)';
});
logo.addEventListener('mouseout', () => {
    logo.style.transform = 'rotate(0deg)';
});

const boxes = document.querySelectorAll(".caixas .box");
boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "#4CAF50"; 
        box.style.transform = "scale(1.05)"; 
    });
    box.addEventListener("mouseout", () => {
        box.style.backgroundColor = "#64da64"; 
        box.style.transform = "scale(1)";
    });
});

const buyButtons = document.querySelectorAll(".produto button");
buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Produto adicionado ao carrinho com sucesso!");
    });
});
