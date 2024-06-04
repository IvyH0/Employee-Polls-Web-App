import React, { useState } from 'react'; 
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/pollQuestions';
import { useNavigate } from 'react-router-dom';

const CreateQuestion = ({dispatch, id}) => {
    const navigate = useNavigate();
    const[optionOneText, setOptionOneText] = useState('');
    const[optionTwoText, setOptionTwoText] = useState('');

    const handleChangeOne = (e) => {
        const option = e.target.value;
        setOptionOneText(option);
    };
    const handleChangeTwo = (e) => {
        const option = e.target.value;
        setOptionTwoText(option);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(optionOneText, optionTwoText, id));
        setOptionOneText('');
        setOptionTwoText('');

        if(!id) {
            navigate('/');
        };
    };

    return (
        <div className='center'>
            <h2>Would You Rather</h2>
            <p>Create Your Own Poll</p>
            <form onSubmit={handleSubmit} className='form-container center'>
                <label className='input-label'>Option One</label>
                <input className='input' type='text' placeholder='Option One' value={optionOneText} onChange={handleChangeOne}/>
                <label className='input-label'>Option Two</label>
                <input className='input' type='text' placeholder='Option Two' value={optionTwoText} onChange={handleChangeTwo}/>
                <button type='submit' disabled={optionTwoText === "" || optionOneText === ""} className='btn'>Submit</button>
            </form>

        </div>
    );
};

export default connect()(CreateQuestion);