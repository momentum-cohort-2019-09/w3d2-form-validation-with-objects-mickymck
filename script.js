// console.log('Add validation!')

function query(selector) {
    return document.querySelector(selector)
}

function querys(selector) {
    return document.querySelectorAll(selector)
}

class Validator {
    constructor(test, errorMsg) {
        this.test = test
        this.errorMsg = errorMsg
    }

    validate (trueOrFalse) {
        return this.test (trueOrFalse)
    }
}

class Field {
    constructor(fieldDiv, input) {
        this.fieldDiv = fieldDiv
        this.input = input;
    }

    markValid() {
        this.fieldDiv.classList.remove("input-invalid")
        this.fieldDiv.classList.add("input-valid")
    }

    markInvalid() {
        this.fieldDiv.classList.remove("input-valid")
        this.fieldDiv.classList.add("input-invalid")
    }


}

    // mark each field as valid

    // provide a total for the user, based on the date and days fields

query("#parking-form").addEventListener("submit", function (event) {
    event.preventDefault()

    let name = new Field(query("#name-field"), query("#name").value)

    let car = new Field(query("#name-field"), query("#car-info").value)

    let date = new Field(query("#name-field"), query("#start-date").value)

    let days = new Field(query("#name-field"), query("#days").value)

    let creditCard = new Field(query("#name-field"), query("#credit-card").value)

    let cvv = new Field(query("#name-field"), query("#cvv").value)

    let expiration = new Field(query("#name-field"), query("#expiration").value)

    console.group(name.fieldIsNotEmpty())

    car.fieldIsNotEmpty()

    date.fieldIsNotEmpty()

    days.fieldIsNotEmpty()

    creditCard.fieldIsNotEmpty()

    cvv.fieldIsNotEmpty()

    expiration.fieldIsNotEmpty()

    // date.isFutureDate()

    days.isNumber()

    cvv.isNumber()

    cvv.isCVV()

})

let fieldIsNotEmpty = new Validator ( , "this field must not be empty")

let isNumber = new Validator ( , "this field must be a number")

let isCVV = new Validator ( , "CVV must be 3 digits")

let isFutureDate = new Validator ( , "date must not be in the past")
