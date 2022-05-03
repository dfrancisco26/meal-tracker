// import functions and grab DOM elements
const addForm = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');
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
    renderIngredients(item);
    addForm.reset();

});


function renderIngredientLI(item) {
    const li = document.createElement('li');
    li.textContent = `${item.ingredient} ${item.qty} ${item.measurement}`;
    return li;
}
function renderIngredients() {
    ingredientList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredientLI(item);
        ingredientList.appendChild(li);
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
