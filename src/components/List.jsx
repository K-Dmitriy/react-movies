import Item from './Item';

function List({movies}) {
    return (
        <div className="row" style={{display: 'grid', flexWrap: 'wrap', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem'}}>
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