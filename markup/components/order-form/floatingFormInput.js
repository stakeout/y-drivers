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
