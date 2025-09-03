import React from 'react'
import { Link } from 'react-router-dom'
export default function LeaderBoard() {
  return (
    <div className='leaderboard'>
            <Link to={"/"}>Back to Home</Link>
            <h2>LeaderBoard</h2>
            <input type="text" placeholder='Search Players' />
        <ul className='players-leaderBoard-list'>
            <li className='players-LB-list-item'>a</li>
            <li className='players-LB-list-item'>b</li>
            <li className='players-LB-list-item'>c</li>
            <li className='players-LB-list-item'>d</li>
            <li className='players-LB-list-item'>e</li>
        </ul>



    </div>
  )
}
