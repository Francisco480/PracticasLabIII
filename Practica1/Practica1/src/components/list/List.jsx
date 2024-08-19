const conversionRate = 1000;

const List = ({beers}) => {
  return (
    <div>
      <p>1) Crear un componente donde muestre por pantalla una lista de todas las
        cervezas. Además, se debe calcular el precio en pesos argentinos antes de
        mostrarlo, ya que el precio que tenemos en el listado está expresado en USD.
        (Consejo: utilizar alguna array function que nos brinda js)</p>
      <h1>Lista de Cervezas</h1>
      <ul>
        {beers.map(beer => (
          <li key={beer.id}>
            <strong>Nombre:</strong> {beer.beerName} <br />
            <strong>Estilo:</strong> {beer.beerStyle} <br />
            <strong>Precio:</strong> ${beer.price * conversionRate} ARS <br />
            <strong>Disponible:</strong> {beer.available ? 'Sí' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;