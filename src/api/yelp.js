import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer --sYVEeqnEzC6hG-D84mloabxhiRoB2IlfA6IhnzpmdwPdP1hJOetfZHhNRKQBbxkNg2me-OSUAnD-dSBU3Tox89pf_bG5mtRKjCK_FruElJc6wlQa8CAYUlepNXX3Yx'
  }
});