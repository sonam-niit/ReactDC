import React from 'react';
function Login() {
    return (<div>
        <form>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" 
                placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" 
                placeholder="name@example.com"/>
            </div>
            <button className='btn btn-primary'>Login</button>
        </form>
    </div>);
}

export default Login;