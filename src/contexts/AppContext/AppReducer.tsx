import { TAppAction, IAppContext } from ".";

export const AppState: IAppContext = {
  programState: {
    startMenu: false,
    settingOne: false,
    settingTwo: false,
  },
  dispatch: (action: TAppAction) => {},
};

export function AppReducer(
  state: IAppContext,
  action: TAppAction
): IAppContext {
  switch (action.type) {
    case "SET_PROGRAM_STATE": {
      const programName = action.payload.name;
      const programState = {
        ...state.programState,
        [programName]: !state.programState[programName],
      };
      return { ...state, programState };
    }
    default: {
      return state;
    }
  }
}
