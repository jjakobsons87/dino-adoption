import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

const Login = () => {
 // const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: ''
  });

  return (
    <div>
      <h4 className="mv3">
        {formState.login ? 'Login' : 'Sign Up'}
      </h4>
      <div className="flex flex-column">
        {!formState.login && (
          <input
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <button
          className="pointer mr2 button"
          onClick={() => console.log('onClick')}
        >
          {formState.login ? 'login' : 'create account'}
        </button>
        <button
          className="pointer button"
          onClick={(e) =>
            setFormState({
              ...formState,
              login: !formState.login
            })
          }
        >
          {formState.login
            ? 'need to create an account?'
            : 'already have an account?'}
        </button>
      </div>
    </div>
  );
};

export default Login;

// import React from 'react';
// import '../../index.css';
// import PropTypes from 'prop-types';
// import { useState } from 'react';

// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//     .then(data => data.json())
// }

// export default function Login({ setToken }) {
//  const [username, setUserName] = useState();
//  const [password, setPassword] = useState();

//  const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//         username,
//         password
//     });
//     setToken(token);
//  }
//     return( 
//         <div class="login-wrapper">
//         <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
//           <li class="nav-item" role="presentation">
//             <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
//               aria-controls="pills-login" aria-selected="true">Login</a>
//           </li>
//           <li class="nav-item" role="presentation">
//             <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
//               aria-controls="pills-register" aria-selected="false">Register</a>
//           </li>
//         </ul>


//         <div class="tab-content">
//           <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
//             <form onSubmit={handleSubmit}>
//               <div class="text-center mb-3">
//                 <p>Sign in with:</p>
//                 <button type="button" class="btn btn-link btn-floating mx-1">
//                   <i class="fab fa-facebook-f"></i>
//                 </button>
        
//                 <button type="button" class="btn btn-link btn-floating mx-1">
//                   <i class="fab fa-google"></i>
//                 </button>
        
//                 <button type="button" class="btn btn-link btn-floating mx-1">
//                   <i class="fab fa-twitter"></i>
//                 </button>
        
//                 <button type="button" class="btn btn-link btn-floating mx-1">
//                   <i class="fab fa-github"></i>
//                 </button>
//               </div>
        
//               <p class="text-center">or:</p>
        
            
//               <div class="form-outline mb-4">
//                 <input type="text" id="loginName" class="form-control" onChange={e => setUserName(e.target.value)} />
//                 <label class="form-label" for="loginName">Email or username</label>
//               </div>
        
        
//               <div class="form-outline mb-4">
//                 <input type="password" id="loginPassword" class="form-control" onChange={e => setPassword(e.target.value)}/>
//                 <label class="form-label" for="loginPassword">Password</label>
//               </div>
        
        
              
//               <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
        
              
//               <div class="text-center">
//                 <p>Not a member? <a href="#!">Register</a></p>
//               </div>
//             </form>
//           </div>
//           <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
//             <form>
//               <div class="text-center mb-3">
//                 <p>Sign up with:</p>
//                 <button type="button" class="btn btn-link btn-floating mx-1">
//                   <i class="fab fa-facebook-f"></i>
//                 </button>
        
//                 <button type="button" class="btn btn-link btn-floating mx-1">
//                   <i class="fab fa-google"></i>
//                 </button>
        
//                 <button type="button" class="btn btn-link btn-floating mx-1">
//                   <i class="fab fa-twitter"></i>
//                 </button>
        
//                 <button type="button" class="btn btn-link btn-floating mx-1">
//                   <i class="fab fa-github"></i>
//                 </button>
//               </div>
        
//               <p class="text-center">or:</p>
        
              
//               <div class="form-outline mb-4">
//                 <input type="text" id="registerName" class="form-control" />
//                 <label class="form-label" for="registerName">Name</label>
//               </div>
        
            
//               <div class="form-outline mb-4">
//                 <input type="text" id="registerUsername" class="form-control" />
//                 <label class="form-label" for="registerUsername">Username</label>
//               </div>

//               <div class="form-outline mb-4">
//                 <input type="email" id="registerEmail" class="form-control" />
//                 <label class="form-label" for="registerEmail">Email</label>
//               </div>
        
//               <div class="form-outline mb-4">
//                 <input type="password" id="registerPassword" class="form-control" />
//                 <label class="form-label" for="registerPassword">Password</label>
//               </div>
        
            
//               <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
//             </form>
//           </div>
//         </div>
//         </div>
//     )
// }

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }