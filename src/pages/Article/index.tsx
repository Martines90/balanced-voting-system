import Grid from '@mui/material/Grid';

//images
import profile_pics from 'assets/profiles/author/avatar6.png'
import ArticleInfo from 'components/articles/ArticleInfo';

export default function ArticlePage() {
  return (
    <Grid container rowGap={2} justifyContent='space-between'>
      <Grid item xs={12}>
        <ArticleInfo
          authorInfo={{
            name: 'Silvia Bukowski',
            profile: 'Journalist - independendt',
            profile_pics: profile_pics,
          }}
        />
      </Grid>
    </Grid>
  );
}

