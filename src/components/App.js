import '../App.css';
import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Homepage from './homepage';
import Question from './question';
import CreateQuestion from './createquestion';
import Nav from './nav';
import { Routes, Route } from 'react-router-dom';


function App(props) {
    useEffect(() => {
        props.dispatch(handleInitialData());
    }, []);

    return (
        <Fragment>
            <div className='app-container'>
                <Nav/>
                    {
                        props.loading === true
                        ? null
                        : <Routes>
                            <Route path='/' element={<Homepage />} />
                            <Route path='/questions/:id' element={<Question  match={{
                                    params: {id : 'xj352vofupe1dqz9emx13r' }, 
                                }} />} />
                            <Route path='/add' element={<CreateQuestion />} />
                        </Routes>
                    }
            </div>
        </Fragment>
    );
}

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
})

export default connect(mapStateToProps)(App);
