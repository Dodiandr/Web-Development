function displayArrayAsList(){
    const input = prompt('Enter elements separated by commas:', "");
    const array = input.split(',').map(item => item.trim());
  
    const listCreator = document.createElement('ul');

    const listItems = array.map(item =>{
      return `<li>${item}</li>`;
    });
  
    listCreator.innerHTML = listItems.join('');
  
    document.body.appendChild(listCreator);
  }

  displayArrayAsList();