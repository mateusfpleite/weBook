const verifyEmail = (email) => {
  if (email.length === 0) return;
  if (
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      email
    )
  ) {
    return false;
  }
  return true;
};

export default verifyEmail;