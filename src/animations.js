class Animation {
  // Fade out element
  fadeOutElement(element, duration, callback){
    checkClass: if(element.classList.contains('fadein')){
      element.classList.replace('fadein', 'fadeout');
    } else if(element.classList.contains('fadeout')){
      break checkClass;
    } else{
      element.classList.add('fadeout');
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
      element.classList.add('fadein');
    }
    element.style.setProperty('--duration', duration + 'ms');
    setTimeout(callback, duration);
  }

  // Slide in right
  slideInRight(element, duration, bounce, callback){
    element.classList.add('slideInRight');

    element.style.setProperty('--duration', duration + 'ms');
    setTimeout(() => {
      element.classList.remove('slideInRight');
      callback;
    }, duration);
  }

  // Slide out right
  slideOutRight(element, duration, bounce, callback){
    element.classList.add('slideOutRight');

    element.style.setProperty('--duration', duration + 'ms');
    setTimeout(() => {
      element.classList.remove('slideOutRight');
      callback();
    }, duration);
  }

  // Slide in left
  slideInLeft(element, duration, bounce, callback){
    element.classList.add('slideInLeft');

    element.style.setProperty('--duration', duration + 'ms');
    setTimeout(() => {
      element.classList.remove('slideInLeft');
      callback;
    }, duration);
  }

  // Slide out left
  slideOutLeft(element, duration, bounce, callback){
    element.classList.add('slideOutLeft');

    element.style.setProperty('--duration', duration + 'ms');
    setTimeout(() => {
      element.classList.remove('slideOutLeft');
      callback();
    }, duration);
  }
}

export const animation = new Animation();
