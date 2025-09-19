import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  TextField,
  InputAdornment,
  Breadcrumbs
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: 'none',
  position: 'static'
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  minHeight: '68px !important',
  paddingLeft: '24px !important',
  paddingRight: '24px !important',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '16px !important',
    paddingRight: '16px !important'
  }
}));

const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.spacing(1),
    fontSize: '14px',
    '& fieldset': {
      border: 'none'
    },
    '&:hover fieldset': {
      border: 'none'
    },
    '&.Mui-focused fieldset': {
      border: 'none'
    }
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1.5)
  }
}));

const BreadcrumbText = styled(Typography)<{ active?: boolean }>(({ theme, active }) => ({
  fontSize: '14px',
  fontWeight: 400,
  color: active ? theme.palette.text.primary : theme.palette.text.secondary
}));

const Header: React.FC = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton size="small">
              <ReorderOutlinedIcon sx={{ fontSize: 20, color: 'text.primary' }} />
            </IconButton>
            <IconButton size="small">
              <StarOutlineIcon sx={{ fontSize: 20, color: 'text.primary' }} />
            </IconButton>
          </Stack>
          
          <Breadcrumbs separator="/" sx={{ color: 'text.secondary' }}>
            <BreadcrumbText>Dashboards</BreadcrumbText>
            <BreadcrumbText active>Default</BreadcrumbText>
          </Breadcrumbs>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2.5}>
          <SearchField
            placeholder="Search"
            size="small"
            sx={{ width: 200 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ManageSearchOutlinedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    ⌘/
                  </Typography>
                </InputAdornment>
              )
            }}
          />
          
          <Stack direction="row" spacing={1}>
            <IconButton size="small">
              <LightModeIcon sx={{ fontSize: 20, color: 'text.primary' }} />
            </IconButton>
            <IconButton size="small">
              <HistoryIcon sx={{ fontSize: 20, color: 'text.primary' }} />
            </IconButton>
            <IconButton size="small">
              <NotificationsOutlinedIcon sx={{ fontSize: 20, color: 'text.primary' }} />
            </IconButton>
            <IconButton size="small">
              <ReorderOutlinedIcon sx={{ fontSize: 20, color: 'text.primary' }} />
            </IconButton>
          </Stack>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;