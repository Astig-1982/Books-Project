import mainFilterTypes from "./ mainfilter.types"

const INITIAL_STATE = {
    hidden: false
}

const mainFilterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case mainFilterTypes.TOGGLEFILTER:
            return {
                ...state,
                hidden: !state.hidden,
            }

        default:
            return state;
    };
}

export default mainFilterReducer