import '../App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Homepage from './homepage';


function App(props) {
    useEffect(() => {
        props.dispatch(handleInitialData());
    }, []);

    return (
        <div>
            {props.loading === true ? null : <Homepage />}
        </div>
    );
}

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
})

export default connect(mapStateToProps)(App);
