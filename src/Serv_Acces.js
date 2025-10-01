import { Grid, Typography, List, ListItem, ListItemText, Box } from "@mui/material";

const Serv_Acces = () => {
  const servicios = [
    "Desayuno Buffet",
    "Health Club (Gimnasio, piscina cubierta, spa)",
    "Internet WiFi en habitaciones y áreas públicas",
    "Estacionamiento",
    "Room Service 24hs",
    "Restaurante y Bar",
    "Habitaciones No fumadores",
    "Salones para Eventos y Convenciones",
    "Seguridad 24hs",
    "Lavandería",
    "Servicio de Limpieza",
    "Servicio de Bellboy",
    "Valet Parking",
  ];

  const accesibilidad = [
    "Habitaciones accesibles disponibles",
    "Acceso con rampas a las instalaciones del Hotel",
    "Ascensores aptos para sillas de ruedas",
    "Identificaciones en ascensores y habitaciones en Braille",
    "Acceso a gimnasio",
    "Acceso a Centro de Convenciones",
    "Baños públicos en Centro de Convenciones",
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Servicios */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Nuestros Servicios
          </Typography>
          <List dense>
            {servicios.map((s, idx) => (
              <ListItem key={idx} sx={{ py: 0 }}>
                <ListItemText primary={`• ${s}`} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Accesibilidad */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Accesibilidad ♿
          </Typography>
          <List dense>
            {accesibilidad.map((a, idx) => (
              <ListItem key={idx} sx={{ py: 0 }}>
                <ListItemText primary={`• ${a}`} />
              </ListItem>
            ))}
          </List>
          <Typography variant="body2" fontWeight="bold" mt={2}>
            Otras facilidades, consultar al reservar.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Serv_Acces;
