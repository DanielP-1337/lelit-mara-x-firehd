/*!
 * SPDX-License-Identifier: MIT
 * MIT License
 *
 * Copyright (c) 2026 DanielP-1337 and Mara X Display Card contributors
 * Copyright (c) 2025 Speidel Braumeister Home Assistant Integration Contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const CARD_CSS = "\n:host {\n  display: block;\n  color-scheme: dark;\n  --ink: #f6f5f3;\n  --muted: #bbbcc0;\n  --line: #ffffff29;\n  --accent: #e72d30;\n  --gutter: clamp(16px, 3.8vw, 60px);\n  --ha-toolbar: 56px;\n  font: 500 16px/1.35 Arial, sans-serif;\n}\n:host([data-kiosk]) { --ha-toolbar: 0px; }\n*, *::before, *::after { box-sizing: border-box; }\n[hidden] { display: none !important; }\n.frame {\n  min-height: calc(100vh - var(--ha-toolbar));\n  min-height: calc(100dvh - var(--ha-toolbar));\n  display: grid;\n  grid-template-rows: 1fr auto;\n  color: var(--ink);\n  background: radial-gradient(ellipse at 86% 22%, #34353a 0, #1d1e22 46%, #141518 85%);\n  padding-inline: var(--gutter);\n}\n.display { min-width: 0; display: flex; flex-direction: column; }\nheader, .brand, .indicators { display: flex; align-items: center; }\nheader {\n  min-height: clamp(54px, 9.2vh, 85px);\n  justify-content: space-between;\n  gap: 12px;\n  border-bottom: 1px solid var(--line);\n}\n.brand { gap: 11px; font-size: clamp(16px, 2.3vw, 30px); }\n.brand strong { font-weight: 900; letter-spacing: -.025em; }\n.brand ha-icon { color: #ff6264; }\n.indicators { gap: 8px; }\n.indicator {\n  display: grid;\n  place-items: center;\n  min-width: 30px;\n  min-height: 30px;\n  border: 1px solid #797a80;\n  border-radius: 50%;\n  color: var(--muted);\n  font: 700 13px/1 Arial, sans-serif;\n}\n.indicator[data-state=on] { background: #e8e7e4; border-color: #e8e7e4; color: #17181b; }\n.indicator[data-state=missing] { opacity: .63; }\n.warning { padding: 8px 12px; background: #f0c565; color: #201704; border-radius: 4px; font-weight: 700; }\nmain { flex: 1; min-width: 0; display: grid; align-content: center; padding: clamp(15px, 4vh, 44px) 0; }\nh1, p, dl, dd { margin: 0; }\nh1 {\n  color: var(--muted);\n  font-size: clamp(14px, 1.8vw, 20px);\n  font-weight: 800;\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.primary {\n  margin: .06em 0 .30em;\n  font-weight: 900;\n  font-size: clamp(40px, 8.2vw, 113px);\n  line-height: 1;\n  letter-spacing: -.052em;\n  font-variant-numeric: tabular-nums;\n  overflow-wrap: anywhere;\n}\n.primary[data-verbose=true] { font-size: clamp(30px, 5.2vw, 72px); }\n.primary[data-ready=true]::before {\n  content: '';\n  display: inline-block;\n  width: .17em;\n  height: .17em;\n  margin-inline-end: .25em;\n  border-radius: 50%;\n  background: #8de5ad;\n  vertical-align: .24em;\n}\n.subtext { color: var(--muted); font-size: clamp(13px, 1.55vw, 18px); margin-top: .65em; }\n.metrics { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px clamp(16px, 3vw, 42px); }\n.metrics div { border-top: 1px solid var(--line); padding-top: 9px; }\ndt { font-size: clamp(13px, 1.65vw, 18px); color: var(--muted); }\ndd { font-size: clamp(26px, 4vw, 49px); font-weight: 750; font-variant-numeric: tabular-nums; }\n.flow-caption { font-size: clamp(14px, 1.8vw, 20px); color: var(--muted); margin-top: .8em; }\n.flow-row { display: flex; align-items: baseline; flex-wrap: wrap; column-gap: clamp(10px, 2vw, 24px); margin-bottom: .35em; }\n.flow-row .primary { margin: .05em 0 0; color: var(--flow-color, var(--ink)); }\n.flow-state {\n  display: inline-block;\n  padding: .2em .65em;\n  border: 1px solid currentColor;\n  border-radius: 999px;\n  color: var(--flow-color, var(--muted));\n  font-size: clamp(12px, 1.65vw, 18px);\n  font-weight: 700;\n}\n.flow-row[data-band=slow] { --flow-color: #9ac8ff; }\n.flow-row[data-band=target] { --flow-color: #91e2ac; }\n.flow-row[data-band=fast] { --flow-color: #ff8585; }\n.flow-reference { margin: 0 0 clamp(12px, 3vh, 25px); }\n.tank { max-width: 650px; height: 18px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin: 0 0 15px; }\n.tank span { overflow: hidden; background: #ffffff24; border-radius: 4px; }\n.tank i { display: block; width: 0; height: 100%; background: #9ac8ff; }\n.tank[data-low=true] i { background: #f0c565; }\nnav {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  justify-items: center;\n  align-items: start;\n  gap: 5px;\n  border-top: 1px solid var(--line);\n  padding: clamp(10px, 1.8vh, 25px) 0 max(clamp(10px, 1.8vh, 25px), env(safe-area-inset-bottom));\n}\nbutton { font: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }\nbutton:focus-visible { outline: 3px solid #ff8585; outline-offset: 3px; }\n.nav-button {\n  display: grid;\n  justify-items: center;\n  gap: 6px;\n  min-width: 0;\n  padding: 1px 3px 4px;\n  color: var(--muted);\n  background: none;\n  border: 0;\n  font-size: clamp(10px, 1.4vw, 15px);\n  font-weight: 800;\n  letter-spacing: .045em;\n  text-transform: uppercase;\n}\n.round {\n  display: grid;\n  place-items: center;\n  width: clamp(44px, 8.7vh, 78px);\n  height: clamp(44px, 8.7vh, 78px);\n  color: var(--ink);\n  border: 1px solid #797a80;\n  border-radius: 50%;\n  background: #1415186b;\n}\n.round ha-icon { --mdc-icon-size: clamp(20px, 3.9vh, 30px); }\n.nav-button[aria-pressed=true] { color: var(--ink); }\n.nav-button[aria-pressed=true] .round { background: var(--accent); border-color: var(--accent); color: #fff; }\n.switch {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 48px;\n  padding: 6px 12px;\n  color: var(--ink);\n  background: #ffffff10;\n  border: 1px solid #797a80;\n  border-radius: 6px;\n}\n.switch:disabled { opacity: .55; cursor: default; }\n.track { display: flex; align-items: center; width: 44px; height: 26px; padding: 3px; background: #5e6066; border-radius: 999px; }\n.track i { width: 20px; height: 20px; border-radius: 50%; background: #fff; }\n.switch[aria-checked=true] .track { justify-content: flex-end; background: #38744c; }\n.switch-status { min-height: 1.4em; margin-top: 4px; color: #ff9a91; }\n@media (max-height: 440px) and (orientation: landscape) {\n  header { min-height: 44px; }\n  main { padding: 10px 0; }\n  .primary { font-size: clamp(34px, 11vh, 58px); margin-bottom: .18em; }\n  .flow-reference { margin-bottom: 9px; }\n  nav { padding-top: 8px; padding-bottom: max(6px, env(safe-area-inset-bottom)); }\n}\n";
const CARD_HTML = "\n<div class=\"frame\">\n  <div class=\"display\">\n    <header><span class=\"brand\"><ha-icon icon=\"mdi:coffee-maker\" aria-hidden=\"true\"></ha-icon><strong>LELIT MARA X</strong></span><span class=\"indicators\"><span id=\"pump\" class=\"indicator\" role=\"img\">P</span><span id=\"heater\" class=\"indicator\" role=\"img\">H</span></span></header>\n    <p id=\"warning\" class=\"warning\" role=\"status\" hidden></p>\n    <main>\n      <section id=\"overview\" aria-labelledby=\"head-overview\">\n        <h1 id=\"head-overview\">Übersicht</h1><p id=\"machine\" class=\"primary\">—</p>\n        <dl class=\"metrics\"><div><dt>HX-Temperatur</dt><dd id=\"hx\">—</dd></div><div><dt>Wassertank</dt><dd id=\"tank-summary\">—</dd></div></dl>\n      </section>\n      <section id=\"shot\" aria-labelledby=\"head-shot\" hidden>\n        <h1 id=\"head-shot\">Bezug</h1>\n        <p id=\"flow-caption\" class=\"flow-caption\">Wasserfluss</p>\n        <div id=\"flow-row\" class=\"flow-row\"><p id=\"flow\" class=\"primary\">—</p><p id=\"flow-state\" class=\"flow-state\" hidden></p></div>\n        <p id=\"flow-reference\" class=\"subtext flow-reference\"></p>\n        <dl class=\"metrics\"><div><dt>Laufzeit</dt><dd id=\"elapsed\">—</dd></div><div><dt>Wassermenge</dt><dd id=\"volume\">—</dd></div></dl>\n        <p id=\"shot-note\" class=\"subtext\" hidden>Noch kein Espresso erfasst</p>\n      </section>\n      <section id=\"water\" aria-labelledby=\"head-water\" hidden>\n        <h1 id=\"head-water\">Wassertank</h1><p id=\"tank-value\" class=\"primary\">—</p>\n        <div id=\"tank-bars\" class=\"tank\" aria-hidden=\"true\"><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span></div>\n        <p id=\"quality\" class=\"subtext\" hidden></p>\n      </section>\n      <section id=\"power\" aria-labelledby=\"head-power\" hidden>\n        <h1 id=\"head-power\">Strom</h1><p id=\"watts\" class=\"primary\">—</p>\n        <button id=\"plug-switch\" class=\"switch\" type=\"button\" role=\"switch\" aria-checked=\"false\" aria-label=\"Smartplug\" disabled><span class=\"track\" aria-hidden=\"true\"><i></i></span><span id=\"plug-label\" aria-hidden=\"true\">Smartplug nicht verfügbar</span></button>\n        <p id=\"switch-status\" class=\"switch-status\" role=\"status\"></p>\n      </section>\n    </main>\n  </div>\n  <nav aria-label=\"Mara-X-Ansichten\">\n    <button class=\"nav-button\" type=\"button\" data-view=\"overview\" aria-controls=\"overview\" aria-pressed=\"true\"><span class=\"round\"><ha-icon icon=\"mdi:monitor\" aria-hidden=\"true\"></ha-icon></span><span class=\"nav-label\">Übersicht</span></button>\n    <button class=\"nav-button\" type=\"button\" data-view=\"shot\" aria-controls=\"shot\" aria-pressed=\"false\"><span class=\"round\"><ha-icon icon=\"mdi:timer-outline\" aria-hidden=\"true\"></ha-icon></span><span class=\"nav-label\">Bezug</span></button>\n    <button class=\"nav-button\" type=\"button\" data-view=\"water\" aria-controls=\"water\" aria-pressed=\"false\"><span class=\"round\"><ha-icon icon=\"mdi:water-outline\" aria-hidden=\"true\"></ha-icon></span><span class=\"nav-label\">Wasser</span></button>\n    <button class=\"nav-button\" type=\"button\" data-view=\"power\" aria-controls=\"power\" aria-pressed=\"false\"><span class=\"round\"><ha-icon icon=\"mdi:power\" aria-hidden=\"true\"></ha-icon></span><span class=\"nav-label\">Strom</span></button>\n  </nav>\n</div>";

const CHROME_STYLES = {
  'hui-root': ':host{--header-height:0px!important}.header{display:none!important}#view{padding-top:0!important}',
  'ha-drawer': ':host{--ha-sidebar-width:0px!important;--ha-top-app-bar-width:100%!important}.sidebar-shell,wa-drawer{display:none!important}.app-content{padding-inline-start:0!important}::slotted(ha-sidebar){display:none!important}',
};
const FLOW_LABELS = {slow: 'Zu langsam', target: 'Im Zielbereich', fast: 'Zu schnell'};
const flowFormat = new Intl.NumberFormat('de-DE', {minimumFractionDigits: 1, maximumFractionDigits: 1});

function liveWaterRate(state) {
  const text = state?.state?.trim();
  const value = Number(text);
  if (!text || !Number.isFinite(value) || value < 0) return null;
  const unit = String(state.attributes?.unit_of_measurement ?? 'ml/min').toLowerCase().replace(/\s/g, '');
  if (unit === 'ml/min') return value / 60;
  if (unit === 'ml/s') return value;
  return null;
}

function flowBand(rate, low, high) {
  if (rate === null) return '';
  if (rate < low) return 'slow';
  if (rate > high) return 'fast';
  return 'target';
}

const MISSING = '—';
const numberFormat = new Intl.NumberFormat('de-DE', {maximumFractionDigits: 0});
const decimalFormat = new Intl.NumberFormat('de-DE', {maximumFractionDigits: 1});
const format = (number, unit, decimals = false) => number === null
  ? MISSING : (decimals ? decimalFormat : numberFormat).format(number) + ' ' + unit;
const numeric = value => value == null || String(value).trim() === '' || !Number.isFinite(Number(value))
  ? null : Number(value);
const timeText = duration => {
  const seconds = Math.max(0, Math.floor(duration / 1000));
  return String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
};

const FLOW_WINDOW_MS = 2000;
const MIN_SHOT_MS = 3000;

function isEspressoRun(start,end) {
  return Number.isFinite(start) && Number.isFinite(end) && end - start >= MIN_SHOT_MS;
}

function waterActivity(status) {
  const text = String(status ?? '').trim();
  if (text.endsWith('Hot Water')) return 'hotWater';
  if (text.endsWith('Steam')) return 'steam';
  if (text.endsWith('Water Flow')) return 'flow';
  return null;
}

const WATER_LABELS = {hotWater: 'Heißwasser', steam: 'Dampf'};

class ShotTracker {
  activity = null;
  counter = null;
  active = null;
  last = null;

  record({kind, value, time}) {
    if (kind === 'activity') {
      this.activity = waterActivity(value);
      // Once steam or hot water is detected, the entire run is excluded from espresso history.
      if (this.active && this.activity && (!this.active.activity || this.activity !== 'flow')) {
        this.active.activity = this.activity;
      }
      return;
    }
    if (kind === 'total') {
      const counter = numeric(value);
      if (this.active && (counter === null || (this.counter !== null && counter < this.counter))) {
        this.active.baseline = null;
      }
      this.counter = counter;
      return;
    }
    if (value === 'on') {
      if (!this.active) this.active = {start: time, baseline: this.counter, activity: this.activity};
      return;
    }
    const volume = this.volume();
    if (value === 'off' && this.active?.activity === 'flow' && volume > 0 && isEspressoRun(this.active.start, time)) {
      this.last = {kind: 'espresso', start: this.active.start, end: time, volume};
    }
    this.active = null;
  }

  volume() {
    const baseline = this.active?.baseline;
    return baseline == null || this.counter === null ? null : Math.max(0, this.counter - baseline);
  }
}

const SHOT_HOLD_MS = 8000;

class MaraxFirehdCard extends HTMLElement {
  _viewShotStart = null;
  _overviewAt = null;
  _shots = new ShotTracker();
  _seen = {};
  _historyStarted = false;
  _switchRequest = null;
  _timer = null;
  _kioskStyles = [];

  constructor() {
    super();
    this.attachShadow({mode: 'open'}).innerHTML = '<style>' + CARD_CSS + '</style>' + CARD_HTML;
    this.nodes = Object.fromEntries([...this.shadowRoot.querySelectorAll('[id]')].map(node => [node.id, node]));
    this.navButtons = [...this.shadowRoot.querySelectorAll('[data-view]')];
    this.navButtons.forEach(button => button.addEventListener('click', () => this.openView(button.dataset.view)));
    this.nodes['plug-switch'].addEventListener('click', () => this.switchPlug());
  }

  setConfig(config) {
    if (!config.entities?.plug?.startsWith('switch.')) throw new Error('Die Smartplug-Entität fehlt.');
    this.entities = {activity: 'sensor.marax_status', ...config.entities};
    this.waterLimit = numeric(config.low_water_percent) ?? 25;
    const low = numeric(config.flow_min_ml_s) ?? 1.0;
    const high = numeric(config.flow_max_ml_s) ?? 1.4;
    [this.flowLow, this.flowHigh] = low >= 0 && high >= low ? [low, high] : [1.0, 1.4];
    this.kiosk = config.kiosk === true;
    this.syncKiosk();
    this.put('flow-reference', 'Richtbereich ' + flowFormat.format(this.flowLow) + '–' + flowFormat.format(this.flowHigh) + ' ml/s');
    this._viewShotStart = null;
    this._overviewAt = null;
    this.storageKey = 'marax-firehd/last-shot/' + this.entities.pump;
    this._shots = new ShotTracker();
    this._seen = {};
    this._historyStarted = false;
    try {
      const saved = JSON.parse(localStorage.getItem(this.storageKey));
      if (saved?.kind === 'espresso' && Number.isFinite(saved.volume) && saved.volume > 0 && isEspressoRun(saved.start, saved.end) && saved.end <= Date.now()) {
        this._shots.last = saved;
      }
    } catch { /* The local browser cache is optional. */ }
    if (this._hass) this.hass = this._hass;
  }

  getCardSize() { return 12; }

  connectedCallback() {
    this.syncKiosk();
    if (this._timer === null) {
      this._timer = setInterval(() => {
        this.syncShotView();
        this.renderShot();
      }, 250);
    }
    this.render();
  }

  disconnectedCallback() {
    this.clearKiosk();
    clearInterval(this._timer);
    this._timer = null;
  }

  syncKiosk() {
    const query = new URLSearchParams(location.search);
    if (!this.isConnected || !this.kiosk || query.has('disable_km') || query.get('edit') === '1') {
      this.clearKiosk();
      return;
    }
    if (this._kioskStyles.length) return;
    // These rules exist only while this card is mounted on the kiosk view.
    for (let ancestor = this; ancestor; ancestor = ancestor.parentElement ?? ancestor.getRootNode().host) {
      const css = CHROME_STYLES[ancestor.localName];
      if (!css || !ancestor.shadowRoot) continue;
      const style = document.createElement('style');
      style.textContent = css;
      ancestor.shadowRoot.append(style);
      this._kioskStyles.push(style);
    }
    this.toggleAttribute('data-kiosk', this._kioskStyles.length > 0);
  }

  clearKiosk() {
    this._kioskStyles.forEach(style => style.remove());
    this._kioskStyles = [];
    this.removeAttribute('data-kiosk');
  }

  set hass(hass) {
    this._hass = hass;
    if (!this.entities) return;
    if (hass.connected !== false) {
      const events = [];
      for (const kind of ['total', 'activity', 'pump']) {
        const state = this.entity(kind);
        if (!state || this._seen[kind] === state) continue;
        const previous = this._seen[kind];
        this._seen[kind] = state;
        if (previous?.state === state.state && previous.last_changed === state.last_changed) continue;
        const changed = Date.parse(state.last_changed);
        events.push({kind, value: state.state, time: kind === 'total' && !previous ? 0 : (Number.isFinite(changed) ? changed : Date.now())});
      }
      events.sort((a, b) => a.time - b.time);
      const previousShot = this._shots.last;
      events.forEach(event => this._shots.record(event));
      if (this._shots.last !== previousShot) this.saveShot();
      if (!this._historyStarted && this.entity('pump') && this.entity('total')) {
        this._historyStarted = true;
        this.restoreShot(hass, this.entities, this._shots);
      }
    }
    this.syncShotView();
    this.render();
  }

  entity(name) { return this._hass?.states?.[this.entities?.[name]]; }
  value(name) { return this.entity(name)?.state; }
  get online() { return Boolean(this._hass && this._hass.connected !== false); }

  saveShot() {
    try { localStorage.setItem(this.storageKey, JSON.stringify(this._shots.last)); }
    catch { /* History will remain available when the recorder has data. */ }
  }

  async restoreShot(hass, entities, tracker) {
    const now = Date.now();
    const day = 24 * 60 * 60 * 1000;
    // A previous card version could cache a rinse instead of the preceding espresso.
    const oldest = now - 10 * day;
    const start = Math.max(oldest, Math.min(now - day, tracker.last?.end ?? oldest));
    try {
      const history = await hass.callWS({
        type: 'history/history_during_period', start_time: new Date(start).toISOString(),
        end_time: new Date(now).toISOString(), entity_ids: [entities.pump, entities.total, entities.activity],
        minimal_response: true, no_attributes: true,
      });
      if (this._shots !== tracker) return;
      const events = [];
      for (const kind of ['total', 'activity', 'pump']) {
        for (const state of history[entities[kind]] ?? []) {
          const time = Math.trunc((state.lc ?? state.lu) * 1000);
          if (!Number.isFinite(time) || (kind === 'pump' && time <= start && state.s === 'on')) continue;
          events.push({kind, value: state.s, time});
        }
      }
      events.sort((a, b) => a.time - b.time);
      const recovered = new ShotTracker();
      events.forEach(event => recovered.record(event));
      if (recovered.last && recovered.last.end > (tracker.last?.end ?? 0)) {
        tracker.last = recovered.last;
        this.saveShot();
      }
      if (tracker.active && Math.abs(tracker.active.start - recovered.active?.start) <= 1000) {
        if (recovered.active.activity && (!tracker.active.activity || recovered.active.activity !== 'flow')) {
          tracker.active.activity = recovered.active.activity;
        }
        const baseline = recovered.active.baseline;
        tracker.active.baseline = baseline !== null && tracker.counter >= baseline ? baseline : null;
      }
      this.renderShot();
    } catch {
      // Live timing and the local last shot still work if recorder history is unavailable.
    }
  }

  get liveShot() {
    return this.online && this.value('plug') !== 'off' && this.value('pump') === 'on' ? this._shots.active : null;
  }

  syncShotView(now = Date.now()) {
    const start = this.liveShot?.start ?? null;
    if (start !== this._viewShotStart) {
      const previous = this._viewShotStart;
      this._viewShotStart = start;
      this._overviewAt = null;
      if (start !== null) {
        this.openView('shot');
      } else if (!this.nodes.shot.hidden) {
        if (this.online && this.value('pump') === 'off' && this._shots.last?.start === previous) {
          this._overviewAt = now + SHOT_HOLD_MS;
        } else {
          this.openView('overview');
        }
      }
    }
    if (this._overviewAt !== null && now >= this._overviewAt) this.openView('overview');
  }

  openView(view) {
    this._overviewAt = null;
    for (const button of this.navButtons) {
      const selected = button.dataset.view === view;
      this.nodes[button.dataset.view].hidden = !selected;
      button.setAttribute('aria-pressed', String(selected));
      if (selected) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    }
    this.renderShot();
  }

  put(id, value) {
    if (this.nodes[id].textContent !== value) this.nodes[id].textContent = value;
  }

  liveFlowAverage(active, now) {
    if (!active) {
      this._flowWindow = null;
      return null;
    }
    if (this._flowWindow?.start !== active.start) this._flowWindow = {start: active.start, samples: []};
    const samples = this._flowWindow.samples;
    const entity = this.entity('flow');
    const rate = liveWaterRate(entity);
    const updated = Date.parse(entity?.last_updated ?? entity?.last_changed);
    if (rate === null || !Number.isFinite(updated) || updated < active.start) {
      samples.length = 0;
      return null;
    }
    const time = Math.min(updated, now);
    const previous = samples[samples.length - 1];
    if (!previous || (time > previous.time && rate !== previous.rate)) samples.push({time, rate});
    else if (time === previous.time) previous.rate = rate;
    const cutoff = now - FLOW_WINDOW_MS;
    while (samples.length > 1 && samples[1].time <= cutoff) samples.shift();
    const from = Math.max(cutoff, samples[0].time);
    if (now <= from) return rate;
    let integral = 0;
    for (let i = 0; i < samples.length; i++) {
      const begin = Math.max(from, samples[i].time);
      const end = samples[i + 1]?.time ?? now;
      integral += samples[i].rate * (end - begin);
    }
    return integral / (now - from);
  }

  renderShot() {
    if (!this.entities) return;
    const active = this.liveShot;
    const last = this._shots.last;
    const elapsed = active ? Date.now() - active.start : last ? last.end - last.start : null;
    const volume = active ? this._shots.volume() : last?.volume ?? null;
    const liveRate = this.liveFlowAverage(active, Date.now());
    const rawRate = active ? liveRate : elapsed > 0 && volume !== null ? volume * 1000 / elapsed : null;
    const rate = rawRate === null ? null : Math.round(rawRate * 10) / 10;
    const activityLabel = WATER_LABELS[active?.activity];
    const canRate = !active || active.activity === 'flow';
    const starting = Boolean(active) && !activityLabel && rate !== null && elapsed < MIN_SHOT_MS;
    this.nodes['flow-reference'].hidden = !canRate;
    const band = starting || !canRate ? '' : flowBand(rate, this.flowLow, this.flowHigh);
    let caption = last ? 'Ø Wasserfluss · letzter Espresso' : 'Wasserfluss';
    if (active) {
      const brew = active.activity === 'flow' && elapsed >= MIN_SHOT_MS;
      caption = activityLabel || brew ? (activityLabel ?? 'Espresso') + ' · Wasserfluss live (2-s-Mittel)' : 'Wasserfluss live (2-s-Mittel)';
    }
    this.put('flow-caption', caption);
    this.put('flow', rate === null ? MISSING : flowFormat.format(rate) + ' ml/s');
    this.nodes['flow-row'].dataset.band = band;
    this.nodes['flow-state'].hidden = !band && !starting;
    this.put('flow-state', starting ? 'Pumpe startet' : FLOW_LABELS[band] ?? '');
    this.put('elapsed', elapsed === null ? MISSING : timeText(elapsed));
    this.put('volume', format(volume, 'ml'));
    this.nodes['shot-note'].hidden = Boolean(active || last);
  }

  indicate(id, name, machineOnline) {
    const state = machineOnline ? this.value(id) : null;
    const label = name + (state === 'on' ? ' an' : state === 'off' ? ' aus' : ' nicht verfügbar');
    this.nodes[id].dataset.state = state === 'on' || state === 'off' ? state : 'missing';
    this.nodes[id].title = label;
    this.nodes[id].setAttribute('aria-label', label);
  }

  render() {
    if (!this.entities) return;
    const online = this.online;
    const plug = online ? this.value('plug') : null;
    const hx = online && plug !== 'off' ? numeric(this.value('hx')) : null;
    const machineOnline = hx !== null;
    const ready = machineOnline && this.value('ready') === 'on';
    const level = online ? numeric(this.value('tank_level')) : null;
    const validLevel = level !== null && level >= 0 && level <= 100 ? level : null;
    const low = validLevel !== null && validLevel <= this.waterLimit;
    const tankLabel = validLevel === null ? MISSING : numberFormat.format(validLevel) + ' %';
    const fraction = this.value('tank_status');
    const displayLevel = validLevel === null || !/^\d\s*\/\s*\d$/.test(fraction ?? '') ? tankLabel : fraction;
    const activity = waterActivity(this.value('activity'));
    let status = 'Wartet auf Bereitschaft';
    if (!online) status = 'Verbindung unterbrochen';
    else if (plug === 'off') status = 'Aus';
    else if (!machineOnline) status = 'Keine Maschinendaten';
    else if (WATER_LABELS[activity]) status = WATER_LABELS[activity];
    else if (this.liveShot) {
      const brew = this.liveShot.activity === 'flow' && Date.now() - this.liveShot.start >= MIN_SHOT_MS;
      status = WATER_LABELS[this.liveShot.activity] ?? (brew ? 'Espresso' : 'Pumpe läuft');
    }
    else if (ready) status = 'Bereit';
    else if (this.value('heater') === 'on' || this.value('ready') === 'off') status = 'Heizt auf';

    this.put('machine', status);
    this.nodes.machine.dataset.ready = String(status === 'Bereit');
    this.nodes.machine.dataset.verbose = String(status.length > 13);
    this.put('hx', format(hx, '°C', true));
    this.put('tank-summary', displayLevel);
    this.put('tank-value', displayLevel === tankLabel ? tankLabel : displayLevel + ' · ' + tankLabel);
    this.nodes['tank-bars'].hidden = validLevel === null;
    this.nodes['tank-bars'].dataset.low = String(low);
    [...this.nodes['tank-bars'].querySelectorAll('i')].forEach((bar, index) => {
      const fill = Math.max(0, Math.min(100, (validLevel ?? 0) * 4 - index * 100));
      bar.style.width = fill + '%';
    });
    const quality = online ? numeric(this.value('tds')) : null;
    this.nodes.quality.hidden = quality === null;
    this.put('quality', 'TDS: ' + format(quality, 'ppm'));
    const warnings = [];
    if (low) warnings.push('Wasser nachfüllen');
    if (!online) warnings.push('Verbindung zu Home Assistant unterbrochen');
    else if (plug !== 'off' && !machineOnline) warnings.push('Keine Maschinendaten');
    this.nodes.warning.hidden = warnings.length === 0;
    this.put('warning', warnings.join(' · '));
    this.indicate('pump', 'Pumpe', machineOnline);
    this.indicate('heater', 'Heizung', machineOnline);
    this.renderShot();
    this.renderPower(plug);
  }

  renderPower(plug) {
    const available = plug === 'on' || plug === 'off';
    if (this._switchRequest && plug === this._switchRequest.target) this.finishSwitch();
    const control = this.nodes['plug-switch'];
    control.disabled = !available || this._switchRequest !== null;
    control.setAttribute('aria-checked', String(plug === 'on'));
    this.put('watts', format(this.online ? numeric(this.value('power')) : null, 'W'));
    this.put('plug-label', available ? (plug === 'on' ? 'Smartplug an' : 'Smartplug aus') : 'Smartplug nicht verfügbar');
  }

  finishSwitch(message = '') {
    clearTimeout(this._switchRequest?.timer);
    this._switchRequest = null;
    this.put('switch-status', message);
  }

  async switchPlug() {
    const state = this.value('plug');
    if (!this.online || this._switchRequest || (state !== 'on' && state !== 'off')) return;
    const target = state === 'on' ? 'off' : 'on';
    const request = {target};
    this._switchRequest = request;
    request.timer = setTimeout(() => {
      this.finishSwitch('Keine Bestätigung vom Smartplug.');
      this.render();
    }, 8000);
    this.put('switch-status', 'Schaltet …');
    this.render();
    try {
      await this._hass.callService('switch', 'turn_' + target, {entity_id: this.entities.plug});
    } catch {
      if (this._switchRequest !== request) return;
      this.finishSwitch('Der Smartplug konnte nicht geschaltet werden.');
      this.render();
    }
  }
}

if (!customElements.get('marax-firehd-card')) customElements.define('marax-firehd-card', MaraxFirehdCard);
