import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from 'utils/history'
import globalReducer from './global.reducer'
import authReducer from './auth.reducer'
import userReducer from './user.reducer'
import recordReducer from './record.reducer'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    auth: authReducer,
    user: userReducer,
    record: recordReducer,
    router: connectRouter(history),
    ...injectedReducers,
  })

  return rootReducer
}
