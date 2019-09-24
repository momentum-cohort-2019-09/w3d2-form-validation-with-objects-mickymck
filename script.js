console.log('Add validation!')

function query(selector) {
    return document.querySelector(selector)
}

function querys(selector) {
    return document.querySelectorAll(selector)
}

class Field {
    constructor(input) {
        this.input = input;
    }
    fieldIsNotEmpty () {
        return this.input !== ""
    }
    isNumber () {
        return !isNaN(this.input)
    }

    isCVV () {
        return this.input.length === 3
    }

}

query("#parking-form").addEventListener("submit", function (event) {
    event.preventDefault()

let nameField = new Field (query("#name").value.trim())

let daysField = new Field (query("#days").value.trim())

let cvvField = new Field (query("#cvv").value.trim())

nameField.fieldIsNotEmpty()

daysField.fieldIsNotEmpty()

daysField.isNumber()

cvvField.isNumber()

cvvField.isCVV()

})

