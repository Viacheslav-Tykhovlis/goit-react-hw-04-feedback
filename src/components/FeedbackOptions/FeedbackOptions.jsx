import React from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

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
}
