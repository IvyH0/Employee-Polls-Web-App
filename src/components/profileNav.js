import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const ProfileNav = (props) => {
    const user = props.user;
    let avatarURL;
    let name; 
    if(user){
        avatarURL = user.avatarURL;
    }
    if(user) {
        name = user.name;
    }
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li>
                    <div className='avatar-profile'>
                        <img className='avatar-nav' src={avatarURL} alt={`Avatar of ${name}`}/>
                        <span>{name}</span> 
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
    return {
        authedUser,
        user
    };
    
};

export default connect(mapStateToProps)(ProfileNav); 