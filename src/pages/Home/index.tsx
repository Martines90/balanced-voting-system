// Local imports
import Stack from '@mui/material/Stack';
import { Box, Button, Typography } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import VotingScoreFormula from 'components/common/VotingScoreFormula';

import voting_box_pics from 'assets/voting_out_of_date_v3.png';
import the_meaning from 'assets/the_meeting.png';
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

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
<br/><br/>
       <span style={{fontWeight: '500'}}>{'Currently, politics and governance operate as follows:'}</span>
<br/><br/>
      <ol style={{textAlign: 'left', marginLeft: '20px'}}>
      <li>{'Parties and politicians run and compete for the mandate to represent their communities.'}</li>
      <li>{'These political actors campaign, formulate programs and objectives to win the trust and sympathy of voters.'}</li>
      <li>{'Subsequently, the parties try to enforce their own interests in the following ways:'}
        <ol type="A" style={{marginLeft: '20px'}}>
          <li>{'Power dominance'}</li>
          <li>{'Coalition-collaboration with other parties along shared interests.'}</li>
          <li>{'Pressuring the opposition, acquiring and strengthening smaller “bastions”-“strongholds”'}</li>
          <li>{'Installing leaders serving their political circle in various administrative, infrastructural, and economic institutions'}</li>
          <li>{'Dominating the media/communication space'}</li>
          <li>{'Legal-lawyer support team'}</li>
          <li>{'Strategic advisory team'}</li>
        </ol>
      </li>
      </ol>
      <br/>
      {`
      Unfortunately, this current model encourages parties and political actors to inflate their popularity index and to possess a significant percentage of power and control.`}
       <br/>
      <br/>
      {'Another problem is the complete exclusion of the people from these processes. Beyond the 4-5 yearly elections, the masses have no significant influence or say in the decisions of their representatives.'}
      <br/>
      <br/>
      {'Of course, the current model, especially in the absence of realistic alternatives, is difficult to criticize fundamentally, even if it leaves a bad taste. We are talking about a construction several thousand years old, dating back to the invention of democracy, which has withstood the test of time.'}
      <br/>
      <br/>
      <span style={{fontWeight: '500', fontSize: '22px'}}>{'The alternative:'}</span>
      <br/>
      <br/>
      <Box component={'img'} src={the_meaning}

        sx={{
        width: {
          xs: 'calc(90%)',
          sx: 'calc(90%)',
          sm: 'calc(80%)',
          md: 'calc(60%)',
          lg: 'calc(50%)',
        },
        marginLeft: {
          xs: '5%',
          sx: '5%',
          sm: '10%',
          md: '20%',
          lg: '25%',
        },
      }}
      />
      <br/>
      <br/>
      {'A key component is the concept of “one vote, one person.” Since time immemorial, this has been a simple formula, touted as equality and fairness, under the pretense that “we make no distinction, as everyone\'s vote counts equally.”'}
      <br/>
      <br/>
    <Typography variant="h3" component={'div'} textAlign={'center'}>
      <EmojiPeopleIcon fontSize='inherit' color='error' />≠<EmojiPeopleIcon fontSize='inherit' color='success' />
  </Typography>
      <br/>
      {'However, if we abstract from voting systems and focus on other areas of life, it\'s clear that the “one vote, one person” formula doesn\'t hold up. Just observe a table conversation on any topic. The words of those who are uninformed or barely knowledgeable on the subject are given less credit by most participants than those who are experienced and well-versed. Similarly, when buying a car, I would naturally value the opinion of a friend who owns a car and has been driving for years.'}
      <br/>
      <br/>
      {'This kind of trust and credibility is sadly missing when people express their will and opinion through their votes. Why? Because in this “table society,” everyone\'s word and opinion, no matter the topic, count equally!'}
      <br/>
      <br/>
      {'This is a fundamental flaw in current systems. Hence, one of the core pillars of my proposed weighted voting model is the variable value assigned behind an individual\'s vote. This value can be increased by reading and understanding critical or supportive opinion pieces from different parties. The key is to encourage voters to form their own opinions by exploring diverse sources and opposing viewpoints. The formula is as follows: The value of one vote = (5 * N) * N, where N is the number of critical articles read from other parties. If a representative proposes a bill, other parties can critique or comment on it. A voter who makes the effort to understand these different positions can exert a greater influence on the outcome of the vote.'}
      <br/>
      <br/>
      {'This small modification can dramatically open up new prospects in voting practices.'}
      <br/>
      <br/>
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
      <br/>
      {'With the introduction of the weighted voting model, politicians and parties representing the people could shape the life and future of their community in close collaboration with the people on a daily, weekly basis, rather than focusing on winning major political battles (elections). In this new model, no one can possess absolute power; all players are involuntarily drawn towards constructive cooperation, instead of stubbornly following their own agenda.'}
      <br/>
      <br/>
      {'It\'s one thing to theorize, but how will this paradigm shift and model change actually happen in practice?'}
      <br/>
      <br/>
      {'Fortunately, this path can begin on a small scale, progressing gradually. The first step is to introduce this new practice in the life of a local community. A mayor who is open-minded and sees potential in this model is enough. The implementation of such a model in a settlement would mark the beginning of something new and unconventional. The local opposition would realize that their presence is no longer treated as an adversary. They would get the opportunity to propose topics for voting and to critique the administration\'s proposals. The residents would also feel what it\'s like to be genuinely involved in the decision-making processes that define their community\'s life and to practice intelligent, unbiased, and accepting opinion-forming.'}
      <br/>
      <br/>
      {'The introduction of the weighted voting model as outlined above would be a major breakthrough for the societies of the 21st century. If you identify with this cause and goal, please support it by sharing, promoting, or possibly implementing it in your local community.'}
      <br/>
      <br/>
      <span style={{fontWeight: 'bold'}}>Weighted Voting System</span> model.

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

    <Typography variant="body2" component={'div'} textAlign={'left'}>
    <Typography variant="body1" color="text.secondary"  fontWeight={'bold'} component={'div'} textAlign={'left'}>
    {'The vote value calculated the following way:'}
    </Typography>
    <br/>
    <h4>Formula:</h4>
    <br/><span style={{color: 'green', fontWeight: 'bold'}}>p</span> = number of read <span style={{color: 'green', fontWeight: 'bold'}}>pro</span> articles (📝)
    <br/><span style={{color: 'red', fontWeight: 'bold'}}>c</span> = number of read <span style={{color: 'red', fontWeight: 'bold'}}>con</span> articles (📝)
    <br/><br/>
    5 * (<span style={{color: 'green', fontWeight: 'bold'}}>p</span> + <span style={{color: 'red', fontWeight: 'bold'}}>c</span>) + 25 * ((<span style={{color: 'green', fontWeight: 'bold'}}>p</span> + <span style={{color: 'red', fontWeight: 'bold'}}>c</span> - |<span style={{color: 'green', fontWeight: 'bold'}}>p</span> - <span style={{color: 'red', fontWeight: 'bold'}}>c</span>|) / 2) = your voting score 🗳
    <br/><br/>
    <h4>Examples:</h4>
    <br/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pro article (n read)</TableCell>
            <TableCell>Con article (m read)</TableCell>
            <TableCell>Score calculation</TableCell>
            <TableCell>Voting score</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2 * 5 + 5 * 5 =</TableCell>
            <TableCell>35</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>3</TableCell>
            <TableCell>0</TableCell>
            <TableCell>3 * 5=</TableCell>
            <TableCell>15</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>0</TableCell>
            <TableCell>2</TableCell>
            <TableCell>2 * 5=</TableCell>
            <TableCell>10</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>2</TableCell>
            <TableCell>2</TableCell>
            <TableCell>4 * 5 + 2 * 25=</TableCell>
            <TableCell>70</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>3</TableCell>
            <TableCell>1</TableCell>
            <TableCell>4 * 5 + 1 * 25=</TableCell>
            <TableCell>45</TableCell>
        </TableRow>
      </TableBody>
      </Table>
    </TableContainer>
    <>
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
      <li>A citizen can have a maximum of 100 point voting score related to one specific voting event</li>
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
