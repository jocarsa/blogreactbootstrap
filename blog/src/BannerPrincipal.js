function BannerPrincipal() {
    
   const datos_banner = {
        "titulo":"Este es un blog en React",
        "contenido":"Pero además estamos usando una plantilla realizada en Bootstrap"
    }
  return (
    <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-6 px-0">
      <h1 class="display-4 fst-italic">{datos_banner.titulo}</h1>
      <p class="lead my-3">{datos_banner.contenido}</p>
      <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Leer más...</a></p>
    </div>
  </div>
  );
}

export default BannerPrincipal; 
