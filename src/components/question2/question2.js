import React, { useState } from 'react'

export default function Question2() {

  const [result, setresult] = useState([])
  const [number, setnumber] = useState(null)

  const isPrimeFn = num => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  const renderTable = () => {
    const renderTableBody = () => {
      return result.map((item, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{item.number}</td>
          <td>{item.isPrime ? 'Prime' : 'No prime'}</td>
        </tr>
      ))
    }
    return (
      <table className="table table-head-fixed text-nowrap">
        <thead>
          <tr>
            <th>#</th>
            <th>Number</th>
            <th>isPrime</th>
          </tr>
        </thead>
        <tbody>
          {renderTableBody()}
        </tbody>
      </table>
    )
  }

  const doCheckIsPrimes = () => {
    const isPrime = isPrimeFn(number)
    var oldResult = result
    oldResult.push({ number, isPrime, })
    setresult(oldResult)
    // console.log(oldResult);
  }

  return (
    <div>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-12">
              <h1>Is prime</h1>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
      <section>
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Is prime</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={(e) => {
                    
                    e.preventDefault();
                    doCheckIsPrimes()
                    setnumber('')
                  }}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Number</label>
                      <input required type="number" onChange={(e) => {
                        setnumber(e.target.value);
                      }} value={number} min={1} className="form-control" placeholder="Enter number" />
                    </div>
                    <div>
                      <button type={'submit'} style={{ width: '100%' }} className="btn btn-primary">Submit Test</button>
                    </div>
                  </form>
                  <hr></hr>
                  <div className="card-body table-responsive p-0">
                    {renderTable()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
