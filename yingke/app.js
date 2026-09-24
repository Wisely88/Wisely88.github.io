(function () {
  const sources = window.YINGKE_SOURCES;
  const cats = window.YINGKE_CATS;
  const state = { cat: "全部", q: "", enabled: new Set(sources.map((s) => s.id)) };
  const $ = (id) => document.getElementById(id);
  function allItems() {
    const list = [];
    for (const src of sources) {
      if (!state.enabled.has(src.id)) continue;
      for (const item of src.items) list.push({ ...item, sourceId: src.id, sourceName: src.name });
    }
    return list;
  }
  function filtered() {
    const q = state.q.trim().toLowerCase();
    return allItems().filter((it) => {
      const catOk = state.cat === "全部" || it.category === state.cat;
      const text = `${it.title} ${it.actors} ${it.tags.join(" ")} ${it.year}`.toLowerCase();
      return catOk && (!q || text.includes(q));
    });
  }
  function renderNav() {
    const nav = $("navCats");
    nav.innerHTML = "";
    cats.forEach((c) => {
      const b = document.createElement("button");
      b.textContent = c;
      b.className = state.cat === c ? "active" : "";
      b.onclick = () => { state.cat = c; render(); };
      nav.appendChild(b);
    });
  }
  function renderPills() {
    const wrap = $("sourcePills");
    wrap.innerHTML = "";
    sources.forEach((s) => {
      const b = document.createElement("button");
      b.textContent = s.name;
      b.className = state.enabled.has(s.id) ? "on" : "";
      b.onclick = () => {
        if (state.enabled.has(s.id)) {
          if (state.enabled.size === 1) return;
          state.enabled.delete(s.id);
        } else state.enabled.add(s.id);
        render();
      };
      wrap.appendChild(b);
    });
  }
  function posterStyle(url) {
    if (!url) return "background:linear-gradient(160deg,#1e293b,#0f172a);";
    return `background-image:url('${url.replace(/'/g, "")}');`;
  }
  function renderHero(items) {
    const hero = $("hero");
    const it = items[0] || allItems()[0];
    if (!it) { hero.innerHTML = ""; return; }
    hero.style.backgroundImage = it.backdrop || it.poster ? `url('${it.backdrop || it.poster}')` : "none";
    hero.innerHTML = `<div class="hero-inner"><div class="meta">${it.sourceName} · ${it.year} · ${it.category}</div><h1>${it.title}</h1><p>${it.desc}</p><div class="actions"><button class="play" data-play="${it.id}">播放</button><button class="ghost" data-detail="${it.id}">详情</button></div></div>`;
    hero.querySelector("[data-play]").onclick = () => openPlayer(it, 0);
    hero.querySelector("[data-detail]").onclick = () => openDetail(it);
  }
  function renderGrid(items) {
    $("gridTitle").textContent = state.q ? `搜索「${state.q}」· ${items.length}` : `${state.cat} · ${items.length}`;
    const grid = $("grid");
    grid.innerHTML = items.map((it) => `<article class="card" data-id="${it.id}"><div class="poster" style="${posterStyle(it.poster)}"><span class="badge">${it.sourceName}</span></div><div class="card-body"><h3>${it.title}</h3><span>${it.year} · ${it.category}</span></div></article>`).join("");
    grid.querySelectorAll(".card").forEach((el) => {
      el.onclick = () => openDetail(items.find((x) => x.id === el.dataset.id));
    });
  }
  function openDetail(it) {
    const box = $("detail");
    box.classList.remove("hidden");
    box.innerHTML = `<div class="detail-card"><div class="detail-layout"><div class="detail-poster" style="${posterStyle(it.poster)}"></div><div><div class="meta" style="color:var(--accent);font-size:12px">${it.sourceName}</div><h2>${it.title}</h2><p style="color:var(--muted)">${it.year} · ${it.actors}</p><div class="chips">${it.tags.map((t) => `<span>${t}</span>`).join("")}</div><p style="line-height:1.65;margin-top:8px">${it.desc}</p><div class="lines">${it.play.map((p, i) => `<button data-i="${i}">播放 · ${p.name}<br><small style="color:var(--muted)">${p.type.toUpperCase()}</small></button>`).join("")}</div></div></div><button class="close-detail" id="closeDetail">返回</button></div>`;
    box.querySelector("#closeDetail").onclick = () => box.classList.add("hidden");
    box.onclick = (e) => { if (e.target === box) box.classList.add("hidden"); };
    box.querySelectorAll("[data-i]").forEach((btn) => {
      btn.onclick = () => { box.classList.add("hidden"); openPlayer(it, Number(btn.dataset.i)); };
    });
  }
  function openPlayer(it, lineIndex) {
    const modal = $("playerModal");
    const video = $("video");
    const select = $("lineSelect");
    modal.classList.remove("hidden");
    $("playerTitle").textContent = it.title;
    select.innerHTML = it.play.map((p, i) => `<option value="${i}">${p.name} (${p.type})</option>`).join("");
    select.value = String(lineIndex);
    const load = (i) => {
      const line = it.play[i];
      video.pause();
      video.src = line.url;
      $("playerHint").textContent = line.type === "hls" ? "HLS：Safari 通常可播。" : "正在播放公开样例片。";
      video.play().catch(() => {});
    };
    select.onchange = () => load(Number(select.value));
    load(lineIndex);
  }
  $("closePlayer").onclick = () => {
    $("playerModal").classList.add("hidden");
    const v = $("video");
    v.pause();
    v.removeAttribute("src");
    v.load();
  };
  $("btnArchitecture").onclick = () => $("archModal").classList.remove("hidden");
  $("closeArch").onclick = () => $("archModal").classList.add("hidden");
  $("archModal").onclick = (e) => { if (e.target.id === "archModal") $("archModal").classList.add("hidden"); };
  $("search").addEventListener("input", (e) => { state.q = e.target.value; render(); });
  function render() { renderNav(); renderPills(); const items = filtered(); renderHero(items); renderGrid(items); }
  render();
})();
