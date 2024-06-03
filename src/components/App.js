import '../App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Homepage from './homepage';
import Question from './question';


function App(props) {
    useEffect(() => {
        props.dispatch(handleInitialData());
    }, []);

    return (
        <div>
            {props.loading === true ? null : <Question id='xj352vofupe1dqz9emx13r' />}
        </div>
    );
}

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
})

export default connect(mapStateToProps)(App);
