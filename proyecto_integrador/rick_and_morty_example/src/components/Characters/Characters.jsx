import React, {useEffect, useState} from 'react';
import {Cards} from '../Cards/Cards.jsx';

import { PaginatorCards } from '../Paginator/Paginator.jsx';

export function Characters(){
    const [CurrentPage, setNumberPage] = useState(1);
    
    return(
        <>
            <Cards fetchPageNumber={CurrentPage}/>
            <PaginatorCards setNumberPage={setNumberPage}/>
        </>
    )
}