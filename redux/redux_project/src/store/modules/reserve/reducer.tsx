export default function reserve(state = [], action: any) {
    switch (action.type) {
        case 'ADD_RESERVE':
            return [...state, action.trip];
        default:
            return state;
    }
}
