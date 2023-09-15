import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import QuizEnabledCountDown from 'components/common/CountDown';
import MockChartData from 'components/common/ChartData';

const HeaderInfo = ({ authorInfo }: { authorInfo: any }) => {
  return (
      <Grid container alignItems="center" >
        <Grid item xs={12} style={{fontWeight: 'bold', lineHeight: '34px'}} >
          Written by:
        </Grid>
        <Grid item>
          {`${authorInfo.name} (${authorInfo.profile})`}
        </Grid>
        <Grid style={{marginLeft: '5px'}} item>
          <Avatar alt="Author 1" sx={{ width: 54, height: 54 }} src={authorInfo.profile_pics} />
        </Grid>
        <Grid item xs={12} style={{fontWeight: 'bold', lineHeight: '34px'}} >
          Title:
        </Grid>
        <Grid item xs={12} >
          The Imperative of Raising Teacher Salaries: Investing in Our Future
        </Grid>
      </Grid>
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
            {'Teachers play a pivotal role in shaping the future of our society. They are the architects of knowledge, guiding students through the labyrinth of learning, and imparting the skills and wisdom necessary for personal and societal growth. Yet, despite their indispensable contribution to our communities, teachers are often undervalued and undercompensated. In this article, we will explore the compelling reasons why teachers deserve a salary raise. By investing in educators, we are ultimately investing in a brighter future for all.'}
            <br/><br/>
            {'1. Attracting and Retaining Quality Educators'}
            <br/><br/>
            {'One of the most compelling arguments for raising teacher salaries is the need to attract and retain high-quality educators. A competitive salary not only entices talented individuals to enter the teaching profession but also encourages experienced teachers to stay in the field. When teachers are paid what they deserve, they are more likely to commit to a long-term career in education, benefiting students who benefit from their experience and dedication.'}
            <br/><br/>
            {'According to the National Center for Education Statistics, nearly 44% of new teachers leave the profession within the first five years. Often, this attrition is due to financial pressures. By offering higher salaries, we can reduce this churn rate and ensure that our education system benefits from the wisdom and expertise of seasoned teachers.'}
            <br/><br/>
            {'2. Motivation and Job Satisfaction'}
            <br/><br/>
            {'Just like any other profession, job satisfaction and motivation are essential for teachers. When educators feel valued and adequately compensated, they are more likely to be enthusiastic and dedicated in the classroom. Higher salaries can serve as a motivational factor, encouraging teachers to continually improve their teaching methods and invest in professional development.'}
            <br/><br/>
            {'Moreover, motivated and satisfied teachers create a positive learning environment that fosters student success. When teachers feel financially secure, they can focus more on their teaching duties and less on financial stressors, resulting in better outcomes for students.'}
            <br/><br/>
            {'3. Elevating the Status of the Teaching Profession'}
            <br/><br/>
            {'Society often measures the value of a profession by the salaries it offers. When teachers are underpaid, it sends a message that their work is undervalued. This perception can deter talented individuals from pursuing a career in education. By increasing teacher salaries, we send a clear message that teaching is a respected and vital profession.'}
            <br/><br/>
            {'Elevating the status of the teaching profession has several positive consequences. It encourages more talented individuals to choose teaching as a career, resulting in a more diverse pool of educators. Additionally, it can change the public perception of teachers, leading to greater support for education initiatives and policies.'}
            <br/><br/>
            {'4. Reducing Financial Stress'}
            <br/><br/>
            {'Teaching is a demanding profession that often requires educators to work beyond regular school hours. Despite this dedication, many teachers struggle to make ends meet due to low salaries. A raise in teacher salaries can alleviate financial stress and allow teachers to focus more on their students and less on their financial burdens.'}
            <br/><br/>
            {'Reducing financial stress is not only beneficial for teachers but also for the education system as a whole. Teachers who are less worried about their finances are more likely to be mentally and emotionally available for their students. They can also invest in classroom supplies and resources, ultimately improving the quality of education.'}
          </Typography>
        </Grid>
        <Grid item xs={12} >
          <Typography variant="body2" color="text.secondary" component={'div'}>
            <MockChartData />
            <br/><br/>
            {'5. Keeping Pace with Inflation'}
            <br/><br/>
            {'Over time, inflation erodes the real value of salaries. Teachers who have been in the profession for many years may find that their purchasing power has diminished. By regularly increasing teacher salaries to keep pace with inflation, we ensure that educators can maintain a decent standard of living. This not only honors their dedication but also helps them to continue serving their students effectively.'}
            <br/><br/>
            {'6. Investing in the Future'}
            <br/><br/>
            {'A well-funded and adequately staffed education system is an investment in the future. Quality education empowers individuals to reach their full potential, contributes to a skilled and competitive workforce, and strengthens the overall economy. By raising teacher salaries, we invest in the education system\'s stability and sustainability, ensuring that students receive the best possible education.'}
            <br/><br/>
            <br/><br/>
            {'Conclusion'}
            <br/><br/>
            {'Raising teacher salaries is not merely an act of generosity; it is an investment in our future. Quality education is the cornerstone of progress and prosperity, and teachers are the pillars upon which it is built. By offering competitive salaries to educators, we can attract and retain the best talent, elevate the status of the teaching profession, and ultimately provide a brighter future for our students and society as a whole. It\'s time to recognize the invaluable contributions of teachers and ensure they are compensated accordingly.'}
          </Typography>
        </Grid>
    </Grid>

  );
}

const ContentUnderstandingValidationTest = () => {
  return (
    <Grid container alignItems="center" >
        <Grid item xs={12} style={{fontWeight: 'bold', lineHeight: '34px'}} >
          ACU (article content understanding) quiz:
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
        question: 'Why is attracting and retaining quality educators important for the education system?',
        options: [
          'a) To reduce the number of students in each classroom',
          'b) To improve the quality of school facilities',
          'c) To ensure students benefit from experienced and dedicated teachers',
          'd) To increase the number of administrative staff',
        ],
      },
      {
        question: 'How can higher teacher salaries contribute to job satisfaction and motivation?',
        options: [
          'a) By reducing the number of hours teachers work',
          'b) By providing more vacation days',
          'c) By alleviating financial stress and recognizing their value',
          'd) By assigning fewer responsibilities to teachers',
        ],
      },
      {
        question: 'What is the significance of elevating the status of the teaching profession?',
        options: [
          'a) It encourages more teachers to take extended vacations',
          'b) It discourages talented individuals from entering the profession',
          'c) It sends a message that teaching is respected and important',
          'd) It decreases public support for education initiatives'],
      },
      {
        question: 'How does keeping pace with inflation benefit teachers?',
        options: [
          'a) It helps them retire earlier',
          'b) It allows them to purchase luxury items',
          'c) It maintains their purchasing power and standard of living',
          'd) It increases their workload'],
      },
      {
        question: 'What is the relationship between teacher salaries and student outcomes?',
        options: [
          'a) There is no correlation between teacher salaries and student outcomes',
          'b) Higher teacher salaries lead to worse student outcomes',
          'c) Higher teacher salaries result in better teaching methods and improved student outcomes',
          'd) Teacher salaries only affect student behavior, not academic performance'],
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

export default function ArticleInfo({
  authorInfo,
}: {
  authorInfo: any,
}) {
  return (
    <Card sx={{ maxWidth: '100%', margin: '2% 2% 0px' }}>
      <CardContent>
        <Stack spacing={1}>
          <HeaderInfo authorInfo={authorInfo} />
          <ContentInfo />
          <ContentUnderstandingValidationTest />
        </Stack>
      </CardContent>
    </Card>
  );
}
