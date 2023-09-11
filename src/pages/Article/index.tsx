import Grid from '@mui/material/Grid';

//images
import profile_pics from 'assets/profiles/author/avatar5.png'
import ArticleInfo from 'components/articles/ArticleInfo';

export default function ArticlePage() {
  return (
    <Grid container rowGap={2} justifyContent='space-between'>
      <Grid item xs={12}>
        <ArticleInfo
          authorInfo={{
            name: '[AUTHOR_NAME]',
            profile: '[AUTHOR_TITLE]',
            logoUrl: profile_pics,
          }}
        />
      </Grid>
    </Grid>
  );
}

