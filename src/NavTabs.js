import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router";

function NavTabs() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginY: 2 }}>
      <Tabs
        value={currentPath}
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="Home" value="/" component={Link} to="/" />
        <Tab label="Habitaciones" value="/habitaciones" component={Link} to="/habitaciones" />
        <Tab label="Ubicación" value="/ubicacion" component={Link} to="/ubicacion" />
        <Tab label="Contacto" value="/contacto" component={Link} to="/contacto" />
      </Tabs>
    </Box>
  );
}
export default NavTabs;