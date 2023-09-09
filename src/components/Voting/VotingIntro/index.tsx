import { Link } from 'react-router-dom';

import { Avatar, Grid, Stack, Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';

export default function VotingIntro({
  orgInfo,
}: {
  orgInfo: any,
}) {
  return (
    <Card sx={{ maxWidth: '100%', margin: '2% 2% 0px' }}>
      <CardContent>
        <Stack spacing={1}>
          <Grid container alignItems="center" >
            <Grid item>
              <Avatar alt="Author 1" src={orgInfo.logoUrl} />
            </Grid>
            <Grid style={{marginLeft: '5px'}} item>
              {`${orgInfo.name} (${orgInfo.profile})`}
            </Grid>
            <Grid style={{marginLeft: 'auto'}} item>
              <Button
                style={{minWidth: '150px'}}
                variant="contained"
                size="large"
                component={Link} to="/voting/voting-topic"
              >
                {'Read & Complete >>'}
              </Button>
            </Grid>
          </Grid>
          <Typography gutterBottom variant="h5" component="div">
            10% wage raise for the teachers
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {// eslint-disable-next-line max-len
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut al ...'
            }
          </Typography>
          <Grid container justifyContent={'space-between'} paddingTop={2}>
            <Grid item>
              <Button
                style={{minWidth: '150px'}}
                sx={{
                  backgroundColor: '#4caf50',
                  color: 'black',
                  '&.Mui-disabled': {
                    background: '#eaeaea',
                    color: '#c0c0c0',
                  },
                }}
                disabled
                size="large">
                Yes
              </Button>
            </Grid>
            <Grid item textAlign={'center'}>
              <Typography gutterBottom variant="h5" component="div">
                Your actual voting score is: 0.0
              </Typography>
              <Typography variant="body2" color="InfoText" display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Tooltip title="To have the minimum voting score you have to read the voting topic and at least one pro and one contra article">
                    <InfoIcon color='action' style={{marginRight: '5px'}}/>
                </Tooltip>
                (<span style={{color: 'green', fontWeight: 'bold', textDecoration: 'underline'}}>pro</span>&nbsp;*&nbsp;
                <span style={{color: 'red', fontWeight: 'bold', textDecoration: 'underline'}}>con</span>&nbsp;articles score)
                &nbsp;*&nbsp;<span style={{color: '#1976d2', fontWeight: 'bold', textDecoration: 'underline'}}>voting topic</span>&nbsp;score
              </Typography>
            </Grid>
            <Grid item>
            <Button
              style={{minWidth: '150px'}}
              variant="contained"
              sx={{
                backgroundColor: '#ef5350',
                color: 'black',
                '&.Mui-disabled': {
                  background: '#eaeaea',
                  color: '#c0c0c0',
                },
              }}
              disabled
              size="large"
            >
              No
            </Button>
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
}
