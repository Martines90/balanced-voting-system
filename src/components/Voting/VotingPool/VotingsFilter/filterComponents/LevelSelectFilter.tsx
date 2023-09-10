import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import { useContext } from 'react';
import { VotingsPoolFilterContext } from '../..';
import { FormLabel } from '@mui/material';

const LevelSelectFilter = () => {
  const {setFiltersState, filtersState} = useContext(VotingsPoolFilterContext)


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const levels = [
  'country',
  'county',
  'city',
  'town',
  'village',
];

function getStyles(level: string, selectedLevel: readonly string[], theme: Theme) {
  return {
    fontWeight:
    selectedLevel.indexOf(level) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

  const theme = useTheme();

  const handleChange = (e: any) => {
    setFiltersState({
      ...filtersState,
      levels: levels.filter((level) => e.target.value.includes(level)),
    })
  };

  return (
      <FormControl>
        <InputLabel component="legend">Level</InputLabel>
        <Select
          labelId="multiple-chip-label"
          id="multiple-chip"
          multiple
          value={filtersState.levels}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value: string) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {levels.map((level) => (
            <MenuItem
              key={level}
              value={level}
              style={getStyles(level, filtersState.levels, theme)}
            >
              {level}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

export default LevelSelectFilter
