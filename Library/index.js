


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

const userCardContainer = document.querySelector(".digital-card__container");

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


//                ----inputs behavior & layout appearence after success register------------
registerForm.forEach(form => {
    form.addEventListener('submit', e =>{
    e.preventDefault();

    const isValid = validateInputs();
        if(isValid){
            userCardContainer.innerHTML = `<div class="digital-card__container">

            <div class="your-card__block">
                <p class="your-card-block__title">Your Library card</p>

                <div class="your-card__border-block">
                    <form  class="form-input">

                        <div class="your-card__colored-block">
                            <h3 class="card__title">Brooklyn Public Library</h3>
                            <input type="text"  class="input-field">
                            <input type="text"  class="input-field">
                        </div>

                        <ul class="user-badges__container">
                            <li class="user-badge__item">
                                <span class="badge-title">Visits</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 10C13.2614 10 15.5 7.76142 15.5 5C15.5 2.23858 13.2614 0 10.5 0C7.73858 0 5.5 2.23858 5.5 5C5.5 7.76142 7.73858 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5L0.5 21C0.5 18.3478 1.55357 15.8043 3.42893 13.9289C5.3043 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z" fill="#BB945F"/>
                                  </svg>
                                <span class="badge__counter">0</span>
                            </li>
                            <li class="user-badge__item">
                                <span class="badge-title">Bonuses</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z" fill="#BB945F"/>
                                  </svg>
                                  <span class="badge__counter">1204</span>
                            </li>
                            <li class="user-badge__item">
                                <span class="badge-title">Books</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <rect width="20" height="21" fill="#BB945F"/>
                                    <rect x="2" width="1" height="19" fill="#826844"/>
                                    <rect x="1" width="1" height="21" fill="white"/>
                                  </svg>
                                  <span class="badge__counter">0</span>
                            </li>
                            
                        </ul>
                        </form>
                    </div>
                </div>

                    <div class="get-card__block">
                        <h3 class="get-card__title">Visit your profile</h3>
                        <p class="get-card__descr">With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.</p>

                        <div class="get-card__btn-block">
                        
                            <button class=" btn__log btn  profile__button">Profile</button>
                        </div>
                    </div>
                </div>`;
        }

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
      let isValid = true;

    if(usernameValue === ''){
        setError(registerUsername, "First name is required");
        isValid = false;
    }else{
        setSuccess(registerUsername);
    }

    if(lastnameValue === ''){
        setError(registerLastname, "Last name is required");
        isValid = false;
    }else{
        setSuccess(registerLastname);
    }

    if(emailValue === '') {
        setError(registerEmail, "Email is required");
        isValid = false;
    }else if (!isValidEmail(emailValue)) {
        setError(registerEmail, "Enter a valid email");
        isValid = false;
    }else {
        setSuccess(registerEmail);
    }

    if(passwordValue === ''){
        setError(registerPassword, 'Password is required');
        isValid = false;
    }else if (passwordValue.length < 8){
        setError(registerPassword, 'At least 8 symbols');
        isValid = false;
    }else{
        setSuccess(registerPassword)
    }

    // close modal if fields are true \   
    if (isValid) {
        // Если все поля корректны, выполняем следующие действия и возвращаем true
        const userData = {
            username: usernameValue,
            lastname: lastnameValue,
            email: emailValue,
            password: passwordValue,
        };
    // add data to local storage-----------------------------------------------

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
return isValid;
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
// =============================================================changing layout after register =============================================































































