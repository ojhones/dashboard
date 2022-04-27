import { PartnersProps } from '~/interfaces/partner';

function normalizeData(data: string): string {
  return data
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function normalizeCellphone(data: string): string {
  console.log(data, 'AQUI<');

  return data.replace(/[^\d]+/g, '');
}

export function searchInTable(
  dataTable: PartnersProps[],
  dataSearch: string
): PartnersProps[] {
  return dataTable.filter(
    (row) =>
      (row.name &&
        normalizeData(row.name).includes(normalizeData(dataSearch))) ||
      (row.nickname &&
        normalizeData(row.nickname).includes(normalizeData(dataSearch))) ||
      (row.email &&
        normalizeData(row.email).includes(normalizeData(dataSearch))) ||
      (row.cellphone &&
        normalizeCellphone(row.cellphone).includes(
          normalizeCellphone(dataSearch)
        ))
  );
}
