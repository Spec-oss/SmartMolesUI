import Avatar from '@mui/material/Avatar';
export const columns = [
  {
    name: 'ImageUrl',
    label: 'Görsel',
    options: {
      filter: false,
      sort: false,
      customBodyRenderLite: () => {
        return (
          <Avatar variant="rounded"
        alt="Görsel"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
        );
      },
    },
  },
  {
    name: 'TitleTR',
    label: 'Ad',
    options: {
      filter: true,
      sort: true,
    },
  },
];
