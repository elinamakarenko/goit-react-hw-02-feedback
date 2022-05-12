import React from 'react';
// import PropTypes from 'prop-types';
import s from './Feedback.module.css';

function Feedback ({feedback, addFeedback}) {
    const {good, neutral, bad} = feedback;
    return(
        <div className={s.feedback}>
        <h2 className={s.title}>Please leave feedback</h2>
        <ul className={s.buttonList}>
            <li className={s.buttonItem}>
                <button className={s.button} type="button" onClick={ ()=> addFeedback("good")}>Good</button>
            </li>
            <li className={s.buttonItem}>
                <button className={s.button} type="button" onClick={ ()=> addFeedback("neutral")}>Neutral</button>
            </li>
            <li className={s.buttonItem}>
                <button className={s.button} type="button" onClick={ ()=> addFeedback("bad")}>Bad</button>
            </li>
        </ul>
        <h2 className={s.title}>Statistics</h2>
        <ul className={s.feedbackList}>
            <li className={s.feedbackItem}>Good: {good} </li>
            <li className={s.feedbackItem}>Neutral: {neutral} </li>
            <li className={s.feedbackItem}>Bad: {bad} </li>
        </ul>
        </div>
    );
}
export default Feedback;