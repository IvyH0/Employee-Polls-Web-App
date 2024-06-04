import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const ProfileNav = (props) => {
    const user = props.user;
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li>
                    <div className='avatar-profile'>
                        <img className='avatar-nav' src={user.avatarURL} alt={`Avatar of ${user.name}`}/>
                        <span>{props.user.name}</span> 
                    </div>
                </li>
                <li>
                    <Link to='/login' className='nav-option'>Logout</Link>
                </li>
            </ul>
        </nav>  
    )
}

const mapStateToProps = ({authedUser, users}) => {
    const user = users[authedUser];
    console.log(user)
    return {
        authedUser,
        user
    };
    
};

export default connect(mapStateToProps)(ProfileNav); 