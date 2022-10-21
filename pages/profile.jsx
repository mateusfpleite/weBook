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
import useGenericState from '../hooks/useGenericState';
import verifyEmail from '../utils/verifyEmail';
import { useContext } from 'react';
import context from '../context/context';

const JWT_SECRET = process.env.NEXT_PUBLIC_DB_PASSWORD;

function Profile() {
  const [ editProfile, setEditProfile ] = useState(false);
  const [ userProfileInfos, setUserProfileInfos ] = useState({});
  const [ profileDesc, setProfileDesc ] = useState('');
  const [ isEmailWrong, setIsEmailWrong ] = useState(false);
  const { setProfileId } = useContext(context);
  const INITIAL_STATE = {
    newEmail: '',
    description: ''
  }
  const [ genericState, setGenericState ] = useGenericState(INITIAL_STATE);

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('loggedUser'));
    const { data: { id } } = jwt.verify(userToken, JWT_SECRET)
    const fetchUserInfos = async () => {
      const { data } = await supabase
        .from('users')
        .select('*')
        .eq('id', id);
      setUserProfileInfos(data[ 0 ])
      setProfileId(id)
      if (data[ 0 ].description) setProfileDesc(data[ 0 ].description);
    }
    fetchUserInfos();
    // return userProfileInfos;
  }, []);

  const updateOnlyDescription = async () => {
    await supabase
      .from('users')
      .update(
        {
          description: genericState.description,
        }
      )
      .eq('id', userProfileInfos.id);
  };

  const updateOnlyEmail = async () => {
    await supabase
      .from('users')
      .update(
        {
          email: genericState.newEmail,
        }
      )
      .eq('id', userProfileInfos.id);
  };

  const updateAllInfos = async () => {
    await supabase
      .from('users')
      .update(
        {
          email: genericState.newEmail,
          description: genericState.description
        }
      )
      .eq('id', userProfileInfos.id);
  };

  const saveUserInfos = async (e) => {
    e.preventDefault();
    setEditProfile(!editProfile);
    if (verifyEmail(genericState.newEmail)) return setIsEmailWrong(!isEmailWrong);
    if (genericState.newEmail === '' && genericState.description === '') return;
    if (genericState.newEmail === '') return await updateOnlyDescription();
    if (genericState.description === '') return await updateOnlyEmail();
    if (genericState.profilePicture === '') return await updateOnlyProfilePicture();
    await updateAllInfos();
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
                <CustomParagraph>
                  {`${userProfileInfos.first_name} ${userProfileInfos.last_name}`}
                </CustomParagraph>
                <TextField
                  label="New e-mail:"
                  name="newEmail"
                  error={verifyEmail(genericState.newEmail)}
                  helperText={verifyEmail(genericState.newEmail)
                    && 'Please, type a valid email'}
                  onChange={setGenericState}
                  value={genericState.newEmail}
                />
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
                name='description'
                multiline
                inputProps={{ maxLength: 160 }}
                helperText={`${profileDesc.length}/160`}
                value={userProfileInfos.description || genericState.description}
                label="Description: (type something cool about you :D )"
                onChange={setGenericState}
              />
            )
          }

          <Button disabled={verifyEmail(genericState.newEmail)} fullWidth type='submit' variant='contained'>
            {!editProfile ? 'Edit profile' : 'Save'}
          </Button>
        </NewCustomStack>
      </CustomPaper>
    </CustomForm >
  );
}

export default Profile;