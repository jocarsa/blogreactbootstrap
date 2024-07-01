import React, { useState, useEffect } from 'react';
import Articulo from './Articulo';

function Articulos() {
    
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        fetch("https://jocarsa.com/noticias.php")
            .then(response => response.json())
            .then(data => setArticulos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    const mis_articulos = articulos.map(articulo => 
        <Articulo titulo = {articulo.titulo} contenido={articulo.contenido}  fecha={articulo.fecha}  categoria={articulo.categoria} />
    )

  return (
      <div class="row mb-2">
    
        {mis_articulos}
      </div>
  );
}

export default Articulos; 
