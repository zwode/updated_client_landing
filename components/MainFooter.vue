<template>
	<div class="bg-brand mt-5">
		<div class="container py-5 footer">
			<div>
				<div class="d-flex justify-content-around p-2 bg-white contact d-flex-mob">
					<div>
						<a href="tel:+77777499679">
							<div class="contact-phone  d-flex">
								<div class="mr-1 mob-center">
									<img alt="Phone icon" srcset="https://img.icons8.com/ios-filled/2x/apple-phone.png 2x" style="height: 25px; width: 25px;">
								</div>
								<a href="tel:+77777499679" class="color-brand-dark phone-text align-self-center">
									Телефон
								</a>
							</div>
						</a>
					</div>
					<div>
						<a href="mailto:truehockey.kz@mail.ru">
							<div class="contact-email d-flex">
								<div class="mr-1 mob-center">
									<img srcset="https://img.icons8.com/external-smashingstocks-fill-lineal-smashing-stocks/2x/external-email-blockchain-cryptocurrency-smashingstocks-fill-lineal-smashing-stocks.png 2x" style="height: 25px; width: 25px;">
								</div>
								<a href="mailto:truehockey.kz@mail.ru" class="color-brand-dark phone-text align-self-center">
									Почта
								</a>
							</div>
						</a>
					</div>
					<a href="https://api.whatsapp.com/send?phone=77777499679">
						<div class="contact-email d-flex">
							<div class="mr-1 mob-center">
								<img alt="WhatsApp icon" srcset="https://img.icons8.com/ios-glyphs/2x/whatsapp.png 2x" style="height: 25px; width: 25px;">
							</div>
							<a class="color-brand-dark phone-text align-self-center">
								WhatsApp
							</a>
						</div>
					</a>
					<a href="https://go.2gis.com/ng98g">
						<div class="contact-email d-flex">
							<div class="mr-1 mob-center">
								<img alt="Address icon" srcset="https://img.icons8.com/ios-filled/2x/address.png 2x" style="height:25px;width:25px;">
							</div>
							<a class="color-brand-dark phone-text align-self-center">
								Адрес
							</a>
						</div>
					</a>
					<a href="https://www.instagram.com/truehockey.kz/">
						<div class="contact-email d-flex">
							<div class="mr-1 mob-center">
								<img srcset="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-1024.png 2x" style="height:25px;width:25px;">
							</div>
							<a class="color-brand-dark phone-text align-self-center">
								Instagram
							</a>
						</div>
					</a>
				</div>
				<div class="text-white justify-content-between link-white size-text-footer">
					<div class=" p-3 size-text-footer">
						<div class="d-flex justify-content-between">
							<a href="tel:+77777499679" class="mb-2">
								<div class="contact-phone mb-3 d-flex">
									<div class="mr-1">
										Телефон:
									</div>
									<a href="tel:+77777499679" class="color-brand-dark phone-text align-self-center">
										+7 (777) 749 96 79
									</a>
								</div>
							</a>
							<a href="https://www.instagram.com/truehockey.kz/" class="mb-3">
								<div class="contact-email d-flex mb-3">
									<div class="mr-1">
										Instagram:
									</div>
									<a class="color-brand-dark phone-text align-self-center">
										truehockey.kz
									</a>
								</div>
							</a>
							<a href="mailto:truehockey.kz@mail.ru" class=" mb-3 w-50">
								<div class="contact-email d-flex mb-3">
									<div class="mr-1">
										Почта:
									</div>
									<a href="mailto:truehockey.kz@mail.ru" class="color-brand-dark phone-text align-self-center">
										truehockey.kz@mail.ru
									</a>
								</div>
							</a>
						</div>
						<div class="d-flex justify-content-between">
							<a href="https://api.whatsapp.com/send?phone=77019563020" class="mb-3">
								<div class="contact-email d-flex mb-3">
									<div class="mr-1">
										WhatsApp:
									</div>
									<a class="color-brand-dark phone-text align-self-center">
										+7 (777) 749 96 79
									</a>
								</div>
							</a>
							<a href="https://go.2gis.com/ng98g" class="w-75">
								<div class="contact-email d-flex">
									<div class="mr-1">
										Адрес:
									</div>
									<a class="color-brand-dark phone-text align-self-center">
										проспект Бауыржан Момышұлы, 2а
										Алматы район, Нур-Султан Z01D7F2
									</a>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class="mb-3  d-none d-md-block">
					<div class="main_nav font-weight-bold d-flex justify-content-between w-100  align-self-center">
						<a class="nav-item" href="/">
							Главная
						</a>
						<a class="nav-item" href="/#about">
							О нас
						</a>
						<a class="nav-item" href="/#commands">
							Команда
						</a>
						<a class="nav-item" href="/#ths">
							THS
						</a>
						<b-dropdown id="dropdown-left" dropup text="Ice Service">
							<b-dropdown-item href="/cold_systems">Системы холода обеспечения ледовой площадки</b-dropdown-item>
							<b-dropdown-item href="/cooling_system">Пластиковая (ПНД) система охлаждения</b-dropdown-item>
							<b-dropdown-item href="/hockey_board">Хоккейный борт</b-dropdown-item>
							<b-dropdown-item href="/Ice_filling">Ледозаливочные машины</b-dropdown-item>
							<b-dropdown-item href="/ice_mat_system">Ситема айс матов</b-dropdown-item>
							<b-dropdown-item href="/refrigeration_units">Холодильные установки</b-dropdown-item>
						</b-dropdown>
						<a class="nav-item" href="/#galleray">
							Галлерея
						</a>

						<a class="nav-item" href="/#faq">
							FAQ
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

.contact {
	border-radius: 10px;
	margin-bottom: 20px;
}

.footer .main_nav {
	margin-top: 20px;
}

.footer .main_nav a {
	color: #ffffff!important;
	font-weight: 500;
}


.main_nav .dropdown-menu a {
	color: #000!important;
}

</style>
