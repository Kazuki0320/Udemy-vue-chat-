<template>
	<v-app id="inspire">
	<sidebar />
	<v-app-bar
		app
		shrink-on-scroll
	>

		<v-toolbar-title>ルーム一覧</v-toolbar-title>
		<CreateRoom />

		<v-spacer></v-spacer>

		<v-btn icon>
		<v-icon>mdi-dots-vertical</v-icon>
		</v-btn>
	</v-app-bar>
  
	<v-main>
		<v-container>
		<v-row>
			<v-col
				v-for="room in rooms"
				:key="room.id"
				cols="4"
			>
			<router-link :to="{ path: '/chat', query: { room_id: room.id }}">
				<v-avatar class="mb-4" color="grey darken-1" size="64">
					<img
						src="https://cdn.vuetifyjs.com/images/john.jpg"
						alt="John"
						v-if="!rooms.thumbnailUrl"
					>
					<img
						:src="room.thumbnailUrl"
						alt="John"
						v-if="rooms.thumbnailUrl"
					>
				</v-avatar>
			</router-link>
			</v-col>
			<!-- <v-col
			v-for="n in 24"
			:key="n"
			cols="4"
			>
			<router-link :to="{ path: '/chat', query: { user_id: n }}">
				<v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
			</router-link>
			</v-col> -->
		</v-row>
		</v-container>
	</v-main>
	</v-app>
  </template>
  
  <script>
import Sidebar from '@/components/layouts/Sidebar.vue'
import CreateRoom from '@/components/modal/CreateRoom.vue'
import firebase from "@/firebase/firebase"

export default {
	components: {
		Sidebar,
		CreateRoom
	},
	data: () => ({
		rooms: []
	}),
	mounted() {
		this.getRooms()
	},
	methods: {
		async getRooms() {
		this.rooms = []
		const roomRef = firebase.firestore().collection("rooms")
		const snapshot = await roomRef.get()
		console.log("snapshot", snapshot);

		// snapshot.forEach(doc => {
		// 	console.log(doc.data())
		// })

		snapshot.docs.map(doc => {
			console.log(doc.data())
			this.rooms.push(doc.data())
		})

		}
	}
}
  </script>