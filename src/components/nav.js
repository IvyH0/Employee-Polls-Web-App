import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li>
                    <Link to='/'  className='nav-option'>Home</Link>
                </li>
                <li>
                    <Link to='/add' className='nav-option'>New</Link>
                </li>
                <li>
                    <Link to='/leaderboard'  className='nav-option'>Leaderboard</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;