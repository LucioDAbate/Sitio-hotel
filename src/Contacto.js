import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import Encabezado from "./Encabezado";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
   const form = useRef();
   const [errors, setErrors] = useState({});


    const validate = (fields) => {
    let temp = {};
    temp.user_name = fields.user_name ? (fields.user_name.length >= 3 ? "" : "Nombre demasiado corto") : "Campo obligatorio";
    temp.user_email = fields.user_email
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.user_email)
        ? ""
        : "Email inválido"
      : "Campo obligatorio";
    temp.user_phone = fields.user_phone
      ? /^[0-9+()\s-]{8,20}$/.test(fields.user_phone)
        ? ""
        : "Teléfono inválido"
      : ""; // opcional
    temp.message = fields.message ? (fields.message.length >= 10 ? "" : "Mensaje demasiado corto") : "Campo obligatorio";

    setErrors({ ...temp });
    // si todos los valores son "", está ok
    return Object.values(temp).every((x) => x === "");
  };

  const sendEmail = (e) => {
    e.preventDefault();


    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      user_phone: form.current.user_phone.value,
      message: form.current.message.value,
    };

    if (validate(formData)) {
      emailjs
      .sendForm('service_57pgldg', 'template_7v97mks', form.current, {
        publicKey: '-JbEf7ZLndSqCSPoG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Correo enviado con éxito.");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Algo salió mal y no pudo enviarse el correo.");
        },
      );
    }
  };
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
                <strong>¿Querés trabajar con nosotros?</strong> rrhh@hotelsoldelinca.com
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 1 }}>
                Proveedores: compras@hotelsoldelinca.com
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
              <form ref={form} onSubmit={sendEmail}>
              <TextField
                fullWidth
                label="Nombre Completo"
                placeholder="Nombre Apellido"
                margin="normal"
                name="user_name"
                error={!!errors.user_name}
                helperText={errors.user_name}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                placeholder="nombre@email.com"
                margin="normal"
                name="user_email"
                error={!!errors.user_email}
                helperText={errors.user_email}
              />
              <TextField
                fullWidth
                label="Teléfono"
                placeholder="(+54)03875123456"
                margin="normal"
                name="user_phone"
                error={!!errors.user_phone}
                helperText={errors.user_phone}
              />
              <TextField
                fullWidth
                label="Mensaje"
                placeholder="Motivo de consulta..."
                margin="normal"
                multiline
                rows={4}
                name="message"
                error={!!errors.message}
                helperText={errors.message}
              />
              <Box sx={{ textAlign: "right", marginTop: 2 }}>
                <Button type="submit" variant="contained" value="Send" sx={{ backgroundColor: "#5a646d",'&:hover': { backgroundColor: "#3e444b"} }}>
                  ENVIAR
                </Button>
              </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
    </>
);
}

export default Contacto;
