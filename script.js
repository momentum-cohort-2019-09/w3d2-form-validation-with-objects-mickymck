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

    validate(value) {
        return this.test(value)
    }
}

class Field {
    constructor(inputDiv, validations) {
        this.inputDiv = inputDiv
        this.validations = validations || [];
    }

    markValid() {
        this.inputDiv.classList.remove("input-invalid")
        this.inputDiv.classList.add("input-valid")
    }

    markInvalid() {
        this.inputDiv.classList.remove("input-valid")
        this.inputDiv.classList.add("input-invalid")
    }

    theBigGetter() {
        let input = this.inputDiv.querySelector("input")
        let value = input.value
        return value
    }

    validateField() {
        const value = this.theBigGetter()
        for (let validation of this.validations) {
            if (!validation.validate(value)) {
                this.markInvalid()
            } else {
                this.markValid()
            }
        }
    }

    // mark each field as valid

    // provide a total for the user, based on the date and days fields


}

let fieldIsNotEmpty = new Validator(input => !!input, "this field must not be empty")



let name = new Field(query("#name-field"), [fieldIsNotEmpty])

let car = new Field(query("#car-info-field"), [fieldIsNotEmpty])

let date = new Field(query("#start-date-field"), [fieldIsNotEmpty])

let days = new Field(query("#days-field"), [fieldIsNotEmpty])

let creditCard = new Field(query("#credit-card-field"), [fieldIsNotEmpty])

let cvv = new Field(query("#cvv-field"), [fieldIsNotEmpty])

let expiration = new Field(query("#expiration-field"), [fieldIsNotEmpty])



query("#parking-form").addEventListener("submit", (event) => {
    event.preventDefault()
})

