import { connect } from 'react-redux';
import DoneQuestion from './doneQuestions';
import NewQuestion from './newQuestions';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation(); 
        let navigate = useNavigate(); 
        let params = useParams(); 
        return <Component {...props} router={{location, navigate, params}}/>;
    };
    return ComponentWithRouterProp;
}

const Homepage = (props) => {
    return (
        <div className='center'>
            <NewQuestion id={props.id} />
            <DoneQuestion id={props.id} /> 
            {/* rememver to change the id back to the id which would equal the user thats logged in */}

        </div>
    );
}

const mapStateToProps = ({ authedUser, questions, users }, props) => {
    const {id} = props.match.params;

    return {
        id,
        authedUser,
        // questionIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
       
}

export default withRouter(connect(mapStateToProps)(Homepage)); 

//what does this component need from the state of our redux store? 
//setAuthUser ( who's account it is )
//questions unanswered
//questions answered 