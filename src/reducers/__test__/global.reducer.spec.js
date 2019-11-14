import reducer, { initialState } from 'reducers/global.reducer'
import { SET_MESSAGE } from 'constants/global.const'

describe('auth reducers', () => {
    it('should return initial state', () => {
        expect(reducer()).toEqual(initialState)
    })
    it('should handle SET_MESSAGE', () => {
        const payload = {
            type: 'test',
            message: 'test',
            title: 'test',
            visible: true
        }
        expect(
            reducer(
                {
                    ...initialState
                },
                {type: SET_MESSAGE, payload}
            )
        ).toEqual({...initialState, alert: payload})
    })
})