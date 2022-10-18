import { useState } from 'react';
import useGenericState from '../hooks/useGenericState';
import TextField from '@mui/material/TextField';
import 'react-next-dates/dist/style.css';
import Button from '@mui/material/Button';
import { CustomForm, CustomPaper } from '../styles/Login';
import { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import supabase from '../utils/supabaseClient';
// import { ptBR } from 'date-fns/locale';
// import { DatePicker } from 'react-next-dates';

const JWT_SECRET = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function Profile() {
  const [ profilePic, setProfilePic ] = useState();
  const [ willChangePic, setWillChangePic ] = useState(false);
  const [ editProfile, setEditProfile ] = useState(false);
  const [ userProfileInfos, setUserProfileInfos ] = useState({});
  // const [ startDate, setStartDate ] = useState(new Date());
  const picture = profilePic || 'https://i.imgur.com/r0t9T9j.png';

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

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('loggedUser'));
    const { data: { id } } = jwt.verify(userToken, JWT_SECRET)
    const fetchUserInfos = async () => {
      const { data } = await supabase
        .from('users')
        .select('*')
        .eq('id', id);
      setUserProfileInfos(data[0])
    }
    fetchUserInfos();
  }, [])


  return (
    <CustomForm method='POST'>
      <CustomPaper>
        <img
          src={picture}
          alt=''
          style={{ width: '80px', borderRadius: '100%', border: '1px solid black' }}
        />
        <br />

        {editProfile &&
          <span>
            {!willChangePic ?
              (
                <button
                  type='button'
                  onClick={() => setWillChangePic(true)}
                >
                  Change profile picture
                </button>
              )
              : (
                <input
                  type='file'
                  onChange={({ target: { files } }) => changeProfilePic(files)}
                />
              )
            }
          </span>
        }

        {editProfile &&
          <Button
            variant='contained'
            type='button'
            fullWidth
          >
            Change description
          </Button>
        }

        <TextField
          name='profileDesc'
          multiline
          inputProps={{ maxLength: 160 }}
          helperText={`${profileDesc.length}/160`}
          value={profileDesc}
          onChange={setGenericState}
        />
        {/* 
      <p
        style={{ color: textAreaLengthColor(profileDesc), transition: '1s' }}
        >
      </p> */}

        <Button
          onClick={() => setEditProfile(true)}
          fullWidth
          type='button'
          variant='contained'
        >
          Edit profile
        </Button>
      </CustomPaper>
    </CustomForm >
  );
}

export default Profile;