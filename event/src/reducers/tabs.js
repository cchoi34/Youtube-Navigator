const GET_ALL_WATCHED_YOUTUBE_TABS = 'GET_ALL_WATCHED_YOUTUBE_TABS';

const initialState = [];

export default (state = initialState, action) => {
  console.log('in background reducer');
  switch (action.type) {
    case GET_ALL_WATCHED_YOUTUBE_TABS:
      console.log('GET ALL YOUTUBE TABS CASE')
      return action.tabs;
    default:
      return state;
  }
};
