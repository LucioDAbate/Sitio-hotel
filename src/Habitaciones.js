
import Encabezado from "./Encabezado";
import Dest from "./Dest";
import {Grid} from '@mui/material';

const Habitaciones =()=>{
    const Data = [
        {
            id:1,
            titulo:'ESTANDAR',
            precio:40000,
            imagen: 'si.png',
        },
        {
            id:2,
            titulo:'SUPERIOR',
            precio:60000,
            imagen: 'skay-y-el-indio.jpg',
        },
        {
            id:3,
            titulo:'EJECUTIVA',
            precio:150000,
            imagen: 'songkangho.jfif'
        }

    ]
    return (
        <>
        <Encabezado/>
        <h1>Habitaciones</h1>
        <Grid container spacing={3} justifyContent="center">    
            {Data.map((d)=>(
            <Grid item key ={d.id}>
                <Dest
                key={d.id}
                titulo = {d.titulo}
                precio = {d.precio}
                imagen = {d.imagen}
                />
                </Grid>
            ))
            }
            </Grid>
        </>
    )
}

export default Habitaciones;