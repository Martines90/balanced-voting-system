import { Avatar, Grid, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
              {`${orgInfo.name} (${orgInfo.profile})`}</Grid>
          </Grid>
          <Typography gutterBottom variant="h5" component="div">
            Would you raise the salary of the teachers and social workers by 10%?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Short description bla bla bla bla bla story telling goes on, bla bla bla
          </Typography>
          <Grid container justifyContent={'space-between'}>
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
            <Grid item>
              <Typography gutterBottom variant="h5" component="div">
                Your actual voting score is: 0.0
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
