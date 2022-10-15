import { useContext, useState } from "react";
import context from "../../context/context";
import verifyEmail from "../../utils/verifyEmail";
import TextField from '@mui/material/TextField';
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function LoginInputs() {
  const { genericState, setGenericState, hasWrongPass, setHasWrongPass } = useContext(context);
  const [ showPassword, setShowPassword ] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <>
      <TextField
        id="outlined-basic1"
        label="Email"
        variant="outlined"
        fullWidth
        name="emailInput"
        type="text"
        onChange={setGenericState}
        value={genericState.emailInput}
        error={verifyEmail(genericState.emailInput)}
        helperText={verifyEmail(genericState.emailInput) && 'Please, type a valid email'}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        fullWidth
        name="passwordInput"
        type={showPassword ? "text" : "password"}
        onChange={setGenericState}
        onKeyDown={ () => setHasWrongPass(false) }
        value={genericState.passwordInput}
        error={hasWrongPass}
        helperText={hasWrongPass && 'Invalid password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </>
  )
}

export default LoginInputs;