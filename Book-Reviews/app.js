function $(id){ return document.getElementById(id); }

function stars(n){
  const full = "★".repeat(Math.max(0, Math.min(5, n)));
  const empty = "☆".repeat(5 - full.length);
  return full + empty;
}

function formatDate(iso){
  if(!iso) return "";
  // iso is YYYY-MM-DD
  const [y,m,d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m-1, d));
  return dt.toLocaleDateString(undefined, { year:"numeric", month:"short", day:"numeric" });
}

function renderBooksGrid(){
  const grid = $("booksGrid");
  if(!grid) return;

  grid.innerHTML = BOOKS.map(b => `
    <a class="card" href="review.html?id=${encodeURIComponent(b.id)}">
      <div class="book">
        <div class="cover" aria-hidden="true"></div>
        <div class="meta">
          <h3>${escapeHtml(b.title)}</h3>
          <p class="small">${escapeHtml(b.author)} • ${escapeHtml(b.genre)}</p>

          <div class="tagrow">
            <span class="tag">${escapeHtml(b.status)}</span>
            ${b.dateFinished ? `<span class="tag">Finished: ${escapeHtml(formatDate(b.dateFinished))}</span>` : ""}
          </div>

          <div class="rating">Rating: ${stars(b.rating)}</div>
        </div>
      </div>

      <p style="margin-top:10px">${escapeHtml(b.short)}</p>
    </a>
  `).join("");
}

function renderReview(){
  const el = $("reviewBox");
  if(!el) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const book = BOOKS.find(b => b.id === id);

  if(!book){
    el.innerHTML = `<div class="card"><h2>Review not found</h2><p>Go back to the books list and pick a book.</p><a class="btn" href="books.html">Back to books</a></div>`;
    return;
  }

  $("reviewTitle").textContent = book.title;

  el.innerHTML = `
    <div class="card">
      <div class="book">
        <div class="cover" aria-hidden="true"></div>
        <div class="meta">
          <h2 style="margin:0">${escapeHtml(book.title)}</h2>
          <p class="small">${escapeHtml(book.author)} • ${escapeHtml(book.genre)}</p>
          <div class="tagrow">
            <span class="tag">${escapeHtml(book.status)}</span>
            ${book.dateFinished ? `<span class="tag">Finished: ${escapeHtml(formatDate(book.dateFinished))}</span>` : ""}
          </div>
          <div class="rating">Rating: ${stars(book.rating)}</div>
        </div>
      </div>

      <hr style="border:none;border-top:1px solid var(--line); margin:14px 0;" />

      <div style="white-space:pre-wrap; color: var(--text);">
${escapeHtml(book.review)}
      </div>

      <div class="actions" style="margin-top:16px">
        <a class="btn" href="books.html">Back to books</a>
      </div>
    </div>
  `;
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
  renderBooksGrid();
  renderReview();
});
