import { FormControl, TextField } from '@mui/material'

const LocationNameFilter = () => {
  return (
    <FormControl component="fieldset">
      <TextField id="outlined-search" label="Location name" type="search" />
    </FormControl>
  )
}

export default LocationNameFilter
