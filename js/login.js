const loginDiv = document.getElementById('login-div');
const loginOpen = document.getElementById('login-open');
const loginClose = document.getElementById('login-close');

loginOpen.addEventListener('click', () => {
  loginDiv.classList.add('login-open');
  loginDiv.classList.remove('login-close');
});

loginClose.addEventListener('click', () => {
  loginDiv.classList.remove('login-open');
  loginDiv.classList.add('login-close');
});