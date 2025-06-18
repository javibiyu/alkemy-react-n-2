import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <PopupState variant="popover" popupId="popup-menu">
        {(popupState) => (
          <>
            <Button variant="contained" {...bindTrigger(popupState)}>
              Menú
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close} component={NavLink} to="/">
                Inicio
              </MenuItem>
              <MenuItem
                onClick={popupState.close}
                component={NavLink}
                to="/productos"
              >
                Productos
              </MenuItem>
              <MenuItem
                onClick={popupState.close}
                component={NavLink}
                to="/usuarios"
              >
                Usuarios
              </MenuItem>
            </Menu>
          </>
        )}
      </PopupState>
      <Button variant="outlined" onClick={toggleTheme} sx={{ ml: 2 }}>
        {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </Button>
    </>
  );
};

export default Navbar;
