const initState = {
    message: {},
    person: {
        email: '',
        name: ''
    },
    department: '',
    loading: true,
    showData: [],
    error: ''
}

export default reducer = (state=initState, action) => {
    switch (action.type){
        case 'SEND_MESSAGE':
            return {
                ...state,
                person: {
                    email: action.payload.message.email,
                    name: action.payload.message.name
                },
                message: action.payload.message,
                department: action.payload.department,
                error: ''
            }
        default: 
            return state
    }

}