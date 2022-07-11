import * as types from './ActionTypes';

export const openNavbarSaveChange = (statusNavbar) => ({
    type: types.OPEN_NAVBAR_SAVE_CHANGE,
    payload: statusNavbar
})

export const fetchListFacebookPage = (listFacebookPage) => ({
    type: types.FETCH_LIST_FACEBOOK_PAGE,
    payload: listFacebookPage
})

export const deleteFacebookPage = (id) => ({
    type: types.DELETE_FACEBOOK_PAGE,
    payload: id
})

export const facebookPageEvents = (pageEvents) => ({
    type: types.FETCH_LIST_FACEBOOK_PAGE_EVENTS,
    payload: pageEvents
})