import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
const Navigation = () => {
  return (
    <PopupState variant="popover" popupId="popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Menú
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Inicio</MenuItem>
            <MenuItem onClick={popupState.close}>Productos</MenuItem>
            <MenuItem onClick={popupState.close}>Usuarios</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
};
export default Navigation;
