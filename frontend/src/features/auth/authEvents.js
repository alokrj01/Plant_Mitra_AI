let onAuthenticationFailure = null;

export function setAuthenticationFailureHandler(handler) {
  onAuthenticationFailure = handler;
}

export function notifyAuthenticationFailure() {
  if (onAuthenticationFailure) {
    onAuthenticationFailure();
  }
}
