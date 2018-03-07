import { animation } from './animations';

class UI {
  constructor(){
    // UI Elements
    this.jumboText = document.querySelector('#jumboText');
    this.mainDisplay = document.querySelector('#mainDisplay');
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
        this.jumboText.classList.remove('fadeout');
        animation.slideInDown(this.jumboText, 2000);
      });
    }
  }

  // Change state of main display section
  changeMainDisplayState(state, data){
    switch(this.mainDisplayState){
      case '':
        if(state === 'projects'){
          this.toggleProjects(data);
        }
        if(state === 'contact'){
          this.toggleContactForm();
        }
        break;
      case 'projects':
        animation.slideOutLeft(this.mainDisplay, 500, () => {
          // Clear main display after fadeout
          this.mainDisplay.innerHTML = '';

          // Display state
          if(state === 'projects'){
            this.toggleProjects(data);
          }
          if(state === 'contact'){
            this.toggleContactForm();
          }
        });
        break;
      case 'contact':
        animation.slideOutRight(this.mainDisplay, 500, () => {
          // Clear main display after fadeout
          this.mainDisplay.innerHTML = '';

          // Display state
          if(state === 'projects'){
            this.toggleProjects(data);
          }
          if(state === 'contact'){
            this.toggleContactForm();
          }
        });
        break;
      default:
        break;
    }
  }

  // Display projects
  toggleProjects(projects){
    if(this.mainDisplayState !== 'projects'){
      // Set main display state
      this.mainDisplayState = 'projects';
      // Create projects grid
      const projectsGrid = document.createElement('div');
      projectsGrid.className = 'row';
      projectsGrid.id = 'projectsGrid';

      // Loop through projects and make project cards
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
        // Append project card to projects grid
        projectsGrid.appendChild(card);
      });

      // Append projects grid to main display section
      this.mainDisplay.appendChild(projectsGrid);

      // Fade in the main display
      // animation.fadeInElement(this.mainDisplay, 500);
      animation.slideInRight(this.mainDisplay, 500);
    } else{
      // Fade out main display and remove projects grid
      animation.slideOutLeft(this.mainDisplay, 500, () => {
        this.mainDisplay.innerHTML = '';
        this.mainDisplayState = '';
      });
    }
  }

  // Toggle contact form
  toggleContactForm(){
    if(this.mainDisplayState !== 'contact'){
      // Set main display state
      this.mainDisplayState = 'contact';
      // Create contact form
      const contact = document.createElement('div');
      contact.id = 'contactForm';
      contact.innerHTML = `
        <h3 class="orange" id="formThankYou" style="display:none">Your message has been sent.  Thank you.</h3>
        <form class='form-horizontal col-sm-12 container' id="contactForm">
          <div class='form-group'>
            <label>Name</label>
            <input class='form-control' id="name" placeholder='Your name...' type='text' name='name' required title="First Name"></div>
          <div class='form-group'>
            <label>E-Mail</label>
            <input class='form-control' id="email" placeholder='Your email...' type='email' required>
          </div>
          <div class='form-group'>
            <label>Message</label>
            <textarea id='contactMessage' class='form-control' placeholder='Your message...' name='body' required></textarea>
          </div>
          <div class='form-group'>
            <button type='submit' class='btn btn-success pull-right'>Send</button>
          </div>
          <input type='hidden' name='_next' value='' />
        </form>
      `;

      // Append contact form to main display
      this.mainDisplay.appendChild(contact);

      // Fade in the main display
      animation.slideInLeft(this.mainDisplay, 500);
    } else{
      // Fade out main display and remove contact form
      animation.slideOutRight(this.mainDisplay, 500, () => {
        this.mainDisplay.innerHTML = '';
        this.mainDisplayState = '';
      });
    }
  }
}

export const ui = new UI();
