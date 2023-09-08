import Countdown from 'react-countdown';

const QuizEnabledCountDown = (
  {secLeft, setCheckAnswersEnabled, checkAnswersEnabled}:
  {secLeft: number, setCheckAnswersEnabled: any, checkAnswersEnabled: boolean}) => {

  let renderer;
  let secondsCountDownFrom = secLeft

  if (!checkAnswersEnabled) {
    renderer = ({ minutes, seconds, completed }: any) => {
      if (completed) {
        // Render a completed state
        setCheckAnswersEnabled(true)
        return <span>Checking answers will be enabled in 0 min and 0 sec</span>;
      } else {
        return <span>Checking answers will be enabled in {minutes} min and {seconds} sec</span>;
      }
    }
  } else {
    secondsCountDownFrom = 0;
    renderer = () => {
        return <span>Checking answers will be enabled in 0 min and 0 sec</span>;
    }
  }

  return (
    <Countdown
      date={Date.now() + secondsCountDownFrom * 1000 }
      renderer={renderer}
    />
  )
}

export default QuizEnabledCountDown
