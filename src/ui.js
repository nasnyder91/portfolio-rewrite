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
  changeJumbotronState(state, callback){
    if(state === 'code'){
      this.fadeOutElement(this.jumboText, 2000, () => {
        this.jumboText.className = '';
        callback();
      });
    } else if(state === 'html'){
      this.fadeOutElement(this.jumboText, 2000, () => {
        this.jumboText.innerHTML = `
          <div class='text-center'>
            <h1>Nick Snyder <span class="orange">|</span> <span class="blue">Developer</span></h1>
            <br><br>
            <h2>Welcome to my portfolio.</h2>
          </div>
          <button class="replayBtn btn btn-outline-secondary btn-sm float-right">Replay</button>
        `;
        this.fadeInElement(this.jumboText, 2000);
      });
    }
  }


  // Fade out element
  fadeOutElement(element, duration, callback){
    if(element.classList.contains('fadein')){
      element.classList.replace('fadein', 'fadeout');
    } else{
      element.className += ' fadeout';
    }
    element.style.setProperty('--duration', duration + 'ms');
    setTimeout(callback, duration);
  }

  // Fade in element
  fadeInElement(element, duration, callback){
    if(element.classList.contains('fadeout')){
      element.classList.replace('fadeout', 'fadein');
    } else{
      element.className += ' fadein';
    }
    element.style.setProperty('--duration', duration + 'ms');
    setTimeout(callback, duration);
  }
}

export const ui = new UI();
