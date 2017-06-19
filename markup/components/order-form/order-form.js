function CustomValidation() {
    this.invalidities = [];
    this.validityChecks = [];
}

CustomValidation.prototype = {
    addInvalidity: function (message) {
        this.invalidities.push(message);
    },

    getInvalidities: function () {
        return this.invalidities.join('. \n');
    },

    checkValidity: function (input) {

        for ( let i = 0; i < this.validityChecks.length; i++ ) {

            let isInvalid = this.validityChecks[i].isInvalid(input);
            if (isInvalid) {
                this.addInvalidity(this.validityChecks[i].invalidityMessage);
            }

            let requirementElement = this.validityChecks[i].element;
            if (requirementElement) {
                if (isInvalid) {
                    requirementElement.classList.add('requirements__item_invalid');
                    requirementElement.classList.remove('requirements__item_valid');
                } else {
                    requirementElement.classList.remove('requirements__item_invalid');
                    requirementElement.classList.add('requirements__item_valid');
                }
            }

        }

    }
};

let usernameValidityChecks = [
    {
        isInvalid: function (input) {
            return input.value.length < 3;
        },
        invalidityMessage: 'В этом поле необходимо ввести минимум 3 символа',
        element: document.querySelector('#username + .requirements li:nth-child(1)')
    },
    {
        isInvalid: function (input) {
            let illegalCharacters = !input.value.match(/^[а-яА-Яa-zA-Z\s]+$/);
            return illegalCharacters ? true : false;
        },
        invalidityMessage: 'Пишем только буквы и пробел',
        element: document.querySelector('#username + .requirements li:nth-child(2)')
    }
];

let passwordValidityChecks = [
    {
        isInvalid: function (input) {
            return !input.value.match(/\+7\s[0-9]{3}\s[0-9]{7}/);
        },
        invalidityMessage: 'Напишите номер в формате +7 xxx xxxxxxx (2 пробела)',
        element: document.querySelector('#phone + .requirements li:nth-child(1)')
    }
];

function checkInput(input) {
    input.CustomValidation.invalidities = [];
    input.CustomValidation.checkValidity(input);

    if ( input.CustomValidation.invalidities.length === 0 && input.value !== '' ) {
        input.setCustomValidity('');
    } else {
        let message = input.CustomValidation.getInvalidities();
        input.setCustomValidity(message);
    }
}

const usernameInput = document.querySelector('#username');
const phoneInput = document.querySelector('#phone');

usernameInput.CustomValidation = new CustomValidation();
usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

phoneInput.CustomValidation = new CustomValidation();
phoneInput.CustomValidation.validityChecks = passwordValidityChecks;


let inputs = document.querySelectorAll('input:not([type=\'submit\'])');
for ( let i = 0; i < inputs.length; i++ ) {
    inputs[i].addEventListener('keyup', function () {
        checkInput(this);
    });
}

let submit = document.querySelector('input[type=\'submit\']');
submit.addEventListener('click', function () {
    for ( let i = 0; i < inputs.length; i++ ) {
        checkInput(inputs[i]);
    }
});
