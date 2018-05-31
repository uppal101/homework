// Validate data entry (age is required and > 0, relationship is required)
// Add people to a growing household list
// Remove a previously added person from the list
// Display the household list in the HTML as it is modified
// Serialize the household as JSON upon form submission as a fake trip to the server


var count = 0;
var add = document.getElementsByClassName('add')[0];
var age = document.getElementsByName('age')[0];
var relationship = document.getElementsByName('rel')[0];
var smoker = document.getElementsByName('smoker');
var list = document.getElementsByClassName('household');
var submit = document.querySelector('button[type="submit"]');
var server = document.getElementsByClassName('debug');

add.setAttribute('onClick', 'return addPerson()')
submit.setAttribute('onClick', 'return serializeJSON()')


function validateAge() {
  if(isNaN(age.value) || age.value <= 0 || age.value > 100) {
     alert("Please enter number for age")
  }
}

function requireRelationship() {
  if(relationship.options[relationship.selectedIndex].text === '---') {
    alert("Please select relationship")
  }
}

function addPerson() {
  validateAge();
  requireRelationship();


  if (isNaN(age.value) || age.value <= 0 || age.value > 100 ) {
    return false;
  }

  if (relationship.options[relationship.selectedIndex].text === '---') {
    return false
  }

    var person = document.createElement('li');
    person.setAttribute('class', 'person')
    person.setAttribute('id', `item${count}`)
    person.appendChild(document.createTextNode(`Age: ${age.value}, Relationship: ${relationship.options[relationship.selectedIndex].text}, Smoker: ${smoker[0].checked}`));
    list[0].appendChild(person)
    var removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'remove')
    removeButton.setAttribute('onClick', 'return removePerson("'+'item'+count+'")');
    removeButton.innerText= 'remove'
    person.appendChild(removeButton)
    count++

    return false;
}

function removePerson(count) {
  var individual = document.getElementById(count)
  list[0].removeChild(individual);
  return false;
}

function serializeJSON() {
  server[0].style.display = 'block'
  server[0].style.border = 'none'

  var json = JSON.stringify(list[0].textContent)
  server[0].innerText = json
  return false;

}
