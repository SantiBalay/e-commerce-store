import SeccionData from '../../data/SeccionData'

//la verdad no se si vale la pena meter esto en redux pero bueno

const INITIAL_STATE = {
    sectionData: SeccionData
}

const directorioReducer = (state = INITIAL_STATE ,action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default directorioReducer