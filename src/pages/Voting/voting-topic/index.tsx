import { Grid } from '@mui/material';

//images
import jobbik_logo from 'assets/profiles/org/jobbik_logo.png'
import VotingInfo from 'components/Voting/VotingInfo';

function VoteTopicPage() {
  return (
    <Grid container rowGap={2} justifyContent='space-between'>
      <Grid item xs={12}>
        <VotingInfo
          orgInfo={{
            name: 'Jobbik',
            profile: 'political party',
            logoUrl: jobbik_logo,
          }}
        />
      </Grid>

    </Grid>
  );
}

export default VoteTopicPage;
