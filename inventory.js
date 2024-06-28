class food {
    static id = 1;

    constructor (name, dateBought, quantityMeasurement, quantityNumber = 1) {
        this.id = food.id;
        this.name = name;
        this.dateBought = dateBought;
        this.quantityMeasurement = quantityMeasurement;
        this.quantityNumber = quantityNumber;

        food.id++;
    }

    calculateDaysLeft(bestBeforeDate, today) {
        const daysLeft =  bestBeforeDate - today;
        return daysLeft;
    }
}

const inventory = [];
const today = new Date();
const foodObject = {};

const foodArticle = document.getElementById('food-name');
const dateBought = document.getElementById('date-bought');
const bestBeforeDate = document.getElementById('best-before-date');
const quantityNumber = document.getElementById('quantity-in-number');
const quantityMeasurement = document.getElementById('quantity-in-measurement');
const submitButton = document.getElementById('submit-button');

let foodName, buyDate, expiryDate, number, measurement;

function addingEvents(element, variable) {
    element.addEventListener('input', () => {
        foodObject[variable] = element.value.toLowerCase();
    })

}

//adds input event listener to all input fields
addingEvents(foodArticle, 'foodName');
addingEvents(dateBought, 'buyDate');
addingEvents(bestBeforeDate, 'expiryDate')
addingEvents(quantityNumber, 'number');
addingEvents(quantityMeasurement, 'measurement');

//updates a new food object and adds to inventory
submitButton.addEventListener('click', () => {
    newfoodItem = new food(foodObject.foodName, foodObject.buyDate, foodObject.measurement, foodObject.number);
    inventory.push(newfoodItem);
})

//checks if an input is number or not
function numericInputCheck(element) {   
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
     for (let i = 0; i < numbers.length; i++) {
        if (element === numbers[i]) return true;
    }
    return false;
}

//alerts on invalid input
function alertInvalidInput(element) {
    element.addEventListener('input', () => {
        let lastNumber = element.value.split("")[element.value.length - 1]; 
        //stops being annoying on deleting all the inputs
        if (lastNumber) {
            if (!numericInputCheck(lastNumber)) {
                element.value = null;
                alert('Invalid input in number of items');
            }
        }
    })
}

alertInvalidInput(quantityNumber);
alertInvalidInput(quantityMeasurement);

//when focussed changes type of input and returns back to original type on blur
function focusAndBlurEffect(element) {
    element.addEventListener('focus', () => {
        element.type = 'date';
    })
    
    dateBought.addEventListener('blur', () => {
        if (!element.value) {
            element.type= 'text';
        }
    })
};

focusAndBlurEffect(dateBought);
focusAndBlurEffect(bestBeforeDate);