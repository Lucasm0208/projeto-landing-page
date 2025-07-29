var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")
function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style ="display:flex; margin-left: 100px"
}
function RolarParaEsquerda(){
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style ="display:none"
}
document.getElementById("form").addEventListener("submit", function(e) {
      e.preventDefault();

      const formData = {
        Nome: e.target.Nome.value,
        Email: e.target.Email.value,
        Telefone: e.target.Telefone.value
      };

      fetch("https://script.google.com/macros/s/AKfycbxkqbW0kTuEYX23G19SyQ22zudzgzvRc5DD57ZmrNiifotFrgE0yzvp1g0H22GtniXw/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.text())
      .then(msg => {
        alert("Formulário enviado com sucesso!");
        e.target.reset();
      })
      .catch(err => {
        console.error("Erro:", err);
        alert("Erro ao enviar o formulário.");
      });
    });