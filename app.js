// import functions and grab DOM elements
const addForm = document.getElementById('add-ingredient');
// let state
let ingredients = [];
// set event listeners 
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(addForm);
    const item = {
        ingredient: data.get('ingredient'),
        qty: data.get('qty'),
        measurement: data.get('measurement'),
    };
    ingredients.push(item);
    addForm.reset();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
