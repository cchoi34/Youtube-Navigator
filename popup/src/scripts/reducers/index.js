import {storeWithMiddleware} from '../../scripts'
const GET_ALL_WATCHED_YOUTUBE_TABS = 'GET_ALL_WATCHED_YOUTUBE_TABS';

// getTabs will query for all the current Youtube tabs open as each action is dispatched
export const getTabs = (callback) => {
  console.log('in GetTabs query')
  chrome.tabs.query({
    url: '*://www.youtube.com/watch?v*'
  },
  function(tabs) {
      callback(tabs)
  }
  )
}
// **********

export const getWatchedTabs = (tabs) => {
  console.log('tabs in getWatchedTabs: ', tabs)
  return {
    type: GET_ALL_WATCHED_YOUTUBE_TABS,
    tabs
  }
}

export const showTabsInPopup = (tabs) => {
  storeWithMiddleware.dispatch((dispatch, getState) => {
    console.log('alltabs before dispatch: ', tabs)
    dispatch(getWatchedTabs(tabs));
  })   
}

export const tabsToBackgroundStore = () => {
    getTabs(showTabsInPopup);
}