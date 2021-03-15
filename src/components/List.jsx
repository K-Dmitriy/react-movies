import Item from './Item';

function List({movies}) {
    return (
        <div className="row movies">
            {
                movies.map(item => {
                    return (
                        <Item
                            key={item.imdbID}
                            {...item}
                        />
                    )
                })
            }
        </div>
    );
}

export default List;