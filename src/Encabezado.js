
import {AppBar,InputBase,Toolbar,Box,Button} from '@mui/material';
import {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';



const Encabezado =()=>{
    const  [mobile, setMobile] = useState(false);
    const displayMobile  =()=>{
        return(
            <Toolbar sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}} >
                <img src="/mantecademar.png" alt="Logo" style={{ height: "50px" }} />
                <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 2,
            paddingX: 1,
            width: "40%"
          }}
        >
          <SearchIcon sx={{ color: "gray", marginRight: 1 }} />
          <InputBase
            placeholder="Buscar..."
            fullWidth
          />
        </Box>

            </Toolbar>
        )
    }


    const displayDesktop =()=>{
        return(
        <Toolbar sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <img src="/mantecademar.png" alt="Logo" style={{ height: "50px" }} />     

                   <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 2,
            paddingX: 1,
            width: "40%"
          }}
        >
          <SearchIcon sx={{ color: "gray", marginRight: 1 }} />
          <InputBase
            placeholder="Buscar..."
            fullWidth
          />
        </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginLeft: 2 }}
            >
              Registrarme
            </Button>
            <Avatar 
                alt="User Avatar" 
                src="/user.png"   // podés poner una imagen en public/, ej: public/user.png
                sx={{ marginLeft: 2 }}
            />

        </Toolbar>
        );
    }
    return <AppBar position='fixed'>{mobile ? displayMobile() : displayDesktop()}</AppBar>;
}


export default Encabezado;