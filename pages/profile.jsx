import { useState } from "react";

function Profile() {
  const [profilePic] = useState();
  const picture =  profilePic || "https://i.imgur.com/r0t9T9j.png";

  return (
    <>
      <h1>profile page</h1>
      <img
        src={ picture }
        alt=""
        style={ {width: '80px', borderRadius: '100%', border: '1px solid black'} }
      />
    </>
  );
}

export default Profile;