
// PHOTOS: Replace image URLs and captions with your own family photos.
const memoryData = [
  { src: "1.jpeg", caption: "" },
  { src: "2.jpeg", caption: "" },
  { src: "3.jpeg", caption: "" },
  { src: "4.jpeg", caption: "" },
  { src: "5.jpeg", caption: "" },
  { src: "9.jpeg", caption: "" },
  { src: "7.jpeg", caption: "" },
  { src: "8.jpeg", caption: "" }
];

// EDIT LETTER MESSAGE: This text is shown with a typing animation.
const letterText = `నాన్నా,

ఈ మధ్య నేను చాలా ఆలోచిస్తున్నాను ఈ రోజు నేను ఇలా ఉన్నానంటే, దానికి కారణం మీరు చేసిన ప్రతి త్యాగం, ప్రతి కష్టం. నేను పెద్దవాడవుతున్న కొద్దీ, ముందు సాధారణంగా అనిపించిన మీ మాటలు, మీ సలహాలు, మీరు ఒత్తిడిని ఎదుర్కొనే తీరు ఇవన్నీ నిజానికి మీరు నాకు నేర్పిన జీవిత పాఠాలని ఇప్పుడు అర్థమవుతోంది.

నేను మిమ్మల్ని బాధపెట్టాను చెప్పకూడని మాటలు చెప్పాను, చేయకూడని పనులు చేశాను. ఇప్పుడు అవన్నీ గుర్తొస్తే నాకు చాలా బాధగా, పశ్చాత్తాపంగా ఉంది. ఇకపై ఎప్పటికీ మిమ్మల్ని బాధపెట్టను నాన్నా. ఎప్పుడూ మీకు గర్వంగా ఉండే కొడుకుగా మారుతాను.నిజంగా నేను మిమ్మల్ని చాలా ప్రేమిస్తున్నాను. నా జీవితంలో మీరు ఎప్పటికీ నా హీరో. ఒక గొప్ప ప్రిన్సిపల్‌గా మాత్రమే కాదు, గొప్ప వ్యక్తిత్వం ఉన్న మనిషిగా కూడా మీరు నాకు ఆదర్శం. మీ గురించి ఆలోచిస్తే గర్వంగా ఉంటుంది.
నా కోసం మీరు ఎన్నో త్యాగాలు చేశారు. నేను అడిగిన ప్రతిదీ ఇచ్చారు. నేను దారి తప్పినప్పుడు కూడా ఎప్పుడూ సరైన దారిని చూపించారు. ఈ రోజునేను ఎవరో, నా జీవితంలో నాకు వచ్చిన ప్రతి విజయానికి కారణం మీరు.
మీ కొడుకుగా పుట్టినందుకు నాకు చాలా గర్వంగా ఉంది. మీ చిన్నప్పుడు మీరు అనుభవించలేని ఎన్నో సౌకర్యాలు, సుఖాలు నాకు ఇవ్వడానికి మీరు ఎంత కష్టపడ్డారో ఇప్పుడు అర్థమవుతోంది నాన్నా. నాకు కావాల్సిన ప్రతి సౌకర్యాన్ని ఇచ్చి, ఎప్పుడూ లోటు అనిపించనివ్వలేదు. అందుకు మీకు ఎంత ధన్యవాదాలు చెప్పినా తక్కువే.

మీ కొడుకుగా పుట్టినందుకు నేను నిజంగా చాలా అదృష్టవంతుడిని చాలా గర్వంగా కూడా ఉంటుంది నాన్నా.

మీరు నాకు చూపించిన ప్రేమ, జాగ్రత్త ఇవన్నీ అమూల్యమైనవి. వాటికి విలువ కట్టలేం. నేను మీకు గర్వంగా ఉండే కొడుకుగా తప్పకుండా 
మారుతానని మాట ఇస్తున్నాను. మీ కోసం చాలా కష్టపడి పనిచేస్తాను నాన్నా.`;


const sparkleLayer = document.getElementById("sparkleLayer");
const starsLayer = document.getElementById("stars");
const memoryGrid = document.getElementById("memoryGrid");
const typedLetter = document.getElementById("typedLetter");
const startMemoriesBtn = document.getElementById("startMemoriesBtn");
const backToTopBtn = document.getElementById("backToTop");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightboxBtn = document.getElementById("closeLightbox");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const bgMusic = document.getElementById("bgMusic");
const confettiLayer = document.getElementById("confettiLayer");
const surpriseSection = document.getElementById("surprise");

const confettiPalette = ["#f8c4d4", "#ecd6a8", "#d2e7ff", "#ffdff0", "#ffffff"];
const TARGET_MUSIC_VOLUME = 0.18;
const FADE_IN_DURATION_MS = 2400;
const AUTOPLAY_RETRY_INTERVAL_MS = 250;
const AUTOPLAY_RETRY_LIMIT = 36;
let typingStarted = false;
let confettiPlayed = false;
let autoplayRetryTimer = null;
let volumeFadeFrame = null;
let musicPreloaded = false;
let userMutedMusic = false;
let browserBlockedAudibleMusic = false;

function buildSparkles(total) {
  for (let i = 0; i < total; i += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.setProperty("--size", `${Math.random() * 4 + 2}px`);
    sparkle.style.setProperty("--x", `${Math.random() * 100}%`);
    sparkle.style.setProperty("--y", `${Math.random() * 100}%`);
    sparkle.style.setProperty("--duration", `${Math.random() * 4 + 4}s`);
    sparkle.style.setProperty("--delay", `${Math.random() * 5}s`);
    sparkleLayer.appendChild(sparkle);
  }
}

function buildStars(total) {
  for (let i = 0; i < total; i += 1) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.setProperty("--star-size", `${Math.random() * 3 + 1}px`);
    star.style.setProperty("--star-x", `${Math.random() * 100}%`);
    star.style.setProperty("--star-y", `${Math.random() * 100}%`);
    star.style.setProperty("--star-duration", `${Math.random() * 4 + 3}s`);
    star.style.setProperty("--star-delay", `${Math.random() * 4}s`);
    starsLayer.appendChild(star);
  }
}

function createFallbackImage(text) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='900'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#ffe8f1' />
        <stop offset='100%' stop-color='#dcecff' />
      </linearGradient>
    </defs>
    <rect width='1200' height='900' fill='url(#g)' />
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#7a658a' font-size='42' font-family='Poppins, Arial'>${text}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function renderGallery() {
  memoryGrid.innerHTML = memoryData
    .map((item, index) => {
      const tilt = index % 2 === 0 ? -1.2 : 1.15;
      return `
        <article class="memory-card reveal">
          <div class="card-inner" style="--tilt:${tilt}deg">
            <img class="memory-photo" src="${item.src}" alt="${item.caption}" loading="lazy" />
            <p class="memory-caption">${item.caption}</p>
          </div>
        </article>
      `;
    })
    .join("");

  memoryGrid.querySelectorAll(".memory-photo").forEach((img) => {
    img.addEventListener("error", () => {
      img.src = createFallbackImage("Add Family Photo");
    });
  });
}


function setupReveals() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function typeLetter() {
  let i = 0;
  typedLetter.textContent = "";
  const timer = setInterval(() => {
    typedLetter.textContent += letterText.charAt(i);
    i += 1;
    if (i >= letterText.length) {
      clearInterval(timer);
    }
  }, 22);
}

function setupLetterAnimation() {
  const letterSection = document.getElementById("letter");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !typingStarted) {
          typingStarted = true;
          typeLetter();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.34 }
  );
  observer.observe(letterSection);
}

function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function setupLightbox() {
  memoryGrid.addEventListener("click", (event) => {
    const photo = event.target.closest(".memory-photo");
    if (!photo) {
      return;
    }
    const caption = photo.parentElement.nextElementSibling?.textContent || "Family memory";
    openLightbox(photo.src, caption);
  });

  closeLightboxBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}

function setMusicVisualState() {
  if (bgMusic.paused) {
    musicIcon.textContent = "♪";
    musicToggle.setAttribute("aria-label", "Play music");
    return;
  }

  if (bgMusic.muted) {
    musicIcon.textContent = "🔇";
    musicToggle.setAttribute("aria-label", "Unmute music");
    return;
  }

  musicIcon.textContent = "🔊";
  musicToggle.setAttribute("aria-label", "Mute music");
}

function prepareMusicElement() {
  if (!bgMusic) {
    return;
  }

  bgMusic.loop = true;
  bgMusic.preload = "auto";
  bgMusic.defaultMuted = false;
  bgMusic.setAttribute("autoplay", "");
  bgMusic.setAttribute("playsinline", "");

  if (!musicPreloaded) {
    bgMusic.load();
    musicPreloaded = true;
  }
}

async function playMusic({ muted = false } = {}) {
  prepareMusicElement();

  if (!bgMusic) {
    return false;
  }

  bgMusic.muted = muted || userMutedMusic;

  try {
    if (bgMusic.paused) {
      bgMusic.volume = 0;
      await bgMusic.play();
    }
    if (!bgMusic.muted) {
      startMusicFadeIn();
      browserBlockedAudibleMusic = false;
    }
    setMusicVisualState();
    return true;
  } catch (error) {
    setMusicVisualState();
    return false;
  }
}

async function tryAutoplayMusic() {
  if (userMutedMusic) {
    return false;
  }

  const audibleStarted = await playMusic({ muted: false });
  if (audibleStarted) {
    return true;
  }

  browserBlockedAudibleMusic = true;
  await playMusic({ muted: true });
  return false;
}

function stopMusicFadeIn() {
  if (volumeFadeFrame) {
    cancelAnimationFrame(volumeFadeFrame);
    volumeFadeFrame = null;
  }
}

function startMusicFadeIn() {
  if (!bgMusic || bgMusic.muted) {
    return;
  }

  stopMusicFadeIn();

  const startedAt = performance.now();
  const startingVolume = Math.min(bgMusic.volume, TARGET_MUSIC_VOLUME);

  const fade = (now) => {
    if (bgMusic.muted || bgMusic.paused) {
      stopMusicFadeIn();
      return;
    }

    const progress = Math.min((now - startedAt) / FADE_IN_DURATION_MS, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    bgMusic.volume = startingVolume + (TARGET_MUSIC_VOLUME - startingVolume) * easedProgress;

    if (progress >= 1) {
      bgMusic.volume = TARGET_MUSIC_VOLUME;
      stopMusicFadeIn();
      return;
    }

    volumeFadeFrame = requestAnimationFrame(fade);
  };

  volumeFadeFrame = requestAnimationFrame(fade);
}

function stopAutoplayRetry() {
  if (autoplayRetryTimer) {
    clearInterval(autoplayRetryTimer);
    autoplayRetryTimer = null;
  }
}

function setupInstantMusicStart() {
  prepareMusicElement();
  bgMusic.volume = 0;
  tryAutoplayMusic();

  let attempts = 0;
  autoplayRetryTimer = setInterval(async () => {
    attempts += 1;
    if (!bgMusic.paused && !bgMusic.muted) {
      stopAutoplayRetry();
      return;
    }
    const started = await tryAutoplayMusic();
    if (started || attempts >= AUTOPLAY_RETRY_LIMIT) {
      stopAutoplayRetry();
    }
  }, AUTOPLAY_RETRY_INTERVAL_MS);

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && (bgMusic.paused || bgMusic.muted) && !userMutedMusic) {
      tryAutoplayMusic();
    }
  });

  window.addEventListener("pageshow", () => {
    if ((bgMusic.paused || bgMusic.muted) && !userMutedMusic) {
      tryAutoplayMusic();
    }
  });
}

function setupMusicControl() {
  musicToggle.addEventListener("click", async () => {
    if (bgMusic.paused) {
      userMutedMusic = false;
      await playMusic({ muted: false });
      setMusicVisualState();
      return;
    }

    if (bgMusic.muted) {
      userMutedMusic = false;
      bgMusic.muted = false;
      bgMusic.volume = 0;
      await playMusic({ muted: false });
      startMusicFadeIn();
      setMusicVisualState();
      return;
    }

    userMutedMusic = true;
    bgMusic.muted = true;
    stopMusicFadeIn();
    bgMusic.volume = 0;
    setMusicVisualState();
  });
  const interactionEvents = ["pointerdown", "touchstart", "keydown", "scroll"];
  interactionEvents.forEach((eventName) => {
    document.addEventListener(
      eventName,
      async () => {
        if (!userMutedMusic && (bgMusic.paused || bgMusic.muted || browserBlockedAudibleMusic)) {
          bgMusic.muted = false;
          bgMusic.volume = 0;
          await playMusic({ muted: false });
        }
        stopAutoplayRetry();
      },
      { once: true, passive: true }
    );
  });
}

function launchConfetti() {
  confettiLayer.innerHTML = "";
  for (let i = 0; i < 90; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--fall-duration", `${Math.random() * 2 + 3}s`);
    piece.style.setProperty("--fall-delay", `${Math.random() * 0.9}s`);
    piece.style.setProperty("--rotate", `${Math.random() * 900 - 450}deg`);
    piece.style.setProperty("--drift", `${Math.random() * 120 - 60}px`);
    piece.style.background = confettiPalette[Math.floor(Math.random() * confettiPalette.length)];
    confettiLayer.appendChild(piece);
  }
}

function setupFinalSectionAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !confettiPlayed) {
          confettiPlayed = true;
          launchConfetti();
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(surpriseSection);
}

function setupParallax() {
  const layers = document.querySelectorAll(".parallax-layer");
  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY;
    layers.forEach((layer) => {
      const speed = Number(layer.dataset.parallax || 0.06);
      layer.style.setProperty("--parallax-offset", `${scrollY * speed}px`);
    });
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  });
}

function setupNavigationButtons() {
  startMemoriesBtn.addEventListener("click", () => {
    const scrollAmount = Math.max(window.innerHeight * 0.35, 220);
    window.scrollBy({ top: scrollAmount, behavior: "smooth" });
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("visible", window.scrollY > 520);
  });
}

function setupLoader() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 650);
  });
}

function init() {
  setupInstantMusicStart();
  renderGallery();
  setupReveals();
  setupLetterAnimation();
  setupLightbox();
  setupMusicControl();
  setupNavigationButtons();
  setupParallax();
  setupFinalSectionAnimation();
  setupLoader();
  buildSparkles(55);
  buildStars(42);
}

init();
