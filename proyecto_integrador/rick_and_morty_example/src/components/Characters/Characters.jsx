import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import {Cards} from '../Cards/Cards.jsx';

import { PaginatorCards } from '../Paginator/Paginator.jsx';
import { hashSession } from '../../VariablesENV.js';

export function Characters(){
  const session = sessionStorage.getItem(hashSession) ?? null
  const [CurrentPage, setNumberPage] = useState(1);
  
  return(
        <>
            {
                !session && <Navigate replace to='/login' />
            }
            <Cards fetchPageNumber={CurrentPage}/>
            <PaginatorCards setNumberPage={setNumberPage}/>
        </>
    )
}