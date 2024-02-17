function showComment(event) {
	event.preventDefault();

	const commentText = document.getElementById("comment-text").value;
	let name = document.getElementById("nameInput").value;

	if (name.trim() === "") {
		name = "Имя пользователя";
	}

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

	const answerButton = document.createElement("button");
	answerButton.classList.add("comments-member-answer");
	answerButton.textContent = "Ответить";

	const symbolsBlock = document.createElement("div");
	symbolsBlock.classList.add("comments-member-answer-symbols");

	const likeButton = document.createElement("button");
	likeButton.classList.add("comments-member-button-like");
	const likeIcon = document.createElement("img");
	likeIcon.alt = "like";
	likeIcon.src = "./resourse/icons/like.png";
	likeButton.appendChild(likeIcon);

	const likeNumbers = document.createElement("div");
	likeNumbers.classList.add("comments-member-like-numbers");
	likeNumbers.textContent = "1";

	const dislikeButton = document.createElement("button");
	dislikeButton.classList.add("comments-member-button-dislike");
	const dislikeIcon = document.createElement("img");
	dislikeIcon.alt = "dislike";
	dislikeIcon.src = "./resourse/icons/dislike.png";
	dislikeButton.appendChild(dislikeIcon);

	const dislikeNumbers = document.createElement("div");
	dislikeNumbers.classList.add("comments-member-dislike-numbers");
	dislikeNumbers.textContent = "0";

	const settingsButton = document.createElement("button");
	settingsButton.classList.add("customer-member-button-setting");
	const settingsIcon = document.createElement("img");
	settingsIcon.alt = "tree points";
	settingsIcon.src = "./resourse/icons/tree-points.png";
	settingsButton.appendChild(settingsIcon);

	symbolsBlock.appendChild(likeButton);
	symbolsBlock.appendChild(likeNumbers);
	symbolsBlock.appendChild(dislikeButton);
	symbolsBlock.appendChild(dislikeNumbers);
	symbolsBlock.appendChild(settingsButton);

	answerContainer.appendChild(answerButton);
	answerContainer.appendChild(symbolsBlock);

	commentBlock.appendChild(nameBlock);
	commentBlock.appendChild(avatar);
	commentBlock.appendChild(timeBlock)
	commentBlock.appendChild(responseBlock);
	commentBlock.appendChild(answerContainer);
	const commentSection = document.getElementById("commentSection");
	commentSection.appendChild(commentBlock);

	document.getElementById("comment-text").value = "";
	document.getElementById("nameInput").value = "";
}

document.addEventListener('DOMContentLoaded', function () {
	const currentTime = moment();
	const screensaverSecond = document.querySelector('.promo-wrapper-screensaver-second');
	const startImageTimeOnePeriod = moment().set({ hour: 21, minute: 0, second: 0 });
	const endImageTimeOnePeriod = moment().set({ hour: 11, minute: 59, second: 59 });

	const startImageTimeTwoPeriod = moment().set({ hour: 0, minute: 0, second: 1 });
	const endImageTimeTwoPeriod = moment().set({ hour: 18, minute: 0, second: 0 });

	const startVideoTime = moment().set({ hour: 18, minute: 0, second: 0 });
	const endVideoTime = moment().set({ hour: 21, minute: 0, second: 0 });

	const startBannerTime = moment().set({ hour: 18, minute: 20, second: 0 });
	const endBannerTime = moment().set({ hour: 21, minute: 0, second: 0 });

	if (currentTime.isBetween(startImageTimeOnePeriod, endImageTimeOnePeriod) ||
		currentTime.isBetween(startImageTimeTwoPeriod, endImageTimeTwoPeriod)) {
		screensaverSecond.classList.remove('hidden');
	} else {
		screensaverSecond.classList.add('hidden');
	}
	if (currentTime.isBetween(startVideoTime, endVideoTime)) {
		document.querySelector('.promo-wrapper-screensaver').classList.remove('hidden');
	} else {
		document.querySelector('.promo-wrapper-screensaver').classList.add('hidden');
	}
	if (currentTime.isBetween(startBannerTime, endBannerTime)) {
		document.querySelector('.banner').classList.remove('hidden');
		document.querySelector('.promo-question-title').classList.remove('hidden');
		document.querySelector('.cards').classList.remove('hidden');
	} else {
		document.querySelector('.banner').classList.add('hidden');
		document.querySelector('.promo-question-title').classList.add('hidden');
		document.querySelector('.cards').classList.add('hidden');
	}

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