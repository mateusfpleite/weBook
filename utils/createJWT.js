import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const createJWT = (id) => {
  const jwtConfig = { algorithm: 'HS256' };
  const token = jwt.sign({ data: { id } }, JWT_SECRET, jwtConfig);
  return token;
}; 

export default createJWT;