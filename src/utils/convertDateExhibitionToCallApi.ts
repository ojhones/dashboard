import { format } from 'date-fns';

export function convertDateExhibitionToCallApi(associatedAt: string) {
  if (associatedAt !== null) {
    const timeSociety = format(new Date(2014, 1, 11), 'dd/MM/yyyy');

    return timeSociety;
  }
}
