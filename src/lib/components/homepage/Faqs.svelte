<script lang="ts">
	const faqs = [
		{
			question: 'Como posso reportar uma área poluída no EcoReport?',
			answer:
				'Todos os reports de poluição submetidos no EcoReport são visíveis para todos os utilizadores. Acreditamos na transparência de informações para conscientizar a comunidade e as entidades responsáveis pela limpeza do território nacional.'
		},
		{
			question: 'Quem pode ver os reports de poluição submetidos no EcoReport?',
			answer:
				'Todos os reports de poluição submetidos no EcoReport são visíveis para todos os utilizadores. Acreditamos na transparência de informações para conscientizar a comunidade e as entidades responsáveis pela limpeza do território nacional.'
		},
		{
			question: 'Como as entidades responsáveis pelos reports de poluição são identificadas?',
			answer:
				'Todos os reports de poluição submetidos no EcoReport são visíveis para todos os utilizadores. Acreditamos na transparência de informações para conscientizar a comunidade e as entidades responsáveis pela limpeza do território nacional.'
		},
		{
			question: 'Existe alguma forma de acompanhar o progresso da resolução dos reports?',
			answer:
				'Todos os reports de poluição submetidos no EcoReport são visíveis para todos os utilizadores. Acreditamos na transparência de informações para conscientizar a comunidade e as entidades responsáveis pela limpeza do território nacional.'
		},
		{
			question: 'Posso contribuir para a limpeza das áreas poluídas reportadas no EcoReport?',
			answer:
				'Todos os reports de poluição submetidos no EcoReport são visíveis para todos os utilizadores. Acreditamos na transparência de informações para conscientizar a comunidade e as entidades responsáveis pela limpeza do território nacional.'
		},
		{
			question:
				'Como posso entrar em contato com a equipa do EcoReport em caso de dúvidas ou problemas?',
			answer:
				'Todos os reports de poluição submetidos no EcoReport são visíveis para todos os utilizadores. Acreditamos na transparência de informações para conscientizar a comunidade e as entidades responsáveis pela limpeza do território nacional.'
		}
	];
</script>

<h2 class="text-eco-gradient text-5xl leading-normal font-bold text-center">
	Perguntas Frequentes
</h2>

<div class="hs-accordion-group divide-y mt-10 last:border-b">
	{#each faqs as faq}
		<div
			class="hs-accordion bg-white -mt-px"
			id="hs-basic-with-title-and-arrow-stretched-heading-one"
		>
			<button
				class="hs-accordion-toggle hs-accordion-active:text-dark-green group py-8 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left transition text-2xl"
				aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
			>
				{faq.question}

				<svg
					class="hs-accordion-active:hidden hs-accordion-active:text-dark-green hs-accordion-active:group-hover:text-dark-green block w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<g clip-path="url(#clip0_329_62718)">
						<path
							d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"
							fill="#1F2937"
						/>
						<path
							d="M8 4C8.13261 4 8.25979 4.05268 8.35355 4.14645C8.44732 4.24021 8.5 4.36739 8.5 4.5V7.5H11.5C11.6326 7.5 11.7598 7.55268 11.8536 7.64645C11.9473 7.74021 12 7.86739 12 8C12 8.13261 11.9473 8.25979 11.8536 8.35355C11.7598 8.44732 11.6326 8.5 11.5 8.5H8.5V11.5C8.5 11.6326 8.44732 11.7598 8.35355 11.8536C8.25979 11.9473 8.13261 12 8 12C7.86739 12 7.74021 11.9473 7.64645 11.8536C7.55268 11.7598 7.5 11.6326 7.5 11.5V8.5H4.5C4.36739 8.5 4.24021 8.44732 4.14645 8.35355C4.05268 8.25979 4 8.13261 4 8C4 7.86739 4.05268 7.74021 4.14645 7.64645C4.24021 7.55268 4.36739 7.5 4.5 7.5H7.5V4.5C7.5 4.36739 7.55268 4.24021 7.64645 4.14645C7.74021 4.05268 7.86739 4 8 4Z"
							fill="#1F2937"
						/>
					</g>
					<defs>
						<clipPath id="clip0_329_62718">
							<rect width="16" height="16" fill="white" />
						</clipPath>
					</defs>
				</svg>

				<svg
					class="hs-accordion-active:block hs-accordion-active:text-dark-green hs-accordion-active:group-hover:text-dark-green hidden w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<g clip-path="url(#clip0_329_62855)">
						<path
							d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"
							fill="#17742F"
						/>
						<path
							d="M4 8C4 7.86739 4.05268 7.74021 4.14645 7.64645C4.24021 7.55268 4.36739 7.5 4.5 7.5H11.5C11.6326 7.5 11.7598 7.55268 11.8536 7.64645C11.9473 7.74021 12 7.86739 12 8C12 8.13261 11.9473 8.25979 11.8536 8.35355C11.7598 8.44732 11.6326 8.5 11.5 8.5H4.5C4.36739 8.5 4.24021 8.44732 4.14645 8.35355C4.05268 8.25979 4 8.13261 4 8Z"
							fill="#17742F"
						/>
					</g>
					<defs>
						<clipPath id="clip0_329_62855">
							<rect width="16" height="16" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</button>

			<div
				id="hs-basic-with-title-and-arrow-stretched-collapse-one"
				class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
				aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
			>
				<div class="pb-8">
					{faq.answer}
				</div>
			</div>
		</div>
	{/each}
</div>
