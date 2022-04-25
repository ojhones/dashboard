import { formatDistanceStrict } from 'date-fns';

import pt from 'date-fns/locale/pt-BR';

export function convertDateExibitionToCallApi(associatedAt: string) {
  if (associatedAt !== null) {
    const timeSociety = formatDistanceStrict(
      new Date(associatedAt),
      new Date(),
      {
        unit: 'day',
        locale: pt,
      }
    ).split(' dias');

    const timeSocietyFormatted = timeSociety[0];

    console.log(Number(timeSocietyFormatted));

    if (Number(timeSocietyFormatted) < 365) return '-1 ano';

    if (
      Number(timeSocietyFormatted) >= 365 &&
      Number(timeSocietyFormatted) <= 729
    )
      return '+1 ano';

    if (
      Number(timeSocietyFormatted) >= 730 &&
      Number(timeSocietyFormatted) <= 1094
    )
      return '+2 anos';

    if (Number(timeSocietyFormatted) >= 1095) return '+3 anos';
  }
}
