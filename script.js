const AIer = {
  kjaereste: {
    navn: "Nora",
    bilde: "img/kjaereste1.jpg",
    svar: (msg) => `❤️ Nora: Jeg elsker at du sier "${msg}". Fortell meg mer.`
  },
  soster: {
    navn: "Selma",
    bilde: "img/soster1.jpg",
    svar: (msg) => `👧 Selma: Haha, du er håpløs! Men jeg er glad i deg uansett.`
  },
  bror: {
    navn: "Leo",
    bilde: "img/bror1.jpg",
    svar: (msg) => `👦 Leo: Seriøst? Det der høres ut som deg. Klassisk.`
  }
};

let valgtRelasjon = null;

document.querySelectorAll("#relasjon-valg button").forEach((btn) => {
  btn.addEventListener("click", () => {
    valgtRelasjon = btn.dataset.relasjon;
    const ai = AIer[valgtRelasjon];
    document.getElementById("navn").innerText = ai.navn;
    document.getElementById("relasjonsbilde").src = ai.bilde;
    document.getElementById("chatlog").innerHTML = `<div>${ai.navn} er klar til å prate med deg 😊</div>`;
    document.getElementById("avatar-info").classList.remove("hidden");
  });
});

document.getElementById("chat-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const brukerMelding = document.getElementById("brukermelding").value;
  const chatlog = document.getElementById("chatlog");
  chatlog.innerHTML += `<div><strong>Du:</strong> ${brukerMelding}</div>`;
  const aiSvar = AIer[valgtRelasjon].svar(brukerMelding);
  setTimeout(() => {
    chatlog.innerHTML += `<div>${aiSvar}</div>`;
  }, 500);
  document.getElementById("brukermelding").value = "";
});
