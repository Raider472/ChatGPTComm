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
    this._document.textArea.value = ""
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
      this.message.push(this.document.textArea.value);
      this._prompt += this.document.textArea.value + "\n"
      generateText(this._prompt)
      .then((text) => {
        this.document.divChat.innerHTML = text
        this._prompt += text + "\n"
        this.message.push(`Chatbot : ${text}`);
        console.log(this.message)
        console.log(this._prompt)
        console.log(text)

      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  /*TextareaAutoExpand(): void {
    let tailleInitiale = 20
    if (this.document.textArea.textLength % 104 === 0) {
      console.log(Math.round((this.document.textArea.textLength/104)+1)*tailleInitiale)
      this._document.textArea.style.maxHeight = String(Math.round((this.document.textArea.textLength/104)+1)*tailleInitiale) + "px"
    }
  }*/
}

export let classe = new indexHTML({
  divChat: document.querySelector("[id=chat]")!,
  textArea: document.querySelector("[id=texte]")!,
  buttonSub: document.querySelector("[id=submit]")!,
});