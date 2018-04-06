import { FETCH_POSTS, NEW_POST} from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            dispatch({ 
                type: FETCH_POSTS,
                payload: response.data
            })
          })
};

export const createPost = (postData) => dispatch => {
    console.log('aaaaa')
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
      };
  
    axios.post('https://jsonplaceholder.typicode.com/posts', postData, axiosConfig)
      .then((response) => {
        dispatch({
            type: NEW_POST,
            payload: postData
        })
      })
}