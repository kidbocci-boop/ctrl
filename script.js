// Ano dinâmico no rodapé
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Menu Responsivo Mobile
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Fechar menu ao clicar num link
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
}

// Header com efeito de sombra ao fazer scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Funcionalidade da Janela Modal do Portfólio
function openProject(imageSrc) {
    const modal = document.getElementById('projectModal');
    const projectImage = document.getElementById('projectImage');
    
    if (modal && projectImage) {
        projectImage.src = imageSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita o scroll do fundo
    }
}

function closeProject() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Fechar modal ao clicar fora da janela do projeto
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProject();
    }
});

// Submissão do Formulário de Contacto
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Obrigado pelo contacto, ${name}! A tua mensagem foi enviada com sucesso. Entraremos em contacto brevemente.`);
        document.getElementById('contactForm').reset();
    }
}