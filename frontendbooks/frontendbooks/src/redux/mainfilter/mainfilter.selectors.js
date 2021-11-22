import { createSelector } from 'reselect'

const getMainFilter = state => state.mainFilter

export const toggle = createSelector(
    [getMainFilter],
    toggleFilter => getMainFilter.hidden
)