export const columns = [
    {
        name: 'SensorCardID',
        label: 'Id',
        options: {
          filter: false,
        },
      },
    {
      name: 'LogTitle',
      label: 'Başlık',
      options: {
        filter: false,
      },
    },
    {
        name: 'LogDescription',
        label: 'Açıklama',
        options: {
          filter: false,
        },
      },
      {
        name: 'LogStatus',
        label: 'Durum',
        options: {
          filter: true,
        },
      },
  ];
  