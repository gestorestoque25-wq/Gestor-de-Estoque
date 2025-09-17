// === Código do modal já existente ===
const modal = document.getElementById('modalEditar');
const fecharBtn = document.getElementById('fecharModal');

function editarProduto() {
    modal.style.display = 'flex';
}

fecharBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// === NOVO: Menu do usuário clicável ===
const fotoUsuario = document.getElementById("fotoUsuario");
const menuUsuario = document.getElementById("menuUsuario");

fotoUsuario.addEventListener("click", () => {
    if (menuUsuario.style.display === "block") {
        menuUsuario.style.display = "none";
    } else {
        menuUsuario.style.display = "block";
    }
});

document.addEventListener("click", (event) => {
    if (!fotoUsuario.contains(event.target) && !menuUsuario.contains(event.target)) {
        menuUsuario.style.display = "none";
    }
});
