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
    }, [props]);

    return (
        // <div>
        //     <Nav/>
        // </div>
        <Fragment>
        <div className='app-container'>
            {
                props.loading === true
                ? null
                : (
                    <>
                        <Nav/>
                        <Routes>
                            <Route path='/' element={<Homepage match={{params: {id : 'mtsamis' }}} />} />
                            <Route path='/questions/:id' element={<Question />} />
                            <Route path='/add' element={<CreateQuestion />} />
                        </Routes>
                    </>
                  )
            }
        </div>
    </Fragment>
    );
}

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
})

export default connect(mapStateToProps)(App);
