class Filme {
  constructor() {
    this.id = 9;
  }

  salvar() {
    let filme = this.lerDados();
    this.arrayFilmes = [];

    if (this.validaCampos(filme)) {
      this.adicionar();
    }

    this.listaTabela();
  }

  listaTabela() {
    let tbodyDrama = document.getElementById("tbodyDrama");
    let tbodyAction = document.getElementById("tbodyAction");
    let tbodyComedy = document.getElementById("tbodyComedy");
    let tbodyRomance = document.getElementById("tbodyRomance");

    tbodyDrama.innerText = "";
    tbodyAction.innerText = "";
    tbodyComedy.innerText = "";
    tbodyRomance.innerText = "";


    if(filme.radioGender == "Drama"){
        for (let i = 0; i < this.arrayFilmes.length; i++) {
            let tr = tbodyDrama.insertRow();
      
            let td_id = tr.insertCell();
            let td_title = tr.insertCell();
            let td_director = tr.insertCell();
            let td_date = tr.insertCell();
            let td_actor = tr.insertCell();
            let td_imdb = tr.insertCell();
            let td_gender = tr.insertCell();
      
            td_id.innerText = this.arrayFilmes[i].id;
            td_title.innerText = this.arrayFilmes[i].titleMovie;
            td_director.innerText = this.arrayFilmes[i].director;
            td_date.innerText = this.arrayFilmes[i].dateMovie;
            td_actor.innerText = this.arrayFilmes[i].actorMovie;
            td_imdb.innerText = this.arrayFilmes[i].imdb;
            td_gender.innerText = this.arrayFilmes[i].radioGender;
      
          }
    }
    
  }

  adicionar(filme) {
    this.arrayFilmes.push(filme);
    this.id++;
  }

  lerDados() {
    let filme = {};

    filme.id = this.id;
    filme.titleMovie = document.getElementById("titleMovie").value;
    filme.director = document.getElementById("director").value;
    filme.dateMovie = document.getElementById("dateMovie").value;
    filme.actorMovie = document.getElementById("actorMovie").value;
    filme.imdb = document.getElementById("imdb").value;
    filme.radioGender = document.getElementById("radioGender").value;

    return filme;
  }

  validaCampos(filme) {
    let msg = "";

    if (
      filme.titleMovie &&
      filme.director &&
      filme.dateMovie &&
      filme.actorMovie &&
      filme.imdb &&
      filme.radioGender == "") {
      msg += "- Campo Obrigatório Vazio \n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }

    return true;
  }

  cancelar() {
    document.getElementById("titleMovie").value = "";
    document.getElementById("director").value = "";
    document.getElementById("dateMovie").value = "";
    document.getElementById("actorMovie").value = "";
    document.getElementById("imdb").value = "";
    document.getElementById("radioGender").value = "";
  }
}

let filme = new Filme();
