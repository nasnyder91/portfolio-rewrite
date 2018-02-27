import { ui } from './ui';
import { codeWriter } from './codewriter';

//-----------------------------------------EVENT LISTENERS-----------------------------------------
document.addEventListener('DOMContentLoaded', writeCode);

function writeCode(){
  codeWriter.writeCode();
}
