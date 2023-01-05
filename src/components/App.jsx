import React from 'react';
import css from './App.module.css';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification.jsx';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getNewFeedback = evt => {
    const { textContent } = evt.target;
    this.setState(prevState => ({
      [textContent]: this.state[textContent] + 1,
    }));
  };

  countTotalFeedback = evt => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = evt => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = isNaN(good / totalFeedback)
      ? 0
      : (good / totalFeedback) * 100;
    return Math.round(positiveFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.mainDiv}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.getNewFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
