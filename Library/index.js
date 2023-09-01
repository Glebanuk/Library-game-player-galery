


// -----------------------------------------------favorities links---------------------------------
const buyBtn = document.querySelectorAll(".btn__buy");



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
// slider about-----------------------------------------------------------------------------------------
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

// -------------------------------------slider favorite-------------------------------------------------------
const radioButtons = document.querySelectorAll('.real-radio');
const sections = document.querySelectorAll('.favorites__section');

// При загрузке страницы покажем только первую секцию .winter
document.querySelector('.winter').style.display = 'flex';

radioButtons.forEach(radio => {
  radio.addEventListener('change', (event) => {
    const selectedSectionId = event.target.id.toLowerCase();
    
    // Сначала скроем все секции
    sections.forEach(section => {
      section.style.display = 'none';
    });
    
    // Потом отобразим выбранную секцию с анимацией
    const selectedSection = document.querySelector(`.${selectedSectionId}`);
    selectedSection.style.display = 'flex';
  });
});

// ----------------------------------------------------------pop-up links-------------------------------------------------------------------------------
const profileBtn = document.querySelector(".ico-profile__button");
const profileMenu = document.querySelector(".auth__container");

const loginBtn = document.querySelectorAll(".log-in__btn");
const loginContainer = document.querySelector(".pop-up__body__login");
const loginForm = document.querySelector('.pop-up__body__login .register-form');
const loginContent = document.querySelector(".pop-up-login__content");

const modalCloseBtn = document.querySelectorAll(".close-modal-btn");


const registerBtn = document.querySelectorAll(".register__btn");
const registerForm = document.querySelectorAll(".register-form");
const registerContainer = document.querySelector(".pop-up__body__register");
const registerContent = document.querySelector(".pop-up__content");
const registerUsername =document.querySelector('.first-name-input');
const registerLastname =document.querySelector('.last-name-input');
const registerEmail =document.querySelector('.email-input-register');
const registerPassword = document.querySelector('.password-register');
const resettableFields = registerContainer.querySelectorAll('.reset-form input');
const registerInputControls = registerForm[0].querySelectorAll('.input-control');

// ------------------------------- -----------------------------------------POP-UP----------------------------------------------
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

// modal window----------------------------------------
function modalMenu(){
    
    //                 ---open\close modal---
   

function toggleModal(container, profileMenu) {
    container.classList.toggle('open-register');
    profileMenu.classList.remove('open');
}
function resetField(container) {
    const resettableFields = container.querySelectorAll('.reset-form input');
    resettableFields.forEach(field => {
        field.value = '';
    });
}

registerBtn.forEach(btn =>{
    btn.addEventListener('click',  () =>{
         toggleModal (registerContainer, profileMenu)
    })
})
loginBtn.forEach(btn =>{
    btn.addEventListener('click',  () =>{
         toggleModal (loginContainer, profileMenu)
    })
})
modalCloseBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (registerContainer.classList.contains('open-register')) {
            toggleModal(registerContainer, profileMenu);
            resetField(registerContainer);

        } else if (loginContainer.classList.contains('open-register')) {
            toggleModal(loginContainer, profileMenu);
            resetField(loginContainer);

        }
    });
});


    registerContainer.addEventListener('click', (event) =>{
        if(!registerContent.contains(event.target) ){
            registerContainer.classList.toggle('open-register');
            resetField(registerContainer);

        }
});



    loginContainer.addEventListener('click', (event) =>{
        if(!loginContent.contains(event.target) ){
            loginContainer.classList.toggle('open-register');
            resetField(loginContainer);

        }
});


//                ----inputs behavior------------
registerForm.forEach(form => {
    form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
    });
});


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

//  ------  VALIDATION INPUTS\ LOCAL STORAGE\ CHANGE USER ICO ON LETTERS---
const validateInputs = () =>{
      const usernameValue = registerUsername.value.trim();
      const lastnameValue =  registerLastname.value.trim();
      const emailValue = registerEmail.value.trim();
      const passwordValue = registerPassword.value.trim();
      const userIcon = document.getElementById('userIcon')

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

    // close modal if fields are true \   
    let allFieldsSuccess = true;

    for (const registerInputControl of registerInputControls ){
        if (!registerInputControl.classList.contains("success")){
            allFieldsSuccess = false;
            break;
        }
    }
    // add data to local storage-----------------------------------------------
    if (allFieldsSuccess) {

        const userData = {
            username: usernameValue,
            lastname: lastnameValue,
            email: emailValue,
            password: passwordValue,
        };

    localStorage.setItem("userData", JSON.stringify(userData));

    registerUsername.value = "";
    registerLastname.value = "";
    registerEmail.value = "";
    registerPassword.value = "";

    // changing ico SVG-------------------

    const initials = (usernameValue.charAt(0) + lastnameValue.charAt(0)).toUpperCase();

    userIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14Z" fill="white"/>
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="15" fill="#BB945F" font-family="Inter" font-weight="400">${initials}</text>
</svg>`;



    registerContainer.classList.remove("open-register");
    }


  };




}

modalMenu();



// login modal window----------------------------------------

function loginMenu() {

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs(loginForm);
});

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add("success");
    inputControl.classList.remove('error');
}

function validateInputs(form) {
    const emailValue = form.querySelector('.email-input-register').value.trim();
    const passwordValue = form.querySelector('.password-register').value.trim();

    if (emailValue === '') {
        setError(form.querySelector('.email-input-register'), "Email is required");
    } else {
        setSuccess(form.querySelector('.email-input-register'));
    }

    if (passwordValue === '') {
        setError(form.querySelector('.password-register'), 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(form.querySelector('.password-register'), 'At least 8 symbols');
    } else {
        setSuccess(form.querySelector('.password-register'));
    }
}

}
loginMenu();
// =============================================================Local storage=============================================































































