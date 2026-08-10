(()=>{"use strict";const Ce="mdv_tabs_v1",Se="mdv_theme";let m=[],b=null;function vt(){return"t"+Math.random().toString(36).slice(2,10)}function N(e,t,n){return{id:vt(),name:e||"Untitled",content:t||"",dirty:!1,builtin:!!n}}function wt(){try{const t=localStorage.getItem(Ce);if(t){const n=JSON.parse(t);if(n.tabs&&n.tabs.length){m=n.tabs,b=n.activeId||m[0].id,m.some(i=>i.builtin)||(m.unshift(N("Tris.Markdown",Me,!0)),b=m[0].id);return}}}catch{}const e=N("Tris.Markdown",Me,!0);m=[e],b=e.id}function H(){try{localStorage.setItem(Ce,JSON.stringify({tabs:m,activeId:b}))}catch{}}function E(){return m.find(e=>e.id===b)}const Me=`# Markdown Syntax Cheat Sheet

This document explains every syntax feature supported in this editor \u2014 standard Markdown, GitHub Flavored Markdown (GFM), and GitHub's advanced formatting. Each section explains what the syntax does, then shows it rendered next to the raw code. Open **Edit** to compare the raw text with this preview, and use the **TOC** to jump between sections.

# Headings

Start a line with 1\u20136 \`#\` characters to create a heading; the number of \`#\` sets the level (H1\u2013H6). Headings automatically appear in the table of contents.

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

\`\`\`
# Heading 1
## Heading 2
### Heading 3
\`\`\`

# Paragraphs & line breaks

Leave a **blank line** between lines of text to start a new paragraph. To force a single line break without a new paragraph, end a line with two or more spaces, or use \`<br>\`.

This is one paragraph.

This is a separate paragraph, because a blank line came before it.

\`\`\`
This is one paragraph.

This is a separate paragraph.
\`\`\`

# Text formatting

Wrap text in special characters to change its emphasis:

**Bold** \u2014 wrap in double asterisks or underscores: \`**Bold**\` or \`__Bold__\`

*Italic* \u2014 wrap in single asterisks or underscores: \`*Italic*\` or \`_Italic_\`

***Bold and italic*** \u2014 combine both: \`***Bold and italic***\`

~~Strikethrough~~ \u2014 wrap in double tildes (GFM): \`~~Strikethrough~~\`

==Highlight== \u2014 wrap in double equals signs to mark text, like a highlighter: \`==Highlight==\`

Super^script^ \u2014 wrap in single carets: \`Super^script^\`

Sub~script~ \u2014 wrap in single tildes: \`Sub~script~\`

\`inline code\` \u2014 wrap in backticks

# Escaping characters

Put a backslash before a Markdown character to display it literally instead of it being interpreted as formatting.

Escaped: *not italic*  \xB7  Unescaped: *becomes italic*

\`\`\`
Escaped: *not italic*
Unescaped: *becomes italic*
\`\`\`

---

# Lists

**Unordered lists** start each item with \`-\`, \`*\`, or \`+\`. Indent an item by 2 spaces to nest it inside the item above.

- Item one
- Item two
  - Nested item
    - Deeper nested item

\`\`\`
- Item one
- Item two
  - Nested item
\`\`\`

**Ordered lists** start each item with a number and a period; Markdown renumbers automatically, so the actual digits you type don't matter.

1. First step
2. Second step
   1. Sub-step

\`\`\`
1. First step
2. Second step
   1. Sub-step
\`\`\`

**Task lists** (GFM) use \`- [ ]\` for an open task and \`- [x]\` for a completed one \u2014 click the checkboxes right in the preview.

- [x] Write the cheat sheet
- [x] Support GFM extras
- [ ] Ship it \u{1F680}

\`\`\`
- [x] Done task
- [ ] Open task
\`\`\`

# Links & images

**Inline links** use \`[label](url)\`. Add a \`"title"\` after the URL for a tooltip.

[Inline link](https://github.com "GitHub")

\`\`\`
[Inline link](https://github.com "GitHub")
\`\`\`

**Autolinks** \u2014 wrap a bare URL in angle brackets, or GFM will often auto-detect it even without them.

<https://github.com>

\`\`\`
<https://github.com>
\`\`\`

**Images** use the same syntax as links with a leading \`!\`.

![Alt text](https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg "Optional title")

\`\`\`
![Alt text](image-url.jpg "Optional title")
\`\`\`

# Code

**Inline code** wraps text in single backticks: \`const x = 1\`

**Fenced code blocks** wrap multiple lines in triple backticks. Add a language name after the opening fence to enable syntax highlighting.

\`\`\`js
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

Written as: a line of three backticks plus \`js\`, then the code, then a closing line of three backticks.

# Blockquotes

Start a line with \`>\` to quote text. Use \`>\` on consecutive lines to quote multiple lines, or blank \`>\` lines to separate quoted paragraphs.

> A regular blockquote.
> It can span multiple lines.

\`\`\`
> A regular blockquote.
> It can span multiple lines.
\`\`\`

# Alerts

GitHub's five alert types are blockquotes whose first line is \`[!TYPE]\`. Each renders with its own color and icon to draw attention.

> [!NOTE]
> Useful information the user should know, even when skimming.

> [!TIP]
> Helpful advice for doing things better.

> [!IMPORTANT]
> Key information the user needs to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

\`\`\`
> [!NOTE]
> Useful information the user should know.
\`\`\`

# Tables

Separate columns with \`|\` and add a divider row of dashes below the header. Put \`:\` on either side of the dashes to control alignment: left (default), \`:---:\` center, or \`---:\` right.

| Left | Center | Right |
|:-----|:------:|------:|
| a    | b      | c     |
| 123  | 456    | 789   |

\`\`\`
| Left | Center | Right |
|:-----|:------:|------:|
| a    | b      | c     |
\`\`\`

# Collapsed sections

Wrap content in \`<details><summary>...</summary> ... </details>\` (plain HTML) to make a click-to-expand section \u2014 handy for long logs or optional detail.

<details>
<summary>Click to expand</summary>

Hidden content goes here \u2014 great for long logs, spoilers, or optional details.

\`\`\`bash
npm install
\`\`\`
</details>

Written as: \`<details>\`, then \`<summary>title</summary>\`, then the hidden content, then \`</details>\`.

# Diagrams (Mermaid)

Fence a code block with the language \`mermaid\` to render flowcharts, sequence diagrams, and more.

\`\`\`mermaid
graph TD
A[Write Markdown] --> B{Looks good?}
B -- Yes --> C[Export]
B -- No --> A
\`\`\`

Written as: a fence tagged \`mermaid\`, then diagram syntax such as \`A[Start] --> B[End]\`.

# Mathematical expressions

Wrap LaTeX in single \`$\` for inline math, or double \`$$\` for a centered display equation.

Inline: $E = mc^2$

Display:
$$sum_{i=1}^{n} x_i = x_1 + x_2 + cdots + x_n$$

\`\`\`
Inline: $E = mc^2$
Display: $$sum_{i=1}^{n} x_i$$
\`\`\`

# Horizontal rule

Three or more hyphens, asterisks, or underscores alone on a line draw a horizontal divider:

---

\`\`\`
---
\`\`\`

# Footnotes

Reference a footnote inline with \`[^id]\`, then define its text anywhere in the document with \`[^id]: text\`. Definitions are collected and numbered automatically at the bottom of the page, with a back-link to return to the reference.

Here's a claim that needs a source[^1].

\`\`\`
Here's a claim that needs a source[^1].

[^1]: The footnote text.
\`\`\`

[^1]: A footnote definition, shown at the bottom of the document, with a back-link to return to the reference.

---

# Regex syntax reference

A bonus quick-reference for regular expressions, useful with this editor's Find & Replace (enable the \`.*\` option).

| Pattern | Meaning |
|---------|---------|
| \`.\` | Any char |
| \`*\` | Zero or more |
| \`+\` | One or more |
| \`?\` | Optional |
| \`^\` | Start of string |
| \`$\` | End of string |
| \`\\d\` | Digit |
| \`\\w\` | Word char |
| \`\\s\` | Whitespace |
| \`[abc]\` | Character class |
| \`(a\\|b)\` | Alternation |
| \`{n,m}\` | Range quantifier |
`;marked.setOptions({gfm:!0,breaks:!0,highlight:null});const j=new marked.Renderer;j.code=(e,t)=>{if(t==="mermaid")return`<div class="mermaid">${g(e)}</div>`;let n,i="";try{t&&hljs.getLanguage(t)?(n=hljs.highlight(e,{language:t}).value,i=" language-"+t):n=hljs.highlightAuto(e).value}catch{n=g(e)}return`<pre><button class="fmt-btn mdv-code-copy" data-copy title="Copy"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button><code class="hljs${i}">${n}</code></pre>`},j.checkbox=()=>"",j.listitem=(e,t,n)=>{if(t){const i=e.replace(/<input[^>]*>\s*/i,"").replace(/^\[[ xX]\]\s*/,"").trim();return`<li class="task-list-item">${n?'<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" fill="var(--tris-accent, #2563EB)"/><path d="M7 13l3 3 7-7" stroke="var(--tris-text-inverse, #fff)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>':'<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="var(--tris-text-tertiary, #94A3B8)" stroke-width="1.5" fill="none"/></svg>'}<span>${i}</span></li>`}return`<li>${e}</li>`},j.blockquote=e=>{const t=e.match(/^\s*<p>\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\s*/i);if(t){const n=t[1].toUpperCase(),r={NOTE:{cls:"callout-note",label:"Note",icon:Et()},TIP:{cls:"callout-tip",label:"Tip",icon:Lt()},WARNING:{cls:"callout-warning",label:"Warning",icon:xt()},IMPORTANT:{cls:"callout-important",label:"Important",icon:Tt()},CAUTION:{cls:"callout-caution",label:"Caution",icon:Bt()}}[n],l=e.replace(t[0],"<p>");return`<div class="${r.cls}"><div class="callout-head"><span class="callout-icon">${r.icon}</span><strong class="callout-label">${r.label}</strong></div><div class="callout-body">${l}</div></div>`}return`<blockquote>${e}</blockquote>`};const yt=new RegExp("^(#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})|rgba?\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*(,\\s*[\\d.]+\\s*)?\\)|hsla?\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}%\\s*,\\s*\\d{1,3}%\\s*(,\\s*[\\d.]+\\s*)?\\))$","i"),kt=/^(https?:\/\/[^\s]+)$/i;j.codespan=e=>{const t=typeof e=="string"?e:String(e),n=g(t),i=t.trim();return yt.test(i)?`<code>${n}<span class="mdv-color-dot" style="background:${i}"></span></code>`:kt.test(i)?`<code class="mdv-code-url" data-url="${g(i)}">${n}<span class="mdv-ext-link-icon" title="Open link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></span></code>`:`<code>${n}</code>`},marked.use({renderer:j});let D=[],de={};marked.use({extensions:[{name:"mark",level:"inline",start(e){const t=e.match(/==/);return t?t.index:void 0},tokenizer(e){const t=/^==(?!=)([^=\n]+?)==(?!=)/.exec(e);if(t)return{type:"mark",raw:t[0],tokens:this.lexer.inlineTokens(t[1])}},renderer(e){return`<mark>${this.parser.parseInline(e.tokens)}</mark>`}},{name:"sup",level:"inline",start(e){const t=e.match(/\^/);return t?t.index:void 0},tokenizer(e){const t=/^\^([^\^\s]+)\^/.exec(e);if(t)return{type:"sup",raw:t[0],tokens:this.lexer.inlineTokens(t[1])}},renderer(e){return`<sup>${this.parser.parseInline(e.tokens)}</sup>`}},{name:"sub",level:"inline",start(e){const t=e.match(/~(?!~)/);return t?t.index:void 0},tokenizer(e){const t=/^~(?!~)([^~\s]+)~(?!~)/.exec(e);if(t)return{type:"sub",raw:t[0],tokens:this.lexer.inlineTokens(t[1])}},renderer(e){return`<sub>${this.parser.parseInline(e.tokens)}</sub>`}},{name:"footnoteRef",level:"inline",start(e){const t=e.match(/\[\^/);return t?t.index:void 0},tokenizer(e){const t=/^\[\^([^\]\n]+)\](?!:)/.exec(e);if(t)return{type:"footnoteRef",raw:t[0],id:t[1]}},renderer(e){let t=D.indexOf(e.id);t===-1&&(D.push(e.id),t=D.length-1);const n=t+1;return`<sup class="footnote-ref" id="fnref-${n}"><a href="#fn-${n}">[${n}]</a></sup>`}},{name:"footnoteDef",level:"block",start(e){const t=e.match(/^\[\^[^\]\n]+\]:/m);return t?t.index:void 0},tokenizer(e){const t=/^\[\^([^\]\n]+)\]:[ \t]*([^\n]*(?:\n(?:[ \t]{2,}[^\n]*|\n))*)/.exec(e);if(t){const n=t[2].replace(/^\n+|\n+$/g,"").split(`
`).map(i=>i.replace(/^\s{2,}/,"")).join(`
`);return{type:"footnoteDef",raw:t[0],id:t[1],tokens:this.lexer.blockTokens(n||" ")}}},renderer(e){return de[e.id]=e,""}}]});function bt(){return D.length?`<section class="footnotes"><hr><ol>${D.map((t,n)=>{const i=n+1,r=de[t],l=r?marked.Parser.parse(r.tokens):"";return`<li id="fn-${i}">${l} <a href="#fnref-${i}" class="footnote-backref">\u21A9</a></li>`}).join("")}</ol></section>`:""}function Et(){return'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="11" x2="12" y2="16.5"/><circle cx="12" cy="7.5" r="0.75" fill="currentColor" stroke="none"/></svg>'}function Lt(){return'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10.5c.6.6 1 1.5 1 2.5h6c0-1 .4-1.9 1-2.5A6 6 0 0 0 12 2z"/></svg>'}function xt(){return'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9.5" x2="12" y2="13.5"/><circle cx="12" cy="16.5" r="0.75" fill="currentColor" stroke="none"/></svg>'}function Tt(){return'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>'}function Bt(){return'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 4.5 1.5 6.5 2.2 7.3.3.3.1.7-.3.7H4.1c-.4 0-.6-.4-.3-.7C4.5 14.5 6 12.5 6 8z"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><line x1="12" y1="6.5" x2="12" y2="10"/><circle cx="12" cy="12.5" r="0.75" fill="currentColor" stroke="none"/></svg>'}function g(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function It(e){const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);if(!t)return{body:e,meta:null};let n=null;try{n=jsyaml.load(t[1])}catch{n=null}return{body:e.slice(t[0].length),meta:n}}function Ct(e){return!e||typeof e!="object"?"":`<table class="frontmatter-table"><tbody>${Object.entries(e).map(([n,i])=>`<tr><th>${g(n)}</th><td>${g(String(i))}</td></tr>`).join("")}</tbody></table>`}let ue=!1;function St(){window.mermaid&&!ue&&(mermaid.initialize({startOnLoad:!1,theme:document.documentElement.getAttribute("data-theme")==="dark"?"dark":"default"}),ue=!0)}function He(e){return new Promise((t,n)=>{const i=document.querySelector(`script[src="${e}"]`);if(i){i.addEventListener("load",()=>t()),i.dataset.loaded&&t();return}const r=document.createElement("script");r.src=e,r.onload=()=>{r.dataset.loaded="1",t()},r.onerror=()=>n(new Error("Failed to load "+e)),document.head.appendChild(r)})}let me=null;function Mt(){return window.mermaid?Promise.resolve():(me||(me=He("vendor/mermaid.min.js")),me)}let he=null;function Ht(){return window.MathJax&&window.MathJax.typesetPromise?Promise.resolve():(he||(he=He("vendor/mathjax-tex-mml-chtml.js")),he)}function $t(e){return e?/\$\$[\s\S]+?\$\$/.test(e)||/\\\[[\s\S]+?\\\]/.test(e)||/\\\([\s\S]+?\\\)/.test(e)||/(^|[^\\$\w])\$(?!\s)[^\n$]+?[^\s\\]\$(?!\w)/.test(e):!1}function At(e,t){let n;try{n=marked.lexer(e)}catch{return[]}let i=0;const r=[];for(const c of n){const h=typeof c.raw=="string"?c.raw:"",y=i,R=i+h.length;if(c.type!=="space"&&h.trim().length){const P=t+e.slice(0,y).split(`
`).length,sn=t+e.slice(0,Math.max(y,R-1)).split(`
`).length;r.push({token:c,startLine:P,endLine:sn,links:n.links,raw:h})}i=R}const l=new Set(["br","hr","img","input","meta","link","area","base","col","embed","source","track","wbr"]);function s(c){let h=0;const y=/<([a-zA-Z][a-zA-Z0-9-]*)(?:\s[^>]*)?\/?>/g,R=/<\/([a-zA-Z][a-zA-Z0-9-]*)\s*>/g;let P;for(;P=y.exec(c);)P[0].endsWith("/>")||l.has(P[1].toLowerCase())||h++;for(;P=R.exec(c);)h--;return h}const d=[];let a=0,p=null;for(const c of r){const h=s(c.raw);a>0?(p.tokens.push(c.token),p.endLine=c.endLine,a+=h,a<=0&&(d.push(p),p=null,a=0)):h>0?(p={tokens:[c.token],startLine:c.startLine,endLine:c.endLine,links:c.links},a=h):d.push({tokens:[c.token],startLine:c.startLine,endLine:c.endLine,links:c.links})}return p&&d.push(p),d}function $e(){const e=document.getElementById("editorBlockLayer");e&&(e.innerHTML=g(o.value),e.scrollTop=o.scrollTop,e.scrollLeft=o.scrollLeft),f.querySelectorAll(".mdv-block.mdv-block-active").forEach(t=>t.classList.remove("mdv-block-active"))}function J(){const e=document.getElementById("editorBlockLayer");if(!e)return;if(B!=="edit"||!L.length){$e();return}const t=o.value,n=t.slice(0,o.selectionStart).split(`
`).length,i=L.find(y=>n>=y.startLine&&n<=y.endLine);if(!i){$e();return}const r=t.split(`
`),l=r.slice(0,i.startLine-1).join(`
`),s=r.slice(i.startLine-1,i.endLine).join(`
`),d=r.slice(i.endLine),a=l?l+`
`:"",p=d.length?`
`+d.join(`
`):"";e.innerHTML=g(a)+'<div class="mdv-block-band">'+g(s)+"</div>"+g(p),e.scrollTop=o.scrollTop,e.scrollLeft=o.scrollLeft,f.querySelectorAll(".mdv-block.mdv-block-active").forEach(y=>y.classList.remove("mdv-block-active"));const c=L.indexOf(i),h=f.querySelector(`.mdv-block[data-block-i="${c}"]`);h&&h.classList.add("mdv-block-active")}function $(){const e=E();if(!e)return;const{body:t,meta:n}=It(e.content);D=[],de={};const r=e.content.slice(0,e.content.length-t.length).split(`
`).length-1;L=At(t,r);const l=L.map((c,h)=>{const y=c.tokens;y.links=c.links;let R="";try{R=marked.parser(y)}catch{R=""}return`<div class="mdv-block" data-block-i="${h}"><div class="mdv-block-inner">${R}</div></div>`}).join(""),s=Ct(n),d=bt();let a=(s?`<div class="mdv-block"><div class="mdv-block-inner">${s}</div></div>`:"")+l+(d?`<div class="mdv-block"><div class="mdv-block-inner">${d}</div></div>`:"");a=DOMPurify.sanitize(a,{ADD_TAGS:["input","div"],ADD_ATTR:["checked","disabled","type","data-block-i","class","style"]}),f.innerHTML=a,Qt(),f.querySelectorAll("a[href]").forEach(c=>{(c.getAttribute("href")||"").startsWith("#")||(c.setAttribute("target","_blank"),c.setAttribute("rel","noopener noreferrer"))}),V.classList.contains("open")&&V.classList.contains("mdv-find-only")&&x.value&&(I=-1,Le(x.value),F=x.value,k.length?(k[0].classList.add("current"),I=0,M.textContent=`1/${k.length}`):M.textContent="0/0"),f.querySelectorAll(".mermaid").length&&Mt().then(()=>{St();try{mermaid.run({nodes:f.querySelectorAll(".mermaid")})}catch{}}).catch(()=>{}),$t(t)&&Ht().then(()=>{window.MathJax&&MathJax.typesetPromise&&(MathJax.typesetClear&&MathJax.typesetClear([f]),MathJax.typesetPromise([f]).catch(()=>{}))}).catch(()=>{}),Pe(),ne(),J()}const o=document.getElementById("editor"),an=document.getElementById("editorScroll"),f=document.getElementById("preview"),T=document.getElementById("gutter"),pe=document.getElementById("tabbar"),Ot=document.getElementById("wordCount"),Rt=document.getElementById("charCount"),Ft=document.getElementById("readTime"),ge=document.getElementById("statusMsg"),Pt=document.getElementById("lineInfo");function S(){pe.innerHTML="",m.forEach(t=>{const n=document.createElement("div");n.className="mdv-doc-tab"+(t.id===b?" active":""),n.dataset.id=t.id;const i=!!t.builtin;n.innerHTML=i?'<span class="name bold"><span class="tris">Tris</span><span class="dot">.</span><span class="md">Markdown</span></span>':`<span class="name">${g(t.name)}</span>${i?"":`<span class="close${t.dirty?" dirty":""}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>`}`,n.addEventListener("click",r=>{if(r.target.closest(".close")){Oe(t.id);return}Nt(t.id)}),n.addEventListener("dblclick",r=>{r.target.closest(".close")||Re(t.id)}),pe.appendChild(n)});const e=document.createElement("div");e.className="mdv-tab-add",e.title="New tab (Ctrl+T)",e.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',e.addEventListener("click",Ae),pe.appendChild(e)}function Nt(e){Y(),b=e;const t=E();o.value=t.content,o.scrollTop=0,o.scrollLeft=0,T.scrollTop=0;const n=document.getElementById("editorHighlightLayer");n&&(n.scrollTop=0,n.scrollLeft=0);const i=document.getElementById("editorBlockLayer");i&&(i.scrollTop=0,i.scrollLeft=0),o.readOnly=!!t.builtin,S(),$(),H()}function Ae(){if(m.length>=20){alert("Maximum 20 tabs reached.");return}Y();const e=N("Untitled "+(m.length+1),"");m.push(e),b=e.id,o.value="",o.scrollTop=0,o.scrollLeft=0,T.scrollTop=0;const t=document.getElementById("editorHighlightLayer");t&&(t.scrollTop=0,t.scrollLeft=0);const n=document.getElementById("editorBlockLayer");n&&(n.scrollTop=0,n.scrollLeft=0),o.readOnly=!1,W("edit"),S(),$(),H()}function Oe(e){const t=m.find(i=>i.id===e);if(!t||t.builtin)return;const n=m.indexOf(t);m.length===1?(m[n]=N("Untitled",""),b=m[n].id):(m.splice(n,1),b===e&&(b=m[Math.max(0,n-1)].id)),o.value=E().content,o.readOnly=!!E().builtin,S(),$(),H()}function Re(e){const t=m.find(i=>i.id===e);if(!t||t.builtin)return;const n=prompt("Rename document:",t.name);n&&n.trim()&&(t.name=n.trim(),S(),H())}function Y(){const e=E();e&&(e.content=o.value)}let Fe=null;o.addEventListener("input",()=>{const e=E();e&&(e.content=o.value,e.dirty=!0),ne(),fe(),S(),clearTimeout(Fe),Fe=setTimeout(()=>{$(),H();const t=E();t&&(t.dirty=!1),S()},220)});let q=!1;o.addEventListener("scroll",()=>{const e=o.scrollTop,t=o.scrollLeft;T.scrollTop=e;const n=document.getElementById("editorHighlightLayer");n&&(n.scrollTop=e,n.scrollLeft=t);const i=document.getElementById("editorBlockLayer");i&&(i.scrollTop=e,i.scrollLeft=t),K&&!q&&(q=!0,Ut(),requestAnimationFrame(()=>{q=!1}))}),o.addEventListener("keyup",()=>{J()}),o.addEventListener("click",()=>{J()});function jt(e,t){const n=e.split(`
`),i=getComputedStyle(t),r=parseFloat(i.lineHeight)||21,l=document.createElement("div");l.style.cssText=`position:absolute; visibility:hidden; left:-99999px; top:0; width:${t.clientWidth}px; box-sizing:border-box; padding-left:${i.paddingLeft}; padding-right:${i.paddingRight}; font-family:${i.fontFamily}; font-size:${i.fontSize}; line-height:${i.lineHeight}; white-space:pre-wrap; word-wrap:break-word; overflow-wrap:break-word; tab-size:${i.tabSize};`,n.forEach(d=>{const a=document.createElement("div");a.textContent=d.length?d:" ",l.appendChild(a)}),document.body.appendChild(l);const s=Array.from(l.children).map(d=>Math.max(1,Math.round(d.getBoundingClientRect().height/r)));return document.body.removeChild(l),s}function ne(){const e=o.value,t=e.split(`
`);let n="";if(z){const i=jt(e,o);t.forEach((r,l)=>{n+=l+1+`
`;for(let s=1;s<i[l];s++)n+=`
`})}else for(let i=1;i<=t.length;i++)n+=i+`
`;T.textContent=n}function fe(){const e=o.value.split(`
`).length;Pt.textContent=e}function Pe(){const e=o.value.trim(),t=e?e.split(/\s+/).length:0,n=o.value.length;Ot.textContent=t,Rt.textContent=n;const i=window.matchMedia("(max-width: 600px)").matches?"m":"min";Ft.textContent=`~${Math.max(1,Math.round(t/200))} ${i}`,ge.textContent="",fe()}function A(e,t,n){const i=o.scrollTop;t=t===void 0?e:t;const r=o.selectionStart,l=o.selectionEnd,s=o.value,d=s.slice(r,l)||n||"";o.value=s.slice(0,r)+e+d+t+s.slice(l),document.activeElement!==o&&o.focus({preventScroll:!0}),o.selectionStart=r+e.length,o.selectionEnd=r+e.length+d.length,o.dispatchEvent(new Event("input")),o.scrollTop=i}function oe(e){const t=o.scrollTop,n=o.selectionStart,i=o.value,r=i.lastIndexOf(`
`,n-1)+1;o.value=i.slice(0,r)+e+i.slice(r),document.activeElement!==o&&o.focus({preventScroll:!0}),o.selectionStart=o.selectionEnd=n+e.length,o.dispatchEvent(new Event("input")),o.scrollTop=t}function ve(e){const t=o.scrollTop,n=o.selectionStart,i=o.selectionEnd,r=o.value,l=r.slice(n,i);if(!l)return;const s=e(l);o.value=r.slice(0,n)+s+r.slice(i),document.activeElement!==o&&o.focus({preventScroll:!0}),o.selectionStart=n,o.selectionEnd=n+s.length,o.dispatchEvent(new Event("input")),o.scrollTop=t}const Dt=["\u{1F60A}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F389}","\u{1F525}","\u{1F60E}","\u{1F4AF}","\u2705","\u2B50","\u{1F64F}","\u{1F4AA}","\u{1F970}","\u{1F60D}","\u{1F914}","\u{1F622}","\u{1F621}","\u{1F440}","\u{1F4A1}","\u{1F3A8}","\u{1F4DD}","\u{1F680}","\u2728","\u{1F527}"],qt=["\xA9","\xAE","\u2122","\xA7","\xB6","\u2020","\u2021","\u2022","\u2192","\u21D2","\u21D4","\xB1","\xD7","\xF7","\u2248","\u2260","\u2264","\u2265","\u221E","\u2211","\u220F","\u222B","\u221A","\u2202","\u2206","\u2205","\u03C0","\u03B1","\u03B2","\u03BC"],Ne=document.getElementById("insertPopup"),_t=document.getElementById("insertPopupTitle"),je=document.getElementById("insertPopupGrid");function De(e){const t=e==="emoji"?Dt:qt;_t.textContent=e==="emoji"?"Emoji":"Symbol",je.innerHTML=t.map(n=>`<span class="mdv-insert-item" data-char="${g(n)}">${n}</span>`).join(""),Ne.classList.add("open")}function qe(){Ne.classList.remove("open")}je.addEventListener("click",e=>{const t=e.target.closest(".mdv-insert-item");t&&(A("","",t.dataset.char),qe())}),document.addEventListener("click",e=>{!e.target.closest(".mdv-insert-popup")&&!e.target.closest('[data-cmd="emoji"]')&&!e.target.closest('[data-cmd="symbol"]')&&qe()});function _(e){const t=o.scrollTop,n=o.selectionStart,i=o.selectionEnd,r=o.value,s=(n>0&&r[n-1]!==`
`?`
`:"")+e+`
`,d=n+s.length;o.value=r.slice(0,n)+s+r.slice(i),document.activeElement!==o&&o.focus({preventScroll:!0}),o.selectionStart=o.selectionEnd=d,o.dispatchEvent(new Event("input")),o.scrollTop=t}const we={bold:()=>A("**","**","bold text"),italic:()=>A("*","*","italic text"),strike:()=>A("~~","~~","strikethrough text"),ul:()=>oe("- "),ol:()=>oe("1. "),task:()=>oe("- [ ] "),quote:()=>oe("> "),link:()=>A("[","](https://)","link"),image:()=>_("![image description](https://)"),table:()=>_(`| Column 1 | Column 2 |
|---|---|
| Cell 1 | Cell 2 |`),code:()=>A("`","`","code"),codeblock:()=>_("```js\n\n```"),math:()=>A("$","$","E = mc^2"),mermaid:()=>_("```mermaid\ngraph TD\nA[Start] --> B[End]\n```"),hr:()=>_("---"),callout:()=>_(`> [!NOTE]
> Note content.`),sentenceCase:()=>ve(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()),upperCase:()=>ve(e=>e.toUpperCase()),lowerCase:()=>ve(e=>e.toLowerCase()),dateTime:()=>{A("","",new Date().toLocaleString())},emoji:()=>De("emoji"),symbol:()=>De("symbol")};document.getElementById("toolbar").addEventListener("click",e=>{const t=e.target.closest(".fmt-btn[data-cmd]");if(!t)return;const n=we[t.dataset.cmd];n&&n()});function zt(e){const t=e>0?"#".repeat(e)+" ":"",n=o.scrollTop,i=o.selectionStart,r=o.value,l=r.lastIndexOf(`
`,i-1)+1,s=r.indexOf(`
`,i),d=s===-1?r.length:s,a=r.slice(l,d).replace(/^#{1,6}\s*/,"");o.value=r.slice(0,l)+t+a+r.slice(d),document.activeElement!==o&&o.focus({preventScroll:!0}),o.dispatchEvent(new Event("input")),o.scrollTop=n}document.querySelectorAll(".fmt-heading-btn").forEach(e=>{e.addEventListener("click",()=>{zt(parseInt(e.dataset.heading,10))})}),document.addEventListener("keydown",e=>{const t=e.ctrlKey||e.metaKey;t&&e.key.toLowerCase()==="b"?(e.preventDefault(),we.bold()):t&&e.key.toLowerCase()==="i"?(e.preventDefault(),we.italic()):t&&e.key.toLowerCase()==="f"?(e.preventDefault(),Qe()):t&&e.key.toLowerCase()==="t"?(e.preventDefault(),Ae()):t&&e.key.toLowerCase()==="w"?(e.preventDefault(),Oe(b)):t&&e.key.toLowerCase()==="s"?(e.preventDefault(),Te()):t&&e.key.toLowerCase()==="o"?(e.preventDefault(),G.click()):e.key==="Escape"&&(V.classList.contains("open")?Ee():closeToc())});let K=!0;document.getElementById("syncScrollBtn").addEventListener("click",e=>{K=!K,e.currentTarget.classList.toggle("active",K)}),document.getElementById("syncScrollBtn").classList.add("active"),document.getElementById("toggleGutterBtn").addEventListener("click",e=>{T.classList.toggle("mdv-gutter-hidden"),e.currentTarget.classList.toggle("active",T.classList.contains("mdv-gutter-hidden"))}),window.matchMedia("(max-width: 600px)").matches&&(T.classList.add("mdv-gutter-hidden"),document.getElementById("toggleGutterBtn").classList.add("active"));const u=document.getElementById("previewScroll"),ie=.1;function Ut(){if(!L||!L.length){const a=o.scrollTop/Math.max(1,o.scrollHeight-o.clientHeight);u.scrollTop=a*(u.scrollHeight-u.clientHeight);return}const e=o.scrollTop<=0,t=o.scrollTop+o.clientHeight>=o.scrollHeight-2;if(e){u.scrollTop=0;return}if(t){u.scrollTop=u.scrollHeight-u.clientHeight;return}const n=parseInt(getComputedStyle(o).lineHeight)||21,i=parseFloat(getComputedStyle(o).paddingTop)||0,r=(o.scrollTop-i)/n+1,l=Math.max(1,r+o.clientHeight/n*ie);let s=0;for(let a=0;a<L.length&&L[a].startLine<=l;a++)s=a;const d=f.querySelector(`.mdv-block[data-block-i="${s}"]`);if(!d){const a=o.scrollTop/Math.max(1,o.scrollHeight-o.clientHeight);u.scrollTop=a*(u.scrollHeight-u.clientHeight);return}u.scrollTop=Math.max(0,Math.min(d.offsetTop-u.clientHeight*ie,u.scrollHeight-u.clientHeight))}function Wt(){if(!L||!L.length){const a=u.scrollTop/Math.max(1,u.scrollHeight-u.clientHeight);o.scrollTop=a*(o.scrollHeight-o.clientHeight);return}const e=u.scrollTop<=0,t=u.scrollTop+u.clientHeight>=u.scrollHeight-2;if(e){o.scrollTop=0;return}if(t){o.scrollTop=o.scrollHeight-o.clientHeight;return}const n=u.scrollTop+u.clientHeight*ie;let i=0;const r=f.querySelectorAll(".mdv-block");for(let a=0;a<r.length&&r[a].offsetTop<=n;a++)i=a;const l=L[i];if(!l){const a=u.scrollTop/Math.max(1,u.scrollHeight-u.clientHeight);o.scrollTop=a*(o.scrollHeight-o.clientHeight);return}const s=parseInt(getComputedStyle(o).lineHeight)||21,d=parseFloat(getComputedStyle(o).paddingTop)||0;o.scrollTop=Math.max(0,Math.min(d+(l.startLine-1)*s-o.clientHeight*ie,o.scrollHeight-o.clientHeight))}u.addEventListener("scroll",()=>{K&&!q&&(q=!0,Wt(),requestAnimationFrame(()=>{q=!1}))});const Z=document.getElementById("resizer"),O=document.getElementById("editorPane");let z=!1;window.matchMedia("(max-width: 600px)").matches&&(z=!0,O.classList.add("mdv-wrap-on"),document.getElementById("toggleWrapBtn").classList.add("active")),document.getElementById("toggleWrapBtn").addEventListener("click",e=>{z=!z,O.classList.toggle("mdv-wrap-on",z),e.currentTarget.classList.toggle("active",z),o.scrollTop=0,o.scrollLeft=0,T.scrollTop=0;const t=document.getElementById("editorHighlightLayer");t&&(t.scrollTop=0,t.scrollLeft=0);const n=document.getElementById("editorBlockLayer");n&&(n.scrollTop=0,n.scrollLeft=0),ne(),J()});const U=document.getElementById("previewPane");let ye=!1;Z.addEventListener("mousedown",()=>{ye=!0,Z.classList.add("dragging"),document.body.style.userSelect="none"}),window.addEventListener("mousemove",e=>{if(!ye)return;const t=document.getElementById("mainArea").getBoundingClientRect();let n=(e.clientX-t.left)/t.width*100;n=Math.min(80,Math.max(20,n)),U.style.flex=`0 0 ${n}%`,O.style.flex=`1 1 ${100-n}%`}),window.addEventListener("mouseup",()=>{ye=!1,Z.classList.remove("dragging"),document.body.style.userSelect=""});const _e=document.getElementById("viewToggle"),cn=document.getElementById("mainArea");let B="preview";const ke=document.getElementById("floatViewToggleBtn"),ze=document.getElementById("floatViewToggleIcon"),Vt='<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',Gt='<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';function X(){return window.matchMedia("(max-width: 600px)").matches}function W(e){B=e,[..._e.children].forEach(n=>n.classList.toggle("active",n.dataset.view===e)),document.querySelectorAll("[data-drawer-view]").forEach(n=>n.classList.toggle("active",n.dataset.drawerView===e)),X()?(O.classList.toggle("mdv-pane-hidden",e!=="edit"),U.classList.toggle("mdv-pane-hidden",e==="edit"),Z.style.display="none",O.style.flex="1 1 100%",U.style.flex="1 1 100%"):(O.classList.toggle("mdv-pane-hidden",e==="preview"),U.classList.remove("mdv-pane-hidden"),Z.style.display=e==="edit"?"block":"none",e==="edit"?(O.style.flex="1 1 50%",U.style.flex="1 1 50%"):(O.style.flex="1 1 100%",U.style.flex="1 1 100%")),e!=="preview"&&o.focus(),ze&&(ze.innerHTML=e==="preview"?Vt:Gt,ke.title=e==="preview"?"Edit":"Preview"),J()}_e.addEventListener("click",e=>{const t=e.target.closest("button");t&&W(t.dataset.view)}),document.querySelectorAll("[data-drawer-view]").forEach(e=>{e.addEventListener("click",()=>{W(e.dataset.drawerView),C()})}),ke&&ke.addEventListener("click",()=>{W(B==="preview"?"edit":"preview")}),W("preview");function be(){if(!window.visualViewport)return;const e=window.visualViewport,t=Math.max(0,window.innerHeight-e.height-e.offsetTop);document.documentElement.style.setProperty("--mdv-vvb-offset",t+"px")}window.visualViewport&&(window.visualViewport.addEventListener("resize",be),window.visualViewport.addEventListener("scroll",be),be());function Ue(){const e=X();document.querySelectorAll(".mdv-stat-label").forEach(t=>{t.textContent=e?t.dataset.short:t.dataset.full})}Ue();let We=X();window.addEventListener("resize",()=>{const e=X();e!==We&&(We=e,W(B),Ue(),Pe())});const Jt=document.getElementById("themeToggleBtn"),dn=document.getElementById("themeLabel"),Ve=document.getElementById("drawerThemeBtn"),Ge=document.getElementById("drawerThemeLabel");function un(e){document.getElementById("hljsTheme").href=`vendor/hljs-themes/${e?"github-dark":"github"}.min.css`}function Je(e){document.documentElement.setAttribute("data-theme",e),Ge&&(Ge.textContent=e==="dark"?"Dark":"Light"),localStorage.setItem(Se,e);const t=document.getElementById("hljsTheme");t&&(t.href=e==="dark"?"vendor/hljs-themes/github-dark.min.css":"vendor/hljs-themes/github.min.css"),window.mermaid&&(ue=!1,$())}function Ye(){const e=document.documentElement.getAttribute("data-theme");Je(e==="dark"?"light":"dark")}Jt.addEventListener("click",Ye),Ve&&Ve.addEventListener("click",Ye),(function(){const t=localStorage.getItem(Se),n=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;Je(t||(n?"dark":"light"))})();const V=document.getElementById("findBar"),x=document.getElementById("findInput"),Ke=document.getElementById("replaceInput"),M=document.getElementById("findCount");let v=[],w=-1,L=[],re=!1,Ze=!1,Xe=!1,k=[],I=-1,F=null;function Qe(){const e=B==="preview";V.classList.toggle("mdv-find-only",e),V.classList.add("open"),x.focus(),x.select(),x.value&&ot()}function Ee(){V.classList.remove("open"),le(),nt(),F=null}document.getElementById("findBtn").addEventListener("click",Qe),document.getElementById("findClose").addEventListener("click",Ee),["optCase","optWord","optRegex"].forEach(e=>{document.getElementById(e).addEventListener("click",t=>{t.currentTarget.classList.toggle("on"),e==="optCase"&&(re=t.currentTarget.classList.contains("on")),e==="optWord"&&(Ze=t.currentTarget.classList.contains("on")),e==="optRegex"&&(Xe=t.currentTarget.classList.contains("on")),Q()})});function et(){const e=x.value;if(!e)return null;try{let t=Xe?e:e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return Ze&&(t=`\\b${t}\\b`),new RegExp(t,"g"+(re?"":"i"))}catch{return null}}function le(){k=[],I=-1,f.querySelectorAll("mark.mdv-search-hit").forEach(e=>{const t=e.parentNode;if(t){for(;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e),t.normalize()}})}function Le(e){if(le(),!e)return;const t=re?e:e.toLowerCase(),n=document.createTreeWalker(f,NodeFilter.SHOW_TEXT,{acceptNode(l){if(!l.nodeValue||!l.nodeValue.trim())return NodeFilter.FILTER_REJECT;const s=l.parentNode&&l.parentNode.nodeName;return s==="SCRIPT"||s==="STYLE"||s==="MARK"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),i=[];let r;for(;r=n.nextNode();)i.push(r);i.forEach(l=>{const s=l.nodeValue,d=re?s:s.toLowerCase();let a=0,p,c=!1;const h=document.createDocumentFragment();for(;(p=d.indexOf(t,a))!==-1;){c=!0,p>a&&h.appendChild(document.createTextNode(s.slice(a,p)));const y=document.createElement("mark");y.className="mdv-search-hit",y.textContent=s.slice(p,p+t.length),h.appendChild(y),k.push(y),a=p+t.length}c&&(a<s.length&&h.appendChild(document.createTextNode(s.slice(a))),l.parentNode.replaceChild(h,l))})}function tt(e){if(!k.length)return;k[I]&&k[I].classList.remove("current"),I=(e%k.length+k.length)%k.length;const t=k[I];t.classList.add("current"),t.scrollIntoView({behavior:"smooth",block:"center"})}function se(e){const t=x.value;if(!t){le(),F=null,M.textContent="0/0";return}if(t!==F&&(Le(t),F=t),!k.length){M.textContent="0/0";return}tt(I<0?0:I+(e?1:-1)),M.textContent=`${I+1}/${k.length}`}function Q(e=!0){if(B==="preview"){se(!0);return}const t=et();if(v=[],t){let n;const i=o.value;for(;n=t.exec(i);)v.push([n.index,n.index+n[0].length]),n.index===t.lastIndex&&t.lastIndex++}w=v.length?0:-1,ae(),e&&w>=0&&ce(w)}function ae(){M.textContent=v.length?`${w+1}/${v.length}`:"0/0"}function nt(){const e=document.getElementById("editorHighlightLayer");e&&(e.innerHTML=g(o.value))}function ce(e){if(e<0||e>=v.length)return;const[t,n]=v[e],i=o.value,r=document.getElementById("editorHighlightLayer");r&&(r.innerHTML=g(i.slice(0,t))+'<mark class="mdv-search-hit current">'+g(i.slice(t,n))+"</mark>"+g(i.slice(n))),o.setSelectionRange(t,n);const l=parseInt(getComputedStyle(o).lineHeight)||21,s=i.substring(0,t).split(`
`).length,d=Math.floor(o.clientHeight/l),a=Math.max(0,(s-Math.floor(d/2))*l);o.scrollTop=a,r&&(r.scrollTop=o.scrollTop,r.scrollLeft=o.scrollLeft),T.scrollTop=o.scrollTop;const p=document.getElementById("editorBlockLayer");p&&(p.scrollTop=o.scrollTop,p.scrollLeft=o.scrollLeft)}function ot(){if(B==="preview"){const e=x.value;if(!e){le(),F=null,M.textContent="0/0";return}Le(e),F=e,k.length?(tt(0),M.textContent=`1/${k.length}`):M.textContent="0/0"}else Q(!0),v.length||nt()}x.addEventListener("input",ot),x.addEventListener("keydown",e=>{if(e.key==="Enter"){if(e.preventDefault(),e.stopImmediatePropagation(),B==="preview"){se(!e.shiftKey);return}v.length?(e.shiftKey?w=(w-1+v.length)%v.length:w=(w+1)%v.length,ce(w),ae()):Q(!0);return}e.key==="Escape"&&Ee()}),document.getElementById("findNext").addEventListener("click",()=>{if(B==="preview"){se(!0);return}v.length&&(w=(w+1)%v.length,ce(w),ae())}),document.getElementById("findPrev").addEventListener("click",()=>{if(B==="preview"){se(!1);return}v.length&&(w=(w-1+v.length)%v.length,ce(w),ae())}),document.getElementById("replaceOneBtn").addEventListener("click",()=>{if(w<0)return;const[e,t]=v[w];o.value=o.value.slice(0,e)+Ke.value+o.value.slice(t),o.dispatchEvent(new Event("input")),Q(!0)}),document.getElementById("replaceAllBtn").addEventListener("click",()=>{const e=et();e&&(o.value=o.value.replace(e,Ke.value),o.dispatchEvent(new Event("input")),Q(!0))});const G=document.getElementById("fileInput");document.getElementById("importFileBtn").addEventListener("click",()=>G.click()),G.addEventListener("change",()=>{const e=G.files[0];e&&it(e),G.value=""});function it(e){const t=new FileReader;t.onload=()=>{Y();const n=N(e.name.replace(/\.(md|markdown|txt)$/i,""),t.result);m.push(n),b=n.id,o.value=n.content,o.scrollTop=0,o.scrollLeft=0,T.scrollTop=0;const i=document.getElementById("editorHighlightLayer");i&&(i.scrollTop=0,i.scrollLeft=0);const r=document.getElementById("editorBlockLayer");r&&(r.scrollTop=0,r.scrollLeft=0),o.readOnly=!1,S(),$(),H()},t.readAsText(e)}const xe=document.getElementById("dropOverlay");let ee=0;window.addEventListener("dragenter",e=>{e.preventDefault(),ee++,xe.classList.add("active")}),window.addEventListener("dragover",e=>e.preventDefault()),window.addEventListener("dragleave",()=>{ee--,ee<=0&&(ee=0,xe.classList.remove("active"))}),window.addEventListener("drop",e=>{e.preventDefault(),ee=0,xe.classList.remove("active"),[...e.dataTransfer.files||[]].forEach(it)});const te=document.getElementById("urlModalOverlay");document.getElementById("importUrlBtn").addEventListener("click",()=>te.classList.add("open")),document.getElementById("urlModalClose").addEventListener("click",()=>te.classList.remove("open")),document.getElementById("urlCancelBtn").addEventListener("click",()=>te.classList.remove("open"));function Yt(e){try{const t=new URL(e);if(t.hostname==="github.com"){const n=t.pathname.match(/^\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/);if(n){const[,i,r,l,s]=n;return`https://raw.githubusercontent.com/${i}/${r}/${l}/${s}`}}return t.hostname==="gist.github.com"&&!t.pathname.endsWith("/raw")?e.replace(/\/$/,"")+"/raw":e}catch{return e}}document.getElementById("urlLoadBtn").addEventListener("click",async()=>{const e=document.getElementById("urlInput").value.trim();if(!e)return;const t=Yt(e);try{const n=await fetch(t);if(!n.ok)throw new Error("HTTP "+n.status);const i=await n.text();Y();const r=t.split("/").pop().replace(/\.(md|markdown|txt)$/i,"")||"url-document",l=N(r,i);m.push(l),b=l.id,o.value=l.content,S(),$(),H(),te.classList.remove("open")}catch{alert("Cannot load file from this URL (may be due to CORS or network).")}});function rt(e,t,n){const i=new Blob([t],{type:n}),r=URL.createObjectURL(i),l=document.createElement("a");l.href=r,l.download=e,document.body.appendChild(l),l.click(),l.remove(),URL.revokeObjectURL(r)}function Te(){const e=E();rt(`${e.name}.md`,e.content,"text/markdown;charset=utf-8")}function Kt(){const e=E(),t=`<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><title>${g(e.name)}</title>
<style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;max-width:760px;margin:40px auto;padding:0 24px;line-height:1.7;color:#0F172A;}
h1,h2,h3,h4{color:#0F172A;} h2{border-bottom:1px solid #E2E8F0;padding-bottom:.3em;}
code{background:#E8EAED;padding:2px 6px;border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:0.87em;color:#DC2626;}
pre{background:#0F172A;color:#E6EDF3;padding:16px 18px;border-radius:10px;overflow-x:auto;}
pre code{background:none;color:inherit;padding:0;}
blockquote{border-left:3px solid #0F172A;padding-left:18px;color:#64748B;font-style:italic;}
table{width:100%;border-collapse:collapse;} th,td{padding:8px 12px;border-bottom:1px solid #E2E8F0;} th{background:#F0F2F5;}
img{max-width:100%;border-radius:8px;}
</style></head><body>${f.innerHTML}</body></html>`;rt(`${e.name}.html`,t,"text/html;charset=utf-8")}function lt(){const e=E(),t=window.open("","_blank");t.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${g(e.name)}</title>
      <link rel="stylesheet" href="${location.origin+location.pathname.replace("index.html","")}core.css">
      <style>body{background:#fff;padding:20px;} .mdv-preview{max-width:100%;margin:0;padding:0;}</style>
      </head><body><div class="post-content mdv-preview">${f.innerHTML}</div></body></html>`),t.document.close(),t.onload=()=>{t.focus(),t.print()}}function Zt(){navigator.clipboard.writeText(f.innerHTML).then(()=>{st("HTML copied!")}).catch(()=>alert("Cannot copy."))}function st(e){ge.textContent=e,setTimeout(()=>{ge.textContent=""},1400)}document.getElementById("exportMdBtn").addEventListener("click",Te),document.getElementById("exportHtmlBtn").addEventListener("click",Kt),document.getElementById("exportPdfBtn").addEventListener("click",lt),document.getElementById("copyHtmlBtn").addEventListener("click",Zt),f.addEventListener("click",e=>{const t=e.target.closest("[data-copy]");if(!t)return;const n=t.parentElement.querySelector("code");n&&navigator.clipboard.writeText(n.innerText),t.innerHTML='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="20 6 9 17 4 12"/></svg>',setTimeout(()=>{t.innerHTML='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'},1500)}),f.addEventListener("click",e=>{if(!X()||e.target.closest("[data-copy]"))return;const t=e.target.closest(".mdv-code-url");if(t){window.open(t.dataset.url,"_blank","noopener");return}const n=e.target.closest("code");if(!n)return;const i=n.innerText.trim();i&&navigator.clipboard.writeText(i).then(()=>{const r=n.closest("pre")||n;r.classList.add("mdv-block-copied"),st("Copied!"),setTimeout(()=>r.classList.remove("mdv-block-copied"),400)}).catch(()=>{})}),document.querySelectorAll(".dropdown").forEach(e=>{e.querySelector("button").addEventListener("click",n=>{n.stopPropagation();const i=e.classList.contains("open");document.querySelectorAll(".dropdown.open").forEach(r=>r.classList.remove("open")),i||e.classList.add("open")})}),document.addEventListener("click",()=>document.querySelectorAll(".dropdown.open").forEach(e=>e.classList.remove("open")));const at=document.getElementById("tocSidebarList"),ct=document.getElementById("drawerTocList");function Xt(e,t){let n=e.toLowerCase().trim().replace(/[^\w\u00C0-\uFFFF\- ]/g,"").replace(/\s+/g,"-");n||(n="section");let i=n,r=1;for(;t.has(i);)i=`${n}-${r++}`;return t.add(i),i}function Qt(){const e=f.querySelectorAll("h1, h2, h3, h4"),t=new Set,n=[];e.forEach(r=>{const l=Xt(r.textContent||"",t);r.id=l,n.push({id:l,level:parseInt(r.tagName[1],10),text:r.textContent||""})});const i=n.length?(()=>{const r=Math.min(...n.map(l=>l.level));return n.map(l=>`<a href="#${l.id}" class="toc-lvl-${Math.min(4,l.level-r+1)}" data-target="${l.id}">${g(l.text)}</a>`).join("")})():'<div class="mdv-toc-empty">No headings</div>';at.innerHTML=i,ct.innerHTML=i}function en(e){const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}[at,ct].forEach(e=>{e.addEventListener("click",t=>{const n=t.target.closest("a[data-target]");n&&(t.preventDefault(),en(n.dataset.target),C())})});const tn=document.getElementById("tocSidebar"),Be=document.getElementById("tocSidebarToggle"),nn=document.getElementById("tocSidebarToggleIcon");Be&&Be.addEventListener("click",()=>{const e=tn.classList.toggle("mdv-toc-collapsed");Be.title=e?"Show":"Hide",nn.innerHTML=e?'<polyline points="20 6 9 17 4 12"/>':'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'});const on=document.getElementById("menuBtn"),dt=document.getElementById("drawer"),Ie=document.getElementById("drawerOverlay"),rn=document.getElementById("drawerClose"),ut=document.getElementById("drawerRenameBtn");function ln(){dt.classList.add("open"),Ie.classList.add("open")}function C(){dt.classList.remove("open"),Ie.classList.remove("open")}on.addEventListener("click",ln),rn.addEventListener("click",C),Ie.addEventListener("click",C),ut&&ut.addEventListener("click",()=>{C(),Re(b)});const mt=document.getElementById("drawerOpenFileBtn"),ht=document.getElementById("drawerOpenGithubBtn"),pt=document.getElementById("drawerSaveMdBtn"),gt=document.getElementById("drawerSavePdfBtn"),ft=document.getElementById("drawerDonateBtn");mt&&mt.addEventListener("click",()=>{C(),G.click()}),ht&&ht.addEventListener("click",()=>{C(),te.classList.add("open")}),pt&&pt.addEventListener("click",()=>{C(),Te()}),gt&&gt.addEventListener("click",()=>{C(),lt()}),ft&&ft.addEventListener("click",()=>{C()}),document.querySelectorAll(".mdv-autohide-scroll").forEach(e=>{let t=null;e.addEventListener("scroll",()=>{e.classList.add("is-scrolling"),clearTimeout(t),t=setTimeout(()=>e.classList.remove("is-scrolling"),800)},{passive:!0})}),window.addEventListener("beforeunload",()=>{Y(),H()}),wt(),S(),o.value=E().content,o.readOnly=!!E().builtin,ne(),fe(),$()})();
