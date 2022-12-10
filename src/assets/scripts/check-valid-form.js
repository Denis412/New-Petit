'use strict'

$('#mainForm').validate({
    rules: {
        email: {
            required: true,
            email: true,
        },

        firstname: {
            required: true,
        },

        password: {
            required: true,
            minlength: 8,
        },

        confirm_password: {
            required: true,
        },
    },

    messages: {
        email: {
            required: 'Поле для ввода логина является обязательным для заполнения!',
            email: 'Пожалуйста, введите корректный адрес электронной почты!',
        },

        firstname: {
            required: 'Поле для ввода имени является обязательны для заполнения!',
        },

        password: {
            required: 'Поле для ввода пароля является обязательным для заполнения!',
            minlength: 'Минимальная длина пароля 8 символов!',
        },

        confirm_password: {
            required: 'Заполните поле подтверждения пароля!',
        },
    }
});