const livros = [
    "📚",
    "📖",
    "📕",
    "📗",
    "📘",
    "📙",
    "📔"
];

const container =
    document.getElementById("livros-caindo");


function criarLivro() {

    const livro =
        document.createElement("div");

    livro.classList.add("livro-caindo");

    livro.textContent =
        livros[
            Math.floor(
                Math.random() * livros.length
            )
        ];

    livro.style.left =
        Math.random() * 100 + "vw";

    livro.style.fontSize =
        20 + Math.random() * 25 + "px";

    livro.style.animationDuration =
        5 + Math.random() * 5 + "s";

    container.appendChild(livro);


    setTimeout(() => {
        livro.remove();
    }, 10000);
}


/* Livros caindo */
setInterval(criarLivro, 650);


/* =========================
   VELAS
========================= */

const velas =
    document.querySelectorAll(".vela");


velas.forEach(vela => {

    vela.addEventListener("click", () => {

        vela.classList.toggle("apagada");

        verificarVelas();

    });

});


function verificarVelas() {

    const apagadas =
        document.querySelectorAll(
            ".vela.apagada"
        ).length;


    if (apagadas === velas.length) {

        soltarConfetes();

    }

}


/* =========================
   CONFETES
========================= */

function soltarConfetes() {

    const itens = [
        "🎉",
        "💛",
        "📚",
        "🎾",
        "🦡",
        "✨"
    ];


    for (let i = 0; i < 60; i++) {

        const confete =
            document.createElement("div");

        confete.textContent =
            itens[
                Math.floor(
                    Math.random() * itens.length
                )
            ];

        confete.style.position = "fixed";

        confete.style.left =
            Math.random() * 100 + "vw";

        confete.style.top = "-30px";

        confete.style.zIndex = "999";

        confete.style.fontSize =
            15 + Math.random() * 20 + "px";

        confete.style.pointerEvents = "none";


        document.body.appendChild(confete);


        const animacao =
            confete.animate(

                [
                    {
                        transform: "translateY(0) rotate(0)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(110vh) rotate(720deg)`,
                        opacity: 0
                    }
                ],

                {
                    duration:
                        2000 + Math.random() * 2500,

                    easing: "ease-in"
                }

            );


        animacao.onfinish = () => {

            confete.remove();

        };

    }

}