import createResource from 'redux-thunk-rest';

export default createResource('post', {
  url: 'http://ribbiterapi.herokuapp.com/posts',
});
