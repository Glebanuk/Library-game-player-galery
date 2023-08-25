console.log('Задание выполнено на 100% по всем пунктам требований\nоцениваю работу в 50 баллов');
// pop-up links-------------------------------------------------------------------------------
const profileBtn = document.querySelector(".ico-profile__button");
const profileMenu = document.querySelector(".auth__container");

const registerBtn = document.querySelectorAll(".register__btn");
const registerContainer = document.querySelector(".pop-up__body");
const registerCloseBtn = document.querySelector(".close-register-btn");
const registerContent = document.querySelector(".pop-up__content");
const registerUsername =document.getElementById('first-name-input');
const registerLastname =document.getElementById('last-name-input');
const registerEmail =document.getElementById('email-input-register');
const registerPassword = document.getElementById('password-register');
const registerForm = document.querySelector(".register-form");


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
// slider -----------------------------------------------------------------------------------------
function slider() {
const slider = document.querySelector(".slider");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;
slider.style.left = `${-475 * currentIndex}px`;

indicators.forEach((currentIndicator, index) => {
    currentIndicator.addEventListener('click', () => {
        currentIndex = index;
        slider.style.left = `${-475 * currentIndex}px`;

        indicators.forEach(otherIndicator => {
            otherIndicator.classList.remove('active', 'no-hover');
        });

        currentIndicator.classList.add('active', 'no-hover');
    });

    if (index === currentIndex) {
        currentIndicator.classList.add("active");
    }
});
}

slider();

// POP-UP --------------------------------------------------------------------------------------
//  authorithation profile--------------
function setupProfileMenu() {

    const handleClick = (event) => {
    profileMenu.classList.toggle('open')
}

document.addEventListener('click', (event) =>{
 if(!profileBtn.contains(event.target) && !profileMenu.contains(event.target)){
    profileMenu.classList.remove('open');
 }
});

profileBtn.addEventListener('click', handleClick);
    }

setupProfileMenu();
// register modal window----------------------------------------
function registerMenu(){
    
//                 ---open\close modal---
registerBtn.forEach(btn =>{
    btn.addEventListener('click', () => {
        registerContainer.classList.toggle('open-register');
        profileMenu.classList.toggle('open')
    })
})
    registerCloseBtn.addEventListener('click', () =>{
        registerContainer.classList.toggle('open-register');
        registerForm.reset();
    })

    registerContainer.addEventListener('click', (event) =>{
        if(!registerContent.contains(event.target) ){
            registerContainer.classList.toggle('open-register');
            registerForm.reset();
        }
       });
//                ----inputs behavior------------

registerForm.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add("success");
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  const validateInputs = () =>{
    const usernameValue = registerUsername.value.trim();
    const lastnameValue =  registerLastname.value.trim();
    const emailValue = registerEmail.value.trim();
    const passwordValue = registerPassword.value.trim();

    if(usernameValue === ''){
        setError(registerUsername, "First name is required");
    }else{
        setSuccess(registerUsername);
    }

    if(lastnameValue === ''){
        setError(registerLastname, "Last name is required");
    }else{
        setSuccess(registerLastname);
    }

    if(emailValue === '') {
        setError(registerEmail, "Email is required");
    }else if (!isValidEmail(emailValue)) {
        setError(registerEmail, "Enter a valid email");
    }else {
        setSuccess(registerEmail);
    }

    if(passwordValue === ''){
        setError(registerPassword, 'Password is required');
    }else if (passwordValue.length < 8){
        setError(registerPassword, 'At least 8 symbols');
    }else{
        setSuccess(registerPassword)
    }


  };


}

 registerMenu();









































