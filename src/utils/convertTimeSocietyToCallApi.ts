export function convertTimeSocietyToCallApi(timeSociety: string) {
  if (
    !timeSociety ||
    timeSociety === 'timeSelect' ||
    timeSociety === 'custom'
  ) {
    return '';
  }

  if (timeSociety === 'week') {
    return '&associationTime=7d';
  }

  if (timeSociety === 'month') {
    return '&associationTime=30d';
  }

  if (timeSociety === 'quarter') {
    return '&associationTime=90d';
  }

  if (timeSociety === '1year') {
    return '&associationTime=+1y';
  }

  if (timeSociety === '2year') {
    return '&associationTime=+2y';
  }
}

export function convertCustomTimeSocietyToCallApi(
  timeSociety: string,
  startTimeSociety: string,
  finishTimeSociety: string
) {
  if (timeSociety === 'custom') {
    if (!!startTimeSociety && !!finishTimeSociety) {
      return `&associationDateFrom=${startTimeSociety}&associationDateTo=${finishTimeSociety}`;
    }
  }
}
