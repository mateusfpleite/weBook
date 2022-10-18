import { useState } from 'react';
import 'react-next-dates/dist/style.css';
import Button from '@mui/material/Button';
import { CustomForm, CustomPaper, CustomParagraph } from '../styles/Login';
import { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import supabase from '../utils/supabaseClient';
import { CustomTextField, NewCustomStack } from '../styles/Profile';
import ProfileImg from '../components/Profile/ProfileImg';
import { TextField } from '@mui/material';

const JWT_SECRET = process.env.NEXT_PUBLIC_DB_PASSWORD;

function Profile() {
  const [ editProfile, setEditProfile ] = useState(false);
  const [ userProfileInfos, setUserProfileInfos ] = useState({});
  const [ profileDesc, setProfileDesc ] = useState('');

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('loggedUser'));
    const { data: { id } } = jwt.verify(userToken, JWT_SECRET)
    const fetchUserInfos = async () => {
      const { data } = await supabase
        .from('users')
        .select('*')
        .eq('id', id);
      setUserProfileInfos(data[ 0 ])
      console.log(data[ 0 ])
      if (data[ 0 ].description) setProfileDesc(data[ 0 ].description);
    }
    fetchUserInfos();
  }, []);

  const saveUserInfos = async (e) => {
    e.preventDefault();
    setEditProfile(!editProfile)
    await supabase
      .from('users')
      .update(
        {
          first_name: 'Leonardo'
        }
      )
      .eq('id', userProfileInfos.id)
  }

  return (
    <CustomForm onSubmit={saveUserInfos}>
      <CustomPaper>
        <NewCustomStack spacing={3}>
          <ProfileImg userProfileInfos={userProfileInfos} editProfile={editProfile} />

          {!editProfile
            ? (
              <>
                <CustomParagraph>
                  {`${userProfileInfos.first_name} ${userProfileInfos.last_name}`}
                </CustomParagraph>

                <CustomParagraph>{userProfileInfos.email}</CustomParagraph>
              </>
            )
            : (
              <>
                <TextField
                  label="Name:"
                  name="first_name"
                >
                  opa
                </TextField>

                <TextField
                  label="Email:"
                >
                  opa
                </TextField>
              </>
            )
          }

          {!editProfile
            ? (
              <CustomParagraph>
                {userProfileInfos.description
                  ? userProfileInfos.description
                  : "It seems you haven't put any description yet :("
                }
              </CustomParagraph>
            )
            :
            (
              <CustomTextField
                name='profileDesc'
                multiline
                inputProps={{ maxLength: 160 }}
                helperText={`${profileDesc.length}/160`}
                value={profileDesc}
                label="Description: (type something cool about you :D )"
                onChange={({ target: { value } }) => setProfileDesc(value)}
              />
            )
          }

          <Button fullWidth type='submit' variant='contained'>
            {!editProfile ? 'Edit profile' : 'Save'}
          </Button>
        </NewCustomStack>
      </CustomPaper>
    </CustomForm >
  );
}

export default Profile;