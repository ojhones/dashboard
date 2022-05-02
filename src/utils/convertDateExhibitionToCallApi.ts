import { format } from 'date-fns';

export function convertDateExhibitionToCallApi(associatedAt: string) {
  if (associatedAt !== null) {
    const timeSociety = format(new Date(associatedAt), 'dd/MM/yyyy');

    return timeSociety;
  }
}
