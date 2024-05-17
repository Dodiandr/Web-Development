const priceInput = document.getElementById('priceInput');
let errorSpan;
let priceSpan;
let closeButton;
let errorMessageShown = false;


priceInput.addEventListener('blur', function(){
  let priceValue = parseFloat(priceInput.value);

  if (priceInput.value.trim() === ''){
    if (errorSpan){
      errorSpan.remove();
      priceInput.classList.remove('error');
      errorMessageShown = false;
    }
    if (priceSpan){
      priceSpan.remove();
      closeButton.remove();
    }
    return;
  }

  if (isNaN(priceValue) || priceValue < 0){
    priceInput.classList.add('error');
    if (!errorSpan || !errorMessageShown){
      errorSpan = document.createElement('span');
      errorSpan.textContent = ' Please enter correct price';
      priceInput.style.borderColor = 'red'
      priceInput.style.color = 'red'
      errorSpan.classList.add('error');
      priceInput.parentNode.insertBefore(errorSpan, priceInput.nextSibling);
      errorMessageShown = true;
    }
    if (priceSpan){
      priceSpan.style.display = 'none';
      closeButton.style.display = 'none';
    }
    return;
  }

  if (!priceSpan){
    priceSpan = document.createElement('span');
    priceInput.style.borderColor = 'green'
    priceInput.style.color = 'green'
    priceInput.parentNode.insertBefore(priceSpan, priceInput.nextSibling);

    closeButton = document.createElement('button');
    closeButton.textContent = ' X ';
    closeButton.addEventListener('click', function(){
      priceSpan.remove();
      closeButton.remove();
      priceInput.value = '';
      priceSpan = null;
    });
    priceInput.parentNode.insertBefore(closeButton, priceSpan.nextSibling);
  }
  priceSpan.textContent = ` Current price: ${priceValue} `;
  priceSpan.style.display = 'inline-block';
  closeButton.style.display = 'inline-block';

  if (errorSpan){
    errorSpan.remove();
    priceInput.classList.remove('error');
    errorMessageShown = false;
  }
});




