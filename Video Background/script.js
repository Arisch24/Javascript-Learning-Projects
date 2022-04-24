let video = document.getElementById('snow');
let volumeBox = document.querySelector('.volume-container');
let volume = document.getElementById('volume');

document.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'Space':
			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}
			break;
		case 'ArrowUp':
			if (video.volume >= 0.95) {
				video.volume = 1;
				showVolume();
				return;
			} else {
				video.volume += 0.05;
				showVolume();
			}

			break;
		case 'ArrowDown':
			if (video.volume <= 0.05) {
				video.volume = 0;
				showVolume();
				return;
			} else {
				video.volume -= 0.05;
				showVolume();
			}
	}

	function showVolume() {
		// show and change the volume
		let vol = (video.volume * 100).toFixed(0);
		volume.innerText = `${vol}%`;
		volumeBox.classList.add('active');
		setTimeout(() => {
			volumeBox.classList.remove('active');
		}, 400);
	}
});
