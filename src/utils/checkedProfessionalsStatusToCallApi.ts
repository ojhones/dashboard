type ProfessionalsStatusProps = {
  accredited: boolean;
  pending: boolean;
  expired: boolean;
};

export function checkedProfessionalsStatusToCallApi(
  checkedPersonStatus: ProfessionalsStatusProps
) {
  const status = [];

  if (!checkedPersonStatus) {
    return '';
  }

  if (checkedPersonStatus.accredited) {
    status.push(2);
  }

  if (checkedPersonStatus.pending) {
    status.push(1);
  }

  if (checkedPersonStatus.expired) {
    status.push(3);
  }

  return `&status=${status.join(',')}`;
}
