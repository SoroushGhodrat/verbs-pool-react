import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Zoom,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { no_verbs } from '../data/no'; // import your Verb type
import { en_verbs } from '../data/en'; // import your Verb type
import { HtmlTooltip } from '../styled/Styled';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { VerbEN, VerbNO } from '../types/types';

type UnionVerbs = VerbNO | VerbEN;
interface DataTableSearchBoxProps {
  onSearch: (filteredVerbs: UnionVerbs[], value: string) => void;
}

// Extract TextField into its own function
const SearchField: React.FC<DataTableSearchBoxProps> = ({ onSearch }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    const filtered =
      language === 'Norsk'
        ? no_verbs.filter((verb) => {
            return Object.values(verb).some((val) =>
              val.toLowerCase().includes(value.toLowerCase())
            );
          })
        : en_verbs.filter((verb) => {
            return Object.values(verb).some((val) =>
              val.toLowerCase().includes(value.toLowerCase())
            );
          });

    onSearch(filtered, value);
  };

  const handleClearInput = () => {
    setSearchValue('');

    onSearch([], ''); // reset to all verbs when input is cleared
  };

  return (
    <TextField
      id="outlined-basic"
      label={`${t('what are you looking for?')} 🤔`}
      variant="outlined"
      // InputLabelProps={{ style: { padding: "0 10px" } }}
      fullWidth
      value={searchValue}
      onChange={handleInputChange}
      InputProps={{
        endAdornment: (
          <HtmlTooltip
            title={t('clear search box')}
            placement="left"
            TransitionComponent={Zoom}
          >
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleClearInput}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          </HtmlTooltip>
        ),
      }}
    />
  );
};

// Use SearchField in DataTableSearchBox
const DataTableSearchBox: React.FC<DataTableSearchBoxProps> = (props) => {
  return (
    <Box my={5} pt={1}>
      <SearchField {...props} />
    </Box>
  );
};

export default DataTableSearchBox;
