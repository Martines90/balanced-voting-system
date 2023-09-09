import { useRef, useState } from 'react';

import { Avatar, Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { AllSeriesType } from '@mui/x-charts/models';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import QuizEnabledCountDown from 'components/common/CountDown';



const HeaderInfo = ({ orgInfo }: { orgInfo: any }) => {
  return (
      <Grid container alignItems="center" >
        <Grid item xs={12} style={{fontWeight: 'bold', lineHeight: '34px'}} >
          Voting subject initiated by:
        </Grid>
        <Grid item>
          {`${orgInfo.name} (${orgInfo.profile})`}
        </Grid>
        <Grid style={{marginLeft: '5px'}} item>
          <Avatar alt="Author 1" src={orgInfo.logoUrl} />
        </Grid>
        <Grid item xs={12} style={{fontWeight: 'bold', lineHeight: '34px'}} >
          Title:
        </Grid>
        <Grid item xs={12} >
          10% wage raise for the teachers
        </Grid>
      </Grid>
  );
}

const MockTextBlock = () => {
  return (
    <>
    {// eslint-disable-next-line max-len
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
    </>
  )
}

const MockChartData1 = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const series = [
    {
      type: 'bar',
      stack: '',
      yAxisKey: 'eco',
      data: [2, 5, 3, 4, 1],
    },
    {
      type: 'bar',
      stack: '',
      yAxisKey: 'eco',
      data: [5, 6, 2, 8, 9],
    },
    {
      type: 'line',
      yAxisKey: 'pib',
      color: 'red',
      data: [1000, 1500, 3000, 5000, 10000],
    },
  ] as AllSeriesType[];

  return (
    <ChartContainer
      series={series}
      width={windowSize.current[0] / 2}
      height={500}
      xAxis={[
        {
          id: 'years',
          data: [2019, 2020, 2021, 2022, 2023],
          scaleType: 'band',
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        {
          id: 'eco',
          scaleType: 'linear',
        },
        {
          id: 'pib',
          scaleType: 'log',
        },
      ]}
    >
      <BarPlot />
      <LinePlot />
      <ChartsXAxis label="Years" position="bottom" axisId="years" />
      <ChartsYAxis label="Gov spending on other fields" position="left" axisId="eco" />
      <ChartsYAxis label="PIB" position="right" axisId="pib" />
    </ChartContainer>
  );

}

const ContentInfo = () => {
  return (
    <Grid container alignItems="center" >
        <Grid item xs={12} style={{fontWeight: 'bold', lineHeight: '34px'}} >
          Descrition:
        </Grid>
        <Grid item xs={12} >
          <Typography variant="body2" color="text.secondary" component={'div'}>
            <MockTextBlock />
            <br/><br/>
            <MockTextBlock />
            <MockTextBlock />
            <MockTextBlock />
            <br/><br/>
            <MockTextBlock />
            <MockTextBlock />
          </Typography>
        </Grid>
        <Grid item xs={12} style={{fontWeight: 'bold', lineHeight: '34px'}} >
          Numbers:
        </Grid>
        <Grid item xs={12} >
          <Typography variant="body2" color="text.secondary" component={'div'}>
            <MockChartData1 />
            <br/><br/>
            <MockTextBlock />
          </Typography>
        </Grid>
    </Grid>

  );
}

const ContentUnderstandingValidationTest = () => {
  return (
    <Grid container alignItems="center" >
        <Grid item xs={12} style={{fontWeight: 'bold', lineHeight: '34px'}} >
          VCU (Voting content understanding) quiz:
        </Grid>
        <Grid item xs={12} >
          <Quiz />
        </Grid>
    </Grid>
  )
}

const Quiz = () => {
  const [checkAnswersEnabled, setCheckAnswersEnabled] = useState(false)
  const quizSettings = {
    questions: [
      {
        question: 'What percentage Jobbik want to increase teachers salary?',
        options: ['5%', '8%', '20%', '10%'],
        correctAnswer: '10%',
      },
      {
        question: 'Roughly how many teachers are affected by this raise?',
        options: ['200 thousand', '150 thousand', '55 thousand', '130 thousand'],
        correctAnswer: '130 thousand',
      },
      {
        question: 'What is the maximum gross salary a primary school teacher can have after 15 years of work?',
        options: ['158 000', '274 000', '480 000', '322 000'],
        correctAnswer: '322 000',
      },
      {
        question: 'What is the forecasted teacher shortage we face in 2024?',
        options: ['40 0000', '22 000', '34 000', '81 000'],
        correctAnswer: '22 000',
      },
      {
        question: 'Compared to average gross wage, teachers earn less or more in average?',
        options: ['less', 'more', 'almost equal'],
        correctAnswer: 'less',
      },
      {
        question: 'How many hours a day a high school teacher works if extra non work related activites incloded?',
        options: ['8', '6', '9', '12'],
        correctAnswer: '12',
      },
      {
        question: 'How earns the less?',
        options: ['janitor', 'teacher', 'mechanican', 'operator'],
        correctAnswer: 'teacher',
      },
    ],
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        {quizSettings.questions.map(({question, options}, index) => {
          return (
            <Grid item key={index} xs={12}>
              <QuizBlock
                index={index}
                question={question}
                options={options}
              />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={6}>
              <QuizEnabledCountDown
                secLeft={300}
                setCheckAnswersEnabled={setCheckAnswersEnabled}
                checkAnswersEnabled={checkAnswersEnabled}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ m: 3, display: 'flex' }} variant="standard">
                <Button disabled={!checkAnswersEnabled} sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                    Check Answers
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

const QuizBlock = ({
  question,
  options,
  index,
}: {
  question: string,
  options: string[],
  index: number,
}) => {
  const [value, setValue] = useState('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
      <FormControl sx={{ m: 3 }} variant="standard">
        <FormLabel id="demo-error-radios">{index + 1}. {question}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          {options.map((option, index) => {
            return (
              <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
            );
          })}
        </RadioGroup>

      </FormControl>
  );
}

export default function VotingInfo({
  orgInfo,
}: {
  orgInfo: any,
}) {
  return (
    <Card sx={{ maxWidth: '100%', margin: '2% 2% 0px' }}>
      <CardContent>
        <Stack spacing={1}>
          <HeaderInfo orgInfo={orgInfo} />
          <ContentInfo />
          <ContentUnderstandingValidationTest />
        </Stack>
      </CardContent>
    </Card>
  );
}
