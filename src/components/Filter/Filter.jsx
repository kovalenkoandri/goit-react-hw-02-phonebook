import css from './Filter.module.css';
const Filter = props => (
  <>
    <label htmlFor="filter">Find contacts by name</label>
    <input
      type="text"
      name="filter"
      className={css.inputName}
      onChange={props.handleInputChange}
      // value={props.state.filter}
    />
  </>
);
export default Filter;
