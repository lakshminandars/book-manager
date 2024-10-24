
import './App.css'

function App() {

  return (
    <>
    <div className="container-fluid shadow w-50 rounded">
      <div className="d-flex flex-column   align-items-center justify-content-center mt-5 text-primary">
        <h1>BOOK MANAGER</h1>
        <input type="text " placeholder='Book Title' className='form-control w-50 m-2' />
        <input type="text " placeholder='Book Author' className='form-control w-50' />
        <button className='btn btn-outline-dark m-2 fw-bold'>SUBMIT</button>
      </div>
      </div>
      <div className="container-fluid text-primary  w-50 shadow rounded mt-2 d-flex flex-column   align-items-center">
        <h1>BOOK LIST</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </div>
    </>
  )
}

export default App
