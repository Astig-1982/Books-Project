import bookTypes from "./books.types"

INITIAL_STATE = {
    books: [],
    error: '',
    loading: false
}

const booksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case bookTypes.LOADING_BOOKS: {
            return {
                ...state,
                loading: true
            }
        }
        
        case bookTypes.GET_BOOKS: {
            return {
                ...state,
                error: 'OOPS, IT SEEMS THERE WAS AN ERROR WITH THE SERVER',
                loading: false
            }
        }

        case bookTypes.GET_ERROR: {
            return {
                ...state,
                books: action.payload,
                loading: false
            }
        }
    }
}

export default booksReducer