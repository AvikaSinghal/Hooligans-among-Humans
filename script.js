(() => {
  const publication = window.PUBLICATION;
  const main = document.querySelector("#main");
  const dateLabel = (value) => new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${value}T12:00:00`));
  const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const query = () => new URLSearchParams(location.search);
  const routeURL = (values) => `?${new URLSearchParams(values).toString()}`;

  function articleCard(article, featured = false) {
    return `<article class="post-card ${featured ? "post-featured" : ""}" data-search="${escapeHTML(`${article.title} ${article.excerpt} ${article.category || ""} ${article.paragraphs.join(" ")}`.toLowerCase())}">
      <a class="card-link" href="${routeURL({ article: article.slug })}" data-nav aria-label="Read ${escapeHTML(article.title)}">
        <div class="card-art art-${(publication.articles.indexOf(article) % 6) + 1}"><span class="card-art-label">${escapeHTML(article.category)}</span><span class="card-art-shape" aria-hidden="true"></span><span class="card-arrow" aria-hidden="true">↗</span></div>
        <div class="card-meta"><span>${escapeHTML(article.category)}</span><span>${dateLabel(article.date)}</span></div>
        <h3>${escapeHTML(article.title)}</h3><p>${escapeHTML(article.excerpt)}</p>
        <span class="read-time">${article.readMinutes} min read <span aria-hidden="true">·</span> Read article</span>
      </a>
    </article>`;
  }

  function logCard(entry) {
    return `<article class="log-card" data-search="${escapeHTML(`${entry.title} ${entry.excerpt} ${entry.kind} ${entry.paragraphs.join(" ")}`.toLowerCase())}">
      <a class="log-card-link" href="${routeURL({ log: entry.slug })}" data-nav><div class="log-card-art"><span class="log-scribble" aria-hidden="true">✳</span><span class="log-art-tag">${escapeHTML(entry.kind)}</span></div><div class="card-meta"><span>From the personal log</span><span>${dateLabel(entry.date)}</span></div><h3>${escapeHTML(entry.title)}</h3><p>${escapeHTML(entry.excerpt)}</p><span class="read-time">${entry.readMinutes} min read <span aria-hidden="true">·</span> Open journal</span></a>
    </article>`;
  }

  function applySearch(value) {
    const term = value.trim().toLowerCase();
    const cards = [...main.querySelectorAll("[data-search]")];
    let shown = 0;
    cards.forEach((card) => {
      const match = card.dataset.search.includes(term);
      card.hidden = !match;
      if (match) shown += 1;
    });
    const empty = main.querySelector(".empty-state");
    if (empty) empty.hidden = shown > 0;
  }

  function searchControls(value = "") {
    return `<label class="search-box"><span class="sr-only">Search posts</span><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.7" cy="8.7" r="5.8"></circle><path d="m13 13 4 4"></path></svg><input id="search" type="search" placeholder="Search the archive…" value="${escapeHTML(value)}" autocomplete="off" /></label>`;
  }

  function renderHome() {
    const featured = publication.articles.filter((article) => article.featured).slice(0, 2);
    const recent = [...publication.articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
    return `<section class="hero" aria-labelledby="hero-title"><div class="hero-copy"><p class="eyebrow"><span class="eyebrow-line"></span> A curious publication about people</p><h1 id="hero-title"><span class="hero-title-pink">HOOLIGANS</span><br />AMONG <span class="hero-title-block">HUMANS.</span></h1><p class="hero-intro">A field guide to the wonderfully weird business of being human. Psychology, brain science, behaviour, and the personal stuff happening along the way.</p><div class="hero-actions"><a class="text-link" href="?page=blog" data-nav>Explore the blog <span aria-hidden="true">↘</span></a><a class="plain-link" href="?page=log" data-nav>Peek at the personal log</a></div></div>
      <div class="hero-art" role="img" aria-label="Colourful, hand-made style poster celebrating curious humans"><span class="hero-art-top">A FIELD GUIDE TO<br />THE HUMAN CONDITION</span><div class="hero-sun"></div><div class="hero-flower flower-one">✿</div><span class="hero-poster-title">weird<br /><i>humans!</i></span><span class="hero-sticker">PSYCH<br />FOR THE<br />CURIOUS<span class="sticker-star" aria-hidden="true">✳</span></span></div>
      <div class="hero-meta"><span>Psychology, cognitive science & everyday life</span><span>Come as you are · Stay curious</span></div></section>
      <section class="section-wrap intro-strip"><div><p class="eyebrow">The idea</p><h2>People are fascinating.<br /><em>Let’s look closer.</em></h2></div><p>Research can help us ask better questions about ourselves and each other. This is a place to make those ideas readable, follow the evidence, and leave room for life beyond the lab.</p></section>
      <section class="section-wrap featured-section"><div class="section-heading"><div><p class="eyebrow">Start here</p><h2>Featured reads.</h2></div><a class="text-link" href="?page=blog" data-nav>All articles <span aria-hidden="true">↗</span></a></div><div class="posts-grid">${featured.map((article, index) => articleCard(article, index === 0)).join("")}</div></section>
      <section class="recent-band"><div class="section-wrap"><div class="section-heading"><div><p class="eyebrow">Fresh from the notebook</p><h2>Recent posts.</h2></div><a class="plain-link" href="?page=log" data-nav>And life beyond the lab ↗</a></div><div class="recent-list">${recent.map((article) => `<a class="recent-item" href="${routeURL({ article: article.slug })}" data-nav><span class="recent-date">${dateLabel(article.date)}</span><strong>${escapeHTML(article.title)}</strong><span class="recent-arrow" aria-hidden="true">↗</span></a>`).join("")}</div></div></section>
      <section class="section-wrap category-section"><div class="section-heading"><div><p class="eyebrow">Pick a rabbit hole</p><h2>Explore by question.</h2></div></div><div class="category-grid">${publication.categories.map((category, index) => `<a class="category-tile tile-${(index % 6) + 1}" href="${routeURL({ page: "blog", category })}" data-nav><span class="tile-no">0${index + 1}</span><strong>${escapeHTML(category)}</strong><span class="tile-arrow" aria-hidden="true">↗</span></a>`).join("")}</div></section>
      <section class="personal-callout"><div class="callout-sticker" aria-hidden="true">OFF<br />THE<br />CLOCK ✳</div><div><p class="eyebrow">A different kind of post</p><h2>Life happens<br /><em>outside the lab.</em></h2><p>The Personal Log is an ongoing journal of projects, interests, little milestones, and whatever else is on my mind.</p><a class="text-link" href="?page=log" data-nav>Visit the Personal Log <span aria-hidden="true">↗</span></a></div></section>`;
  }

  function renderBlog(params) {
    const selected = params.get("category") || "All categories";
    const searchValue = params.get("q") || "";
    const available = ["All categories", ...publication.categories];
    const categoryFilters = available.map((category) => `<a class="filter-chip" aria-pressed="${category === selected}" href="${routeURL({ page: "blog", ...(category === "All categories" ? {} : { category }), ...(searchValue ? { q: searchValue } : {}) })}" data-nav>${escapeHTML(category)}</a>`).join("");
    const articles = [...publication.articles].sort((a, b) => b.date.localeCompare(a.date)).filter((article) => selected === "All categories" || article.category === selected);
    return `<section class="page-hero"><p class="eyebrow">The magazine</p><h1>THE BLOG<span>!</span></h1><p>Brains, behaviour, and the everyday things that turn out to be interesting.</p></section><section class="section-wrap archive-section"><div class="archive-toolbar"><div class="filters" aria-label="Filter articles by category">${categoryFilters}</div>${searchControls(searchValue)}</div><div class="posts-grid" id="archive-grid">${articles.map((article) => articleCard(article)).join("")}</div><p class="empty-state" hidden>No articles match that search. Try another word or category.</p></section>`;
  }

  function renderLog(params) {
    const searchValue = params.get("q") || "";
    const entries = [...publication.personalLog].sort((a, b) => b.date.localeCompare(a.date));
    return `<section class="page-hero log-hero"><p class="eyebrow">Notes from the person behind the publication</p><h1>PERSONAL<br /><em>LOGBOOK.</em></h1><p>An ongoing journal for the life happening alongside the reading, writing, and research.</p></section><section class="section-wrap archive-section"><div class="archive-toolbar"><p class="log-note">Less polished. More personal. Always a work in progress.</p>${searchControls(searchValue)}</div><div class="log-grid">${entries.map(logCard).join("")}</div><p class="empty-state" hidden>No journal entries match that search.</p></section>`;
  }

  function renderArticle(slug) {
    const article = publication.articles.find((item) => item.slug === slug);
    if (!article) return renderNotFound("We couldn’t find that article.", "?page=blog", "Back to the blog");
    const refs = article.references.map((id) => publication.sources.find((source) => source.id === id)).filter(Boolean);
    const related = article.related.map((relatedSlug) => publication.articles.find((item) => item.slug === relatedSlug)).filter(Boolean);
    return `<article class="article-page"><header class="article-header"><a class="back-link" href="?page=blog" data-nav>← All articles</a><p class="eyebrow">${escapeHTML(article.category)}</p><h1>${escapeHTML(article.title)}</h1><p class="article-deck">${escapeHTML(article.excerpt)}</p><div class="byline"><span>By ${escapeHTML(publication.author)}</span><span>${dateLabel(article.date)}</span><span>${article.readMinutes} min read</span></div></header><div class="article-art art-${(publication.articles.indexOf(article) % 6) + 1}" aria-hidden="true"><span class="card-art-shape"></span><span class="article-art-caption">A Hooligans Among Humans field note</span></div><div class="article-body">${article.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}</div>${refs.length ? `<section class="references"><h2>References & further reading</h2><ol>${refs.map((source) => `<li>${escapeHTML(source.authors)} (${escapeHTML(source.year)}). <em>${escapeHTML(source.title)}.</em> ${escapeHTML(source.publication)}. <a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">doi:${escapeHTML(source.doi)} ↗</a></li>`).join("")}</ol></section>` : ""}<p class="editor-note">This article is for general information and curiosity. It is not medical advice, diagnosis, or treatment.</p>${related.length ? `<section class="related-section"><div class="section-heading"><div><p class="eyebrow">Keep following the question</p><h2>Related reads.</h2></div></div><div class="posts-grid">${related.map((item) => articleCard(item)).join("")}</div></section>` : ""}</article>`;
  }

  function renderLogEntry(slug) {
    const entry = publication.personalLog.find((item) => item.slug === slug);
    if (!entry) return renderNotFound("We couldn’t find that journal entry.", "?page=log", "Back to the Personal Log");
    return `<article class="article-page log-entry-page"><header class="article-header"><a class="back-link" href="?page=log" data-nav>← Personal Log</a><p class="eyebrow">${escapeHTML(entry.kind)}</p><h1>${escapeHTML(entry.title)}</h1><p class="article-deck">${escapeHTML(entry.excerpt)}</p><div class="byline"><span>A personal note</span><span>${dateLabel(entry.date)}</span><span>${entry.readMinutes} min read</span></div></header><div class="article-body">${entry.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}</div><p class="editor-note">Personal reflections from Hooligans Among Humans. Opinions and experiences are the author’s own.</p></article>`;
  }

  function renderResearch() {
    return `<section class="page-hero research-hero"><p class="eyebrow">The paper trail</p><h1>RESEARCH<br /><em>& EVIDENCE.</em></h1><p>Studies, papers, and further reading behind the articles. Follow a DOI to the publisher or open-access record.</p></section><section class="section-wrap research-section"><div class="research-intro"><span class="research-symbol" aria-hidden="true">✳</span><div><h2>Start with the source.</h2><p>Research is a conversation, not a collection of unquestionable facts. These are the sources cited in the current explainers; article pages link each reference to the claim it supports.</p></div></div><ol class="source-list">${publication.sources.map((source, index) => `<li class="source-entry"><span class="source-number">${String(index + 1).padStart(2, "0")}</span><div><span class="source-kind">${escapeHTML(source.kind)} · ${escapeHTML(source.year)}</span><h3>${escapeHTML(source.title)}</h3><p>${escapeHTML(source.authors)} ${escapeHTML(source.publication)}.</p><a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">Open source <span aria-hidden="true">↗</span></a></div></li>`).join("")}</ol><p class="research-footnote">We aim to represent what a study can and cannot show, link primary sources where possible, and make corrections when we get something wrong.</p></section>`;
  }

  function renderAbout() {
    return `<section class="page-hero about-hero"><p class="eyebrow">A little about this place</p><h1>WHY WE’RE<br /><em>ALL HERE.</em></h1><p>Because humans are a lot. Understanding them is a lifelong project.</p></section><section class="section-wrap about-page"><div class="about-stamp" aria-hidden="true"><span>STAY<br />CURIOUS</span><i>✳</i></div><div class="about-copy"><p class="eyebrow">The publication</p><h2>Psychology for<br /><em>actual life.</em></h2><p>Hooligans Among Humans explores psychology, cognitive science, neuroscience, and human behaviour in accessible language. The aim is to make research interesting and useful without flattening its nuance.</p><p>The site has two kinds of writing. The Blog offers structured explainers grounded in published research, with references and room for limits. The Personal Log is an informal, ongoing journal for life updates, projects, current interests, and reflections from the person behind the publication.</p><p>The person behind these pages is the writer and curator of the project. This is the space for their own interests, reading, ongoing work, and everyday reflections too; that personal introduction can keep growing alongside the publication.</p><p>This publication is educational, not clinical. It does not diagnose, treat, or replace advice from a qualified professional.</p><a class="text-link" href="?page=contact" data-nav>Questions or corrections? <span aria-hidden="true">↗</span></a></div></section>`;
  }

  function renderContact() {
    return `<section class="page-hero contact-hero"><p class="eyebrow">The inbox is open</p><h1>LET’S<br /><em>TALK.</em></h1><p>Questions, suggestions, corrections, collaborations, or just a note to say hello.</p></section><section class="section-wrap contact-section"><div class="contact-aside"><span class="contact-star" aria-hidden="true">✳</span><h2>Good questions<br /><em>are welcome.</em></h2><p>This form uses your email app to compose a message. Nothing is stored or sent by the website itself.</p><a class="plain-link email-link" href="mailto:${escapeHTML(publication.contactEmail)}">${escapeHTML(publication.contactEmail)} ↗</a></div><form class="contact-form" id="contact-form"><label for="contact-name">Your name</label><input id="contact-name" name="name" autocomplete="name" required /><label for="contact-email">Your email</label><input id="contact-email" name="email" type="email" autocomplete="email" required /><label for="contact-reason">What’s it about?</label><select id="contact-reason" name="reason"><option>Question</option><option>Suggestion</option><option>Correction</option><option>Collaboration</option><option>Something else</option></select><label for="contact-message">Your message</label><textarea id="contact-message" name="message" rows="6" required></textarea><button class="text-link submit-button" type="submit">Open email draft <span aria-hidden="true">↗</span></button><p class="form-status" id="form-status" aria-live="polite"></p></form></section>`;
  }

  function renderNotFound(message, href, label) {
    return `<section class="page-hero not-found"><p class="eyebrow">A wrong turn in the rabbit hole</p><h1>NOT FOUND<span>!</span></h1><p>${escapeHTML(message)}</p><a class="text-link" href="${href}" data-nav>${escapeHTML(label)} <span aria-hidden="true">↗</span></a></section>`;
  }

  function render() {
    const params = query();
    const articleSlug = params.get("article");
    const logSlug = params.get("log");
    const page = params.get("page") || "home";
    const templates = {
      home: renderHome,
      blog: () => renderBlog(params),
      log: () => renderLog(params),
      research: renderResearch,
      about: renderAbout,
      contact: renderContact
    };
    main.innerHTML = articleSlug ? renderArticle(articleSlug) : logSlug ? renderLogEntry(logSlug) : (templates[page] || (() => renderNotFound("That page does not exist yet.", "?page=home", "Go home")))();
    document.title = articleSlug ? `${publication.articles.find((item) => item.slug === articleSlug)?.title || "Article"} — Hooligans Among Humans` : logSlug ? `${publication.personalLog.find((item) => item.slug === logSlug)?.title || "Personal Log"} — Hooligans Among Humans` : `${page === "home" ? "Psychology for the curious" : page.replace("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase())} — Hooligans Among Humans`;
    document.querySelectorAll(".site-nav [data-route]").forEach((link) => link.setAttribute("aria-current", link.dataset.route === (articleSlug ? "blog" : logSlug ? "log" : page) ? "page" : "false"));
    const searchInput = main.querySelector("#search");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        applySearch(searchInput.value);
        const next = new URLSearchParams(location.search);
        if (searchInput.value.trim()) next.set("q", searchInput.value); else next.delete("q");
        history.replaceState({}, "", `?${next.toString()}`);
      });
      applySearch(searchInput.value);
    }
    const form = main.querySelector("#contact-form");
    if (form) form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (publication.contactEmail === "hello@example.com") {
        main.querySelector("#form-status").textContent = "Please replace hello@example.com with your contact email in content.js before publishing.";
        return;
      }
      const values = new FormData(form);
      const subject = `[Hooligans Among Humans] ${values.get("reason")}`;
      const body = `Name: ${values.get("name")}\nReply to: ${values.get("email")}\nTopic: ${values.get("reason")}\n\n${values.get("message")}`;
      location.href = `mailto:${publication.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      main.querySelector("#form-status").textContent = "Your email app should open with the message ready to review and send.";
    });
    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.setAttribute("aria-expanded", "false");
    document.querySelector("#site-nav").classList.remove("nav-open");
    window.scrollTo(0, 0);
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-nav]");
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    history.pushState({}, "", link.getAttribute("href"));
    render();
  });
  window.addEventListener("popstate", render);
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    document.querySelector("#site-nav").classList.toggle("nav-open", !expanded);
  });
  render();
})();
