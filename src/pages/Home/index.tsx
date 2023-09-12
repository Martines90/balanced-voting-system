// Local imports
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

// Component definition
function HomePage() {
  return (
    <Stack spacing={4} pt={2} pl={10} pr={10} justifyContent={'center'} textAlign={'center'} width={'100%'}>
    <h4>What is BVS?</h4>
    <Typography variant="body2" color="text.secondary" component={'div'}>
      The abbrevation means &quot;Balanced Voting System&quot;.
    </Typography>
    <Typography variant="body2" color="text.secondary" component={'div'} textAlign={'left'}>
      {`Imagine a world where the value and the effect of your vote is not just a simple binary (1 or 0) unit.
      Instead the value of your vote depends on how you inform and educate yourself in the subject of the specific voting by reading pro and
      con articles, watching cirtical or/and supportive content assigned to this voting. Imagine a voting system where citizens who are really care for their
      city/country future and present and they willing to put effort into learning about the decision making situations,
      understand their law makers, governors points and the related ciritcal concepts from the press and experts side,
      so these citizens can gain much more valube voting score than whoes who just ignored to take this extra homework,`}
    </Typography>
    </Stack>
  );
}

// Default export
export default HomePage;
