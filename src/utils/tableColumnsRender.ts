type TableColumnsRenderKeyProps =
  | ''
  | 'socios'
  | 'profissionais'
  | 'competidores';

export function tableColumnsRender(typePersonKey?: TableColumnsRenderKeyProps) {
  if (!typePersonKey) {
    return [];
  }

  const partnerColumns = [
    {
      key: 'status',
      title: 'Status',
    },

    {
      key: 'name',
      title: 'Nome',
    },

    {
      key: 'nickname',
      title: 'Apelido',
    },

    {
      key: 'email',
      title: 'E-mail',
    },

    {
      key: 'localization',
      title: 'Localização',
    },

    {
      key: 'cellphone',
      title: 'Telefone',
    },

    {
      key: 'associatedAt',
      title: 'Data de associação',
    },
  ];

  const professionalColumns = [
    {
      key: 'name',
      title: 'Nome',
    },

    {
      key: 'surname',
      title: 'Apelido',
    },

    {
      key: 'jobFunction',
      title: 'Função',
    },

    {
      key: 'cpf',
      title: 'CPF',
    },

    {
      key: 'phone',
      title: 'Telefone',
    },

    {
      key: 'localization',
      title: 'Localização',
    },
  ];

  const competitorsColumns = [{}];

  const tableColumns = {
    socios: partnerColumns,
    profissionais: professionalColumns,
    competidores: competitorsColumns,
  };

  return tableColumns[typePersonKey];
}
