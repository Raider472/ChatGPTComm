import { generateText } from "./chatGPT";

type HTMLType = {
  divChat : HTMLElement
  , textArea : HTMLTextAreaElement
  , buttonSub : HTMLButtonElement
}

class indexHTML {
  private _document: HTMLType
  private _message = new Array<String>
  private _prompt: string = ""

  constructor(HTMLType: HTMLType) {
    this._document = HTMLType
  }

  get document(): HTMLType {
    return this._document
  }

  get message(): Array<String> {
    return this._message
  }

  get prompt(): string {
    return this._prompt
  }

  verifieurTexte(): void {
    if(this.document.textArea.value === "") {
      alert("Le texte est vide")
    }
    else {
      const loadingText = "Chargement en cours...";
      this.document.divChat.innerHTML = loadingText;
      this.message.push(`Utilisateur : ${this.document.textArea.value}`);
      this._prompt += "User: " + this.document.textArea.value + "\n"
      generateText(this._prompt)
      .then((text) => {
        this.document.divChat.innerHTML = text
        this._prompt += "System: " + text + "\n"
        this.message.push(`Chatbot : ${text}`);
        console.log(this.message)
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