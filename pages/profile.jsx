import { useState } from 'react';
import useGenericState from '../hooks/useGenericState';
import TextField from '@mui/material/TextField';
import 'react-next-dates/dist/style.css';
import Button from '@mui/material/Button';
import { CustomForm, CustomPaper, CustomParagraph } from '../styles/Login';
import { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import supabase from '../utils/supabaseClient';

const JWT_SECRET = process.env.NEXT_PUBLIC_DB_PASSWORD;

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
      setUserProfileInfos(data[ 0 ])
      console.log(data)
    }
    fetchUserInfos();
  }, [])


  return (
    <CustomForm method='POST'>
      <CustomPaper>
        <img
          src={userProfileInfos.profile_picture || picture}
          alt=''
          style={{ width: '80px', borderRadius: '100%', border: '1px solid black' }}
        />

        <CustomParagraph>
          {`${userProfileInfos.first_name} ${userProfileInfos.last_name}`}
        </CustomParagraph>

        <CustomParagraph>
          {userProfileInfos.email}
        </CustomParagraph>
        {editProfile &&
          <>
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
          </>
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

        <Button
          onClick={() => setEditProfile(true)}
          fullWidth
          type='button'
          variant='contained'
        >
          { !editProfile ? 'Edit profile' : 'Save' }
        </Button>
      </CustomPaper>
    </CustomForm >
  );
}

export default Profile;