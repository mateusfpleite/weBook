import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import { Upload } from 'upload-js';
import context from '../../context/context';
import supabase from '../../utils/supabaseClient';

function ProfileImg({ userProfileInfos, editProfile }) {
  const { profileId } = useContext(context)
  const [ profileImageKey, setProfileImageKey] = useState(1);
  const [ profilePic, setProfilePic ] = useState();
  const [ willChangePic, setWillChangePic ] = useState(false);
  const picture = profilePic || 'https://i.imgur.com/r0t9T9j.png';

  const changeProfilePic = async ([ file ]) => {
    const upload = Upload({ apiKey: "free" })
    const { fileUrl } = await upload.uploadFile(file);
    if (fileUrl) setProfilePic(fileUrl);
    setWillChangePic(false);
    await supabase
      .from('users')
      .update(
        { profile_picture: fileUrl },
      )
      .eq('id', +profileId);
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img
        key={ profileImageKey }
        src={userProfileInfos.profile_picture || picture }
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