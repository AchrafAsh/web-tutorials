const initialState = {
    projects: [
        {id: 1, title: 'build kindleshare', content:'create pwa with react, redux, firebase...'},
        {id: 2, title: 'build kindleshare', content:'create pwa with react, redux, firebase...'},
        {id: 3, title: 'build kindleshare', content:'create pwa with react, redux, firebase...'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;