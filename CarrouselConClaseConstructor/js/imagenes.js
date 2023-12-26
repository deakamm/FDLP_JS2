const TEMA = 'Ciudades favoritas';
const RUTA = './img/'

const imagenes = [
  new Imagen(
    'barna1.jpg',
    'Cuidade de España',
    'Barcelona',
    'Barcelona es una cuidad famosa con una divercidad cultural y una playa bonita',
  ), //0

  new Imagen(
    'barna2.jpg',
    'Barcelona',
    'Parc de Gúel',
    'El parc de Gúel es un lugar muy bonita y muchos turistas vienen visitar',
  ), //1

  new Imagen(
    'londre.jpg',
    'Capital de Reino Unido',
    'Londre',
    'Londres es la capital y la ciudad más grande del Reino Unido. Conocida por su rica historia, diversidad cultural y arquitectura icónica',
  ), //2

  new Imagen(
    'paris.jpg',
    'Capital de Francia',
    'Paris',
    'Paris esta definido como la cuidad de luz con muchas artes',
  ), //3

  new Imagen(
    'dakar.jpg',
    'Capital de Senegal',
    'Dakar',
    'Dakar es muy conocido por el Rally de los motoristas de Paris-Dakar',
  ), //4
]

let nuevaImagen = new Imagen(
  'dakar.jpg',
  'Capital de Senegal',
  'Dakar',
  'Dakar es muy conocido por el Rally de los motoristas de Paris-Dakar',
)
console.log(nuevaImagen.toString())
console.log(nuevaImagen.inicialNombre())
imagenes.push(nuevaImagen)
console.table(imagenes)
