const forms = () => {
	const form = document.querySelectorAll('form'),
		input = document.querySelectorAll('input');

	const message = {
		load: 'Loading',
		success: 'Thanks, we will contact you soon',
		fail: `Something doesn't work`
	};

	const postData = async (url, data) => {
		document.querySelector('.status').innerHTML = message.load;
		let result = await fetch(url, {
			method: 'POST',
			body: data,
		});

		return await result.text();
	};

	const cleanInput = () => {
		input.forEach((i) => {
			i.value = '';
		});
	};

	form.forEach(item => {
		item.addEventListener('submit', (event) => {
			event.preventDefault();

			let status = document.createElement('div');
			status.classList.add('status');
			item.appendChild(status);

			// FormData
			const formData = new FormData(item);

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					status.innerHTML = message.success;
				})
				.catch(() => {
					status.innerHTML = message.fail
				})
				.finally(() => {
					cleanInput();
					setTimeout(() => {
						status.remove();
					}, 3000);
				});
		});
	})
}

export default forms;