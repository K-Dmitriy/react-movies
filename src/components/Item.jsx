function Item({ Title: title, Poster: poster, Type: type, Year: year, imdbID: id }) {
  return (
    <div className="col s12 m6 l3">
      <div id={id} className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {
            poster === 'N/A'
              ? <i className="red-text text-darken-3">no image</i>
              : <img className="activator" src={poster} alt={title}/>
            // <i className="red-text text-darken-3">no image</i>
          }
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title}
            <i className="material-icons right">{year}</i>
          </span>
          <p>
            <a>{type}</a>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </div>
  );
}

export default Item;