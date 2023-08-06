// Dom elements

const mainContent = document.querySelector('.main-content')
const loginPage = document.querySelector('.login-page')
const middleContent = document.querySelector('.middle-content')
const btnTop = document.querySelector('.btn-top')
const newsFeedpage = document.querySelector('.feeds-page')
const loginModal = document.querySelector('.login-modal')
const modalX = document.querySelector('.login-modal i')
const loginFormBtn = document.querySelector('.login-form-btn')
const postBtn = document.querySelector('.post-btn')
const modalWrapper = document.querySelector('.modal-wrapper')
const modal = document.querySelector('.modal')
const postModalX = document.querySelector('.modal-header i')
const postModalBtn = document.querySelector('.modal-header button')
const postModalSpan = document.querySelector('.modal-footer span')
const postModalInput= document.querySelector('.modal-input')
const user= document.querySelector('.user')
const sidebar= document.querySelector('.sidebar')
const sidebarWrapper= document.querySelector('.sidebar-wrapper')
const sidebarBtn= document.querySelector('.sidebar-header i')
const toggle= document.querySelector('.toggle')
const circle= document.querySelector('.circle')





/***************************************/ 

const goToLoginPage = () =>{
    mainContent.style.display='none';
    loginPage.style.display='grid';
};


middleContent.addEventListener('click',e=>{

    if(e.target.classList[1]==='main-btn'){
        goToLoginPage();
    }
    
});

btnTop.addEventListener('click', ()=>{
const inputUserInfo = document.querySelector('.user-info')
const inputPassword = document.querySelector('.password')

    if(inputUserInfo.value !== "" && inputPassword.value !== ""){
    mainContent.style.display='none';
    newsFeedpage.style.display='block';
    }
    else{
        goToLoginPage();
        loginModal.style.display='block';
    }
      
});

modalX.addEventListener('click', ()=>{
    loginModal.style.display='none';
});

loginFormBtn.addEventListener('click', ()=>{
    const loginUserInfo = document.querySelector('.login-user-info')
    const loginPassword = document.querySelector('.login-password')

    if(loginUserInfo.value !== "" && loginPassword.value !== "")
    {
        loginPage.style.display='none';
        newsFeedpage.style.display='block';

    }
    else{
        loginModal.style.display='block';
    }
    
});

postBtn.addEventListener('click', ()=>{
    modal.style.display='block';
    modalWrapper.classList.add('modal-wrapper-display');
    
});

postModalX.addEventListener('click', ()=>{
    modal.style.display='none';
    modalWrapper.classList.remove('modal-wrapper-display');

    if(postModalInput.value !== ''){
        postModalInput.value ='';
        changeOpacity(0.5);

    }
});

const changeOpacity = x =>{
    postModalBtn.style.opacity = x;
    postModalSpan.style.opacity = x;   
}

postModalInput.addEventListener('keypress',(e)=>{
    if(e.target.value !== ""){
        changeOpacity(1);
    }
})

postModalInput.addEventListener('blur',(e)=>{
    if(e.target.value === ""){
        changeOpacity(0.5);
    }
})

user.addEventListener('click',()=>{
    sidebar.classList.add('sidebar-display')
    sidebarWrapper.classList.add('sidebar-wrapper-display')

})

user.addEventListener('click',()=>{
    sidebar.classList.add('sidebar-display')
    sidebarWrapper.classList.add('sidebar-wrapper-display')

})

sidebarBtn.addEventListener('click',()=>{
    sidebar.classList.remove('sidebar-display')
    sidebarWrapper.classList.remove('sidebar-wrapper-display')
})

const darkElements1 =document.querySelectorAll('.dark-mode-1')
const darkElements2 =document.querySelectorAll('.dark-mode-2')
const lightTexts =document.querySelectorAll('.light-text')
const borders = document.querySelectorAll('.border')

toggle.addEventListener('click',()=>{
    circle.classList.toggle('move')
    Array.from(darkElements1).map
        (darkEl1=> 
            darkEl1.classList.toggle('dark-1')
    );
    Array.from(darkElements2).map
        (darkEl2=> 
            darkEl2.classList.toggle('dark-2')
    );
    Array.from(lightTexts).map
        (lightEl=> 
            lightEl.classList.toggle('light')
    );
    Array.from(border).map(
        borders=>
        borders.classList.toggle('border-color')
    )
})

