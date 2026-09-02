<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>مغز دوم</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Vazirmatn:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root{
  --bg:#131318;
  --surface:#1a1a22;
  --surface-2:#21212b;
  --surface-3:#292933;
  --border:#302f3d;
  --text:#eae7de;
  --text-dim:#8d8a9a;
  --text-faint:#5f5d6b;
  --accent:#d6a35c;
  --accent-dim:#a67f47;
  --link:#6fb3a0;
  --link-dim:#4d7f72;
  --violet:#9382d6;
  --danger:#cf6f6f;
  --radius:10px;
}

*{box-sizing:border-box;margin:0;padding:0;}

html,body{
  height:100%;
  background:var(--bg);
  color:var(--text);
  font-family:'Vazirmatn','IBM Plex Sans',sans-serif;
  font-size:15px;
  overflow:hidden;
}

body{display:flex;flex-direction:column;}

/* ---------- top bar ---------- */
.topbar{
  display:flex;align-items:center;gap:14px;
  padding:12px 20px;
  border-bottom:1px solid var(--border);
  background:var(--surface);
  flex-shrink:0;
}
.brand{
  font-family:'Fraunces',serif;
  font-weight:600;
  font-size:19px;
  letter-spacing:.3px;
  color:var(--text);
  display:flex;align-items:center;gap:8px;
}
.brand .dot{
  width:9px;height:9px;border-radius:50%;
  background:var(--accent);
  box-shadow:0 0 0 3px rgba(214,163,92,.18);
}
.stats{
  font-family:'IBM Plex Mono',monospace;
  font-size:11.5px;color:var(--text-faint);
  margin-inline-start:auto;
  display:flex;gap:16px;
}
.viewbtns{display:flex;gap:6px;}
.viewbtn{
  background:transparent;border:1px solid var(--border);
  color:var(--text-dim);font-size:12.5px;
  padding:7px 14px;border-radius:var(--radius);
  cursor:pointer;font-family:inherit;
  transition:.15s;
}
.viewbtn:hover{border-color:var(--accent-dim);color:var(--text);}
.viewbtn.active{background:var(--accent);color:#241a0c;border-color:var(--accent);font-weight:600;}

/* ---------- layout ---------- */
.layout{flex:1;display:flex;min-height:0;}

/* ---------- sidebar ---------- */
.sidebar{
  width:270px;flex-shrink:0;
  background:var(--surface);
  border-inline-end:1px solid var(--border);
  display:flex;flex-direction:column;
  min-height:0;
}
.sidebar-head{padding:14px 14px 10px;flex-shrink:0;}
.search-box{
  width:100%;background:var(--surface-2);
  border:1px solid var(--border);color:var(--text);
  border-radius:var(--radius);padding:9px 12px;
  font-size:13px;font-family:inherit;
}
.search-box:focus{outline:none;border-color:var(--accent-dim);}
.new-note-btn{
  width:100%;margin-top:8px;
  background:var(--accent);color:#241a0c;
  border:none;border-radius:var(--radius);
  padding:9px 12px;font-weight:600;font-size:13px;
  cursor:pointer;font-family:inherit;
  transition:.15s;
}
.new-note-btn:hover{background:#e2b06f;}
.backup-row{display:flex;gap:6px;margin-top:8px;}
.backup-btn{
  flex:1;background:transparent;border:1px solid var(--border);color:var(--text-dim);
  border-radius:8px;padding:7px 6px;font-size:11px;cursor:pointer;font-family:inherit;
}
.backup-btn:hover{border-color:var(--link-dim);color:var(--text);}
.file-input-hidden{display:none;}

/* ---------- custom modal (replaces alert/confirm, which browsers/iframes may block) ---------- */
.modal-backdrop{
  position:fixed;inset:0;z-index:700;background:rgba(8,8,12,.6);
  display:flex;align-items:center;justify-content:center;
  opacity:0;visibility:hidden;transition:.18s ease;padding:20px;
}
.modal-backdrop.show{opacity:1;visibility:visible;}
.modal-box{
  background:var(--surface);border:1px solid var(--border);border-radius:14px;
  padding:22px;max-width:340px;width:100%;box-shadow:0 20px 50px rgba(0,0,0,.5);
}
.modal-box .m-title{font-family:'Fraunces',serif;font-weight:600;font-size:16px;margin-bottom:8px;}
.modal-box .m-body{font-size:13px;color:var(--text-dim);line-height:1.9;margin-bottom:18px;}
.modal-box .m-actions{display:flex;flex-direction:column;gap:8px;}
.modal-btn{
  border:1px solid var(--border);background:var(--surface-2);color:var(--text);
  border-radius:9px;padding:10px 14px;font-size:13px;cursor:pointer;font-family:inherit;text-align:center;
}
.modal-btn:hover{border-color:var(--accent-dim);}
.modal-btn.primary{background:var(--accent);color:#241a0c;border-color:var(--accent);font-weight:600;}
.modal-btn.danger{color:var(--danger);}
.modal-btn.ghost{background:transparent;color:var(--text-faint);border-color:transparent;}

/* ---------- toast (replaces alert for status messages) ---------- */
.toast{
  position:fixed;bottom:22px;left:50%;transform:translateX(-50%) translateY(20px);
  background:var(--surface-3);border:1px solid var(--border);color:var(--text);
  padding:11px 20px;border-radius:30px;font-size:13px;z-index:800;
  opacity:0;visibility:hidden;transition:.25s ease;box-shadow:0 10px 30px rgba(0,0,0,.4);
  max-width:85vw;text-align:center;
}
.toast.show{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0);}
.toast.error{border-color:rgba(207,111,111,.4);color:var(--danger);}

.tag-row{
  display:flex;flex-wrap:wrap;gap:5px;
  padding:0 14px 10px;flex-shrink:0;
}
.tag-chip{
  font-family:'IBM Plex Mono',monospace;
  font-size:10.5px;color:var(--link);
  background:rgba(111,179,160,.1);
  border:1px solid rgba(111,179,160,.25);
  padding:3px 8px;border-radius:20px;
  cursor:pointer;white-space:nowrap;
}
.tag-chip.active{background:var(--link);color:#0e211c;border-color:var(--link);}

.note-list{flex:1;overflow-y:auto;padding:4px 8px 14px;}
.note-item{
  padding:10px 10px;border-radius:8px;
  cursor:pointer;margin-bottom:2px;
  border:1px solid transparent;
}
.note-item:hover{background:var(--surface-2);}
.note-item.selected{background:var(--surface-3);border-color:var(--border);}
.note-item .t{font-family:'Fraunces',serif;font-weight:600;font-size:14.5px;color:var(--text);margin-bottom:3px;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.note-item .s{font-size:11.5px;color:var(--text-faint);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.empty-hint{padding:30px 18px;text-align:center;color:var(--text-faint);font-size:12.5px;line-height:1.8;}

/* ---------- main ---------- */
.main{flex:1;display:flex;min-width:0;min-height:0;}
.editor-pane, .graph-pane{flex:1;display:flex;flex-direction:column;min-width:0;}

.editor-toolbar{
  display:flex;align-items:center;gap:10px;
  padding:14px 24px;border-bottom:1px solid var(--border);
  flex-shrink:0;position:relative;
  background:radial-gradient(600px 80px at 15% 0%, rgba(214,163,92,.06), transparent 70%);
}
.title-input{
  flex:1;background:transparent;border:none;color:var(--text);
  font-family:'Fraunces',serif;font-size:22px;font-weight:600;
  font-family:inherit;
}
.title-input{font-family:'Fraunces',serif;}
.title-input:focus{outline:none;}
.mode-toggle{
  position:relative;display:flex;gap:2px;background:var(--surface-2);padding:3px;border-radius:22px;
  border:1px solid var(--border);
}
.mode-toggle .thumb{
  position:absolute;top:3px;bottom:3px;right:3px;width:calc(50% - 3px);
  background:linear-gradient(135deg, var(--accent), #c48b45);
  border-radius:18px;transition:transform .28s cubic-bezier(.4,0,.2,1);
  box-shadow:0 2px 10px rgba(214,163,92,.4);
}
.mode-toggle.read .thumb{transform:translateX(-100%);}
.mode-toggle button{
  position:relative;z-index:2;background:transparent;border:none;color:var(--text-dim);
  font-size:12px;padding:7px 15px;border-radius:18px;cursor:pointer;font-family:inherit;
  transition:color .25s ease;
}
.mode-toggle button.active{color:#241a0c;font-weight:600;}
.icon-btn{
  background:transparent;border:1px solid var(--border);color:var(--text-dim);
  width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:15px;
  display:flex;align-items:center;justify-content:center;transition:.15s;
}
.icon-btn:hover{border-color:var(--danger);color:var(--danger);}

.editor-body{flex:1;overflow-y:auto;padding:22px 26px;min-height:0;position:relative;}
.md-textarea{
  width:100%;height:100%;min-height:300px;background:transparent;
  border:none;color:var(--text);font-family:'IBM Plex Mono',monospace;
  font-size:13.5px;line-height:1.85;resize:none;caret-color:var(--accent);
}
.md-textarea:focus{outline:none;}
.wordcount-badge{
  position:absolute;bottom:14px;left:14px;
  font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:var(--text-faint);
  background:var(--surface-2);border:1px solid var(--border);
  padding:4px 10px;border-radius:20px;pointer-events:none;opacity:.85;
}
@keyframes fadeSlideIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
.fade-in{animation:fadeSlideIn .35s cubic-bezier(.2,.7,.3,1);}

.preview{font-size:15px;line-height:1.95;}
.preview h1{
  font-family:'Fraunces',serif;font-size:26px;font-weight:700;margin:20px 0 12px;
  padding-bottom:10px;position:relative;color:var(--text);letter-spacing:.2px;
}
.preview h1::after{
  content:'';display:block;position:absolute;bottom:0;right:0;left:0;height:2px;
  background:linear-gradient(90deg, var(--accent), var(--link) 40%, transparent 85%);
  border-radius:2px;
}
.preview h2{font-family:'Fraunces',serif;font-size:20px;font-weight:600;margin:18px 0 8px;color:var(--text);
  border-right:3px solid var(--link-dim);padding-right:10px;}
.preview h3{font-family:'Fraunces',serif;font-size:16.5px;font-weight:600;margin:15px 0 6px;color:#cfcbc0;}
.preview p{margin:0 0 13px;color:#d9d6cd;}
.preview ul{margin:0 0 13px;padding-inline-start:22px;}
.preview li{margin-bottom:5px;color:#d9d6cd;}
.preview li::marker{color:var(--accent-dim);}
.preview blockquote{
  margin:0 0 13px;padding:10px 16px;border-inline-start:3px solid var(--violet);
  background:rgba(147,130,214,.07);border-radius:0 8px 8px 0;color:#cac6d8;font-size:14px;
}
.preview code{background:var(--surface-2);border:1px solid var(--border);padding:1px 6px;border-radius:5px;font-family:'IBM Plex Mono',monospace;font-size:.88em;color:var(--accent);}
.preview strong{color:var(--text);}
.preview a.wikilink{
  color:var(--link);text-decoration:none;padding:1px 6px 2px;border-radius:5px;
  background:rgba(111,179,160,.1);border:1px solid rgba(111,179,160,.25);
  transition:.15s;
}
.preview a.wikilink:hover{background:rgba(111,179,160,.22);border-color:var(--link);}
.preview a.wikilink-new{color:var(--text-faint);background:transparent;border-style:dashed;}
.tag-inline{font-family:'IBM Plex Mono',monospace;font-size:.85em;}
.empty-editor{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--text-faint);gap:14px;text-align:center;}
.empty-editor .big{font-family:'Fraunces',serif;font-size:26px;color:var(--text-dim);}

/* ---------- right panel ---------- */
.rightpanel{
  width:250px;flex-shrink:0;background:var(--surface);
  border-inline-start:1px solid var(--border);
  padding:18px 16px;overflow-y:auto;
}
.rp-section{margin-bottom:22px;}
.rp-title{
  font-family:'IBM Plex Mono',monospace;font-size:10.5px;
  letter-spacing:1px;color:var(--text-faint);
  text-transform:uppercase;margin-bottom:9px;
}
.rp-link{
  display:block;font-size:13px;color:var(--link);
  padding:6px 8px;margin-bottom:2px;border-radius:6px;
  cursor:pointer;background:rgba(111,179,160,.06);
}
.rp-link:hover{background:rgba(111,179,160,.14);}
.rp-empty{font-size:12px;color:var(--text-faint);font-style:italic;}
.rp-tag{
  display:inline-block;font-family:'IBM Plex Mono',monospace;font-size:11px;
  color:var(--violet);background:rgba(147,130,214,.1);
  border:1px solid rgba(147,130,214,.25);
  padding:3px 8px;border-radius:20px;margin:0 4px 6px 0;
}

/* ---------- graph ---------- */
.graph-pane{position:relative;}
svg.graph{width:100%;height:100%;background:var(--bg);}
.graph-hint{
  position:absolute;bottom:18px;left:50%;transform:translateX(-50%);
  font-size:11.5px;color:var(--text-faint);
  background:var(--surface);border:1px solid var(--border);
  padding:6px 14px;border-radius:20px;
}
.flow-edge{animation:antsFlow 2.4s linear infinite;}
@keyframes antsFlow{to{stroke-dashoffset:-18;}}
.graph-legend{
  position:absolute;top:16px;left:16px;
  background:var(--surface);border:1px solid var(--border);border-radius:10px;
  padding:10px 12px;font-size:11px;color:var(--text-dim);display:flex;flex-direction:column;gap:6px;
  box-shadow:0 8px 24px rgba(0,0,0,.35);
}
.graph-legend .lg-row{display:flex;align-items:center;gap:7px;}
.graph-legend .lg-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0;}
.graph-legend .lg-diamond{width:8px;height:8px;transform:rotate(45deg);flex-shrink:0;border:1.4px solid #9382d6;background:transparent;}

/* ---------- note item tags ---------- */
.note-item .mini-tags{display:flex;gap:4px;flex-wrap:wrap;margin-top:5px;}
.note-item .mini-tag{
  font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet);
  background:rgba(147,130,214,.1);border:1px solid rgba(147,130,214,.22);
  padding:1px 6px;border-radius:20px;
}

/* ---------- quick tag panel ---------- */
.quicktag-row{
  display:flex;gap:8px;padding:12px 24px;flex-shrink:0;align-items:center;flex-wrap:wrap;
  margin:0 24px 14px;border-radius:12px;
  background:linear-gradient(135deg, rgba(147,130,214,.07), rgba(111,179,160,.04));
  border:1px solid var(--border);
}
.quicktag-row .lbl{font-size:12px;color:var(--text-dim);display:flex;align-items:center;gap:5px;font-weight:500;}
.quicktag-input{
  background:var(--surface-2);border:1px solid var(--border);color:var(--text);
  border-radius:20px;padding:5px 13px;font-size:12px;font-family:'IBM Plex Mono',monospace;
  width:130px;transition:.15s;
}
.quicktag-input:focus{outline:none;border-color:var(--violet);box-shadow:0 0 0 3px rgba(147,130,214,.15);}
.quicktag-add{
  background:linear-gradient(135deg, var(--violet), #7a6ac2);color:#181022;
  border:none;border-radius:20px;padding:5px 14px;font-size:12px;cursor:pointer;font-family:inherit;
  font-weight:600;box-shadow:0 3px 10px rgba(147,130,214,.3);transition:.15s;
}
.quicktag-add:hover{transform:translateY(-1px);box-shadow:0 5px 14px rgba(147,130,214,.45);}
.note-tag-pill{
  font-family:'IBM Plex Mono',monospace;font-size:11.5px;
  padding:4px 7px 4px 11px;border-radius:20px;display:inline-flex;align-items:center;gap:6px;
  box-shadow:0 1px 4px rgba(0,0,0,.15);transition:.15s;
}
.note-tag-pill:hover{transform:translateY(-1px);}
.note-tag-pill .x{cursor:pointer;color:var(--text-faint);font-size:11px;}
.note-tag-pill .x:hover{color:var(--danger);}
.qtag-divider{width:1px;align-self:stretch;background:var(--border);margin:0 2px;}
.qtag-suggest-strip{display:flex;gap:5px;flex-wrap:wrap;align-items:center;}
.qtag-suggest-chip{
  font-family:'IBM Plex Mono',monospace;font-size:10.5px;
  padding:3px 5px 3px 9px;border-radius:20px;cursor:pointer;
  display:inline-flex;align-items:center;gap:5px;border:1px dashed;opacity:.85;transition:.15s;
}
.qtag-suggest-chip:hover{opacity:1;transform:translateY(-1px);}
.qtag-suggest-chip .plus{font-size:11px;}

/* ---------- markdown quick toolbar ---------- */
.md-toolbar{
  display:flex;gap:4px;padding:8px 26px;border-bottom:1px solid var(--border);
  flex-shrink:0;flex-wrap:wrap;background:rgba(255,255,255,.012);
}
.md-tbtn{
  background:var(--surface-2);border:1px solid var(--border);color:var(--text-dim);
  min-width:30px;height:30px;padding:0 9px;border-radius:8px;cursor:pointer;
  font-family:'Fraunces',serif;font-size:13px;display:flex;align-items:center;justify-content:center;gap:4px;
  transition:.15s;
}
.md-tbtn span.lbl-txt{font-family:'Vazirmatn',sans-serif;font-size:11px;}
.md-tbtn:hover{border-color:var(--accent-dim);color:var(--text);background:var(--surface-3);}
.md-tbtn:active{transform:scale(.94);}

/* ---------- tag autocomplete ---------- */
.tagbox-wrap{position:relative;display:inline-flex;}
.tag-suggest{
  position:absolute;top:calc(100% + 6px);right:0;min-width:190px;max-height:220px;overflow-y:auto;
  background:var(--surface-2);border:1px solid var(--border);border-radius:11px;
  box-shadow:0 16px 36px rgba(0,0,0,.45);z-index:60;padding:6px;display:none;
}
.tag-suggest.show{display:block;}
.tag-suggest-item{
  display:flex;align-items:center;gap:9px;padding:7px 10px;border-radius:8px;
  cursor:pointer;font-size:12.5px;color:var(--text);font-family:'IBM Plex Mono',monospace;
}
.tag-suggest-item:hover, .tag-suggest-item.hl{background:var(--surface-3);}
.tag-suggest-item .dot{width:9px;height:9px;border-radius:50%;flex-shrink:0;}
.tag-suggest-item .cnt{margin-inline-start:auto;color:var(--text-faint);font-size:10.5px;}
.tag-suggest-empty{padding:8px 10px;font-size:11.5px;color:var(--text-faint);}
.tag-suggest-create{border-top:1px dashed var(--border);margin-top:4px;padding-top:8px;color:var(--link);}

/* ---------- insights ---------- */
.insight-row{display:flex;justify-content:space-between;font-size:12px;color:var(--text-dim);padding:5px 0;border-bottom:1px solid var(--border);}
.insight-row b{color:var(--text);font-family:'IBM Plex Mono',monospace;font-weight:500;}

/* ---------- chat / assistant ---------- */
.chat-pane{flex:1;display:flex;flex-direction:column;min-height:0;}
.chat-head{
  display:flex;align-items:center;gap:10px;
  padding:12px 24px;border-bottom:1px solid var(--border);flex-shrink:0;
}
.chat-head .ttl{font-family:'Fraunces',serif;font-weight:600;font-size:17px;}
.chat-head .sub{font-size:11.5px;color:var(--text-faint);margin-inline-start:auto;}
.chat-clear{
  background:transparent;border:1px solid var(--border);color:var(--text-dim);
  font-size:12px;padding:6px 12px;border-radius:8px;cursor:pointer;font-family:inherit;
}
.chat-clear:hover{border-color:var(--danger);color:var(--danger);}
.chat-settings{
  display:flex;align-items:center;gap:8px;flex-wrap:wrap;
  padding:10px 24px;border-bottom:1px solid var(--border);flex-shrink:0;
  font-size:12px;color:var(--text-dim);
}
.chat-settings select, .chat-settings input{
  background:var(--surface-2);border:1px solid var(--border);color:var(--text);
  border-radius:8px;padding:6px 10px;font-size:12px;font-family:inherit;
}
.chat-settings select:focus, .chat-settings input:focus{outline:none;border-color:var(--accent-dim);}
.chat-settings .ollama-note{
  flex-basis:100%;font-size:11px;color:var(--text-faint);line-height:1.7;
  background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:8px 12px;
}
.chat-settings .ollama-note code{color:var(--accent);font-family:'IBM Plex Mono',monospace;}
.chat-messages{flex:1;overflow-y:auto;padding:20px 24px;display:flex;flex-direction:column;gap:14px;}
.bubble{max-width:78%;padding:11px 15px;border-radius:14px;font-size:14px;line-height:1.85;}
.bubble.user{align-self:flex-end;background:var(--accent);color:#241a0c;border-bottom-left-radius:4px;font-weight:500;}
.bubble.assistant{align-self:flex-start;background:var(--surface-2);border:1px solid var(--border);border-bottom-right-radius:4px;}
.bubble.assistant p{margin:0 0 10px;color:#d9d6cd;}
.bubble.assistant p:last-child{margin-bottom:0;}
.bubble.assistant a.wikilink{color:var(--link);text-decoration:none;border-bottom:1px dashed var(--link-dim);}
.bubble.error{align-self:flex-start;background:rgba(207,111,111,.1);border:1px solid rgba(207,111,111,.3);color:var(--danger);}
.chat-empty{color:var(--text-faint);font-size:13px;text-align:center;margin:auto;line-height:2;}
.chat-inputrow{display:flex;gap:10px;padding:16px 24px;border-top:1px solid var(--border);flex-shrink:0;}
.chat-input{
  flex:1;background:var(--surface-2);border:1px solid var(--border);color:var(--text);
  border-radius:22px;padding:11px 18px;font-size:14px;font-family:inherit;
}
.chat-input:focus{outline:none;border-color:var(--accent-dim);}
.chat-send{
  background:var(--accent);color:#241a0c;border:none;border-radius:22px;
  padding:0 22px;font-weight:600;font-size:13.5px;cursor:pointer;font-family:inherit;
}
.chat-send:disabled{opacity:.5;cursor:default;}
.typing-dots span{display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--text-faint);margin-inline-end:3px;animation:blink 1.2s infinite;}
.typing-dots span:nth-child(2){animation-delay:.2s;}
.typing-dots span:nth-child(3){animation-delay:.4s;}
@keyframes blink{0%,80%,100%{opacity:.25;}40%{opacity:1;}}

::-webkit-scrollbar{width:9px;height:9px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:var(--surface-3);border-radius:5px;}
::-webkit-scrollbar-thumb:hover{background:var(--border);}

/* ---------- loading screen ---------- */
#loadingScreen{
  position:fixed;inset:0;z-index:9999;background:var(--bg);
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;
  transition:opacity .55s ease, visibility .55s ease;
}
#loadingScreen.hide{opacity:0;visibility:hidden;pointer-events:none;}
.load-brand{font-family:'Fraunces',serif;font-weight:600;font-size:20px;letter-spacing:.5px;color:var(--text);}
.load-msg{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--text-faint);transition:opacity .25s ease;min-height:16px;}
.ln-node{animation:nodePulse 1.8s ease-in-out infinite;}
.ln-edge{stroke-dasharray:60;stroke-dashoffset:60;animation:drawEdge 1.6s ease forwards infinite;}
@keyframes nodePulse{0%,100%{opacity:.45;r:3;}50%{opacity:1;r:5;}}
@keyframes drawEdge{0%{stroke-dashoffset:60;opacity:0;}40%{opacity:1;}100%{stroke-dashoffset:0;opacity:.15;}}

/* ---------- hamburger / mobile drawer chrome ---------- */
.hamburger{
  display:none;background:transparent;border:1px solid var(--border);color:var(--text-dim);
  width:34px;height:34px;border-radius:8px;font-size:15px;cursor:pointer;flex-shrink:0;
}
.drawer-backdrop{
  position:fixed;inset:0;background:rgba(8,8,12,.55);z-index:400;
  opacity:0;visibility:hidden;transition:.2s ease;
}
.drawer-backdrop.show{opacity:1;visibility:visible;}
.details-btn{display:none;}

/* ================= MOBILE ================= */
body.is-mobile .hamburger{display:flex;align-items:center;justify-content:center;}
body.is-mobile .stats{display:none;}
body.is-mobile .brand{font-size:16px;}
body.is-mobile .topbar{padding:10px 12px;gap:9px;}
body.is-mobile .viewbtns{gap:4px;overflow-x:auto;scrollbar-width:none;}
body.is-mobile .viewbtns::-webkit-scrollbar{display:none;}
body.is-mobile .viewbtn{padding:7px 10px;font-size:11.5px;white-space:nowrap;flex-shrink:0;}

body.is-mobile .sidebar{
  position:fixed;top:0;bottom:0;right:0;z-index:500;
  width:84vw;max-width:320px;
  transform:translateX(100%);
  transition:transform .25s ease;
  box-shadow:-8px 0 30px rgba(0,0,0,.4);
}
body.is-mobile .sidebar.open{transform:translateX(0);}

body.is-mobile .details-btn{display:flex;}
body.is-mobile .rightpanel{
  position:fixed;left:0;right:0;bottom:0;z-index:500;
  width:auto;max-height:72vh;
  border-inline-start:none;border-top:1px solid var(--border);
  border-radius:18px 18px 0 0;
  transform:translateY(105%);
  transition:transform .28s ease;
  box-shadow:0 -10px 30px rgba(0,0,0,.4);
}
body.is-mobile .rightpanel.open{transform:translateY(0);}
body.is-mobile .rightpanel::before{
  content:'';display:block;width:38px;height:4px;border-radius:3px;
  background:var(--border);margin:0 auto 14px;
}

body.is-mobile .editor-body{padding:16px 16px;}
body.is-mobile .editor-toolbar{padding:10px 14px;}
body.is-mobile .title-input{font-size:18px;}
body.is-mobile .quicktag-row{padding:9px 12px;margin:0 12px 10px;}
body.is-mobile .md-toolbar{padding:7px 12px;}
body.is-mobile .chat-messages{padding:14px 14px;}
body.is-mobile .chat-inputrow{padding:12px 14px;}
body.is-mobile .chat-head{padding:10px 14px;}
body.is-mobile .chat-settings{padding:8px 14px;}
body.is-mobile .bubble{max-width:88%;}
body.is-mobile .graph-hint{font-size:10px;padding:5px 10px;bottom:10px;}
body.is-mobile .graph-legend{padding:7px 9px;font-size:9.5px;top:10px;left:10px;gap:4px;}
body.is-mobile .empty-hint{padding:20px 12px;}
</style>
</head>
<body>

<div id="loadingScreen">
  <svg id="loadingSvg" viewBox="0 0 220 160" width="200" height="145">
    <g id="loadLines" fill="none" stroke="#3a3a4d" stroke-width="1.3"></g>
    <g id="loadNodes"></g>
  </svg>
  <div class="load-brand">مغز دوم</div>
  <div class="load-msg" id="loadMsg">در حال بیدار شدن…</div>
</div>

<div class="drawer-backdrop" id="drawerBackdrop"></div>

<div class="modal-backdrop" id="modalBackdrop">
  <div class="modal-box">
    <div class="m-title" id="modalTitle"></div>
    <div class="m-body" id="modalBody"></div>
    <div class="m-actions" id="modalActions"></div>
  </div>
</div>
<div class="toast" id="toast"></div>

<div class="topbar">
  <button class="hamburger" id="hamburgerBtn" aria-label="منو">☰</button>
  <div class="brand"><span class="dot"></span>مغز دوم</div>
  <div class="viewbtns">
    <button class="viewbtn active" id="btn-notes">یادداشت‌ها</button>
    <button class="viewbtn" id="btn-graph">نمای گراف</button>
    <button class="viewbtn" id="btn-chat">دستیار هوشمند</button>
  </div>
  <div class="stats" id="stats"></div>
</div>

<div class="layout">

  <div class="sidebar">
    <div class="sidebar-head">
      <input class="search-box" id="search" placeholder="جستجو در یادداشت‌ها…">
      <button class="new-note-btn" id="newNoteBtn">+ یادداشت جدید</button>
      <div class="backup-row">
        <button class="backup-btn" id="exportBtn">⬇ پشتیبان‌گیری</button>
        <button class="backup-btn" id="importBtn">⬆ بازیابی</button>
        <input type="file" id="importFile" class="file-input-hidden" accept="application/json">
      </div>
    </div>
    <div class="tag-row" id="tagRow"></div>
    <div class="note-list" id="noteList"></div>
  </div>

  <div class="main" id="mainNotes">
    <div class="editor-pane" id="editorPane"></div>
    <div class="rightpanel" id="rightPanel" style="display:none;"></div>
  </div>

  <div class="graph-pane" id="mainGraph" style="display:none;">
    <svg class="graph" id="graphSvg"></svg>
    <div class="graph-legend">
      <div class="lg-row"><span class="lg-dot" style="background:#d6a35c;box-shadow:0 0 6px #d6a35c;"></span> یادداشت باز</div>
      <div class="lg-row"><span class="lg-dot" style="background:#1e2e29;border:1.4px solid #6fb3a0;"></span> یادداشت</div>
      <div class="lg-row"><span class="lg-diamond"></span> تگ</div>
    </div>
    <div class="graph-hint">اسکرول = زوم · درگ کن، هاور کن، کلیک کن</div>
  </div>

  <div class="chat-pane" id="mainChat" style="display:none;">
    <div class="chat-head">
      <div class="ttl">دستیار هوشمند</div>
      <div class="sub" id="chatSub">بر اساس یادداشت‌های تو جواب می‌ده</div>
      <button class="chat-clear" id="chatClearBtn">پاک کردن گفتگو</button>
    </div>
    <div class="chat-settings" id="chatSettingsRow">
      <span>منبع دستیار:</span>
      <select id="providerSelect">
        <option value="claude">Claude (آنلاین)</option>
        <option value="ollama">مدل محلی — Ollama (آفلاین)</option>
      </select>
      <span id="claudeFields" style="display:none;align-items:center;gap:8px;">
        <input id="claudeKeyInput" type="password" placeholder="کلید API (sk-ant-… یا fla_…)" style="width:190px;">
        <input id="claudeUrlInput" placeholder="آدرس سرور (پیش‌فرض: Anthropic)" style="width:190px;">
      </span>
      <span id="ollamaFields" style="display:none;align-items:center;gap:8px;">
        <input id="ollamaModelInput" placeholder="نام مدل، مثل qwen2.5-coder" style="width:190px;">
        <input id="ollamaUrlInput" placeholder="آدرس سرور" style="width:170px;">
      </span>
      <div class="ollama-note" id="claudeNote" style="display:none;">
        این فایل الان به‌صورت مستقل (خارج از چت کلود) بازه، پس برای وصل شدن به Claude به یه کلید API نیاز داری.
        از <code>console.anthropic.com</code> یه کلید بساز (۵ دلار اعتبار رایگان) و اینجا بذار.
        <br>یه گزینه‌ی رایگان‌تر: با <code>FreeLLMAPI</code> (خودمیزبان، رایگان) یه سرور محلی بساز که چندین مدل رایگان رو پشت همین فرمت API میاره — بعد آدرسش (مثل <code>http://localhost:3001</code>) و کلید یکپارچه‌شو اینجا بذار.
        <br>کلید فقط تو مرورگر خودت ذخیره می‌شه. اگه این فایل رو به کسی می‌دی، این فیلدها رو خالی کن.
      </div>
      <div class="ollama-note" id="ollamaNote" style="display:none;">
        قبل از استفاده، Ollama باید در حال اجراست و اجازه‌ی دسترسی از مرورگر رو داشته باشه. تو ترمینال بزن:
        <code>OLLAMA_ORIGINS=* ollama serve</code> — بعد مطمئن شو مدل رو با <code>ollama pull qwen2.5-coder</code> از قبل دانلود کردی.
      </div>
    </div>
    <div class="chat-messages" id="chatMessages"></div>
    <div class="chat-inputrow">
      <input class="chat-input" id="chatInput" placeholder="یه سوال درباره یادداشت‌هات بپرس…">
      <button class="chat-send" id="chatSendBtn">پرسیدن</button>
    </div>
  </div>
</div>

<script>
const STORAGE_KEY = 'second-brain-notes-v1';
let notes = {};
let currentId = null;
let editMode = true;
let activeTag = null;
let searchTerm = '';

function uid(){ return 'n' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }

/* ---------- storage layer: primary (window.storage) + localStorage fallback/mirror ---------- */
async function storageGet(key){
  let val = null;
  try{
    if(window.storage && typeof window.storage.get === 'function'){
      const r = await window.storage.get(key, false);
      if(r && typeof r.value === 'string') val = r.value;
    }
  }catch(e){ /* primary unavailable, fall through */ }
  if(val === null){
    try{ val = localStorage.getItem(key); }catch(e){ /* localStorage unavailable too */ }
  }
  return val;
}
async function storageSet(key, value){
  let primaryOk = false;
  try{
    if(window.storage && typeof window.storage.set === 'function'){
      const r = await window.storage.set(key, value, false);
      if(r) primaryOk = true;
    }
  }catch(e){ /* primary failed, will rely on fallback */ }
  let fallbackOk = false;
  try{ localStorage.setItem(key, value); fallbackOk = true; }catch(e){ /* not available */ }
  if(!primaryOk && !fallbackOk){
    console.error('save failed on both storage backends for', key);
  }
  return primaryOk || fallbackOk;
}

function seedIfEmpty(){
  if(Object.keys(notes).length) return;
  const w = uid(), i = uid(), p = uid();
  notes[w] = {id:w, title:'خوش آمدید', content:
`# به مغز دوم خودت خوش اومدی

اینجا جایی برای فکر کردن، ربط دادن و رشد ایده‌هاته.

با نوشتن [[ایده‌های اولیه]] می‌تونی به یادداشت دیگه‌ای لینک بدی — اگه وجود نداشته باشه خودکار ساخته می‌شه.

از # برای تگ زدن استفاده کن، مثل #شروع یا #راهنما

نمای گراف بالا رو هم امتحان کن تا ارتباط یادداشت‌هاتو ببینی.`, createdAt:Date.now(), updatedAt:Date.now()};
  notes[i] = {id:i, title:'ایده‌های اولیه', content:
`چند تا فکر برای شروع:

- هر روز یه یادداشت کوتاه بنویس
- به جای فولدربندی، از لینک [[خوش آمدید]] استفاده کن
- تگ #راهنما رو برای نکته‌های مهم نگه دار`, createdAt:Date.now(), updatedAt:Date.now()};
  notes[p] = {id:p, title:'پروژه‌ها', content:
`لیست پروژه‌های در حال انجام #پروژه

- [[ایده‌های اولیه]]
- برنامه‌ریزی هفته آینده`, createdAt:Date.now(), updatedAt:Date.now()};
  currentId = w;
}

async function loadNotes(){
  try{
    const val = await storageGet(STORAGE_KEY);
    if(val){ notes = JSON.parse(val); }
  }catch(e){ /* no data yet */ }
  seedIfEmpty();
  if(!currentId){ const ids = Object.keys(notes); if(ids.length) currentId = ids[0]; }
}

let saveTimer = null;
function saveNotes(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async ()=>{
    try{ await storageSet(STORAGE_KEY, JSON.stringify(notes)); }
    catch(e){ console.error('save failed', e); }
  }, 250);
}

function findNoteByTitle(title){
  const t = title.trim().toLowerCase();
  return Object.values(notes).find(n => n.title.trim().toLowerCase() === t);
}

function extractLinkTitles(content){
  const set = new Set();
  const re = /\[\[([^\]]+)\]\]/g; let m;
  while((m = re.exec(content))) set.add(m[1].trim());
  return [...set];
}

function extractTags(content){
  const set = new Set();
  const re = /(?:^|[^\u0600-\u06FFa-zA-Z0-9_])#([\u0600-\u06FFa-zA-Z0-9_\-]{2,})/g; let m;
  while((m = re.exec(content||''))) set.add(m[1]);
  return [...set];
}

function addTagToCurrent(tag){
  tag = (tag||'').trim().replace(/^#/,'');
  if(!tag || !currentId) return;
  const note = notes[currentId];
  const already = extractTags(note.content).some(t=>t.toLowerCase()===tag.toLowerCase());
  if(already) return;
  const sep = note.content && !note.content.endsWith('\n') ? '\n\n' : '';
  note.content = (note.content||'') + sep + '#' + tag;
  note.updatedAt = Date.now();
  saveNotes();
  render();
}

function removeTagFromCurrent(tag){
  if(!currentId) return;
  const note = notes[currentId];
  const re = new RegExp('(^|[^\\u0600-\\u06FFa-zA-Z0-9_])#' + tag.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&') + '(?![\\u0600-\\u06FFa-zA-Z0-9_])', 'g');
  note.content = note.content.replace(re, '$1').replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim();
  note.updatedAt = Date.now();
  saveNotes();
  render();
}

function getBacklinks(note){
  if(!note) return [];
  return Object.values(notes).filter(n =>
    n.id !== note.id && extractLinkTitles(n.content).some(t => t.toLowerCase() === note.title.trim().toLowerCase())
  );
}

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function renderMarkdown(text){
  let html = escapeHtml(text || '');
  html = html.replace(/\[\[([^\]]+)\]\]/g, (m,p1)=>{
    const exists = findNoteByTitle(p1);
    return `<a href="#" class="wikilink ${exists?'':'wikilink-new'}" data-title="${p1.replace(/"/g,'&quot;')}">${p1}</a>`;
  });
  html = html.replace(/^### (.*)$/gm,'<h3>$1</h3>');
  html = html.replace(/^## (.*)$/gm,'<h2>$1</h2>');
  html = html.replace(/^# (.*)$/gm,'<h1>$1</h1>');
  html = html.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
  html = html.replace(/`([^`]+)`/g,'<code>$1</code>');
  html = html.replace(/(^|[^\u0600-\u06FFa-zA-Z0-9_])#([\u0600-\u06FFa-zA-Z0-9_\-]{2,})/g, (m,pre,tag)=>`${pre}<span class="tag-inline" style="color:${tagColor(tag)}">#${tag}</span>`);
  html = html.replace(/^- (.*)$/gm,'<li>$1</li>');
  html = html.replace(/(?:<li>.*<\/li>\n?)+/g, m=>`<ul>${m}</ul>`);
  html = html.replace(/^&gt; ?(.*)$/gm,'<blockquote>$1</blockquote>');
  html = html.replace(/(?:<blockquote>.*<\/blockquote>\n?)+/g, m=> m.replace(/\n/g,''));
  html = html.split(/\n{2,}/).map(block=>{
    const t = block.trim();
    if(/^<(h1|h2|h3|ul|blockquote)/.test(t)) return block;
    if(!t) return '';
    return `<p>${block.replace(/\n/g,'<br>')}</p>`;
  }).join('\n');
  return html;
}

function timeAgo(ts){
  const s = Math.floor((Date.now()-ts)/1000);
  if(s<60) return 'همین الان';
  if(s<3600) return Math.floor(s/60)+' دقیقه پیش';
  if(s<86400) return Math.floor(s/3600)+' ساعت پیش';
  return Math.floor(s/86400)+' روز پیش';
}

function allTags(){
  const set = new Set();
  Object.values(notes).forEach(n => extractTags(n.content).forEach(t=>set.add(t)));
  return [...set].sort();
}

const TAG_PALETTE = ['#d6a35c','#6fb3a0','#9382d6','#cf6f6f','#5fa8d3','#d38fc0','#8fbf6f','#e0b84f'];
function tagColor(tag){
  let h = 0;
  for(let i=0;i<tag.length;i++) h = (h*31 + tag.charCodeAt(i)) >>> 0;
  return TAG_PALETTE[h % TAG_PALETTE.length];
}
function tagCount(tag){
  return Object.values(notes).filter(n => extractTags(n.content).some(t=>t.toLowerCase()===tag.toLowerCase())).length;
}

function selectNote(id){
  currentId = id;
  editMode = true;
  render();
  if(document.body.classList.contains('is-mobile')) closeSidebar();
}

function createNote(titleSeed){
  const id = uid();
  notes[id] = {id, title: titleSeed || 'یادداشت بدون عنوان', content:'', createdAt:Date.now(), updatedAt:Date.now()};
  currentId = id;
  editMode = true;
  saveNotes();
  render();
  if(document.body.classList.contains('is-mobile')) closeSidebar();
  setTimeout(()=>{ const el = document.querySelector('.title-input'); if(el){ el.focus(); el.select(); } }, 30);
}

function deleteNote(id){
  showModal(
    'حذف یادداشت',
    `مطمئنی می‌خوای «${notes[id] ? notes[id].title : 'این یادداشت'}» حذف بشه؟ این کار برگشت‌پذیر نیست.`,
    [
      {label:'حذف کن', cls:'danger', onClick: ()=>{
        delete notes[id];
        const ids = Object.keys(notes);
        currentId = ids.length ? ids[0] : null;
        saveNotes();
        render();
        showToast('یادداشت حذف شد.');
      }},
      {label:'لغو', cls:'ghost'}
    ]
  );
}

function updateCurrentTitle(v){
  if(!currentId) return;
  notes[currentId].title = v;
  notes[currentId].updatedAt = Date.now();
  saveNotes();
  renderSidebar();
}
function updateCurrentContent(v){
  if(!currentId) return;
  notes[currentId].content = v;
  notes[currentId].updatedAt = Date.now();
  saveNotes();
  renderSidebar();
}

function filteredNoteIds(){
  let ids = Object.keys(notes);
  if(activeTag){
    ids = ids.filter(id => extractTags(notes[id].content).includes(activeTag));
  }
  if(searchTerm.trim()){
    const q = searchTerm.trim().toLowerCase();
    ids = ids.filter(id => notes[id].title.toLowerCase().includes(q) || notes[id].content.toLowerCase().includes(q));
  }
  return ids.sort((a,b)=> notes[b].updatedAt - notes[a].updatedAt);
}

function renderSidebar(){
  const list = document.getElementById('noteList');
  const ids = filteredNoteIds();
  if(!ids.length){
    list.innerHTML = `<div class="empty-hint">یادداشتی پیدا نشد.<br>یکی بساز!</div>`;
  } else {
    list.innerHTML = ids.map(id=>{
      const n = notes[id];
      const snippet = (n.content||'').replace(/[#*`\[\]]/g,'').slice(0,60) || 'بدون محتوا';
      const tags = extractTags(n.content);
      const tagsHtml = tags.length ? `<div class="mini-tags">${tags.slice(0,4).map(t=>{
        const c = tagColor(t);
        return `<span class="mini-tag" style="color:${c};background:${c}1a;border-color:${c}44;">#${escapeHtml(t)}</span>`;
      }).join('')}</div>` : '';
      return `<div class="note-item ${id===currentId?'selected':''}" data-id="${id}">
        <div class="t">${escapeHtml(n.title||'بدون عنوان')}</div>
        <div class="s">${escapeHtml(snippet)}</div>
        ${tagsHtml}
      </div>`;
    }).join('');
    list.querySelectorAll('.note-item').forEach(el=>{
      el.addEventListener('click', ()=> selectNote(el.dataset.id));
    });
  }

  const tagRow = document.getElementById('tagRow');
  const tags = allTags();
  tagRow.innerHTML = tags.map(t=>{
    const c = tagColor(t);
    const active = t===activeTag;
    return `<span class="tag-chip ${active?'active':''}" data-tag="${escapeHtml(t)}" style="${active?`background:${c};border-color:${c};color:#131318;`:`color:${c};border-color:${c}55;background:${c}1a;`}">#${escapeHtml(t)}</span>`;
  }).join('');
  tagRow.querySelectorAll('.tag-chip').forEach(el=>{
    el.addEventListener('click', ()=>{
      activeTag = (activeTag === el.dataset.tag) ? null : el.dataset.tag;
      render();
    });
  });

  document.getElementById('stats').textContent =
    `${Object.keys(notes).length} یادداشت`;
}

function renderEditor(){
  const pane = document.getElementById('editorPane');
  const rp = document.getElementById('rightPanel');
  const note = notes[currentId];

  if(!note){
    pane.innerHTML = `<div class="empty-editor">
      <div class="big">یادداشتی انتخاب نشده</div>
      <div>یه یادداشت از لیست انتخاب کن یا یکی جدید بساز</div>
    </div>`;
    rp.style.display = 'none';
    return;
  }
  rp.style.display = 'block';

  pane.innerHTML = `
    <div class="editor-toolbar">
      <input class="title-input" id="titleInput" value="${escapeHtml(note.title)}" placeholder="عنوان یادداشت">
      <div class="mode-toggle ${editMode?'':'read'}" id="modeToggle">
        <div class="thumb"></div>
        <button id="modeWrite" class="${editMode?'active':''}">✎ نوشتن</button>
        <button id="modeRead" class="${!editMode?'active':''}">👁 خواندن</button>
      </div>
      <button class="icon-btn details-btn" id="detailsBtn" title="جزئیات">ⓘ</button>
      <button class="icon-btn" id="delBtn" title="حذف">✕</button>
    </div>
    <div class="quicktag-row" id="quickTagRow"></div>
    <div class="md-toolbar" id="mdToolbar" style="${editMode?'':'display:none;'}"></div>
    <div class="editor-body" id="editorBody"></div>
  `;

  document.getElementById('titleInput').addEventListener('input', e=> updateCurrentTitle(e.target.value));
  document.getElementById('titleInput').addEventListener('blur', renderSidebar);
  document.getElementById('modeWrite').addEventListener('click', ()=>{ editMode = true; renderEditor(); });
  document.getElementById('modeRead').addEventListener('click', ()=>{ editMode = false; renderEditor(); });
  document.getElementById('delBtn').addEventListener('click', ()=> deleteNote(note.id));
  document.getElementById('detailsBtn').addEventListener('click', openDetails);

  const body = document.getElementById('editorBody');
  if(editMode){
    const words = (note.content||'').trim() ? note.content.trim().split(/\s+/).length : 0;
    body.innerHTML = `<textarea class="md-textarea fade-in" id="mdArea" placeholder="با نوشتن شروع کن… از [[یادداشت]] برای لینک و از #تگ برای تگ استفاده کن">${escapeHtml(note.content)}</textarea>
      <div class="wordcount-badge" id="wcBadge">${words} کلمه</div>`;
    const ta = document.getElementById('mdArea');
    ta.addEventListener('input', e=>{
      updateCurrentContent(e.target.value);
      const w = e.target.value.trim() ? e.target.value.trim().split(/\s+/).length : 0;
      document.getElementById('wcBadge').textContent = w + ' کلمه';
    });

    const tb = document.getElementById('mdToolbar');
    const tools = [
      {label:'ح۱', title:'تیتر بزرگ', before:'# ', after:'', block:true},
      {label:'ح۲', title:'تیتر متوسط', before:'## ', after:'', block:true},
      {label:'B', title:'بولد', before:'**', after:'**'},
      {label:'`ک`', title:'کد', before:'`', after:'`'},
      {label:'•', title:'لیست', before:'- ', after:'', block:true},
      {label:'❝', title:'نقل‌قول', before:'> ', after:'', block:true},
      {label:'[[…]]', title:'لینک به یادداشت', before:'[[', after:']]'},
      {label:'#تگ', title:'تگ', before:'#', after:''},
    ];
    tb.innerHTML = tools.map((t,i)=>`<button class="md-tbtn" data-i="${i}" title="${t.title}">${t.label}</button>`).join('');
    tb.querySelectorAll('.md-tbtn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const t = tools[btn.dataset.i];
        const start = ta.selectionStart, end = ta.selectionEnd;
        const val = ta.value;
        let insStart = start, insEnd = end;
        if(t.block){
          const lineStart = val.lastIndexOf('\n', start-1) + 1;
          ta.value = val.slice(0, lineStart) + t.before + val.slice(lineStart);
          insStart = start + t.before.length; insEnd = end + t.before.length;
        } else {
          const selected = val.slice(start, end);
          ta.value = val.slice(0, start) + t.before + selected + t.after + val.slice(end);
          insStart = start + t.before.length;
          insEnd = insStart + selected.length;
        }
        ta.focus();
        ta.setSelectionRange(insStart, insEnd);
        updateCurrentContent(ta.value);
        const w = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
        document.getElementById('wcBadge').textContent = w + ' کلمه';
      });
    });
  } else {
    body.innerHTML = `<div class="preview fade-in">${renderMarkdown(note.content) || '<p style="color:var(--text-faint)">این یادداشت خالیه.</p>'}</div>`;
    body.querySelectorAll('a.wikilink').forEach(a=>{
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        const title = a.dataset.title;
        const existing = findNoteByTitle(title);
        if(existing) selectNote(existing.id);
        else createNote(title);
      });
    });
  }

  const qtRow = document.getElementById('quickTagRow');
  const curTags = extractTags(note.content);
  const curTagsLower = new Set(curTags.map(t=>t.toLowerCase()));
  const topSuggestions = allTags()
    .filter(t => !curTagsLower.has(t.toLowerCase()))
    .map(t => ({t, n: tagCount(t)}))
    .sort((a,b)=> b.n - a.n)
    .slice(0, 5);

  qtRow.innerHTML =
    `<span class="lbl">🏷️ تگ‌ها</span>` +
    curTags.map(t=>{ const c=tagColor(t); return `<span class="note-tag-pill" style="color:${c};background:${c}1a;border-color:${c}44;border-width:1px;border-style:solid;"><span class="dot" style="width:7px;height:7px;border-radius:50%;background:${c};display:inline-block;box-shadow:0 0 5px ${c}99;"></span>#${escapeHtml(t)}<span class="x" data-tag="${escapeHtml(t)}">✕</span></span>`; }).join('') +
    (curTags.length ? `<span class="qtag-divider"></span>` : '') +
    `<span class="tagbox-wrap">
       <input class="quicktag-input" id="quickTagInput" placeholder="تگ جدید یا جستجو…" autocomplete="off">
       <div class="tag-suggest" id="tagSuggest"></div>
     </span>
     <button class="quicktag-add" id="quickTagAddBtn">+ افزودن</button>` +
    (topSuggestions.length ? `<span class="qtag-divider"></span><span class="qtag-suggest-strip">` +
      topSuggestions.map(({t,n})=>{ const c=tagColor(t); return `<span class="qtag-suggest-chip" data-tag="${escapeHtml(t)}" style="color:${c};border-color:${c}66;background:${c}0d;"><span class="plus">+</span>#${escapeHtml(t)} <span style="opacity:.6">(${n})</span></span>`; }).join('') +
      `</span>` : '');

  qtRow.querySelectorAll('.qtag-suggest-chip').forEach(chip=>{
    chip.addEventListener('click', ()=> addTagToCurrent(chip.dataset.tag));
  });
  qtRow.querySelectorAll('.x').forEach(x=> x.addEventListener('click', ()=> removeTagFromCurrent(x.dataset.tag)));

  const qInput = document.getElementById('quickTagInput');
  const qSuggest = document.getElementById('tagSuggest');
  const addTag = (tagName)=>{ addTagToCurrent(tagName !== undefined ? tagName : qInput.value); qSuggest.classList.remove('show'); };

  function renderSuggestions(){
    const q = qInput.value.trim().toLowerCase();
    const already = new Set(extractTags(notes[currentId].content).map(t=>t.toLowerCase()));
    let matches = allTags().filter(t => !already.has(t.toLowerCase()));
    if(q) matches = matches.filter(t => t.toLowerCase().startsWith(q));
    matches = matches.slice(0, 8);

    let html = '';
    if(matches.length){
      html += matches.map(t=>{
        const c = tagColor(t);
        return `<div class="tag-suggest-item" data-tag="${escapeHtml(t)}">
          <span class="dot" style="background:${c}"></span>#${escapeHtml(t)}
          <span class="cnt">${tagCount(t)} یادداشت</span>
        </div>`;
      }).join('');
    } else if(!q){
      html += `<div class="tag-suggest-empty">هنوز تگی نساختی</div>`;
    }
    if(q && !allTags().some(t=>t.toLowerCase()===q)){
      html += `<div class="tag-suggest-item tag-suggest-create" data-tag="${escapeHtml(qInput.value.trim())}">
        <span class="dot" style="background:${tagColor(q)}"></span> ساخت تگ «#${escapeHtml(qInput.value.trim())}»
      </div>`;
    }
    qSuggest.innerHTML = html;
    qSuggest.classList.toggle('show', !!html);
    qSuggest.querySelectorAll('.tag-suggest-item').forEach(item=>{
      item.addEventListener('click', ()=> addTag(item.dataset.tag));
    });
  }

  qInput.addEventListener('input', renderSuggestions);
  qInput.addEventListener('focus', renderSuggestions);
  qInput.addEventListener('keydown', e=>{
    if(e.key==='Enter'){ e.preventDefault(); addTag(); }
    if(e.key==='Escape'){ qSuggest.classList.remove('show'); }
  });
  document.getElementById('quickTagAddBtn').addEventListener('click', ()=> addTag());

  renderRightPanel(note);
}

function renderRightPanel(note){
  const rp = document.getElementById('rightPanel');
  const backlinks = getBacklinks(note);
  const outgoing = extractLinkTitles(note.content).map(t=>({title:t, exists: !!findNoteByTitle(t)}));
  const tags = extractTags(note.content);
  const wordCount = (note.content||'').trim() ? note.content.trim().split(/\s+/).length : 0;

  rp.innerHTML = `
    <div class="rp-section">
      <div class="rp-title">لینک به این یادداشت</div>
      ${backlinks.length ? backlinks.map(n=>`<div class="rp-link" data-id="${n.id}">${escapeHtml(n.title)}</div>`).join('') : '<div class="rp-empty">هنوز هیچ یادداشتی لینک نداده</div>'}
    </div>
    <div class="rp-section">
      <div class="rp-title">لینک‌های خروجی</div>
      ${outgoing.length ? outgoing.map(o=>`<div class="rp-link" data-title="${escapeHtml(o.title)}" style="${o.exists?'':'opacity:.55'}">${escapeHtml(o.title)}${o.exists?'':' (جدید)'}</div>`).join('') : '<div class="rp-empty">لینکی وجود نداره</div>'}
    </div>
    <div class="rp-section">
      <div class="rp-title">تگ‌ها</div>
      ${tags.length ? tags.map(t=>{ const c=tagColor(t); return `<span class="rp-tag" style="color:${c};background:${c}1a;border-color:${c}44;">#${escapeHtml(t)}</span>`; }).join('') : '<div class="rp-empty">تگی نیست</div>'}
    </div>
    <div class="rp-section">
      <div class="rp-title">آمار این یادداشت</div>
      <div class="insight-row"><span>تعداد کلمات</span><b>${wordCount}</b></div>
      <div class="insight-row"><span>ارتباطات</span><b>${backlinks.length + outgoing.length}</b></div>
    </div>
    <div class="rp-section">
      <div class="rp-title">آمار کل مغز دوم</div>
      <div class="insight-row"><span>کل یادداشت‌ها</span><b>${Object.keys(notes).length}</b></div>
      <div class="insight-row"><span>کل تگ‌ها</span><b>${allTags().length}</b></div>
    </div>
  `;
  rp.querySelectorAll('.rp-link[data-id]').forEach(el=> el.addEventListener('click', ()=> selectNote(el.dataset.id)));
  rp.querySelectorAll('.rp-link[data-title]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const title = el.dataset.title;
      const existing = findNoteByTitle(title);
      if(existing) selectNote(existing.id); else createNote(title);
    });
  });
}

function renderGraph(){
  const svg = d3.select('#graphSvg');
  svg.selectAll('*').remove();
  const el = document.getElementById('mainGraph');
  const w = el.clientWidth || 800, h = el.clientHeight || 500;
  svg.attr('viewBox', `0 0 ${w} ${h}`);

  /* defs: glow filters + radial vignette */
  const defs = svg.append('defs');
  [['glowAmber','#d6a35c'],['glowTeal','#6fb3a0'],['glowViolet','#9382d6']].forEach(([id,color])=>{
    const f = defs.append('filter').attr('id', id).attr('x','-150%').attr('y','-150%').attr('width','400%').attr('height','400%');
    f.append('feDropShadow').attr('dx',0).attr('dy',0).attr('stdDeviation',5).attr('flood-color',color).attr('flood-opacity',0.85);
  });
  const vign = defs.append('radialGradient').attr('id','vign').attr('cx','50%').attr('cy','42%').attr('r','75%');
  vign.append('stop').attr('offset','0%').attr('stop-color','#1c1c26');
  vign.append('stop').attr('offset','100%').attr('stop-color','#131318');
  svg.append('rect').attr('x',0).attr('y',0).attr('width',w).attr('height',h).attr('fill','url(#vign)');

  const noteNodes = Object.values(notes).map(n => ({id:'note:'+n.id, refId:n.id, title:n.title, kind:'note'}));
  const tagSet = allTags();
  const tagNodes = tagSet.map(t => ({id:'tag:'+t, refId:t, title:'#'+t, kind:'tag'}));
  const nodes = [...noteNodes, ...tagNodes];

  const links = [];
  Object.values(notes).forEach(n=>{
    extractLinkTitles(n.content).forEach(t=>{
      const target = findNoteByTitle(t);
      if(target && target.id !== n.id) links.push({source:'note:'+n.id, target:'note:'+target.id, kind:'link'});
    });
    extractTags(n.content).forEach(tag=>{
      links.push({source:'note:'+n.id, target:'tag:'+tag, kind:'tag'});
    });
  });

  if(!nodes.length){
    svg.append('text').attr('x', w/2).attr('y', h/2).attr('text-anchor','middle')
      .attr('fill','#5f5d6b').attr('font-size','14').text('هنوز یادداشتی برای نمایش نیست');
    return;
  }

  /* starfield backdrop for depth */
  const starG = svg.append('g').attr('opacity', 0.5);
  for(let i=0;i<45;i++){
    starG.append('circle')
      .attr('cx', Math.random()*w).attr('cy', Math.random()*h)
      .attr('r', Math.random()*1.3 + 0.3)
      .attr('fill', '#4a4a5c');
  }

  const zoomLayer = svg.append('g');

  const sim = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d=>d.id).distance(d=> d.kind==='tag' ? 78 : 115).strength(0.55))
    .force('charge', d3.forceManyBody().strength(-270))
    .force('center', d3.forceCenter(w/2, h/2))
    .force('collide', d3.forceCollide(d=> d.kind==='tag' ? 34 : 48));

  const linkSel = zoomLayer.append('g').selectAll('line').data(links).join('line')
    .attr('stroke', d=> d.kind==='tag' ? '#4d4560' : '#3a3a4d')
    .attr('stroke-dasharray', d=> d.kind==='tag' ? '3,4' : '5,4')
    .attr('stroke-width', 1.3)
    .attr('class', 'flow-edge');

  const nodeG = zoomLayer.append('g').selectAll('g').data(nodes).join('g')
    .style('cursor','pointer')
    .call(d3.drag()
      .on('start', (event,d)=>{ if(!event.active) sim.alphaTarget(0.3).restart(); d.fx=d.x; d.fy=d.y; })
      .on('drag', (event,d)=>{ d.fx=event.x; d.fy=event.y; })
      .on('end', (event,d)=>{ if(!event.active) sim.alphaTarget(0); d.fx=null; d.fy=null; }));

  nodeG.each(function(d){
    const g = d3.select(this);
    if(d.kind==='tag'){
      const uses = links.filter(l=> l.kind==='tag' && (l.target===d.id || (l.target.id!==undefined && l.target.id===d.id))).length;
      g.append('rect')
        .attr('class','node-shape')
        .attr('x', -(9+uses)).attr('y', -(9+uses)).attr('width', (9+uses)*2).attr('height', (9+uses)*2)
        .attr('rx', 5)
        .attr('transform','rotate(45)')
        .attr('fill', '#1a1a22')
        .attr('fill-opacity', 0.95)
        .attr('stroke', '#9382d6')
        .attr('stroke-width', 1.7)
        .attr('filter','url(#glowViolet)');
    } else {
      const linkCount = extractLinkTitles(notes[d.refId].content).length + getBacklinks(notes[d.refId]).length;
      const isCur = d.refId===currentId;
      g.append('circle')
        .attr('class','node-shape')
        .attr('r', 10 + Math.min(10, linkCount*1.5))
        .attr('fill', isCur ? '#d6a35c' : '#1e2e29')
        .attr('fill-opacity', isCur ? 0.95 : 0.9)
        .attr('stroke', isCur ? '#e2b06f' : '#6fb3a0')
        .attr('stroke-width', isCur ? 2 : 1.6)
        .attr('filter', isCur ? 'url(#glowAmber)' : 'url(#glowTeal)');
    }
  });

  nodeG.append('text')
    .text(d=> d.title.length>16 ? d.title.slice(0,15)+'…' : d.title)
    .attr('text-anchor','middle')
    .attr('dy', d=> d.kind==='tag' ? 27 : 29)
    .attr('font-size', d=> d.kind==='tag' ? 10.5 : 11.5)
    .attr('font-family', d=> d.kind==='tag' ? "'IBM Plex Mono', monospace" : 'Vazirmatn, sans-serif')
    .attr('fill', d=> d.kind==='tag' ? '#b3a8e6' : (d.refId===currentId ? '#f0d6a8' : '#c9c6bd'))
    .attr('font-weight', d=> d.refId===currentId ? '600':'400');

  /* hover: highlight neighborhood, dim the rest */
  const neighborMap = new Map();
  nodes.forEach(n=> neighborMap.set(n.id, new Set([n.id])));
  links.forEach(l=>{
    const s = typeof l.source==='object'? l.source.id : l.source;
    const t = typeof l.target==='object'? l.target.id : l.target;
    neighborMap.get(s).add(t); neighborMap.get(t).add(s);
  });
  nodeG.on('mouseenter', function(event,d){
    const neigh = neighborMap.get(d.id);
    nodeG.style('opacity', n=> neigh.has(n.id) ? 1 : 0.18);
    linkSel.style('opacity', l=>{
      const s = typeof l.source==='object'? l.source.id : l.source;
      const t = typeof l.target==='object'? l.target.id : l.target;
      return (s===d.id || t===d.id) ? 0.9 : 0.06;
    });
  }).on('mouseleave', function(){
    nodeG.style('opacity', 1);
    linkSel.style('opacity', 1);
  });

  nodeG.on('click', (event,d)=>{
    if(d.kind==='note'){ selectNote(d.refId); showNotes(); }
    else { activeTag = (activeTag===d.refId) ? null : d.refId; showNotes(); renderSidebar(); }
  });

  sim.on('tick', ()=>{
    linkSel
      .attr('x1', d=>d.source.x).attr('y1', d=>d.source.y)
      .attr('x2', d=>d.target.x).attr('y2', d=>d.target.y);
    nodeG.attr('transform', d=>`translate(${d.x},${d.y})`);
  });

  svg.call(
    d3.zoom().scaleExtent([0.4, 3]).on('zoom', (event)=>{
      zoomLayer.attr('transform', event.transform);
      starG.attr('transform', event.transform);
    })
  ).on('dblclick.zoom', null);
}

/* ---------- AI assistant, connected to the notes data ---------- */
let chatApiHistory = [];   // full payload sent to the API (includes context on first turn)
let chatDisplay = [];      // {role, text} shown in the UI
let chatBusy = false;
let chatProvider = 'claude';
let claudeApiKey = '';
let claudeBaseUrl = 'https://api.anthropic.com';
let ollamaModel = 'qwen2.5-coder';
let ollamaUrl = 'http://localhost:11434';

const SETTINGS_KEY = 'second-brain-settings-v1';
async function loadSettings(){
  try{
    const val = await storageGet(SETTINGS_KEY);
    if(val){
      const s = JSON.parse(val);
      chatProvider = s.chatProvider || 'claude';
      claudeApiKey = s.claudeApiKey || '';
      claudeBaseUrl = s.claudeBaseUrl || 'https://api.anthropic.com';
      ollamaModel = s.ollamaModel || 'qwen2.5-coder';
      ollamaUrl = s.ollamaUrl || 'http://localhost:11434';
    }
  }catch(e){ /* no settings yet */ }
}
function saveSettings(){
  storageSet(SETTINGS_KEY, JSON.stringify({chatProvider, claudeApiKey, claudeBaseUrl, ollamaModel, ollamaUrl})).catch(()=>{});
}

function buildNotesContext(){
  const list = Object.values(notes).sort((a,b)=> b.updatedAt - a.updatedAt);
  let out = '';
  const BUDGET = 9000;
  for(const n of list){
    const tags = extractTags(n.content);
    const block = `## ${n.title}\n${n.content || '(خالی)'}${tags.length? '\nتگ‌ها: '+tags.map(t=>'#'+t).join(' ') : ''}\n\n`;
    if(out.length + block.length > BUDGET) break;
    out += block;
  }
  return out;
}

function renderChat(){
  const box = document.getElementById('chatMessages');
  document.getElementById('chatSub').textContent = chatProvider==='ollama'
    ? `آفلاین · مدل محلی «${ollamaModel}» · ${Object.keys(notes).length} یادداشت`
    : `بر اساس ${Object.keys(notes).length} یادداشت جواب می‌ده`;
  if(!chatDisplay.length){
    box.innerHTML = `<div class="chat-empty">هر سوالی درباره یادداشت‌هات بپرس —<br>مثلاً «خلاصه‌ای از پروژه‌هام بده» یا «چه ارتباطی بین ایده‌ها هست؟»</div>`;
    return;
  }
  box.innerHTML = chatDisplay.map(m=>{
    if(m.role==='user') return `<div class="bubble user">${escapeHtml(m.text)}</div>`;
    if(m.role==='error') return `<div class="bubble error">${escapeHtml(m.text)}</div>`;
    if(m.role==='typing') return `<div class="bubble assistant typing-dots"><span></span><span></span><span></span></div>`;
    return `<div class="bubble assistant">${renderMarkdown(m.text)}</div>`;
  }).join('');
  box.querySelectorAll('.bubble.assistant a.wikilink').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const title = a.dataset.title;
      const existing = findNoteByTitle(title);
      if(existing){ selectNote(existing.id); showNotes(); }
    });
  });
  box.scrollTop = box.scrollHeight;
}

async function sendChat(){
  if(chatBusy) return;
  const input = document.getElementById('chatInput');
  const question = input.value.trim();
  if(!question) return;
  input.value = '';

  if(chatApiHistory.length===0){
    const ctx = buildNotesContext();
    const sys = `تو دستیار هوشمند داخل اپلیکیشن یادداشت‌برداری شخصی به اسم «مغز دوم» هستی. زیر، همه یادداشت‌های کاربر رو می‌بینی. بر اساس همین یادداشت‌ها به فارسی، دقیق و مختصر جواب بده. اگه به یادداشتی اشاره می‌کنی، اسمش رو داخل [[دو کروشه]] بنویس تا قابل کلیک بشه. اگه جواب داخل یادداشت‌ها نیست، صادقانه بگو که تو یادداشت‌ها پیدا نشد و در صورت امکان یه پاسخ کلی بده.\n\n--- یادداشت‌های کاربر ---\n${ctx || '(هنوز یادداشتی وجود نداره)'}`;
    chatApiHistory.push({role:'user', content: sys + '\n\n--- سوال کاربر ---\n' + question});
  } else {
    chatApiHistory.push({role:'user', content: question});
  }
  chatDisplay.push({role:'user', text: question});
  chatDisplay.push({role:'typing'});
  chatBusy = true;
  document.getElementById('chatSendBtn').disabled = true;
  renderChat();

  try{
    let text = '';
    if(chatProvider === 'ollama'){
      const base = (ollamaUrl || 'http://localhost:11434').replace(/\/$/,'');
      const response = await fetch(base + '/api/chat', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          model: ollamaModel || 'qwen2.5-coder',
          messages: chatApiHistory,
          stream: false
        })
      });
      if(!response.ok) throw new Error('ollama-http-' + response.status);
      const data = await response.json();
      text = (data && data.message && data.message.content) ? data.message.content.trim() : '';
      chatDisplay.pop();
      chatApiHistory.push({role:'assistant', content: text});
      chatDisplay.push({role:'assistant', text: text || 'جوابی دریافت نشد.'});
    } else {
      const base = (claudeBaseUrl || 'https://api.anthropic.com').replace(/\/$/,'');
      const isOfficial = base.includes('api.anthropic.com');
      const headers = {'Content-Type':'application/json'};
      if(claudeApiKey.trim()){
        headers['x-api-key'] = claudeApiKey.trim();
        headers['anthropic-version'] = '2023-06-01';
        if(isOfficial) headers['anthropic-dangerous-direct-browser-access'] = 'true';
        headers['Authorization'] = 'Bearer ' + claudeApiKey.trim(); // some gateways expect Bearer instead of x-api-key
      }
      const response = await fetch(base + '/v1/messages', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          messages: chatApiHistory
        })
      });
      const data = await response.json();
      chatDisplay.pop();
      if(data && data.content){
        text = data.content.map(b=> b.type==='text' ? b.text : '').join('\n').trim();
        chatApiHistory.push({role:'assistant', content: text});
        chatDisplay.push({role:'assistant', text: text || 'جوابی دریافت نشد.'});
      } else if(data && data.error){
        chatDisplay.push({role:'error', text: 'خطا: ' + (data.error.message || 'نامشخص') + (claudeApiKey.trim() ? '' : ' — احتمالاً این فایل بیرون از چت کلود بازه؛ کلید API رو بالا وارد کن.')});
      } else {
        chatDisplay.push({role:'error', text: 'مشکلی در دریافت پاسخ پیش اومد. دوباره امتحان کن.'});
      }
    }
  }catch(e){
    chatDisplay.pop();
    if(chatProvider==='ollama'){
      chatDisplay.push({role:'error', text: 'اتصال به Ollama ناموفق بود. مطمئن شو با دستور "OLLAMA_ORIGINS=* ollama serve" در حال اجراست، مدلش دانلود شده، و آدرس/نام مدل بالا درسته.'});
    } else {
      chatDisplay.push({role:'error', text: 'اتصال به دستیار ناموفق بود. دوباره امتحان کن.'});
    }
  }
  chatBusy = false;
  document.getElementById('chatSendBtn').disabled = false;
  renderChat();
}

document.getElementById('chatSendBtn').addEventListener('click', sendChat);
document.getElementById('chatInput').addEventListener('keydown', e=>{ if(e.key==='Enter') sendChat(); });
document.getElementById('chatClearBtn').addEventListener('click', ()=>{
  chatApiHistory = []; chatDisplay = []; renderChat();
});

function applyProviderUI(){
  const isOllama = chatProvider === 'ollama';
  document.getElementById('ollamaFields').style.display = isOllama ? 'inline-flex' : 'none';
  document.getElementById('ollamaNote').style.display = isOllama ? 'block' : 'none';
  document.getElementById('claudeFields').style.display = isOllama ? 'none' : 'inline-flex';
  document.getElementById('claudeNote').style.display = isOllama ? 'none' : 'block';
  document.getElementById('providerSelect').value = chatProvider;
  document.getElementById('ollamaModelInput').value = ollamaModel;
  document.getElementById('ollamaUrlInput').value = ollamaUrl;
  document.getElementById('claudeKeyInput').value = claudeApiKey;
  document.getElementById('claudeUrlInput').value = claudeBaseUrl;
}

document.getElementById('providerSelect').addEventListener('change', e=>{
  chatProvider = e.target.value;
  chatApiHistory = []; chatDisplay = []; // context format may differ; start fresh on switch
  applyProviderUI();
  saveSettings();
  renderChat();
});
document.getElementById('ollamaModelInput').addEventListener('change', e=>{ ollamaModel = e.target.value.trim() || 'qwen2.5-coder'; saveSettings(); });
document.getElementById('ollamaUrlInput').addEventListener('change', e=>{ ollamaUrl = e.target.value.trim() || 'http://localhost:11434'; saveSettings(); });
document.getElementById('claudeKeyInput').addEventListener('change', e=>{ claudeApiKey = e.target.value.trim(); saveSettings(); });
document.getElementById('claudeUrlInput').addEventListener('change', e=>{ claudeBaseUrl = e.target.value.trim() || 'https://api.anthropic.com'; saveSettings(); });

function showNotes(){
  document.getElementById('mainNotes').style.display = 'flex';
  document.getElementById('mainGraph').style.display = 'none';
  document.getElementById('mainChat').style.display = 'none';
  document.getElementById('btn-notes').classList.add('active');
  document.getElementById('btn-graph').classList.remove('active');
  document.getElementById('btn-chat').classList.remove('active');
}
function showGraph(){
  document.getElementById('mainNotes').style.display = 'none';
  document.getElementById('mainGraph').style.display = 'block';
  document.getElementById('mainChat').style.display = 'none';
  document.getElementById('btn-notes').classList.remove('active');
  document.getElementById('btn-graph').classList.add('active');
  document.getElementById('btn-chat').classList.remove('active');
  renderGraph();
}
function showChat(){
  document.getElementById('mainNotes').style.display = 'none';
  document.getElementById('mainGraph').style.display = 'none';
  document.getElementById('mainChat').style.display = 'flex';
  document.getElementById('btn-notes').classList.remove('active');
  document.getElementById('btn-graph').classList.remove('active');
  document.getElementById('btn-chat').classList.add('active');
  renderChat();
}

function render(){
  renderSidebar();
  renderEditor();
}

/* ---------- custom modal / toast (alert/confirm are blocked inside sandboxed iframes) ---------- */
let toastTimer = null;
function showToast(msg, isError){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.toggle('error', !!isError);
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 3200);
}
function showModal(title, body, buttons){
  // buttons: [{label, cls, onClick}]
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').textContent = body;
  const actions = document.getElementById('modalActions');
  actions.innerHTML = '';
  buttons.forEach(b=>{
    const btn = document.createElement('button');
    btn.className = 'modal-btn' + (b.cls ? ' '+b.cls : '');
    btn.textContent = b.label;
    btn.addEventListener('click', ()=>{ closeModal(); if(b.onClick) b.onClick(); });
    actions.appendChild(btn);
  });
  document.getElementById('modalBackdrop').classList.add('show');
}
function closeModal(){ document.getElementById('modalBackdrop').classList.remove('show'); }
document.getElementById('modalBackdrop').addEventListener('click', (e)=>{ if(e.target.id==='modalBackdrop') closeModal(); });

document.addEventListener('click', (e)=>{
  const row = document.getElementById('quickTagRow');
  const suggest = document.getElementById('tagSuggest');
  if(row && suggest && !row.contains(e.target)) suggest.classList.remove('show');
});

document.getElementById('newNoteBtn').addEventListener('click', ()=> createNote());
document.getElementById('search').addEventListener('input', e=>{ searchTerm = e.target.value; renderSidebar(); });
document.getElementById('btn-notes').addEventListener('click', showNotes);
document.getElementById('btn-graph').addEventListener('click', showGraph);
document.getElementById('btn-chat').addEventListener('click', showChat);

document.getElementById('exportBtn').addEventListener('click', ()=>{
  const blob = new Blob([JSON.stringify(notes, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().slice(0,10);
  a.href = url; a.download = `second-brain-backup-${stamp}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
});
document.getElementById('importBtn').addEventListener('click', ()=> document.getElementById('importFile').click());
document.getElementById('importFile').addEventListener('change', (e)=>{
  const file = e.target.files[0];
  if(!file){ return; }
  const reader = new FileReader();
  reader.onload = ()=>{
    let imported;
    try{
      imported = JSON.parse(reader.result);
    }catch(err){
      showToast('فایل معتبر نبود — یه فایل JSON پشتیبان انتخاب کن.', true);
      return;
    }
    const keys = Object.keys(imported || {});
    if(!keys.length || imported[keys[0]].title === undefined){
      showToast('این فایل شبیه پشتیبان مغز دوم نیست.', true);
      return;
    }
    showModal(
      'بازیابی پشتیبان',
      `این فایل ${keys.length} یادداشت داره. می‌خوای به یادداشت‌های فعلی اضافه بشه یا کامل جایگزینشون کنه؟`,
      [
        {label:'اضافه کردن به یادداشت‌های فعلی', cls:'primary', onClick: ()=>{
          notes = {...notes, ...imported};
          currentId = Object.keys(notes)[0] || null;
          saveNotes(); render();
          showToast(`${keys.length} یادداشت اضافه شد.`);
        }},
        {label:'جایگزینی کامل (پاک کردن قبلی‌ها)', cls:'danger', onClick: ()=>{
          notes = imported;
          currentId = Object.keys(notes)[0] || null;
          saveNotes(); render();
          showToast('یادداشت‌ها با پشتیبان جایگزین شدن.');
        }},
        {label:'لغو', cls:'ghost'}
      ]
    );
  };
  reader.onerror = ()=>{ showToast('خطا در خوندن فایل.', true); };
  reader.readAsText(file);
  e.target.value = '';
});

/* ---------- responsive: mobile vs desktop ---------- */
const mobileQuery = window.matchMedia('(max-width: 820px), (pointer: coarse) and (max-width: 900px)');
function applyDeviceMode(){
  const isMobile = mobileQuery.matches || window.innerWidth <= 820;
  document.body.classList.toggle('is-mobile', isMobile);
  document.body.classList.toggle('is-desktop', !isMobile);
  if(!isMobile){ closeSidebar(); closeDetails(); }
}
mobileQuery.addEventListener ? mobileQuery.addEventListener('change', applyDeviceMode) : mobileQuery.addListener(applyDeviceMode);
window.addEventListener('resize', applyDeviceMode);

function openSidebar(){ document.querySelector('.sidebar').classList.add('open'); document.getElementById('drawerBackdrop').classList.add('show'); }
function closeSidebar(){ document.querySelector('.sidebar').classList.remove('open'); if(!document.getElementById('rightPanel').classList.contains('open')) document.getElementById('drawerBackdrop').classList.remove('show'); }
function openDetails(){ document.getElementById('rightPanel').classList.add('open'); document.getElementById('drawerBackdrop').classList.add('show'); }
function closeDetails(){ document.getElementById('rightPanel').classList.remove('open'); if(!document.querySelector('.sidebar').classList.contains('open')) document.getElementById('drawerBackdrop').classList.remove('show'); }

document.getElementById('hamburgerBtn').addEventListener('click', ()=>{
  document.querySelector('.sidebar').classList.contains('open') ? closeSidebar() : openSidebar();
});
document.getElementById('drawerBackdrop').addEventListener('click', ()=>{ closeSidebar(); closeDetails(); });

/* ---------- loading screen ---------- */
function buildLoadingGraphic(){
  const pts = [[110,30],[45,70],[175,70],[30,125],[110,110],[190,125],[110,150]];
  const edges = [[0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[4,6],[4,3],[4,5]];
  const colors = ['#d6a35c','#6fb3a0','#9382d6','#6fb3a0','#d6a35c','#9382d6','#6fb3a0'];
  const lg = document.getElementById('loadLines');
  const ng = document.getElementById('loadNodes');
  edges.forEach(([a,b],i)=>{
    const [x1,y1]=pts[a], [x2,y2]=pts[b];
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',x1); line.setAttribute('y1',y1);
    line.setAttribute('x2',x2); line.setAttribute('y2',y2);
    line.setAttribute('class','ln-edge');
    line.style.animationDelay = (i*0.12)+'s';
    lg.appendChild(line);
  });
  pts.forEach((p,i)=>{
    const c = document.createElementNS('http://www.w3.org/2000/svg','circle');
    c.setAttribute('cx',p[0]); c.setAttribute('cy',p[1]); c.setAttribute('r',4);
    c.setAttribute('fill', colors[i%colors.length]);
    c.setAttribute('class','ln-node');
    c.style.animationDelay = (i*0.15)+'s';
    ng.appendChild(c);
  });
}
function runLoadingMessages(){
  const msgs = ['در حال بیدار شدن مغز دوم…','بارگذاری یادداشت‌ها…','ساخت ارتباط بین ایده‌ها…','آماده‌سازی گراف دانش…','چیدن آخرین تکه‌ها…'];
  const el = document.getElementById('loadMsg');
  let i = 0;
  el.textContent = msgs[0];
  return setInterval(()=>{
    i = (i+1) % msgs.length;
    el.style.opacity = 0;
    setTimeout(()=>{ el.textContent = msgs[i]; el.style.opacity = 1; }, 200);
  }, 750);
}
function hideLoadingScreen(){
  document.getElementById('loadingScreen').classList.add('hide');
}

buildLoadingGraphic();
const loadingMsgTimer = runLoadingMessages();

(async function init(){
  applyDeviceMode();
  const start = Date.now();
  await loadNotes();
  await loadSettings();
  applyProviderUI();
  render();
  const elapsed = Date.now() - start;
  const minShow = 1300;
  setTimeout(()=>{
    clearInterval(loadingMsgTimer);
    hideLoadingScreen();
  }, Math.max(0, minShow - elapsed));
})();

</script>
</body>
</html>
