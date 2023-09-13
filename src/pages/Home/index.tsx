// Local imports
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import VotingScoreFormula from 'components/common/VotingScoreFormula';

// Component definition
function HomePage() {
  return (
    <Stack spacing={4} pt={2} pl={10} pr={10} justifyContent={'center'} textAlign={'center'} width={'100%'}>
    <h4>What if we would leave behind the old fashion every vote is equal model?</h4>
    <Typography variant="h3" component={'div'} textAlign={'center'}>
      <EmojiPeopleIcon fontSize='inherit' color='error' />≠<EmojiPeopleIcon fontSize='inherit' color='success' />
    </Typography>
    <Typography variant="body2" color="text.secondary" component={'div'} textAlign={'left'}>
      {`Maybe at first hearing this idea sound unfair... but I have to say the "one vote equals everyone's vote" shema is the most
       unequal concept ever existed on Earth. This idea is completely against equality and this old and toxic concept is the reason why the 99%
       has to rely blindly on their decision makers' dictated direction without having any chance to change this direction. And the root cause of
       this problem is simply the misunderstanding of the idea of voting.`}
       <br/><br/>
       {`The biggest issue behind a vote is it puts an equation sign between a voter who has no clue of the topic, who lives in his bubble, who is not well informed,
       who relies fake news, who is biased, etc and a person who is the complete opposite of these negatives.

       Cause of the above mentioned reason people actually can't trust the model of voting and this is the reason why it happens only once in every 4 year when elections take place.
      People trust science, trust experts, knowledge, etc, but in our voting model these values have no effect. Everyone pushes a big red or green button and the whys, the context,
      the reasons... nobody cares.

      But fortunately there is a new way.
       `}
    </Typography>

    <Typography variant="h3" component={'div'} textAlign={'center'}>
      <Stack direction="row" spacing={3} justifyContent={'center'}>
        <Stack alignContent={'center'} textAlign={'center'}>
          <span>
          <EmojiPeopleIcon fontSize='inherit' color='error' />
          </span>
          <span style={{fontSize: '14px'}}>
            <VotingScoreFormula />
          </span>
        </Stack>
        <Typography fontSize='inherit' >
        &gt;
        </Typography>
        <Typography fontSize='inherit' >
          <EmojiPeopleIcon fontSize='inherit' color='success' />
          <EmojiPeopleIcon fontSize='inherit' color='success' />
          <EmojiPeopleIcon fontSize='inherit' color='success' />
          <EmojiPeopleIcon fontSize='inherit' color='success' />
        </Typography>
      </Stack>
    </Typography>

    <Typography variant="body2" color="text.secondary" component={'div'} textAlign={'left'}>
      {`Imagine a world where the value and the effect of your vote is not just a simple binary (1 or 0) unit.
      Instead the value of your vote depends on how you inform and educate yourself in the subject of the specific voting by reading pro and
      con articles, watching critical or/and supportive content assigned to this ongoing voting. Imagine a voting system where citizens who are really care about their
      city's and country's present and future and they are willing to put effort in form of learning about and understand their law makers, governors points hand in hand with the related critical voices from the press and experts side,
      so these citizens can gain much more valuable voting score than whose who just ignored to take this extra homework.`}
    </Typography>
    <Typography variant="body1" fontWeight={'bold'} component={'div'} textAlign={'left'}>
    {'The vote value of the citizens will be calculated the following way:'}
    </Typography>
    <Typography variant="body2" component={'div'} textAlign={'left'}>
    <>
    <span style={{color: 'green', fontWeight: 'bold', textDecoration: 'underline'}}>
      {`The sum score (max 10.0) of any supportive/pro articles written by journalists, publicists,
      experts read & understood by the voter`}<br/>
    </span>multiplied by&nbsp;<br/>
    <span style={{color: 'red', fontWeight: 'bold', textDecoration: 'underline'}}>
      {`The sum score (max 10.0) of any critical/contraversive articles written by journalists, publicists,
      experts read & understood by the voter`}</span><br/>

  multiplied by&nbsp;<br/>
    <span style={{color: '#1976d2', fontWeight: 'bold', textDecoration: 'underline'}}>
      voting topic completed score (1.0)
    </span>&nbsp;
  </>
    </Typography>
    <Typography variant="body1" fontWeight={'bold'} component={'div'} textAlign={'left'}>
    {'What is also important about this formula context:'}
    </Typography>
    <ul style={{textAlign: 'left'}}>
      <li>Pro and contra articles can be published / assigned to one specific voting topic only</li>
      <li>The read and understanding of these articles validated by a quiz</li>
      <li>A citizen can have maximum 100 point voting score related to one specific voting</li>
    </ul>

    </Stack>
  );
}

// Default export
export default HomePage;
