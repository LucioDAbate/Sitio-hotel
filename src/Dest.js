import { Card, CardMedia, CardContent, Typography} from "@mui/material";

function Dest({ titulo, precio, imagen }) {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
      {/* Imagen */}
      <CardMedia
        component="img"
        height="200"
        image={imagen}
        alt={titulo}
      />

      {/* Texto */}
      <CardContent>
        <Typography variant="h6" component="div">
          {titulo}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Precio: ${precio.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Dest;
