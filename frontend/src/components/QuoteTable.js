import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import { withStyles } from '@material-ui/core/styles';
import QuoteRow from './QuoteRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });

class QuoteTable extends Component {

    render() {
        let quotes = this.props.quotes;
        return (
            <Paper>
            <Table>
                <TableHead>
                <TableRow>
                    <CustomTableCell>Quote</CustomTableCell>
                    <CustomTableCell align="right">Author</CustomTableCell>
                    <CustomTableCell align="right">Category</CustomTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {quotes.map((quote, index) => <QuoteRow quote={quote} key={index} /> )}
                </TableBody>
            </Table>
            </Paper>
        );
    }
}

const mapStateToProps = state => {
	return {
		quotes: state.quotes.data,
		loading: state.quotes.loading,
		error: state.quotes.error,
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions.quotes }, dispatch);
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(withStyles(styles)(QuoteTable))
);