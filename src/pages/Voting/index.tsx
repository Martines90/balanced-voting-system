import { Grid, Stack } from '@mui/material';
import ArticleIntro from '../../components/ArticleIntro';

function VoteTopicPage() {
  return (
    <Grid container rowGap={2} justifyContent='space-between'>
      <Grid item xs={12}>
        Voting intro
      </Grid>
      <Grid item xs={5} marginLeft={'2%'}>
        <Grid container rowGap={2}>
          <Grid item>
          <ArticleIntro
            type='pro'
            authorInfo={
              {name: 'Kálvin István', title: 'journalist'}
            }
            avgRating={2.9}
            numOfRates={233}
          />
          </Grid>
          <Grid item>
           <ArticleIntro
             type='pro'
             authorInfo={
              {name: 'Kálvin István', title: 'journalist'}
            }
             avgRating={2.9}
             numOfRates={233}
          />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} alignContent={'center'}>
        <div style={{
              width: '4px',
              height: '8px',
              margin: '0px auto',
              top: '50%',
              position: 'relative',
              transform: 'translateY(-50%)',
              backgroundColor: '#7d6060',

                      }}>

                      </div>
      </Grid>
      <Grid item xs={5} marginRight={'2%'}>
        <ArticleIntro
          type='con'
          authorInfo={
            {name: 'Mezei Nóra', title: 'journalist'}
          }
          avgRating={3.8}
          numOfRates={188}
        />
      </Grid>
    </Grid>
  );
}

export default VoteTopicPage;
