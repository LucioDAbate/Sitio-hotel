import Encabezado from './Encabezado';

function Ubicacion() {
  return (
    <>
    <Encabezado/>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <iframe
            title="Mapa del hotel"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9533320384457!2d-58.38159268477099!3d-34.60368498045907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac7c1f2f0cf%3A0x6a3bbf2d1d4e3e1b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1678392000000!5m2!1ses-419!2sar"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
    </>
  );
}

export default Ubicacion;
