function Filter() {
  return (
    <aside className="filter">
      <form className="filter__form u-flex-column">
        <h3 className="filter__heading">Filters</h3>

        <div className="u-flex-column">
          <label htmlFor="brand">Brand:</label>
          <select name="brand" id="brand">
            <option value="">Any</option>
            <option value="BMW">BMW</option>
          </select>
        </div>

        <div className="u-flex-column">
          <label htmlFor="model">Model:</label>
          <select name="model" id="model">
            <option value="">Any</option>
          </select>
        </div>

        <div className="u-flex-column">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            name="year"
            min="1980"
            max="2025"
            placeholder="2025"
          />
        </div>

        <div className="u-input-row">
          <div className="u-flex-column">
            <label htmlFor="priceMin">Min Price:</label>
            <input
              type="number"
              id="priceMin"
              name="priceMin"
              placeholder="0"
            />
          </div>

          <div className="u-flex-column">
            <label htmlFor="priceMax">Max Price:</label>
            <input
              type="number"
              id="priceMax"
              name="priceMax"
              placeholder="1000000"
            />
          </div>
        </div>

        <div className="u-flex-column">
          <label>Fuel Type:</label>
          <select name="fuelType">
            <option value="">Any</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="PetrolLPG">Petrol + LPG</option>
          </select>
        </div>

        <div className="u-flex-column">
          <label>Number of Doors:</label>
          <select name="doors">
            <option value="">Any</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="u-flex-column">
          <label>Exchange:</label>
          <label>
            <input type="radio" name="exchange" value="Yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="exchange" value="No" />
            No
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-orange"
          onClick={(e) => e.preventDefault()}
        >
          Apply
        </button>
        <button type="button" className="btn">
          Reset
        </button>
      </form>
    </aside>
  );
}

export default Filter;
