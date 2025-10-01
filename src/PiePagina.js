import { Box, Typography, Link, Grid } from "@mui/material";


function PiePagina() {
  return (
    <>
    <Box
      sx={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "40px 20px",
        marginTop: "50px"
      }}
    >
      <Grid container spacing={4}>
        {/* Columna 1: Logo / Descripción */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Hotel Sol del Inca ☀️
          </Typography>
          <Typography variant="body2">
            El lugar ideal para descansar y disfrutar de una experiencia
            inolvidable.  
            Atención de primera y habitaciones de lujo a precios ficticios.
          </Typography>
        </Grid>

        {/* Columna 2: Links rápidos */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Enlaces rápidos
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="#" color="inherit" underline="hover">
              Inicio
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Habitaciones
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Servicios
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Contacto
            </Link>
          </Box>
        </Grid>

        {/* Columna 3: Contacto */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Contacto
          </Typography>
          <Typography variant="body2">📍 Calle Falsa 123, Cusco, Perú</Typography>
          <Typography variant="body2">📞 +51 999 888 777</Typography>
          <Typography variant="body2">📧 reservas@hotelinca.com</Typography>
        </Grid>

        {/* Columna 4: Redes sociales */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Síguenos
          </Typography>
          <Typography variant="body2">📘 Facebook</Typography>
          <Typography variant="body2">📸 Instagram</Typography>
          <Typography variant="body2">🐦 Twitter</Typography>
        </Grid>
      </Grid>

      {/* Línea inferior */}
      <Box sx={{ textAlign: "center", marginTop: "30px", borderTop: "1px solid gray", paddingTop: "20px" }}>
        <Typography variant="body2">
          © 2025 Hotel Sol del Inca. Todos los derechos reservados (ficticio).
        </Typography>
      </Box>
    </Box>
    </>
  );
}

export default PiePagina;
