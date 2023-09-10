import Grid from '@mui/material/Grid';
import StatusCheckFilter from './filterComponents/StatusCheckFilter';
import LevelSelectFilter from './filterComponents/LevelSelectFilter';
import LocationNameFilter from './filterComponents/LocationNameFilter';




const VotingsFilter = () => {
  return (
    <Grid container padding={2} color={'black'} columnGap={3}>
      <Grid item>
        <StatusCheckFilter />
      </Grid>
      <Grid item style={{paddingTop: '10px'}}>
        <LevelSelectFilter />
      </Grid>
      <Grid item style={{paddingTop: '10px'}}>
        <LocationNameFilter />
      </Grid>
    </Grid>
  );
}


export default VotingsFilter
