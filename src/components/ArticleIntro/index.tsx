import { Avatar, Chip, Grid, Rating, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ArticleIntro({
  type,
  avgRating,
  authorInfo,
  numOfRates,
}: {
  type: string,
  avgRating: number,
  numOfRates: number,
  authorInfo: any,
}) {
  const borderColor = type === 'pro' ? '#90bf90' : '#ffd1d1'
  return (
    <Card sx={{ maxWidth: '100%', border: `5px solid ${borderColor}` }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      >
        <Chip label="Podcast" style={{backgroundColor:'#d26eff', float: 'right', margin: '5px 5px 0px 0px'}} />
      </CardMedia>
      <CardContent>
        <Stack spacing={1}>
          <Typography gutterBottom variant="h5" component="div">
            Article title
          </Typography>
          <Grid container alignItems="center" >
            <Grid item>
              <Avatar alt="Author 1" src="/static/images/avatar/1.jpg" />
            </Grid>
            <Grid style={{marginLeft: '5px'}} item>
              {`${authorInfo.name} (${authorInfo.title})`}</Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            Short description bla bla bla bla bla story telling goes on, bla bla bla
          </Typography>
          <Typography component="legend">Avg rating</Typography>
          <Grid container alignItems="center" >
            <Grid item>
              <Rating name="read-only" value={avgRating} precision={0.5} readOnly />
            </Grid>
            <Grid style={{marginLeft: '10px', paddingBottom: '5px'}} item>{`${avgRating}/5 (${numOfRates})`}</Grid>
          </Grid>

        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Read</Button>
      </CardActions>
    </Card>
  );
}
