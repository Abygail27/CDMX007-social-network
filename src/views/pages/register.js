let register {

    render: async () => {
    return /*html*/
    `<p>
    <label class="lab">Email</label>
    <br>
   <input class= "input" id="email" type ="email" ></p>
   <p>
   <label class="lab" >Password</label>
   <br>
   <input class= "input" id="pass" type ="password" ></p>
  

   <!-- <button id="register" onclick="register()">Enviar</button> -->
   <button id="register">Registrarse</button>


   




   <section id="user-data">
     
<!--  <button id="logout">Cerrar Sesión</button>-->

   </section>
`
    }


buttonRegister.addEventListener('click', () => {

    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, pass).then((res)=>{
      console.log(res)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    
      console.log(errorCode);
      console.log(errorMessage);
    });
});