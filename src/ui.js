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
            <h1 class="display-3 text-secondary">Nick Snyder <span class="orange">|</span> <span class="blue">Developer</span></h1>
            <br><br>
            <h2 class="text-secondary">Welcome to my portfolio.</h2>
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
          // Clear main display after slideout
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
        console.log(project);
        // Create project card
        const card = document.createElement('div');
        card.className = 'card hoverHL col-md-12 pt-4 pb-4 my-2';
        card.innerHTML = `
          <div class="row">
            <div class="col-md-8 col-sm-12">
              <h4>${project.name}</h4>
              ${project.description !== null ? `<p>${project.description}</p>` : ''}
            </div>
            <div class="col-md-4 d-inline-flex align-items-start justify-content-around">
              <a href="${project.html_url}" target="_blank" class="btn btn-dark">GitHub Repository</a>
              ${project.has_pages ? `<a href="https://nasnyder91.github.io/${project.name}" target="_blank" class="btn btn-primary">Webpage</a>` : '<a href="#" class="btn btn-primary float-right disabled">Webpage</a>'}
            </div>
          </div>
        `;
        // Append project card to projects grid
        projectsGrid.appendChild(card);
      });

      // Append projects grid to main display section
      this.mainDisplay.appendChild(projectsGrid);

      // Slide in the main display
      animation.slideInRight(this.mainDisplay, 500);
    } else{
      // Slide out main display and remove projects grid
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

      // Slide in the main display
      animation.slideInLeft(this.mainDisplay, 500);
    } else{
      // Slide out main display and remove contact form
      animation.slideOutRight(this.mainDisplay, 500, () => {
        this.mainDisplay.innerHTML = '';
        this.mainDisplayState = '';
      });
    }
  }
}

export const ui = new UI();
