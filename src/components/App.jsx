import { useState } from 'react';
import css from './App.module.css';
import { Statistics } from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification.jsx';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getNewFeedback = evt => {
    const { textContent } = evt.target;

    switch (textContent) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = evt => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = evt => {
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = isNaN(good / totalFeedback)
      ? 0
      : (good / totalFeedback) * 100;
    return Math.round(positiveFeedback);
  };

  return (
    <div className={css.mainDiv}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={getNewFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
