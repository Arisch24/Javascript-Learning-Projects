let video = document.getElementById('snow');
let volumeBox = document.querySelector('.volume-container');
let vidStatus = document.getElementById('status');

document.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'Space':
			if (video.paused) {
				video.play();
				showPlayPause('\u23F5');
			} else {
				video.pause();
				showPlayPause('\u23F8');
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
});

function showPlayPause(value) {
	vidStatus.innerText = value;
	volumeBox.classList.add('active');
	setTimeout(() => {
		volumeBox.classList.remove('active');
	}, 350);
}

function showVolume() {
	// show and change the volume
	let vol = (video.volume * 100).toFixed(0);
	vidStatus.innerText = `${vol}%`;
	volumeBox.classList.add('active');
	setTimeout(() => {
		volumeBox.classList.remove('active');
	}, 350);
}
