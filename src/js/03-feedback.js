import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailLabel = form.firstElementChild;
const messageLabel = emailLabel.nextElementSibling;
const emailInput = emailLabel.firstElementChild;
const messageInput = messageLabel.firstElementChild;
const STORAGE_KEY = 'feedback-form-state';
const values = {};

form.addEventListener('input', throttle((e) => {
    values.email = e.currentTarget.email.value;
    values.message = e.currentTarget.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}, 500));


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
