let img = document.getElementsByClassName("img-gallery");
let gallery = document.getElementsByClassName("container-gallery");

function list() {
	for (i = 0; i < gallery.length; i++) {
		gallery[i].style.display = "flex";
	}
}

function grid() {
	for (i = 0; i < gallery.length; i++) {
		gallery[i].style.display = "grid";
	}
}

function load() {
	let allTab = document.getElementsByClassName("all-tab");
	let brandingTab = document.getElementsByClassName("branding-tab");
	let webTab = document.getElementsByClassName("web-tab");
	let photoTab = document.getElementsByClassName("photo-tab");
	let appTab = document.getElementsByClassName("app-tab");

	for (i = 0; i < allTab.length; i++) {
		allTab[i].addEventListener("click", showAll);
	}

	for (i = 0; i < brandingTab.length; i++) {
		brandingTab[i].addEventListener("click", showBranding);
	}

	for (i = 0; i < webTab.length; i++) {
		webTab[i].addEventListener("click", showWeb);
	}

	for (i = 0; i < photoTab.length; i++) {
		photoTab[i].addEventListener("click", showPhoto);
	}

	for (i = 0; i < appTab.length; i++) {
		appTab[i].addEventListener("click", showApp);
	}

  showAll()
}

function showAll() {
	cleanGallery();

	clearActiveBtns();
	setActiveBtns("all-tab");

	showPictures(all);

	// all.forEach((i) => {
	// 	let img = document.createElement("img");
	// 	img.setAttribute("src", i.url);
	// 	img.setAttribute("class", "img-gallery");
	// 	img.setAttribute("alt", "");
	// 	gallery[0].appendChild(img);
	// });
}

function showBranding() {
	cleanGallery();

	clearActiveBtns();
	setActiveBtns("branding-tab");

	showPictures(branding);

	// branding.forEach((i) => {
	// 	let img = document.createElement("img");
	// 	img.setAttribute("src", i.url);
	// 	img.setAttribute("class", "img-gallery");
	// 	img.setAttribute("alt", "");
	// 	gallery.innerHTML = "";
	// 	gallery[0].appendChild(img);
	// });
}

function showWeb() {
	cleanGallery();

	clearActiveBtns();
	setActiveBtns("web-tab");

	showPictures(web);

	// web.forEach((i) => {
	// 	let img = document.createElement("img");
	// 	img.setAttribute("src", i.url);
	// 	img.setAttribute("class", "img-gallery");
	// 	img.setAttribute("alt", "");
	// 	gallery.innerHTML = "";
	// 	gallery[0].appendChild(img);
	// });
}

function showPhoto() {
	cleanGallery();

	clearActiveBtns();
	setActiveBtns("photo-tab");

	showPictures(photography);

	// photography.forEach((i) => {
	// 	let img = document.createElement("img");
	// 	img.setAttribute("src", i.url);
	// 	img.setAttribute("class", "img-gallery");
	// 	img.setAttribute("alt", "");
	// 	gallery.innerHTML = "";
	// 	gallery[0].appendChild(img);
	// });
}

function showApp() {
	cleanGallery();

	clearActiveBtns();
	setActiveBtns("app-tab");

	showPictures(app);

	// app.forEach((i) => {
	// 	let img = document.createElement("img");
	// 	img.setAttribute("src", i.url);
	// 	img.setAttribute("class", "img-gallery");
	// 	img.setAttribute("alt", "");
	// 	gallery[0].appendChild(img);
	// });
}

function showPictures(pictures) {
	pictures.forEach((i) => {
		let img = document.createElement("img");
		img.setAttribute("src", i.url);
		img.setAttribute("class", "img-gallery");
		img.setAttribute("alt", "");
		gallery[0].appendChild(img);
	});
}

function setActiveBtns(cl) {
	let btns = document.getElementsByClassName(cl);
	for (let i = 0; i < btns.length; i++) {
		btns[i].classList.toggle("active");
	}
}

function clearActiveBtns() {
	let btns = document.getElementsByClassName("nav-btn");
	for (let i = 0; i < btns.length; i++) {
		if (btns[i].classList.contains("active")) {
			btns[i].classList.remove("active");
		}
	}
}

function cleanGallery() {
	let gallery = document.getElementsByClassName("container-gallery");
	while (gallery[0].firstChild) {
		gallery[0].firstChild.remove();
	}
}

document.addEventListener("DOMContentLoaded", load);
