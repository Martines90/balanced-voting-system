import { Grid } from '@mui/material';
import ArticleIntro from '../../components/ArticleIntro';

function VoteTopicPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        Voting intro
      </Grid>
      <Grid item xs={6}>
        <ArticleIntro />
      </Grid>
      <Grid item xs={6}>
        <ArticleIntro />
      </Grid>
    </Grid>
  );
}

export default VoteTopicPage;
