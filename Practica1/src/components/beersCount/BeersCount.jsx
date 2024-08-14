const BeersCount = ({ beers }) => {
    const redCount = beers.filter(beer => beer.beerStyle === 'Red').length;
    const ipaCount = beers.filter(beer => beer.beerStyle === 'IPA').length;

    return (
        <div>
            <br />
            <p>3 - Crear otro componente donde internamente haga un conteo y nos muestre por
                pantalla la cantidad de cervezas de estilo Red e IPA que tenemos en la lista.
                (Prestar atención en la manera de pasar el arreglo por props)
            </p>
            <h2>Beer Style Count</h2>
            <p>Red: {redCount}</p>
            <p>IPA: {ipaCount}</p>
        </div>
    );
};

export default BeersCount;