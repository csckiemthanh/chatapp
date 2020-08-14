const init = () => {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyD3HAB65eZ7-8sZxMDIi_Lg0f02q3M3Z7o",
    authDomain: "chatapp-473c4.firebaseapp.com",
    databaseURL: "https://chatapp-473c4.firebaseio.com",
    projectId: "chatapp-473c4",
    storageBucket: "chatapp-473c4.appspot.com",
    messagingSenderId: "634759659502",
    appId: "1:634759659502:web:186d46ba7306f422b8d8ff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name)
  // firestoreFuntion()
  firebase.auth().onAuthStateChanged((user) => {
    
    if(user) {
      if (user.emailVerified) {
        model.currentUser = {
          displayName: user.displayName,
          email: user.email
        }
        view.setActiveScreen('chatScreen')
      } else {
        view.setActiveScreen('loginScreen')
        alert('Please verify your email')
      }
    } else {
      view.setActiveScreen('loginScreen')
    }
  })
}
window.onload = init 

firestoreFuntion = async () => {
  // get one document
  const documentId = '3KlkqebCU22qJtrwGF9I'
  const response = await firebase.firestore().collection('users').doc(documentId).get()
  //const user = getDataFromDoc(response)
   //console.log(response)
   //console.log(user)

  // get many document
  const response2 = await firebase.firestore()
  .collection('users').where('phoneNumber','array-contains','091').get()
  // console.log(response2)
  // const listUser = getDataFromDocs(response2.docs)
  // console.log(listUser)
  // add document
  const userToAdd = {
    name: 'ABC',
    age: 23,
    email: 'abcxyz@gmail.com'
  }
  // firebase.firestore().collection('users').add(userToAdd)
  // update document
  documentIdUpdate = '3KlkqebCU22qJtrwGF9I'
  const dataToUpdate = {
    address: 'Ha noi 2',
    age: 20,
    phoneNumber: firebase.firestore.FieldValue.arrayUnion('091')
  }
  firebase.firestore().collection('users').doc(documentIdUpdate).update(dataToUpdate)
    // firebase.firestore()
    // .collection('users').doc(documentIdUpdate)
    // .update(dataToUpdate)
  // delete document
  const docToDelete = 'D2XWhMD5O17iXvQVLLjA'
  firebase.firestore()
  .collection('users').doc(docToDelete).delete()
}

getDataFromDoc = (doc) => {
  const data = doc.data()
  data.id = doc.id
  return data
}
getDataFromDocs = (docs) => {
  return docs.map(item => getDataFromDoc(item))
}
