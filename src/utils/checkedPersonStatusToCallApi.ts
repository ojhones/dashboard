type PersonStatusProps = {
  active: boolean;
  pending: boolean;
  expired: boolean;
};

export function checkedPersonStatusToCallApi(
  checkedPersonStatus: PersonStatusProps
) {
  if (!checkedPersonStatus) {
    return '';
  }

  if (checkedPersonStatus.active === true) {
    return `&status=2`;
  }

  if (checkedPersonStatus.pending === true) {
    return `&status=1`;
  }

  if (checkedPersonStatus.expired === true) {
    return `&status=3`;
  }

  if (checkedPersonStatus.active && checkedPersonStatus.pending) {
    return `&status=1,2`;
  }

  if (checkedPersonStatus.active && checkedPersonStatus.expired) {
    return `&status=2,3`;
  }

  if (checkedPersonStatus.pending && checkedPersonStatus.expired) {
    return `&status=1,3`;
  }

  if (
    checkedPersonStatus.active &&
    checkedPersonStatus.expired &&
    checkedPersonStatus.pending
  ) {
    return `&status=1,2,3`;
  }
}
