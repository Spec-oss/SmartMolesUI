export const columns = [
  {
    name: 'name',
    label: 'Ad',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'surName',
    label: 'Soyad',
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: 'email',
    label: 'E-mail',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'phone',
    label: 'Telefon',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'country',
    label: 'Ülke',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'city',
    label: 'Şehir',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "isAdmin",
    label: "Kullanıcı Türü",
     cell: (row) =>
        row.isAdmin ? (
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            checked
            disabled="disabled"
          />
        ) : (
          <center>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              disabled="disabled"
            />
          </center>
        )
    
  },
  {
    name: "Aktif mi?",
    selector: row => row.isActive,
     cell: (row) =>
        row.isActive ? (
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            checked
            disabled="disabled"
          />
        ) : (
          <center>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              disabled="disabled"
            />
          </center>
        )
  }
];
