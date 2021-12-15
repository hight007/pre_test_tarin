import React from 'react'

export default function Question1() {
  return (
    <div className='register-page'>
      <div className='register-box'>
        <div className="card card-outline card-default">
          <div className="text-center">
            <div style={{ color: '#7f7f7f', height: 30, borderBottom: '1px solid #afafaf', textAlign: 'center', margin: 20 }}>
              <span style={{ fontSize: 40, backgroundColor: 'white', padding: '0 10px' }}>
                Register {/*Padding is optional*/}
              </span>
            </div>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Create your account. It's free and only takes a minute.</p>
            <form>
              <div className='form-group mb-3'>
                <div className='row'>
                  <div className='col-6'>
                    <input className='form-control' placeholder='First Name'/>
                  </div>
                  <div className='col-6'>
                    <input className='form-control' placeholder='Last Name' />
                  </div>
                </div>    
              </div>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Retype password" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div style={{marginTop:50}}>
                {/* /.col */}
                  <button type="submit" className="btn btn-success btn-block">Register</button>
                {/* /.col */}
              </div>
            </form>
          </div>
          {/* /.form-box */}
        </div>
      </div>
    </div>
  )
}
