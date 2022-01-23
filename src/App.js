import './App.css';
import React, {useState, useEffect} from 'react'
import FormData from './components/PostFormData';
import FormString from './components/PostFormString';


function viewFirstLog() {
  window.location.reload();
}

function App() {

  var [apis, setApis] = useState([]) // global let local

  useEffect(()=> {
    getApis()
  }, [])

  const updateList = (value) => {
    setApis(value)
  }

  let getApis = async() => {
    let response = await fetch('http://localhost:8000/api/list-logs-apis/', {
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer'
        }
    })
    let data = await response.json()

    if (response.status === 200) {
      setApis(data)
    } else  {
      
    }
    
  }

  return (
    <div className="container">

      <h3 className="text-prin shadow-sm p-3 mb-5 bg-body rounded">Bem vindo!</h3>

      <FormData 
        updateList = {updateList}
      />

      <FormString 
        updateList = {updateList}
      />

      <h3 className="text-prin shadow-sm p-3 mb-5 bg-body rounded">
        Informações de Logs
      </h3>
      <button onClick={viewFirstLog} class="btn btn-dark d-flex justify-content-center" type="submit">
        Clique aqui para ver o primeiro Log
      </button>

      {apis.map(api => (
        <div className="list-apis" key={api.id}> 
         
          Data: {api.added_on}<br/>
          <p className="headers-class"> Headers: {api.headers}<br/> </p>  
          Api: {api.api}<br/>
          Method: {api.method}<br/>
          Status code: {api.status_code}<br/>
          Client ip address: {api.client_ip_address}

        </div>
      ))}
    </div>
  );
}

export default App;
