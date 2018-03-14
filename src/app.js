import { ui } from './ui';
import { codeWriter } from './codewriter';
import { github } from './github';
import { formSubmit } from './formsubmit';

//-----------------------------------------EVENT LISTENERS-----------------------------------------
// Begin 'animation' on DOM load
document.addEventListener('DOMContentLoaded', () => {
  ui.toggleAbout();
  writeCode();
});
// Replay button event listener
document.querySelector('#jumboText').addEventListener('click', replayJumbo);
// Display projects event listener
document.querySelector('#projectsBtn').addEventListener('click', displayProjects);
// Display projects event listener
document.querySelector('#contactBtn').addEventListener('click', displayContactForm);
// Check validity/submit of form event listener
document.querySelector('#mainDisplay').addEventListener('click', checkFormValidityAndSubmit);

// Calls html to write onto screen
function writeCode(){
  codeWriter.writeCode();
}

// Replay jumbotron 'animation'
function replayJumbo(e){
  if(e.target.classList.contains('replayBtn')){
    ui.changeJumbotronState('code', () => writeCode());
  }
}

// Projects button pressed
function displayProjects(e){
  if(document.querySelector('#projectsBtn').querySelector('h2').textContent === 'About Me'){
    ui.changeMainDisplayState('about');
  } else{
    if(sessionStorage.getItem('repos')){
      ui.changeMainDisplayState('projects', JSON.parse(sessionStorage.getItem('repos')));
    } else{
      github.getRepos()
        .then(data => {
          sessionStorage.setItem('repos', JSON.stringify(data.repos));
          ui.changeMainDisplayState('projects', data.repos);
        })
        .catch(err => console.log(err));
    }
  }
}

// Contact Form button pressed
function displayContactForm(){
  if(document.querySelector('#contactBtn').querySelector('h2').textContent === 'About Me'){
    ui.changeMainDisplayState('about');
  } else{
    ui.changeMainDisplayState('contact');
  }

}

// Check form validity on input blur
function checkFormValidityAndSubmit(e){
  if(e.target.classList.contains('needs-validation')){
    e.target.addEventListener('blur', () => formSubmit.checkInputValidity(e.target));
  }
  if(e.target.type === 'submit'){
    e.preventDefault();
    if(!e.target.parentElement.checkValidity()){
      formSubmit.showFormInvalid(e.target.parentElement);
    } else{
      formSubmit.clearForm(e.target.parentElement);
      formSubmit.showMessage();
    }
  }
}
