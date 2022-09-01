import { Mail, Notifications, Pets } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { FC, memo, useState } from 'react';

type NavBarProps = { name?: string };

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const SearchBar = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '10px 0',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
})) as typeof Box;

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
})) as typeof Box;

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
})) as typeof Box;
const NavBar: FC<NavBarProps> = ({ name }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography
          variant='h6'
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            },
          }}
        >
          Manu dev
        </Typography>
        <Pets
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        />
        <SearchBar>
          <InputBase placeholder='Search...' type='Search' />
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            onClick={(_) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(_) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Typography variant='h5'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='positioned-menu'
        aria-labelledby='positioned-menu'
        open={open}
        onClose={(_) => setOpen(false)}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default memo(NavBar);
