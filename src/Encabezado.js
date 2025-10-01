
import {AppBar,InputBase,Toolbar,Box,Button} from '@mui/material';
import {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import NavTabs from './NavTabs';



const Encabezado =()=>{
    const  [mobile, setMobile] = useState(false);
    const displayMobile  =()=>{
        return(
            <Toolbar sx={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor: "#1c1c1c", paddingY: 2}} >
                <img src="/logoinca.png" alt="Logo" style={{ height: "130px" }} />
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
          <>
        
        <Toolbar sx={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor: "#1c1c1c", paddingY: 2}}>
            <img src="/logoinca.png" alt="Logo" style={{ height: "130px"  }} />     

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
              sx={{ marginLeft: 2, width:120,height: 60 }}
            >
              Registrarme
            </Button>
            <Avatar 
                alt="User Avatar" 
                src="/user.png"  
                sx={{ marginLeft: 2, width:56, height:56 }}
            />

        </Toolbar>
        </>
        );
    }
    return (
      <>
      <AppBar position='fixed' sx={{backgroundColor:  "#1c1c1c"}} >{mobile ? displayMobile() : displayDesktop()}</AppBar>
      <Toolbar/>
      <NavTabs/>
      </>
      )
}


export default Encabezado;