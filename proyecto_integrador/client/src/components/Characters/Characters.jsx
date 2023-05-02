import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cards from '../Cards/Cards.jsx';

import { BaseURLApi } from '../../VariablesENV.js';

import { PaginatorCards } from '../Paginator/Paginator.jsx';
import { hashSession } from '../../VariablesENV.js';
import useParam from '../../utils/getAParams.js';

export function Characters() {
    const [CurrentPage, setNumberPage] = useParam('currentPage');

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const session = sessionStorage.getItem(hashSession) ?? null;

    useEffect(() => {
        const page = new URLSearchParams(window.location.search).get('currentPage');

        setLoading(true);
        fetch(`${BaseURLApi}?page=${page}`)
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
            <PaginatorCards CurrentPage={CurrentPage} setNumberPage={setNumberPage} />
        </>
    )
}