var articulos = [
        {
            "titulo":"Este es el articulo 1",
            "contenido":"Este es el contenido del articulo 1",
            "categoria":"HTML",
            "fecha":"2024-07-01"
        },
        {
            "titulo":"Este es el articulo 2",
            "contenido":"Este es el contenido del articulo 2",
            "categoria":"PHP",
            "fecha":"2024-07-02"
        },
        {
            "titulo":"Este es el articulo 3",
            "contenido":"Este es el contenido del articulo 3",
            "categoria":"PHP",
            "fecha":"2024-07-02"
        },
        {
            "titulo":"Este es el articulo 4",
            "contenido":"Este es el contenido del articulo 4",
            "categoria":"PHP",
            "fecha":"2024-07-02"
        }
    ]

function Articulos() {
    const mis_articulos = articulos.map(articulo => 
        <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis">{articulo.categoria}</strong>
              <h3 class="mb-0">{articulo.titulo}</h3>
              <div class="mb-1 text-body-secondary">{articulo.fecha}</div>
              <p class="card-text mb-auto">{articulo.contenido}</p>
              <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi"></svg>
              </a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
          </div>
        </div>   
    )

  return (
      <div class="row mb-2">
    
        {mis_articulos}
      </div>
  );
}

export default Articulos; 
