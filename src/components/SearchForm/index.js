import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group-inline col-12">
        <label htmlFor="search"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control-inline col-9"
          placeholder="Enter Event"
          id="book"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success col-2 button-inline" >
          Submit
        </button>
        </div>
    </form>
  );
}

export default SearchForm;
