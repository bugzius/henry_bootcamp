import {Routes, Route} from 'react-router-dom';

import { About } from './components/About/About';
import { AddCharacters } from './components/AddCharacters/AddCharacters';
import Home from './components/Home/Home';
import { Characters } from './components/Characters/Characters.jsx';

export function App(){
    return(
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/characters' element={<Characters/>} />
            {/* <Route exact path='/characters/:id' element={<Home/>} /> */}
            <Route path='/about' element={<About/>} />
            <Route path='/addCharacters' element={<AddCharacters/>} />
        </Routes>
    )
}