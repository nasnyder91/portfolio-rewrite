class Animation {
  // Fade out element
  fadeOutElement(element, duration, callback){
    checkClass: if(element.classList.contains('fadein')){
      element.classList.replace('fadein', 'fadeout');
    } else if(element.classList.contains('fadeout')){
      break checkClass;
    } else{
      element.className += ' fadeout';
    }
    element.style.setProperty('--duration', duration + 'ms');
    setTimeout(callback, duration);
  }

  // Fade in element
  fadeInElement(element, duration, callback){
    checkClass: if(element.classList.contains('fadeout')){
      element.classList.replace('fadeout', 'fadein');
    } else if(element.classList.contains('fadein')){
      break checkClass;
    } else{
      element.className += ' fadein';
    }
    element.style.setProperty('--duration', duration + 'ms');
    setTimeout(callback, duration);
  }
}

export const animation = new Animation();
