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
      <header
        style={{
          width: "100%",
          padding: "16px 0",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          background: "#212121",
          color: "#fafafa",
        }}
      >
        Mi Aplicación
      </header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <PopupState variant="popover" popupId="popup-menu">
          {(popupState) => (
            <>
              <Button
                variant="contained"
                {...bindTrigger(popupState)}
                sx={{
                  backgroundColor: "#424242",
                  color: "#fafafa",
                  "&:hover": { backgroundColor: "#616161" },
                }}
              >
                Menú
              </Button>
              <Menu
                {...bindMenu(popupState)}
                PaperProps={{
                  sx: {
                    backgroundColor: theme === "dark" ? "#212121" : "#f5f5f5",
                  },
                }}
              >
                <MenuItem
                  onClick={popupState.close}
                  component={NavLink}
                  to="/"
                  sx={{
                    color: theme === "dark" ? "#fafafa" : "#212121",
                    backgroundColor: theme === "dark" ? undefined : "#f5f5f5",
                    "&.Mui-selected, &:hover": {
                      backgroundColor: theme === "dark" ? "#333" : "#e3e3e3",
                      color: theme === "dark" ? "#ffd600" : "#1976d2",
                    },
                  }}
                >
                  Inicio
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  component={NavLink}
                  to="/productos"
                  sx={{
                    color: theme === "dark" ? "#fafafa" : "#212121",
                    backgroundColor: theme === "dark" ? undefined : "#f5f5f5",
                    "&.Mui-selected, &:hover": {
                      backgroundColor: theme === "dark" ? "#333" : "#e3e3e3",
                      color: theme === "dark" ? "#ffd600" : "#1976d2",
                    },
                  }}
                >
                  Productos
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  component={NavLink}
                  to="/usuarios"
                  sx={{
                    color: theme === "dark" ? "#fafafa" : "#212121",
                    backgroundColor: theme === "dark" ? undefined : "#f5f5f5",
                    "&.Mui-selected, &:hover": {
                      backgroundColor: theme === "dark" ? "#333" : "#e3e3e3",
                      color: theme === "dark" ? "#ffd600" : "#1976d2",
                    },
                  }}
                >
                  Usuarios
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  component={NavLink}
                  to="/dashboard"
                  sx={{
                    color: theme === "dark" ? "#fafafa" : "#212121",
                    backgroundColor: theme === "dark" ? undefined : "#f5f5f5",
                    "&.Mui-selected, &:hover": {
                      backgroundColor: theme === "dark" ? "#333" : "#e3e3e3",
                      color: theme === "dark" ? "#ffd600" : "#1976d2",
                    },
                  }}
                >
                  Dashboard
                </MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
        <Button
          variant="outlined"
          onClick={toggleTheme}
          sx={{
            borderColor: "#fafafa",
            color: "#fafafa",
            "&:hover": { borderColor: "#bdbdbd", backgroundColor: "#333" },
          }}
        >
          {theme === "dark" ? (
            <Brightness7Icon sx={{ color: "#ffd600" }} />
          ) : (
            <Brightness4Icon sx={{ color: "#90caf9" }} />
          )}
        </Button>
      </div>
    </>
  );
};

export default Navbar;
