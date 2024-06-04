import {connect} from 'react-redux';
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

const Question = (props) => {
    const {question} = props; 
    if (!question) {
        return <p>This Question doesn't exist!</p>
    }
    const {id, optionOne, optionTwo, author } = question;
    const user = props.users[author];

    //add save question answer function here to store
    // create an action for the save questino function and place in ehre

    return (
        <div key={id}>
            <h1 className='question-box-title'>{user.name} asks:</h1>
            <div>
                <div className='poll-container center'>
                    <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar'/>
                    <h2>Would You Rather</h2>
                    <div className="poll-questions">
                        <div className='poll-option'>
                            <p className='poll-text'>{optionOne.text.charAt(0).toUpperCase() + optionOne.text.slice(1)}</p>
                            {/* <p>Votes: {optionOne.votes.length}</p> */}
                            {/* find a way to hide votes until they voted */}
                            <div className='poll-select'>
                                <button type='button' className='btn'>Select</button>
                            </div>
                        </div>
                        <div className='poll-option'>
                            <p className='poll-text'>{optionTwo.text.charAt(0).toUpperCase() + optionTwo.text.slice(1)}</p>
                            {/* <p>Votes: {optionTwo.votes.length}</p> */}
                            <div className='poll-select'>
                                <button type='submit' className='btn'>Select</button>
                                {/* Create a way to disable the select button if they have already voted */}
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = ({authedUser, users, questions}, props) => {
    const {id} = props.router.params
    const question = questions[id]
    console.log(authedUser)
    console.log('question', question)
    return {
        authedUser, 
        users,
        question,
        // !questions[id] ? [] : questions[id].questions.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    };
};

export default withRouter(connect(mapStateToProps)(Question));