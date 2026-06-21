/*
 * PERSONALIZE HERE
 * Replace the sample names, date, words, and blank media paths below.
 * Photo and video filename suggestions are in photos/README.md.
 */
const scrapbook = {
  herName: "Sunshine",
  yourName: "Jha(2?)",
  relationshipStart: "2023-04-20",
  openingMessage:
    "I wanted to make you something that feels a little like us: warm, slightly silly, full of memories, and impossible to fit into one neat little box.",
  chapters: [
    {
      id: "year-one",
      className: "one",
      label: "Chapter one",
      period: "20 April 2023 - April 2024",
      title: "The very<br><em>beginning.</em>",
      intro:
        "The year of firsts. First photos, first adventures, and that lovely moment when two separate lives started becoming one shared story.",
      memories: [
        {
          date: "20 April 2023 - where it began",
          title: "Where it all started",
          caption:
            "The office, the socials, the swing, and the early days when this whole beautiful story was only just beginning.",
          media: [
            { type: "image", src: "photos/1 Palla Office Start Cute.jpeg", file: "1 Palla Office Start Cute.jpeg" },
            { type: "video", src: "photos/1 Palla Socials.mp4", poster: "photos/posters/1-socials.jpg", file: "1 Palla Socials.mp4" },
            { type: "video", src: "photos/1 Palla Swing.mp4", poster: "photos/posters/1-swing.jpg", file: "1 Palla Swing.mp4" },
          ],
        },
        {
          date: "Camp, arcade & Imagica",
          title: "Our first adventures",
          caption:
            "The kind of days that turned into stories: a camp, an arcade adventure, and an Imagica day with you beside me.",
          media: [
            { type: "image", src: "photos/2 Palla Imagica.jpeg", file: "2 Palla Imagica.jpeg" },
            { type: "video", src: "photos/2 Palla Camp.mp4", poster: "photos/posters/2-camp.jpg", file: "2 Palla Camp.mp4" },
            { type: "video", src: "photos/2 Palla Cricket.mp4", poster: "photos/posters/2-cricket.jpg", file: "2 Palla Cricket.mp4" },
          ],
        },
        {
          date: "Your first birthday together",
          title: "The first birthday chapter",
          caption:
            "The first birthday I got to celebrate with you, and the beginning of a tradition I hope we keep for a very long time.",
          media: [
            { type: "image", src: "photos/3 Palla 1st Bday.jpeg", file: "3 Palla 1st Bday.jpeg" },
            { type: "image", src: "photos/3 Palla 1st Bday 2.jpeg", file: "3 Palla 1st Bday 2.jpeg" },
          ],
        },
      ],
      note:
        "You made the beginning feel easy. Even then, there was something about being with you that felt a lot like coming home.",
    },
    {
      id: "year-two",
      className: "two",
      label: "Chapter two",
      period: "April 2024 - April 2025",
      title: "Our little<br><em>adventure.</em>",
      intro:
        "We knew each other better now: the good moods, the quiet moods, the snack orders, and exactly how to make each other laugh at the worst possible time.",
      memories: [
        {
          date: "Dates & little rituals",
          title: "Just us being us",
          caption:
            "A date, a facial together, and those sweet little moments that prove ordinary plans are better when they are ours.",
          media: [
            { type: "image", src: "photos/4 Palla Date.jpeg", file: "4 Palla Date.jpeg" },
            { type: "image", src: "photos/4 Palla Facial Together.jpeg", file: "4 Palla Facial Together.jpeg" },
            { type: "image", src: "photos/4 Palla Together Cute.jpeg", file: "4 Palla Together Cute.jpeg" },
          ],
        },
        {
          date: "Birthday round two",
          title: "Another year of you",
          caption:
            "Another birthday, more people who love you, a little Ghibli magic, and another chance to celebrate the person you are.",
          media: [
            { type: "video", src: "photos/5 Palla 2nd Bday.mp4", poster: "photos/posters/5-second-birthday.jpg", file: "5 Palla 2nd Bday.mp4" },
            { type: "image", src: "photos/5 Palla 2nd Bday Deepak.jpeg", file: "5 Palla 2nd Bday Deepak.jpeg" },
            { type: "image", src: "photos/5 Palla 2nd Bday Kalyaan.jpeg", file: "5 Palla 2nd Bday Kalyaan.jpeg" },
            { type: "image", src: "photos/5 Palla 2nd Bday Samyak.jpeg", file: "5 Palla 2nd Bday Samyak.jpeg" },
            { type: "image", src: "photos/5 Palla Ghibli.jpeg", file: "5 Palla Ghibli.jpeg" },
          ],
        },
        {
          date: "Every adorable little moment",
          title: "The Cutie That Is You!",
          caption:
            "From the cutest breakfast to sweet family moments, this is simply a little collection of the cutie that is you.",
          media: [
            { type: "video", src: "photos/6 Palla Breakfast cute.mp4", poster: "photos/posters/6-breakfast.jpg", file: "6 Palla Breakfast cute.mp4" },
            { type: "video", src: "photos/6 Palla Cousin Cute.mp4", poster: "photos/posters/6-cousin.jpg", file: "6 Palla Cousin Cute.mp4" },
          ],
        },
      ],
      note:
        "I love the life inside our big memories, but I think I love the ordinary bits even more: the messages, the jokes, and simply knowing you are there.",
      tinyThings: [
        {
          icon: "01",
          title: "Your smile & dimples",
          copy: "That beautiful smile, those impossibly cute dimples, and the way they make everything around you feel brighter.",
        },
        {
          icon: "&infin;",
          title: "Our tiny jokes",
          copy: "A language made of references no one else could possibly understand.",
        },
        {
          icon: "&hearts;",
          title: "How you care",
          copy: "In a hundred quiet ways that you probably do not even notice.",
        },
      ],
    },
    {
      id: "year-three",
      className: "three",
      label: "Chapter three",
      period: "April 2025 - today",
      title: "More us<br><em>than ever.</em>",
      intro:
        "Three years in, and somehow I keep finding new things to love: who you are, who you are becoming, and who I get to be beside you.",
      memories: [
        {
          date: "A year in little moments",
          title: "So many versions of you",
          caption:
            "Birthday memories, your beautiful saree, sleepy moments, and a little Van Gogh: so many versions of you, all loved.",
          media: [
            { type: "image", src: "photos/7 Palla Last Bday.jpeg", file: "7 Palla Last Bday.jpeg" },
            { type: "image", src: "photos/7 Palla Saaree Cute.jpeg", file: "7 Palla Saaree Cute.jpeg" },
            { type: "image", src: "photos/7 Palla Sleeping.jpeg", file: "7 Palla Sleeping.jpeg" },
            { type: "image", src: "photos/7 Palla Van Gogh.jpeg", file: "7 Palla Van Gogh.jpeg" },
          ],
        },
        {
          date: "USYD, Bondi & new beginnings",
          title: "Building our new life",
          caption:
            "From USYD to Bondi, these are the first little glimpses of the new life we are building together and all the places still waiting for us.",
          media: [
            { type: "image", src: "photos/8 Palla  USYD.jpeg", file: "8 Palla  USYD.jpeg" },
            { type: "image", src: "photos/9 Palla Bondi.jpeg", file: "9 Palla Bondi.jpeg" },
          ],
        },
      ],
      note:
        "If these three years have taught me anything, it is that there is no version of the future I want more than the one with you in it.",
    },
  ],
  letter: [
    "Happy birthday to the woman who makes my ordinary days feel worth remembering.",
    "Thank you for every laugh, every adventure, every quiet moment, and every version of us that has existed across these three beautiful years. I am so proud of you, and so lucky that I get to love you.",
    "Thank you for always pushing me to become a better person and making sure I keep progressing, even when I push back, get stubborn, or act like a complete baby. I may not always admit it in the moment, but my life is better because you believe in me, challenge me, and care enough to never let me stand still.",
    "I hope this next year brings you the same warmth, joy, and kindness you give so naturally to everyone around you. And I hope I get to be beside you for all of it.",
  ],
};

const chapterContainer = document.querySelector("#chapters");
const memoryModal = document.querySelector("#memory-modal");
const modalImage = document.querySelector("#modal-image");
const modalVideo = document.querySelector("#modal-video");
const modalPrevious = document.querySelector(".memory-modal__arrow--previous");
const modalNext = document.querySelector(".memory-modal__arrow--next");
const modalCount = document.querySelector(".memory-modal__count");
const modalDate = document.querySelector("#modal-date");
const modalTitle = document.querySelector("#modal-title");
const modalCaption = document.querySelector("#modal-caption");
const toast = document.querySelector("#toast");
let toastTimer;
let modalMemoryIndex = 0;
let modalMediaIndex = 0;

const placeholderPalettes = [
  ["#8b3040", "#e7a7ab", "#f1c879", "#fff4dc"],
  ["#496b83", "#a8c0cc", "#d98b73", "#f8e6c9"],
  ["#687d61", "#b8c49c", "#e8a778", "#fff2dc"],
  ["#9a5235", "#e0a36c", "#7b8e9b", "#f9e8c8"],
  ["#6b3f62", "#cb98af", "#e4c16f", "#f6e6ce"],
  ["#315d5b", "#8fb5a5", "#df8f82", "#f9edda"],
  ["#91463f", "#df9d8c", "#7c906f", "#f8e7c8"],
  ["#4d6179", "#a7b6cf", "#d6a15c", "#fff1d6"],
  ["#7b3140", "#d5a0a5", "#70856f", "#f8e9cc"],
];

function escapeXml(value) {
  return value.replace(/[<>&'"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[character]);
}

function makePlaceholder(index, title, filename, mediaType = "image") {
  const [deep, middle, accent, light] = placeholderPalettes[index % placeholderPalettes.length];
  const number = String(index + 1).padStart(2, "0");
  const safeTitle = escapeXml(title.toUpperCase());
  const safeFilename = escapeXml(filename);
  const mediaLabel = mediaType === "video" ? "YOUR VIDEO HERE" : "YOUR PHOTO HERE";
  const mediaMark = mediaType === "video"
    ? `<circle cx="669" cy="292" r="58" fill="${accent}"/><path d="M653 260 L653 324 L700 292Z" fill="${light}"/>`
    : `<path d="M620 282 C620 253 656 246 669 271 C682 246 718 253 718 282 C718 311 669 338 669 338 C669 338 620 311 620 282Z" fill="${accent}"/>`;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
      <rect width="800" height="1000" fill="${light}"/>
      <circle cx="666" cy="142" r="242" fill="${middle}" opacity=".72"/>
      <path d="M-90 780 C130 570 270 680 420 505 C566 334 705 472 892 246 L892 1080 L-90 1080Z" fill="${deep}"/>
      <path d="M-60 820 C150 650 287 772 448 605 C575 474 722 566 860 405" fill="none" stroke="${accent}" stroke-width="22" opacity=".9"/>
      <g fill="none" stroke="${deep}" stroke-width="4" opacity=".42">
        <rect x="60" y="58" width="680" height="884"/>
        <rect x="74" y="72" width="652" height="856" stroke-dasharray="8 12"/>
      </g>
      <text x="70" y="145" fill="${deep}" font-family="Georgia, serif" font-size="96">${number}</text>
      <text x="74" y="202" fill="${deep}" font-family="Arial, sans-serif" font-size="19" font-weight="bold" letter-spacing="5">${mediaLabel}</text>
      <text x="400" y="850" fill="${light}" font-family="Georgia, serif" font-size="42" font-style="italic" text-anchor="middle">${safeTitle}</text>
      <rect x="123" y="881" width="554" height="48" fill="${light}" opacity=".92"/>
      <text x="400" y="912" fill="${deep}" font-family="Arial, sans-serif" font-size="16" letter-spacing="2" text-anchor="middle">${safeFilename}</text>
      <g fill="${accent}">
        ${mediaMark}
        <circle cx="105" cy="716" r="12"/>
        <circle cx="140" cy="686" r="5"/>
      </g>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderMediaItem(item, memory, globalIndex, mediaIndex) {
  const type = item.type === "video" ? "video" : "image";
  const source = item.src || "";
  const filename = item.file || `${String(globalIndex + 1).padStart(2, "0")}-memory-${mediaIndex + 1}`;
  const placeholder = makePlaceholder(globalIndex, memory.title, filename, type);
  const poster = item.poster || placeholder;
  const safeSource = escapeXml(source);
  const safePoster = escapeXml(poster);
  const safeFilename = escapeXml(filename);
  const safeTitle = escapeXml(memory.title);
  const visual = type === "video" && source
    ? `<video src="${safeSource}" poster="${safePoster}" muted loop playsinline preload="metadata" aria-label="${safeTitle}, video ${mediaIndex + 1}"></video>`
    : `<img src="${safeSource || placeholder}" data-fallback="${placeholder}" alt="${source ? `${safeTitle}, photo ${mediaIndex + 1}` : `Placeholder for ${safeFilename}`}" />`;

  return `
    <span
      class="memory-card__slide${mediaIndex === 0 ? " is-active" : ""}"
      data-media-index="${mediaIndex}"
      data-media-type="${type}"
      data-source="${safeSource}"
      data-file="${safeFilename}"
      data-fallback="${safePoster}"
      data-placeholder="${source ? "false" : "true"}"
      aria-hidden="${mediaIndex === 0 ? "false" : "true"}"
    >${visual}</span>`;
}

function renderMemory(memory, globalIndex, localIndex) {
  const mediaItems = memory.media?.length
    ? memory.media
    : [{ type: "image", src: "", file: `${String(globalIndex + 1).padStart(2, "0")}-memory.jpg` }];
  const slides = mediaItems
    .map((item, mediaIndex) => renderMediaItem(item, memory, globalIndex, mediaIndex))
    .join("");
  const controls = mediaItems.length > 1 ? `
    <span class="memory-card__media-controls" role="group" aria-label="Media controls for ${escapeXml(memory.title)}">
      <button class="memory-card__arrow memory-card__arrow--previous" type="button" aria-label="Previous item in ${escapeXml(memory.title)}">&larr;</button>
      <span class="memory-card__media-count" aria-hidden="true">1 / ${mediaItems.length}</span>
      <button class="memory-card__arrow memory-card__arrow--next" type="button" aria-label="Next item in ${escapeXml(memory.title)}">&rarr;</button>
    </span>` : "";

  return `
    <article
      class="memory-card reveal"
      data-memory="${globalIndex}"
      data-active-media="0"
      style="transition-delay: ${localIndex * 100}ms"
    >
      <span class="memory-card__photo">
        <span class="memory-card__slides">${slides}</span>
        ${controls}
      </span>
      <span class="memory-card__caption">
        <span>
          <span class="memory-card__date">${memory.date}</span>
          <h3>${memory.title}</h3>
        </span>
        <span class="memory-card__index">${String(globalIndex + 1).padStart(2, "0")}</span>
      </span>
      <button class="memory-card__open" type="button" aria-label="Open memory: ${escapeXml(memory.title)}, item 1 of ${mediaItems.length}">
        <span class="sr-only">Open ${escapeXml(memory.title)}</span>
      </button>
    </article>`;
}

function renderTinyThings(items) {
  return `
    <div class="tiny-things reveal" aria-label="The little things I love">
      ${items.map((item) => `
        <article class="tiny-thing">
          <span class="tiny-thing__icon" aria-hidden="true">${item.icon}</span>
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
        </article>
      `).join("")}
    </div>`;
}

function renderChapter(chapter, chapterIndex, memoryStartIndex) {
  const memories = chapter.memories
    .map((memory, localIndex) => renderMemory(memory, memoryStartIndex + localIndex, localIndex))
    .join("");

  return `
    <section class="chapter chapter--${chapter.className} page-section" id="${chapter.id}" data-chapter-section>
      <header class="chapter__header reveal">
        <div>
          <span class="chapter__number">${chapter.label}</span>
          <p class="chapter__date">${chapter.period}</p>
        </div>
        <h2>${chapter.title}</h2>
        <p class="chapter__intro">${chapter.intro}</p>
      </header>
      <p class="swipe-hint" aria-hidden="true">swipe through our memories <span>&rarr;</span></p>
      <div class="memory-grid">${memories}</div>
      <div class="carousel-progress" aria-hidden="true">
        ${chapter.memories.map((_, index) => `<span class="${index === 0 ? "is-active" : ""}"></span>`).join("")}
      </div>
      ${chapter.tinyThings ? renderTinyThings(chapter.tinyThings) : ""}
      <div class="secret-wrap reveal">
        <button class="secret-note" type="button" aria-expanded="false">
          <span aria-hidden="true">&hearts;</span> a note I tucked away
        </button>
        <div class="secret-note__paper" aria-hidden="true">
          <div><p>${chapter.note}</p></div>
        </div>
      </div>
    </section>
    ${chapterIndex === 0 ? `
      <section class="story-break" aria-label="A thought about us">
        <span class="story-break__orbit" aria-hidden="true"></span>
        <div class="story-break__content reveal">
          <blockquote>Somewhere between all the firsts,<br />you became my <em>favourite constant.</em></blockquote>
          <p>And the story kept getting better</p>
        </div>
      </section>` : ""}`;
}

function allMemories() {
  return scrapbook.chapters.flatMap((chapter) => chapter.memories);
}

function renderScrapbook() {
  let memoryIndex = 0;
  chapterContainer.innerHTML = scrapbook.chapters.map((chapter, chapterIndex) => {
    const markup = renderChapter(chapter, chapterIndex, memoryIndex);
    memoryIndex += chapter.memories.length;
    return markup;
  }).join("");

  const coverName = document.querySelector("#cover-name");
  coverName.textContent = scrapbook.herName;
  coverName.classList.toggle("cover-name--long", scrapbook.herName.length > 9);
  coverName.classList.toggle("cover-name--very-long", scrapbook.herName.length > 13);
  document.querySelector("#birthday-name").textContent = `${scrapbook.herName}.`;
  document.querySelector("#signature").textContent = scrapbook.yourName;
  document.querySelector("#opening-copy").textContent = scrapbook.openingMessage;
  document.querySelector("#letter-copy").innerHTML = scrapbook.letter
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  document.title = `Three Years of Us | Happy Birthday ${scrapbook.herName}`;

  const start = new Date(`${scrapbook.relationshipStart}T00:00:00`);
  const today = new Date();
  const elapsedDays = Math.max(1, Math.floor((today - start) / 86400000));
  document.querySelector("#days-together").textContent = elapsedDays.toLocaleString();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function showModalMedia(nextIndex) {
  const memory = allMemories()[modalMemoryIndex];
  const card = document.querySelector(`[data-memory="${modalMemoryIndex}"]`);
  const slides = [...card.querySelectorAll(".memory-card__slide")];
  modalMediaIndex = (nextIndex + slides.length) % slides.length;
  const activeSlide = slides[modalMediaIndex];
  const type = activeSlide.dataset.mediaType;
  const source = activeSlide.dataset.source;
  const fallback = activeSlide.dataset.fallback;
  const isPlaceholder = activeSlide.dataset.placeholder === "true";

  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.hidden = true;
  modalImage.hidden = false;
  modalCount.textContent = `${modalMediaIndex + 1} / ${slides.length}`;
  modalPrevious.hidden = slides.length < 2;
  modalNext.hidden = slides.length < 2;
  modalCount.hidden = slides.length < 2;

  if (type === "video" && source) {
    modalImage.hidden = true;
    modalVideo.hidden = false;
    modalVideo.src = source;
    modalVideo.poster = fallback;
    modalVideo.load();
  } else {
    const activeImage = activeSlide.querySelector("img");
    modalImage.src = activeImage?.src || fallback;
    modalImage.alt = isPlaceholder ? `Placeholder for ${activeSlide.dataset.file}` : memory.title;
  }

  if (type === "video" && source) modalVideo.play().catch(() => {});

  if (isPlaceholder) {
    const label = type === "video" ? "Video" : "Photo";
    showToast(`${label} spot ready: ${activeSlide.dataset.file}`);
  }
}

function openMemory(index) {
  const memory = allMemories()[index];
  const card = document.querySelector(`[data-memory="${index}"]`);
  modalMemoryIndex = index;
  modalMediaIndex = Number(card.dataset.activeMedia) || 0;

  modalDate.textContent = memory.date;
  modalTitle.textContent = memory.title;
  modalCaption.textContent = memory.caption;
  memoryModal.showModal();
  showModalMedia(modalMediaIndex);
}

function closeMemory() {
  modalVideo.pause();
  if (memoryModal.open) memoryModal.close();
}

function makeConfetti() {
  const layer = document.querySelector("#confetti-layer");
  const colors = ["#7d2331", "#d09b48", "#e7a7ab", "#74876b", "#5b7892", "#fff4dc"];

  for (let index = 0; index < 90; index += 1) {
    const piece = document.createElement("span");
    const isHeart = index % 9 === 0;
    piece.className = `confetti${isHeart ? " is-heart" : ""}`;
    if (isHeart) piece.innerHTML = "&hearts;";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--confetti-color", colors[index % colors.length]);
    piece.style.setProperty("--fall-time", `${3.4 + Math.random() * 2.4}s`);
    piece.style.setProperty("--delay", `${Math.random() * 0.9}s`);
    piece.style.setProperty("--drift", `${-100 + Math.random() * 200}px`);
    piece.style.setProperty("--spin", `${360 + Math.random() * 900}deg`);
    layer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 7000);
  }
}

function setupRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupChapterNavigation() {
  const links = [...document.querySelectorAll(".chapter-nav a")];
  const sections = [...document.querySelectorAll("[data-chapter-section], #birthday")];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${target.id}`);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        const isCurrent = link.dataset.chapter === entry.target.id;
        link.classList.toggle("is-active", isCurrent);
        if (isCurrent) link.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      });
    });
  }, { rootMargin: "-35% 0px -55%", threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

function setupCarousels() {
  document.querySelectorAll(".chapter").forEach((chapter) => {
    const grid = chapter.querySelector(".memory-grid");
    const cards = [...grid.querySelectorAll(".memory-card")];
    const dots = [...chapter.querySelectorAll(".carousel-progress span")];
    let frame;

    function updateProgress() {
      const gridCenter = grid.scrollLeft + grid.clientWidth / 2;
      const closestIndex = cards.reduce((bestIndex, card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const bestCard = cards[bestIndex];
        const bestCenter = bestCard.offsetLeft + bestCard.offsetWidth / 2;
        return Math.abs(cardCenter - gridCenter) < Math.abs(bestCenter - gridCenter)
          ? index
          : bestIndex;
      }, 0);

      dots.forEach((dot, index) => dot.classList.toggle("is-active", index === closestIndex));
    }

    grid.addEventListener("scroll", () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateProgress);
    }, { passive: true });
  });
}

function setupMediaCarousels() {
  document.querySelectorAll(".memory-card").forEach((card) => {
    const slides = [...card.querySelectorAll(".memory-card__slide")];
    const count = card.querySelector(".memory-card__media-count");
    const openButton = card.querySelector(".memory-card__open");
    const title = allMemories()[Number(card.dataset.memory)].title;

    function activateSlide(nextIndex, playActiveVideo = false) {
      const activeIndex = (nextIndex + slides.length) % slides.length;
      card.dataset.activeMedia = String(activeIndex);

      slides.forEach((slide, index) => {
        const isActive = index === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
        const video = slide.querySelector("video");
        if (!video) return;
        if (isActive && playActiveVideo) video.play().catch(() => {});
        else video.pause();
      });

      if (count) count.textContent = `${activeIndex + 1} / ${slides.length}`;
      openButton.setAttribute("aria-label", `Open memory: ${title}, item ${activeIndex + 1} of ${slides.length}`);
    }

    card.querySelectorAll("img[data-fallback]").forEach((image) => {
      image.addEventListener("error", () => {
        image.src = image.dataset.fallback;
        image.closest(".memory-card__slide").dataset.placeholder = "true";
      }, { once: true });
    });

    card.querySelectorAll("video").forEach((video) => {
      video.addEventListener("error", () => {
        video.closest(".memory-card__slide").dataset.placeholder = "true";
      }, { once: true });
    });

    card.querySelector(".memory-card__arrow--previous")?.addEventListener("click", (event) => {
      event.stopPropagation();
      activateSlide(Number(card.dataset.activeMedia) - 1, true);
    });

    card.querySelector(".memory-card__arrow--next")?.addEventListener("click", (event) => {
      event.stopPropagation();
      activateSlide(Number(card.dataset.activeMedia) + 1, true);
    });

    activateSlide(0);
  });
}

function setupInteractions() {
  const cover = document.querySelector(".cover");

  document.querySelector("#open-scrapbook").addEventListener("click", () => {
    document.body.classList.remove("cover-is-closed");
    cover.classList.add("cover--opening");
    window.setTimeout(() => {
      cover.hidden = true;
      window.scrollTo({ top: 0 });
      document.querySelector(".chapter-nav a").focus({ preventScroll: true });
    }, 900);
  });

  document.querySelectorAll(".memory-card").forEach((card) => {
    card.querySelector(".memory-card__open").addEventListener("click", () => {
      openMemory(Number(card.dataset.memory));
    });
  });

  document.querySelectorAll(".secret-note").forEach((button) => {
    button.addEventListener("click", () => {
      const wrapper = button.closest(".secret-wrap");
      const paper = wrapper.querySelector(".secret-note__paper");
      const isOpen = wrapper.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      paper.setAttribute("aria-hidden", String(!isOpen));
      button.innerHTML = isOpen
        ? '<span aria-hidden="true">&hearts;</span> keep this one safe'
        : '<span aria-hidden="true">&hearts;</span> a note I tucked away';
    });
  });

  document.querySelector(".memory-modal__close").addEventListener("click", closeMemory);
  modalPrevious.addEventListener("click", () => showModalMedia(modalMediaIndex - 1));
  modalNext.addEventListener("click", () => showModalMedia(modalMediaIndex + 1));
  memoryModal.addEventListener("click", (event) => {
    if (event.target === memoryModal) closeMemory();
  });
  memoryModal.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && !modalPrevious.hidden) showModalMedia(modalMediaIndex - 1);
    if (event.key === "ArrowRight" && !modalNext.hidden) showModalMedia(modalMediaIndex + 1);
  });

  const letter = document.querySelector("#final-letter");
  document.querySelector("#reveal-letter").addEventListener("click", () => {
    letter.classList.add("is-open");
    letter.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    makeConfetti();
    window.setTimeout(() => letter.querySelector(".final-letter__close").focus(), 450);
  });

  function closeLetter() {
    letter.classList.remove("is-open");
    letter.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.querySelector("#reveal-letter").focus();
  }

  letter.querySelector(".final-letter__close").addEventListener("click", closeLetter);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && letter.classList.contains("is-open")) closeLetter();
  });

  const initialTarget = window.location.hash && document.querySelector(window.location.hash);
  if (initialTarget) {
    cover.hidden = true;
    document.body.classList.remove("cover-is-closed");
    window.requestAnimationFrame(() => initialTarget.scrollIntoView({ behavior: "auto", block: "start" }));
  }
}

renderScrapbook();
setupMediaCarousels();
setupInteractions();
setupRevealObserver();
setupChapterNavigation();
setupCarousels();
