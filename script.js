var dessertOptions = ["No Selection", "Ice Cream Sundae", "Cheesecake", "Chocolate Truffle Cake", "Raspberry Mousse"]
var dessertPrices  = [0, 2.95, 5, 6, 4.50]

var beverageOptions = ["No Selection", "Water", "Juice", "Pop", "Milk", "Coffee", "Tea"]
var beveragePrices = [0, 2, 2, 2, 1.75, 1.75]

const subMenus = [
    { name: 'Dessert', description: dessertOptions, price: dessertPrices },
    { name: 'Beverage', description: entreeDescription, price: entreePrice },
]

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