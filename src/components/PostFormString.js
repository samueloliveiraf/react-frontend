import '../App.css';
import React from 'react'


class FormString extends React.Component {

    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();

      let searchstring = document.getElementById('string_search').value
  
      fetch('http://localhost:8000/api/list-logs-api/contains/', {
        method: 'POST',
        body: JSON.stringify({'string_search': searchstring}),
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer'
        },
      })
      .then(response => response.json())
      .then(date => {
            this.props.updateList(date)
        }
      );
    }
  
    render() {
    
      return (
        <form className="forms-search shadow-sm p-3 mb-5 bg-body rounded" onSubmit={this.handleSubmit}>
          <label htmlFor="string_search" class="form-label">Busque pela String(Response):</label>
          <input required class="form-control" id="string_search" name="string_search" type="text" />
  
          <button class="btn btn-dark" type="submit">Buscar</button>
        </form>
      );

    }
}


export default FormString
