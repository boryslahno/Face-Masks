
const imageBackground = () => {
    const imageBackground = document.getElementsByClassName('ibg');

    if (imageBackground.length > 0) {
        for (let index = 0; index < imageBackground.length; index++) {
            const src = imageBackground[index].getElementsByTagName('img')[0].getAttribute('src');

            imageBackground[index].style.cssText = `background: url("${src}");
            background-repeat: no-repeat;
            background-position: center;
            -webkit-background-size: cover;
            -o-background-size: cover;
            -moz-background-size: cover;`

            imageBackground[index].getElementsByTagName('img')[0].style.display = 'none';
        }
    }
}

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
imageBackground()
