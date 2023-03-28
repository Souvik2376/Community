//............SIDEBAR..........
//............SIDEBAR..........
const menuItem = document.querySelectorAll('.menu-item');


// remove active classlist.....
const removeActive = ()=>{
    menuItem.forEach(item => {
        item.classList.remove('active')        
    });
 }

// add active classlist.....
menuItem.forEach(item => {
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');

        if(item.id != 'notifice'){
            document.querySelector('.notification').style.display ='none'
        }else{
            document.querySelector('.notification').style.display ='block' 
            document.querySelector('#notifice .count').style.display='none'
        }
    })
})


//....................MESSAGE................
//....................MESSAGE................
const message = document.querySelector('#message');
const messageBox = document.querySelector('#message-box');

message.addEventListener('click',()=>{

    messageBox.classList.add('box-sh');
    message.querySelector('.count').style.display='none'


    setTimeout(() => {
        messageBox.classList.remove('box-sh');
    }, 2000);

})

// ...................THEME CUSTOMIZTION......
// ............THEME CUSTOMIZTION......

const themeMenu = document.querySelector('#themeMenu');
const themBOx = document.querySelector('.theme')


themeMenu.addEventListener('click',()=>{
    themBOx.style.display= 'grid'
})

// FIREND RQUEST BUTTON..............
const addBtn = document.querySelectorAll('#add');
const delbtn = document.querySelectorAll('#del');
 

addBtn.forEach(element => {
    element.addEventListener('click',()=>{
        element.parentElement.style.display='none' 
    })    
});

delbtn.forEach(element => {
    element.addEventListener('click',()=>{
        element.parentElement.parentElement.style.display='none'
    })
});


// WINDOW EVENT.....
window.addEventListener('scroll',()=>{
    themBOx.style.display= 'none'
    document.querySelector('.notification').style.display ='none'
})