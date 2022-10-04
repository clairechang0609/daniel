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
	routes,
	scrollBehavior(to, from, savedPosition) { // 頁面滾動效果
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth'
			};
		}
	}
});

export default router;
