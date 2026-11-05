
// MENU RESPONSIVO

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const aberto = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", aberto);

    menuToggle.innerHTML = aberto ? "✕" : "☰";

});


// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = "☰";

    });

});


// ATUALIZAR ANO AUTOMATICAMENTE

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ANIMAÇÃO DOS ELEMENTOS AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(
    ".card, .article-item, .tip, .about-image"
);

if ("IntersectionObserver" in window) {

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

                observador.unobserve(entrada.target);

            }

        });

    }, {
        threshold: 0.12
    });

    elementos.forEach(elemento => {

        elemento.classList.add("revelar");

        observador.observe(elemento);

    });

}
