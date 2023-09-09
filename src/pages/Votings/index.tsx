import { Stack, Typography } from '@mui/material';
import VotingPool from 'components/Voting/VotingPool';

function VotingsPage() {
  return (
    <Stack spacing={2} color={'black'} padding={'20px'}>
      <Typography gutterBottom variant="h5" component="div">
            Votings
      </Typography>
      <VotingPool />
    </Stack>
  );
}

export default VotingsPage;
