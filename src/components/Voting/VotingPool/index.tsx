import Box from '@mui/material/Box';
import { DataGrid, GridCellParams, GridColDef, gridClasses } from '@mui/x-data-grid';

import { alpha, styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

import clsx from 'clsx';


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
    width: 100,
    cellClassName: (params: GridCellParams<any, string>) => {
      if (params.value == null) {
        return '';
      }

      return clsx('voting-row', {
        active: params.value === 'active',
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
    field: 'organization',
    headerName: 'Organization',
    type: 'string',
    width: 180,
  },
  {
    field: 'area',
    headerName: 'Area',
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
    field: 'type',
    headerName: 'Type',
    type: 'string',
    width: 80,
  },
];

const rows = [
  { id: '1934533', status: 'active', category: 'social', title: '10% wage raise for the teachers', organization: 'Jobbik (political party)', area: 'country', start_date: new Date('2023.07.12'), end_date: new Date('2023.07.31'), type: 'yes/no' },
];

export default function VotingPool() {
  return (
    <Box sx={{ height: 400, width: '100%', backgroundColor: '#ffffff' }}>
      <StripedDataGrid
        rows={rows}
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
            color: '#1a3e72',
            fontWeight: '600',
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick

        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
      />
    </Box>
  );
}
