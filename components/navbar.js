"use client";
import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem
} from '@mui/material';
import {
  ModeOfTravel as ModeOfTravelIcon,
  Menu as MenuIcon,
  Adb as AdbIcon
} from '@mui/icons-material';
import Link from 'next/link';  // Import Link from Next.js

const pages =  ['Trips', 'Destinations', 'Booked']; // Added 'Destinations' tab
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Check if there are any query parameters in the URL
  const hasQueryParams = typeof window !== 'undefined' && new URLSearchParams(window.location.search).toString();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'rgba(45, 46, 46, 0.7)', backdropFilter: 'blur(10px)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ mr: 2 }}
            >
              <ModeOfTravelIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 30, color: "#f3f593" }} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'suse',
                  fontWeight: 500,
                  fontSize: 25,
                  color: '#f3f593',
                  textDecoration: 'none',
                }}
              >
                Havenly Travels
              </Typography>
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={`/${page.toLowerCase()}`} passHref>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link href="/" passHref>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
            >
              <AdbIcon sx={{ mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: 'suse',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Havenly Travels
              </Typography>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page} href={`/${page.toLowerCase()}`} passHref>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2, color: 'white',
                    fontFamily: 'suse',
                    fontSize: 15,
                    display: 'block'
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            {!hasQueryParams && (
              <>
                <Link href="/signin" passHref>
                  <Button
                    sx={{
                      my: 2, color: 'white',
                      fontFamily: 'suse',
                      fontSize: 15,
                      display: 'block',
                      textTransform: 'none',
                      mr: 2,
                    }}
                  >
                    SIGN IN
                  </Button>
                </Link>
                <Link href="/register" passHref>
                  <Button
                    sx={{
                      my: 2, color: 'white',
                      fontFamily: 'suse',
                      fontSize: 15,
                      display: 'block',
                      textTransform: 'none',
                      mr: 2,
                    }}
                  >
                    REGISTER
                  </Button>
                </Link>
              </>
            )}
            {hasQueryParams && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;