import React from 'react';
function Register() {
    return (<div>
        <form>
        <div className="mb-3">
                <label for="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" 
                placeholder="John Doe"/>
            </div>
            <div className="mb-3">
                <label for="uname" className="form-label">UserName</label>
                <input type="text" className="form-control" id="uname" 
                placeholder="@johndoe"/>
            </div>
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
            <button className='btn btn-primary'>Register</button>
        </form>
    </div>);
}

export default Register;