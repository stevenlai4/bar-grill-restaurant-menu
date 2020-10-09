// App
const appDescription = [
    '** No Selection **',
    'Deep Fried Calamari',
    'Soup du Jour',
    'Garden Salad',
    'Garlic Bread',
];
const appPrices = [0.0, 7.5, 4.99, 3.99, 4.5];

// Entree
const entreeDescription = [
    '** No Selection **',
    'Rib-Steak',
    'Fettuccini Alfredo',
    'Pan-Fried Sole',
    'Mediterranean Platter',
    'Vegetarian Lasagna',
];
const entreePrices = [0.0, 15.95, 11.25, 17.95, 13.5, 9.0];

const dessertDescription = [
    '** No Selection **',
    'Ice Cream Sundae',
    'Cheesecake',
    'Chocolate Truffle Cake',
    'Raspberry Mousse',
];
const dessertPrices = [0, 2.95, 5, 6, 4.5];

const beverageDescription = [
    '** No Selection **',
    'Water',
    'Juice',
    'Pop',
    'Milk',
    'Coffee',
    'Tea',
];
const beveragePrices = [0, 0, 2, 2, 2, 1.75, 1.75];

// SubMenus
const subMenus = [
    { name: 'appetizer', description: appDescription, price: appPrices },
    { name: 'entree', description: entreeDescription, price: entreePrices },
    { name: 'dessert', description: dessertDescription, price: dessertPrices },
    {
        name: 'beverage',
        description: beverageDescription,
        price: beveragePrices,
    },
];

// Elements
const completeBtn = document.querySelector('#complete-btn');
const clearBtn = document.querySelector('#clear-btn');

// Insert Sub-menus list function
const insertSubMenuList = () => {
    let str = '';

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

// Customer Input Validation
const isValidInput = (selection, subMenuLen) => {
    const isValid =
        selection &&
        Number.isInteger(Number(selection)) &&
        selection >= 1 &&
        selection <= subMenuLen
            ? true
            : false;

    return isValid;
};

// Calculate Total Price
const calcTotalPrice = () => {
    let orderedList = [];
    let totalPrice = 0;

    for (let i = 0; i < subMenus.length; i++) {
        const subMenuLen = subMenus[i].description.length;

        const selection = document
            .querySelector(`#${subMenus[i].name}-option`)
            .value.trim();

        if (isValidInput(selection, subMenuLen)) {
            totalPrice += parseFloat(subMenus[i].price[selection - 1]);
            orderedList.push(subMenus[i].description[selection - 1]);
        } else {
            orderedList = [];
            totalPrice = 0;

            break;
        }
    }

    return { orderedList, totalPrice };
};

// Print Receipt
const displayReceipt = () => {
    let str = '';
    const { orderedList, totalPrice } = calcTotalPrice();

    if (orderedList.length !== 0) {
        str = '<ul><li>Your current order consists of</li>';

        for (let i = 0; i < orderedList.length; i++) {
            if (orderedList[i] !== '** No Selection **') {
                str += `<li>${orderedList[i]}</li>`;
            }
        }

        str += `<li>your total bill comes to: $${totalPrice.toFixed(
            2
        )}</li></ul>`;
    } else {
        str += '<p>Invalid Inputs! Please Insert Valid Inputs!</p>';
    }

    document.querySelector('.receipt').innerHTML = str;
};

// Clear order function
const resetSelection = () => {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach((input) => {
        input.value = 1;
    });

    document.querySelector('.receipt').innerHTML = '';
};

// Complete Button
completeBtn.addEventListener('click', displayReceipt);

// Clear Button
clearBtn.addEventListener('click', resetSelection);

window.onload = insertSubMenuList();
