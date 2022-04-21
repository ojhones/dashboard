type PersonStatusProps = {
  active: boolean;
  pending: boolean;
  expired: boolean;
};

let STATUS = [''];

export function checkedPersonStatusToCallApi(
  checkedPersonStatus: PersonStatusProps
) {
  if (!checkedPersonStatus) {
    return;
  }

  if (checkedPersonStatus.active === true) {
    STATUS = ['2'];
  }

  if (checkedPersonStatus.pending === true) {
    STATUS = ['1'];
  }

  if (checkedPersonStatus.expired === true) {
    STATUS = ['3'];
  }

  if (checkedPersonStatus.active && checkedPersonStatus.pending === true) {
    STATUS = ['1', '2'];
  }

  if (checkedPersonStatus.active && checkedPersonStatus.expired === true) {
    STATUS = ['2', '3'];
  }

  if (checkedPersonStatus.pending && checkedPersonStatus.expired === true) {
    STATUS = ['1', '3'];
  }

  if (
    checkedPersonStatus.active &&
    checkedPersonStatus.expired &&
    checkedPersonStatus.pending === true
  ) {
    STATUS = ['1', '2', '3'];
  }

  return STATUS;
}
