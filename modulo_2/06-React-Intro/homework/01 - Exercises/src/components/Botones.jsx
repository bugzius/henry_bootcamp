import React from 'react';


class Botones extends React.Component{
    render(){
        const {m1,m2} = this.props.alerts;
        function sweetAlert(value){
            alert(value);
        };
        return (
            <div className='ctn-buttons-window'>
                <button className='button-window m1' onClick={sweetAlert.bind(null,m1)}>Módulo 1</button>
                <button className='button-window m2' onClick={sweetAlert.bind(null,m2)}>Módulo 2</button>
            </div>
        )
    }
}

export {
    Botones
}