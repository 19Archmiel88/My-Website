document.addEventListener('DOMContentLoaded', function () {
    const welcomeSection = document.getElementById('welcome');
    const aboutMeSection = document.getElementById('about-me');

    // Dodaj obsługę kliknięcia na przycisk wejdź na stronę
    welcomeSection.querySelector('button').addEventListener('click', function () {
        welcomeSection.style.display = 'none';
        aboutMeSection.style.display = 'block';
    });
});
