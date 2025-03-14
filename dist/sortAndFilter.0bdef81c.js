// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"modules/Fetching Functions/urls.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAssignedUserUrl = exports.deleteTaskUrl = exports.getAllTasksUrl = exports.updateIsCompleteUrl = exports.writeTaskForMemberUrl = exports.getTasksForMemberUrl = exports.postNewMemberUrl = exports.getMembersUrl = void 0;
exports.getMembersUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/members';
exports.postNewMemberUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/new-member';
exports.getTasksForMemberUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/tasks';
exports.writeTaskForMemberUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/new-task';
exports.updateIsCompleteUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/tasks/';
exports.getAllTasksUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/tasks';
exports.deleteTaskUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/tasks/';
exports.updateAssignedUserUrl = 'https://fe24-js2-slutprojekt-gustaf-vingren.onrender.com/assign-task/';
},{}],"modules/Fetching Functions/getAllTasks.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTasks = getAllTasks;
var urls_1 = require("./urls");
function getAllTasks() {
  return __awaiter(this, void 0, Promise, function () {
    var response, tasks, e_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);
          return [4 /*yield*/, fetch(urls_1.getAllTasksUrl)];
        case 1:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 2:
          tasks = _a.sent();
          return [2 /*return*/, tasks];
        case 3:
          e_1 = _a.sent();
          console.log('Error getting tasks', e_1);
          return [2 /*return*/, []];
        case 4:
          return [2 /*return*/];
      }
    });
  });
}
},{"./urls":"modules/Fetching Functions/urls.ts"}],"modules/Fetching Functions/updateFunctions.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateIsComplete = updateIsComplete;
exports.deleteTask = deleteTask;
exports.updateAssignedUser = updateAssignedUser;
var displayingFunction_1 = require("../Rendering Functions/displayingFunction");
var urls_1 = require("./urls");
var urls_2 = require("./urls");
var urls_3 = require("./urls");
function updateIsComplete(taskID, taskStatus) {
  return __awaiter(this, void 0, Promise, function () {
    var body, options, response, data, e_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          console.log(taskID, taskStatus);
          body = {
            isComplete: taskStatus
          };
          options = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
          };
          _a.label = 1;
        case 1:
          _a.trys.push([1, 4,, 5]);
          return [4 /*yield*/, fetch(urls_1.updateIsCompleteUrl + taskID, options)];
        case 2:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 3:
          data = _a.sent();
          console.log(data);
          return [3 /*break*/, 5];
        case 4:
          e_1 = _a.sent();
          console.log("Error updating task", e_1);
          return [3 /*break*/, 5];
        case 5:
          return [2 /*return*/];
      }
    });
  });
}
function deleteTask(taskID) {
  return __awaiter(this, void 0, Promise, function () {
    var options, response, data, e_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          options = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          };
          _a.label = 1;
        case 1:
          _a.trys.push([1, 5,, 6]);
          return [4 /*yield*/, fetch(urls_2.deleteTaskUrl + taskID, options)];
        case 2:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 3:
          data = _a.sent();
          return [4 /*yield*/, (0, displayingFunction_1.checkNotAssignedTask)()];
        case 4:
          _a.sent();
          console.log(data);
          return [3 /*break*/, 6];
        case 5:
          e_2 = _a.sent();
          console.log("Error deleting task", e_2);
          return [3 /*break*/, 6];
        case 6:
          return [2 /*return*/];
      }
    });
  });
}
function updateAssignedUser(taskID, username) {
  return __awaiter(this, void 0, void 0, function () {
    var body, options, response, data, e_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          body = {
            username: username
          };
          options = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
          };
          _a.label = 1;
        case 1:
          _a.trys.push([1, 4,, 5]);
          return [4 /*yield*/, fetch(urls_3.updateAssignedUserUrl + taskID, options)];
        case 2:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 3:
          data = _a.sent();
          console.log(data);
          return [3 /*break*/, 5];
        case 4:
          e_3 = _a.sent();
          console.log("Error updating task", e_3);
          return [3 /*break*/, 5];
        case 5:
          return [2 /*return*/];
      }
    });
  });
}
},{"../Rendering Functions/displayingFunction":"modules/Rendering Functions/displayingFunction.ts","./urls":"modules/Fetching Functions/urls.ts"}],"modules/MemberClass.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Member = void 0;
var Member = /** @class */function () {
  function Member(username, email, role) {
    this.username = username;
    this.email = email;
    this.role = role;
  }
  // Display the current user info (assumed to be the logged-in user)
  Member.prototype.displayUser = function (username, email, role) {
    var loginWrapper = document.querySelector('.loginWrapper');
    var prevMember = document.querySelector('.member');
    if (prevMember) {
      prevMember.remove();
    }
    var member = document.createElement('div');
    member.classList.add('member');
    member.innerHTML = "\n            <div>\n                <h1>Current user</h1>\n                <br></br>\n                <h2>".concat(username, "</h2>\n                <p>").concat(email, "</p>\n                <p>").concat(role, "</p>\n            </div>");
    loginWrapper.append(member);
  };
  // Display member details
  Member.prototype.displayMember = function () {
    var loginWrapper = document.querySelector('.loginWrapper');
    var prevMember = document.querySelector('.member');
    if (prevMember) {
      prevMember.remove();
    }
    var member = document.createElement('div');
    member.classList.add('member');
    member.innerHTML = "\n            <div>\n                <h1>Current user</h1>\n                <br></br>\n                <h2>".concat(this.username, "</h2>\n                <p>").concat(this.email, "</p>\n                <p>").concat(this.role, "</p>\n            </div>");
    loginWrapper.append(member);
  };
  return Member;
}();
exports.Member = Member;
},{}],"modules/Rendering Functions/initializeMember.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initMember = initMember;
var memberFunctions_1 = require("../Fetching Functions/memberFunctions");
// initialisera membern
function initMember(username) {
  return __awaiter(this, void 0, Promise, function () {
    var members, member;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, (0, memberFunctions_1.getAll)()];
        case 1:
          members = _a.sent();
          member = members.find(function (member) {
            return member.username === username;
          });
          if (member) {
            member.displayMember();
          }
          return [2 /*return*/];
      }
    });
  });
}
},{"../Fetching Functions/memberFunctions":"modules/Fetching Functions/memberFunctions.ts"}],"modules/Rendering Functions/TaskClass.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = void 0;
var memberFunctions_1 = require("../Fetching Functions/memberFunctions");
var memberFunctions_2 = require("../Fetching Functions/memberFunctions");
var updateFunctions_1 = require("../Fetching Functions/updateFunctions");
var Task = /** @class */function () {
  function Task(title, username, role, description, dueDate, isComplete, timeStamp) {
    this.title = title;
    this.username = username;
    this.description = description;
    this.role = role;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
    this.timeStamp = timeStamp || new Date().toISOString(); // Default to current time
  }
  // Create a new task and send it to the server using the writeTaskForMember function
  Task.prototype.createNewTask = function () {
    return __awaiter(this, void 0, Promise, function () {
      var taskData;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            taskData = {
              title: this.title,
              username: this.username,
              role: this.role,
              description: this.description,
              dueDate: this.dueDate,
              isComplete: this.isComplete,
              timeStamp: this.timeStamp // Include the timestamp
            };
            return [4 /*yield*/, (0, memberFunctions_1.writeTaskForMember)(taskData)];
          case 1:
            _a.sent(); // Send the task data to the server
            return [2 /*return*/];
        }
      });
    });
  };
  Task.displayTasks = function (username) {
    return __awaiter(this, void 0, Promise, function () {
      var previousDOM, tasks;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            previousDOM = document.querySelectorAll('.taskElement');
            previousDOM.forEach(function (element) {
              element.remove();
            });
            return [4 /*yield*/, (0, memberFunctions_2.getTasksForMember)(username)];
          case 1:
            tasks = _a.sent();
            tasks.forEach(function (task) {
              if (task.username === 'not-assigned') {
                var taskElement = document.createElement('div');
                taskElement.classList.add('taskElementLoggedIn');
                taskElement.innerHTML = "\n                <p>Title: ".concat(task.title, "</p>\n                    <p>Assigned to: ").concat(task.username, "</p>\n                    <p>For role: ").concat(task.role, "</p>\n                    <p>Task: ").concat(task.description, "</p>\n                    <p>Deadline: ").concat(task.dueDate, "</p>\n                    <p>Task ID: ").concat(task.id, "</p>\n                    <input type=\"checkbox\" id=\"isCompletedBox\">Status: ").concat(task.isComplete, "</input>");
                var isCompletedBox_1 = taskElement.querySelector('#isCompletedBox');
                if (task.isComplete) {
                  isCompletedBox_1.checked = true;
                } else {
                  isCompletedBox_1.checked = false;
                }
                isCompletedBox_1.addEventListener('change', function (e) {
                  return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          return [4 /*yield*/, (0, updateFunctions_1.updateIsComplete)(task.id, isCompletedBox_1.checked)];
                        case 1:
                          _a.sent();
                          Task.displayTasks(task.username); // Refresh task list after update
                          return [2 /*return*/];
                      }
                    });
                  });
                });
                document.body.appendChild(taskElement);
              }
            });
            return [2 /*return*/];
        }
      });
    });
  };
  return Task;
}();
exports.Task = Task;
},{"../Fetching Functions/memberFunctions":"modules/Fetching Functions/memberFunctions.ts","../Fetching Functions/updateFunctions":"modules/Fetching Functions/updateFunctions.ts"}],"modules/main.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memberSelect = exports.loginForm = void 0;
var initializeMember_1 = require("./Rendering Functions/initializeMember");
var displayingFunction_1 = require("./Rendering Functions/displayingFunction");
var displayingFunction_2 = require("./Rendering Functions/displayingFunction");
var TaskClass_1 = require("./Rendering Functions/TaskClass");
var displayingFunction_3 = require("./Rendering Functions/displayingFunction");
var displayingFunction_4 = require("./Rendering Functions/displayingFunction");
var displayingFunction_5 = require("./Rendering Functions/displayingFunction");
var memberFunctions_1 = require("./Fetching Functions/memberFunctions");
// main.ts importerar och kör alla funktioner som körs "villkorslöst", dvs de som körs oavsett användarinteraktion.
// main.ts hanterar även de mest basala interaktioner såsom att logga in, skapa nya tasks samt skapa nya användare
exports.loginForm = document.querySelector("#loginForm");
exports.loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var formData = new FormData(exports.loginForm);
  var username = formData.get("username");
  (0, displayingFunction_2.checkMemberTask)(username);
  (0, initializeMember_1.initMember)(username);
});
var addTaskForm = document.querySelector("#addTaskForm");
addTaskForm.addEventListener("submit", function (e) {
  return __awaiter(void 0, void 0, void 0, function () {
    var prevDOM, formData, title, username, description, dueDate, role, newTask;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          e.preventDefault();
          prevDOM = document.querySelectorAll(".taskElementP");
          if (prevDOM) {
            prevDOM.forEach(function (element) {
              element.remove();
            });
          }
          formData = new FormData(addTaskForm);
          title = formData.get("title");
          username = formData.get("assignedMember");
          description = formData.get("description");
          dueDate = formData.get("due");
          role = formData.get("role");
          newTask = new TaskClass_1.Task(title, username, role, description, dueDate, false);
          return [4 /*yield*/, newTask.createNewTask()];
        case 1:
          _a.sent();
          return [4 /*yield*/, (0, displayingFunction_3.checkNotAssignedTask)()];
        case 2:
          _a.sent();
          return [4 /*yield*/, (0, displayingFunction_4.checkTasksNotLoggedIn)()];
        case 3:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
});
var createUserForm = document.querySelector('#createAccountForm');
createUserForm.addEventListener('submit', function (e) {
  return __awaiter(void 0, void 0, void 0, function () {
    var formData, username, email, role;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          formData = new FormData(createUserForm);
          username = formData.get('username');
          email = formData.get('email');
          role = formData.get('role');
          e.preventDefault();
          return [4 /*yield*/, (0, memberFunctions_1.postNew)(username, email, role)];
        case 1:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
});
(0, displayingFunction_5.checkStatus)();
exports.memberSelect = document.querySelector("#assignedMember");
var memberSelectFilter = document.querySelector("#userFilter");
(0, displayingFunction_1.displayOptions)(exports.memberSelect);
(0, displayingFunction_1.displayOptions)(memberSelectFilter);
(0, displayingFunction_4.checkTasksNotLoggedIn)();
(0, displayingFunction_3.checkNotAssignedTask)();
var createAccountDropDown = document.querySelector('.createAccountDropDown');
var filterDropDown = document.querySelector('.filterDropDown');
var createAccountBox = document.querySelector('.createAccount');
var createAccountArrow = document.querySelector('.createAccountI');
var filterBox = document.querySelector('.filters');
var filterArrow = document.querySelector('.filterI');
createAccountDropDown.addEventListener('click', function () {
  createAccountBox.classList.toggle('createAccountShow');
  createAccountArrow === null || createAccountArrow === void 0 ? void 0 : createAccountArrow.classList.toggle('createAccountI');
});
filterDropDown.addEventListener('click', function () {
  filterBox.classList.toggle('filtersShow');
  filterArrow === null || filterArrow === void 0 ? void 0 : filterArrow.classList.toggle('filterI');
});
},{"./Rendering Functions/initializeMember":"modules/Rendering Functions/initializeMember.ts","./Rendering Functions/displayingFunction":"modules/Rendering Functions/displayingFunction.ts","./Rendering Functions/TaskClass":"modules/Rendering Functions/TaskClass.ts","./Fetching Functions/memberFunctions":"modules/Fetching Functions/memberFunctions.ts"}],"modules/Fetching Functions/memberFunctions.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.postNew = postNew;
exports.getTasksForMember = getTasksForMember;
exports.writeTaskForMember = writeTaskForMember;
var MemberClass_1 = require("../MemberClass");
var urls_1 = require("./urls");
var urls_2 = require("./urls");
var urls_3 = require("./urls");
var urls_4 = require("./urls");
var displayingFunction_1 = require("../Rendering Functions/displayingFunction");
var initializeMember_1 = require("../Rendering Functions/initializeMember");
var main_1 = require("../main");
// läsa alla members
function getAll() {
  return __awaiter(this, void 0, Promise, function () {
    var response, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          ;
          return [4 /*yield*/, fetch(urls_1.getMembersUrl)];
        case 1:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 2:
          data = _a.sent();
          console.log(data);
          return [2 /*return*/, data.members.map(function (member) {
            return new MemberClass_1.Member(member.username, member.email, member.role);
          })];
      }
    });
  });
}
// lägga till ny användare
function postNew(username, email, role) {
  return __awaiter(this, void 0, Promise, function () {
    var body, options, currentMemebers, response, data, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          body = {
            username: username,
            email: email,
            role: role,
            id: Date.now()
          };
          options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          };
          _a.label = 1;
        case 1:
          _a.trys.push([1, 7,, 8]);
          return [4 /*yield*/, getAll()];
        case 2:
          currentMemebers = _a.sent();
          currentMemebers.forEach(function (member) {
            if (username === member.username) {
              alert('Username already exists');
              return;
            }
          });
          return [4 /*yield*/, fetch(urls_2.postNewMemberUrl, options)];
        case 3:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 4:
          data = _a.sent();
          return [4 /*yield*/, (0, initializeMember_1.initMember)(username)];
        case 5:
          _a.sent();
          return [4 /*yield*/, (0, displayingFunction_1.displayOptions)(main_1.memberSelect)];
        case 6:
          _a.sent();
          console.log(data);
          return [3 /*break*/, 8];
        case 7:
          error_1 = _a.sent();
          console.log(error_1);
          return [3 /*break*/, 8];
        case 8:
          return [2 /*return*/];
      }
    });
  });
}
// hämta tasks för användare
function getTasksForMember(username) {
  return __awaiter(this, void 0, Promise, function () {
    var res, data, e_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);
          return [4 /*yield*/, fetch("".concat(urls_3.getTasksForMemberUrl, "/").concat(username))];
        case 1:
          res = _a.sent();
          return [4 /*yield*/, res.json()];
        case 2:
          data = _a.sent();
          console.log(data);
          if (res.status === 404 || data.length === 0) {
            console.log('Username not found');
            // alert("Can't find any tasks for this user!");
            return [2 /*return*/, data];
          }
          return [2 /*return*/, data];
        case 3:
          e_1 = _a.sent();
          console.log('Error getting tasks', e_1);
          return [3 /*break*/, 4];
        case 4:
          return [2 /*return*/];
      }
    });
  });
}
// lägg till tasks för användare / not assigned to user yet
function formatTimestamp(timeStamp) {
  var date = new Date(timeStamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}
function writeTaskForMember(taskData) {
  return __awaiter(this, void 0, Promise, function () {
    var formattedTimestamp, members, body, options, response, data, e_2, user, body, options, response, data, e_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          formattedTimestamp = formatTimestamp(new Date().toISOString());
          return [4 /*yield*/, getAll()];
        case 1:
          members = _a.sent();
          if (!(taskData.username === 'not-assigned')) return [3 /*break*/, 7];
          body = {
            title: taskData.title,
            username: taskData.username,
            role: taskData.role,
            description: taskData.description,
            dueDate: taskData.dueDate,
            id: Date.now(),
            isComplete: false,
            timeStamp: formattedTimestamp
          };
          options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          };
          _a.label = 2;
        case 2:
          _a.trys.push([2, 5,, 6]);
          return [4 /*yield*/, fetch(urls_4.writeTaskForMemberUrl, options)];
        case 3:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 4:
          data = _a.sent();
          console.log(data);
          return [3 /*break*/, 6];
        case 5:
          e_2 = _a.sent();
          console.log('Error writing task', e_2);
          return [3 /*break*/, 6];
        case 6:
          return [2 /*return*/];
        case 7:
          user = members.find(function (member) {
            return member.username === taskData.username;
          });
          if (!user) return [3 /*break*/, 13];
          // Check role mismatch
          if (user.role !== taskData.role && taskData.role !== 'not-assigned') {
            alert("Incorrect role.. not their job!");
            console.log('Role mismatch: User role does not match task role, user-role:', taskData.role);
            throw new Error('Role mismatch: User role does not match task role');
          }
          body = {
            username: taskData.username,
            role: taskData.role,
            description: taskData.description,
            dueDate: taskData.dueDate,
            id: Date.now(),
            isComplete: false,
            timeStamp: formattedTimestamp
          };
          options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          };
          _a.label = 8;
        case 8:
          _a.trys.push([8, 11,, 12]);
          return [4 /*yield*/, fetch(urls_4.writeTaskForMemberUrl, options)];
        case 9:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 10:
          data = _a.sent();
          console.log(data);
          return [3 /*break*/, 12];
        case 11:
          e_3 = _a.sent();
          console.log('Error writing task', e_3);
          return [3 /*break*/, 12];
        case 12:
          return [2 /*return*/];
        // Exit the function after successfully writing the task
        case 13:
          // Case 3: If no matching user and not 'not-assigned', throw an error
          console.log('User not found or task role mismatch');
          throw new Error('Username not found or task role mismatch');
      }
    });
  });
}
},{"../MemberClass":"modules/MemberClass.ts","./urls":"modules/Fetching Functions/urls.ts","../Rendering Functions/displayingFunction":"modules/Rendering Functions/displayingFunction.ts","../Rendering Functions/initializeMember":"modules/Rendering Functions/initializeMember.ts","../main":"modules/main.ts"}],"modules/Rendering Functions/displayingFunction.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkStatus = checkStatus;
exports.checkTasksNotLoggedIn = checkTasksNotLoggedIn;
exports.checkMemberTask = checkMemberTask;
exports.checkNotAssignedTask = checkNotAssignedTask;
exports.displayTaskAsProgress = displayTaskAsProgress;
exports.displayTaskAsComplete = displayTaskAsComplete;
exports.displayTaskAsPending = displayTaskAsPending;
exports.displayNotAssignedTask = displayNotAssignedTask;
exports.displayNotLoggedInTasks = displayNotLoggedInTasks;
exports.displayOptions = displayOptions;
var updateFunctions_1 = require("../Fetching Functions/updateFunctions");
var urls_1 = require("../Fetching Functions/urls");
var memberFunctions_1 = require("../Fetching Functions/memberFunctions");
var updateFunctions_2 = require("../Fetching Functions/updateFunctions");
var updateFunctions_3 = require("../Fetching Functions/updateFunctions");
var getAllTasks_1 = require("../Fetching Functions/getAllTasks");
// kontrolerar status på tasks och visar de som är färdiga
function checkStatus() {
  return __awaiter(this, void 0, Promise, function () {
    var raw, tasks;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, fetch("".concat(urls_1.getAllTasksUrl))];
        case 1:
          raw = _a.sent();
          return [4 /*yield*/, raw.json()];
        case 2:
          tasks = _a.sent();
          tasks.forEach(function (task) {
            var status = task.isComplete;
            if (status == true) {
              displayTaskAsComplete(task);
            }
          });
          return [2 /*return*/, tasks];
      }
    });
  });
}
// visar alla tasks för alla användare FÖRUTOM de som inte är not assigned
function checkTasksNotLoggedIn() {
  return __awaiter(this, void 0, Promise, function () {
    var incompleteTasksList, raw, tasks;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          incompleteTasksList = document.querySelector("#incompleteTasks");
          incompleteTasksList.innerHTML = "";
          return [4 /*yield*/, fetch("".concat(urls_1.getAllTasksUrl))];
        case 1:
          raw = _a.sent();
          return [4 /*yield*/, raw.json()];
        case 2:
          tasks = _a.sent();
          tasks.forEach(function (task) {
            if (task.username !== "not-assigned" && task.isComplete == false) {
              displayNotLoggedInTasks(task);
            }
          });
          return [2 /*return*/, tasks];
      }
    });
  });
}
// kontrollerar tasks för användare och visar de som inte är färdiga när "inloggad"
function checkMemberTask(username) {
  return __awaiter(this, void 0, Promise, function () {
    var raw, tasks;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, removeElements()];
        case 1:
          _a.sent();
          return [4 /*yield*/, fetch("".concat(urls_1.getTasksForMemberUrl, "/").concat(username))];
        case 2:
          raw = _a.sent();
          return [4 /*yield*/, raw.json()];
        case 3:
          tasks = _a.sent();
          tasks.forEach(function (task) {
            if (task.isComplete == false && task.username !== "not-assigned") {
              displayTaskAsProgress(task);
            }
          });
          return [2 /*return*/, tasks];
      }
    });
  });
}
// checkar inte assigned tasks och visar de
function checkNotAssignedTask() {
  return __awaiter(this, void 0, Promise, function () {
    var tasks;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, (0, getAllTasks_1.getAllTasks)()];
        case 1:
          tasks = _a.sent();
          tasks.forEach(function (task) {
            if (task.username == "not-assigned") {
              displayNotAssignedTask(task);
            }
          });
          return [2 /*return*/, tasks];
      }
    });
  });
}
// inte färdiga men assigned
function removeElements() {
  return __awaiter(this, void 0, void 0, function () {
    var inCompleteTasksList;
    return __generator(this, function (_a) {
      inCompleteTasksList = document.querySelector("#incompleteTasks");
      inCompleteTasksList.innerHTML = "";
      return [2 /*return*/];
    });
  });
}
function displayTaskAsProgress(task) {
  return __awaiter(this, void 0, Promise, function () {
    var inCompleteTasksList, taskElement, boxDiv, updateCheckbox, label;
    var _this = this;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, removeElements()];
        case 1:
          _a.sent();
          inCompleteTasksList = document.querySelector("#incompleteTasks");
          taskElement = document.createElement("li");
          taskElement.classList.add("taskElement");
          boxDiv = document.createElement("div");
          boxDiv.classList.add("boxDiv");
          updateCheckbox = document.createElement("input");
          label = document.createElement("label");
          label.innerText = "Completed";
          updateCheckbox.type = "checkbox";
          updateCheckbox.id = "isCompletedBox";
          updateCheckbox.addEventListener("change", function (e) {
            return __awaiter(_this, void 0, void 0, function () {
              var prevDOM;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, checkNotAssignedTask()];
                  case 1:
                    _a.sent();
                    return [4 /*yield*/, checkStatus()];
                  case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, updateFunctions_1.updateIsComplete)(task.id, updateCheckbox.checked)];
                  case 3:
                    _a.sent();
                    if (updateCheckbox.checked) {
                      prevDOM = document.querySelectorAll(".taskElementC");
                      prevDOM.forEach(function (element) {
                        element.remove();
                      });
                      inCompleteTasksList.removeChild(taskElement);
                    }
                    return [4 /*yield*/, checkStatus()];
                  case 4:
                    _a.sent();
                    return [2 /*return*/];
                }
              });
            });
          });
          boxDiv.append(updateCheckbox, label);
          taskElement.innerHTML = "\n  <p class=\"taskElementTitle\">".concat(task.title, "</p>\n<p class=\"taskElementText\">Description:</p> ").concat(task.description, "\n<p class=\"taskElementText\">Assigned to: ").concat(task.username, "</p>\n<p class=\"taskElementText\">Due date: </p>").concat(task.dueDate, "\n<p class=\"taskElementText\">Created: </p>").concat(task.timeStamp);
          taskElement.append(boxDiv);
          inCompleteTasksList.append(taskElement);
          return [2 /*return*/];
      }
    });
  });
}
// färdiga
function displayTaskAsComplete(task) {
  var _this = this;
  var completedTasksList = document.querySelector("#completedTasks");
  var taskElementC = document.createElement("li");
  taskElementC.classList.add("taskElementC");
  var removeBtn = document.createElement("button");
  removeBtn.innerHTML = "Remove task";
  removeBtn.classList.add("removeBtn");
  removeBtn.addEventListener("click", function (e) {
    return __awaiter(_this, void 0, void 0, function () {
      var inCompleteTasksList, incompleteTaskElements;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, (0, updateFunctions_2.deleteTask)(task.id)];
          case 1:
            _a.sent();
            taskElementC.remove();
            inCompleteTasksList = document.querySelector("#incompleteTasks");
            incompleteTaskElements = inCompleteTasksList.querySelectorAll(".taskElement");
            incompleteTaskElements.forEach(function (element) {
              if (element.innerHTML.includes(task.description)) {
                inCompleteTasksList.removeChild(element);
              }
            });
            return [2 /*return*/];
        }
      });
    });
  });
  taskElementC.innerHTML = "<p class=\"taskElementTitle\">".concat(task.title, "</p><p class=\"taskElementCtext\">Description: ").concat(task.description, "</p> <p class=\"taskElementCtext\">Completed by: ").concat(task.username, "</p>");
  taskElementC.append(removeBtn);
  completedTasksList.append(taskElementC);
}
function displayTaskAsPending(task) {}
// not assigned
function displayNotAssignedTask(task) {
  return __awaiter(this, void 0, Promise, function () {
    var notAssignedTasksList, taskElementN, assignUsersForm, assignedMemberOptions, notAssignedOption, members, saveBtn;
    var _this = this;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          notAssignedTasksList = document.querySelector("#notAssignedTasks");
          notAssignedTasksList.innerHTML = "";
          taskElementN = document.createElement("li");
          taskElementN.classList.add("taskElementN");
          taskElementN.innerHTML = "<p class=\"taskElementTitle\">".concat(task.title, "</p><p class=\"taskElementCtext\">Description: ").concat(task.description, "</p> <p class=\"taskElementCtext\">Assigned to: ").concat(task.username, "</p> <p class=\"taskElementCtext>Role: ").concat(task.role, "</p><p class=\"taskElementCtext>Due: ").concat(task.dueDate, "</p><p class=\"taskElementCtext>Created: ").concat(task.timeStamp, "</p>");
          assignUsersForm = document.createElement("form");
          assignUsersForm.id = "assignUserForm";
          assignedMemberOptions = document.createElement("select");
          assignedMemberOptions.id = "assignedMemberOptions2";
          notAssignedOption = document.createElement("option");
          notAssignedOption.value = "not-assigned";
          notAssignedOption.innerText = "Not Assigned";
          assignedMemberOptions.append(notAssignedOption);
          return [4 /*yield*/, (0, memberFunctions_1.getAll)()];
        case 1:
          members = _a.sent();
          members.forEach(function (member) {
            if (member.role === task.role) {
              var option = document.createElement("option");
              option.value = member.username;
              option.innerText = "".concat(member.username, " (Role: ").concat(member.role, ")");
              assignedMemberOptions.append(option);
            }
          });
          saveBtn = document.createElement("button");
          saveBtn.id = "saveBtn";
          saveBtn.type = "submit";
          saveBtn.innerHTML = "Save changes";
          saveBtn.addEventListener("click", function (e) {
            return __awaiter(_this, void 0, void 0, function () {
              var selectedUsername, selectedMember;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    e.preventDefault();
                    selectedUsername = assignedMemberOptions.value;
                    selectedMember = members.find(function (member) {
                      return member.username === selectedUsername;
                    });
                    if (!(selectedMember && selectedMember.role === task.role)) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, updateFunctions_3.updateAssignedUser)(task.id, selectedUsername)];
                  case 1:
                    _a.sent();
                    taskElementN.remove();
                    checkTasksNotLoggedIn();
                    return [3 /*break*/, 3];
                  case 2:
                    alert("Please select a user with the role: ".concat(task.role));
                    _a.label = 3;
                  case 3:
                    return [2 /*return*/];
                }
              });
            });
          });
          assignUsersForm.append(assignedMemberOptions, saveBtn);
          taskElementN.append(assignUsersForm);
          notAssignedTasksList.append(taskElementN);
          return [2 /*return*/];
      }
    });
  });
}
// visar tasks utan att vara inloggad = går inte att ändra status
function displayNotLoggedInTasks(task) {
  var inCompleteTasksList = document.querySelector("#incompleteTasks");
  var taskElementP = document.createElement("li");
  taskElementP.classList.add("taskElement");
  taskElementP.innerHTML = "<p class=\"taskElementTitle\">".concat(task.title, "</p><p class =\"taskElementText\">Role: ").concat(task.role, "</p><p class=\"taskElementPtext\">Description:</p> ").concat(task.description, " <p class=\"taskElementPtext\">Assigned to: ").concat(task.username, "</p><p class=\"taskElementPtext\">Created: ").concat(task.timeStamp, "</p><p class=\"\"taskElementPtext>Due: ").concat(task.dueDate, "</p>");
  inCompleteTasksList.append(taskElementP);
}
// visar options (medlemmar) för att assigna tasks
function displayOptions(selectElement) {
  return __awaiter(this, void 0, Promise, function () {
    var members, notAssignedOption, anyOptions;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          selectElement.innerHTML = "";
          return [4 /*yield*/, (0, memberFunctions_1.getAll)()];
        case 1:
          members = _a.sent();
          notAssignedOption = document.createElement("option");
          notAssignedOption.value = "not-assigned";
          notAssignedOption.innerText = "Not Assigned";
          anyOptions = document.createElement("option");
          anyOptions.value = "any";
          anyOptions.innerText = "any";
          members.forEach(function (member) {
            var option = document.createElement("option");
            option.value = member.username, member.role;
            option.innerText = "Member: ".concat(member.username, ", Role: ").concat(member.role);
            selectElement.append(notAssignedOption, option, anyOptions);
          });
          return [2 /*return*/];
      }
    });
  });
}
},{"../Fetching Functions/updateFunctions":"modules/Fetching Functions/updateFunctions.ts","../Fetching Functions/urls":"modules/Fetching Functions/urls.ts","../Fetching Functions/memberFunctions":"modules/Fetching Functions/memberFunctions.ts","../Fetching Functions/getAllTasks":"modules/Fetching Functions/getAllTasks.ts"}],"modules/Rendering Functions/sortAndFilter.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterTasksUsername = filterTasksUsername;
exports.filterTaskRole = filterTaskRole;
exports.sortTasksAZ = sortTasksAZ;
exports.sortTasksByTimeStamp = sortTasksByTimeStamp;
exports.sortTasksByTimeStampReversed = sortTasksByTimeStampReversed;
exports.sortTasksReversed = sortTasksReversed;
var getAllTasks_1 = require("../Fetching Functions/getAllTasks");
var displayingFunction_1 = require("./displayingFunction");
var filterForm = document.querySelector('#filterForm');
function filterTasksUsername(username) {
  return __awaiter(this, void 0, Promise, function () {
    var inCompleteTasksList, tasks, filteredTasks;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          inCompleteTasksList = document.querySelector('#incompleteTasks');
          inCompleteTasksList.innerHTML = '';
          return [4 /*yield*/, (0, getAllTasks_1.getAllTasks)()];
        case 1:
          tasks = _a.sent();
          filteredTasks = tasks.filter(function (task) {
            return task.username === username;
          });
          filteredTasks.forEach(function (task) {
            if (task.username !== 'not-assigned') {
              (0, displayingFunction_1.displayNotLoggedInTasks)(task);
            }
          });
          return [2 /*return*/, filteredTasks];
      }
    });
  });
}
function filterTaskRole(role) {
  return __awaiter(this, void 0, Promise, function () {
    var inCompleteTasksList, tasks, filteredTasks;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          inCompleteTasksList = document.querySelector('#incompleteTasks');
          inCompleteTasksList.innerHTML = '';
          return [4 /*yield*/, (0, getAllTasks_1.getAllTasks)()];
        case 1:
          tasks = _a.sent();
          filteredTasks = tasks.filter(function (task) {
            return task.role === role;
          });
          filteredTasks.forEach(function (task) {
            if (task.username !== 'not-assigned') {
              (0, displayingFunction_1.displayNotLoggedInTasks)(task);
            }
          });
          return [2 /*return*/, filteredTasks];
      }
    });
  });
}
filterForm.addEventListener('submit', function (e) {
  return __awaiter(void 0, void 0, void 0, function () {
    var formData, username, role, timeAndAlph;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          e.preventDefault();
          formData = new FormData(filterForm);
          username = formData.get('userFilter');
          role = formData.get('role');
          timeAndAlph = formData.get('timeAndAlph');
          if (!(timeAndAlph === 'a-z')) return [3 /*break*/, 2];
          return [4 /*yield*/, sortTasksAZ()];
        case 1:
          _a.sent();
          return [3 /*break*/, 8];
        case 2:
          if (!(timeAndAlph === 'z-a')) return [3 /*break*/, 4];
          return [4 /*yield*/, sortTasksReversed()];
        case 3:
          _a.sent();
          return [3 /*break*/, 8];
        case 4:
          if (!(timeAndAlph == 'oldest')) return [3 /*break*/, 6];
          return [4 /*yield*/, sortTasksByTimeStampReversed()];
        case 5:
          _a.sent();
          return [3 /*break*/, 8];
        case 6:
          return [4 /*yield*/, sortTasksByTimeStamp()];
        case 7:
          _a.sent();
          _a.label = 8;
        case 8:
          if (role === 'any' && username === 'any') {
            return [2 /*return*/];
          }
          if (!(role === 'any')) return [3 /*break*/, 10];
          return [4 /*yield*/, filterTasksUsername(username)];
        case 9:
          _a.sent();
          _a.label = 10;
        case 10:
          if (!(username === 'any')) return [3 /*break*/, 12];
          return [4 /*yield*/, filterTaskRole(role)];
        case 11:
          _a.sent();
          return [2 /*return*/];
        case 12:
          return [2 /*return*/];
      }
    });
  });
});
// sortera tasks a-z samt senaste (timestamp)
function sortTasksAZ() {
  return __awaiter(this, void 0, Promise, function () {
    var incompleteTasksList, tasks, sortedTasks;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          incompleteTasksList = document.querySelector('#incompleteTasks');
          incompleteTasksList.innerHTML = '';
          return [4 /*yield*/, (0, getAllTasks_1.getAllTasks)()];
        case 1:
          tasks = _a.sent();
          sortedTasks = tasks.sort(function (a, b) {
            var aDescription = a.description.toLowerCase();
            var bDescription = b.description.toLowerCase();
            if (aDescription < bDescription) return -1;
            if (aDescription > bDescription) return 1;
            return 0;
          });
          sortedTasks.forEach(function (task) {
            (0, displayingFunction_1.displayNotLoggedInTasks)(task);
          });
          return [2 /*return*/, sortedTasks];
      }
    });
  });
}
function sortTasksByTimeStamp() {
  return __awaiter(this, void 0, Promise, function () {
    var incompleteTasksList, tasks, sortedTasks;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          incompleteTasksList = document.querySelector('#incompleteTasks');
          incompleteTasksList.innerHTML = '';
          return [4 /*yield*/, (0, getAllTasks_1.getAllTasks)()];
        case 1:
          tasks = _a.sent();
          sortedTasks = tasks.sort(function (a, b) {
            var aDate = new Date(a.timeStamp).getTime();
            var bDate = new Date(b.timeStamp).getTime();
            if (aDate > bDate) return -1;
            if (aDate < bDate) return 1;
            return 0;
          });
          sortedTasks.forEach(function (task) {
            (0, displayingFunction_1.displayNotLoggedInTasks)(task);
          });
          return [2 /*return*/, sortedTasks];
      }
    });
  });
}
function sortTasksByTimeStampReversed() {
  return __awaiter(this, void 0, Promise, function () {
    var incompleteTasksList, tasks, sortedTasks;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          incompleteTasksList = document.querySelector('#incompleteTasks');
          incompleteTasksList.innerHTML = '';
          return [4 /*yield*/, (0, getAllTasks_1.getAllTasks)()];
        case 1:
          tasks = _a.sent();
          sortedTasks = tasks.sort(function (a, b) {
            var aDate = new Date(a.timeStamp).getTime();
            var bDate = new Date(b.timeStamp).getTime();
            if (aDate < bDate) return -1;
            if (aDate > bDate) return 1;
            return 0;
          });
          sortedTasks.forEach(function (task) {
            (0, displayingFunction_1.displayNotLoggedInTasks)(task);
          });
          return [2 /*return*/, sortedTasks];
      }
    });
  });
}
function sortTasksReversed() {
  return __awaiter(this, void 0, Promise, function () {
    var incompleteTasksList, tasks, sortedTasks;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          incompleteTasksList = document.querySelector('#incompleteTasks');
          incompleteTasksList.innerHTML = '';
          return [4 /*yield*/, (0, getAllTasks_1.getAllTasks)()];
        case 1:
          tasks = _a.sent();
          sortedTasks = tasks.sort(function (a, b) {
            var aDescription = a.description.toLowerCase();
            var bDescription = b.description.toLowerCase();
            if (aDescription > bDescription) return -1;
            if (aDescription < bDescription) return 1;
            return 0;
          });
          sortedTasks.forEach(function (task) {
            (0, displayingFunction_1.displayNotLoggedInTasks)(task);
          });
          return [2 /*return*/, sortedTasks];
      }
    });
  });
}
},{"../Fetching Functions/getAllTasks":"modules/Fetching Functions/getAllTasks.ts","./displayingFunction":"modules/Rendering Functions/displayingFunction.ts"}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65103" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","modules/Rendering Functions/sortAndFilter.ts"], null)
//# sourceMappingURL=/sortAndFilter.0bdef81c.js.map