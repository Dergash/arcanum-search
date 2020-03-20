import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'arcanum-search'
	}
});

export default app;