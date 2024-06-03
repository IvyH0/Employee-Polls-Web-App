import {connect} from 'react-redux';

const Question = (props) => {
    const { question, users } = props;
    if (question === null) {
        return <p>This question doesn't exist</p>
    }

    const { id, author, optionOne, optionTwo} = question;
    const user = users[author];


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
                            <div className='poll-select'>
                                <button type='button' className='btn'>Select</button>
                            </div>
                        </div>
                        <div className='poll-option'>
                            <p className='poll-text'>{optionTwo.text.charAt(0).toUpperCase() + optionOne.text.slice(1)}</p>
                            {/* <p>Votes: {optionTwo.votes.length}</p> */}
                            <div className='poll-select'>
                                <button type='button' className='btn'>Select</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({authedUser, users, questions}, { id }) => {
    const question = questions[id];

    return {
        authedUser, 
        users,
        question
    };
};

export default connect(mapStateToProps)(Question);