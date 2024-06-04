import '../App.css';
const QuestionList = ({ title, questions, onQuestionClick }) => (
    <div className='question-container'>
        <h1 className='question-box-title'>{title}</h1>
        <div className='question-box'>
            {questions.map(question => (
                <li key={question.id} className='list'>
                    <div className='question-option'>
                        <p className='option-title'>{question.author}</p>
                        <p className='option-subtext'>{question.timestamp}</p>
                        <button type='button' className='btn' onClick={() => onQuestionClick(question.id)}>Show Question</button>
                    </div>      
                </li>
            ))}
        </div>
    </div>
);

export default QuestionList;

// import { useLocation, useNavigate, useParams } from 'react-router-dom';

// const withRouter = (Component) => {
//     const ComponentWithRouterProp = (props) => {
//         let location = useLocation(); 
//         let navigate = useNavigate(); 
//         let params = useParams(); 
//         return <Component {...props} router={{location, navigate, params}}/>;
//     };
//     return ComponentWithRouterProp;
// }
