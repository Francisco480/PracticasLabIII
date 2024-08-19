const BeerStyles = ({ beers }) => {
    const Styles = Array.from(new Set(beers.map(beer => beer.beerStyle)));

    return (
        <div>
            <h2>Unique Beer Styles</h2>
            <ul>
                {Styles.map(style => (
                    <li key={style}>{style}</li>
                ))}
            </ul>
        </div>
    );
};

export default BeerStyles;