const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const firstName = document.querySelector('#firstName-signup').value.trim();
  const lastName = document.querySelector('#lastName-signup').value.trim();
  const activity = document.querySelector('#activity-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/userRoutes', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, activity, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  
  const firstName = document.querySelector('#firstName-signup').value.trim();
  const lastName = document.querySelector('#lastName-signup').value.trim();
  const activity = document.querySelector('#activity-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (firstName && lastName && activity && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, activity, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('logininpage')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('signuppage')
  .addEventListener('submit', signupFormHandler);
