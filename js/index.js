
// Get Input Value By ID

const getInputValueById = id => {

  const inputValue = document.getElementById(id);
  const value = inputValue.value;

  return value;
}

// Send Name
const sendName = () => {
  const name = getInputValueById('name');
  // console.log(name)
  localStorage.setItem('Name', name)
}

// Remove Name

const removeName = () => {
  localStorage.removeItem('Name')
}

// Send Email 

const sendEmail = () => {
  const email = getInputValueById('email');
  // console.log(email)
  localStorage.setItem('Email', email)
}

// Remove Email

const removeEmail = () => {
  localStorage.removeItem('Email')
}

// Send Message 

const sendMsg = () => {
  const msg = getInputValueById('message');
  // console.log(msg)
  localStorage.setItem('Message', msg)
}

// Remove Message

const removeMsg = () => {
  localStorage.removeItem('Message')
}

// Get Person Info From LS

const getPersonInfo = () => {
  const savedPerson = localStorage.getItem('Person');

  let Person = {};

  if (savedPerson) {
    Person = JSON.parse(savedPerson);
  }
  return Person;
}

// Get All Input Value when click send button

const getInputValues = () => {
  const name = getInputValueById('name');
  const email = getInputValueById('email');
  const msg = getInputValueById('message');
  savePersoneInfo(name, email, msg)
  // console.log(name,email,msg)
  location.reload()
}

// Save Person Info to LS

const savePersoneInfo = (name, email, msg) => {
  const Person = getPersonInfo();
  Person['Name'] = name;
  Person['Email'] = email;
  Person['Message'] = msg;

  const personeStringified = JSON.stringify(Person);

  localStorage.setItem('Person', personeStringified)
}

// Display Person Info

const displayPersonInfo = () => {

  const Person = getPersonInfo();

  console.log(Person)

  for (const person in Person) {

    // const person = person;
    const value = Person[person];
    console.log(person, value);
    const personContainer = document.getElementById('display-person');
    const li = document.createElement('li');

    li.innerHTML = `${person} : ${value}`;

    personContainer.appendChild(li)
  }

  
}

const resetLs = () => {
  localStorage.clear();
  location.reload();
}

displayPersonInfo()