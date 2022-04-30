import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const STORAGE_KEY = 'feedback-form-state';
const values = {};

form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput() {
    values.email = form.elements.email.value;
    values.message = form.elements.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

addEventListener('DOMContentLoaded', onPageLoaded);
function onPageLoaded() {
    if (localStorage.getItem(STORAGE_KEY)) {
        const savedValues = JSON.parse(localStorage.getItem(STORAGE_KEY));
    emailInput.value = savedValues.email;
    messageInput.value = savedValues.message;
    }
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(values);
}
