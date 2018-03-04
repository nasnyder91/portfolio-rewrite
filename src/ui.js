import { animation } from './animations';

class UI {
  constructor(){
    // UI Elements
    this.jumboText = document.querySelector('#jumboText');
    this.projectsGrid = document.querySelector('#projectsGrid');
    this.contactForm = document.querySelector('#contactForm');
    // Projects/form state
    this.mainDisplayState = '';
  }

  // Print text to jumbotron
  printText(text){
    this.jumboText.innerHTML = text;
  }

  // Change state of jumbotron
  changeJumbotronState(state, callback){
    if(state === 'code'){
      animation.fadeOutElement(this.jumboText, 1000, () => {
        this.jumboText.className = '';
        callback();
      });
    }
    if(state === 'html'){
      animation.fadeOutElement(this.jumboText, 2000, () => {
        this.jumboText.innerHTML = `
          <div class='text-center'>
            <h1>Nick Snyder <span class="orange">|</span> <span class="blue">Developer</span></h1>
            <br><br>
            <h2>Welcome to my portfolio.</h2>
          </div>
          <button class="replayBtn btn btn-outline-secondary btn-sm float-right">Replay</button>
        `;
        animation.fadeInElement(this.jumboText, 2000);
      });
    }
  }

  // Change state of main display section
  changeMainDisplayState(state, data){
    if(state === 'projects'){
      this.toggleProjects(data);
      this.mainDisplayState = 'projects';
    }
    if(state === 'contact'){

    }
  }

  // Display projects
  toggleProjects(projects){
    if(this.mainDisplayState !== 'projects'){
      projects.forEach((project) => {
        const webURL = project.has_pages ? `<a href="https://nasnyder91.github.io/${project.name}">Webpage</a>` : '';
        // Create project card
        const card = document.createElement('div');
        card.className = 'card col-md-6';
        card.innerHTML = `
          ${project.name}
          ${webURL}
          <a href="${project.html_url}">GitHub Repo</a>
        `;
        this.projectsGrid.appendChild(card);
      });
      animation.fadeInElement(this.projectsGrid, 1000);
    } else{
      // HIDE PROJECTS WITH ANIMATION
    }
  }
}

export const ui = new UI();
