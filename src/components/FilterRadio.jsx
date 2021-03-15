function FilterRadio({ onChange, name, type }) {
    return (
        <label>
            <input
                className="with-gap"
                name="type"
                type="radio"
                value={name}
                onChange={onChange}
                checked={type === name}
            />
            <span>{name}</span>
        </label>
    );
}

export default FilterRadio;