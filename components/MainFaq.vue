<template>
	<div class="faq_area section_padding_130 mb-5" id="faq">
		<div class="d-flex mt-5">
			<h2 class="color-brand-dark p-1">
				Часто задаваемые вопросы:
			</h2>

		</div>
		<b-button v-b-toggle.collapse-4 class="card w-100 color-brand-dark mt-2">Экипировку предоставляете?</b-button>
		<b-collapse id="collapse-4" class="mt-2">
			<b-card>
				<p>Экипировку предоставляем на пробное занятие</p>
			</b-card>
		</b-collapse>
		<b-button v-b-toggle.collapse-5 class="card w-100 color-brand-dark mt-2">Как проходят занятия</b-button>
		<b-collapse id="collapse-5" class="mt-2">
			<b-card>
				<p>Занятия проходят 45 минут на льду после 30 минут в спортивном зале</p>
			</b-card>
		</b-collapse>
		<b-button v-b-toggle.collapse-6 class="card w-100 color-brand-dark mt-2">Если малыш не умеет кататься?</b-button>
		<b-collapse id="collapse-6" class="mt-2">
			<b-card>
				<p>Ничего страшного, мы научим вашего малыша.</p>
			</b-card>
		</b-collapse>
		<b-button v-b-toggle.collapse-7 class="card w-100 color-brand-dark mt-2">Какая стоимость занятий?</b-button>
		<b-collapse id="collapse-7" class="mt-2">
			<b-card>
				<p>3 раза в неделю, в месяц 12 занятий стоимость 50 тыс</p>
			</b-card>
		</b-collapse>
		<b-button v-b-toggle.collapse-8 class="card w-100 color-brand-dark mt-2">Со скольки лет приниматете?</b-button>
		<b-collapse id="collapse-8" class="mt-2">
			<b-card>
				<p>Мы принимаем малышей с 3х лет</p>
			</b-card>
		</b-collapse>
		<b-button v-b-toggle.collapse-9 class="card w-100 color-brand-dark mt-2 text-left">Когда можно записаться на пробное занятие?</b-button>
		<b-collapse id="collapse-9" class="mt-2">
			<b-card>
				<p>На пробное занятие могу подобрать удобное для вас время</p>
			</b-card>
		</b-collapse>
		<b-button v-b-toggle.collapse-10 class="card w-100 color-brand-dark mt-2">Пробное занятие бесплатно?</b-button>
		<b-collapse id="collapse-10" class="mt-2">
			<b-card>
				<p>Да</p>
			</b-card>
		</b-collapse>
		<b-button v-b-toggle.collapse-12 class="card w-100 color-brand-dark mt-2">Сколько детей в группе? </b-button>
		<b-collapse id="collapse-12" class="mt-2">
			<b-card>
				<p>Мини группы по 8 человек</p>
			</b-card>
		</b-collapse>
	</div>
</template>

<script>

export default {

}
</script>

<style>
.btn-secondary:hover {
	background: #002244!important;
}

.faq_area p {
	margin-bottom: 0!important;
}

.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
	color: #000000!important;
}

.btn-secondary:focus, .btn-secondary.focus {
	color: #000000;
}
</style>
