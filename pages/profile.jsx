import { useState } from "react";
import useGenericState from '../hooks/useGenericState';
import 'react-next-dates/dist/style.css';
import { ptBR } from 'date-fns/locale';
import { Calendar, DatePicker } from 'react-next-dates';

function Profile() {
  const [profilePic, setProfilePic] = useState();
  const [willChangePic, setWillChangePic] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const picture = profilePic || "https://i.imgur.com/r0t9T9j.png";

  const INITIAL_STATE = { profileDesc: '' };

  const [genericState, setGenericState] = useGenericState(INITIAL_STATE);

  const { profileDesc } = genericState;

  const textAreaLengthColor = (desc) => {
    if (desc.length < 50) return 'yellowgreen';
    if (desc.length >= 50 && desc.length < 100) return 'green';
    if (desc.length >= 100 && desc.length < 200) return 'orange';
    if (desc.length >= 200 && desc.length < 300) return 'darkred';
    return 'red';
  };

  const changeProfilePic = (files) => {
    const file = files[0];
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
      <label>
        Birthdate
        <DatePicker locale={ptBR} date={startDate} onChange={setStartDate} portalContainer={document.body}>
          {({
      inputProps
    }) => <input {...inputProps} />}
        </DatePicker>
      </label>
      <fieldset>
        <textarea
          maxLength={400}
          name="profileDesc"
          id=""
          style={{ resize: 'none', width: '400px', height: '180px', borderRadius: '30px', padding: '14px' }}
          cols="0"
          value={profileDesc}
          onChange={setGenericState}
        />
        <p
          style={{ color: textAreaLengthColor(profileDesc), transition: '1s' }}
        >
          {`${profileDesc.length}/400`}
        </p>
      </fieldset>
    </form>
  );
}

export default Profile;