import {Routes, Route} from 'react-router-dom'
import {Home} from '../pages/Home'
import {MovieDetails} from '../pages/MovieDetails'
import {New} from '../pages/New'
import {Profile} from '../pages/Profile'
import { SignIn } from '../pages/SignIn'

export function AppRoutes() {
    return (        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/new' element={<New />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/moviedetails/:id' element={<MovieDetails />} />
        </Routes>
    )
}