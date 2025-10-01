import Slider from "react-slick";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import "./CarruselA.css";

function CarruselA() {
  const data = [
    {
      id: 1,
      titulo: "Hotel 3 Estrellas",
      descripcion:
        "Ubicacion cercana al centro, ofrece la comodidad de cercanía de los servicios, atracciones turísticas, culturales, la vida nocturna y facilidad con el transporte.\nEl servicio, el diseño y la ambientación buscan transmitir nuestra cultura salteña, junto con la calidez y cordialidad característica de nustra región que te harán sentir una experiencia única en Salta La Linda.",
      imagen: "/lobby.jpg",
    },
    {
      id: 2,
      titulo: "Gastronomía Única",
      descripcion:
        "Disfrutá de los mejores sabores regionales e internacionales, elaborados artesanalmente en el hotel. Ofrecemos gran variedad de platos regionales, postres, vinos y tragos de autor a lo largo de todo el día.",
      imagen: "/gastronomia.jpg",
    },
    {
      id: 3,
      titulo: "Experiencias Exclusivas",
      descripcion:
        "Entrená tu cuerpo en nuestro gimnasio moderno y renová energías en la piscina climatizada y el spa, rodeado de un ambiente diseñado para el descanso y la vitalidad.",
      imagen: "/gym.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carrusel-container" >
      <Slider {...settings}>
        {data.map((item) => (
          <Card key={item.id} className="carrusel-card" >
            <Grid container spacing={2} alignItems="center">
              {/* Imagen */}
              <Grid item xs={12} md={6}>
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="carrusel-img"
                />
              </Grid>

              {/* Texto */}
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    {item.titulo}
                  </Typography>
                  <Typography variant="body1">{item.descripcion}</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default CarruselA;
