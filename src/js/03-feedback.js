import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData) ||{});
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
})();

// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.feedback-form'),
// };

// const FEEDBACK = 'feedback-form-state';

// let formData = JSON.parse(localStorage.getItem(FEEDBACK)) || {};

// populateText();

// const onInput = e => {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(FEEDBACK, JSON.stringify(formData));
// };

// refs.form.addEventListener('input', throttle(onInput, 500));

// refs.form.addEventListener('submit', e => {
//   e.preventDefault();

//   console.log(JSON.parse(localStorage.getItem(FEEDBACK)));

//   e.target.reset();
//   localStorage.removeItem(FEEDBACK);
//   formData = {};
// });

// function populateText() {
//   const savedText = JSON.parse(localStorage.getItem(FEEDBACK));

//   if (savedText) {
//     refs.form.email.value = savedText.email || '';
//     refs.form.message.value = savedText.message || '';
//   }
// }