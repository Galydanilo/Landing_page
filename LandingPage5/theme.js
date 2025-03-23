const themeButton = document.getElementById('theme');
const body = document.body;

// Vérifier si un mode est déjà enregistré dans localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// Événement sur le bouton
themeButton.addEventListener('click', () => {
  body.classList.toggle("dark-mode");

  // Sauvegarde le choix dans localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

