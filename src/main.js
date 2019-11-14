import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
		el: '#start',
		data: {
			message: "Hello World",
			names: ['Musa', 'Abdullahi', 'Faruq'],
			skills:[]
		},
		mounted(){
			// axios.get('http://localhost:8000/skills').then(response=> this.skills=response.data)
		}
	})