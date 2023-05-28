import React, { useCallback, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LOGIN, useGlobalDispatch } from '../../../providers/GlobalState';
import './Login.scss';

const SIGN_IN = gql`
  mutation signIn($user: UserInput!) {
    signIn(user: $user) {
      email
      id
       name
      token
    }
  }
`;

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [login, { loading, error }] = useMutation(SIGN_IN);
  const globalDispatch = useGlobalDispatch();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleLoading = useCallback(async () => {
    if (loading || error || !user.password || !user.email) return;
    const { data } = await login({ variables: { user } });
    const { token, id } = data.signIn;
    globalDispatch({ type: LOGIN, payload: { token, id } });
  }, [error, globalDispatch, loading, login, user]);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-title">Login</div>
        <TextField variant="outlined" onChange={handleChange} name="email" label="Email" />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            variant="outlined"
            onChange={handleChange}
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
          )}
          />
        </FormControl>
        <Button variant="contained" onClick={handleLoading} disabled={loading}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
