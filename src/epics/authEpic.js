import { from } from "exjs";
import {
  switchMap,
  mergeMap,
  startWith,
  catchError,
  concat
} from "exjs/operators";
import { ofType } from "redux-observable";

import * as ActionTypes from "../constants/ActionTypes";
import * as actions from "../actions";
import { fakeAuth } from "../services/authService";

export default function authEpic(action$, store) {
  return action$.pipe(
    ofType(ActionTypes.GET_AUTH),
    switchMap(action =>
      from(fakeAuth(action.username, action.password)).pipe(
        mergeMap(auth => [actions.setAuth(auth), actions.hideErrorMessage()]),
        //액션이 하나라면 아래와 같이 map을 이용해도 됨
        //map(auth => actions.setAuth(auth)),
        startWith(actions.loadingStart()),
        catchError(err => [actions.showErrorMessage(err.message)]),
        concat([actions.loadingEnd()])
      )
    )
  );
}
