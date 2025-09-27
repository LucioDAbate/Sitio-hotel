import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import Encabezado from "./Encabezado";

function Contacto() {
  return (
    <>
    <Encabezado/>
        <Box sx={{ padding: "50px", backgroundColor: "#e5dfd9", minHeight: "100vh" }}>
          <Typography variant="h4" gutterBottom>
            Contacto
          </Typography>

          <Grid container spacing={4}>
            {/* Columna izquierda - Info */}
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Si desea realizar una consulta por favor complete el siguiente
                formulario y le responderemos a la brevedad.
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                DIRECCIÓN
              </Typography>
              <Typography variant="body2">
                Av. Siempre Viva 742 – Springfield
              </Typography>
              <Typography variant="body2">
                Tel: +54 387 400 0000 | Fax: +54 387 400 0030
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                reservas@hotelinca.com
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                ATENCIÓN COMERCIAL EN SALTA
              </Typography>
              <Typography variant="body2">
                Juan Pérez, Gerencia Comercial
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                ventas@hotelinca.com
              </Typography>

              <Typography variant="body2" sx={{ marginBottom: 1 }}>
                <strong>¿Querés trabajar con nosotros?</strong> rrhh@hotelinca.com
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 1 }}>
                Proveedores: compras@hotelinca.com
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 1 }}>
                WhatsApp de reservas: +54 387 4774654
              </Typography>
              <Typography variant="body2" color="error">
                * Lunes a Viernes de 8:00 a 19:00 | Sábados de 9:00 a 13:00
              </Typography>
            </Grid>

            {/* Columna derecha - Formulario */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nombre Completo"
                placeholder="Nombre Apellido"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                placeholder="nombre@email.com"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Teléfono"
                placeholder="(+54)03875123456"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Mensaje"
                placeholder="Motivo de consulta..."
                margin="normal"
                multiline
                rows={4}
              />
              <Box sx={{ textAlign: "right", marginTop: 2 }}>
                <Button variant="contained" sx={{ backgroundColor: "#5a646d" }}>
                  ENVIAR
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
    </>
  );
}

export default Contacto;
