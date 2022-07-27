import { IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useMemo } from 'react';
import { Button, Card, Logo } from '../../components';
import { Wrapper } from './Login.styled';
type Props = {};

const FIELDS = ['Account Name', 'Email', 'Password'];
const SOCIAL_LOGINS = ['okta', 'google', 'azure'];

const Login = (props: Props) => {
  const TextFields = useMemo(() => {
    return FIELDS.map((item, idx) => {
      return (
        <TextField
          key={idx}
          fullWidth
          label={item}
          sx={{ margin: '8px 0' }}
        />
      );
    });
  }, []);

  const SocialLoginButtons = useMemo(() => {
    return SOCIAL_LOGINS.map((item, idx) => {
      const logo = require(`../../../public/assets/images/${item}.svg`);
      return (
        <IconButton
          key={idx}
          disableRipple
          sx={{
            height: '32px',
            width: '32px',
            borderRadius: '6px',
            border: '0.5px solid black',
          }}
        >
          <img src={logo} alt="seraphic logo" />
        </IconButton>
      );
    });
  }, []);

  return (
    <Wrapper>
      <Card>
        <Box sx={{ marginBottom: '35px' }}>
          <Logo />
        </Box>
        <form>
          {TextFields}
          <Button
            variant="text"
            size="small"
            sx={{ marginBottom: '19px' }}
          >
            Forgot password?
          </Button>
          <Box
            display="flex"
            justifyContent={'center'}
            gap={2}
            sx={{ marginBottom: '39px' }}
          >
            {SocialLoginButtons}
          </Box>
          <Button variant="contained" fullWidth>
            Log in
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Login;
