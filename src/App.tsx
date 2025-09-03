import { Routes,Route } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import LeaderBoard from './pages/LeaderBoard'
import Admin from './pages/Admin'
import Game from './pages/Game'

export default function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='leaderboard' element={<LeaderBoard/>}></Route>
        <Route path='admin' element={<Admin/>}></Route>
        <Route path='game' element={<Game/>}></Route>
      </Routes>
    </>
  )
}
