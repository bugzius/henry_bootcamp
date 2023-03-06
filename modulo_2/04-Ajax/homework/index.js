//variables
const urlBase = 'http://localhost:5000';

const boxAmigos = $('#lista-amigos');
const btnListaAmigos = $('#box-lista-amigos-button');
const inputText = $('#text-amigo');
const buscarAmigo = $('#buscar-amigo');
//eventos
document.addEventListener('DOMContentLoaded', () => {
    //Eventos
    btnListaAmigos.click(() => getAllFriends(printFriends));
    //Delete a Friend
    boxAmigos.click(({target}) => {
        const id = Number(target.id) || Number(target.parentElement.id);
        if(id) deleteAFriend(id,getAllFriends.bind(null, printFriends));
    });
    //See a Friend
    buscarAmigo.click(evt => {
        evt.preventDefault();

        const value = inputText.val().trim().toLowerCase();

        if(!value){
            console.log('Completa los campos');
            return;
        };
        getAllFriends(data => {
            const friend = data.find( f => {
                return f.name.toLowerCase() === value;
            });
            if(!friend){
                alert('No existe [' + value + '] En tu lista de Amigos');
                return;
            };
            inputText.val('');
            printFriends([friend]);
        });
    })
    //Actions
        //Get all Friends
    getAllFriends(printFriends);
});
//funciones

function deleteAFriend(id,callback){
    $.ajax({
        url: `${urlBase}/amigos/${id}`,
        type:'delete',
        success: data => callback(data)
    });
};

function getAllFriends(callback){
    $.get(`${urlBase}/amigos`, callback);
};

function getAFriend(id,callback){
    $.get(`${urlBase}/${id}`,callback);
};

function printFriends(data){
    boxAmigos.empty();
    for(let amigo of data){
        boxAmigos.append(createHtmlAmigo(amigo));
    };
};

function createHtmlAmigo(amigo){
    const {id,name,age,email} = amigo;
    const randomNumber = (id % 5) + 1;
    /**
     * gist
     * 
     */
    const htmlAmigo = document.createElement('DIV');
    htmlAmigo.className = 'amigo flex group my-2 flex-nowrap relative md:flex-col lg:flex-row rounded-xl overflow-hidden bg-white shadow-md';
    htmlAmigo.innerHTML = `
    <div class="img-amigo">
        <img class="h-48 w-full md:h-36 object-cover lg:h-44" src="./sources/character-${randomNumber}.jpg" alt="amigo-${name}">
    </div>
    <div class="info p-5">
        <p class="text-xl border-b-4 font-semibold border-black w-full block">${name}</p>
        <div class="ctn-email flex flex-nowrap gap-2 mt-2">
            <img src="./sources/chat-email.png" class="w-6">
            <p>${email}</p>
        </div>
        <div class="ctn-username flex flex-wrap gap-2 mt-2">
            <img src="./sources/age.png" class="w-6">
            <p>${age}</p>
        </div>
    </div>
    <div class="btn-delete absolute bottom-4 right-4 group">
        <button id=${id} class="cursor-pointer shadow-md bg-gray-100 group-hover:bg-gray-200 rounded-lg group-hover:shadow-xl p-2 transition-all ease-in">
            <img src="./sources/trash.png" class="w-10">
        </button>
    </div>`;

    return htmlAmigo;
}
