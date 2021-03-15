import FilterRadio from "./FilterRadio";

function Filter({ onChange, type }) {
    const filterTypes = ['all', 'movie', 'series'];

    return (
        <div>
            {
                filterTypes.map(item => {
                    return (<FilterRadio onChange={onChange} type={type} name={item} key={item} />);
                })
            }         
        </div>
    );
}

export default Filter;