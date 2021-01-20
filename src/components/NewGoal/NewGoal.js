import React, {useState} from 'react';

const NewGoal = props => {

   //destructuring
   const [enteredText, setEnteredTex] = useState('');

    const AddNewGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: parseInt(Math.floor(Math.random() * 10).toString()),

            text: enteredText
        }

        setEnteredTex('');

        props.onAddGoal(newGoal);
    };


    const textChangeHandler = event => {
        setEnteredTex(event.target.value);
    };

    return (
           <form className="new-goal" onSubmit={AddNewGoalHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler}/>
            <input type="submit" value="Add Goal"/>

           </form> 

    )

};



export default NewGoal;