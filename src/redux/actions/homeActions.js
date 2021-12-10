import API from '../../utility/API';
import {FETCH_ROBOTS, FILTER_ROBOTS} from '../const';

export const getRobots = () => dispatch => {
  API.get('/api/robots').then(res => {
    dispatch({
      type: FETCH_ROBOTS,
      payload: res.data.data,
    });
  });
};

export const filterRobots = type => (dispatch, getState) => {
  const {
    robots: {robots},
  } = getState();
  dispatch({
    type: FILTER_ROBOTS,
    payload:
      type == 'All' ? robots : robots.filter(robot => robot.material == type),
  });
};
