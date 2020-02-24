import {createSelector} from 'reselect'

export const selectDirectory = (state) => state.directorio

export const selectDirectorySection = createSelector(
    [selectDirectory],
    (directorio) => directorio.sectionData
)