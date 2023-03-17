import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import {Cards} from '../Cards/Cards.jsx';

import { PaginatorCards } from '../Paginator/Paginator.jsx';

export function Characters(props){
    const [CurrentPage, setNumberPage] = useState(1);
    
    return(
        <>
            {
                !props.session && <Navigate replace to='/login' />
            }
            <Cards fetchPageNumber={CurrentPage}/>
            <PaginatorCards setNumberPage={setNumberPage}/>
        </>
    )
}