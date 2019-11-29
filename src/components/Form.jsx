import React from 'react';
import "./css/App.css";

const Form = (props) => {
  return (<form onSubmit={(event) => props.handleUserFormSubmit(event)}>
      <label>
        <input name="username"
              type="text"
              placeholder="Enter username..."
              required
              value={props.formData.username}
              onChange={props.handleFormChange}
        />
      </label>

   {/*div this section to put search bar under the place you type a user name*/}
        <input
          type="submit"
          value="Go"
        />

   

    </form>)};export default Form;