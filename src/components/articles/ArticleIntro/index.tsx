import { Avatar, Chip, Grid, Rating, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const CHIP_TAG_COLORS: {[key: string]: string} = {
  'deep interview': 'rgb(130 245 197)',
  podcast: '#d26eff',
  article: 'rgb(110 200 255)',
  research: 'rgb(255 110 110)',
  'expert opinion': 'rgb(233 207 56)',
}

export default function ArticleIntro({
  type,
  title,
  avgRating,
  numOfRates,
  authorInfo,
  mediaImgSrc,
  tags,
}: {
  type: string,
  title: string,
  avgRating: number,
  numOfRates: number,
  authorInfo: any,
  mediaImgSrc: any,
  tags: string[],
}) {
  const borderColor = type === 'pro' ? '#90bf90' : '#ffd1d1'
  return (
    <Card sx={{ maxWidth: '100%', border: `5px solid ${borderColor}` }}>
      <CardMedia
        sx={{ height: 140 }}
        image={mediaImgSrc}
        title="green iguana"
      >
        {tags.map((tag: string, index) => {
          return (
            <Chip key={index} label={tag} style={{backgroundColor: CHIP_TAG_COLORS[tag], float: 'right', margin: '5px 5px 0px 0px'}} />
            )
        })}

      </CardMedia>
      <CardContent>
        <Stack spacing={1}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Grid container alignItems="center" >
            <Grid item>
              <Avatar alt="Author 1" src={authorInfo.avatarPics} />
            </Grid>
            <Grid style={{marginLeft: '5px', fontSize: '13px'}} item>
              {`${authorInfo.name}`}<br/>{`(${authorInfo.title})`}
            </Grid>
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
        <Button component={Link} to={'/article'} size="small" >Read & Complete</Button>
      </CardActions>
    </Card>
  );
}
