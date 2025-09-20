SECURE TO DO LIST - JS 

User: moises 
Password: 1234

Parte 1: Validación de credenciales del usuario

    1.	Uso de funciones flecha para mantener el código más claro y fácil de entender, encargadas de recibir los datos ingresados por el usuario.
    2.	Validación de credenciales para garantizar que este Secure To-Do List sea privado y proteja la información personal del usuario. (User: moises Password:1234)
    3.	Alertas informativas que indican cuántos intentos de acceso quedan disponibles.

Parte 2: Declaracion de Arrays

    1. Se declaro tres arrays para el almacenamiento de la informacion (TAREA, DIA, MES).
    2. Ejemplo: Se imprimira de la siguiente forma: 1. On January 12 you have this task: Boss Meeting

Parte 3: Agregacion de informacion al grupo de Arrays, edicion y elminacion de informacion.

    1. Para agregar la informacion se utilizo el comand task(array).push("nueva informacion")
    2. Para la edicion del array en el prompt se agrego el valor -1 para que haga la busqueda con la ubicacion correcta.
    3. Validacion a travez de un if para determinar que sea mayor de 0 y no exceda el limite del array.

Parte 4: Uso del tercerio para validar que el numero ingresado no sea isNan o indefinido

    ejemplo

    let value = parseInt(prompt("Enter the number: "))
	value = isNaN(value) ? 0 : value

