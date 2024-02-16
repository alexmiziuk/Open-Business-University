function showComment(event) {
	event.preventDefault(); // Останавливаем стандартное поведение формы

	// Получаем значение из поля ввода
	const commentText = document.getElementById("comment-text").value;
	let name = document.getElementById("nameInput").value;

	if (name.trim() === "") {
		name = "Имя пользователя";
  }

	// Создаем блок с комментарием и его содержимым
	const commentBlock = document.createElement("div");
	commentBlock.classList.add("comments-member");

	const nameBlock = document.createElement("div");
	nameBlock.classList.add("comments-member-name");
	nameBlock.textContent = name;

	const avatar = document.createElement("img");
	avatar.classList.add("comments-member-name-img");
	avatar.src = "./resourse/icons/avatar-empty.png";
	avatar.alt = "icon name";

	const timeBlock = document.createElement("div");
	timeBlock.classList.add("comments-member-time");
	timeBlock.textContent = "2 дня назад"


	const responseBlock = document.createElement("div");
	responseBlock.classList.add("comments-member-response");
	responseBlock.textContent = commentText;

	const answerContainer = document.createElement("div");
	answerContainer.classList.add("comments-member-answer-container");

	// Создаем кнопку ответа
	const answerButton = document.createElement("button");
	answerButton.classList.add("comments-member-answer");
	answerButton.textContent = "Ответить";

	// Создаем блок символов ответа (лайки, дизлайки, настройки)
	const symbolsBlock = document.createElement("div");
	symbolsBlock.classList.add("comments-member-answer-symbols");

	// Создаем кнопку лайка
	const likeButton = document.createElement("button");
	likeButton.classList.add("comments-member-button-like");
	const likeIcon = document.createElement("img");
	likeIcon.alt = "like";
	likeIcon.src = "./resourse/icons/like.png";
	likeButton.appendChild(likeIcon);

	// Создаем блок для числа лайков
	const likeNumbers = document.createElement("div");
	likeNumbers.classList.add("comments-member-like-numbers");
	likeNumbers.textContent = "1";

	// Создаем кнопку дизлайка
	const dislikeButton = document.createElement("button");
	dislikeButton.classList.add("comments-member-button-dislike");
	const dislikeIcon = document.createElement("img");
	dislikeIcon.alt = "dislike";
	dislikeIcon.src = "./resourse/icons/dislike.png";
	dislikeButton.appendChild(dislikeIcon);

	// Создаем блок для числа дизлайков
	const dislikeNumbers = document.createElement("div");
	dislikeNumbers.classList.add("comments-member-dislike-numbers");
	dislikeNumbers.textContent = "0";

	// Создаем кнопку настроек
	const settingsButton = document.createElement("button");
	settingsButton.classList.add("customer-member-button-setting");
	const settingsIcon = document.createElement("img");
	settingsIcon.alt = "tree points";
	settingsIcon.src = "./resourse/icons/tree-points.png";
	settingsButton.appendChild(settingsIcon);

	// Добавляем все созданные элементы в блок символов ответа
	symbolsBlock.appendChild(likeButton);
	symbolsBlock.appendChild(likeNumbers);
	symbolsBlock.appendChild(dislikeButton);
	symbolsBlock.appendChild(dislikeNumbers);
	symbolsBlock.appendChild(settingsButton);

	// Добавляем кнопку ответа и блок символов в контейнер для ответов
	answerContainer.appendChild(answerButton);
	answerContainer.appendChild(symbolsBlock);

	// Вставляем созданные элементы в блок комментария
	commentBlock.appendChild(nameBlock);
	commentBlock.appendChild(avatar);
	commentBlock.appendChild(timeBlock)
	commentBlock.appendChild(responseBlock);
	commentBlock.appendChild(answerContainer);

	// Получаем ссылку на элемент commentSection
	const commentSection = document.getElementById("commentSection");

	// Вставляем созданный блок комментария в commentSection
	commentSection.appendChild(commentBlock);
}

const currentTime = moment();
console.log(currentTime);
document.addEventListener('DOMContentLoaded', function () {
	(function initPlayVideo() {
		const videoCover = document.querySelector(".promo-wrapper-screensaver");
		const iframe = document.querySelector("iframe");
		const videoClose = document.querySelector(".promo-btn-container");
		const originalSrc = iframe.getAttribute("src");

		videoCover.addEventListener("click", function () {
			videoCover.classList.add("hidden");
			let videoSrc = originalSrc + "&autoplay=1";
			iframe.setAttribute("src", videoSrc);
			videoClose.classList.remove("hidden");
		});

		videoClose.addEventListener("click", function () {
			videoCover.classList.remove("hidden");
			iframe.setAttribute("src", "");
			videoClose.classList.add("hidden");
		});
	})();
});



