import { Grid } from '@mui/material';
import ArticleIntro from '../../components/ArticleIntro';
import VotingIntro from '../../components/VotingIntro';

//images
import jobbik_logo from '../../assets/profiles/org/jobbik_logo.png'
import teacher_img_1 from '../../assets/profiles/author/tanarok-1.jpeg'
import teacher_img_2 from '../../assets/profiles/author/tanarok-2.jpeg'
import teacher_img_3 from '../../assets/profiles/author/tanarok-3.jpeg'

function VoteTopicPage() {
  return (
    <Grid container rowGap={2} justifyContent='space-between'>
      <Grid item xs={12}>
        <VotingIntro
          orgInfo={{
            name: 'Jobbik',
            profile: 'political party',
            logoUrl: jobbik_logo,
          }}
        />
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
            mediaImgSrc={teacher_img_1}
            tags={['podcast', 'deep interview']}
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
             mediaImgSrc={teacher_img_2}
             tags={['article', 'research']}
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
          mediaImgSrc={teacher_img_3}
          tags={['article', 'expert opinion']}
        />
      </Grid>
    </Grid>
  );
}

export default VoteTopicPage;
