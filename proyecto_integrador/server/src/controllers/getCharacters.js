const getCharacters = async (req,res) => {
    try {
        const { page } = req.query;
        
        //If the page query param exist, send page characters
        if(page){
            const response = await fetch(`${process.env.API_URL}?page=${page}`);
            const data = await response.json();

            if(data.error) throw Error('La consulta ha Fallado');
            
            res.status(200).json(data);
            return;
        };

        const response = await fetch(`${process.env.API_URL}`);
        const data = await response.json();
        
        res.status(200).json(data);
    } catch ({message}) {
        res.status(404).json({error:message});
    };
};

module.exports = {
    getCharacters
}