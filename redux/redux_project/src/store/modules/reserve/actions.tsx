export function addReserve(trip: any) {
    return {
        type: 'ADD_RESERVE',
        trip,
    };
}

export function removeReserve(id: number) {
    return {
        type: 'REMOVE_RESERVE',
        id,
    };
}

export function updateAmountReserve(id: number, amount: number) {
    return {
        type: 'UPDATE_RESERVE',
        id,
        amount,
    };
}

export function decrementAmountReserve(id: number, amount: number) {
    return {
        type: 'UPDATE_RESERVE',
        id,
        amount,
    };
}
