export function checkedPersonTypeToCallApiOfStates(type: string) {
  if (type === 'socios') {
    return 1;
  }

  if (type === 'competidores') {
    return 2;
  }

  if (type === 'profissionais') {
    return 3;
  }
}
