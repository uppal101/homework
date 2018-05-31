// Validate data entry (age is required and > 0, relationship is required)
// Add people to a growing household list
// Remove a previously added person from the list
// Display the household list in the HTML as it is modified
// Serialize the household as JSON upon form submission as a fake trip to the serve

let count = 0;
const add = document.getElementsByClassName('add');
const age = document.getElementsByName('age');
const relationship = document.getElementsByName('rel')[0];
const smoker = document.getElementsByName('smoker');
const list = document.getElementsByClassName('household');


// function validateAge() {
//   age[0].attributes.required = "required";
//
//   age[0].addEventListener('blur', function() {
//     if (!Number.isInteger(age[0].innerHTML)) {
//       window.alert("Please enter a number")
//     } else if (age[0].innerHTML <= 0) {
//       window.alert("Please enter a valid age if newborn enter 1")
//     }
//     return true;})
// }

function requireRelationship() {
  return relationship.attributes.required = 'required';
}


add[0].setAttribute('onClick', addPerson())

function addPerson() {
    // validateAge();
    requireRelationship();
    const person = document.createElement('li');
    person.setAttribute('class', 'person')
    person.setAttribute('id', `item${count}`)
    person.innerText = `Age: ${age[0].value}, Relationship: ${relationship.options[relationship.selectedIndex].text}, Smoker: ${smoker[0].value}`;
    list[0].appendChild(person);
    const removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'remove')
    removeButton.setAttribute('onClick', 'removePerson("'+'item'+count+'")');
    removeButton.innerText= 'remove'
    person.appendChild(removeButton)
    count++
    console.log()
    return person;
}

function removePerson(count) {
  const individual = document.getElementById(count)
    return list[0].removeChild(individual);

}

function serializeJSON() {
  const submit = document.querySelector('button[type="submit"]');

  const server = document.getElementsByClassName('debug');

  submit.addEventListener('onClick', function() {
    console.log(list[0].textContent)
    const json = JSON.stringify(list[0].textContent)
    return server[0].appendChild(json)
  })
}

addPerson()
removePerson()
serializeJSON()
