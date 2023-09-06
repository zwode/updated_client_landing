<template>
	<div>
		<div class="container">
			<h2 class="text-white">
				Галерея
			</h2>
			<div class="d-flex flex-wrap justify-content-between">
				<img
					class="image"
					v-for="(image, i) in images.slice(0,9)"
					:src="image"
					:key="i"
					@click="index = i"
				>
			</div>
			<vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
		</div>
	</div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
import kids2 from "../assets/img/hockey_kids_rrun.jpg";
import mvp from "../assets/img/mvp.jpg";
import kids1 from "../assets/img/service-2.jpg";
import kids3 from "../assets/img/kids_hockey.jpg";
import kids4 from "../assets/img/service-4.jpg";
import boy2 from "../assets/img/service-6.jpg";
import boy from "../assets/img/boy-1.jpg";
import boy3 from "../assets/img/kids_run.jpg";
import boy4 from "../assets/img/boy-4.jpg";
import boy5 from "../assets/img/boy-5.jpg";
import boy6 from "../assets/img/boy-6.jpg";
import new1 from "../assets/img/new-1.jpg";
import new2 from "../assets/img/new-2.jpg";
import new3 from "../assets/img/new-3.jpg";
import new4 from "../assets/img/new-4.jpg";
import new5 from "../assets/img/new-5.jpg";

export default {
	components: {
		VueGallerySlideshow
	},
	data() {
		return {
			images: [
				boy,
				boy3,
				boy4,
				boy5,
				boy6,
				kids3,
				kids2,
				mvp,
				kids1,
				kids4,
				boy2,
				new1,
				new2,
				new3,
				new4,
				new5
			],
			index: null
		};
	}
};
</script>

<style>

.image {
	width: 32%;
	margin-bottom: 20px;
	cursor: pointer;
}

</style>
