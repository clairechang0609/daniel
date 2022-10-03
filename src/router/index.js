import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('@/views/Index'),
		children: [
			{
				name: 'Home',
				path: '',
				component: () => import('@/views/Home')
			},
			{
				name: 'Work',
				path: 'work/:id',
				component: () => import('@/views/Work')
			}
		]
	},
	{
		name: 'NotFound',
		path: '/:pathMatch(.*)*',
		component: () => import('@/views/Wrong')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

// 路由跳轉前
router.beforeEach(async (to, from, next) => {});

export default router;
