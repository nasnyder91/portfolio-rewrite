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
    this.finalText = "<div class='text-center'>~*<h1 class='display-3 text-secondary'>Nick Snyder <span class='orange'>|</span> <span class='blue'>Developer</span></h1>~*<br/><br/>~*<h2 class='text-secondary subtitle'>Full stack web development</h2>~</div>~<button class='replayBtn btn btn-outline-secondary btn-sm float-right'>Replay</button>";
    String.prototype.replaceAll = function(search, replace)
    {
        if (replace === undefined) {
            return this.toString();
        }

        return this.split(search).join(replace);
    }
  }

  // Cycle through final text and send to UI controller
  writeCode(){
    const finalTextArr = Array.from(this.finalText);
    let currentOutput = '';
    let inQuote = false;
    let iteration = 0;

    function _loopThroughText(){
      let char = finalTextArr[iteration];

      if(char === '~'){
        currentOutput += "<br>";
      } else if(char === '*'){
        currentOutput += "&nbsp; &nbsp; &nbsp; &nbsp; ";
      } else if((char === "'") && (inQuote === false)){
        currentOutput += "<span style='color:green;'>" + codeWriter._escapeHTML(char) + "</span>";
        inQuote = true;
      } else if((char === "'") && (inQuote === true)){
        currentOutput += "<span style='color:#24cc18;'>" + codeWriter._escapeHTML(char) + "</span>";
        inQuote = false;
      } else{
        if(inQuote === true){
          currentOutput += "<span style='color:#24cc18;'>" + codeWriter._escapeHTML(char) + "</span>";
        } else{
          currentOutput += codeWriter._escapeHTML(char);
        }
      }

      ui.printText(codeWriter._colorText(currentOutput) + '|');

      if(iteration+1 === finalTextArr.length){
        ui.changeJumbotronState('html');
        return;
      } else{
        iteration++;
        return setTimeout(_loopThroughText, (5 + Math.floor(Math.random()*(150) + 1)));
      }
    }
    _loopThroughText(finalTextArr[iteration]);
  }


  _colorText(input){
    let output = input.replaceAll("&lt;div", "&lt;<span style='color:red;'>div</span>");
    output = output.replaceAll("div&gt;", "<span style='color:red;'>div</span>&gt;");

    output = output.replaceAll("&lt;button", "&lt;<span style='color:red;'>button</span>");
    output = output.replaceAll("button&gt;", "<span style='color:red;'>button</span>&gt;");

    output = output.replaceAll("&lt;h1", "&lt;<span style='color:red;'>h1</span>");
    output = output.replaceAll("h1&gt;", "<span style='color:red;'>h1</span>&gt;");

    output = output.replaceAll("&lt;h2", "&lt;<span style='color:red;'>h2</span>");
    output = output.replaceAll("h2&gt;", "<span style='color:red;'>h2</span>&gt;");

    output = output.replaceAll("&lt;span", "&lt;<span style='color:red;'>span</span>");
    output = output.replaceAll("span&gt;", "<span style='color:red;'>span</span>&gt;");

    output = output.replaceAll("br&gt;", "<span style='color:red;'>br</span>&gt;");

    output = output.replaceAll("class=", "<span style='color:orange;'>class</span>=");

    output = output.replaceAll("id=", "<span style='color:blue;'>id</span>=");

    return output;
  }

  _escapeHTML(input){
    return String(input).replace(/[&<>"'`=\/]/g, (s) => this.entityMap[s]);
  }
}



export const codeWriter = new CodeWriter();
