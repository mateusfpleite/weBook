import { useState } from "react";
import useGenericState from '../hooks/useGenericState';
import TextField from '@mui/material/TextField';
import 'react-next-dates/dist/style.css';
// import { ptBR } from 'date-fns/locale';
// import { DatePicker } from 'react-next-dates';

function Profile() {
  const [ profilePic, setProfilePic ] = useState();
  const [ willChangePic, setWillChangePic ] = useState(false);
  // const [ startDate, setStartDate ] = useState(new Date());
  const picture = profilePic || "https://i.imgur.com/r0t9T9j.png";

  const INITIAL_STATE = { profileDesc: '' };

  const [ genericState, setGenericState ] = useGenericState(INITIAL_STATE);

  const { profileDesc } = genericState;

  const textAreaLengthColor = (desc) => {
    if (desc.length < 32) return 'green';
    if (desc.length >= 32 && desc.length < 64) return 'darkgreen';
    if (desc.length >= 64 && desc.length < 96) return 'orange';
    if (desc.length >= 96 && desc.length < 128) return 'darkred';
    return 'red';
  };

  const changeProfilePic = (files) => {
    const file = files[ 0 ];
    const profilePic = URL.createObjectURL(file);
    setProfilePic(profilePic);
    setWillChangePic(false);
  }

  return (
    <form method="POST">
      <h1>Profile Page</h1>
      <img
        src={picture}
        alt=""
        style={{ width: '80px', borderRadius: '100%', border: '1px solid black' }}
      />
      <br />

      {!willChangePic &&
        (<button
          type="button"
          onClick={() => setWillChangePic(true)}
        >
          Change profile picture
        </button>)
      }

      {willChangePic &&
        (<input
          type="file"
          onChange={({ target: { files } }) => changeProfilePic(files)}
        />)
      }
      {/* <label>
        Birthdate
        <DatePicker locale={ptBR} date={startDate} onChange={setStartDate}>
          {({
      inputProps
    }) => <input {...inputProps} />}
        </DatePicker> */}
      {/* </label> */}
      <TextField
        name="profileDesc"
        multiline
        inputProps={{ maxLength: 160 }}
        helperText={`${profileDesc.length}/160`}
        value={profileDesc}
        onChange={setGenericState}
      />

      <p
        style={{ color: textAreaLengthColor(profileDesc), transition: '1s' }}
      >

      </p>
    </form >
  );
}

export default Profile;