import { styled } from '@mui/material';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const CustomForm = styled('form')`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CustomPaper = styled(Paper)`
  display: flex;
  width: 30rem;
  height: 35rem;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`;

export const CustomStack = styled(Stack)`
  display: flex;
  width: 30rem;
  height: 35rem;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`;

export const CustomButton = styled(Button)`
  height: 2.5rem;
  text-align: center;
`;

export const CustomParagraph = styled('p')`
  text-align: center;
  font-size: 1rem;  
`;
