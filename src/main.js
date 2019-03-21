//REGISTRO
const buttonRegister = document.getElementById('register');

//INGRESO
const buttonAccess = document.getElementById('access');


//REGISTRAR NUEVO USUARIO
buttonRegister.addEventListener('click', () => {

let email = document.getElementById('email').value;
let pass = document.getElementById('pass').value;

firebase.auth().createUserWithEmailAndPassword(email, pass)
.catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);

  });

});
buttonAccess.addEventListener('click', () => {

    let emailAc = document.getElementById('email-ac').value;
    let passAc = document.getElementById('pass-ac').value;
    
    firebase.auth().signInWithEmailAndPassword(emailAc, passAc).then((res)=>{
      console.log(res);
    })
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;

    
    console.log(errorCode);
    console.log(errorMessage);
    
      });
    
    });

//VERIFICAR USUARIO
const verify = () => {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          accessToWall();
            console.log('si existe usuario activo')
            viewUser(user); 
          // User is signed in.
          let displayName = user.displayName;
          let email = user.email;
          console.log(user.emailVerified);
          let emailVerified = user.emailVerified;
          let photoURL = user.photoURL;
          let isAnonymous = user.isAnonymous;
          let uid = user.uid;
          let providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          console.log('no existe usuario activo')
        }
      });
    }
      
    verify();
    
    const accessToWall = () =>{
      var content= document.getElementById('post-for-active-users');
      content.innerHTML = `
      <input type="text" id="mssg" placeholder="Mensaje" class="form-control my-3">
      <button class="btn btn-link" id="button-save" onclick="save()">Publicar</button>
      
      `
     
     }

//SALIR DE LA SESION
const buttonLogout = document.getElementById('logout');
const viewUser = (user) => {
     let content = document.getElementById('user-data');
 if (user.mailVerified){
content.innerHTML = `
<p>Bienvenido</p>

`;
}
}
//  buttonLogout.addEventListener('click', () => {
//   closeSession();
//     //content.innerHTML = `<p>Su sesión se ha cerrado</p>`;
//     content.innerHTML = `
//     <p>Bienvenido</p>
//     <button id="logout">Cerrar Sesión</button>`;
  
//   });
 

//FUNCION CERRAR SESION
const closeSession = () => {

    firebase.auth().signOut()

    .then(function(){
console.log('Cerrando sesión');

    })

    .catch(function(error){
     console.log(error);   
    })
}

//Verificar Email
const verifyEmail = () => {

    let user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log('Correo de verificación enviado');
}).catch(function(error) {
  // An error happened.
  console.log(error);
});

 
}








