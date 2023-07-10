let articulo = prompt("Solicitar articulo");
let nombre = prompt("Seleccione nombre");
/* let precio = prompt("Seleccione precio"); */

const datosBusqueda = {
  articulo: articulo,
  nombre: nombre,
}

const bazar = [
  { articulo: 'Limpieza', nombre: 'Lavandina', precio: 1000 },
  { articulo: 'Limpieza', nombre: 'Jabon en polvo', precio: 1800 },
  { articulo: 'Limpieza', nombre: 'jabon tocador', precio: 700 },
  { articulo: 'Limpieza', nombre: 'cepillo de dientes', precio: 760 },
  { articulo: 'Limpieza', nombre: 'trapo de piso', precio: 430 },
  { articulo: 'Perfumeria', nombre: 'Locion', precio: 3200 },
  { articulo: 'Perfumeria', nombre: 'Aerosol', precio: 900 },
  { articulo: 'Perfumeria', nombre: 'en polvo', precio: 590 },
];

const mostrarArticulos = (articulos) => {
  articulos.forEach( articulo => {
    console.log(articulo.articulo + ' ' + articulo.nombre + ' ' + articulo.precio);

    document.write("<p>" + articulo.articulo + "</p>" + " " + articulo.nombre);
  })
}

const noResultado = () => {
  console.log('No hay resultados para la busqueda')
  document.write("<p style='color:black'>No hay resultados para la busqueda </p>")
}

const filtrarArticulo = (producto) => {
  if(datosBusqueda.articulo){
    return producto.articulo == datosBusqueda.articulo
  }
  return producto
}
const filtrarNombre = (producto) => {
  if(datosBusqueda.nombre){
    return producto.nombre == datosBusqueda.nombre
  }
}

const filtrarProducto = (nombre) => {
  let resultado = nombre.filter(filtrarArticulo).filter(filtrarNombre);
  if(resultado.length){
    mostrarArticulos(resultado)
  }else{
    noResultado()
  }
}




filtrarProducto(bazar);



