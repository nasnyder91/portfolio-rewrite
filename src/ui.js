class UI {
  constructor(){
    // UI Elements
    this.jumboText = document.querySelector('#jumboText');
    this.projectsGrid = document.querySelector('#projectsGrid');
    this.contactForm = document.querySelector('#contactForm');
    // Projects/form state
    this.mainDisplayState = 'projects';
  }

  // Print text to jumbotron
  printText(text){
    this.jumboText.innerHTML = text;
  }

  // Change state of jumbotron
  changeJumbotronState(state){
    
  }



  fadeInElement(element, duration, callback){
    if(element.className.contains('fadeout')){
      element.className.replace('fadein');
    }
  }
}

export const ui = new UI();
