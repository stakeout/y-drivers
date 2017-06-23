$('.registration__form-group input').on({
    'focus': function () {
        if ( $(this).val() === '' ) {
            $(this).parent().find('label').addClass('field-active');
            $(this).addClass('field-active');
        }
    },
    'blur': function () {
        if ( $(this).val() === '' ) {
            $(this).parent().find('label').removeClass('field-active');
            $(this).removeClass('field-active');
        }
    }
});
let name = document.querySelector('#username');
let phone = document.querySelector('#phone');
let checkNameInStorage = localStorage.getItem('name');
let checkPhoneInStorage = localStorage.getItem('phone');
if (checkNameInStorage) {
    name.value = checkNameInStorage;
    name.parentNode.childNodes[1].classList.add('field-active');
}
if (checkPhoneInStorage) {
    phone.value = checkPhoneInStorage;
    phone.parentNode.childNodes[1].classList.add('field-active');
}
const form = document.querySelector('.registration');
form.addEventListener('submit', function () {
    localStorage.setItem('name', name.value);
    localStorage.setItem('phone', phone.value);
});
