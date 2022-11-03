var Jcrop = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // build/js/easing.js
  var require_easing = __commonJS({
    "build/js/easing.js"(exports, module) {
      var m = module.exports = {
        def: "outQuad",
        swing: function(t, b, c, d) {
          return m[m.def](t, b, c, d);
        },
        inQuad: function(t, b, c, d) {
          return c * (t /= d) * t + b;
        },
        outQuad: function(t, b, c, d) {
          return -c * (t /= d) * (t - 2) + b;
        },
        inOutQuad: function(t, b, c, d) {
          if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
          return -c / 2 * (--t * (t - 2) - 1) + b;
        },
        inCubic: function(t, b, c, d) {
          return c * (t /= d) * t * t + b;
        },
        outCubic: function(t, b, c, d) {
          return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        inOutCubic: function(t, b, c, d) {
          if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
          return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        inQuart: function(t, b, c, d) {
          return c * (t /= d) * t * t * t + b;
        },
        outQuart: function(t, b, c, d) {
          return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        inOutQuart: function(t, b, c, d) {
          if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t + b;
          return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        inQuint: function(t, b, c, d) {
          return c * (t /= d) * t * t * t * t + b;
        },
        outQuint: function(t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        inOutQuint: function(t, b, c, d) {
          if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
          return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        inSine: function(t, b, c, d) {
          return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        outSine: function(t, b, c, d) {
          return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        inOutSine: function(t, b, c, d) {
          return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        inExpo: function(t, b, c, d) {
          return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        outExpo: function(t, b, c, d) {
          return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        inOutExpo: function(t, b, c, d) {
          if (t == 0)
            return b;
          if (t == d)
            return b + c;
          if ((t /= d / 2) < 1)
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        inCirc: function(t, b, c, d) {
          return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        outCirc: function(t, b, c, d) {
          return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        inOutCirc: function(t, b, c, d) {
          if ((t /= d / 2) < 1)
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
          return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        inElastic: function(t, b, c, d) {
          var s = 1.70158;
          var p = 0;
          var a = c;
          if (t == 0)
            return b;
          if ((t /= d) == 1)
            return b + c;
          if (!p)
            p = d * 0.3;
          if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
          } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
          return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        outElastic: function(t, b, c, d) {
          var s = 1.70158;
          var p = 0;
          var a = c;
          if (t == 0)
            return b;
          if ((t /= d) == 1)
            return b + c;
          if (!p)
            p = d * 0.3;
          if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
          } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
          return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        inOutElastic: function(t, b, c, d) {
          var s = 1.70158;
          var p = 0;
          var a = c;
          if (t == 0)
            return b;
          if ((t /= d / 2) == 2)
            return b + c;
          if (!p)
            p = d * (0.3 * 1.5);
          if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
          } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
          if (t < 1)
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
          return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        },
        inBack: function(t, b, c, d, s) {
          if (s == void 0)
            s = 1.70158;
          return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        outBack: function(t, b, c, d, s) {
          if (s == void 0)
            s = 1.70158;
          return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        inOutBack: function(t, b, c, d, s) {
          if (s == void 0)
            s = 1.70158;
          if ((t /= d / 2) < 1)
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
          return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        },
        inBounce: function(t, b, c, d) {
          return c - m.outBounce(d - t, 0, c, d) + b;
        },
        outBounce: function(t, b, c, d) {
          if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
          } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
          } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
          } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
          }
        },
        inOutBounce: function(t, b, c, d) {
          if (t < d / 2)
            return m.inBounce(t * 2, 0, c, d) * 0.5 + b;
          return m.outBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
        }
      };
    }
  });

  // build/js/jcrop.js
  var jcrop_exports = {};
  __export(jcrop_exports, {
    DomObj: () => domobj_default,
    Dragger: () => dragger_default,
    Handle: () => handle_default,
    Rect: () => rect_default,
    Shade: () => shade_default,
    Stage: () => dom_default,
    Sticker: () => sticker_default,
    Widget: () => widget_default,
    attach: () => attach,
    default: () => jcrop_default,
    defaults: () => defaults_default,
    easing: () => import_easing2.default,
    load: () => loader_default
  });

  // build/js/util/extend.js
  function extend() {
    var extended = {};
    for (let key in arguments) {
      var argument = arguments[key];
      for (let prop in argument) {
        if (Object.prototype.hasOwnProperty.call(argument, prop)) {
          extended[prop] = argument[prop];
        }
      }
    }
    return extended;
  }

  // build/js/defaults.js
  var defaults_default = {
    animateEasingFunction: "swing",
    animateFrames: 30,
    multi: false,
    multiMax: null,
    multiMin: 1,
    cropperClass: "jcrop-widget",
    disabledClass: "jcrop-disable",
    canDrag: true,
    canResize: true,
    canSelect: true,
    canRemove: true,
    multiple: false,
    autoFront: true,
    active: true,
    handles: ["n", "s", "e", "w", "sw", "nw", "ne", "se"],
    shade: true,
    shadeClass: "jcrop-shade",
    shadeColor: "black",
    shadeOpacity: 0.5,
    widgetConstructor: null,
    x: 0,
    y: 0,
    w: 100,
    h: 100
  };

  // build/js/domobj.js
  var DomObj = class {
    constructor(el) {
      if (typeof el === "string")
        el = document.getElementById(el);
      this.el = el;
    }
    appendTo(el) {
      if (typeof el === "string")
        el = document.getElementById(el);
      el.appendChild(this.el);
      return this;
    }
    emit(evname) {
      const ev = document.createEvent("Event");
      ev.initEvent(evname, true, true);
      ev.cropTarget = this;
      this.el.dispatchEvent(ev);
    }
    removeClass(cl) {
      this.el.className = this.el.className.split(" ").filter((i) => cl !== i).join(" ");
      return this;
    }
    hasClass(cl) {
      return this.el.className.split(" ").filter((i) => cl === i).length;
    }
    addClass(cl) {
      if (!this.hasClass(cl))
        this.el.className += " " + cl;
      return this;
    }
    listen(evname, handler) {
      this.el.addEventListener(evname, (e) => handler(e.cropTarget, e));
      return this;
    }
  };
  var domobj_default = DomObj;

  // build/js/handle.js
  var Handle = class extends domobj_default {
  };
  Handle.create = function(clname) {
    const el = document.createElement("div");
    el.className = clname;
    return new Handle(el);
  };
  var handle_default = Handle;

  // build/js/dragger.js
  var Dragger = function(el, startcb, movecb, donecb) {
    var ox, oy;
    if (typeof el === "string")
      el = document.getElementById(el);
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);
    function start(e) {
      const obj = e.type === "touchstart" ? e.touches[0] : e;
      ox = obj.pageX;
      oy = obj.pageY;
      e.preventDefault();
      e.stopPropagation();
      if (!startcb(ox, oy, obj))
        return;
      if (e.type === "mousedown") {
        window.addEventListener("mousemove", move);
        document.addEventListener("mouseup", done);
      } else if (e.type === "touchstart") {
        document.addEventListener("touchmove", move);
        document.addEventListener("touchend", done);
      }
    }
    function move(e) {
      const obj = e.type === "touchmove" ? e.changedTouches[0] : e;
      e.stopPropagation();
      movecb(obj.pageX - ox, obj.pageY - oy);
    }
    function done(e) {
      const obj = e.type === "touchend" ? e.changedTouches[0] : e;
      if (obj.pageX && obj.pageY)
        movecb(obj.pageX - ox, obj.pageY - oy);
      document.removeEventListener("mouseup", done);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", done);
      donecb();
    }
    function remove() {
      el.removeEventListener("mousedown", start);
      el.removeEventListener("touchstart", start);
    }
    return { remove };
  };
  var dragger_default = Dragger;

  // build/js/rect.js
  var Rect = class {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.w = 0;
      this.h = 0;
    }
    set x1(v) {
      this.w = this.x2 - v;
      this.x = v;
    }
    set y1(v) {
      this.h = this.y2 - v;
      this.y = v;
    }
    get x2() {
      return this.x + this.w;
    }
    set x2(x) {
      this.w = x - this.x;
    }
    get y2() {
      return this.y + this.h;
    }
    get aspect() {
      return this.w / this.h;
    }
    set y2(y) {
      this.h = y - this.y;
    }
    round() {
      return Rect.create(
        Math.round(this.x),
        Math.round(this.y),
        Math.round(this.w),
        Math.round(this.h)
      );
    }
    normalize() {
      const [x1, y1, x2, y2] = [
        Math.min(this.x, this.x2),
        Math.min(this.y, this.y2),
        Math.max(this.x, this.x2),
        Math.max(this.y, this.y2)
      ];
      return Rect.create(x1, y1, x2 - x1, y2 - y1);
    }
    rebound(w, h) {
      const rect = this.normalize();
      if (rect.x < 0)
        rect.x = 0;
      if (rect.y < 0)
        rect.y = 0;
      if (rect.x2 > w)
        rect.x = w - rect.w;
      if (rect.y2 > h)
        rect.y = h - rect.h;
      return rect;
    }
    scale(x, y) {
      y = y || x;
      return Rect.create(this.x * x, this.y * y, this.w * x, this.h * y);
    }
    unscale(x, y) {
      y = y || x;
      return Rect.create(this.x / x, this.y / y, this.w / x, this.h / y);
    }
    center(w, h) {
      return Rect.create(
        (w - this.w) / 2,
        (h - this.h) / 2,
        this.w,
        this.h
      );
    }
    toArray() {
      return [this.x, this.y, this.w, this.h];
    }
  };
  Rect.fromPoints = function(p1, p2) {
    const [x1, y1, x2, y2] = [
      Math.min(p1[0], p2[0]),
      Math.min(p1[1], p2[1]),
      Math.max(p1[0], p2[0]),
      Math.max(p1[1], p2[1])
    ];
    return Rect.create(x1, y1, x2 - x1, y2 - y1);
  };
  Rect.create = function(x = 0, y = 0, w = 0, h = 0) {
    const c = new Rect();
    c.x = x;
    c.y = y;
    c.w = w;
    c.h = h;
    return c;
  };
  Rect.from = function(el) {
    if (Array.isArray(el))
      return Rect.fromArray(el);
    const c = new Rect();
    c.x = el.offsetLeft;
    c.y = el.offsetTop;
    c.w = el.offsetWidth;
    c.h = el.offsetHeight;
    return c;
  };
  Rect.fromArray = function(args) {
    if (args.length === 4)
      return Rect.create.apply(this, args);
    else if (args.length === 2)
      return Rect.fromPoints(args[0], args[1]);
    else
      throw new Error("fromArray method problem");
  };
  Rect.sizeOf = function(el, y) {
    if (y)
      return Rect.create(0, 0, el, y);
    const c = new Rect();
    c.w = el.offsetWidth;
    c.h = el.offsetHeight;
    return c;
  };
  Rect.getMax = function(w, h, aspect) {
    if (w / h > aspect)
      return [h * aspect, h];
    else
      return [w, w / aspect];
  };
  Rect.fromPoint = function(point, w, h, quad = "br") {
    const c = new Rect();
    c.x = point[0];
    c.y = point[1];
    switch (quad) {
      case "br":
        c.x2 = c.x + w;
        c.y2 = c.y + h;
        break;
      case "bl":
        c.x2 = c.x - w;
        c.y2 = c.y + h;
        break;
      case "tl":
        c.x2 = c.x - w;
        c.y2 = c.y - h;
        break;
      case "tr":
        c.x2 = c.x + w;
        c.y2 = c.y - h;
        break;
    }
    return c;
  };
  var rect_default = Rect;

  // build/js/sticker.js
  var Sticker = class {
    constructor(rect, w, h, ord) {
      this.sw = w;
      this.sh = h;
      this.rect = rect;
      this.locked = this.getCornerPoint(this.getOppositeCorner(ord));
      this.stuck = this.getCornerPoint(ord);
    }
    move(x, y) {
      return rect_default.fromPoints(this.locked, this.translateStuckPoint(x, y));
    }
    getDragQuadrant(x, y) {
      const relx = this.locked[0] - x;
      const rely = this.locked[1] - y;
      if (relx < 0 && rely < 0)
        return "br";
      else if (relx >= 0 && rely >= 0)
        return "tl";
      else if (relx < 0 && rely >= 0)
        return "tr";
      else
        return "bl";
    }
    getMaxRect(x, y, aspect) {
      return rect_default.getMax(
        Math.abs(this.locked[0] - x),
        Math.abs(this.locked[1] - y),
        aspect
      );
    }
    translateStuckPoint(ox, oy) {
      const [xx, yy, sp] = this.stuck;
      var x = xx === null ? sp : xx + ox;
      var y = yy === null ? sp : yy + oy;
      if (x > this.sw)
        x = this.sw;
      if (y > this.sh)
        y = this.sh;
      if (x < 0)
        x = 0;
      if (y < 0)
        y = 0;
      if (this.aspect) {
        var [w, h] = this.getMaxRect(x, y, this.aspect);
        var quad = this.getDragQuadrant(x, y);
        var res = rect_default.fromPoint(this.locked, w, h, quad);
        return [res.x2, res.y2];
      }
      return [x, y];
    }
    getCornerPoint(h) {
      const p = this.rect;
      switch (h) {
        case "n":
          return [null, p.y, p.x];
        case "s":
          return [null, p.y2, p.x2];
        case "e":
          return [p.x2, null, p.y2];
        case "w":
          return [p.x, null, p.y];
        case "se":
          return [p.x2, p.y2];
        case "sw":
          return [p.x, p.y2];
        case "ne":
          return [p.x2, p.y];
        case "nw":
          return [p.x, p.y];
      }
    }
    getOppositeCorner(h) {
      switch (h) {
        case "n":
          return "se";
        case "s":
          return "nw";
        case "e":
          return "nw";
        case "w":
          return "se";
        case "se":
          return "nw";
        case "sw":
          return "ne";
        case "ne":
          return "sw";
        case "nw":
          return "se";
      }
    }
  };
  Sticker.create = function(rect, w, h, ord) {
    return new Sticker(rect, w, h, ord);
  };
  var sticker_default = Sticker;

  // build/js/confobj.js
  var ConfObj = class extends domobj_default {
    constructor(el, options = {}) {
      super(el);
      this.options = {};
      Object.defineProperty(this, "_optconf", {
        configurable: false,
        enumerable: false,
        value: {},
        writable: true
      });
      this.initOptions();
      this.setOptions(extend({}, defaults_default, options));
    }
    setOptions(options) {
      this.options = extend({}, this.options, options);
      Object.keys(options).forEach((key) => {
        if (this._optconf[key])
          this._optconf[key](options[key]);
      });
      return this;
    }
    initOptions() {
    }
  };
  var confobj_default = ConfObj;

  // build/js/keyboard.js
  var Keyboard = class {
    constructor(widget) {
      this.widget = widget;
      this.attach();
    }
    attach() {
      const c = this.widget;
      c.el.addEventListener("keydown", (e) => {
        const d = e.shiftKey ? 10 : 1;
        switch (e.key) {
          case "ArrowRight":
            c.nudge(d);
            break;
          case "ArrowLeft":
            c.nudge(-d);
            break;
          case "ArrowUp":
            c.nudge(0, -d);
            break;
          case "ArrowDown":
            c.nudge(0, d);
            break;
          case "Delete":
          case "Backspace":
            c.stage.removeWidget(c);
            break;
          default:
            return;
        }
        e.preventDefault();
      });
    }
  };
  Keyboard.attach = function(widget) {
    return new Keyboard(widget);
  };
  var keyboard_default = Keyboard;

  // build/js/animate.js
  var import_easing = __toESM(require_easing());
  function Animate(el, from, to, cb, frames = 30, efunc = "swing") {
    const p = ["x", "y", "w", "h"];
    const cur = from.normalize();
    efunc = typeof efunc === "string" ? import_easing.default[efunc] : efunc;
    var curFrame = 0;
    return new Promise((resolve, reject) => {
      function step() {
        if (curFrame < frames) {
          p.forEach((key) => {
            cur[key] = Math.round(efunc(curFrame, from[key], to[key] - from[key], frames));
          });
          cb(cur);
          curFrame++;
          requestAnimationFrame(step);
        } else {
          cb(to);
          resolve();
        }
      }
      requestAnimationFrame(step);
    });
  }
  var animate_default = Animate;

  // build/js/widget.js
  var Widget = class extends confobj_default {
    constructor(el, options = {}) {
      super(el, options);
      this.pos = rect_default.from(this.el);
      this.init();
    }
    init() {
      this.createHandles();
      this.createMover();
      this.attachFocus();
      keyboard_default.attach(this);
      return this;
    }
    initOptions() {
      this._optconf["aspectRatio"] = (ar) => {
        const p = this.pos;
        this.aspect = ar || null;
        if (this.aspect && p) {
          var [w, h] = rect_default.getMax(p.w, p.h, ar);
          this.render(rect_default.fromPoint([p.x, p.y], w, h));
        }
      };
    }
    attachToStage(stage) {
      this.stage = stage;
      this.emit("crop.attach");
    }
    attachFocus() {
      this.el.addEventListener("focus", (e) => {
        this.stage.activate(this);
        this.emit("crop.update");
      }, false);
    }
    animate(rect, frames, efunc) {
      const t = this;
      efunc = efunc || t.options.animateEasingFunction || "swing";
      frames = frames || t.options.animateFrames || 30;
      return animate_default(t.el, t.pos, rect, (r) => t.render(r.normalize()), frames, efunc).then(() => this.emit("crop.change"));
    }
    createMover() {
      var w, h;
      this.pos = rect_default.from(this.el);
      var stick;
      dragger_default(
        this.el,
        () => {
          const pe = this.el.parentElement;
          if (!this.stage.enabled)
            return false;
          [w, h] = [pe.offsetWidth, pe.offsetHeight];
          stick = rect_default.from(this.el);
          this.el.focus();
          this.stage.activate(this);
          return true;
        },
        (x, y) => {
          this.pos.x = stick.x + x;
          this.pos.y = stick.y + y;
          this.render(this.pos.rebound(w, h));
        },
        () => {
          this.emit("crop.change");
        }
      );
    }
    nudge(x = 0, y = 0) {
      const pe = this.el.parentElement;
      const [w, h] = [pe.offsetWidth, pe.offsetHeight];
      if (x)
        this.pos.x += x;
      if (y)
        this.pos.y += y;
      this.render(this.pos.rebound(w, h));
      this.emit("crop.change");
    }
    createHandles() {
      this.options.handles.forEach((c) => {
        const handle = handle_default.create("jcrop-handle " + c);
        handle.appendTo(this.el);
        var stick;
        dragger_default(
          handle.el,
          () => {
            if (!this.stage.enabled)
              return false;
            const pe = this.el.parentElement;
            const w = pe.offsetWidth;
            const h = pe.offsetHeight;
            stick = sticker_default.create(rect_default.from(this.el), w, h, c);
            if (this.aspect)
              stick.aspect = this.aspect;
            this.el.focus();
            this.emit("crop.active");
            return true;
          },
          (x, y) => this.render(stick.move(x, y)),
          () => {
            this.emit("crop.change");
          }
        );
      });
      return this;
    }
    isActive() {
      return this.stage && this.stage.active === this;
    }
    get sel() {
      const s = this.stage;
      return this.pos.scale(s.scalex, s.scaley);
    }
    render(r) {
      r = r || this.pos;
      this.el.style.top = Math.round(r.y) + "px";
      this.el.style.left = Math.round(r.x) + "px";
      this.el.style.width = Math.round(r.w) + "px";
      this.el.style.height = Math.round(r.h) + "px";
      this.pos = r;
      this.emit("crop.update");
      return this;
    }
    doneDragging() {
      this.pos = rect_default.from(this.el);
    }
  };
  Widget.create = function(options = {}) {
    const el = document.createElement("div");
    const opts = extend({}, defaults_default, options);
    el.setAttribute("tabindex", "0");
    el.className = opts.cropperClass || "jcrop-widget";
    return new (options.widgetConstructor || Widget)(el, opts);
  };
  var widget_default = Widget;

  // build/js/shade.js
  var Manager = class {
    constructor(el) {
      if (typeof el === "string")
        el = document.getElementById(el);
      this.el = el;
      this.shades = {};
    }
    init(options = {}) {
      this.active = options.shade !== void 0 ? options.shade : true;
      this.keys().forEach(
        (key) => {
          this.shades[key] = Shade.create(options, key);
        }
      );
      this.el.addEventListener("crop.update", (e) => {
        if (e.cropTarget.isActive() && e.cropTarget.options.shade) {
          this.adjust(e.cropTarget.pos);
        }
      }, false);
      this.enable();
    }
    adjust(rect) {
      const f = rect_default.from(this.el);
      const s = this.shades;
      s.t.h = rect.y;
      s.b.h = f.h - rect.y2;
      s.t.w = s.b.w = Math.floor(rect.w);
      s.l.w = s.t.x = s.b.x = Math.ceil(rect.x);
      s.r.w = f.w - (Math.ceil(rect.x) + Math.floor(rect.w));
    }
    keys() {
      return ["t", "l", "r", "b"];
    }
    enable() {
      const s = this.shades;
      this.keys().forEach((key) => s[key].insert(this.el));
    }
    disable() {
      const s = this.shades;
      this.keys().forEach((key) => s[key].remove());
    }
    setStyle(color, opacity) {
      const s = this.shades;
      this.keys().forEach((key) => s[key].color(color).opacity(opacity));
    }
  };
  Manager.attach = function(i) {
    const el = i.el;
    const m = new Manager(el);
    m.init(i.options);
    i.shades = m;
    i._optconf["shade"] = (v) => i.updateShades();
    i._optconf["shadeColor"] = (v) => m.setStyle(v);
    i._optconf["shadeOpacity"] = (v) => m.setStyle(null, v);
    return m;
  };
  var Shade = class extends domobj_default {
    insert(el) {
      el.appendChild(this.el);
    }
    remove() {
      this.el.remove();
    }
    set w(w) {
      this.el.style.width = w + "px";
    }
    set h(h) {
      this.el.style.height = h + "px";
    }
    set x(l) {
      this.el.style.left = l + "px";
    }
    color(c) {
      if (c)
        this.el.style.backgroundColor = c;
      return this;
    }
    opacity(o) {
      if (o)
        this.el.style.opacity = o;
      return this;
    }
  };
  Shade.create = function(o, key) {
    const el = document.createElement("div");
    const clname = o.shadeClass || "jcrop-shade";
    el.className = `${clname} ${key}`;
    const obj = new Shade(el);
    return obj.color(o.shadeColor).opacity(o.shadeOpacity);
  };
  Shade.Manager = Manager;
  var shade_default = Shade;

  // build/js/stage/dom.js
  var Stage = class extends confobj_default {
    constructor(el, options) {
      super(el, options);
      this.scalex = 1;
      this.scaley = 1;
      this.crops = /* @__PURE__ */ new Set();
      this.active = null;
      this.enabled = true;
      this.init();
    }
    init() {
      this.initStageDrag();
      shade_default.Manager.attach(this);
    }
    initOptions() {
      this._optconf["multi"] = (v) => {
        if (!v)
          this.limitWidgets();
      };
    }
    setEnabled(v = true) {
      const clname = this.options.disabledClass || "jcrop-disable";
      this[v ? "removeClass" : "addClass"](clname);
      this.enabled = !!v;
      return this;
    }
    focus() {
      if (!this.enabled)
        return false;
      if (this.active)
        this.active.el.focus();
      else
        this.el.focus();
      return this;
    }
    limitWidgets(n = 1) {
      if (!this.crops || n < 1)
        return false;
      const crops = Array.from(this.crops);
      while (crops.length > n)
        this.removeWidget(crops.shift());
      return this;
    }
    canCreate() {
      const n = this.crops.size;
      const o = this.options;
      if (!this.enabled)
        return false;
      if (o.multiMax !== null && n >= o.multiMax)
        return false;
      if (!o.multi && n >= o.multiMin)
        return false;
      return true;
    }
    canRemove() {
      const n = this.crops.size;
      const o = this.options;
      if (!this.enabled)
        return false;
      if (this.active && !this.active.options.canRemove)
        return false;
      if (!o.canRemove || n <= o.multiMin)
        return false;
      return true;
    }
    initStageDrag() {
      var crop, pos, w, h, stick;
      dragger_default(
        this.el,
        (x, y, e) => {
          if (!this.canCreate())
            return false;
          crop = (this.options.widgetConstructor || widget_default).create(this.options);
          pos = crop.pos;
          pos.x = e.pageX - this.el.offsetParent.offsetLeft - this.el.offsetLeft;
          pos.y = e.pageY - this.el.offsetParent.offsetTop - this.el.offsetTop;
          w = this.el.offsetWidth;
          h = this.el.offsetHeight;
          this.addWidget(crop);
          stick = sticker_default.create(pos, w, h, "se");
          if (this.options.aspectRatio)
            stick.aspect = this.options.aspectRatio;
          crop.render(pos);
          this.focus();
          return true;
        },
        (x, y) => {
          crop.render(stick.move(x, y));
        },
        () => {
          crop.emit("crop.change");
        }
      );
    }
    reorderWidgets() {
      var z = 10;
      this.crops.forEach((crop) => {
        crop.el.style.zIndex = z++;
        if (this.active === crop)
          crop.addClass("active");
        else
          crop.removeClass("active");
      });
      this.refresh();
    }
    activate(widget) {
      if (!this.enabled)
        return this;
      widget = widget || Array.from(this.crops).pop();
      if (widget) {
        if (this.active === widget)
          return;
        this.active = widget;
        this.crops.delete(widget);
        this.crops.add(widget);
        this.reorderWidgets();
        this.active.el.focus();
        this.options.shade && this.shades.enable();
        widget.emit("crop.activate");
      } else {
        this.shades.disable();
      }
      return this;
    }
    addWidget(widget) {
      widget.attachToStage(this);
      widget.appendTo(this.el);
      this.activate(widget);
      return this;
    }
    newWidget(rect, options = {}) {
      options = extend({}, this.options, options);
      const crop = (this.options.widgetConstructor || widget_default).create(options);
      crop.render(rect.unscale(this.scalex, this.scaley));
      this.addWidget(crop);
      crop.el.focus();
      return crop;
    }
    removeWidget(widget) {
      if (!this.canRemove())
        return false;
      widget.emit("crop.remove");
      widget.el.remove();
      this.crops.delete(widget);
      this.activate();
    }
    refresh() {
      this.crops.forEach((crop) => {
        crop.render();
      });
      this.options.shade && this.active && this.shades.adjust(this.active.pos);
    }
    updateShades() {
      if (!this.shades)
        return;
      if (this.options.shade)
        this.shades.enable();
      else
        this.shades.disable();
      this.options.shade && this.active && this.shades.adjust(this.active.pos);
      return this;
    }
    setOptions(options = {}) {
      super.setOptions(options);
      if (this.crops)
        Array.from(this.crops).forEach((i) => i.setOptions(options));
    }
    destroy() {
    }
  };
  var dom_default = Stage;

  // node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
  var MapShim = function() {
    if (typeof Map !== "undefined") {
      return Map;
    }
    function getIndex(arr, key) {
      var result = -1;
      arr.some(function(entry, index2) {
        if (entry[0] === key) {
          result = index2;
          return true;
        }
        return false;
      });
      return result;
    }
    return function() {
      function class_1() {
        this.__entries__ = [];
      }
      Object.defineProperty(class_1.prototype, "size", {
        get: function() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      class_1.prototype.get = function(key) {
        var index2 = getIndex(this.__entries__, key);
        var entry = this.__entries__[index2];
        return entry && entry[1];
      };
      class_1.prototype.set = function(key, value) {
        var index2 = getIndex(this.__entries__, key);
        if (~index2) {
          this.__entries__[index2][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      class_1.prototype.delete = function(key) {
        var entries = this.__entries__;
        var index2 = getIndex(entries, key);
        if (~index2) {
          entries.splice(index2, 1);
        }
      };
      class_1.prototype.has = function(key) {
        return !!~getIndex(this.__entries__, key);
      };
      class_1.prototype.clear = function() {
        this.__entries__.splice(0);
      };
      class_1.prototype.forEach = function(callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    }();
  }();
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
  var global$1 = function() {
    if (typeof global !== "undefined" && global.Math === Math) {
      return global;
    }
    if (typeof self !== "undefined" && self.Math === Math) {
      return self;
    }
    if (typeof window !== "undefined" && window.Math === Math) {
      return window;
    }
    return Function("return this")();
  }();
  var requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === "function") {
      return requestAnimationFrame.bind(global$1);
    }
    return function(callback) {
      return setTimeout(function() {
        return callback(Date.now());
      }, 1e3 / 60);
    };
  }();
  var trailingTimeout = 2;
  function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }
      if (trailingCall) {
        proxy();
      }
    }
    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }
    function proxy() {
      var timeStamp = Date.now();
      if (leadingCall) {
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        }
        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }
      lastCallTime = timeStamp;
    }
    return proxy;
  }
  var REFRESH_DELAY = 20;
  var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
  var mutationObserverSupported = typeof MutationObserver !== "undefined";
  var ResizeObserverController = function() {
    function ResizeObserverController2() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    ResizeObserverController2.prototype.addObserver = function(observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      }
      if (!this.connected_) {
        this.connect_();
      }
    };
    ResizeObserverController2.prototype.removeObserver = function(observer) {
      var observers2 = this.observers_;
      var index2 = observers2.indexOf(observer);
      if (~index2) {
        observers2.splice(index2, 1);
      }
      if (!observers2.length && this.connected_) {
        this.disconnect_();
      }
    };
    ResizeObserverController2.prototype.refresh = function() {
      var changesDetected = this.updateObservers_();
      if (changesDetected) {
        this.refresh();
      }
    };
    ResizeObserverController2.prototype.updateObservers_ = function() {
      var activeObservers = this.observers_.filter(function(observer) {
        return observer.gatherActive(), observer.hasActive();
      });
      activeObservers.forEach(function(observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    ResizeObserverController2.prototype.connect_ = function() {
      if (!isBrowser || this.connected_) {
        return;
      }
      document.addEventListener("transitionend", this.onTransitionEnd_);
      window.addEventListener("resize", this.refresh);
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener("DOMSubtreeModified", this.refresh);
        this.mutationEventsAdded_ = true;
      }
      this.connected_ = true;
    };
    ResizeObserverController2.prototype.disconnect_ = function() {
      if (!isBrowser || !this.connected_) {
        return;
      }
      document.removeEventListener("transitionend", this.onTransitionEnd_);
      window.removeEventListener("resize", this.refresh);
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener("DOMSubtreeModified", this.refresh);
      }
      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
      var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
      var isReflowProperty = transitionKeys.some(function(key) {
        return !!~propertyName.indexOf(key);
      });
      if (isReflowProperty) {
        this.refresh();
      }
    };
    ResizeObserverController2.getInstance = function() {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController2();
      }
      return this.instance_;
    };
    ResizeObserverController2.instance_ = null;
    return ResizeObserverController2;
  }();
  var defineConfigurable = function(target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return target;
  };
  var getWindowOf = function(target) {
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    return ownerGlobal || global$1;
  };
  var emptyRect = createRectInit(0, 0, 0, 0);
  function toFloat(value) {
    return parseFloat(value) || 0;
  }
  function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function(size, position) {
      var value = styles["border-" + position + "-width"];
      return size + toFloat(value);
    }, 0);
  }
  function getPaddings(styles) {
    var positions = ["top", "right", "bottom", "left"];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position = positions_1[_i];
      var value = styles["padding-" + position];
      paddings[position] = toFloat(value);
    }
    return paddings;
  }
  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }
  function getHTMLElementContentRect(target) {
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    var width = toFloat(styles.width), height = toFloat(styles.height);
    if (styles.boxSizing === "border-box") {
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, "left", "right") + horizPad;
      }
      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, "top", "bottom") + vertPad;
      }
    }
    if (!isDocumentElement(target)) {
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight;
      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }
      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
  }
  var isSVGGraphicsElement = function() {
    if (typeof SVGGraphicsElement !== "undefined") {
      return function(target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    }
    return function(target) {
      return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
    };
  }();
  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }
  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
  }
  function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    defineConfigurable(rect, {
      x,
      y,
      width,
      height,
      top: y,
      right: x + width,
      bottom: height + y,
      left: x
    });
    return rect;
  }
  function createRectInit(x, y, width, height) {
    return { x, y, width, height };
  }
  var ResizeObservation = function() {
    function ResizeObservation2(target) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }
    ResizeObservation2.prototype.isActive = function() {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    ResizeObservation2.prototype.broadcastRect = function() {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };
    return ResizeObservation2;
  }();
  var ResizeObserverEntry = function() {
    function ResizeObserverEntry2(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);
      defineConfigurable(this, { target, contentRect });
    }
    return ResizeObserverEntry2;
  }();
  var ResizeObserverSPI = function() {
    function ResizeObserverSPI2(callback, controller, callbackCtx) {
      this.activeObservations_ = [];
      this.observations_ = new MapShim();
      if (typeof callback !== "function") {
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      }
      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    ResizeObserverSPI2.prototype.observe = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (observations.has(target)) {
        return;
      }
      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this);
      this.controller_.refresh();
    };
    ResizeObserverSPI2.prototype.unobserve = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (!observations.has(target)) {
        return;
      }
      observations.delete(target);
      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    ResizeObserverSPI2.prototype.disconnect = function() {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    ResizeObserverSPI2.prototype.gatherActive = function() {
      var _this = this;
      this.clearActive();
      this.observations_.forEach(function(observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    ResizeObserverSPI2.prototype.broadcastActive = function() {
      if (!this.hasActive()) {
        return;
      }
      var ctx = this.callbackCtx_;
      var entries = this.activeObservations_.map(function(observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    ResizeObserverSPI2.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    };
    ResizeObserverSPI2.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI2;
  }();
  var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
  var ResizeObserver = function() {
    function ResizeObserver2(callback) {
      if (!(this instanceof ResizeObserver2)) {
        throw new TypeError("Cannot call a class as a function.");
      }
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }
    return ResizeObserver2;
  }();
  [
    "observe",
    "unobserve",
    "disconnect"
  ].forEach(function(method) {
    ResizeObserver.prototype[method] = function() {
      var _a;
      return (_a = observers.get(this))[method].apply(_a, arguments);
    };
  });
  var index = function() {
    if (typeof global$1.ResizeObserver !== "undefined") {
      return global$1.ResizeObserver;
    }
    return ResizeObserver;
  }();
  var ResizeObserver_es_default = index;

  // build/js/stage/image.js
  function div(clname, el = document.createElement("div")) {
    el.className = clname;
    return el;
  }
  var ImageStage = class extends dom_default {
    constructor(el, options) {
      const wrapper = div("jcrop-stage jcrop-image-stage");
      el.parentNode.insertBefore(wrapper, el);
      super(wrapper, options);
      this.srcEl = el;
      el.onload = this.resizeToImage.bind(this);
      this.resizeToImage();
      this.initResizeObserver();
    }
    initResizeObserver() {
      const ro = new ResizeObserver_es_default((entries, observer) => {
        this.resizeToImage();
      });
      ro.observe(this.srcEl);
    }
    resizeToImage() {
      const [w, h] = this.getImageDimensions();
      const [nw, nh] = this.getNaturalDimensions();
      this.el.style.width = w + "px";
      this.el.style.height = h + "px";
      this.rescaleWidgets(w / nw, h / nh);
      this.scalex = nw / w;
      this.scaley = nh / h;
      this.refresh();
    }
    rescaleWidgets(x, y) {
      this.crops.forEach((crop) => {
        crop.pos = crop.sel.scale(x, y);
      });
    }
    getImageDimensions() {
      return [this.srcEl.width, this.srcEl.height];
    }
    getNaturalDimensions() {
      return [
        this.srcEl.naturalWidth || this.srcEl.width,
        this.srcEl.naturalHeight || this.srcEl.height
      ];
    }
    destroy() {
      this.el.remove();
    }
  };
  var image_default = ImageStage;

  // build/js/jcrop.js
  var import_easing2 = __toESM(require_easing());

  // build/js/loader.js
  function Loader(img) {
    if (typeof img === "string")
      img = document.getElementById(img);
    return new Promise(function(resolve, reject) {
      if (Loader.check(img))
        return resolve(img);
      function handler(e) {
        img.removeEventListener("load", handler);
        img.removeEventListener("error", handler);
        e.type === "load" ? resolve(img) : reject(img);
      }
      img.addEventListener("load", handler);
      img.addEventListener("error", handler);
    });
  }
  Loader.check = function(img) {
    if (!img.complete)
      return false;
    if (img.naturalWidth === 0)
      return false;
    return true;
  };
  var loader_default = Loader;

  // build/js/jcrop.js
  function attach(el, options = {}) {
    options = extend({}, defaults_default, options);
    if (typeof el === "string")
      el = document.getElementById(el);
    if (el.tagName === "IMG")
      return new image_default(el, options);
    return new dom_default(el, options);
  }
  var jcrop_default = { Stage: dom_default, defaults: defaults_default, Dragger: dragger_default, Widget: widget_default, Rect: rect_default, Handle: handle_default, Sticker: sticker_default, easing: import_easing2.default, load: loader_default, attach, Shade: shade_default, DomObj: domobj_default };
  return __toCommonJS(jcrop_exports);
})();
//# sourceMappingURL=jcrop.js.map
