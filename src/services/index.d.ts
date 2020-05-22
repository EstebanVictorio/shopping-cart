export const enum ServiceActionType {
  IDLE,
  FAILED,
  SUCCESS,
  LOADING,
}

export type IdleState = {
  error: false
  loading: false
  success: false
  errorMsg: null
}

export type LoadingState = {
  error: false
  loading: true
  success: false
  errorMsg: null
}

export type SuccessState = {
  error: false
  loading: false
  success: true
  errorMsg: null
}

export type FailureState = {
  error: true
  loading: false
  success: false
  errorMsg?: string
}

export type ServiceState =
  | IdleState
  | LoadingState
  | SuccessState
  | FailureState
