import { IGenericAction, ILoadingState, LoadingStatus } from "@saul/types";
import { Action as ReduxAction, AnyAction } from "redux";

type IReducerWithLoadingState<ReducerState, Action> = (
  state?: ReducerState & ILoadingState,
  action?: Action
) => ReducerState & ILoadingState;

export const withLoadingReducer = <
  ReducerState,
  Action extends ReduxAction = AnyAction
>(
  reducer: (state: ReducerState | undefined, action: Action) => ReducerState,
  genericLoadingAction: IGenericAction
): IReducerWithLoadingState<ReducerState, Action> => {
  const loadingStateMap = {
    [genericLoadingAction.requested]: LoadingStatus.loading,
    [genericLoadingAction.fulfilled]: LoadingStatus.success,
    [genericLoadingAction.rejected]: LoadingStatus.failed,
  };
  return (
    state = {
      ...reducer(undefined, { type: "" } as Action),
      loadingStatus: undefined,
    },
    action = { type: "" } as Action
  ) => {
    const rawState = reducer(state, action);
    return {
      ...rawState,
      loadingStatus: loadingStateMap[action.type] || state.loadingStatus,
    };
  };
};
