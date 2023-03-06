

// https://www.jsonplaceholder.typicode.com/users

//Realizar una petición de Tipo get a /users
//Recibir información dentro de una Estructura JSON
// Mostrar la Información armando una lista de nombres de los usuarios

//AJAX
/*
¿Qué es AJAX?: Viene con jquery, hace parte de las herramientas de jquery.
*/
/*
 ! Se hace uso de ajax ya que el proceso tarda y no depende de Javascript su ejecución.
*/
const url_base = 'https://jsonplaceholder.typicode.com';

//const olUsers = $("#listaUsuarios");
const olUsers = document.querySelector('#listaUsuarios'); //Sin Jquery

let values = null;

//Callback to ajax get function
//(Divide And Conquer) Divide y venderás,
/**
 * Es un formato de código que nos establece la división de código en
 * pequeñas partes. Ya que digerimos las soluciones en pequeñas partes posteriormente
 * en un proceso de testing es mucho más sencillo.
*/
const listItems = (data) => {
    console.log(data);
    const {id,name,username} = data;
    const li = document.createElement('LI');
    li.id = id;
    li.style.listStyle = "none";
    li.style.background = '#f0f0f0'
    li.style.padding = '20px';
    li.style.borderRadius = '15px';
    li.style.margin = '10px 0'
    li.style.boxShadow = '7px -2px 15px rgba(0,0,0,0.15)'
    li.innerHTML = `<p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Nombre de usuario:</strong> ${username}</p>`;
    
    //olUsers.append(li); //Un método de Jquery 
    olUsers.appendChild(li); //Sin JQuery
};

const showUsers = (data) => {
    values = data;
    data.forEach(listItems);
};

//Use Ajax to Get Info // Top level Function, this function recibe a function
$.get(`${url_base}/users`, showUsers);