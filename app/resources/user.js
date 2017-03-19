import createResource from 'redux-thunk-rest';

export default createResource('user', {
  url: 'http://ribbeterapi.herokuapp.com/users'
});
