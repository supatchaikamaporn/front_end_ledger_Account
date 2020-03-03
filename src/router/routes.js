
const routes = [
  {
    path: '/',
    component: () => import('layouts/GlobalLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'authen', component: () => import('pages/Authen.vue') },
      { path: 'account', component: () => import('pages/Account.vue') },
      { path: 'list', component: () => import('pages/List.vue') },
    ],
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
