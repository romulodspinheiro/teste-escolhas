const app = document.getElementById("app");
const slides = [
  {
    html: `<h1>Já bateu a saudade de fazer um site e ter uma surpresa?</h1>
    <button onclick='nextSlide(1)'>Tava com saudade sim</button>
    <button onclick='nextSlide(1)'>Não tava com saudade</button>`
  },
  {
    html: `<p>Que todos os dias contigo são incríveis, tu já sabe.<br/>A saudade de tá junto, viajando ou apenas quieto, tá crescendo.</p>
    <div>
      <img src='fotos/1.jpg'/>
      <img src='fotos/2.jpg'/>
      <img src='fotos/3.jpg'/>
      <img src='fotos/4.jpg'/>
    </div>
    <button onclick='nextSlide(2)'>Avançar</button>`
  },
  {
    html: `<h2>É hora de decidir a nossa próxima viagem ou aventura do final de semana</h2>
    <button onclick='nextSlide(3)'>Eu te ajudo sim</button>
    <button onclick='nextSlide(3)'>É tu quem decide tudo Rômulo</button>`
  },
  {
    html: `<h3>Opção 1</h3>
    <p id='opcao1'>Hospedagem no Luzeiros, ida para a Raposa no dia seguinte, vinho, piscina e muito mais.</p>
    <h3>Opção 2</h3>
    <p id='opcao2'>Santo Amaro. Acampar à noite, mais alguns passeios, vinhos e muito mais.</p>
    <button onclick='escolherOpcao(1)'>Quero a opção 1</button>
    <button onclick='escolherOpcao(2)'>Quero a opção 2</button>`
  },
  {
    html: `<h2 id='confirmacaoEscolha'></h2>
    <p>Eu sei que você nunca erra.</p>
    <button onclick='nextSlide(5)'>Avançar</button>`
  },
  {
    html: `<p>Ansioso pra esse dia chegar. É sempre muito bom estar contigo</p>
    <button onclick='nextSlide(6)'>Avançar</button>`
  },
  {
    html: `<p>Agora você pode me aproveitar e também o que eu trouxe pra você da artesano. Beijo 💜</p>
    <button onclick='nextSlide(7)'>Clique aqui para mais um desafio</button>`
  },
  {
    html: `<p id="dataFinal"></p>`
  }
];
let slideIndex = 0;
let escolha = '';
function renderSlide() {
  app.innerHTML = slides[slideIndex].html;
  if (slideIndex === 4 && escolha) {
    document.getElementById("confirmacaoEscolha").textContent = "Você escolheu a opção " + escolha;
  }
  if (slideIndex === 7) {
    const hoje = new Date().toISOString().split("T")[0];
    document.getElementById("dataFinal").innerHTML = "<strong>Nosso vinho será no dia: " + hoje + "</strong>";
  }
}
function nextSlide(index = null) {
  slideIndex = index !== null ? index : slideIndex + 1;
  renderSlide();
}
function escolherOpcao(num) {
  escolha = num;
  nextSlide(4);
}
renderSlide();