import { t as e, $ as t, S as r } from "./vendor.c0970321.js";
!(function () {
	const e = document.createElement("link").relList;
	if (!(e && e.supports && e.supports("modulepreload"))) {
		for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
			t(e);
		new MutationObserver((e) => {
			for (const r of e)
				if ("childList" === r.type)
					for (const e of r.addedNodes)
						"LINK" === e.tagName && "modulepreload" === e.rel && t(e);
		}).observe(document, { childList: !0, subtree: !0 });
	}
	function t(e) {
		if (e.ep) return;
		e.ep = !0;
		const t = (function (e) {
			const t = {};
			return (
				e.integrity && (t.integrity = e.integrity),
				e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
				"use-credentials" === e.crossorigin
					? (t.credentials = "include")
					: "anonymous" === e.crossorigin
					? (t.credentials = "omit")
					: (t.credentials = "same-origin"),
				t
			);
		})(e);
		fetch(e.href, t);
	}
})();
const o =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAPtJREFUeF7t0rENAAAMwrDy/9M9wmvYs1jsGgmM6uILEE8QYIAogHkPDBAFMO+BAaIA5j0wQBTAvAcGiAKY98AAUQDzHhggCmDeAwNEAcx7YIAogHkPDBAFMO+BAaIA5j0wQBTAvAcGiAKY98AAUQDzHhggCmDeAwNEAcx7YIAogHkPDBAFMO+BAaIA5j0wQBTAvAcGiAKY98AAUQDzHhggCmDeAwNEAcx7YIAogHkPDBAFMO+BAaIA5j0wQBTAvAcGiAKY98AAUQDzHhggCmDeAwNEAcx7YIAogHkPDBAFMO+BAaIA5j0wQBTAvAcGiAKY98AAUQDzHoiAD0PoAFE/HRk+AAAAAElFTkSuQmCC",
	n = "https://bellshade-server.herokuapp.com/";
const c = (t, r) => (n) => {
	const c =
		((a = `\n          <div class="team-card m-5" data-tippy-content="${
			null == n.name ? n.login : n.name
		}">\n            <div class="mx-auto relative max-w-max">\n              <div class="flex justify-center items-center overflow-hidden w-20 h-20 rounded-full shadow-md">\n                <img class="w-full" src="${o}" data-src="${
			n.avatar_url
		}&s=80" alt="${
			n.login
		}" />\n              </div>\n              <a class="absolute bottom-0 right-0 flex justify-center items-center rounded-full w-6 h-6 bg-white" href="${
			n.html_url
		}" target="_blank" rel="noopener noreferrer">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">\n                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>\n                </svg>\n              </a>\n            </div>     \n          </div>\n        `),
		new DOMParser()
			.parseFromString(a, "text/html")
			.querySelector(".team-card.m-5"));
	var a;
	t.append(c),
		r.observe(c.querySelector(".team-card img")),
		e(c, { theme: "light", arrow: !0 });
};
let a;
t(function () {
	t(".nav-toggler").each(function (e, r) {
		const o = t(r).data("target");
		t(r).on("click", function () {
			t(o).animate({ height: "toggle" });
		});
	}),
		t(".card-slider").slick({
			slidesToShow: 3,
			autoplay: !0,
			slidesToScroll: 1,
			dots: !1,
			responsive: [
				{ breakpoint: 768, settings: { slidesToShow: 2 } },
				{ breakpoint: 600, settings: { slidesToShow: 1 } },
			],
		});
});
const l = document.querySelectorAll(".card");
document.querySelectorAll(".card__title"),
	document.querySelectorAll(".card__category");
const i = document.querySelector(".modal"),
	s = document.querySelector(".modal__title"),
	d = document.querySelector(".modal__category"),
	u = document.querySelector(".modal__anchor"),
	A = document.querySelector(".modal__description"),
	m = document.querySelector(".modal__close-button"),
	g = document.querySelector(".card__background-image"),
	h = document.querySelector(".page");
function f(e, t, r) {
	let o = e.getBoundingClientRect(),
		n = t.getBoundingClientRect(),
		c = o.top - n.top,
		a = o.left - n.left,
		l = o.width / n.width,
		i = o.height / n.height;
	return t.animate(
		[
			{
				transformOrigin: "top left",
				borderRadius: `\n                    ${20 / l}px / ${20 / i}px`,
				transform: `\n                        translate(${a}px, ${c}px)\n                        scale(${l}, ${i})`,
			},
			{ transformOrigin: "top left", transform: "none", borderRadius: "20px" },
		],
		r
	);
}
r.init(document.querySelector(".modal__scroll-area")),
	l.forEach((e) => {
		e.querySelector(".card__button").addEventListener("click", (r) => {
			t(".card-slider").slick("slickPause"),
				(a = e),
				(h.dataset.modalState = "opening"),
				a.classList.add("card--opened"),
				(a.style.opacity = 0),
				document.querySelector("body").classList.add("no-scroll");
			const o = e.querySelector("img"),
				n = e.querySelector(".card__category"),
				c = e.querySelector(".card__title");
			(u.href = `https://github.com/bellshade/${c.dataset.repo}`),
				(A.innerText = c.dataset.description),
				(g.src = o.src),
				(d.innerHTML = n.innerHTML),
				(s.innerHTML = c.innerHTML);
			let l = f(a, i, {
				duration: 600,
				easing: "cubic-bezier(.76,.01,.65,1.38)",
				fill: "both",
			});
			l.onfinish = () => {
				(h.dataset.modalState = "open"), l.cancel();
			};
		});
	}),
	m.addEventListener("click", (e) => {
		(h.dataset.modalState = "closing"),
			document.querySelector("body").classList.remove("no-scroll");
		let r = f(a, i, {
			duration: 600,
			easing: "cubic-bezier(.76,.01,.65,1.38)",
			direction: "reverse",
			fill: "both",
		});
		r.onfinish = () => {
			(h.dataset.modalState = "closed"),
				(a.style.opacity = 1),
				a.classList.remove("card--opened"),
				t(".card-slider").slick("slickPlay"),
				r.cancel();
		};
	}),
	fetch(n)
		.then((e) => e.json())
		.then((e) => {
			const t = document.querySelector("#team #members");
			let r = new IntersectionObserver(
				(e, t) => {
					e.forEach((e) => {
						e.isIntersecting &&
							((e.target.src = e.target.dataset.src), t.unobserve(e.target));
					});
				},
				{ threshold: 0.65 }
			);
			const o = c(t, r);
			e.forEach(o);
		});
