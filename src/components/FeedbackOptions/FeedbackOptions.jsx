import { React } from 'react';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.btnBlock}>
      {options.map(btn => {
        return (
          <button
            key={btn}
            type="button"
            className={css.buttonFeedback}
            onClick={onLeaveFeedback}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}
