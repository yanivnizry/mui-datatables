import React from 'react';
import Grow from '@mui/material/Grow';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  theme => ({
    main: {
      display: 'flex',
      flex: '1 0 auto',
    },
    searchIcon: {
      color: theme.palette.text.secondary,
      marginTop: '10px',
      marginRight: '8px',
    },
    searchText: {
      flex: '0.8 0',
    },
    clearIcon: {
      '&:hover': {
        color: theme.palette.error.main,
      },
    },
  }),
  { name: 'MUIDataTableSearch' },
);

const TableSearch = ({ options, searchText, onSearch, onHide }) => {
  const classes = useStyles();

  const handleTextChange = event => {
    onSearch(event.target.value);
  };

  const onKeyDown = event => {
    if (event.key === 'Escape') {
      onHide();
    }
  };

  return (
    <Grow appear in={true} timeout={300}>
      <div className={classes.main}>
        <SearchIcon className={classes.searchIcon} />
        <TextField
          className={classes.searchText}
          autoFocus={true}
          InputProps={{
            'data-test-id': options.textLabels.toolbar.search,
          }}
          inputProps={{
            'aria-label': options.textLabels.toolbar.search,
          }}
          value={searchText || ''}
          onKeyDown={onKeyDown}
          onChange={handleTextChange}
          fullWidth={true}
          placeholder={options.searchPlaceholder}
          {...(options.searchProps ? options.searchProps : {})}
        />
        <IconButton className={classes.clearIcon} onClick={onHide}>
          <ClearIcon />
        </IconButton>
      </div>
    </Grow>
  );
};

export default TableSearch;
