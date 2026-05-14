const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivos = [
  new Date("2026-10-05T00:00:00"), // Cursos na Alura
  new Date("2026-11-15T00:00:00"), // Criar projetos em Javascript
  new Date("2026-12-01T00:00:00"), // Criar um portfolio
  new Date("2026-12-31T00:00:00")  // Atualizar meu currículo
];

function atualizarContadores() {
  const tempoAtual = new Date();
  contadores.forEach((contador, index) => {
    const tempoRestante = tempoObjetivos[index] - tempoAtual;
    if (tempoRestante > 0) {
      const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
      contador.textContent = `${dias.toString().padStart(2, '0')}:${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    } else {
      contador.textContent = "00:00:00:00";
    }
  });
}

atualizarContadores();
setInterval(atualizarContadores, 1000);
