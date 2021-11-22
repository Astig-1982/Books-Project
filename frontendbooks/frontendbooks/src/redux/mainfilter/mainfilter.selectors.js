import { createSelector } from 'reselect'

const getMainFilter = state => state.mainFilter

export const toggledFilter = createSelector(
    [getMainFilter],
    getMainFilter => getMainFilter.hidden
)