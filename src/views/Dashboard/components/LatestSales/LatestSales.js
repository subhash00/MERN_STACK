import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCasesAction } from "../../../../redux/actions/getCasesAction";

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestSales = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const casesSelector = useSelector((state) => state.GetCases);
  const dispatch = useDispatch();
  const getCasesAction2 = () => dispatch(getCasesAction());

  useEffect(() => {
    getCasesAction2();
  }, [])

  return (
    <Card
      {...rest }
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            size="small"
            variant="text"
          >
            Last 7 days <ArrowDropDownIcon />
          </Button>
        }
        title="India-COVID-19 Tracker"
      />
      <Divider />
       <CardContent> 
          <div>
          <BarChart
            width={600}
            height={500}
            data={casesSelector.totalCases}
            margin={{
              top: 20, right: 10, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalrecovered" stackId="b" fill="#3df50f" />
            <Bar dataKey="totalconfirmed" stackId="c" fill="#30e5f2" />
            <Bar dataKey="totaldeceased" stackId="a" fill="#f50f1e" />
          </BarChart>
          </div>
       </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Overview <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;
