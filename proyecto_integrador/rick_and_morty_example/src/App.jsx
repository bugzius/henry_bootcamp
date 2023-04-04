import {Routes, Route} from 'react-router-dom';

import { About } from './components/About/About';
import Home from './components/Home/Home';
import { Characters } from './components/Characters/Characters.jsx';
import { CardDetails } from './components/CardDetails/CardDetails';
import { Login } from './components/Login/Login.jsx';
import { FavoriteCharacters } from './components/FavoriteCharacters/FavoriteCharacters';

export function App(){
    return(
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/characters' element={<Characters />} />
            <Route exact path='/characters/:id' element={<CardDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/favorites' element={<FavoriteCharacters />} />
        </Routes>
    )
}