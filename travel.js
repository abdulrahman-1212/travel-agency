const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('.search-bar-container');
const videoBtn = document.querySelectorAll('.vid-btn');
const home = document.querySelector('.home');
const loginBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form-container');
const formClose = document.querySelector('#form-close');
const menu = document.querySelector('#menu-bar');
const navBar = document.querySelector('.nav-bar')



// EVENTS
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

searchBtn.addEventListener('click', () =>  {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

menu.addEventListener('click', () =>  {
    navBar.classList.toggle('active');
    menu.classList.toggle('fa-times')
})

loginBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});


formClose.addEventListener('click', () =>  {
    loginForm.classList.remove('active')
})

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

