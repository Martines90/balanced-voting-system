import { Grid } from '@mui/material';
import ArticleIntro from '../../components/ArticleIntro';
import VotingIntro from '../../components/VotingIntro';

//images
import jobbik_logo from '../../assets/profiles/org/jobbik_logo.png'
import teacher_img_1 from '../../assets/profiles/author/tanarok-1.jpeg'
import teacher_img_2 from '../../assets/profiles/author/tanarok-2.jpeg'
import teacher_img_3 from '../../assets/profiles/author/tanarok-3.jpeg'
import teacher_img_4 from '../../assets/profiles/author/tanarok-4.jpeg'

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
            title='“I teach for 20 years and I feel ashamed when I see my paycheck„'
            authorInfo={
              {name: 'Kálvin István', title: 'journalist - Telex'}
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
             title='Government would starve to death our teachers!'
             authorInfo={
              {name: 'Kálvin István', title: 'journalist - independent'}
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
                  width: '1px',
                  height: '100%',
                  margin: '0px auto',
              backgroundColor: 'rgb(249 218 208)',

                      }}>

                      </div>
      </Grid>
      <Grid item xs={5} marginRight={'2%'}>
        <Grid container rowGap={2}>
            <Grid item>
              <ArticleIntro
                type='con'
                title='Do we have money for this?'
                authorInfo={
                  {name: 'Gábor Antal', title: 'economist - Portfolio.hu'}
                }
                avgRating={3.8}
                numOfRates={188}
                mediaImgSrc={teacher_img_4}
                tags={['article', 'expert opinion']}
              />
            </Grid>
            <Grid item>
              <ArticleIntro
                type='con'
                title='Why teachers in particular?'
                authorInfo={
                  {name: 'Mezei Nóra', title: 'journalist - Mandiner'}
                }
                avgRating={3.8}
                numOfRates={188}
                mediaImgSrc={teacher_img_3}
                tags={['article', 'expert opinion']}
              />
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}

export default VoteTopicPage;
