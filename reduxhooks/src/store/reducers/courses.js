const INITIAL_STATE = {
    data: [
        'React Native',
        'React JS',
        'Node JS'
    ],
}

function courses(state = INITIAL_STATE, action) {
    switch (action.type){
        case 'ADD_COURSE' :
            return { ... state, data : [ ... state.data, action.title]}
        default:
            return state;
    }
}

export default courses