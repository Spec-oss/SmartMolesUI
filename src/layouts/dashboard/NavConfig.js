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
    title: 'Hub Yönetimi',
    path: '/dashboard/user',
    icon: getIcon('ic:outline-device-hub'),
  },
  {
    title: 'Smart Capillarity',
    path: '/dashboard/user',
    icon: getIcon('teenyicons:plant-outline'),
  },
  {
    title: 'Smart Root',
    path: '/dashboard/user',
    icon: getIcon('fluent:branch-24-filled'),
  },
  {
    title: 'Hızlı Kurulum',
    path: '/dashboard/user',
    icon: getIcon('heroicons-outline:fast-forward'),
  },
  {
    title: 'Cihaz Kurulumu',
    path: '/dashboard/user',
    icon: getIcon('fluent:phone-link-setup-24-regular'),
  },
  {
    title: 'Cihazlar ve Yetkilendirme',
    path: '/dashboard/devices',
    icon: getIcon('fluent:phone-link-setup-24-regular'),
  },
  {
    title: 'Ayarlar',
    path: '/dashboard/user',
    icon: getIcon('tabler:plant-2'),
  },
  {
    title: 'Raporlar',
    path: '/dashboard/report',
    icon: getIcon('eva:people-fill'),
  },
  
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
