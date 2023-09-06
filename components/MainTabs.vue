<template>
	<div class="py-5 mt-5 mb-2 tabs-brand">
		<div class="d-flex">
			<h2 class="color-brand-dark p-1">
				TRUE HOCKEY SYSTEMS
			</h2>
		</div>
		<b-card no-body>
			<b-tabs card>
				<b-tab title="TH Kids" active>
					<div class="d-flex">
						<div class="w-50 p-2 mob-w-100">
							<h6 class="font-weight-bold">
								TH Kids – это хоккейный центр для малышей c 3-х до 7 лет.
								Главной целью нашего центра является правильное развитие вашего ребенка.
							</h6>
							<p>
								<br>Мы занимаемся по авторской методике, наработанной годами и большим опытом.<br><br>
								Для самых маленьких разработана специальная обучающая программа, в которой ребенок начинает заниматься один на один с тренером, так как первые тренировки малыша очень важны для расстановки ног и в дальнейшем его техники катания.
								<br><br>Нашим преимуществом являются мини группы до 8 человек и индивидуальный подход к каждому ребенку.<br><br>
								В хоккейном центре TH kids прививают детям такие качества как: любовь к спорту, коммуникабельность, трудолюбие, дисциплина.<br>

							</p>
						</div>
						<div class="w-50 mob-w-100">
							<b-carousel
								id="carousel-1"
								v-model="slide"
								:interval="4000"
								controls
								indicators
								background="#ababab"
								img-width="100%"
								img-height="260"
								style="text-shadow: 1px 1px 2px #333;"
								@sliding-start="onSlideStart"
								@sliding-end="onSlideEnd"
							>
								<!-- Text slides with image -->
								<b-carousel-slide
									img-src="../assets/img/kids-1.jpg"
								></b-carousel-slide>
								<!-- Slides wit custom text -->
								<b-carousel-slide
									img-src="../assets/img/kids-2.jpg">
								</b-carousel-slide>
								<!-- Slides with image only -->
								<b-carousel-slide
									img-src="../assets/img/kids-3.jpg">
								</b-carousel-slide>
								<b-carousel-slide
									img-src="../assets/img/kids-4.jpg">
								</b-carousel-slide>
							</b-carousel>
						</div>
					</div>
				</b-tab>
				<b-tab title="TH Trainings">
					<div class="d-flex">
						<div class="w-50 p-2 mob-w-100">
							<h6 class="font-weight-bold">
								TH Trainings – это дополнительные занятия по развитию хоккейного мастерства.
							</h6>
							<p><br>
								Мы занимаемся по авторской методике, опираясь на собственный опыт и знания. Мы знаем, что нужно для того, чтобы достичь успехов в хоккее.<br><br>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg>Групповые тренировки;<br>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg>Индивидуальные тренировки;<br>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg>Тренировка дриблинга и броски;<br>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg>ОФП.
							</p>
						</div>
						<div class="w-50 mob-w-100">
							<b-carousel
								id="carousel-1"
								v-model="slide"
								:interval="4000"
								controls
								indicators
								background="#ababab"
								img-width="100%"
								img-height="260"
								style="text-shadow: 1px 1px 2px #333;"
								@sliding-start="onSlideStart"
								@sliding-end="onSlideEnd"
							>
								<!-- Text slides with image -->
								<b-carousel-slide
									img-src="../assets/img/boy-1.jpg"
								></b-carousel-slide>
									<!-- Slides wit custom text -->
								<b-carousel-slide
									img-src="../assets/img/boy-2.jpg">
								</b-carousel-slide>
								<!-- Slides with image only -->
								<b-carousel-slide
									img-src="../assets/img/boy-3.jpg">
								</b-carousel-slide>
								<b-carousel-slide
									img-src="../assets/img/boy-4.jpg">
								</b-carousel-slide>
								<b-carousel-slide
									img-src="../assets/img/boy-5.jpg">
								</b-carousel-slide>
							</b-carousel>
						</div>
					</div>
				</b-tab>
				<b-tab title="TH ice service">
					<div class="d-flex">
						<div class="w-50 p-2 mob-w-100">
							<h6 class="font-weight-bold">
								TH Ice Service – является профессионалом в данной отрасли.
							</h6>
							<p><br>
								Наши специалисты имеют большой опыт в области хоккейного оборудования, его поставок, постройки ледовых арен, а также их техническое сопровождение.<br><br>


								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg>Специализируемся на поставках, техническом монтаже и сопровождении всего ледового оборудования:<br>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg> Холодильное оборудование;<br>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg> Ледозаливочные машины;<br>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg> Сервисное обслуживание и ремонтные работы холодильного оборудования;<br>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg> Монтаж технологической плиты (бетона, системы айсмат, алюминиевой системы, пластиковой подачи холода);<br>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg> Установка хоккейного борта;<br>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg> Покраска ледовой поверхности, нанесение хоккейной, конькобежной разметки, нанесение рекламы под лед (любой сложности и размеров).<br>

							</p>
						</div>
						<div class="w-50 mob-w-100">
							<b-carousel
								id="carousel-1"
								v-model="slide"
								:interval="4000"
								controls
								indicators
								background="#ababab"
								img-width="100%"
								img-height="240"
								style="text-shadow: 1px 1px 2px #333;"
								@sliding-start="onSlideStart"
								@sliding-end="onSlideEnd"
							>
								<!-- Text slides with image -->
								<b-carousel-slide
									img-src="../assets/img/ice-serivce.jpg"
								></b-carousel-slide>
								<!-- Slides wit custom text -->
								<b-carousel-slide
									img-src="../assets/img/ice-serivice-3.jpg">
								</b-carousel-slide>
								<!-- Slides with image only -->
								<b-carousel-slide
									img-src="../assets/img/ice-service-2.jpg">
								</b-carousel-slide>
								<b-carousel-slide
									img-src="../assets/img/ice-serivice-4.jpg">
								</b-carousel-slide>
							</b-carousel>
						</div>
					</div>
				</b-tab>
			</b-tabs>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slide: 0,
			sliding: null
		}
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = false
		}
	}
}
</script>

<style>
	.w-50 .img-fluid {
		max-height: 550px!important;
	}

	svg {
		margin-right: 5px;
	}
</style>
