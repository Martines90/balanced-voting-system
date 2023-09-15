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
          Draft Legislation: The Teacher Salary Enhancement Act
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

          <Typography variant="body1" style={{fontWeight: 'bold', lineHeight: '34px'}}  color="text.primary" component={'div'}>
            **Section 1: Purpose and Intent**
          </Typography>
          <Typography variant="body2" color="text.secondary" component={'div'}>
            {'This legislation, known as the Teacher Salary Enhancement Act, is enacted with the primary purpose of providing a fair and transparent mechanism for eligible teachers to receive a 10% salary raise. Recognizing the invaluable contribution of educators to society, this act seeks to improve teacher compensation and job satisfaction, ultimately benefiting the quality of education provided to students.'}
            <br/><br/>
            <Typography variant="body1" style={{fontWeight: 'bold', lineHeight: '34px'}}  color="text.primary" component={'div'}>
            **Section 2: Eligibility Criteria**
          </Typography>
            <br/>
            {'To be eligible for the 10% salary raise, a teacher must meet the following criteria:'}
            <br/><br/>
            {'a) Hold a valid teaching certificate or license issued by the state or relevant educational authority.'}
            <br/><br/>
            {'b) Be employed as a full-time teacher in a public or accredited private school, kindergarten through grade 12 (K-12).'}
            <br/><br/>
            {'c) Have completed a minimum of five years of continuous service as a teacher in the same school district or educational institution.'}
            <br/><br/>
            <Typography variant="body1" style={{fontWeight: 'bold', lineHeight: '34px'}}  color="text.primary" component={'div'}>
              **Section 3: Application Process**
            </Typography>
            <br/>
            {'Eligible teachers seeking the 10% salary raise must follow a clear and straightforward application process:'}
            <br/><br/>
            {'a) Teachers shall submit a written application to their respective school district or educational institution\'s human resources department.'}
            <br/><br/>
            {'b) The application shall include evidence of the teacher\'s qualifications and years of service, such as teaching certificates, licenses, and employment records.'}
            <br/><br/>
            {'c) The school district or educational institution shall establish a designated committee responsible for reviewing and verifying teacher eligibility.'}
            <br/><br/>
            {'d) The designated committee shall evaluate applications within 30 days of submission and notify teachers of the outcome.'}
            <br/><br/>
            <Typography variant="body1" style={{fontWeight: 'bold', lineHeight: '34px'}}  color="text.primary" component={'div'}>
            **Section 4: Funding Allocation**
            </Typography>
            <br/>
            {'Funding for the 10% salary raise shall be allocated from the state\'s education budget, ensuring that it does not adversely affect other critical education programs. The state\'s Department of Education shall oversee the distribution of funds to eligible school districts and educational institutions.'}
            <br/><br/>
            <Typography variant="body1" style={{fontWeight: 'bold', lineHeight: '34px'}}  color="text.primary" component={'div'}>
            **Section 5: Implementation and Timeline**
            </Typography>
            <br/>
            {'a) This act shall be implemented at the beginning of the next fiscal year following its passage.'}
            <br/><br/>
            {'b) Teachers who meet the eligibility criteria will start receiving the 10% salary raise in the first pay cycle of the fiscal year.'}
            <br/><br/>
            <Typography variant="body1" style={{fontWeight: 'bold', lineHeight: '34px'}}  color="text.primary" component={'div'}>
            **Section 6: Oversight and Reporting**
            </Typography>
            <br/>
            {'The State Department of Education shall establish an oversight committee responsible for monitoring the implementation of this act. The committee shall provide an annual report to the state legislature, summarizing the number of teachers who received salary raises, the total allocated funds, and any challenges faced during implementation.'}

          </Typography>
        </Grid>
        <Grid item xs={12} style={{fontWeight: 'bold', lineHeight: '34px'}} >
          Numbers:
        </Grid>
        <Grid item xs={12} >
          <Typography variant="body2" color="text.secondary" component={'div'}>
            <MockChartData />
            <br/><br/>
            <Typography variant="body1" style={{fontWeight: 'bold', lineHeight: '34px'}}  color="text.primary" component={'div'}>
            **Section 7: Conclusion**
            </Typography>
            <br/>
            {'The Teacher Salary Enhancement Act aims to recognize and reward the dedication and hard work of our educators by providing a 10% salary raise to eligible teachers. This legislation seeks to improve teacher retention, motivation, and ultimately, the quality of education for all students.'}
            <br/><br/>
          </Typography>
        </Grid>
    </Grid>

  );
}

const ContentUnderstandingValidationTest = () => {
  return (
    <Grid container alignItems="center" >
        <Grid item xs={12} style={{fontWeight: 'bold', lineHeight: '34px'}} >
          VCU (voting content understanding) quiz:
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
        question: 'What is the primary purpose of the Teacher Salary Enhancement Act?',
        options: [
          'a) To reduce the number of teachers in schools',
          'b) To provide a fair and transparent mechanism for eligible teachers to receive a 10% salary raise',
          'c) To allocate funds for non-educational purposes',
          'd) To require teachers to complete additional training',
        ],
      },
      {
        question: 'Which of the following criteria must a teacher meet to be eligible for the 10% salary raise?',
        options: [
          'a) Hold a valid teaching certificate or license',
          'b) Have completed at least one year of service as a teacher',
          'c) Be employed as a part-time teacher',
          'd) Work in any educational institution, regardless of accreditation',
        ],
      },
      {
        question: 'What is the responsibility of the designated committee in the application process?',
        options: [
          'a) Reviewing and verifying teacher eligibility',
          'b) Distributing funds to teachers',
          'c) Teaching in the classroom',
          'd) Setting the eligibility criteria',
        ],
      },
      {
        question: 'Where will the funding for the 10% salary raise be allocated from?',
        options: [
          'a) Teacher salaries',
          'b) The state\'s education budget',
          'c) Teacher retirement funds',
          'd) Private donations',
        ],
      },
      {
        question: 'When will eligible teachers start receiving the 10% salary raise under this act?',
        options: [
          'a) In the middle of the fiscal year',
          'b) In the second pay cycle of the fiscal year',
          'c) In the first pay cycle of the fiscal year',
          'd) At the end of the fiscal year',
        ],
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
    <Card sx={{ maxWidth: '100%', margin: { sx: '10px 10px 0px', md: '40px 40px 0px', lg: '40px 40px 0px' }}}>
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
