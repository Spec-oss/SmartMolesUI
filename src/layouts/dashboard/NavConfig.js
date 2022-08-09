// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Anasayfa',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Müşteri Yönetimi',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Hızlı Kurulum',
    path: '/dashboard/user',
    icon: getIcon('heroicons-outline:fast-forward'),
  },
  {
    title: 'Ayarlar',
    path: '/dashboard/settings',
    icon: getIcon('tabler:plant-2'),
  },
  {
    title: 'Raporlar',
    path: '/dashboard/report',
    icon: getIcon('eva:people-fill'),
  },
];

export default navConfig;
