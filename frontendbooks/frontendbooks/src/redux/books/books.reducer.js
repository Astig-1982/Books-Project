import bookTypes from "./books.types"

const INITIAL_STATE = {
    books: [],
    error: '',
    loading: false,
    hello: 'hello'
}

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case bookTypes.LOADING_BOOKS:
            return {
                ...state,
                loading: true,
                books: [],
            }

        case bookTypes.GET_ALL_BOOKS:
            return {
                ...state,
                loading: false,
                books: action.payload
            }
            
        case bookTypes.GET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    };
}


            /*
const booksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case bookTypes.LOADING_BOOKS: 
            return {
                ...state,
                loading: true
            }

            
        
        
        case bookTypes.GET_ALL_BOOKS: 
            return {
                ...state,
                books: action.payload,
                loading: false
            }
        

        case bookTypes.GET_ERROR: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        

        default:
            return state
    }
}
*/

export default booksReducer