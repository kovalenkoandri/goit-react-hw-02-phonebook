const Filter = props => (
  <>
    <label htmlFor="filter" className="labelInputName">
      Find contacts by name
    </label>
    <input
      type="text"
      name="filter"
      className="inputName"
      onChange={props.handleInputChange}
      value={props.state.filter}
    />
  </>
);
export default Filter;