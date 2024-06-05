import {connect} from 'react-redux';    
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {setAuthedUser} from '../actions/authedUser';

const Login = (props) => {
    const { users } = props;
    const[select, setSelect] = useState('')
    const navigate = useNavigate();

    const handleSelectChange = (e) => {
        e.preventDefault();
        setSelect(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (select) {
            props.dispatch(setAuthedUser(select));
            navigate('/');
        }

    }

    return (
        <div className='login-page'>
            <div className='center login-container'>
                <h1 className='login-title'>Welcome to the Would You Rather App!</h1>
                <p className='login-subtext' >Please sign in to continue</p>
                <select className='login-select' onChange={(e) => handleSelectChange(e)}>
                    <option className='option-select'value=''>Select User</option>
                    {
                        Object.keys(users).map((user) => (
                            <option className='option-select' key={user} value={user}>{users[user].name}</option>
                        ))
                    }
                </select>
                <button className='btn poll' onClick={handleLogin}>Sign In</button>
            </div>
        </div>
      
    );
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        authedUser,
        users
    };
}; 

export default connect(mapStateToProps)(Login);