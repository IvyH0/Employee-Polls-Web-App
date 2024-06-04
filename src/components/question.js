import {connect} from 'react-redux';
// import {saveQuestionAnswer} from '../apis';

const Question = (props) => {
    const { questions, users } = props;
    
    if (questions === null) {
        return <p>This question doesn't exist</p>
    }
    console.log('props', props); 

    const { id, author, optionOne, optionTwo} = questions;
    const user = users[author];
    console.log('user',user)

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
    const {id} = props.match.params;
    return {
        authedUser, 
        users,
        id,
        questions: questions[id]
        // !questions[id] ? [] : questions[id].questions.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    };
};

export default connect(mapStateToProps)(Question);