import '../App.css';
import { useEffect, Fragment } from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Homepage from './homepage';
import Question from './question';
import CreateQuestion from './createquestion';
import Nav from './nav';
import LeaderBoard from './leaderboard';
import Login from './login';
import { Routes, Route, useLocation } from 'react-router-dom';
import Error404 from './error404';


function App(props) {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        props.dispatch(handleInitialData());
    }, []);

    const showNav = location.pathname !== '/login';

    return (
        // <div>
        //     <Question router={{state: {id: '6ni6ok3ym7mf1p33lnez'}}}/>
        // </div>
        <Fragment>
            <div className='app-container'>
                {showNav && <Nav/>}
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={props.loading ? null : <Homepage/>} />
                    <Route path='/questions/:id' element={props.loading ? null : <Question />} />
                    <Route path='/add' element={props.loading ? null : <CreateQuestion />} />
                    <Route path='/leaderboard' element={props.loading ? null : <LeaderBoard />} />
                    <Route path='/404' element={<Error404 />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
                </div>
        </Fragment>
    );
}

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
})

export default connect(mapStateToProps)(App);
