import { connect } from 'react-redux';
import DoneQuestion from './doneQuestions';
import NewQuestion from './newQuestions';

const Homepage = (props) => {
    return (
        <div className='center'>
            <NewQuestion id='sarahedo' />
            <DoneQuestion id='sarahedo' /> 
            {/* rememver to change the id back to the id which would equal the user thats logged in */}

        </div>
    );
}

const mapStateToProps = ({ questions }) => {
    return {
        questionIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
       
}

export default connect(mapStateToProps)(Homepage); 

//what does this component need from the state of our redux store? 
//setAuthUser ( who's account it is )
//questions unanswered
//questions answered 