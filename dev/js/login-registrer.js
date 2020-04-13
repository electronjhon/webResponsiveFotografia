const topbar = document.getElementById('topbar')

const loginModal = document.getElementById('login-modal')
const registerModal = document.getElementById('register-modal')

const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')

const pass1 = document.getElementById('register-password1')
const pass2 = document.getElementById('register-password2')
const mensaje = document.getElementById('mensaje')

if(topbar){
    topbar.addEventListener('click', (e)=>{
        if(e.target.parentElement.dataset.type != undefined){
            if(e.target.parentElement.dataset.type=='login'){
                loginModal.classList.add('lightbox--show')
            }else{
                registerModal.classList.add('lightbox--show')
            }
        }
    })
}

if(loginModal){
    loginModal.addEventListener('click', (e)=>{
        if(e.target.classList.contains('lightbox')){
            loginModal.classList.remove('lightbox--show')
        }
    })
}

if(registerModal){
    registerModal.addEventListener('click', (e)=>{
        if(e.target.classList.contains('lightbox')){
            registerModal.classList.remove('lightbox--show')
        }
    })
}



if(loginForm){
    loginForm.addEventListener('submit', (e)=>{
       e.preventDefault()
       setTimeout(()=>{
        e.target.button.blur()
       }, 200)
       console.log('SEND')
    })
}

if(registerForm){
    registerForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        setTimeout(()=>{
            e.target.button.blur()
           }, 200)        
        console.log('SEND')
    })

    
}

const comprobar = () => {
    let clave1 = registerForm.password1.value
    let clave2 = registerForm.password2.value

    if (clave1 != clave2) {
       mensaje.innerHTML = "Password no coincide"
    }else{
        mensaje.innerHTML = ""
    }
}