import { ui } from './ui';

class CodeWriter {
  constructor(){
    this.entityMap = {
                      '&': '&amp;',
                      '<': '&lt;',
                      '>': '&gt;',
                      '"': '&quot;',
                      "'": '&#39;',
                      '/': '&#x2F;',
                      '`': '&#x60;',
                      '=': '&#x3D;'
                    };
    this.finalHTML = "<div class='container text-center'>~*<h1 class='display-3'>Nick Snyder <span class='orange'>|</span> <span       class='blue'>Developer</span></h1>~*<br><br>~*<h2>Welcome to my portfolio</h2>~</div>";
  }

  // Cycle through final text and send to UI controller
  writeCode(){
    const finalTextArr = Array.from(this.finalHTML);
    let currentOutput = '';
    let inQuote = false;
    let iteration = 0;

    function _loopThroughText(){
      currentOutput = currentOutput.slice(0,-1);
      let char = finalTextArr[iteration];

      if(char === '~'){
        currentOutput += "<br>" + "|";
      } else if(char === '*'){
        currentOutput += "&nbsp; &nbsp; &nbsp; &nbsp; " + "|";
      } else if((char === "'") && (inQuote === false)){
        currentOutput += "<span style='color:green;'>" + codeWriter._escapeHTML(char) + "</span>" + "|";
        inQuote = true;
      } else if((char === "'") && (inQuote === true)){
        currentOutput += "<span style='color:#24cc18;'>" + codeWriter._escapeHTML(char) + "</span>" + "|";
        inQuote = false;
      } else{
        if(inQuote === true){
          currentOutput += "<span style='color:#24cc18;'>" + codeWriter._escapeHTML(char) + "</span>" + "|";
        } else{
          currentOutput += codeWriter._escapeHTML(char) + "|";
        }
      }

      ui.printText(currentOutput);

      if(iteration+1 === finalTextArr.length){
        return;
      } else{
        iteration++;
        setTimeout(_loopThroughText, (Math.floor(Math.random()*(61) + 20)));
      }
    }
    _loopThroughText(finalTextArr[iteration]);
  }


  _colorText(input){
    let output = input;
    output = output.replace("&lt;div", "&lt;<span style='color:red;'>div</span>");
    output = output.replace("div&gt;", "<span style='color:red;'>div</span>&gt;");

    output = output.replace("&lt;h1", "&lt;<span style='color:red;'>h1</span>");
    output = output.replace("h1&gt;", "<span style='color:red;'>h1</span>&gt;");

    output = output.replace("&lt;h2", "&lt;<span style='color:red;'>h2</span>");
    output = output.replace("h2&gt;", "<span style='color:red;'>h2</span>&gt;");

    output = output.replace("&lt;span", "&lt;<span style='color:red;'>span</span>");
    output = output.replace("span&gt;", "<span style='color:red;'>span</span>&gt;");

    output = output.replace("br&gt;", "<span style='color:red;'>br</span>&gt;");

    output = output.replace("class=", "<span style='color:orange;'>class</span>=");

    output = output.replace("id=", "<span style='color:blue;'>id</span>=");

    return output;
  }

  _escapeHTML(input){
    return String(input).replace(/[&<>"'`=\/]/g, (s) => this.entityMap[s]);
  }
}

export const codeWriter = new CodeWriter();
