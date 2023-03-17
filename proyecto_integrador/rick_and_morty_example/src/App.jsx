import {Routes, Route} from 'react-router-dom';

import { About } from './components/About/About';
import Home from './components/Home/Home';
import { Characters } from './components/Characters/Characters.jsx';
import { CardDetails } from './components/CardDetails/CardDetails';
import { Login } from './components/Login/Login.jsx';

import { hashSession } from './VariablesENV.js'

export function App(){
    const validateSession = sessionStorage.getItem(hashSession) ?? null;
    return(
        <Routes>
            <Route exact path='/' element={<Home session={validateSession}/>} />
            <Route exact path='/characters' element={<Characters session={validateSession}/>} />
            <Route exact path='/characters/:id' element={<CardDetails session={validateSession}/>} />
            <Route path='/about' element={<About session={validateSession}/>} />
            <Route path='/login' element={<Login session={validateSession}/>} />
        </Routes>
    )
}