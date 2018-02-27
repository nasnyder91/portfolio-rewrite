class UI {
  constructor(){
    // UI Elements
    this.codeText = document.querySelector('#codeText');
    // Projects/form state
    this.forState = 'projects';
  }

  printText(text){
    this.codeText.innerHTML = text;
  }
}

export const ui = new UI();
