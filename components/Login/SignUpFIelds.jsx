import PropTypes from 'prop-types';

function SignUpFields({ passwordInput }) {
  const verifyLowerCase = (password) => {
    const regex = /(?=.*[a-z].*[a-z].*[a-z])/;
    return !(regex.test(password));
  };

  const verifyUpperCase = (password) => {
    const regex = /(?=.*[A-Z])/;
    return !(regex.test(password));
  };

  const verifySpecial = (password) => {
    const regex = /(?=.*[!@#$&*])/;
    return !(regex.test(password));
  };

  const verifyPassLength = (password) => {
    const regex = /.{8,16}$/;
    return !(regex.test(password));
  };
  return (
    <>
      <p>Your password must contain at least:</p>
      <ul>
        <li style={{ color: verifyLowerCase(passwordInput) ? 'red' : 'green' }}>
          3 lower case characters
        </li>
        <li style={{ color: verifyUpperCase(passwordInput) ? 'red' : 'green' }}>
          1 upper case character
        </li>
        <li style={{ color: verifySpecial(passwordInput) ? 'red' : 'green' }}>
          1 special character
        </li>
        <li style={{ color: verifyPassLength(passwordInput) ? 'red' : 'green' }}>
          8-16 characters
        </li>
      </ul>
    </>
  )
}

SignUpFields.propTypes = {
  passwordInput: PropTypes.string.isRequired,
}

export default SignUpFields;
