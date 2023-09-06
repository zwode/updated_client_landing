<template>
	<div class="bg-image-main ">
		<div class="container pt-2 d-none d-lg-block">
			<div class="mb-3 d-flex justify-content-between">
				<div class=" align-self-center">
					<a href="/" class="logo">
						<img src="../assets/img/logo_main.jpg" alt="">
					</a>
				</div>
				<div class="main_nav font-weight-bold d-flex justify-content-between  align-self-center">
					<a class="nav-item" href="/">
						Главная
					</a>
					<a class="nav-item" href="/#about">
						О нас
					</a>
					<a class="nav-item" href="/#commands">
						Команда
					</a>
					<a class="nav-item" href="/#ths" onclick="document.querySelectorAll('.card-header .nav-item a')[3].click()">
						TH kids
					</a>
					<a class="nav-item" href="/#ths" onclick="document.querySelectorAll('.card-header .nav-item a')[4].click()">
						TH trainings
					</a>
					<b-dropdown id="dropdown-left" text="TH ice service">
						<b-dropdown-item href="/#ths" onclick="document.querySelectorAll('.card-header .nav-item a')[5].click()">Ice Service</b-dropdown-item>
						<b-dropdown-item href="/cold_systems">Системы холода обеспечения ледовой площадки</b-dropdown-item>
						<b-dropdown-item href="/cooling_system">Пластиковая (ПНД) система охлаждения</b-dropdown-item>
						<b-dropdown-item href="/hockey_board">Хоккейный борт</b-dropdown-item>
						<b-dropdown-item href="/Ice_filling">Ледозаливочные машины</b-dropdown-item>
						<b-dropdown-item href="/ice_mat_system">Ситема айс матов</b-dropdown-item>
						<b-dropdown-item href="/refrigeration_units">Холодильные установки</b-dropdown-item>
					</b-dropdown>
					<a class="nav-item" href="/#galleray">
						Галерея
					</a>

					<a class="nav-item" href="/#faq">
						FAQ
					</a>
				</div>
				<div class="contact-phone align-self-center ">
					<a href="tel:+77777499679" class="text-white phone-text">
						+7 (777) 749 96 79
					</a>
				</div>
			</div>
		</div>
		<div class="d-block d-sm-none">
			<b-navbar toggleable="lg" variant="dark" type="dark" class="navbar" fixed="top">
				<b-navbar-brand href="#">THS</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<b-nav-item class="nav-item" href="/">
							Главная
						</b-nav-item>
						<b-nav-item class="nav-item" href="/#about">
							О нас
						</b-nav-item>
						<b-nav-item class="nav-item" href="/#commands">
							Команда
						</b-nav-item>
						<b-nav-item class="nav-item" href="/#ths" onclick="document.querySelectorAll('.card-header .nav-item a')[3].click()">
							TH kids
						</b-nav-item>
						<b-nav-item href="/#ths" onclick="document.querySelectorAll('.card-header .nav-item a')[4].click()">
							TH trainings
						</b-nav-item>

						<b-nav-item-dropdown text="TH ice service" right>
							<b-dropdown-item href="/#ths" onclick="document.querySelectorAll('.card-header .nav-item a')[5].click()">Ice Service</b-dropdown-item>
							<b-dropdown-item href="/cold_systems">Системы холода обеспечения ледовой площадки</b-dropdown-item>
							<b-dropdown-item href="/cooling_system">Пластиковая (ПНД) система охлаждения</b-dropdown-item>
							<b-dropdown-item href="/hockey_board">Хоккейный борт</b-dropdown-item>
							<b-dropdown-item href="/Ice_filling">Ледозаливочные машины</b-dropdown-item>
							<b-dropdown-item href="/ice_mat_system">Ситема айс матов</b-dropdown-item>
							<b-dropdown-item href="/refrigeration_units">Холодильные установки</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item href="/#galleray">
							Галлерея
						</b-nav-item>
						<b-nav-item class="nav-item" href="/#faq">
							FAQ
						</b-nav-item>
						<b-nav-item href="tel:+77777499679" class="text-white phone-text text-left">
							+7 (777) 749 96 79
						</b-nav-item>
						<div class="whatsapp-icon">
							<a href="https://api.whatsapp.com/send?phone=77777499679" class="pos-link">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6 C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"/><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6 C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3 L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"/><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3 L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24 c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2 c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"/><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8 l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"/><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0 s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3 c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9 c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8 c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"/></svg>
							</a>
						</div>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>

h6 {
	margin-bottom: 0;
}

.brd-radius {
	border-radius: 9px;
}

.main_nav {
	border-radius: 9px;
	padding: 9px;
}

.nav-item {
	color: #fff;
	font-weight: 350;
	margin-right: 20px;
	align-items: center;
	align-self: center;
}

.nav-item:hover {
	color: #00fff1;
}

.logo img {
	width: 60px;
	height: 75px;
}

.contact-phone {
	border-radius: 9px;
	padding: 9px;
	width: 75px;
	position: relative;
}

.contact-phone a {
	position: absolute;
	left: -75px;
	top: 0;
}

.phone-text {
	width: 150px;
}

</style>
