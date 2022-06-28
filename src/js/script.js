
const toggleMenu = () => {
    const burgerIcon = document.getElementsByClassName('header__burger')[0];
    if (burgerIcon) {
        burgerIcon.addEventListener('click', () => {
            burgerIcon.classList.toggle('active');
            const headerMenu = document.getElementsByClassName('header__navigation')[0];
            headerMenu.classList.toggle('active');
            document.body.classList.toggle('lock');
        })
    }
}

toggleMenu();
