import Grid from '@mui/material/Grid';

//images
import dk_logo from 'assets/profiles/org/dklogo.png'
import VotingInfo from 'components/Voting/VotingInfo';

function VoteTopicPage() {
  return (
    <Grid container rowGap={2} justifyContent='space-between'>
      <Grid item xs={12}>
        <VotingInfo
          orgInfo={{
            name: 'DK',
            profile: 'political party',
            logoUrl: dk_logo,
          }}
        />
      </Grid>

    </Grid>
  );
}

export default VoteTopicPage;
