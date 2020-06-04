<template>
	<div id="app">
		<component :is="layout" v-if="layout" />
	</div>
</template>

<script>
	// Load layout components dynamically.
	const requireContext = require.context("~/layouts", false, /.*\.vue$/);
	const layouts = requireContext
		.keys()
		.map(file => [file.replace(/(^.\/)|(\.vue$)/g, ""), requireContext(file)])
		.reduce((components, [name, component]) => {
			components[name] = component.default || component;
			return components;
		}, {});

	console.log("layouts", layouts);
	export default {
		el: "#app",

		data: () => ({
			layout: null,
			defaultLayout: "default"
		}),

		mounted() {
			console.log("mounted");
		},

		methods: {
			/**
			 * Set the application layout.
			 *
			 * @param {String} layout
			 */

			setLayout(layout) {
				if (!layout || !layouts[layout]) {
					layout = this.defaultLayout;
				}

				console.log("setLayout", layouts[layout]);
				this.layout = layouts[layout];
			}
		}
	};
</script>
