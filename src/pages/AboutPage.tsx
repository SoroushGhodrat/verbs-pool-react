import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';

const AboutPage: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [message, setMessage] = useState('');

  const handleFeedbackTypeChange = (event: any) => {
    setFeedbackType(event.target.value as string);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Feedback Type:', feedbackType);
    console.log('Message:', message);
    // Reset form
    setFeedbackType('');
    setMessage('');
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Card component={Paper}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            About This App
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the Verbs Pool app! This application is currently in beta
            version and may contain potential mistakes in grammar or
            definitions. We are continuously working to improve the app and
            appreciate your understanding and feedback.
          </Typography>
          <Typography variant="body1" paragraph>
            The Verbs Pool app aims to help users learn and practice verbs in
            both English and Norwegian. You can explore different verb forms,
            their meanings, and examples of usage in sentences.
          </Typography>
          <Typography variant="body1" paragraph>
            If you encounter any issues or have suggestions for improvement,
            please feel free to contact us. Your feedback is valuable in making
            this app better for everyone.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="feedback-type-label">Feedback Type</InputLabel>
              <Select
                labelId="feedback-type-label"
                id="feedback-type"
                value={feedbackType}
                label="Feedback Type"
                onChange={handleFeedbackTypeChange}
              >
                <MenuItem value="english-verb">English Verb</MenuItem>
                <MenuItem value="norsk-verb">Norsk Verb</MenuItem>
                <MenuItem value="grammar">Grammar</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={message}
              onChange={handleMessageChange}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit Feedback
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AboutPage;
