import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import { NavLink, useHistory } from "react-router-dom";

import './Header.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const Header = () => {

    const [searchValue, setSearchValue] = useState('');

    const searchItem = (event) => {
        if (event.key === "Enter") {
            search();
        } else {
            setSearchValue(event.target.value)
        }
    }

    let history = useHistory();
    const search = () => {
        history.push(`/search/${searchValue}`);
    }

    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ justifyContent: "space-between", alignItems: "stretch", pt: 2, minHeight: "48px !important" }}>
                        <Box sx={{ display: "flex", width: "70%" }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                            >
                                <NavLink to="/home" className="nav-link"> CHB Food</NavLink>
                            </Typography>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ ml: 6 }}
                            >

                                <NavLink
                                    to="/home"
                                    className="nav-link"
                                    activeClassName="nav-link-active"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/Menu"
                                    className="nav-link"
                                    activeClassName="nav-link-active"
                                >
                                    Menu
                                </NavLink>
                                <NavLink
                                    to="/blog"
                                    className="nav-link"
                                    activeClassName="nav-link-active"
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className="nav-link"
                                    activeClassName="nav-link-active"
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className="nav-link"
                                    activeClassName="nav-link-active"
                                >
                                    Contact
                                </NavLink>

                            </Typography>
                        </Box>
                        <Box sx={{ pb: 2 }}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onKeyUp={searchItem}
                                />
                            </Search>
                        </Box>

                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ ml: 2, display: { sm: 'block', md: "none" } }}

                        >
                            <MenuIcon />
                        </IconButton> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </div >
    );
};

export default Header;