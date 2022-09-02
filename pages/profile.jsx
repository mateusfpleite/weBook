import { useState } from "react";
import useGenericState from '../hooks/useGenericState';

function Profile() {
  const [ profilePic, setProfilePic ] = useState();
  const [ willChangePic, setWillChangePic ] = useState(false);
  const picture = profilePic || "https://i.imgur.com/r0t9T9j.png";

  const INITIAL_STATE = {
    profileDesc: '',
  };

  const [ genericState, setGenericState ] = useGenericState(INITIAL_STATE);

  const { profileDesc } = genericState;
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
          onChange={({ target: { files } }) => {
            const file = files[ 0 ];
            const profilePic = URL.createObjectURL(file);
            setProfilePic(profilePic);
            setWillChangePic(false);
          }}
        />)
      }
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
        <p>{`${profileDesc.length}/400`}</p>
      </fieldset>
    </form>
  );
}

export default Profile;

// const ImageUpload = () => {
//   const [selectedFile, setSelectedFile] = useState()
//   const [preview, setPreview] = useState()

//   // create a preview as a side effect, whenever selected file is changed
//   useEffect(() => {
//       if (!selectedFile) {
//           setPreview(undefined)
//           return
//       }

//       const objectUrl = URL.createObjectURL(selectedFile)
//       setPreview(objectUrl)

//       // free memory when ever this component is unmounted
//       return () => URL.revokeObjectURL(objectUrl)
//   }, [selectedFile])

//   const onSelectFile = e => {
//       if (!e.target.files || e.target.files.length === 0) {
//           setSelectedFile(undefined)
//           return
//       }

//       // I've kept this example simple by using the first image instead of multiple
//       setSelectedFile(e.target.files[0])
//   }

//   return (
//       <div>
//           <input type='file' onChange={onSelectFile} />
//           {selectedFile &&  <img src={preview} /> }
//       </div>
//   )
// }

// export default ImageUpload;