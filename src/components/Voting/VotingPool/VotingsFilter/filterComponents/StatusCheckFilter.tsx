import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { useContext } from 'react'
import { VotingsPoolFilterContext } from '../..'

const StatusCheckFilter = () => {
  const {setFiltersState, filtersState} = useContext(VotingsPoolFilterContext)

  const onStatusBoxChecked = (e: any) => {
    setFiltersState({...filtersState, status: {
      ...filtersState.status,
      [e.target.value]: !filtersState.status[e.target.value],
    }})
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Status</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="active"
          control={<Checkbox onChange={onStatusBoxChecked} checked={filtersState.status.active} />}
          label="active"
          labelPlacement="start"
        />
        <FormControlLabel
          value="upcoming"
          control={<Checkbox onChange={onStatusBoxChecked} checked={filtersState.status.upcoming} />}
          label="upcoming"
          labelPlacement="start"
        />
        <FormControlLabel
          value="closed"
          control={<Checkbox onChange={onStatusBoxChecked} checked={filtersState.status.closed} />}
          label="closed"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  )
}

export default StatusCheckFilter
