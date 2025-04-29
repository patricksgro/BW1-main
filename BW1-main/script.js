const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
// array per grasetto
const questions2 = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
    important_words: ["CPU"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
    important_words: ["Java", "keywords", "put on a variable to make sure it doesn&#039;t get modified?"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    important_words: ["logo", "Snapchat" ,"Bell"],
  },
  {
    //non appare
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C&#43&#43.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    important_words: ["Pointers", "C programming language", "added later on in C&#43&#43"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
    important_words: ["image format", "logos", "Wikimedia database"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
    important_words: ["web design","CSS"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    important_words: ["mobile operating system Android 7.0"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
    important_words: ["Twitter", "character limit"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    important_words: ["Linux"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
    important_words: ["programming language", "an island in Indonesia?"],
  },
];
// Gestione caricamento pagine
const PATH_PAGINA_BENVENUTO = "welcome.html";
const PATH_PAGINA_DOMANDE = "quiz.html";
const PATH_PAGINA_RIEPILOGO = "risultato.html";

function caricaPaginaBenvenuto() {
  caricaPagina(PATH_PAGINA_BENVENUTO);
}

function caricaTest() {
  caricaPagina(PATH_PAGINA_DOMANDE);
}

function caricaRiepilogo() {
  caricaPagina(PATH_PAGINA_RIEPILOGO);
}

function caricaPagina(pagina) {
  // console.log("caricaPagina ", pagina)
  window.location.replace(pagina);
}

//funzione per sbloccare il btn PROCEED per poter accedere al quiz

function controllaCheckbox() {
  let checkbox = document.getElementById("checkboxWelcomePage");
  if (checkbox.checked) {
    caricaTest();
  } else {
    document.getElementById("attenzione").textContent =
      "Per poter accedere al test, accetta i termini";
  }
}

let punteggioUtente = 0;
let questionNumber = 0;
let risposteUtente = [];
//-----------------------------------------------------------------------------
let incrementa=1

function incrementaDomanda(){
  aggiornaQuestions()
  incrementa++
}

function aggiornaQuestions(){
  let valoreDomanda = document.getElementById("progressioneDomande")
  if (valoreDomanda) {
    valoreDomanda.textContent = incrementa
  }
}
//-------------------------------------------------------------------------------
//La funzione valuta quale contenuto caricare: se non ci sono più domande carica la pagina di riepilogo, altrimenti carica la prossima domanda incrementando la variabile questionNumber (corrisponde alla domanda da caricare)
//Usata anche per il caricamento della prima domanda richiamando la funzione dalla pagina HTML

let timer = null;
let tempoRimasto = 60;

function regenerateElements(){
  const timer = document.getElementById('timerProgress') ;
  const clonedElement = timer.cloneNode(true);
  timer.parentNode.replaceChild(clonedElement, timer);
}

function avviaTimer() {
  // Se c'è un timer già attivo, lo stoppo prima di crearne uno nuovo
  clearInterval(timer);
  tempoRimasto = 60;

  regenerateElements()

  aggiornaTimer();

  timer = setInterval(() => {
    tempoRimasto--;
    aggiornaTimer();

    if (tempoRimasto <= 0) {
      clearInterval(timer);
      avanzaSenzaRisposta(); // l'utente non ha risposto in tempo
    }
  }, 1000);
}

function aggiornaTimer() {
  const timerElement = document.getElementById("timer");
  if (timerElement) {
    timerElement.innerHTML = `SECONDS <span>${tempoRimasto}</span> REMAINING`;
  }
}

function caricaDomanda() {
  if (questionNumber >= questions.length) {
    saveGlobalVariables();
    caricaRiepilogo();
  } else {
    questionNumber++;
    caricaProssimaDomanda();
  }
}

function testoGrassetto(testoDomanda,paroleImportanti){
  let domandaConGrassetto = testoDomanda;

  paroleImportanti.forEach((word) => {
    const regex = new RegExp(`(${word})`, 'gi');
    domandaConGrassetto = domandaConGrassetto.replace(regex, '<span class="highlight">&nbsp;$1&nbsp;</span>');
  });
  return domandaConGrassetto
}

function caricaProssimaDomanda() {
  //Prendo dalla pagina HTML l'elemento contenente la domanda e ne aggiorno il contenuto testuale
  let domanda = document.getElementById("domanda");
  domanda.innerHTML = testoGrassetto(questions[questionNumber - 1].question , questions2[questionNumber - 1].important_words)

  //Creo un array contenente tutte le possibili risposte concatenando la risposta corretta con gli elementi contenuti nell'array delle risposte sbagliate
  const risposte = questions[questionNumber - 1].incorrect_answers.concat(
    questions[questionNumber - 1].correct_answer
  );

  //Cambio l'ordine di apparizione delle risposte
  const risposteOrdineCasuale = shuffle(risposte);

  //Creo elementi HTML per ogni risposta da aggiungere al contenitore già presente nella pagina
  let containerRisposte = document.getElementById("risposte");
  containerRisposte.innerHTML = "";
  for (let risposta of risposteOrdineCasuale) {
    let rispElement = document.createElement("label");
    rispElement.classList.add("opzioneRisposta");
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "risposta";
    input.classList.add("btnRisposta");

    let span = document.createElement("span");
    span.classList.add("testoRisposta");
    span.innerHTML = risposta;

    rispElement.appendChild(input);
    rispElement.appendChild(span);
    containerRisposte.appendChild(rispElement);

    input.addEventListener("click", (event) => {
      confermaRisposta(event);
    });
  }
  avviaTimer();
  incrementaDomanda();
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//L'utente clicca su Procedi per caricare la prossima domanda e conferma la risposta alla domanda corrente
function confermaRisposta(event) {
  //Recupero la risposta selezionata dall'utente
  let risposta = event.srcElement.nextSibling.innerText;
  risposteUtente.push(risposta);

  console.log("Risposta memorizzata ", risposteUtente)

  valutaRispostaCorrente();
  caricaDomanda();
}

//La funzione controlla se la risposta data dall'utente è corretta. In caso affermativo incrementa la variabile punteggioUtente di 1.
function valutaRispostaCorrente() {
  if (
    questions[questionNumber - 1].correct_answer ===
    risposteUtente[questionNumber - 1]
  ) {
    punteggioUtente++;
  }
}

function riepilogo() {
  let punteggioUtente = localStorage.getItem("punteggioUtente");

  let risposteUtente = localStorage.getItem("risposteUtente");
  risposteUtente = risposteUtente.split(",");

  //Aggiorno variabile
  const totale = document.getElementById("totale");
  totale.textContent = punteggioUtente;

  //Aggiorno contenuto pagina
  const risultati = document.getElementById("risultati");
  for (let i = 0; i < questions.length; i++) {
    let container = document.createElement("div");
    container.classList.add("domanda");

    let testoDomanda = document.createElement("p");
    testoDomanda.id = "testoDomanda"
    testoDomanda.innerHTML = `Domanda: ${questions[i].question}`;

    let rispostaUtente = document.createElement("p");
    rispostaUtente.id = "rispostaUtente"
    rispostaUtente.innerHTML = `La tua risposta: ${risposteUtente[i]? risposteUtente[i]: ''}`;

    let esito = document.createElement("span");
    esito.innerHTML =
    risposteUtente[i] === questions[i].correct_answer ? "✅" : risposteUtente[i]? "❌": "";
    rispostaUtente.appendChild(esito);

    let rispostaCorretta = document.createElement("p");
    rispostaCorretta.id = "rispostaCorretta"
    rispostaCorretta.innerHTML = `Risposta corretta: ${questions[i].correct_answer}`;

    //Creazione di una linea per separare esteticamente le domande nella pagina di Risultato
    let separatoreDomanda = document.createElement('hr');
    separatoreDomanda.id = "separatoreDomanda"

    container.appendChild(separatoreDomanda);
    container.appendChild(testoDomanda);
    container.appendChild(rispostaUtente);
    container.appendChild(rispostaCorretta);
    risultati.appendChild(container);
  }
}

//Salvataggio variabili globali da utilizzare nella pagina di riepilogo
function saveGlobalVariables() {
  localStorage.setItem("punteggioUtente", punteggioUtente);
  localStorage.setItem("risposteUtente", risposteUtente);
}

//Se il timer scade e l'utente non ha confermato la risposta si procede al caricamento della prossima domanda senza il salvataggio della risposta.
function avanzaSenzaRisposta() {
  //in assenza di risposta salviamo null nell'array delle risposte
  risposteUtente.push(null);
  caricaDomanda();
}
