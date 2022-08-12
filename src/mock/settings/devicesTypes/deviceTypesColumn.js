export const columns = [
  {
    name: 'Name',
    label: 'Ad',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Edit",
    options: {
      filter: false,
      sort: false,
      empty: true,
      customBodyRenderLite: (data) => {
        return (
          <button style={{width:'50px'}} onClick={() => window.alert(`Clicked "Edit" for row with dataIndex of `)}>
            Edit
          </button>
        );
      }
    }
  },
];
