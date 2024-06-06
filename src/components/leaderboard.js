import {connect} from 'react-redux';

const Leaderboard = (props) => {
    const {users} = props; 
    console.log(users)
    return (
        <div className='center'>
            <table className='leaderboard'>
                <thead className='table-head'>
                    <h3 className='user-th'>Users</h3>
                    <h3 className='answer-th'>Answered</h3>
                    <h3 className='created-th'>Created</h3>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className='table-row'>
                            <td className='table-cell-1'>
                                <div className='user-cell'>
                                    <img src={user.avatarURL} alt='avatar' className='avatar-nav'/>
                                    <p>{user.name}</p>
                                </div>
                            </td>
                            <td className='table-cell-2'>
                                <p>{user.answeredQuestions}</p>
                            </td>
                            <td className='table-cell-2'>
                                <p>{user.createdQuestions}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = ({authedUser, users}) => {
    const userArray = Object.keys(users).map((key) => {
        const user = users[key]; 
        console.log(user)
        return {
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answeredQuestions: Object.keys(user.answers).length,
            createdQuestions: user.questions.length, 
            score: Object.keys(user.answers).length + user.questions.length
        }
    });

    return {
        authedUser,
        users: userArray.sort((a, b) => b.score - a.score)
    }
}

export default connect(mapStateToProps)(Leaderboard); 

