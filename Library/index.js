console.log('Задание выполнено на 100% по всем пунктам требований\nоцениваю работу в 50 баллов');

// burger------------------------------------------------------------------------------------------
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.burger__close');
    const body = document.querySelector('body');
    const anchors = document.querySelectorAll('.nav-item__link');

    burgerItem.addEventListener('click', () =>{
        menu.classList.add('header__nav-active');
        body.style.overflow = "hidden";

        document.addEventListener('click', closeMenuOnClickOutside);
    });

    menuCloseItem.addEventListener('click', (e) => {
       e.stopPropagation();
        menu.classList.remove('header__nav-active');
        body.style.overflow = "auto";

    });

        // close on cklick outside menu
    function closeMenuOnClickOutside(event) {
        if (!menu.contains(event.target) && !burgerItem.contains(event.target)){
        closeMenu();
        }
    }
    function closeMenu() {
        menu.classList.remove('header__nav-active');
        body.style.overflow = "auto";
        document.removeEventListener('click', closeMenuOnClickOutside);
    }

    document.addEventListener('click', closeMenuOnClickOutside);

    // anchor link close menu

    anchors.forEach(n => {
        n.addEventListener('click', (e) => {
            e.preventDefault();

            closeMenu(); // Закрываем меню

            const targetId = n.getAttribute('href'); // Получаем значение атрибута href ссылки
            const targetElement = document.querySelector(targetId); // Находим элемент с этим ID

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем к элементу с плавной анимацией
            }
        });
    });

}())