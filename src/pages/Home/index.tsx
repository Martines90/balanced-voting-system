// Local imports
import Stack from '@mui/material/Stack';
import { Box, Button, Typography } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import VotingScoreFormula from 'components/common/VotingScoreFormula';

import voting_box_pics from 'assets/voting_out_of_date_v3.png';
import { Link } from 'react-router-dom';

// Component definition
function HomePage() {
  return (
    <Stack fontFamily={'Arial'}
      spacing={4}
      pt={2} pl={{xs: 2, sx: 2, sm: 2, md: 8, lg: 10}} pr={{xs: 2, sx: 2, sm: 2, md: 8, lg: 10}}
      justifyContent={'center'} textAlign={'center'} width={'100%'}>

      <Box sx={{
        width: {
          xs: 'calc(100% + 32px)',
          sx: 'calc(100% + 32px)',
          sm: 'calc(100% + 32px)',
          md: 'calc(100% + 128px)',
          lg: 'calc(100% + 160px)',
        },
        marginTop: '-16px',
        marginLeft: {
          xs: '-16px',
          sx: '-16px',
          sm: '-16px',
          md: '-64px',
          lg: '-80px',
        }}}
        component="img" src={voting_box_pics}>

  </Box>
    <h4 style={{fontSize: 'x-large', fontWeight: 'normal'}}>{'The institution of voting as the dinosaur 🦖 of our time'}</h4>
    <Typography variant="body2" color="text.secondary" component={'div'} textAlign={'left'}>
      {'A 2,500-year-old system that works essentially as it did in ancient Greece. Although one of the main symbols of freedom of expression in democracies is the right to vote, but sadly the technicalities of the practice of this right make it virtually impossible for citizens to apply any meaningful control, influence or pressure on their elected leaders through the weight of their votes.'}
       <br/><br/>
       {'The current model of voting is an infinitely primitive system based on the fundamental pillar of one person = one vote'}
       <br/><br/>
{'It requires no other condition, no other requirement than that the voting citizen goes to a ballot box and increases the chances of candidate A,B,C or with a Yes/No vote in a referendum that he or she thinks is favourable.'}
<br/><br/>
       {'It is no coincidence that a country can only afford such a fad every 4 years at most. After all, no one really wants a happy unhappy person to decide on any issue without knowledge, competence or the necessary skills. And the average voter, beyond a few propaganda speeches, does not really have a deep knowledge of the subject and the issues of the vote. And then, of course, there are those who, although they are informed, do so within their own information bubble, so that their opinions are often not, or only partially, objective.'}
<br/><br/>
      {`
      It is precisely the search for solutions to these legitimate concerns and the belief in democracy that gave birth to the `}
      <span style={{fontWeight: 'bold'}}>Weighted Voting System</span> model.

    </Typography>


    <Typography variant="h3" component={'div'} textAlign={'center'}>
      <EmojiPeopleIcon fontSize='inherit' color='error' />≠<EmojiPeopleIcon fontSize='inherit' color='success' />
  </Typography>
      <Typography variant="body2" color="text.secondary" component={'div'} textAlign={'left'}>
      <Typography variant="body1" fontWeight={'bold'} component={'div'} textAlign={'left'}>
      {'The Weighted Voting System guarantees:'}
      </Typography>
      <br/>
      <ul style={{textAlign: 'left'}}>
      <li>{'The voter is sufficiently informed about the subject and the issues to be voted on'}</li>
      <li>{'The voter is aware of several different pro and con positions on the vote before casting his/her vote.'}</li>
      <li>{'The value of the voter\'s vote will be determined by the extent to which he or she is aware of different expert critical content surrounding the subject of the vote.'}</li>
      <li>{'In addition, other factors can increase/decrease the value of a vote, such as: location, education, level of involvement (gender, age, religion).'}</li>
      <li>{'Practice continuous (weekly or even daily) control over the activities of decision-makers in the form of online voting.'}</li>
      </ul>
      <br/>
      {'The aim is for citizens to be truly equal partners, even bosses, to their politicians, but above all to be governed by reason and common sense.'}
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
    <Typography variant="body2" component={'div'} textAlign={'left'}>
    <Typography variant="body1" color="text.secondary"  fontWeight={'bold'} component={'div'} textAlign={'left'}>
    {'The vote value calculated the following way:'}
    </Typography>
    <br/>
    <>
    Formula: (<span style={{color: 'green', fontWeight: 'bold'}}>p</span>*📝) * (<span style={{color: 'red', fontWeight: 'bold'}}>c</span>*📝) * 1.0 = your voting score 🗳
    <br/><br/>
    Advenced formula: (p*📝) * (c*📝) * (🎓/🌐) * 1.0 = your voting score 🗳
    <br/><br/>
    <Typography variant="body1" color="text.secondary"  fontWeight={'bold'} component={'div'} textAlign={'left'}>
    {'Detailed exmplanation of formula:'}
    </Typography>
    <br/>
    <span style={{color: 'green', fontWeight: 'bold', textDecoration: 'underline'}}>
      {`The sum score (max 10.0) of any supportive/pro articles written by journalists, publicists,
      experts read & understood by the voter`}<br/>
    </span>multiplied by&nbsp;<br/>
    <span style={{color: 'red', fontWeight: 'bold', textDecoration: 'underline'}}>
      {`The sum score (max 10.0) of any critical/contraversive articles written by journalists, publicists,
      experts read & understood by the voter`}</span><br/>
      multiplied by&nbsp;<br/>
<span style={{color: 'blue', fontWeight: 'bold', textDecoration: 'underline'}}>
      {'(optional) A fix score based on the level of your exposure (1-100)'}<br/>
    </span>
  multiplied by&nbsp;<br/>
    <span style={{color: '#1976d2', fontWeight: 'bold', textDecoration: 'underline'}}>
      voting topic completed score (1.0)
    </span>&nbsp;
  </>
  <br/>
  <br/>
  <Typography variant="body1" color="text.secondary"  fontWeight={'bold'} component={'div'} textAlign={'left'}>
    {'What is also important about this formula context:'}
    </Typography>
    <br/>
    <ul style={{textAlign: 'left'}}>
      <li>Pro and contra articles can be published / assigned to one specific voting topic only</li>
      <li>The reading and understanding of these articles are validated by quiz</li>
      <li>A citizen can have a maximum of 100 (or 1000) point voting score related to one specific voting event</li>
    </ul>
    </Typography>
    <Typography variant="body1" color="text.secondary"  fontWeight={'bold'} component={'div'} textAlign={'left'}>
    {'This demo of the Weighted Voting System contains the below modules:'}
    <br/><br/>
    <ul style={{textAlign: 'left'}}>
      <li><Button component={Link} target="_blank" to={'/votings'} size="small" >Voting pool (example)</Button> - Here voter can see upcoming actual/upcoming/closed votings</li>
      <li><Button component={Link} target="_blank" to={'/voting'} size="small" >Voting action screen (example)</Button> - Here is the view how an ongoing voting action interface look like</li>
      <li><Button component={Link} target="_blank" to={'/voting-topic'} size="small" >Voting info screen (example)</Button> - Here is an example view how a voter can read an actual voting</li>
      <li><Button component={Link} target="_blank" to={'/article'} size="small" >Article/critics (example)</Button> - This is an example article what will be assigned to votings by different authors</li>
    </ul>
    </Typography>
    <Typography variant="body1" color="text.secondary"  fontWeight={'bold'} component={'div'} textAlign={'left'}>
      {'This voting model concept is completely free to use. Me the author and the creator of this idea declare that I waive all my copyright.'}
      <br/><br/>
      <Button component={Link} target="_blank" to={'https://github.com/Martines90/balanced-voting-system'} size="small" >GITHUB repo</Button>
      </Typography>


    <Typography variant="body1" color="text.secondary"  fontWeight={'bold'} component={'div'} textAlign={'left'}>
    {'Contact me: hmartonsandor@gmail.com'}
    </Typography>

    </Stack>
  );
}

// Default export
export default HomePage;
