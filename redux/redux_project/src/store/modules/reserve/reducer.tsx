import produce from 'immer';

type trips = {
    id: number;
    image: string;
    status: boolean;
    title: string;
    amount: number;
};

export default function reserve(
    state: trips[] = [],
    action: {
        id: number;
        type: string;
        trip: trips;
        amount: number;
    }
) {
    switch (action.type) {
        case 'ADD_RESERVE':
            return produce(state, (draft) => {
                const tripIndex = draft.findIndex(
                    (trip: trips) => trip.id === action.trip.id
                );

                if (tripIndex >= 0) {
                    draft[tripIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.trip,
                        amount: 1,
                    });
                }
            });
        case 'REMOVE_RESERVE':
            return produce(state, (draft) => {
                const tripIndex = draft.findIndex(
                    (trip: trips) => trip.id === action.id
                );
                if (tripIndex >= 0) {
                    draft.splice(tripIndex, 1);
                }
            });

        case 'UPDATE_RESERVE': {
            if (action.amount <= 0) {
                return state;
            }

            return produce(state, (draft) => {
                const tripIndex = draft.findIndex(
                    (trip: trips) => trip.id === action.id
                );
                if (tripIndex >= 0) {
                    draft[tripIndex].amount = Number(action.amount);
                }
            });
        }
        default:
            return state;
    }
}
