const modals = () => {

	// modal states
	function bindModal(trSelector, trModal, trClose) {

		// get element by class name through selector
		const selector = document.querySelectorAll(trSelector),
			modal = document.querySelector(trModal),
			close = document.querySelector(trClose);

		// applies a callback to an array of data (modals)
		selector.forEach(i => {
			i.addEventListener('click', (event) => {
				//disables default browser behavior
				if (event.target) {
					event.preventDefault();
				}
				modal.style.display = 'block';
				document.body.classList.add('modal-open');
			});
		});

		// function close modal through click around modal
		modal.addEventListener('click', (event) => {
			if (event.target === modal) {
				modal.style.display = "none";
				document.body.classList.remove('modal-open');
			}
		});

		// function close modal through button 
		close.addEventListener('click', () => {
			modal.style.display = "none";
			document.body.classList.remove('modal-open');
		});
	};

	function appearModal(selector, sec) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden'
		}, sec)
	};

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');

	appearModal('.popup', 60000)
};

export default modals;