import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  () => ({
    root: {},
  }),
  { name: 'MUIDataTableHeadRow' },
);

const TableHeadRow = ({ children }) => {
  const classes = useStyles();

  return (
    <TableRow
      className={clsx({
        [classes.root]: true,
      })}>
      {children}
    </TableRow>
  );
};

TableHeadRow.propTypes = {
  children: PropTypes.node,
};

export default TableHeadRow;
