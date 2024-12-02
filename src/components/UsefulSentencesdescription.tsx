import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { UkFlag, NoFlag } from './styles/Flags';
import { randonColor } from '../util/helper';

interface FlagTextPairProps {
  FlagComponent: React.ElementType;
  text: string;
}

const FlagTextPair: React.FC<FlagTextPairProps> = ({ FlagComponent, text }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <FlagComponent />
      <Typography variant="body2" style={{ fontSize: '20px' }}>
        {text}
      </Typography>
    </Box>
  );
};

const UsefulSentencesdescription: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box component={Paper} sx={{ p: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Useful Sentences
        </Typography>
        <Typography variant="body1">
          Here are some useful sentences to help you practice your English and
          Norwegian skills. These sentences cover a variety of common
          situations.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Common Phrases
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              mt: 1,
              px: 2,
              py: 1,
              backgroundColor: randonColor(),
              borderRadius: '16px',
            }}
          >
            <FlagTextPair
              FlagComponent={NoFlag}
              text="Jeg gleder meg til å ..."
            />
            <FlagTextPair
              FlagComponent={UkFlag}
              text="I am looking forward to ..."
            />
          </Box>

          <Box
            sx={{
              mt: 1,
              px: 2,
              py: 1,
              backgroundColor: randonColor(),
              borderRadius: '16px',
            }}
          >
            <FlagTextPair
              FlagComponent={NoFlag}
              text="Jeg har lyst til å ..."
            />
            <FlagTextPair FlagComponent={UkFlag} text="I want to ..." />
          </Box>

          <Box
            sx={{
              mt: 1,
              px: 2,
              py: 1,
              backgroundColor: randonColor(),
              borderRadius: '16px',
            }}
          >
            <FlagTextPair
              FlagComponent={NoFlag}
              text="Jeg er fornøyd med ..."
            />
            <FlagTextPair
              FlagComponent={UkFlag}
              text="I am satisfied with ..."
            />
          </Box>

          <Box
            sx={{
              mt: 1,
              px: 2,
              py: 1,
              backgroundColor: randonColor(),
              borderRadius: '16px',
            }}
          >
            <FlagTextPair FlagComponent={NoFlag} text="Jeg har tenkt å ..." />
            <FlagTextPair FlagComponent={UkFlag} text="I intend to ..." />
          </Box>

          <Box
            sx={{
              mt: 1,
              px: 2,
              py: 1,
              backgroundColor: randonColor(),
              borderRadius: '16px',
            }}
          >
            <FlagTextPair FlagComponent={NoFlag} text="Jeg drømmer om å ..." />
            <FlagTextPair FlagComponent={UkFlag} text="I dream of ..." />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default UsefulSentencesdescription;
