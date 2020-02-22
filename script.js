let inputs = document.querySelector('.input-validation');

inputs.addEventListener('input', function (event) {
  if (event.target.dataset.rule) {
    let rule = event.target.dataset.rule;
    let value = event.target.value;
    let check;

    switch (rule) {
      case 'date':
        check = /[0-3][0-9]\.[0-1][0-9]\.[1-2][0-9][0-9][0-9]/.test(value)
        // check = length >= from && length <= to;
        break;
      case 'tel':
        check = /^8\d+$/.test(value) && event.target.value.length === 11;
        break;
      case 'email':
        check = /\w+@.+\.(com|ru)/.test(value)
        break;
      case 'domain':
        check = /w{3}\.\w+\.\w+/.test(value)
        break;
    }

    event.target.classList.remove('input-invalid');
    event.target.classList.remove('input-valid');
    if (check) {
      event.target.classList.add('input-valid');
    } else {
      event.target.classList.add('input-invalid');
    }
  }
});
