import Encabezado from "./Encabezado";
import Reserva from "./Reserva";
import CarruselA from "./CarruselA";
import Serv_Acces from "./Serv_Acces";
import {Box} from "@mui/material";
import Slider from "./components/Slider"

function Home() {
  return (
    <>
    <Encabezado/>
      <Slider/>
      <Reserva />
      <CarruselA/>
          <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',     
        minHeight: '80vh',        
        padding: 2,
        backgroundColor: '#dda640ff', 
      }}>
    <Serv_Acces/>
    </Box>
    </>
  );

}

export default Home;