const scriptURL = ''

const form = document.forms['form-masukan']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You! your form is submitted succesfully"))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!', error.message  ))
}) 