const reveal = document.querySelectorAll(".reveal");

const viewPortScroll = function (event) {
	const topRev = event.getBoundingClientRect().top;
	const bottomRev = event.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
	
    if (topRev < viewportHeight) {
        return true 
    } else if (topRev > -bottomRev) {
        return false
    }
};

function scrollRev() {
  [...reveal].forEach(event => {
		if (viewPortScroll(event)) {
			if (!event.classList.contains("reveal_active")) {
				event.classList.add("reveal_active");
			}
		} else if (event.classList.contains("reveal_active")) {
				event.classList.remove("reveal_active");
			}
		}
	)};

window.addEventListener("scroll", scrollRev, false);
