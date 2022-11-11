export const ToggleDarkMode = () => {
    window.addEventListener('load', () => {
        console.log('ah que coucou');

        const toggleMode = document.getElementById('toggle-dark');
        const fullPage = document.getElementById('louis-website');
        toggleMode.addEventListener('click', () => {
            console.log('ah que coucou');
            fullPage.classList.add('dark-mode-enable');
        });
    });
}