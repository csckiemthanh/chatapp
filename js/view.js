const view = {}
view.setActiveScreen = (screenName) => {
switch (screenName) {
case 'welcomeScreen' :
    document.getElementById('app')
    .innerHTML = components.welcomeScreen
    break;
case 'registerScreen':
    document.getElementById('app')
    .innerHTML = components.registerScreen
    document.getElementById('redirect-to-login').addEventListener('click',(event)=>{
        view.setActiveScreen('loginScreen')
        document.getElementById('redirect-to-register').addEventListener('click',(event)=>{
            view.setActiveScreen('registerScreen')
        })
    })
    const registerForm=document.getElementById('register-form')
    registerForm.addEventListener('submit',(event)=> {
        event.preventDefault()
        
    const data={
        firstName: registerForm.firstName.value,
        lastName : registerForm.lastName.value,
        email    : registerForm.email.value,
        password : registerForm.password.value,
        comfirmPassword : registerForm.comfirmPassword.value
    }
    console.log(data)
    controller.register(data)
    
    }) 
    break;
case 'loginScreen':
    document.getElementById('app')
    .innerHTML = components.loginScreen
    const loginForm = document.getElementById('login-form')
    loginForm.addEventListener('submit',(event)=>{
        event.preventDefault()
        const data ={
            email: loginForm.email.value,
            password : loginForm.password.value,
        }
        console.log(data)
        controller.login(data)
    })
    
}
}