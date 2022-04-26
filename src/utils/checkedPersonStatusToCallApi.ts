type PersonStatusProps = {
  active: boolean;
  pending: boolean;
  expired: boolean;
};

export function checkedPersonStatusToCallApi(
  checkedPersonStatus: PersonStatusProps
) {
  const carlos = [];

  if (!checkedPersonStatus) {
    return '';
  }

  if (checkedPersonStatus.active) {
    carlos.push(2);
  }

  if (checkedPersonStatus.pending) {
    carlos.push(1);
  }

  if (checkedPersonStatus.expired) {
    carlos.push(3);
  }

  return `&status=${carlos.join(',')}`;
}
