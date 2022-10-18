import Box from '@mui/material/Box';
import { useState } from 'react';

function ProfileImg({ userProfileInfos, editProfile }) {
  const [ profilePic, setProfilePic ] = useState();
  const [ willChangePic, setWillChangePic ] = useState(false);
  const picture = profilePic || 'https://i.imgur.com/r0t9T9j.png';

  const changeProfilePic = (files) => {
    const file = files[ 0 ];
    const profilePic = URL.createObjectURL(file);
    setProfilePic(profilePic);
    setWillChangePic(false);
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <img
      src={userProfileInfos.profile_picture || picture}
      alt=''
      style={{ width: '80px', borderRadius: '100%', border: '1px solid black', marginRight: '20px' }}
    />
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
  </Box>
  )
}


export default ProfileImg;