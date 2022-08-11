export const columns = [
    {
        name: 'WorkGroupID',
        label: 'Id',
        options: {
          filter: false,
          sort: false,
        },
      },
    {
      name: 'LogTitle',
      label: 'Başlık',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
        name: 'LogDescription',
        label: 'Açıklama',
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: 'LogStatus',
        label: 'Durum',
        options: {
          filter: true,
          sort: true,
        },
      },
  ];
  