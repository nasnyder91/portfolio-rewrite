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

    for(let i = 0; i< children.length; i++){
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

  submitForm(form){
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    const url = 'https://formspree.io/snyderdeveloper@gmail.com';
    const data = {
      name:name,
      _replyto:email,
      email:email,
      comments:message,
      _subject:'Portfolio form submission',
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .catch(error => console.error('Error:', error))
    .then(res => res.json())
    .then(response => console.log('Success:', response));
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
