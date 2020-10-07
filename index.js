// App
const appDescription = [
    '** No Selection **',
    'Deep Fried Calamari',
    'Soup du Jour',
    'Garden Salad',
    'Garlic Bread',
];
const appPrice = [0.0, 7.5, 4.99, 3.99, 4.5];

// Entree
const entreeDescription = [
    '** No Selection **',
    'Rib-Steak',
    'Fettuccini Alfredo',
    'Pan-Fried Sole',
    'Mediterranean Platter',
    'Vegetarian Lasagna',
];
const entreePrice = [0.0, 15.95, 11.25, 17.95, 13.5, 9.0];

// SubMenus
const subMenus = [
    { name: 'appetizer', description: appDescription, price: appPrice },
    { name: 'entree', description: entreeDescription, price: entreePrice },
];

// Insert Sub-menus list function
insertSubmMenuList = () => {
    var str = '';

    subMenus.forEach((subMenu) => {
        const subMenuLen = subMenu.description.length;

        for (let i = 0; i < subMenuLen; i++) {
            str += `<li>${subMenu.description[i]} $${subMenu.price[i].toFixed(
                2
            )}</li>`;
        }
        document.querySelector(`.${subMenu.name}-list`).innerHTML = str;

        str = '';
    });
};

window.onload = insertSubmMenuList();
