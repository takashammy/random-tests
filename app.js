/* Luminary 閱心 — editorial PWA */
const STORAGE_KEY = "luminary-state-v1";
const CATEGORIES = [
  "MEANING & EXISTENTIAL",
  "HABITS, FOCUS & TIME",
  "RELATIONSHIPS & INTIMACY",
  "WEALTH & AUTONOMY",
  "MINDSET & MENTAL MODELS",
  "WORK, CRAFT & CREATIVITY",
  "EMOTIONAL RESILIENCE",
  "CLASSICAL & EASTERN WISDOM",
  "COMMUNICATION & INFLUENCE",
  "HEALTH, BODY & LONGEVITY"
];

const CATEGORY_CN = {
  "MEANING & EXISTENTIAL": { tc: "生命意義與存在", sc: "生命意义与存在" },
  "HABITS, FOCUS & TIME": { tc: "習慣、專注與時間", sc: "习惯、专注与时间" },
  "RELATIONSHIPS & INTIMACY": { tc: "關係與親密", sc: "关系与亲密" },
  "WEALTH & AUTONOMY": { tc: "財富與自主", sc: "财富与自主" },
  "MINDSET & MENTAL MODELS": { tc: "心智與心智模型", sc: "心智与心智模型" },
  "WORK, CRAFT & CREATIVITY": { tc: "工作、技藝與創造", sc: "工作、技艺与创造" },
  "EMOTIONAL RESILIENCE": { tc: "情緒韌性", sc: "情绪韧性" },
  "CLASSICAL & EASTERN WISDOM": { tc: "東方古典智慧", sc: "东方古典智慧" },
  "COMMUNICATION & INFLUENCE": { tc: "溝通與影響力", sc: "沟通与影响力" },
  "HEALTH, BODY & LONGEVITY": { tc: "健康、身體與長壽", sc: "健康、身体与长寿" }
};

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const WEEKDAYS_CN = {
  tc: ["日", "一", "二", "三", "四", "五", "六"],
  sc: ["日", "一", "二", "三", "四", "五", "六"]
};

const todayISO = () => {
  const d = new Date();
  const z = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
};

const loadState = () => {
  const now = new Date();
  const base = {
    view: "reader",
    bookId: BOOKS[0].id,
    bilingual: true,
    script: "tc",
    membership: "pro",
    extraOpen: false,
    logs: [],
    calYear: now.getFullYear(),
    calMonth: now.getMonth(),
    selectedDate: todayISO(),
    category: "ALL",
    query: "",
    logFlash: ""
  };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const saved = JSON.parse(raw);
    return { ...base, ...saved, extraOpen: false, logFlash: "" };
  } catch {
    return base;
  }
};

const STATE = loadState();

const persist = () => {
  const { extraOpen, logFlash, ...rest } = STATE;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
};

const cn = (obj) => {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[STATE.script] || obj.tc || obj.sc || "";
};

const volumeIndex = (book) => BOOKS.findIndex((b) => b.id === book.id);
const volumeLabel = (book) => String(volumeIndex(book) + 1).padStart(2, "0");

const isTodaysDaily = (book) => {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const diff = Date.now() - start;
  const day = Math.floor(diff / 86400000);
  return BOOKS[day % BOOKS.length].id === book.id;
};

const isAccessible = (book) => {
  if (STATE.membership === "pro") return true;
  return book.isDailyFree || isTodaysDaily(book);
};

const topLabel = (book) => {
  if (book.isDailyFree || isTodaysDaily(book)) {
    return { en: "DAILY READ", cn: { tc: "每日選讀", sc: "每日选读" } };
  }
  return { en: book.topLabelEn, cn: book.topLabelCn };
};

const bookById = (id) => BOOKS.find((b) => b.id === id) || BOOKS[0];
const currentBook = () => bookById(STATE.bookId);

const logsForDate = (iso) => STATE.logs.filter((l) => l.date === iso);
const logsForBook = (id) => STATE.logs.filter((l) => l.bookId === id);
const todayLogForBook = (id) =>
  STATE.logs.find((l) => l.bookId === id && l.date === todayISO());

const weekBounds = () => {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - 6);
  start.setHours(0, 0, 0, 0);
  return start;
};

const weeklyLogs = () => {
  const start = weekBounds();
  return STATE.logs.filter((l) => new Date(l.date + "T12:00:00") >= start);
};

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const setDoc = () => {
  document.documentElement.dataset.script = STATE.script;
  document.documentElement.dataset.bilingual = STATE.bilingual ? "true" : "false";
  document.documentElement.lang = STATE.bilingual
    ? STATE.script === "sc"
      ? "zh-Hans"
      : "zh-Hant"
    : "en";
};

const renderNav = () => {
  const items = [
    ["reader", "01 READER", "閱"],
    ["library", "02 LIBRARY", "藏"],
    ["calendar", "03 CALENDAR", "曆"],
    ["profile", "04 PROFILE", "誌"]
  ];
  return items
    .map(
      ([id, en]) =>
        `<button type="button" data-act="view" data-view="${id}" ${
          STATE.view === id ? 'aria-current="page"' : ""
        }>${en}</button>`
    )
    .join("");
};

const spine = (inner, extraClass = "") =>
  `<div class="spine ${extraClass}">${inner}</div>`;

const row = (spineInner, content, extraRow = "") => `
  <section class="row ${extraRow}">
    <div class="bleed-l"></div>
    ${spine(spineInner)}
    <div class="col">${content}</div>
    <div class="bleed-r"></div>
  </section>`;

const highlightHtml = (h) => `
  <article class="highlight">
    <div class="num">${h.num}</div>
    <div>
      <h3>${escapeHtml(h.titleEn)}${
        STATE.bilingual
          ? `<span class="title-cn cn">${escapeHtml(cn(h.titleCn))}</span>`
          : ""
      }</h3>
      <p class="concept">${escapeHtml(h.conceptEn)}</p>
      <p class="plain">${escapeHtml(h.plainEn)}${
        STATE.bilingual
          ? `<span class="cn" style="display:block;margin-top:6px">${escapeHtml(
              cn(h.plainCn)
            )}</span>`
          : ""
      }</p>
    </div>
  </article>`;

const renderLocked = (book) =>
  row(
    `<span class="spine-num">PRO</span>`,
    `<div class="locked">
      <p class="meta">LUMINARY PRO</p>
      <h1>${escapeHtml(book.titleFlatEn)}</h1>
      ${
        STATE.bilingual
          ? `<p class="cn" style="font-size:20px">${escapeHtml(cn(book.titleCn))}</p>`
          : ""
      }
      <p>This volume is part of the full canon. Free Daily Read unlocks today's featured title. Switch to Luminary Pro Unlimited in Profile to open the library.</p>
      <button type="button" class="log-btn" data-act="view" data-view="profile" style="margin-top:16px">Open Profile</button>
    </div>`
  );

const renderReader = () => {
  const book = currentBook();
  const vol = volumeLabel(book);
  const labels = topLabel(book);
  const log = todayLogForBook(book.id);
  const next = BOOKS[(volumeIndex(book) + 1) % BOOKS.length];
  const practiceNum = STATE.bilingual ? "04" : "03";
  const easternNum = "03";

  if (!isAccessible(book)) {
    return (
      row(
        `<span class="spine-num">${vol}</span>`,
        `<div class="hairline-split meta">
          <span>${escapeHtml(labels.en)}</span>
          <span class="rule"></span>
          <span>${escapeHtml(book.categoryEn)}</span>
        </div>`
      ) + renderLocked(book)
    );
  }

  const titleHtml = `
    <div class="title-block">
      <h1>${book.titleLinesEn.map(escapeHtml).join("<br>")}</h1>
      <p class="author">${escapeHtml(book.authorLine)}</p>
      ${
        STATE.bilingual
          ? `<p class="title-cn cn">${escapeHtml(cn(book.titleCn))}</p>`
          : ""
      }
    </div>`;

  const quoteHtml = `
    <blockquote class="quote">${escapeHtml(book.quoteEn)}</blockquote>
    ${
      STATE.bilingual
        ? `<p class="quote-cn cn">${escapeHtml(cn(book.quoteCn))}</p>`
        : ""
    }
    <p class="lead">${escapeHtml(book.leadEn)}</p>
    ${
      STATE.bilingual
        ? `<p class="lead cn">${escapeHtml(cn(book.leadCn))}</p>`
        : ""
    }
    <p class="thesis-label meta">Core Thesis</p>
    <p class="thesis">${escapeHtml(book.thesisEn)}</p>
    ${
      STATE.bilingual
        ? `<p class="thesis cn" style="margin-top:10px">${escapeHtml(cn(book.thesisCn))}</p>`
        : ""
    }`;

  const extras = STATE.extraOpen
    ? book.extraHighlights.map(highlightHtml).join("") +
      `<div class="extra-foot" style="margin-top:16px">
        <span class="meta">04–10</span>
        <button type="button" class="collapse-btn" data-act="extra" aria-expanded="true">Collapse extra reading</button>
      </div>`
    : "";

  const eastern = STATE.bilingual
    ? row(
        `<span class="spine-num">${easternNum}</span>`,
        `<div class="section-kicker">
          <h2>Eastern Resonance</h2>
          <span class="cn-kicker cn">東方經典呼應</span>
        </div>
        <blockquote class="quote-class cn">${escapeHtml(cn(book.easternResonance.quote))}</blockquote>
        <p class="source cn">${escapeHtml(cn(book.easternResonance.source))}</p>
        <p class="commentary cn">${escapeHtml(cn(book.easternResonance.commentary))}</p>`,
        "eastern"
      )
    : "";

  const notes = log ? log.notes || "" : "";
  const checked = log && log.completed;

  return [
    row(
      `<span class="spine-num">${vol}</span>`,
      `<div class="hairline-split meta">
        <span>${escapeHtml(labels.en)}</span>
        ${STATE.bilingual ? `<span class="cn">${escapeHtml(cn(labels.cn))}</span>` : ""}
        <span class="rule"></span>
        <span>${escapeHtml(book.categoryEn)}</span>
        ${STATE.bilingual ? `<span class="cn">${escapeHtml(cn(book.categoryCn))}</span>` : ""}
      </div>`
    ),
    row(
      `<span class="spine-en">${escapeHtml(book.durationEn)}</span>${
        STATE.bilingual
          ? `<span class="spine-cn" style="margin-top:12px">${escapeHtml(
              cn(book.durationCn)
            )}</span>`
          : ""
      }`,
      titleHtml
    ),
    row(
      `<span class="spine-en">${escapeHtml(book.themeEn)}</span>${
        STATE.bilingual
          ? `<span class="spine-cn" style="margin-top:12px">${escapeHtml(
              cn(book.themeCn)
            )}</span>`
          : ""
      }`,
      quoteHtml
    ),
    row(
      `<span class="spine-num">02</span>`,
      `<div class="section-kicker">
        <h2>Chapter Summary</h2>
        ${STATE.bilingual ? `<span class="cn-kicker cn">章節析要</span>` : ""}
      </div>
      ${book.highlights.map(highlightHtml).join("")}`
    ),
    row(
      `<span class="spine-en">Extra</span>`,
      `<div class="extra-head">
        <div class="section-kicker" style="margin:0">
          <h2>Extra Reading</h2>
          ${STATE.bilingual ? `<span class="cn-kicker cn">延伸閱讀</span>` : ""}
        </div>
        <button type="button" class="collapse-btn" data-act="extra" aria-expanded="${
          STATE.extraOpen ? "true" : "false"
        }">${STATE.extraOpen ? "Collapse" : "Open 04–10"}</button>
      </div>
      ${extras}`
    ),
    eastern,
    row(
      `<span class="spine-num">${practiceNum}</span>`,
      `<div class="section-kicker">
        <h2>Behavior Practice</h2>
        ${STATE.bilingual ? `<span class="cn-kicker cn">行為練習</span>` : ""}
      </div>
      <div class="practice-box">
        <button type="button" class="chk" data-act="toggle-practice" aria-checked="${
          checked ? "true" : "false"
        }" role="checkbox" aria-label="Mark practice complete"></button>
        <p class="prompt">${escapeHtml(book.actionPromptEn)}${
          STATE.bilingual
            ? `<span class="cn" style="display:block;margin-top:8px">${escapeHtml(
                cn(book.actionPromptCn)
              )}</span>`
            : ""
        }</p>
      </div>
      <textarea class="journal" data-field="notes" placeholder="${
        STATE.bilingual
          ? STATE.script === "sc"
            ? "可选札记，写入日历……"
            : "可選札記，寫入日曆……"
          : "Optional journal note — logged to the calendar"
      }">${escapeHtml(notes)}</textarea>
      <div class="log-row">
        <span class="log-status">${
          STATE.logFlash
            ? escapeHtml(STATE.logFlash)
            : checked
            ? "LOGGED TO CALENDAR"
            : "UNLOGGED"
        }</span>
        <button type="button" class="log-btn" data-act="log">Log to calendar</button>
      </div>`
    ),
    row(
      `<span class="spine-en">Next</span>`,
      `<button type="button" class="next-footer" data-act="open-book" data-id="${next.id}">
        <span>
          <span class="k">Next volume ${volumeLabel(next)}</span><br>
          <span class="t">${escapeHtml(next.titleFlatEn)}</span>
          ${
            STATE.bilingual
              ? `<div class="cn" style="font-size:16px;margin-top:4px">${escapeHtml(
                  cn(next.titleCn)
                )}</div>`
              : ""
          }
        </span>
        <span class="k">→</span>
      </button>`
    )
  ].join("");
};

const matchesQuery = (book, q) => {
  if (!q) return true;
  const blob = [
    book.titleFlatEn,
    book.titleLinesEn.join(" "),
    book.authorLine,
    book.themeEn,
    book.categoryEn,
    book.leadEn,
    book.thesisEn,
    book.quoteEn,
    cn(book.titleCn),
    cn(book.leadCn),
    cn(book.thesisCn),
    cn(book.quoteCn),
    cn(book.themeCn),
    cn(book.categoryCn),
    ...book.highlights.flatMap((h) => [h.titleEn, h.conceptEn, h.plainEn, cn(h.titleCn), cn(h.plainCn)]),
    ...book.extraHighlights.flatMap((h) => [h.titleEn, h.conceptEn, h.plainEn, cn(h.titleCn), cn(h.plainCn)]),
    cn(book.easternResonance.quote),
    cn(book.easternResonance.source),
    cn(book.easternResonance.commentary)
  ]
    .join(" ")
    .toLowerCase();
  return blob.includes(q);
};

const renderLibrary = () => {
  const q = STATE.query.trim().toLowerCase();
  const list = BOOKS.filter((b) => {
    if (STATE.category !== "ALL" && b.categoryFilter !== STATE.category) return false;
    return matchesQuery(b, q);
  });

  const cats = ["ALL", ...CATEGORIES]
    .map((c) => {
      const label =
        c === "ALL"
          ? "ALL"
          : STATE.bilingual
          ? `${c} · ${cn(CATEGORY_CN[c])}`
          : c;
      return `<button type="button" class="cat" data-act="cat" data-cat="${c}" aria-pressed="${
        STATE.category === c ? "true" : "false"
      }">${escapeHtml(label)}</button>`;
    })
    .join("");

  const rows = list
    .map((book) => {
      const logged = logsForBook(book.id).some((l) => l.completed);
      const locked = !isAccessible(book);
      const badges = [
        locked ? `<span class="badge pro">Pro</span>` : "",
        logged ? `<span class="badge logged">Logged ✓</span>` : "",
        book.isDailyFree || isTodaysDaily(book) ? `<span class="badge">Daily</span>` : ""
      ].join("");
      return `<button type="button" class="book-row" data-act="open-book" data-id="${book.id}">
        <div class="vol">${volumeLabel(book)}</div>
        <div>
          <h3>${escapeHtml(book.titleFlatEn)}</h3>
          <p class="by">${escapeHtml(book.authorLine)} · ${escapeHtml(book.categoryEn)}</p>
          ${
            STATE.bilingual
              ? `<p class="cn-title cn">${escapeHtml(cn(book.titleCn))}</p>`
              : ""
          }
        </div>
        <div class="badges">${badges}</div>
      </button>`;
    })
    .join("");

  return [
    row(
      `<span class="spine-num">02</span>`,
      `<div class="toolbar">
        <input class="search" data-field="query" type="search" placeholder="${
          STATE.bilingual
            ? "Search title, author, concept, 中文…"
            : "Search title, author, concept, Chinese…"
        }" value="${escapeHtml(STATE.query)}" />
        <div class="cats">${cats}</div>
      </div>`
    ),
    row(
      `<span class="spine-en">${list.length} VOL</span>`,
      list.length
        ? `<div class="book-list">${rows}</div>`
        : `<p class="empty">No volumes match this filter.</p>`
    )
  ].join("");
};

const monthMatrix = (year, month) => {
  const first = new Date(year, month, 1);
  const start = first.getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < start; i++) {
    const prev = new Date(year, month, 1 - (start - i));
    cells.push({ date: prev, out: true });
  }
  for (let d = 1; d <= days; d++) {
    cells.push({ date: new Date(year, month, d), out: false });
  }
  while (cells.length % 7) {
    const last = cells[cells.length - 1].date;
    const n = new Date(last);
    n.setDate(n.getDate() + 1);
    cells.push({ date: n, out: true });
  }
  return cells;
};

const isoFromDate = (d) => {
  const z = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
};

const renderCalendar = () => {
  const { calYear: y, calMonth: m } = STATE;
  const title = new Date(y, m, 1).toLocaleString("en", { month: "long", year: "numeric" });
  const cells = monthMatrix(y, m);
  const selectedLogs = logsForDate(STATE.selectedDate);

  const weekHead = WEEKDAYS.map(
    (w, i) =>
      `<span>${w}${STATE.bilingual ? ` · ${WEEKDAYS_CN[STATE.script][i]}` : ""}</span>`
  ).join("");

  const days = cells
    .map(({ date, out }) => {
      const iso = isoFromDate(date);
      const logs = logsForDate(iso);
      const pressed = iso === STATE.selectedDate;
      const dots = logs
        .slice(0, 5)
        .map(() => `<span class="dot"></span>`)
        .join("");
      return `<button type="button" class="day ${out ? "out" : ""}" data-act="pick-day" data-iso="${iso}" aria-pressed="${
        pressed ? "true" : "false"
      }">
        <div class="n">${date.getDate()}</div>
        <div class="dots">${dots}</div>
      </button>`;
    })
    .join("");

  const inspector = selectedLogs.length
    ? selectedLogs
        .map((log) => {
          const b = bookById(log.bookId);
          return `<article class="log-card">
            <p class="meta">${log.completed ? "PRACTICE COMPLETE" : "NOTE"} · ${volumeLabel(b)}</p>
            <h3>${escapeHtml(b.titleFlatEn)}</h3>
            ${
              STATE.bilingual
                ? `<p class="cn">${escapeHtml(cn(b.titleCn))}</p>`
                : ""
            }
            ${log.notes ? `<p>${escapeHtml(log.notes)}</p>` : "<p class='meta'>No journal note.</p>"}
          </article>`;
        })
        .join("")
    : `<p class="empty">No logs on this day. Practice from the Reader writes here — multiple volumes may share a date.</p>`;

  return [
    row(
      `<span class="spine-num">03</span>`,
      `<div class="cal-head">
        <h1>${escapeHtml(title)}</h1>
        <div class="month-nav">
          <button type="button" data-act="cal-shift" data-dir="-1">Prev</button>
          <button type="button" data-act="cal-shift" data-dir="1">Next</button>
        </div>
      </div>
      <div class="weekdays">${weekHead}</div>
      <div class="days">${days}</div>`
    ),
    row(
      `<span class="spine-en">${STATE.selectedDate}</span>`,
      `<div class="inspector">
        <h2>Day inspector · ${STATE.selectedDate}</h2>
        ${inspector}
      </div>`
    )
  ].join("");
};

const seg = (name, options) =>
  `<div class="seg">${options
    .map(
      ([value, label]) =>
        `<button type="button" data-act="set" data-key="${name}" data-value="${value}" aria-pressed="${
          String(STATE[name]) === String(value) ? "true" : "false"
        }">${label}</button>`
    )
    .join("")}</div>`;

const renderProfile = () => {
  const week = weeklyLogs();
  const booksRead = new Set(week.map((l) => l.bookId)).size;
  const practices = week.filter((l) => l.completed).length;

  return [
    row(
      `<span class="spine-num">04</span>`,
      `<p class="meta">Settings & synthesis</p>
      <h1 style="margin:8px 0 0;font-size:32px;font-weight:500">Profile</h1>
      ${
        STATE.bilingual
          ? `<p class="cn" style="font-size:18px;margin:6px 0 0">誌 · 週報與設定</p>`
          : ""
      }`
    ),
    row(
      `<span class="spine-en">Lang</span>`,
      `<div class="setting">
        <div>
          <h3>Language</h3>
          <p>English-only hides Chinese copy and Eastern Resonance. Bilingual restores both.</p>
        </div>
        ${seg("bilingual", [
          ["true", "Bilingual + Resonance"],
          ["false", "English only"]
        ])}
      </div>
      <div class="setting">
        <div>
          <h3>Script</h3>
          <p>Traditional 繁體 or Simplified 简体 for all Chinese copy.</p>
        </div>
        ${seg("script", [
          ["tc", "繁體"],
          ["sc", "简体"]
        ])}
      </div>
      <div class="setting">
        <div>
          <h3>Membership</h3>
          <p>Free Daily Read opens today's featured volume (and marked daily titles). Pro unlocks the fifteen-volume canon.</p>
        </div>
        ${seg("membership", [
          ["pro", "Luminary Pro"],
          ["free", "Free Daily Read"]
        ])}
      </div>`
    ),
    row(
      `<span class="spine-en">Week</span>`,
      `<p class="meta">Read-only weekly review</p>
      <div class="metrics">
        <div class="metric">
          <div class="n">${booksRead}</div>
          <div class="l">Books read · last 7 days</div>
        </div>
        <div class="metric">
          <div class="n">${practices}</div>
          <div class="l">Practices applied · last 7 days</div>
        </div>
      </div>
      <p style="margin-top:16px;max-width:58ch">Logs persist locally in <span class="meta">STATE.logs</span>. Export writes a Markdown file for Obsidian, Notion, or Logseq.</p>
      <button type="button" class="export-btn" data-act="export">Export Markdown</button>`
    )
  ].join("");
};

const render = () => {
  setDoc();
  document.getElementById("view-nav").innerHTML = renderNav();
  const stage = document.getElementById("stage");
  const views = {
    reader: renderReader,
    library: renderLibrary,
    calendar: renderCalendar,
    profile: renderProfile
  };
  stage.innerHTML = (views[STATE.view] || renderReader)();
  persist();
};

const captureNotes = () => {
  const ta = document.querySelector("textarea[data-field='notes']");
  if (!ta) return;
  const val = ta.value;
  const date = todayISO();
  const existing = STATE.logs.findIndex((l) => l.bookId === STATE.bookId && l.date === date);
  if (existing >= 0) {
    STATE.logs[existing].notes = val;
    persist();
    return;
  }
  if (val.trim()) {
    STATE.logs.push({
      bookId: STATE.bookId,
      date,
      completed: false,
      notes: val,
      at: Date.now()
    });
    persist();
  }
};

const upsertLog = ({ completed, notes }) => {
  captureNotes();
  const book = currentBook();
  const date = todayISO();
  const existing = STATE.logs.findIndex((l) => l.bookId === book.id && l.date === date);
  const ta = document.querySelector("textarea[data-field='notes']");
  const prev = existing >= 0 ? STATE.logs[existing] : { completed: false, notes: "" };
  const next = {
    bookId: book.id,
    date,
    completed: completed != null ? completed : prev.completed,
    notes: notes != null ? notes : ta ? ta.value : prev.notes,
    at: Date.now()
  };
  if (existing >= 0) STATE.logs[existing] = { ...prev, ...next };
  else STATE.logs.push(next);
  STATE.logFlash = "LOGGED TO CALENDAR · " + date;
  persist();
};

const exportMarkdown = () => {
  const week = weeklyLogs();
  const all = [...STATE.logs].sort((a, b) => a.date.localeCompare(b.date) || a.at - b.at);
  const lines = [
    "# Luminary 閱心 — Reading Log",
    "",
    `Exported: ${new Date().toISOString()}`,
    `Membership: ${STATE.membership === "pro" ? "Luminary Pro Unlimited" : "Free Daily Read"}`,
    `Language: ${STATE.bilingual ? "Bilingual (" + (STATE.script === "sc" ? "简体" : "繁體") + ")" : "English only"}`,
    "",
    "## Weekly review (last 7 days)",
    "",
    `- Books read: ${new Set(week.map((l) => l.bookId)).size}`,
    `- Practices applied: ${week.filter((l) => l.completed).length}`,
    "",
    "## Log",
    ""
  ];
  if (!all.length) lines.push("_No logs yet._", "");
  let lastDate = "";
  for (const log of all) {
    if (log.date !== lastDate) {
      lines.push(`### ${log.date}`, "");
      lastDate = log.date;
    }
    const b = bookById(log.bookId);
    lines.push(`- **${b.titleFlatEn}**${STATE.bilingual ? " · " + cn(b.titleCn) : ""}`);
    lines.push(`  - Practice: ${log.completed ? "complete" : "noted"}`);
    if (log.notes) {
      log.notes.split(/\n/).forEach((n) => lines.push(`  - Note: ${n}`));
    }
    lines.push("");
  }
  const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `luminary-log-${todayISO()}.md`;
  a.click();
  URL.revokeObjectURL(a.href);
};

const onClick = (e) => {
  const btn = e.target.closest("[data-act]");
  if (!btn) return;
  const act = btn.dataset.act;
  captureNotes();
  STATE.logFlash = "";
  if (act === "view") {
    STATE.view = btn.dataset.view;
    STATE.extraOpen = false;
  } else if (act === "extra") {
    STATE.extraOpen = !STATE.extraOpen;
  } else if (act === "open-book") {
    STATE.bookId = btn.dataset.id;
    STATE.view = "reader";
    STATE.extraOpen = false;
  } else if (act === "cat") {
    STATE.category = btn.dataset.cat;
  } else if (act === "pick-day") {
    STATE.selectedDate = btn.dataset.iso;
  } else if (act === "cal-shift") {
    const d = new Date(STATE.calYear, STATE.calMonth + Number(btn.dataset.dir), 1);
    STATE.calYear = d.getFullYear();
    STATE.calMonth = d.getMonth();
  } else if (act === "set") {
    const key = btn.dataset.key;
    let value = btn.dataset.value;
    if (key === "bilingual") value = value === "true";
    STATE[key] = value;
  } else if (act === "toggle-practice") {
    const ta = document.querySelector("textarea[data-field='notes']");
    const current = todayLogForBook(STATE.bookId);
    upsertLog({
      completed: !(current && current.completed),
      notes: ta ? ta.value : current ? current.notes : "",
      fromToggle: true
    });
  } else if (act === "log") {
    const ta = document.querySelector("textarea[data-field='notes']");
    upsertLog({
      completed: true,
      notes: ta ? ta.value : "",
      fromToggle: true
    });
  } else if (act === "export") {
    exportMarkdown();
    return;
  }
  render();
};

const onInput = (e) => {
  const field = e.target.dataset.field;
  if (field === "notes") {
    captureNotes();
    return;
  }
  if (field === "query") {
    STATE.query = e.target.value;
    const active = document.activeElement === e.target;
    const start = e.target.selectionStart;
    render();
    if (active) {
      const again = document.querySelector("[data-field='query']");
      if (again) {
        again.focus();
        again.setSelectionRange(start, start);
      }
    }
  }
};

document.addEventListener("click", onClick);
document.addEventListener("input", onInput);

document.addEventListener("DOMContentLoaded", render);
if (document.readyState !== "loading") render();
