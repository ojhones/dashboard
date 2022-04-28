import { PartnersProps } from '~/interfaces/partner';

function normalizeData(data: string): string {
  return data
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function normalizeCellphone(data: string): string {
  return data.replace(/[^\d]+/g, '');
}

export function searchInTable(
  dataTable: PartnersProps[],
  dataSearch: string
): PartnersProps[] {
  return dataTable.filter(
    (row) =>
      // Compare names
      (row.name &&
        normalizeData(row.name).includes(normalizeData(dataSearch))) ||
      // Compare nicknames
      (row.nickname &&
        normalizeData(row.nickname).includes(normalizeData(dataSearch))) ||
      // Compare email addresses
      (row.email &&
        normalizeData(row.email).includes(normalizeData(dataSearch))) ||
      // Compare cellphones
      (row.cellphone &&
        normalizeCellphone(dataSearch) &&
        normalizeCellphone(row.cellphone).includes(
          normalizeCellphone(dataSearch)
        ))
  );
}
