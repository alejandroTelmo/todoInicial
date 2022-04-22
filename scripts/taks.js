// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
if(!localStorage.jwt){
  location.replace('./index.html')
}


/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  
  const urlTareas = 'https://ctd-todo-api.herokuapp.com/v1/tasks'
  const urlUsuario = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe'
  const formCrearTarea = document.querySelector('.nueva-tarea');
  const nuevaTarea = document.querySelector('#nuevaTarea');
  const btnCerrarSesion = document.querySelector('#closeApp');
  const nombreUser = document.querySelector("div.user-info p")
  const token = JSON.parse(localStorage.jwt)

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
   
    const cerrarSesion = confirm("¿Desea cerrar sesión?");
    if (cerrarSesion) {
      //limpiamos el localstorage y redireccioamos a login
      localStorage.clear();
      location.replace('./index.html');
    }


  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const settings = {
      method: 'GET',
      headers: {
        authorization: token
      }
    }
    fetch(urlUsuario, settings)
      .then(response => response.json())
      .then(data => {
          console.log("Nombre de usuario:");
          console.log(data.firstName);
          nombreUser.innerHTML = `${data.firstName} ${data.lastName}`
      })
      .catch(error => console.error(error))
  }
  obtenerNombreUsuario()


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
      const settings = {
        method: 'GET',
        headers: {
          authorization: token
        }
      }
      fetch(urlTareas, settings)
        .then(response => response.json())
        .then(tareas => {
          console.log("Tareas del usuario")
          console.table(tareas)
          //renderizar tareas aqui
          
        })
        .catch(error => console.log(error))
  }
  consultarTareas()


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    




  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {







  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

});