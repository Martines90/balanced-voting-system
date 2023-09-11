import Grid from '@mui/material/Grid';
import ArticleIntro from 'components/articles/ArticleIntro';
import VotingIntro from 'components/Voting/VotingIntro';

//images
import dk_logo from 'assets/profiles/org/dklogo.png'
import teacher_img_1 from 'assets/profiles/author/tanarok-1.jpeg'
import teacher_img_2 from 'assets/profiles/author/tanarok-2.jpeg'
import teacher_img_3 from 'assets/profiles/author/tanarok-3.jpeg'
import teacher_img_4 from 'assets/profiles/author/tanarok-4.jpeg'
import teacher_img_5 from 'assets/profiles/author/tanarok-5.jpeg'
import teacher_img_6 from 'assets/profiles/author/tanarok-6.jpeg'

import avatar1 from 'assets/profiles/author/avatar1.png'
import avatar2 from 'assets/profiles/author/avatar2.png'
import avatar3 from 'assets/profiles/author/avatar3.png'
import avatar4 from 'assets/profiles/author/avatar4.png'
import avatar5 from 'assets/profiles/author/avatar5.png'
import avatar6 from 'assets/profiles/author/avatar6.png'

function VotingPage() {
  return (
    <Grid container rowGap={2} justifyContent='space-between'>
      <Grid item xs={12}>
        <VotingIntro
          orgInfo={{
            name: 'DK',
            profile: 'political party',
            logoUrl: dk_logo,
          }}
        />
      </Grid>
      <Grid item xs={5} marginLeft={'2%'}>
        <Grid container rowGap={2}>
          <Grid item xs={12}>
            <ArticleIntro
              type='pro'
              title='“I teach for 20 years and I feel ashamed when I see my paycheck„'
              authorInfo={
                {name: 'Kálvin István', title: 'journalist - Telex', avatarPics: avatar1}
              }
              avgRating={4.8}
              numOfRates={233}
              mediaImgSrc={teacher_img_1}
              tags={['podcast', 'deep interview']}
            />
          </Grid>
          <Grid item xs={12}>
            <ArticleIntro
              type='pro'
              title='Government would starve to death our teachers!'
              authorInfo={
                {name: 'Éden Rebeka', title: 'journalist - independent', avatarPics: avatar2}
              }
              avgRating={4.4}
              numOfRates={158}
              mediaImgSrc={teacher_img_2}
              tags={['article', 'research']}
            />
          </Grid>
          <Grid item xs={12}>
            <ArticleIntro
              type='pro'
              title='This is the less we should provide for the ones who are raising our kinds'
              authorInfo={
                {name: 'Kovács Nóra', title: 'Head of I want teach movement', avatarPics: avatar6}
              }
              avgRating={4.2}
              numOfRates={108}
              mediaImgSrc={teacher_img_5}
              tags={['article']}
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
                  {name: 'Mezei Nóra', title: 'economist - Portfolio.hu', avatarPics: avatar3}
                }
                avgRating={3.9}
                numOfRates={235}
                mediaImgSrc={teacher_img_4}
                tags={['article', 'expert opinion']}
              />
            </Grid>
            <Grid item>
              <ArticleIntro
                type='con'
                title='Why teachers in particular?'
                authorInfo={
                  {name: 'Gábor Antal', title: 'journalist - Mandiner', avatarPics: avatar4}
                }
                avgRating={3.7}
                numOfRates={188}
                mediaImgSrc={teacher_img_3}
                tags={['article', 'expert opinion']}
              />
            </Grid>
            <Grid item>
              <ArticleIntro
                type='con'
                title='Goverment pays the same our teachers than other EU countries'
                authorInfo={
                  {name: 'Kiss Botond', title: 'journalist - Mandiner', avatarPics: avatar5}
                }
                avgRating={3.5}
                numOfRates={128}
                mediaImgSrc={teacher_img_6}
                tags={['article', 'expert opinion']}
              />
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}

export default VotingPage;
