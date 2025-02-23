const progress = document.getElementById('progress');
const send = document.getElementById('send');
const formData = new FormData(form);
const xhr = new XMLHttpRequest();

send.addEventListener('click', itemProgress);

function itemProgress(event) {
	event.preventDefault();
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
	xhr.onprogress = function (event) {
		progress.value = event.loaded / event.total;
	}
	xhr.send(formData);
}
