import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

export default function InputSery() {
  const [data, setData] = React.useState<{
    email: string;
    status: 'initial' | 'loading' | 'failure' | 'sent';
  }>({
    email: '',
    status: 'initial',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: 'loading' }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: '', status: 'sent' });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: 'failure' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl>
       
        <Input
          sx={{ '--Input-decoratorChildHeight': '45px',mt:'4%',paddingLeft:'4%',paddingRight:'4%', }}
          placeholder="سری سریال کارت هوشمند ملی/کدرهگیری"
          type="email"
          required
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: 'initial' })
          }
          error={data.status === 'failure'}
          endDecorator={
            <Button
              variant="solid"
              color="primary"
              loading={data.status === 'loading'}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              راهنما
            </Button>
          }
        />
        {data.status === 'failure' && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}
        {data.status === 'sent' && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
          >
            You are all set!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
