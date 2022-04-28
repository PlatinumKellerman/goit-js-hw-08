const form = document.querySelector('.feedback-form');
const emailLabel = form.firstElementChild;
const messageLabel = emailLabel.nextElementSibling;

const emailInput = emailLabel.firstElementChild;
const messageInput = messageLabel.firstElementChild;
const submitButton = form.lastElementChild;

const STORAGE_KEY = 'feedback-form-state';

const values = {};


form.addEventListener('input', onFormInput)
function onFormInput(e) {
    values.email = e.currentTarget.email.value;
    values.message = e.currentTarget.message.value;
}

emailInput.addEventListener('input', onEmailInput);
    function onEmailInput(e) {
        const emailValue = e.currentTarget.value;
        console.log(emailValue);
        localStorage.setItem(STORAGE_KEY, emailValue)
    }
function saveMail() {
    const savedMail = localStorage.getItem(STORAGE_KEY)
    if (savedMail) {
        emailInput.value = savedMail;
    }
    }
saveMail()

messageInput.addEventListener('input', onMessageInput);
    function onMessageInput(e) {
        const messageValue = e.currentTarget.value;
        console.log(messageValue);
        localStorage.setItem(STORAGE_KEY, messageValue)
    }
function saveMessage() {
    const savedMessage = localStorage.getItem(STORAGE_KEY)
    if (savedMessage) {
        messageInput.value = savedMessage;
    }
    }
saveMessage()





form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
console.log(values);

