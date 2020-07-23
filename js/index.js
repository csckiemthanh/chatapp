
const init = () => {
    console.log('windown loaded')
    view.setActiveScreen('registerScreen');
    document.getElementById('redirect-to-login').addEventListener('click',(event)=>{
        view.setActiveScreen('loginScreen')
        document.getElementById('redirect-to-register').addEventListener('click',(event)=>{
            view.setActiveScreen('registerScreen')
        })
    })
    
}
window.onload=init
