document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  const heroSection = document.querySelector(".hero");
  const allSections = document.querySelectorAll(".section");

  const h1 = heroSection.querySelector("h1");
  const h2 = heroSection.querySelector("h2");
  const subtitle = heroSection.querySelector(".subtitle");

  const goodChoice = document.getElementById("goodChoice");
  const tooLate = document.getElementById("tooLate");
  const revealSections = document.querySelectorAll(".reveal-after-yes");

  /* =========================
     INITIAL STATE (VERY IMPORTANT)
  ========================= */
  allSections.forEach(section => {
    if (!section.classList.contains("hero")) {
      section.classList.add("hidden");
    }
  });

  /* =========================
     STORE ORIGINAL SIZES
  ========================= */
  let h1Size = parseFloat(getComputedStyle(h1).fontSize);
  let h2Size = parseFloat(getComputedStyle(h2).fontSize);
  let subtitleSize = parseFloat(getComputedStyle(subtitle).fontSize);
  let yesFontSize = parseFloat(getComputedStyle(yesBtn).fontSize);

  let yesPaddingX = 20;
  let yesPaddingY = 10;

  /* =========================
     YES BUTTON
  ========================= */
  yesBtn.addEventListener("click", () => {
    heroSection.classList.add("hidden");
    goodChoice.classList.remove("hidden");
    revealSections.forEach(sec => sec.classList.remove("hidden"));
  });

  /* =========================
     NO BUTTON LOGIC 💔
  ========================= */
  const noTexts = [
    "No 😒",
    "are you sure?? 😢",
    "what if i gift you a diet coke!! 🥤",
    "pretty please 🥺",
    "with a pack of spicy ramen 🍜🔥",
    "what about a date at your fav restaurant 🍽️",
    "with ghumi ghumi option 🥰",
    "please yrrr!! 😭",
    "But :((",
    "i am going to die 💀",
    "yep i'm dead :(((( ",
    "pretty please 🙏",
    "No :(( no means no 💔",
    "Noooo 😭",
    "get lost 😤",
    "No 😒"
  ];

  let noClickCount = 0;

  noBtn.style.position = "fixed";
  noBtn.style.transition = "left 0.15s ease, top 0.15s ease";

  noBtn.addEventListener("click", () => {
    noBtn.innerText = noTexts[noClickCount % noTexts.length];
    noClickCount++;

    /* Increase sizes safely (no overlap) */
    h1Size += 2;
    h2Size += 2;
    subtitleSize += 1.5;
    yesFontSize += 1.5;

    h1.style.fontSize = `${h1Size}px`;
    h2.style.fontSize = `${h2Size}px`;
    subtitle.style.fontSize = `${subtitleSize}px`;
    yesBtn.style.fontSize = `${yesFontSize}px`;

    yesPaddingX += 2;
    yesPaddingY += 1;
    yesBtn.style.padding = `${yesPaddingY}px ${yesPaddingX}px`;

    /* Keep NO button very close to YES */
    const yesRect = yesBtn.getBoundingClientRect();
    const offsetX = Math.random() * 40 - 20;
    const offsetY = Math.random() * 30 - 15;

    noBtn.style.left = `${yesRect.right + offsetX}px`;
    noBtn.style.top = `${yesRect.top + offsetY}px`;
  });

  /* =========================
     FAKE NO → TOO LATE 😈
  ========================= */
  const fakeNo = document.getElementById("fakeNo");
  if (fakeNo) {
    fakeNo.addEventListener("click", () => {
      goodChoice.classList.add("hidden");
      tooLate.classList.remove("hidden");
    });
  }

  /* =========================
     LOVE BOX TAP 💗
  ========================= */
  document.querySelectorAll(".love-box").forEach(box => {
    box.addEventListener("click", () => {
      const text = box.querySelector(".love-text");
      text.innerText = box.dataset.text;
      text.classList.toggle("hidden");
    });
  });

  /* =========================
     SECRET NOTE 💌
  ========================= */
  const tapText = document.querySelector(".tap-text");
  const secretNote = document.querySelector(".secret-note");

  if (tapText && secretNote) {
    tapText.addEventListener("click", () => {
      tapText.classList.add("hidden");
      secretNote.classList.remove("hidden");
    });
  }

});
document.querySelectorAll(".memory-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
