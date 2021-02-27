import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';

const Homepage: React.FC = () => {
  return (
    <section className='section'>
      <Container>
        <Box textAlign='center'>
          <Box mb={2}>
            <Typography variant='h1'>Welcome</Typography>
          </Box>
          <Typography variant='h5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            libero incidunt voluptatem minima voluptates pariatur deleniti
            reprehenderit tenetur ab, optio distinctio ipsum modi quas magnam.
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

export default Homepage;
