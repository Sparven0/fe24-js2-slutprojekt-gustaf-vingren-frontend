// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kmTUK":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "103592df3bddbf4f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"dMJ0o":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loginForm", ()=>loginForm);
parcelHelpers.export(exports, "memberSelect", ()=>memberSelect);
var _initializeMember = require("./Rendering Functions/initializeMember");
var _displayingFunction = require("./Rendering Functions/displayingFunction");
var _memberFunctions = require("./Fetching Functions/memberFunctions");
var _taskClass = require("./Rendering Functions/TaskClass");
const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(loginForm);
    const username = formData.get("username");
    (0, _displayingFunction.checkMemberTask)(username);
    (0, _initializeMember.initMember)(username);
});
const addTaskForm = document.querySelector("#addTaskForm");
addTaskForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const prevDOM = document.querySelectorAll(".taskElementP");
    if (prevDOM) prevDOM.forEach((element)=>{
        element.remove();
    });
    const formData = new FormData(addTaskForm);
    const username = formData.get("assignedMember");
    const description = formData.get("description");
    const dueDate = formData.get("due");
    const role = formData.get("role");
    const newTask = new (0, _taskClass.Task)(username, role, description, dueDate, false);
    await (0, _memberFunctions.writeTaskForMember)(newTask, await (0, _displayingFunction.checkNotAssignedTask)());
    await (0, _displayingFunction.checkNotAssignedTask)();
    await (0, _displayingFunction.checkTasksNotLoggedIn)();
});
const createUserForm = document.querySelector('#createAccountForm');
createUserForm.addEventListener('submit', async (e)=>{
    const formData = new FormData(createUserForm);
    const username = formData.get('username');
    const email = formData.get('email');
    const role = formData.get('role');
    e.preventDefault();
    await (0, _memberFunctions.postNew)(username, email, role);
});
(0, _displayingFunction.checkStatus)();
const memberSelect = document.querySelector("#assignedMember");
const memberSelectFilter = document.querySelector("#userFilter");
(0, _displayingFunction.displayOptions)(memberSelect);
(0, _displayingFunction.displayOptions)(memberSelectFilter);
(0, _displayingFunction.checkTasksNotLoggedIn)();
(0, _displayingFunction.checkNotAssignedTask)();

},{"./Rendering Functions/initializeMember":"g6kXf","./Rendering Functions/displayingFunction":"8gRnw","./Fetching Functions/memberFunctions":"cwo3O","./Rendering Functions/TaskClass":"eD2H5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6kXf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// initialisera membern
parcelHelpers.export(exports, "initMember", ()=>initMember);
var _memberFunctions = require("../Fetching Functions/memberFunctions");
async function initMember(username) {
    const members = await (0, _memberFunctions.getAll)();
    const member = members.find((member)=>member.username === username);
    if (member) member.displayMember(username);
}

},{"../Fetching Functions/memberFunctions":"cwo3O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cwo3O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// läsa alla members
parcelHelpers.export(exports, "getAll", ()=>getAll);
// lägga till ny användare
parcelHelpers.export(exports, "postNew", ()=>postNew);
// hämta tasks för användare
parcelHelpers.export(exports, "getTasksForMember", ()=>getTasksForMember);
parcelHelpers.export(exports, "writeTaskForMember", ()=>writeTaskForMember);
var _memberClass = require("../MemberClass");
var _urls = require("./urls");
var _displayingFunction = require("../Rendering Functions/displayingFunction");
var _initializeMember = require("../Rendering Functions/initializeMember");
var _main = require("../main");
async function getAll() {
    const response = await fetch((0, _urls.getMembersUrl));
    const data = await response.json();
    console.log(data);
    return data.members.map((member)=>new (0, _memberClass.Member)(member.username, member.email, member.role));
}
async function postNew(username, email, role) {
    const body = {
        username: username,
        email: email,
        role: role,
        id: Date.now()
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    try {
        const currentMemebers = await getAll();
        currentMemebers.forEach((member)=>{
            if (username === member.username) {
                alert('Username already exists');
                return;
            }
        });
        const response = await fetch((0, _urls.postNewMemberUrl), options);
        const data = await response.json();
        await (0, _initializeMember.initMember)(username);
        await (0, _displayingFunction.displayOptions)((0, _main.memberSelect));
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
async function getTasksForMember(username) {
    try {
        const res = await fetch(`${(0, _urls.getTasksForMemberUrl)}/${username}`);
        const data = await res.json();
        console.log(data);
        if (res.status === 404 || data.length === 0) {
            console.log('Username not found');
            // alert("Can't find any tasks for this user!");
            return data;
        }
        return data;
    } catch (e) {
        console.log('Error getting tasks', e);
    }
}
// lägg till tasks för användare / not assigned to user yet
function formatTimestamp(timeStamp) {
    const date = new Date(timeStamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}
async function writeTaskForMember(task, func) {
    const formattedTimestamp = formatTimestamp(new Date().toISOString());
    const members = await getAll();
    if (task.username === 'not-assigned') {
        const body = {
            username: task.username,
            role: task.role,
            description: task.description,
            dueDate: task.dueDate,
            id: Date.now(),
            isComplete: false,
            timeStamp: formattedTimestamp
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        try {
            const response = await fetch((0, _urls.writeTaskForMemberUrl), options);
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log('Error writing task', e);
        }
        return;
    }
    // Case 2: Task username matches a member's username, proceed with POST request
    const user = members.find((member)=>member.username === task.username);
    if (user) {
        // Check role mismatch
        if (user.role !== task.role && task.role !== 'not-assigned') {
            alert("Incorrect role.. not their job!");
            console.log('Role mismatch: User role does not match task role, user-role:', task.role);
            throw new Error('Role mismatch: User role does not match task role');
        }
        const body = {
            username: task.username,
            role: task.role,
            description: task.description,
            dueDate: task.dueDate,
            id: Date.now(),
            isComplete: false,
            timeStamp: formattedTimestamp
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        try {
            const response = await fetch((0, _urls.writeTaskForMemberUrl), options);
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log('Error writing task', e);
        }
        return; // Exit the function after successfully writing the task
    }
    // Case 3: If no matching user and not 'not-assigned', throw an error
    console.log('User not found or task role mismatch');
    throw new Error('Username not found or task role mismatch');
}

},{"../MemberClass":"eyAQB","./urls":"31IoH","../Rendering Functions/displayingFunction":"8gRnw","../Rendering Functions/initializeMember":"g6kXf","../main":"dMJ0o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyAQB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Member", ()=>Member);
var _displayingFunction = require("./Rendering Functions/displayingFunction");
class Member {
    constructor(username, email, role){
        this.username = username;
        this.email = email;
        this.role = role;
    }
    displayMember(username) {
        (0, _displayingFunction.displayUser)(this.username, this.email, this.role);
    }
}

},{"./Rendering Functions/displayingFunction":"8gRnw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8gRnw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// visar användare som är "inloggad"
parcelHelpers.export(exports, "displayUser", ()=>displayUser);
// kontrolerar status på tasks och visar de som är färdiga
parcelHelpers.export(exports, "checkStatus", ()=>checkStatus);
// visar alla tasks för alla användare FÖRUTOM de som inte är not assigned
parcelHelpers.export(exports, "checkTasksNotLoggedIn", ()=>checkTasksNotLoggedIn);
// kontrollerar tasks för användare och visar de som inte är färdiga när "inloggad"
parcelHelpers.export(exports, "checkMemberTask", ()=>checkMemberTask);
// checkar inte assigned tasks och visar de
parcelHelpers.export(exports, "checkNotAssignedTask", ()=>checkNotAssignedTask);
parcelHelpers.export(exports, "displayTaskAsProgress", ()=>displayTaskAsProgress);
// färdiga
parcelHelpers.export(exports, "displayTaskAsComplete", ()=>displayTaskAsComplete);
parcelHelpers.export(exports, "displayTaskAsPending", ()=>displayTaskAsPending);
// not assigned
parcelHelpers.export(exports, "displayNotAssignedTask", ()=>displayNotAssignedTask);
// visar tasks utan att vara inloggad = går inte att ändra status
parcelHelpers.export(exports, "displayNotLoggedInTasks", ()=>displayNotLoggedInTasks);
// visar options (medlemmar) för att assigna tasks
parcelHelpers.export(exports, "displayOptions", ()=>displayOptions);
// får ej att fungera i annan modul
parcelHelpers.export(exports, "filterTasksUsername", ()=>filterTasksUsername);
parcelHelpers.export(exports, "filterTaskRole", ()=>filterTaskRole);
// sortera tasks a-z samt senaste (timestamp)
parcelHelpers.export(exports, "sortTasksAZ", ()=>sortTasksAZ);
parcelHelpers.export(exports, "sortTasksByTimeStamp", ()=>sortTasksByTimeStamp);
// tasks för användare som är inloggad
parcelHelpers.export(exports, "displayTasks", ()=>displayTasks);
var _updateFunctions = require("../Fetching Functions/updateFunctions");
var _urls = require("../Fetching Functions/urls");
var _memberFunctions = require("../Fetching Functions/memberFunctions");
var _getAllTasks = require("../Fetching Functions/getAllTasks");
function displayUser(username, email, role) {
    const loginWrapper = document.querySelector('.loginWrapper');
    /* const prevMember = document.querySelector('.member');
    if (prevMember) {
        prevMember.remove();
    }*/ const member = document.createElement('div');
    member.classList.add('member');
    member.innerHTML = `
        <div>
        <h1>Current user</h1>
        <br></br>
            <h2>${username}</h2>
            <p>${email}</p>
            <p>${role}</p>
        </div>`;
    loginWrapper.append(member);
}
async function checkStatus() {
    const raw = await fetch(`${(0, _urls.getAllTasksUrl)}`);
    const tasks = await raw.json();
    tasks.forEach((task)=>{
        const status = task.isComplete;
        if (status == true) {
            console.log(task);
            displayTaskAsComplete(task);
        }
    });
    return tasks;
}
async function checkTasksNotLoggedIn() {
    const incompleteTasksList = document.querySelector('#incompleteTasks');
    incompleteTasksList.innerHTML = '';
    const raw = await fetch(`${(0, _urls.getAllTasksUrl)}`);
    const tasks = await raw.json();
    tasks.forEach((task)=>{
        if (task.username !== 'not-assigned' && task.isComplete == false) displayNotLoggedInTasks(task);
    });
    return tasks;
}
async function checkMemberTask(username) {
    await removeElements();
    const raw = await fetch(`${(0, _urls.getTasksForMemberUrl)}/${username}`);
    const tasks = await raw.json();
    tasks.forEach((task)=>{
        if (task.isComplete == false && task.username !== 'not-assigned') {
            displayTaskAsProgress(task);
            console.log(task);
        }
    });
    return tasks;
}
async function checkNotAssignedTask() {
    const tasks = await (0, _getAllTasks.getAllTasks)();
    tasks.forEach((task)=>{
        if (task.username == 'not-assigned') displayNotAssignedTask(task);
    });
    return tasks;
}
// inte färdiga men assigned
async function removeElements() {
    const inCompleteTasksList = document.querySelector('#incompleteTasks');
    inCompleteTasksList.innerHTML = '';
}
async function displayTaskAsProgress(task) {
    await removeElements();
    const inCompleteTasksList = document.querySelector('#incompleteTasks');
    const taskElement = document.createElement('li');
    taskElement.classList.add('taskElement');
    const boxDiv = document.createElement('div');
    boxDiv.classList.add('boxDiv');
    const updateCheckbox = document.createElement('input');
    const label = document.createElement('label');
    label.innerText = 'Completed';
    updateCheckbox.type = 'checkbox';
    updateCheckbox.id = 'isCompletedBox';
    updateCheckbox.addEventListener('change', async (e)=>{
        await checkNotAssignedTask();
        await checkStatus();
        await (0, _updateFunctions.updateIsComplete)(task.id, updateCheckbox.checked);
        if (updateCheckbox.checked) {
            const prevDOM = document.querySelectorAll('.taskElementC');
            prevDOM.forEach((element)=>{
                element.remove();
            });
            inCompleteTasksList.removeChild(taskElement);
        }
        console.log(task.id);
        await checkStatus();
    });
    boxDiv.append(updateCheckbox, label);
    taskElement.innerHTML = `

<p class="taskElementText">Description:</p> ${task.description}
<p class="taskElementText">Assigned to: ${task.username}</p>
<p class="taskElementText">Due date: </p>${task.dueDate}
<p class="taskElementText">Created: </p>${task.timeStamp}`;
    taskElement.append(boxDiv);
    inCompleteTasksList.append(taskElement);
}
function displayTaskAsComplete(task) {
    const completedTasksList = document.querySelector('#completedTasks');
    const taskElementC = document.createElement('li');
    taskElementC.classList.add('taskElementC');
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove task';
    removeBtn.classList.add('removeBtn');
    removeBtn.addEventListener('click', async (e)=>{
        await (0, _updateFunctions.deleteTask)(task.id);
        taskElementC.remove();
        const inCompleteTasksList = document.querySelector('#incompleteTasks');
        const incompleteTaskElements = inCompleteTasksList.querySelectorAll('.taskElement');
        incompleteTaskElements.forEach((element)=>{
            if (element.innerHTML.includes(task.description)) inCompleteTasksList.removeChild(element);
        });
    });
    taskElementC.innerHTML = `<p class="taskElementCtext">Description: ${task.description}, Completed by: ${task.username}</p>`;
    taskElementC.append(removeBtn);
    completedTasksList.append(taskElementC);
}
function displayTaskAsPending(task) {}
async function displayNotAssignedTask(task) {
    const notAssignedTasksList = document.querySelector('#notAssignedTasks');
    notAssignedTasksList.innerHTML = '';
    const taskElementN = document.createElement('li');
    taskElementN.classList.add('taskElementN');
    taskElementN.innerHTML = `Description: ${task.description}, Assigned to: ${task.username}. Role: ${task.role}`;
    const assignUsersForm = document.createElement('form');
    assignUsersForm.id = 'assignUserForm';
    const assignedMemberOptions = document.createElement('select');
    assignedMemberOptions.id = 'assignedMemberOptions2';
    const notAssignedOption = document.createElement('option');
    notAssignedOption.value = 'not-assigned';
    notAssignedOption.innerText = 'Not Assigned';
    assignedMemberOptions.append(notAssignedOption);
    const members = await (0, _memberFunctions.getAll)();
    members.forEach((member)=>{
        if (member.role === task.role) {
            const option = document.createElement('option');
            option.value = member.username;
            option.innerText = `${member.username} (Role: ${member.role})`;
            assignedMemberOptions.append(option);
        }
    });
    const saveBtn = document.createElement('button');
    saveBtn.id = 'saveBtn';
    saveBtn.type = 'submit';
    saveBtn.innerHTML = 'Save changes';
    saveBtn.addEventListener('click', async (e)=>{
        e.preventDefault();
        const selectedUsername = assignedMemberOptions.value;
        const selectedMember = members.find((member)=>member.username === selectedUsername);
        if (selectedMember && selectedMember.role === task.role) {
            await (0, _updateFunctions.updateAssignedUser)(task.id, selectedUsername);
            taskElementN.remove();
            checkTasksNotLoggedIn();
        } else alert(`Please select a user with the role: ${task.role}`);
    });
    assignUsersForm.append(assignedMemberOptions, saveBtn);
    taskElementN.append(assignUsersForm);
    notAssignedTasksList.append(taskElementN);
}
function displayNotLoggedInTasks(task) {
    const inCompleteTasksList = document.querySelector('#incompleteTasks');
    const taskElementP = document.createElement('li');
    taskElementP.classList.add('taskElement');
    taskElementP.innerHTML = `<p class ="taskElementText">Role: ${task.role}</p><p class="taskElementPtext">Description:</p> ${task.description}, <p class="taskElementPtext">Assigned to: ${task.username}</p><p class="taskElementPtext">Created: ${task.timeStamp}</p><p class=""taskElementPtext>Due: ${task.dueDate}</p>`;
    inCompleteTasksList.append(taskElementP);
    console.log(task, 'here!!');
}
async function displayOptions(selectElement) {
    selectElement.innerHTML = '';
    const members = await (0, _memberFunctions.getAll)();
    const notAssignedOption = document.createElement('option');
    notAssignedOption.value = 'not-assigned';
    notAssignedOption.innerText = 'Not Assigned';
    const anyOptions = document.createElement('option');
    anyOptions.value = 'any';
    anyOptions.innerText = 'any';
    members.forEach((member)=>{
        const option = document.createElement('option');
        option.value = member.username, member.role;
        option.innerText = `Member: ${member.username}, Role: ${member.role}`;
        selectElement.append(notAssignedOption, option, anyOptions);
    });
}
async function filterTasksUsername(username) {
    const inCompleteTasksList = document.querySelector('#incompleteTasks');
    inCompleteTasksList.innerHTML = '';
    const tasks = await (0, _getAllTasks.getAllTasks)();
    const filteredTasks = tasks.filter((task)=>task.username === username);
    filteredTasks.forEach((task)=>{
        displayNotLoggedInTasks(task);
        console.log(task);
    });
    return filteredTasks;
}
async function filterTaskRole(role) {
    const inCompleteTasksList = document.querySelector('#incompleteTasks');
    inCompleteTasksList.innerHTML = '';
    const tasks = await (0, _getAllTasks.getAllTasks)();
    const filteredTasks = tasks.filter((task)=>task.role === role);
    filteredTasks.forEach((task)=>{
        displayNotLoggedInTasks(task);
    });
    return filteredTasks;
}
const filterForm = document.querySelector('#filterForm');
filterForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const formData = new FormData(filterForm);
    const username = formData.get('userFilter');
    const role = formData.get('role');
    const timeAndAlph = formData.get('timeAndAlph');
    if (timeAndAlph === 'a-z') await sortTasksAZ();
    else await sortTasksByTimeStamp();
    if (role === 'any' && username === 'any') return;
    if (role === 'any') await filterTasksUsername(username);
    if (username === 'any') {
        await filterTaskRole(role);
        return;
    }
});
async function sortTasksAZ() {
    const incompleteTasksList = document.querySelector('#incompleteTasks');
    incompleteTasksList.innerHTML = '';
    const tasks = await (0, _getAllTasks.getAllTasks)();
    const sortedTasks = tasks.sort((a, b)=>{
        const aDescription = a.description.toLowerCase();
        const bDescription = b.description.toLowerCase();
        if (aDescription < bDescription) return -1;
        if (aDescription > bDescription) return 1;
        console.log(sortedTasks);
        return 0;
    });
    sortedTasks.forEach((task)=>{
        displayNotLoggedInTasks(task);
    });
    return sortedTasks;
}
async function sortTasksByTimeStamp() {
    const tasks = await (0, _getAllTasks.getAllTasks)();
    const sortedTasks = tasks.sort((a, b)=>{
        const aDate = new Date(a.timeStamp).getTime();
        const bDate = new Date(b.timeStamp).getTime();
        console.log(a.timeStamp);
        if (aDate > bDate) return -1;
        if (aDate < bDate) return 1;
        return 0;
    });
    sortedTasks.forEach((task)=>{
        displayNotLoggedInTasks(task);
    });
    return sortedTasks;
}
async function displayTasks(username) {
    const previousDOM = document.querySelectorAll('.taskElement');
    if (previousDOM) previousDOM.forEach((element)=>{
        element.remove();
    });
    const response = await (0, _memberFunctions.getTasksForMember)(username);
    response.forEach((task)=>{
        if (task.username == 'not-assigned') {
            const taskElement = document.createElement('div');
            taskElement.classList.add('taskElementLoggedIn');
            taskElement.innerHTML = `
            <p>Assigned to: ${task.username}</p>
            <p>For role: ${task.role}</p>
            <p>Task: ${task.description}</p>
            <p>Deadline: ${task.dueDate}</p>
            <p>Task ID: ${task.id}</p>
            <input type="checkbox" id="isCompletedBox">Status: ${task.isComplete}</input>`;
            // konsultera med lärare om detta är rätt sätt att göra eller om mer modulering kan implementeras
            const isCompletedBox = taskElement.querySelector('#isCompletedBox');
            if (task.isComplete == true) isCompletedBox.checked = true;
            else isCompletedBox.checked = false;
            isCompletedBox.addEventListener('change', async (e)=>{
                await (0, _updateFunctions.updateIsComplete)(task.id, isCompletedBox.checked);
                displayTasks(task.username);
                console.log(task.id);
            });
            document.body.appendChild(taskElement);
        }
    });
}

},{"../Fetching Functions/updateFunctions":"kkXmc","../Fetching Functions/urls":"31IoH","../Fetching Functions/memberFunctions":"cwo3O","../Fetching Functions/getAllTasks":"eH1rR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkXmc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateIsComplete", ()=>updateIsComplete);
parcelHelpers.export(exports, "deleteTask", ()=>deleteTask);
parcelHelpers.export(exports, "updateAssignedUser", ()=>updateAssignedUser);
var _displayingFunction = require("../Rendering Functions/displayingFunction");
var _urls = require("./urls");
async function updateIsComplete(taskID, taskStatus) {
    console.log(taskID, taskStatus);
    const body = {
        isComplete: taskStatus
    };
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    try {
        const response = await fetch((0, _urls.updateIsCompleteUrl) + taskID, options);
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log('Error updating task', e);
    }
}
async function deleteTask(taskID) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch((0, _urls.deleteTaskUrl) + taskID, options);
        const data = await response.json();
        await (0, _displayingFunction.checkNotAssignedTask)();
        console.log(data);
    } catch (e) {
        console.log('Error deleting task', e);
    }
}
async function updateAssignedUser(taskID, username) {
    const body = {
        username: username
    };
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    try {
        const response = await fetch((0, _urls.updateAssignedUserUrl) + taskID, options);
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log('Error updating task', e);
    }
}

},{"../Rendering Functions/displayingFunction":"8gRnw","./urls":"31IoH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31IoH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMembersUrl", ()=>getMembersUrl);
parcelHelpers.export(exports, "postNewMemberUrl", ()=>postNewMemberUrl);
parcelHelpers.export(exports, "getTasksForMemberUrl", ()=>getTasksForMemberUrl);
parcelHelpers.export(exports, "writeTaskForMemberUrl", ()=>writeTaskForMemberUrl);
parcelHelpers.export(exports, "updateIsCompleteUrl", ()=>updateIsCompleteUrl);
parcelHelpers.export(exports, "getAllTasksUrl", ()=>getAllTasksUrl);
parcelHelpers.export(exports, "deleteTaskUrl", ()=>deleteTaskUrl);
parcelHelpers.export(exports, "updateAssignedUserUrl", ()=>updateAssignedUserUrl);
const getMembersUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/members';
const postNewMemberUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/new-member';
const getTasksForMemberUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/tasks';
const writeTaskForMemberUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/new-task';
const updateIsCompleteUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/tasks/';
const getAllTasksUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/tasks';
const deleteTaskUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/tasks/';
const updateAssignedUserUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/assign-task/';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eH1rR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAllTasks", ()=>getAllTasks);
var _urls = require("./urls");
async function getAllTasks() {
    try {
        const response = await fetch((0, _urls.getAllTasksUrl));
        const tasks = await response.json();
        return tasks;
    } catch (e) {
        console.log('Error getting tasks', e);
        return [];
    }
}

},{"./urls":"31IoH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eD2H5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Task", ()=>Task);
class Task {
    constructor(username, role, description, dueDate, isComplete, timeStamp){
        this.username = username;
        this.description = description;
        this.role = role;
        this.dueDate = dueDate;
        this.isComplete = isComplete;
        this.timeStamp = '';
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kmTUK","dMJ0o"], "dMJ0o", "parcelRequire94c2")

//# sourceMappingURL=index.3bddbf4f.js.map
