import '../App.css';
import React from 'react'


class FormData extends React.Component {

    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();

      let startdata = document.getElementById('start_date').value
      let enddata = document.getElementById('end_date').value
  
      fetch('http://localhost:8000/api/list-logs-apis/date/', {
        method: 'POST',
        body: JSON.stringify({'enddata': enddata, 'startdata':startdata}),
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
          <p>Busque pelas datas</p>
          <label class="form-label" htmlFor="start_date">De:</label>
          <input required class="form-control" id="start_date" name="start_date" type="date" />
  
          <label class="form-label" htmlFor="end_date">Até</label>
          <input required class="form-control" id="end_date" name="" type="date" />
  
          <button class="btn btn-dark" type="submit">Buscar</button>
        </form>
      );

    }
}


export default FormData
