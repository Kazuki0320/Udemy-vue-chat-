<template>
	<v-app id="inspire">
	<sidebar />
	<v-app-bar
		app
		shrink-on-scroll
	>

		<v-toolbar-title>ルーム一覧</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn icon>
		<v-icon>mdi-dots-vertical</v-icon>
		</v-btn>
	</v-app-bar>
  
	<v-main>
		<v-container>
		<v-row>
			<v-col
			v-for="n in 24"
			:key="n"
			cols="4"
			>
			<router-link :to="{ path: '/chat', query: { user_id: n }}">
				<v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
			</router-link>
			</v-col>
		</v-row>
		</v-container>
	</v-main>
	</v-app>
  </template>
  
  <script>
import Sidebar from '@/components/layouts/Sidebar.vue'
export default {
	components: {
		Sidebar
	}
}
  </script>