export function convertStateToCallApi(states: string[]) {
  if (states.length) {
    return `&location=${states}`;
  }

  return '';
}
