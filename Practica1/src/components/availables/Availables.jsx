 const Availables = ({beers}) => {
    const availableBeers = beers.filter(beer => beer.available);

    return (
        <div>
            <br />
            <p>2 - Crear un componente donde se muestren en pantalla solo las cervezas
            disponibles. (Mirando la propiedad available)</p>
            <h2>Available Beers</h2>
            <ul>
                {availableBeers.map(beer => (
                    <li key={beer.id}>
                        {beer.beerName} - {beer.beerStyle} - ${beer.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Availables;