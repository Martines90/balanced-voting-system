import Box from '@mui/material/Box';
import { DataGrid, GridCellParams, GridColDef, gridClasses } from '@mui/x-data-grid';

import { alpha, styled } from '@mui/material/styles';
import { Button, Paper, Stack } from '@mui/material';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useState, createContext } from 'react';
import VotingsFilter from './VotingsFilter';

export const VotingsPoolFilterContext = createContext({} as any);

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: '#f9f9f9',//theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      /*'@media (hover: none)': {
        backgroundColor: 'transparent',
      },*/
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
  [`& .${gridClasses.row}.odd`]: {
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      /*'@media (hover: none)': {
        backgroundColor: 'transparent',
      },*/
    },
  },
}));

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', type: 'string', width: 100  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 90,
    cellClassName: (params: GridCellParams<any, string>) => {
      if (params.value == null) {
        return '';
      }

      return clsx('voting-row', {
        active: params.value === 'active',
        closed: params.value === 'closed',
        upcoming: params.value === 'upcoming',
      });
    },
  },
  {
    field: 'category',
    headerName: 'Category',
    type: 'string',
    width: 100,
  },
  {
    field: 'title',
    headerName: 'Title',
    type: 'string',
    width: 230,
  },
  {
    field: 'initiated_by',
    headerName: 'Initiated by',
    type: 'string',
    width: 180,
  },
  {
    field: 'level',
    headerName: 'Level',
    type: 'string',
    width: 80,
  },
  {
    field: 'location',
    headerName: 'Location',
    type: 'string',
    width: 100,
  },
  {
    field: 'start_date',
    headerName: 'Start date',
    type: 'date',
    width: 100,
  },
  {
    field: 'end_date',
    headerName: 'End date',
    type: 'date',
    width: 100,
  },
  {
    field: 'go_vote',
    headerName: '',
    width: 120,
    renderCell: (params) => {
      return (
      <Button
        style={{minWidth: '100px'}}
        variant="contained"
        size="large"
        disabled={params.row.status !== 'active'}
        component={Link} to="/voting"
      >
        {'voting'}
      </Button>
      )
    },
  },
];

const rows = [
  { id: '1934533', status: 'active', category: 'education', title: '10% wage raise for the teachers', initiated_by: 'Jobbik (political party)', level: 'country', location: 'Hungary', start_date: new Date('2023.07.12'), end_date: new Date('2023.07.31') },
  { id: '1934532', status: 'upcoming', category: 'education', title: '10% wage raise for the teachers', initiated_by: 'Jobbik (political party)', level: 'country', location: 'Hungary', start_date: new Date('2023.07.12'), end_date: new Date('2023.07.31') },
  { id: '1934531', status: 'closed', category: 'education', title: '10% wage raise for the teachers', initiated_by: 'Jobbik (political party)', level: 'country', location: 'Hungary', start_date: new Date('2023.07.12'), end_date: new Date('2023.07.31') },
];

export default function VotingPool() {
  const [filtersState, setFiltersState] = useState({
    status: {
      active: true,
      upcoming: true,
      closed: false,
    },
    levels: ['country', 'county', 'city'],
  })

  return (
    <Stack component={Paper} spacing={2}>
      <VotingsPoolFilterContext.Provider value={{
        filtersState,
        setFiltersState,
      }}>
      <VotingsFilter />
    </VotingsPoolFilterContext.Provider>
    <Box sx={{ height: 400, width: '100%', backgroundColor: '#ffffff' }}>
      <StripedDataGrid
        rows={rows.filter((row) => !!filtersState.status[row.status as  keyof typeof filtersState.status])}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
        }}
        sx={{
          borderColor: '#526778',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
          '& .voting-row.active': {
            backgroundColor: '#a4e38d',
          },
          '& .voting-row.closed': {
            backgroundColor: '#cfd7cd',
          },
          '& .voting-row.upcoming': {
            backgroundColor: '#e2ef9f',
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick

        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
      />
    </Box>
    </Stack>
  );
}
