import { data } from "../data"

const initState = {
    message: {},
    person: {
        email: '',
        name: ''
    },
    department: '',
    loading: true,
    newsletter: false,
    error: '',
    data: data
}

const reducer = (state=initState, action) => {
    switch (action.type){
        case 'SEND_MESSAGE':
            return {
                ...state,
                person: {
                    email: action.payload.person.email,
                    name: action.payload.person.name
                },
                message: action.payload.message,
                department: action.payload.department,
                error: ''
            }
        default: 
            return state
    }

}

export default reducer