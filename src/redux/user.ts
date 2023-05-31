import { User } from '@/interfaces/user.interface';

// define action types
export const LOG_IN = 'user/LOG_IN' as const;
export const LOG_OUT = 'user/LOG_OUT' as const;

// define action creators
export const logIn = (user: User) => ({
    type: LOG_IN,
    payload: user
});
export const logOut = () => ({
    type: LOG_OUT
});

type Action = ReturnType<typeof logIn> | ReturnType<typeof logOut>;

// define initial state
const initialState: User = {
    id: '12345',
    login: true
};

// define reducer
export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                id: action.payload.id,
                login: true
            };
        case LOG_OUT:
            return {
                ...state,
                id: '',
                password: '',
                login: false
            };
        default:
            return state;
    }
}
