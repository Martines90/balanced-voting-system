import { FormControl, TextField } from '@mui/material'
import { useContext } from 'react'
import { VotingsPoolFilterContext } from '../..'

const LocationNameFilter = () => {
  const {setFiltersState, filtersState} = useContext(VotingsPoolFilterContext)

  const onChange = (e: any) => {
    setFiltersState({
      ...filtersState,
      locationName: e.target.value,
    })
  }

  return (
    <FormControl component="fieldset">
      <TextField id="outlined-search" onChange={onChange} label="Location name" type="search" />
    </FormControl>
  )
}

export default LocationNameFilter
