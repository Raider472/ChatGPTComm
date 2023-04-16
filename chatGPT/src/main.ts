import { generateText } from "./chatGPT";

type HTMLType = {
  divChat : HTMLElement
  , textArea : HTMLTextAreaElement
  , buttonSub : HTMLButtonElement
}

class indexHTML {
  private _document: HTMLType

  constructor(HTMLType: HTMLType) {
    this._document = HTMLType
  }

  get document(): HTMLType {
    return this._document
  }

  verifieurTexte(): void {
    if(this.document.textArea.value === "") {
      alert("Le texte est vide")
    }
    else {
      const loadingText = "Chargement en cours...";
      this.document.divChat.innerHTML = loadingText;
      generateText(this.document.textArea.value)
      .then((text) => {
        this.document.divChat.innerHTML = text
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }
}

export let classe = new indexHTML({
  divChat: document.querySelector("[id=chat]")!,
  textArea: document.querySelector("[id=texte]")!,
  buttonSub: document.querySelector("[id=submit]")!,
});