import { ui } from './ui';
import { codeWriter } from './codewriter';
import { github } from './github';
import { formSubmit } from './formsubmit';

//-----------------------------------------EVENT LISTENERS-----------------------------------------
// Begin 'animation' on DOM load
document.addEventListener('DOMContentLoaded', writeCode);
// Replay button event listener
document.querySelector('#jumboText').addEventListener('click', replayJumbo);
// Display projects event listener
document.querySelector('#projectsBtn').addEventListener('click', displayProjects);
// Display projects event listener
document.querySelector('#contactBtn').addEventListener('click', displayContactForm);
// Submit form event listener
document.querySelector('#mainDisplay').addEventListener('click', submitForm);

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
function displayProjects(){
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

// Contact Form button pressed
function displayContactForm(){
  ui.changeMainDisplayState('contact');
}


function submitForm(e){
  e.preventDefault();
  console.log(123);
  formSubmit.checkValidity(e.target);
}
