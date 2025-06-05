import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
