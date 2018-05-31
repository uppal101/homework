// Validate data entry (age is required and > 0, relationship is required)
// Add people to a growing household list
// Remove a previously added person from the list
// Display the household list in the HTML as it is modified


let count = 0;
const add = document.getElementsByClassName('add')[0];
const age = document.getElementsByName('age')[0];
const relationship = document.getElementsByName('rel')[0];
const smoker = document.getElementsByName('smoker');
const list = document.getElementsByClassName('household');
const submit = document.querySelector('button[type="submit"]');
let validAge;
let relationshipSelected;

add.setAttribute('onClick', 'return addPerson()')
submit.setAttribute('onClick', 'return serializeJSON()')



function validateAge() {
  if(isNaN(age.value) || age.value <= 0 || age.value > 100) {
    validAge = false;
     alert("Please enter number for age")
  }
  validAge = true;
}
console.log(validAge)

function requireRelationship() {
  if(relationship.options[relationship.selectedIndex].text === '---') {
    relationshipSelected = false
    alert("Please select relationship")
  }
  relationshipSelected = true;
}

function addPerson() {
  validateAge();
  requireRelationship();

  if (validAge && relationshipSelected) {
    const person = document.createElement('li');
    person.setAttribute('class', 'person')
    person.setAttribute('id', `item${count}`)
    person.appendChild(document.createTextNode(`Age: ${age.value}, Relationship: ${relationship.options[relationship.selectedIndex].text}, Smoker: ${smoker[0].checked}`));
    list[0].appendChild(person)
    const removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'remove')
    removeButton.setAttribute('onClick', 'return removePerson("'+'item'+count+'")');
    removeButton.innerText= 'remove'
    person.appendChild(removeButton)
    count++
  }
    return false;
}

function removePerson(count) {
  const individual = document.getElementById(count)
  list[0].removeChild(individual);
  return false;
}

function serializeJSON() {
  const server = document.getElementsByClassName('debug');

  const json = JSON.stringify(list[0].textContent)
  server[0].innerHTML = json
  return false;

}
