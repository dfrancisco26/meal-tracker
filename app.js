// import functions and grab DOM elements
const addForm = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');
const removeButton = document.getElementById('remove');
const saveMeal = document.getElementById('save-meal');
const mealName = document.getElementById('meal');
const mealList = document.getElementById('meal-list');
// let state
let ingredients = [];
let meals = [];
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

removeButton.addEventListener('click', () => {
    removeLast();
    renderIngredients();
});

saveMeal.addEventListener('click', () => {
    const name = mealName.value;
    const count = ingredients.length;
    meals.push({ name, count });
    renderMeals();
    resetIngredients();
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

function renderMeals() {
    mealList.textContent = '';
    for (let meal of meals) {
        const li = renderMealLI(meal);
        mealList.append(li);
    }
}

function renderMealLI(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} ${meal.count}`;
    return li;
}

function removeLast() {
    ingredients.pop();
}

function resetIngredients() {
    ingredients = [];
    ingredientList.textContent = '';
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
