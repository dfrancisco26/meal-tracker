

export function renderIngredientLI(item) {
    const li = document.createElement('li');
    li.textContent = `${item.ingredient} ${item.qty} ${item.measurement}`;
    return li;
}

export function renderIngredients() {
    ingredientList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredientLI(item);
        ingredientList.appendChild(li);
    }
}

export function removeLast() {
    ingredients.pop();
}

