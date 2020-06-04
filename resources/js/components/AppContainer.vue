<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>mdi-email</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Contact</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link @click="logout">
					<v-list-item-action>
						<v-icon>mdi-power</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Log out</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app color="indigo" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Application</v-toolbar-title>
		</v-app-bar>

		<v-content>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col class="text-center">
						<v-tooltip left>
							<template v-slot:activator="{ on }">
								<v-btn :href="source" icon large target="_blank" v-on="on">
									<v-icon large>mdi-code-tags</v-icon>
								</v-btn>
							</template>
							<span>Source</span>
						</v-tooltip>
					</v-col>
				</v-row>
				<v-row align="center">
					<v-col class="text-center" cols="12" sm="4">
						<div class="my-2">
							<v-btn small>Normal</v-btn>
						</div>
						<div class="my-2">
							<v-btn small color="primary">Primary</v-btn>
						</div>
						<div class="my-2">
							<v-btn small color="error">Error</v-btn>
						</div>
						<div class="my-2">
							<v-btn small disabled>Disabled</v-btn>
						</div>
					</v-col>
					<v-col class="text-center" cols="12" sm="4">
						<div class="my-2">
							<v-btn>Normal</v-btn>
						</div>
						<div class="my-2">
							<v-btn color="primary">Primary</v-btn>
						</div>
						<div class="my-2">
							<v-btn color="error">Error</v-btn>
						</div>
						<div class="my-2">
							<v-btn disabled>Disabled</v-btn>
						</div>
					</v-col>
					<v-col class="text-center" cols="12" sm="4">
						<div class="my-2">
							<v-btn large>Normal</v-btn>
						</div>
						<div class="my-2">
							<v-btn large color="primary">Primary</v-btn>
						</div>
						<div class="my-2">
							<v-btn large color="error">Error</v-btn>
						</div>
						<div class="my-2">
							<v-btn large disabled>Disabled</v-btn>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</v-content>
		<v-footer color="indigo" app>
			<span class="white--text">&copy; 2020</span>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		props: {
			source: String
		},
		data: () => ({
			drawer: null
		}),
		methods: {
			logout() {}
		}
	};
</script>