function Search({ onChange, search }) {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="search"
                        type="search"
                        className="validate"
                        placeholder="Search"
                        value={search}
                        onChange={onChange}
                    />
                </div>
            </div>
        );
}

export default Search;