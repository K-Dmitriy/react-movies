import Item from './Item';

function List({movies}) {
    return (
        <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
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