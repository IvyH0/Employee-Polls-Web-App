import { connect } from 'react-redux';
import '../App.css';

const NewQuestion = (props) => {
    const { questions } = props;
    console.log(props);
    return (
        <div className='question-container'>
            <h1 className='question-box-title'>New Questions</h1>
            <div className='question-box'>
                {questions.map(question => (
                    <li key={question.id} className='list'>
                        <div className='question-option'>
                            <p className='option-title'>{question.author}</p>
                            <p className='option-subtext'>{question.timestamp}</p>
                            <button type='button' className='btn'>Show Question</button>
                        </div>      
                    </li>
                ))}
            </div>
          
        </div>
    )
}
const mapStateToProps = (state, { id }) => {
    const user = state.users[id];

    if (!user) {
        // Handle the case where the user doesn't exist
        return { questions: [] };
    }

    const answeredQuestions = new Set(Object.keys(user.answers));
    const unansweredQuestions = Object.keys(state.questions)
        .filter(questionId => !answeredQuestions.has(questionId)) // ensures question is unanswered
        .map(questionId => {
            const question = state.questions[questionId];
            return {
                id: question.id,
                author: question.author,
                timestamp: new Date(question.timestamp).toLocaleDateString('en-GB', { 
                    day: '2-digit', 
                    month: '2-digit', 
                    year: '2-digit'
                }) + ' ' + new Date(question.timestamp).toLocaleTimeString('en-US', { 
                    hour: 'numeric', 
                    minute: 'numeric', 
                    hour12: true 
                }),
            }
        });

    return {
        questions: unansweredQuestions,
    };
}

export default connect(mapStateToProps)(NewQuestion);