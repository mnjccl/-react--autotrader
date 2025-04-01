function Filter() {
  return (
    <form className="filter--form">
      <h3 className="filter--heading">Filters</h3>

      <label htmlFor="brand">Brand:</label>
      <select name="brand" id="brand">
        <option value="">Any</option>
        <option value="BMW">BMW</option>
      </select>

      <label htmlFor="model">Model:</label>
      <select name="model" id="model">
        <option value="">Any</option>
      </select>

      <label htmlFor="year">Year:</label>
      <input type="number" id="year" name="year" min="1980" max="2025" />

      <label htmlFor="priceMin">Min Price:</label>
      <input type="number" id="priceMin" name="priceMin" />
      <label htmlFor="priceMax">Max Price:</label>
      <input type="number" id="priceMax" name="priceMax" />

      <label>Fuel Type:</label>
      <select name="fuelType">
        <option value="">Any</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="PetrolLPG">Petrol + LPG</option>
      </select>

      <label>Number of Doors:</label>
      <select name="doors">
        <option value="">Any</option>
        <option value="3">3</option>
        <option value="5">5</option>
      </select>

      <label>Exchange:</label>
      <label>
        <input type="radio" name="exchange" value="Yes" />
        Yes
      </label>
      <label>
        <input type="radio" name="exchange" value="No" />
        No
      </label>

      <button type="submit">Apply Filters</button>
      <button type="button">Reset</button>
    </form>
  );
}

export default Filter;
