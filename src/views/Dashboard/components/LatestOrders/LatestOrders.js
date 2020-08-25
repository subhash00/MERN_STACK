import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { getStatesAction } from "../../../../redux/actions/getStatesAction";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800,
    height: 400
  },
  head: {
    backgroundColor: "#fff",
    position: "sticky",
    top: 0
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const stateSelector = useSelector((state) => state.GetStates);
  const dispatch = useDispatch();
  const getStatesAction2 = () => dispatch(getStatesAction());


  useEffect(() => {
    getStatesAction2();
  }, [])

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Statewise COVID-19 Cases" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.head}>STATE</TableCell>
                  <TableCell className={classes.head}>TOTAL CASES</TableCell>
                  <TableCell className={classes.head}>RECOVERED</TableCell>
                  <TableCell className={classes.head}>DEATH</TableCell>
                  <TableCell className={classes.head}>ACTIVE CASES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stateSelector.indStates.map(x => (
                  <TableRow
                    hover
                    key={x.state}
                  >
                    <TableCell>{x.state}</TableCell>
                    <TableCell>{x.confirmed}</TableCell>
                    <TableCell>{x.recovered}</TableCell>
                    <TableCell>{x.deaths}</TableCell>
                    <TableCell>{x.active}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
