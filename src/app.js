import { ui } from './ui';
import { codeWriter } from './codewriter';
import { github } from './github';

//-----------------------------------------EVENT LISTENERS-----------------------------------------
// Begin 'animation' on DOM load
document.addEventListener('DOMContentLoaded', writeCode);
// Replay button event listener
document.querySelector('#jumboText').addEventListener('click', replayJumbo);
// Display projects event listener
document.querySelector('#projectsBtn').addEventListener('click', displayProjects);
// Display projects event listener
document.querySelector('#contactBtn').addEventListener('click', displayContactForm);

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
  github.getRepos()
    .then(data => {
      ui.changeMainDisplayState('projects', data.repos);
    })
    .catch(err => console.log(err));
}

// Contact Form button pressed
function displayContactForm(){
  ui.changeMainDisplayState('contact');
}
