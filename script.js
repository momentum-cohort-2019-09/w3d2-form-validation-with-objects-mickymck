console.log('Add validation!')

function query(selector) {
    return document.querySelector(selector)
}

function querys(selector) {
    return document.querySelectorAll(selector)
}

class Form {
    constructor(fieldDescription) {
        this.nameField = nameField
        this.carField = carField
        this.dateField = dateField
        this.daysField = daysField
        this.creditCardField = creditCardField
        this.cvvField = cvvField
        this.expirationField = expirationField;
    }

    markValid () {
        this.field.classList.remove("input-invalid")
        this.field.classList.add("input-valid")
    }

    markInvalid () {
        this.field.classList.remove("input-valid")
        this.field.classList.add("input-invalid")

        const errorField = document.createElement("p")
        errorField.classList.add("input-hint", "text-danger", "error-message")
        errorField.innerText = "invalid"
        this.field.appendChild(errorField)
    }

    // calculate total
}

class Field {
    constructor(input) {
        this.input = input;
    }

    fieldIsNotEmpty() {
        return this.input !== ""
    }

    isNumber() {
        return !isNaN(this.input)
    }

    isCVV() {
        return this.input.length === 3
    }

    isFutureDate() {
        let now = new Date()
        now.setUTCHours(0, 0, 0, 0)
        let parkDate = new Date(this.date)
        parkDate.setUTCHours(0, 0, 0, 0)
        return parkDate >= now
    }
}

query("#parking-form").addEventListener("submit", function (event) {
    event.preventDefault()

    let nameField = new Field(query("#name").value)

    let carField = new Field(query("#car-info").value)

    let dateField = new Field(query("#start-date").value)

    let daysField = new Field(query("#days").value)

    let creditCardField = new Field(query("#credit-card").value)

    let cvvField = new Field(query("#cvv").value)

    let expirationField = new Field(query("#expiration").value)

    if (nameField.fieldIsNotEmpty()) {
        nameField.markValid ()
    } else {
        nameField.markInvalid ()
    }

    carField.fieldIsNotEmpty()

    dateField.fieldIsNotEmpty()

    daysField.fieldIsNotEmpty()

    creditCardField.fieldIsNotEmpty()

    cvvField.fieldIsNotEmpty()

    expirationField.fieldIsNotEmpty()

    dateField.isFutureDate()

    daysField.isNumber()

    cvvField.isNumber()

    cvvField.isCVV()

})

