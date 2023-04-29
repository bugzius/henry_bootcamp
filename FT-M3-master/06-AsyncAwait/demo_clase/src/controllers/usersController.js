const getUsersController = (req,res) => {
    res.status(200).send('Correcto desde el controlador de Usuarios');
};

module.exports = {
    getUsersController
};