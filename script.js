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

    validate (value) {
        return this.test (value)
    }
}

class Field {
    constructor(inputDiv, validations) {
        this.inputDiv = inputDiv
        this.validations = validations || [];
    }

    theBigGetter() {
        let input = query("#name")
        let value = input.value
        return value
    }

    validateField () {
        const value = this.theBigGetter()
        let errorMsgs = []
        for (let validation of validations) {
            
        }
    }

    // markValid() {
    //     this.fieldDiv.classList.remove("input-invalid")
    //     this.fieldDiv.classList.add("input-valid")
    // }

    // markInvalid() {
    //     this.fieldDiv.classList.remove("input-valid")
    //     this.fieldDiv.classList.add("input-invalid")
    // }

    // mark each field as valid

    // provide a total for the user, based on the date and days fields


}

let fieldIsNotEmpty = new Validator(input => !!input, "this field must not be empty")



let name = new Field(query("#name-field"), [fieldIsNotEmpty])

// let car = new Field(query("#car-field"), [fieldIsNotEmpty])

// let date = new Field(query("#date-field"), [fieldIsNotEmpty])

// let days = new Field(query("#days-field"), [fieldIsNotEmpty])

// let creditCard = new Field(query("#creditCard-field"), [fieldIsNotEmpty])

// let cvv = new Field(query("#cvv-field"), [fieldIsNotEmpty])

// let expiration = new Field(query("#expiration-field"), [fieldIsNotEmpty])



query("#parking-form").addEventListener("submit", function (event) {
    event.preventDefault()
})

