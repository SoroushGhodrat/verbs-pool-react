import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

const EnglishGrammarDescriptions = () => {
  const headers: string[] = [
    'Type',
    'Example in English',
    'Example in Norwegian',
    'Example in Farsi',
  ];

  return (
    <Container maxWidth="lg">
      {/* Title Section */}
      <Box textAlign="center" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          English and Norwegian Tenses
        </Typography>
        <Typography variant="body1" color="textSecondary">
          A guide to understanding tenses in English and Norwegian with
          examples.
        </Typography>
      </Box>

      {/* Section: Simple Present */}
      <Box component={Paper} sx={{ p: { xs: 1, md: 2 }, bgcolor: '#eceff1' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ pb: 4, color: '#263238' }}
          textAlign="center"
        >
          Simple Present
        </Typography>

        <Grid container spacing={2}>
          {/* English Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#78909c' }}>
              <CardContent>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ color: 'white' }}
                >
                  English
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'white' }}>
                  Formula: Subject + base verb
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'white' }}>
                  Passive formula: Subject + am/is/are + past participle
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Norwegian Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#607d8b' }}>
              <CardContent>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ color: 'white' }}
                >
                  Norsk
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'white' }}>
                  Formula: Subjekt + verb (presens)
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'white' }}>
                  Passive formula: Subjekt + er + partisipp av verb
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Signs Section */}
        <Grid size={{ xs: 12, md: 12 }} sx={{ py: 2 }}>
          <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#546e7a' }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ color: 'white' }}>
                Signs: Habitual actions, routines, facts, general truths.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Table Section */}
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: 2 }}
        >
          <Table>
            <TableHead sx={{ bgcolor: '#263238' }}>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header} sx={{ color: 'white' }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Normal Sentence</TableCell>
                <TableCell>She writes letters.</TableCell>
                <TableCell>Hun skriver brev.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه می‌نویسد.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Negative Sentence</TableCell>
                <TableCell>She does not write letters.</TableCell>
                <TableCell>Hun skriver ikke brev.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه نمی‌نویسد.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Does she write letters?</TableCell>
                <TableCell>Skriver hun brev?</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  آیا او نامه می‌نویسد؟
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Passive Form</TableCell>
                <TableCell>Letters are written by her.</TableCell>
                <TableCell>Brevene skrives av henne.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  نامه‌ها توسط او نوشته می‌شوند.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Section: Present Continuous */}
      <Box
        component={Paper}
        sx={{ p: { xs: 1, md: 2 }, mt: 4, bgcolor: '#c8e6c9' }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ my: 4, color: '#1b5e20' }}
          textAlign="center"
        >
          Present Continuous
        </Typography>

        <Grid container spacing={2}>
          {/* English Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#66bb6a' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  English
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subject + am/is/are + verb-ing
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subject + am/is/are + being + past participle
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Norwegian Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#4caf50' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Norsk
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subjekt + er + verb-ing
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subjekt + er + partisipp av verb
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Signs Section */}
        <Grid size={{ xs: 12, md: 12 }} sx={{ py: 2 }}>
          <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#43a047' }}>
            <CardContent>
              <Typography variant="subtitle1">
                Signs: Actions happening now or around the present moment.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Table Section */}
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: 2 }}
        >
          <Table>
            <TableHead sx={{ bgcolor: '#1b5e20' }}>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header} sx={{ color: 'white' }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Normal Sentence</TableCell>
                <TableCell>She is writing letters.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او در حال نوشتن نامه است.
                </TableCell>
                <TableCell>Hun er skriver brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Negative Sentence</TableCell>
                <TableCell>She is not writing letters.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او در حال نوشتن نامه نیست.
                </TableCell>
                <TableCell>Hun er ikke skriver brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Is she writing letters?</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  آیا او در حال نوشتن نامه است؟
                </TableCell>
                <TableCell>Er hun skriver brev?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Passive Form</TableCell>
                <TableCell>Letters are being written by her.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  نامه‌ها توسط او در حال نوشته شدن هستند.
                </TableCell>
                <TableCell>Brevene er skrives av henne.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Section: Present Perfect */}
      <Box
        component={Paper}
        sx={{ p: { xs: 1, md: 2 }, mt: 4, bgcolor: '#e0f7fa' }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ my: 4, color: '#006064' }}
          textAlign="center"
        >
          Present Perfect
        </Typography>

        <Grid container spacing={2}>
          {/* English Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#26c6da' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  English
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subject + has/have + past participle
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subject + has/have + been + past participle
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Norwegian Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#00bcd4' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Norsk
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subjekt + har + partisipp av verb
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subjekt + har + blitt + partisipp av verb
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Signs Section */}
        <Grid size={{ xs: 12, md: 12 }} sx={{ py: 2 }}>
          <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#00acc1' }}>
            <CardContent>
              <Typography variant="subtitle1">
                Signs: Actions that have been completed at some point in the
                past but are relevant to the present.{' '}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Table Section */}
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: 2 }}
        >
          <Table>
            <TableHead sx={{ bgcolor: '#006064' }}>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header} sx={{ color: 'white' }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Normal Sentence</TableCell>
                <TableCell>She has written a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه‌ای نوشته است.
                </TableCell>
                <TableCell>Hun har skrevet et brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Negative Sentence</TableCell>
                <TableCell>She has not written a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه‌ای ننوشته است.
                </TableCell>
                <TableCell>Hun har ikke skrevet et brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Has she written a letter?</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  آیا او نامه‌ای نوشته است؟
                </TableCell>
                <TableCell>Har hun skrevet et brev?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Passive Form</TableCell>
                <TableCell>A letter has been written by her.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  نامه‌ای توسط او نوشته شده است.
                </TableCell>
                <TableCell>Et brev har blitt skrevet av henne.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Section: Simple Past */}
      <Box sx={{ p: { xs: 1, md: 2 }, mt: 4, bgcolor: '#e0f2f1' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ my: 4, color: '#004d40' }}
          textAlign="center"
        >
          Simple Past
        </Typography>

        <Grid container spacing={2}>
          {/* English Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#26a69a' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  English
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subject + past verb
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subject + was/were + past participle
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Norwegian Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#009688' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Norsk
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subjekt + verb (preteritum)
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subjekt + ble + partisipp av verb
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Signs Section */}
        <Grid size={{ xs: 12, md: 12 }} sx={{ py: 2 }}>
          <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#00897b' }}>
            <CardContent>
              <Typography variant="subtitle1">
                Signs: Actions that were completed in the past.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Table Section */}
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: 2 }}
        >
          <Table>
            <TableHead sx={{ bgcolor: '#004d40' }}>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header} sx={{ color: 'white' }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Normal Sentence</TableCell>
                <TableCell>She wrote a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه‌ای نوشت.
                </TableCell>
                <TableCell>Hun skrev et brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Negative Sentence</TableCell>
                <TableCell>She did not write a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه‌ای ننوشت.
                </TableCell>
                <TableCell>Hun skrev ikke et brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Did she write a letter?</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  آیا او نامه‌ای نوشت؟
                </TableCell>
                <TableCell>Skrev hun et brev?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Passive Form</TableCell>
                <TableCell>A letter was written by her.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  نامه‌ای توسط او نوشته شد.
                </TableCell>
                <TableCell>Et brev ble skrevet av henne.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Section: Past Continuous */}
      <Box sx={{ p: { xs: 1, md: 2 }, mt: 4, bgcolor: '#e3f2fd' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ my: 4, color: '#0d47a1' }}
          textAlign="center"
        >
          Past Continuous
        </Typography>

        <Grid container spacing={2}>
          {/* English Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#42a5f5' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  English
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subject + was/were + verb-ing
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subject + was/were + being + past participle
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Norwegian Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#2196f3' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Norsk
                </Typography>
                <Typography variant="subtitle1">
                  Norwegian grammar does not have this tense.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Signs Section */}
        <Grid size={{ xs: 12, md: 12 }} sx={{ py: 2 }}>
          <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#1e88e5' }}>
            <CardContent>
              <Typography variant="subtitle1">
                Signs: Actions that were ongoing in the past.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Table Section */}
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: 2 }}
        >
          <Table>
            <TableHead sx={{ bgcolor: '#0d47a1' }}>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header} sx={{ color: 'white' }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Normal Sentence</TableCell>
                <TableCell>She was writing a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او در حال نوشتن نامه بود.
                </TableCell>
                <TableCell>
                  Norwegian grammar does not have this tense.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Negative Sentence</TableCell>
                <TableCell>She was not writing a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او در حال نوشتن نامه نبود.
                </TableCell>
                <TableCell>
                  Norwegian grammar does not have this tense.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Was she writing a letter?</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  آیا او در حال نوشتن نامه بود؟
                </TableCell>
                <TableCell>
                  Norwegian grammar does not have this tense.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Passive Form</TableCell>
                <TableCell>A letter was being written by her.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  نامه‌ای توسط او در حال نوشته شدن بود.
                </TableCell>
                <TableCell>
                  Norwegian grammar does not have this tense.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Section: Past Perfect */}
      <Box sx={{ p: { xs: 1, md: 2 }, mt: 4, bgcolor: '#ede7f6' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ my: 4, color: '#311b92' }}
          textAlign="center"
        >
          Past Perfect
        </Typography>

        <Grid container spacing={2}>
          {/* English Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#7e57c2' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  English
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subject + had + past participle
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subject + had + been + past participle
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Norwegian Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#673ab7' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Norsk
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subjekt + hadde + partisipp av verb
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subjekt + hadde + blitt + partisipp av verb
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Signs Section */}
        <Grid size={{ xs: 12, md: 12 }} sx={{ py: 2 }}>
          <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#5e35b1' }}>
            <CardContent>
              <Typography variant="subtitle1">
                Signs: Actions that were completed before another action in the
                past.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Table Section */}
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: 2 }}
        >
          <Table>
            <TableHead sx={{ bgcolor: '#311b92' }}>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header} sx={{ color: 'white' }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Normal Sentence</TableCell>
                <TableCell>She had written a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه‌ای نوشته بود.
                </TableCell>
                <TableCell>Hun hadde skrevet et brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Negative Sentence</TableCell>
                <TableCell>She had not written a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه‌ای ننوشته بود.
                </TableCell>
                <TableCell>Hun hadde ikke skrevet et brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Had she written a letter?</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  آیا او نامه‌ای نوشته بود؟
                </TableCell>
                <TableCell>Hadde hun skrevet et brev?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Passive Form</TableCell>
                <TableCell>A letter had been written by her.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  نامه‌ای توسط او نوشته شده بود.
                </TableCell>
                <TableCell>Et brev hadde blitt skrevet av henne.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Section: Future Tense */}
      <Box sx={{ p: { xs: 1, md: 2 }, mt: 4, bgcolor: '#ffebee' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ my: 4, color: '#b71c1c' }}
          textAlign="center"
        >
          Future Tense
        </Typography>

        <Grid container spacing={2}>
          {/* English Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#ef5350' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  English
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subject + will + base verb
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subject + will + be + past participle
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Norwegian Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#f44336' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Norsk
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subjekt + skal + verb (infinitiv)
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subjekt + skal + bli + partisipp av verb
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Signs Section */}
        <Grid size={{ xs: 12, md: 12 }} sx={{ py: 2 }}>
          <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#e53935' }}>
            <CardContent>
              <Typography variant="subtitle1">
                Signs: Actions that will happen in the future.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Table Section */}
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: 2 }}
        >
          <Table>
            <TableHead sx={{ bgcolor: '#b71c1c' }}>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header} sx={{ color: 'white' }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Normal Sentence</TableCell>
                <TableCell>She will write a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه‌ای خواهد نوشت.
                </TableCell>
                <TableCell>Hun skal skrive et brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Negative Sentence</TableCell>
                <TableCell>She will not write a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه‌ای نخواهد نوشت.
                </TableCell>
                <TableCell>Hun skal ikke skrive et brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Will she write a letter?</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  آیا او نامه‌ای خواهد نوشت؟
                </TableCell>
                <TableCell>Skal hun skrive et brev?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Passive Form</TableCell>
                <TableCell>A letter will be written by her.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  نامه‌ای توسط او نوشته خواهد شد.
                </TableCell>
                <TableCell>Et brev skal skrives av henne.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Section: Future Perfect */}
      <Box sx={{ p: { xs: 1, md: 2 }, mt: 4, bgcolor: '#e8eaf6' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ my: 4, color: '#1a237e' }}
          textAlign="center"
        >
          Future Perfect
        </Typography>

        <Grid container spacing={2}>
          {/* English Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#5c6bc0' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  English
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subject + will have + past participle
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subject + will have + been + past participle
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Norwegian Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#3f51b5' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Norsk
                </Typography>
                <Typography variant="subtitle1">
                  Formula: Subjekt + skal ha + partisipp av verb
                </Typography>
                <Typography variant="subtitle1">
                  Passive formula: Subjekt + skal ha + blitt + partisipp av verb
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Signs Section */}
        <Grid size={{ xs: 12, md: 12 }} sx={{ py: 2 }}>
          <Card elevation={3} sx={{ borderRadius: 2, bgcolor: '#3949ab' }}>
            <CardContent>
              <Typography variant="subtitle1">
                Signs: Actions that will be completed before a specific point in
                the future.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Table Section */}
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: 2 }}
        >
          <Table>
            <TableHead sx={{ bgcolor: '#1a237e' }}>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header} sx={{ color: 'white' }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Normal Sentence</TableCell>
                <TableCell>She will have written a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه‌ای نوشته خواهد بود.
                </TableCell>
                <TableCell>Hun skal ha skrevet et brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Negative Sentence</TableCell>
                <TableCell>She will not have written a letter.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  او نامه‌ای ننوشته خواهد بود.
                </TableCell>
                <TableCell>Hun skal ikke ha skrevet et brev.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Will she have written a letter?</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  آیا او نامه‌ای نوشته خواهد بود؟
                </TableCell>
                <TableCell>Skal hun ha skrevet et brev?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Passive Form</TableCell>
                <TableCell>A letter will have been written by her.</TableCell>
                <TableCell sx={{ direction: 'rtl' }}>
                  نامه‌ای توسط او نوشته خواهد شد.
                </TableCell>
                <TableCell>Et brev vil ha blitt skrevet av henne.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};
export default EnglishGrammarDescriptions;
