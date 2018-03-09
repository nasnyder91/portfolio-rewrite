class FormSubmit {
  checkValidity(form){
    const inputs = form.getElementsByClassName('needs-validation');

    for(let i = 0; i < inputs.length; i++){
      if(inputs[i].checkValidity() === false){
        inputs[i].classList.add('is-invalid');
      } else {
        inputs[i].classList.add('is-valid');
      }
    }
  }
}

export const formSubmit = new FormSubmit();
