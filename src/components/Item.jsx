function Item({ Title: title, Poster: poster, Type: type, Year: year, imdbID: id }) {
  return (
      <div id={id} className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {
            poster === 'N/A'
              ? <img className="activator" src={`https://via.placeholder.com/300x450?text=${title}`} alt={title}/>
              : <img className="activator" src={poster} alt={title}/>
          }
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title}
            <i className="material-icons right">{year}</i>
          </span>
          <p>
            <strong>{type}</strong>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
  );
}

export default Item;