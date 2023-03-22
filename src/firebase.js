import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs, onSnapshot,
  addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp, getDoc, updateDoc
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'

const firebaseConfig = {
};   

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore()
const auth=getAuth()


// collection ref
const colRef = collection(db, '');

const unsubCol=onSnapshot((snapshot)=>{})


// signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', e => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user created:', cred.user)
      signupForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})

//loging in and out
const logoutButton=document.querySelector('.logout')
logoutButton.addEventListener('click',()=>{
  signOut(auth)
    .then(()=>{
      console.log("user logged out!")
    })
    .catch((err)=>{
      console.log(err.message);
    })
})
const loginForm=document.querySelector('.login')
loginForm.addEventListener('submit',(e)=>{
  e.preventDefault()

  const email=loginForm.email.value;
  const password=loginForm.password.value;

  signInWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
      console.log("user logged in:",cred.user);
      console.log("user logged in successfully!");
      loginForm.reset();
    })
    .catch(err =>{
      console.log(err.mesasge);
    })
})

//subscribiing to  auth changes
const unsubAuth=onAuthStateChanged(auth,(user)=>{
  console.log("user status changed:",user);
})

//unsubscribiing from auth changes (auth & db)
const unsubButton=document.querySelector('.unsub');
unsubButton.addEventListener('click',()=>{
  console.log("unsubscribing")
  unsubCol()
})

module.exports={

};