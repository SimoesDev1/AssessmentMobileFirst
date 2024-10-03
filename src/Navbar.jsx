import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Importando ícone do menu
import { Link } from "react-router-dom";
import LogoFilme from "./LogoFilme (1).png";
import ToggleSwitch from "./ToggleSwitch";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isDropdownOpen = Boolean(anchorEl);

  const handleDropdownToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        Início
      </ListItem>
      <ListItem
        button
        onMouseEnter={handleDropdownToggle} // Mostrar o dropdown ao passar o mouse
        onMouseLeave={handleDropdownClose} // Ocultar o dropdown ao sair do mouse
      >
        Filmes
      </ListItem>
      <Menu
        anchorEl={anchorEl}
        open={isDropdownOpen}
        onClose={handleDropdownClose}
        onMouseLeave={handleDropdownClose} // Oculta o dropdown ao sair
      >
        <MenuItem
          onClick={handleDropdownClose}
          component={Link}
          to="/trailers/adventure"
        >
          Aventura
        </MenuItem>
        <MenuItem
          onClick={handleDropdownClose}
          component={Link}
          to="/trailers/comedy"
        >
          Comédia
        </MenuItem>
        <MenuItem
          onClick={handleDropdownClose}
          component={Link}
          to="/trailers/children"
        >
          Infantil
        </MenuItem>
      </Menu>
      <ListItem
        button
        component={Link}
        to="/trailers"
        onClick={toggleDrawer(false)}
      >
        Trailers
      </ListItem>
    </List>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: darkMode ? "#222" : "#333" }}
    >
      <Toolbar>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={LogoFilme} alt="Logo do Filme" style={{ width: "120px" }} />
        </Link>
        <div style={{ flexGrow: 1 }} />
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }} // Apenas para telas pequenas
        >
          <MenuIcon />
        </IconButton>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Início
        </Button>
        <Box
          sx={{ display: { xs: "none", md: "block" }, position: "relative" }} // Exibe apenas em telas grandes
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownClose}
        >
          <Button color="inherit">Filmes</Button>
          <Menu
            anchorEl={anchorEl}
            open={isDropdownOpen}
            onClose={handleDropdownClose}
            onMouseLeave={handleDropdownClose} // Oculta o dropdown ao sair
          >
            <MenuItem
              onClick={handleDropdownClose}
              component={Link}
              to="/trailers/adventure"
            >
              Aventura
            </MenuItem>
            <MenuItem
              onClick={handleDropdownClose}
              component={Link}
              to="/trailers/comedy"
            >
              Comédia
            </MenuItem>
            <MenuItem
              onClick={handleDropdownClose}
              component={Link}
              to="/trailers/children"
            >
              Infantil
            </MenuItem>
          </Menu>
        </Box>
        <Button
          color="inherit"
          component={Link}
          to="/trailers"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Trailers
        </Button>
        {/* ToggleSwitch sempre visível */}
        <ToggleSwitch darkMode={darkMode} toggleTheme={toggleTheme} />
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
