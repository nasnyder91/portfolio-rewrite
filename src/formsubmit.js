class FormSubmit {
  checkInputValidity(input){
    if(!input.checkValidity()){
      this.makeInvalid(input);
    } else{
      this.makeValid(input);
    }
  }

  showFormInvalid(form){
    const children = form.children;

    for(let i = 0; i < children.length; i++){
      const input = children[i].querySelector('.needs-validation');

      if(input !== null){
        if(!input.checkValidity()){
          this.makeInvalid(input);
        } else{
          this.makeValid(input);
        }
      }
    }
  }

  // Clear the form inputs
  clearForm(form){
    form.querySelector('#name').value = '';
    form.querySelector('#email').value = '';
    form.querySelector('#message').value = '';
  }

  // Show thank you message
  showMessage(){
    const message = document.querySelector('#formThankYou');
    message.style.display = 'block';

    setTimeout(() => message.style.display = 'none', 5000);
  }

  makeInvalid(input){
    input.classList.add('is-invalid');
  }

  makeValid(input){
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  }

}

export const formSubmit = new FormSubmit();
