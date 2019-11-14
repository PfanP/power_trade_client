import reducer, { initialState } from '../auth.reducer'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT_REQUEST,
} from 'constants/auth.const'

describe('auth reducers', () => {
    it('should return initial state', () => {
        expect(reducer()).toEqual(initialState)
    })
    it('should handle LOGIN_REQUEST', () => {
        expect(
            reducer(
                {
                    ...initialState
                },
                {type: LOGIN_REQUEST}
            )
        ).toEqual({...initialState, loading: true})
    })
    it('should handle LOGIN_SUCCESS', () => {
        const payload = {
            id: 1,
            name: 'test',
            email: 'test'
        }
        expect(
            reducer(
                {
                    ...initialState
                },
                {type: LOGIN_SUCCESS, payload}
            )
        ).toEqual({...initialState, currentUser: payload, loading: false})
    })
    it('should handle REGISTER_REQUEST', () => {
        expect(
            reducer(
                {
                    ...initialState
                },
                {type: REGISTER_REQUEST}
            )
        ).toEqual({...initialState, loading: true})
    })
    it('should handle REGISTER_SUCCESS', () => {
        const payload = {
                id: 1,
                name: 'test',
                email: 'test'
            }
        expect(
            reducer(
                {
                    ...initialState
                },
                {type: REGISTER_SUCCESS, payload}
            )
        ).toEqual({...initialState, currentUser: payload, loading: false})
    })
    it('should handle LOGOUT_REQUEST', () => {
        expect(
            reducer(
                {
                    ...initialState
                },
                {type: LOGOUT_REQUEST}
            )
        ).toEqual({...initialState, currentUser: null, error: null, loading: false})
    })
})