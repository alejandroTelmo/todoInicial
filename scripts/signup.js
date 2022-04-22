window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0]
    const nombre = document.querySelector('#inputNombre')
    const apellido = document.querySelector('#inputApellido')
    const email = document.querySelector('#inputEmail')
    const password = document.querySelector('#inputPassword')
    const url = 'https://ctd-todo-api.herokuapp.com/v1'

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault()

        //creamos el body de la request
        const body = {
            firstName: nombre.value,
            lastName: apellido.value, 
            email: email.value,
            password: password.value
        }
        //configuramos la request del Fetch
        const settings = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        realizarRegister(settings)
        form.reset()        
    })

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {
        
        fetch(`${url}/users` ,settings)
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    alert("Hubo un error, intente de nuevo.")
                }
                return response.json();
            })
            .then(data => {
                console.log("Promesa cumplida:");
                console.log(data);

                if (data.jwt) {
                    console.log("Guardando el token en localStorage")
                    //guardo en LocalStorage el objeto con el token
                    localStorage.setItem('jwt', JSON.stringify(data.jwt));

                    //redireccionamos a la página
                    location.replace('/mis-tareas.html');
                }
                
            }).catch(err => {
                console.log("Promesa rechazada:");
                console.error(err);
            })
            

    };


});