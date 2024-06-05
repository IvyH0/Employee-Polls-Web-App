import {connect} from 'react-redux';

const Error404 = (props) => {
    return (
        <div className='center'>
            <h1>Error 404</h1>
            <p>Page not found</p>
        </div>
    );
}

const mapStateToProps = ({authedUser, users}, ) => {
    console.log('id',authedUser)
    return {
        authedUser,
        users,
    };
}

export default connect(mapStateToProps)(Error404);