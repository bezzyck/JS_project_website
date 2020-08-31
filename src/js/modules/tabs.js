const tabs = (headerSelector, tabSelector, contentSelector, active) => {

	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);

	function hideContent() {
		content.forEach(element => {
			element.style.display = 'none'
		});
		tab.forEach(element => {
			element.classList.remove = (active)
		});
	};

	function showContent(i = 0) {
		content[i].style.display = 'block'
		tab[i].classList.remove = (active)
	};

	hideContent();
	showContent();

	header.addEventListener('click', (e) => {
		let target = e.target;
		if (target.classList.contains(tabSelector.replace(/\./, '')) ||
			target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideContent();
					showContent(i);
				}
			})
		}
	})
};

export default tabs