const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;
  const comments = form.elements.comments.value;

  // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor o mostrarlos en la página
});
