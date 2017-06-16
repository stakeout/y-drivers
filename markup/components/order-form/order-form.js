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
                    requirementElement.classList.add('requirements__item--invalid');
                    requirementElement.classList.remove('requirements__item--valid');
                } else {
                    requirementElement.classList.remove('requirements__item--invalid');
                    requirementElement.classList.add('requirements__item--valid');
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
        invalidityMessage: 'This input needs to be at least 3 characters long',
        element: document.querySelector('label[for=\'username\'] li:nth-child(1)')
    },
    {
        isInvalid: function (input) {
            let illegalCharacters = input.value.match(/[^a-zA-Z0-9]/g);
            return illegalCharacters ? true : false;
        },
        invalidityMessage: 'Only letters and numbers are allowed',
        element: document.querySelector('label[for=\'username\'] li:nth-child(2)')
    }
];

let passwordValidityChecks = [
    {
        isInvalid: function (input) {
            return input.value.length < 8 || input.value.length > 100;
        },
        invalidityMessage: 'This input needs to be between 8 and 100 characters',
        element: document.querySelector('label[for=\'password\'] li:nth-child(1)')
    },
    {
        isInvalid: function (input) {
            return !input.value.match(/[0-9]/g);
        },
        invalidityMessage: 'At least one number are required',
        element: document.querySelector('label[for=\'password\'] li:nth-child(2)')
    },
    {
        isInvalid: function (input) {
            return !input.value.match(/[a-z]/g);
        },
        invalidityMessage: 'At least one lowercase letter is required',
        element: document.querySelector('label[for=\'password\'] li:nth-child(3)')
    },
    {
        isInvalid: function (input) {
            return !input.value.match(/[A-Z]/g);
        },
        invalidityMessage: 'At least one uppercase letter is required',
        element: document.querySelector('label[for=\'password\'] li:nth-child(4)')
    },
    {
        isInvalid: function (input) {
            return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
        },
        invalidityMessage: 'You need one of the required special characters',
        element: document.querySelector('label[for=\'password\'] li:nth-child(5)')
    }
];

let passwordRepeatValidityChecks = [
    {
        isInvalid: function (input) {
            return passwordRepeatInput.value !== passwordInput.value;
        },
        invalidityMessage: 'This password needs to match the first one'
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
const passwordInput = document.querySelector('#password');
const passwordRepeatInput = document.querySelector('#password_repeat');

usernameInput.CustomValidation = new CustomValidation();
usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

passwordInput.CustomValidation = new CustomValidation();
passwordInput.CustomValidation.validityChecks = passwordValidityChecks;

passwordRepeatInput.CustomValidation = new CustomValidation();
passwordRepeatInput.CustomValidation.validityChecks = passwordRepeatValidityChecks;

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
