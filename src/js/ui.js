import { animation } from './animations';
import jsLogo from '../assets/img/js.svg';
import htmlLogo from '../assets/img/html5.svg';
import cssLogo from '../assets/img/css3.svg';
import tsLogo from '../assets/img/ts.svg';
import wbLogo from '../assets/img/webpack.svg';
import angularLogo from '../assets/img/angular.svg';
import jqueryLogo from '../assets/img/jquery.svg';
import bootstrapLogo from '../assets/img/bootstrap.svg';
import materializeLogo from '../assets/img/materialize.svg';
import npmLogo from '../assets/img/npm.svg';
import nodejsLogo from '../assets/img/nodejs.svg';
import mlabLogo from '../assets/img/mongolab.svg';
import mdbLogo from '../assets/img/mongodb.svg';
import mysqlLogo from '../assets/img/mysql.svg';







class UI {
  constructor(){
    // UI Elements
    this.jumboText = document.querySelector('#jumboText');
    this.mainDisplay = document.querySelector('#mainDisplay');
    this.projectsBtn = document.querySelector('#projectsBtn');
    this.projectsBtnText = document.querySelector('#projectsBtn').querySelector('h2');
    this.projectsBtnIcon = document.querySelector('#projectsBtn').querySelector('i');
    this.contactBtn = document.querySelector('#contactBtn');
    this.contactBtnText = document.querySelector('#contactBtn').querySelector('h2');
    this.contactBtnIcon = document.querySelector('#contactBtn').querySelector('i');
    // Projects/form/about state
    this.mainDisplayState = 'about';
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
            <h2 class="text-secondary subtitle">Full stack web development</h2>
          </div>
          <button class="replayBtn btn btn-outline-secondary btn-sm float-right">Replay</button>
        `;
        this.jumboText.classList.remove('fadeout');
        animation.slideInDown(this.jumboText, 1500);
      });
    }
  }

  // Change state of main display section
  changeMainDisplayState(state, data){
    switch(this.mainDisplayState){
      case 'projects':
        animation.slideOutLeft(this.mainDisplay, 500, () => {
          // Clear main display after fadeout
          this.mainDisplay.innerHTML = '';

          // Display state
          if(state === 'contact'){
            this.projectsBtnText.textContent = 'Projects';
            this.projectsBtnIcon.className = 'fa fa-briefcase';
            this.contactBtnText.textContent = 'About';
            this.contactBtnIcon.className = 'fa fa-address-card';
            this.toggleContactForm();
          }
          if(state === 'about'){
            this.projectsBtnText.textContent = 'Projects';
            this.projectsBtnIcon.className = 'fa fa-briefcase';
            this.toggleAbout();
          }
        });
        break;
      case 'contact':
        animation.slideOutRight(this.mainDisplay, 500, () => {
          // Clear main display after slideout
          this.mainDisplay.innerHTML = '';

          // Display state
          if(state === 'projects'){
            this.projectsBtnText.textContent = 'About';
            this.projectsBtnIcon.className = 'fa fa-address-card';
            this.contactBtnText.textContent = 'Contact';
            this.contactBtnIcon.className = 'fa fa-envelope';
            this.toggleProjects(data);
          }
          if(state === 'about'){
            this.contactBtnText.textContent = 'Contact';
            this.contactBtnIcon.className = 'fa fa-envelope';
            this.toggleAbout();
          }
        });
        break;
      case 'about':
        animation.slideOutDown(this.mainDisplay, 500, () => {
          // Clear main display after slideout
          this.mainDisplay.innerHTML = '';

          // Display state
          if(state === 'projects'){
            this.projectsBtnText.textContent = 'About';
            this.projectsBtnIcon.className = 'fa fa-address-card';
            this.toggleProjects(data);
          }
          if(state === 'contact'){
            this.contactBtnText.textContent = 'About';
            this.contactBtnIcon.className = 'fa fa-address-card';
            this.toggleContactForm();
          }
        });
        break;
      default:
        break;
    }
  }

  // Display about
  toggleAbout(){
    // Set main display state
    this.mainDisplayState = 'about';

    const aboutHeader = document.createElement('div');
    aboutHeader.className = 'container-fluid text-center mb-5';
    aboutHeader.innerHTML = `
      <h3 class="aboutHeader">Building <span class="orange">smart</span>, <span class="orange">intuitive</span>, and <span class="orange">responsive</span> websites using the latest and best technologies.</h3>
    `;

    this.mainDisplay.appendChild(aboutHeader);

    const about = document.createElement('div');
    about.className = 'container-fluid about px-5';
    about.innerHTML = `
      <div class="px-5">
        <div class="row">
          <div class="col-12 my-5">
            <div class="row">
              <div class="col-lg-2 mb-2">
                <h3 class="shadowedText">Languages</h3>
              </div>
              <div class="col-lg-10 offset-md-2 offset-lg-0">
                <div class="row text-center">
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="card-img-top" src=${htmlLogo} alt="HTML5 logo" />
                    <div class="card-body">
                      <p class="text-uppercase">HTML5</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid" src=${cssLogo} alt="CSS3 logo" />
                    <div class="card-body">
                      <p class="text-uppercase">CSS3</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid" src=${jsLogo} alt="Javascript logo" />
                    <div class="card-body">
                      <p class="text-uppercase">Javascript</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid" src=${tsLogo} alt="TypeScript logo" />
                    <div class="card-body">
                      <p class="text-uppercase">TypeScript</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-5">
            <div class="row">
              <div class="col-lg-2 mb-2">
                <h3 class="shadowedText">Frameworks & Libraries</h3>
              </div>
              <div class="col-lg-10 offset-md-2 offset-lg-0">
                <div class="row text-center">
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid mx-auto" src=${angularLogo} alt="Angular logo" />
                    <div class="card-body">
                      <p class="text-uppercase">Angular 2.0</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid align-items-center" src=${jqueryLogo} alt="Jquery logo" />
                    <div class="card-body">
                      <p class="text-uppercase">jQuery</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid mx-auto" src=${bootstrapLogo} alt="Bootstrap logo" />
                    <div class="card-body">
                      <p class="text-uppercase">Bootstrap</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid align-items-center" src=${materializeLogo} alt="Materialize logo" />
                    <div class="card-body">
                      <p class="text-uppercase">Materialize</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-5">
            <div class="row">
              <div class="col-lg-2 mb-2">
                <h3 class="shadowedText">Tools</h3>
              </div>
              <div class="col-lg-10 offset-md-2 offset-lg-0">
                <div class="row text-center">
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid mx-auto" src=${wbLogo} alt="Webpack logo" />
                    <div class="card-body">
                      <p class="text-uppercase">Webpack</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid mx-auto" src=${npmLogo} alt="NPM logo" />
                    <div class="card-body">
                      <p class="text-uppercase">NPM</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid mx-auto" src=${nodejsLogo} alt="NodeJS logo" />
                    <div class="card-body">
                      <p class="text-uppercase">Node.js</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-5">
            <div class="row">
              <div class="col-lg-2 mb-2">
                <h3 class="shadowedText">Database</h3>
              </div>
              <div class="col-lg-10 offset-md-2 offset-lg-0">
                <div class="row text-center">
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid align-items-center" src=${mdbLogo} alt="MongoDB logo" />
                    <div class="card-body">
                      <p class="text-uppercase">mongoDB</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid align-items-center" src=${mlabLogo} alt="MLab logo" />
                    <div class="card-body">
                      <p class="text-uppercase">mongoLab</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2 card bg-secondary border-0 mb-5 mx-4 pt-4">
                    <img class="img-fluid align-items-center" src=${mysqlLogo} alt="MySql logo" />
                    <div class="card-body">
                      <p class="text-uppercase">MySQL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.mainDisplay.appendChild(about);

    animation.slideInUp(this.mainDisplay, 500);
  }

  // Display projects
  toggleProjects(projects){
    // Set main display state
    this.mainDisplayState = 'projects';
    // Create projects grid
    const projectsGrid = document.createElement('div');
    projectsGrid.className = 'row container mx-auto';
    projectsGrid.id = 'projectsGrid';

    projectsGrid.innerHTML = `
      <div class="indentRight">
        <h1 class="display-5"><strong>Projects</strong></h1>
        <p class="text-muted">Powered by the GitHub API</p>
      </div>
    `;

    // Loop through projects and make project cards
    projects.forEach((project) => {
      console.log(project);
      // Create project card
      const card = document.createElement('div');
      card.className = 'card hoverHL col-md-12 pt-4 pb-4 my-2';
      card.innerHTML = `
        <div class="row">
          <div class="col-xl-8 col-lg-12 border-right">
            <h4>${project.name}</h4>
            ${project.description !== null ? `<p>${project.description}</p>` : ''}
          </div>
          <div class="col-xl-4 col-lg-12 d-flex align-items-start justify-content-end gitLinks">
            <a href="${project.html_url}" target="_blank" class="btn btn-dark mr-3">GitHub Repository</a>
            ${project.has_pages ? `<a href="https://nasnyder91.github.io/${project.name}" target="_blank" class="btn btn-primary">Webpage</a>` : (project.homepage ? `<a href="${project.homepage}" target="_blank" class="btn btn-primary">Webpage</a>` : '<a href="#" class="btn btn-primary float-right disabled">Webpage</a>')}
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
  }

  // Toggle contact form
  toggleContactForm(){
    // Set main display state
    this.mainDisplayState = 'contact';
    // Create contact form
    const contact = document.createElement('div');
    contact.className = 'container'
    contact.innerHTML = `
      <h1 class="display-5"><strong>Contact Me</strong></h1>
      <h3 class="orange" id="formThankYou" style="display:none">Your message has been sent.  Thank you.</h3>
      <br/> <br/>
      <form class='form-horizontal col-sm-12 container' id="contactForm" method="POST" novalidate>
        <div class='form-group'>
          <label class="h2">Name</label>
          <input class='form-control needs-validation' id="name" placeholder='Enter your name' type='text' name="name" required>
          <div class="invalid-feedback">Please enter your name.</div>
        </div>
        <div class='form-group'>
          <label class="h2">E-Mail</label>
          <input class='form-control needs-validation' id="email" placeholder='Enter your email address' type='email' name="email" required>
          <div class="invalid-feedback">Please enter a valid email address.</div>
        </div>
        <div class='form-group'>
          <label class="h2">Message</label>
          <textarea id='message' class='form-control needs-validation' placeholder='Enter your message' name='comment' required></textarea>
          <div class="invalid-feedback">Please enter a message.</div>
        </div>
        <input type='submit' value="Send" class='btn btn-success btn-block'>
      </form>
    `;

    // Append contact form to main display
    this.mainDisplay.appendChild(contact);

    // Slide in the main display
    animation.slideInLeft(this.mainDisplay, 500);
  }
}

export const ui = new UI();
