import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cards from '../Cards/Cards.jsx';

import { BaseURLApi } from '../../VariablesENV.js';

import { PaginatorCards } from '../Paginator/Paginator.jsx';
import { hashSession } from '../../VariablesENV.js';

export function Characters() {
    const [characters, setCharacters] = useState([]);
    const [CurrentPage, setNumberPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const session = sessionStorage.getItem(hashSession) ?? null;

    useEffect(() => {
        fetch(`${BaseURLApi}?page=${CurrentPage}`)
            .then(res => res.json())
            .then(({ results }) => {
                window.scroll({ top: 0 });
                setCharacters(() => {
                    setLoading(false);
                    return results;
                });
            });
    }, [CurrentPage])

    return (
        <>
            {
                !session && <Navigate replace to='/login' />
            }
            <Cards loading={loading} panel={true} characters={characters} />
            <PaginatorCards setNumberPage={setNumberPage} />
        </>
    )
}