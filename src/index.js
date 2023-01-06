import {initializeApp} from 'firebase/app'

import{
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword
} from 'firebase/auth'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAn54EDOqD1B1DigOCoVYDvaulk-AsdXis",
    authDomain: "realestate-bd160.firebaseapp.com",
    projectId: "realestate-bd160",
    storageBucket: "realestate-bd160.appspot.com",
    messagingSenderId: "817626034315",
    appId: "1:817626034315:web:0aa6cc86cbfbad089c248e",
    measurementId: "G-5KP4RNKTSC"
  };

initializeApp(firebaseConfig)

const auth = getAuth()

const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const email = signupForm.email.value
    const password = signupForm.password.value
    createUserWithEmailAndPassword(auth, email ,password)
        .then((cred) =>{
            console.log('user created: ',cred.user)
            signupForm.reset()
        })
        .catch((err) =>{
            console.log(err.message)
        })
})

const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(()=>{
            console.log('the user signed out')
        })
        .catch((err)=>{
            console.log(err.message)
        })
})

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) =>{
            console.log('user logged in: ', cred.user)
        })
        .catch((err) =>{
            console.log(err.message)
        })
})