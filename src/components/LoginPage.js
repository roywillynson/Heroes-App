import React, { useContext, useState } from 'react';
import { useHistory }  from 'react-router-dom';
import AuthContext from '../auth/authContext';
import types from '../types/types';

const LoginPage = () => {

  const [ name, setName ] = useState('');
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // Obtener ultima route de localStorage
    const lastPath  = localStorage.getItem('lastPath') || "/";

    dispatch({
      type: types.LOGIN,
      payload: { name },
    });

    history.replace(lastPath);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="container mt-6" style={{maxWidth: '400px'}}>
      <h1 className="title">Login Page</h1>
      <hr />

      <div class="field">
        <label class="label">Username:</label>
        <div class="control">
          <input class="input is-medium" onChange={ handleChangeName } value={name} type="text" placeholder="Username here!" />
        </div>
      </div>

      <div className="field">
        <button
          onClick={handleLogin}
          className="button is-info is-outlined is-medium"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
