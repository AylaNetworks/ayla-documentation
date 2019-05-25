! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("ayla", [], t) : "object" == typeof exports ? exports.ayla = t() : e.ayla = t()
}(window, function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var s = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(s.exports, s, s.exports, r), s.l = !0, s.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 3)
    }([function(e, t, r) {
        var n, s, i, a, o, u, c, l, d, h, f, p, v, y, m;
        i = function(e, t, r) {
            if (!d(t) || f(t) || p(t) || v(t) || l(t)) return t;
            var n, s = 0,
                a = 0;
            if (h(t))
                for (n = [], a = t.length; s < a; s++) n.push(i(e, t[s], r));
            else
                for (var o in n = {}, t) Object.prototype.hasOwnProperty.call(t, o) && (n[e(o, r)] = i(e, t[o], r));
            return n
        }, a = function(e) {
            return y(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(e, t) {
                return t ? t.toUpperCase() : ""
            })).substr(0, 1).toLowerCase() + e.substr(1)
        }, o = function(e) {
            var t = a(e);
            return t.substr(0, 1).toUpperCase() + t.substr(1)
        }, u = function(e, t) {
            return function(e, t) {
                var r = (t = t || {}).separator || "_",
                    n = t.split || /(?=[A-Z])/;
                return e.split(n).join(r)
            }(e, t).toLowerCase()
        }, c = Object.prototype.toString, l = function(e) {
            return "function" == typeof e
        }, d = function(e) {
            return e === Object(e)
        }, h = function(e) {
            return "[object Array]" == c.call(e)
        }, f = function(e) {
            return "[object Date]" == c.call(e)
        }, p = function(e) {
            return "[object RegExp]" == c.call(e)
        }, v = function(e) {
            return "[object Boolean]" == c.call(e)
        }, y = function(e) {
            return (e -= 0) == e
        }, m = function(e, t) {
            var r = t && "process" in t ? t.process : t;
            return "function" != typeof r ? e : function(t, n) {
                return r(t, e, n)
            }
        }, void 0 === (s = "function" == typeof(n = {
            camelize: a,
            decamelize: u,
            pascalize: o,
            depascalize: u,
            camelizeKeys: function(e, t) {
                return i(m(a, t), e)
            },
            decamelizeKeys: function(e, t) {
                return i(m(u, t), e, t)
            },
            pascalizeKeys: function(e, t) {
                return i(m(o, t), e)
            },
            depascalizeKeys: function() {
                return this.decamelizeKeys.apply(this, arguments)
            }
        }) ? n.call(t, r, t, e) : n) || (e.exports = s)
    }, function(e, t, r) {
        "use strict";
        var n, s = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            },
            function(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = function(e) {
            function t(t, r) {
                var n = e.call(this, r) || this;
                return n.type = i.AylaError, n.type = t, n
            }
            return s(t, e), t.generalError = function(e) {
                return new t(i.AylaError, e)
            }, t
        }(Error);
        t.default = a,
            function(e) {
                e[e.AylaError = 0] = "AylaError", e[e.AuthError = 1] = "AuthError", e[e.NetworkError = 2] = "NetworkError", e[e.JsonError = 3] = "JsonError", e[e.ServerError = 4] = "ServerError", e[e.Timeout = 5] = "Timeout", e[e.InvalidArgument = 6] = "InvalidArgument", e[e.Precondition = 7] = "Precondition", e[e.AppPermission = 8] = "AppPermission", e[e.Internal = 9] = "Internal", e[e.OperationIncompleteError = 10] = "OperationIncompleteError"
            }(i = t.ErrorType || (t.ErrorType = {}))
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))(function(s, i) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        e.done ? s(e.value) : new r(function(t) {
                            t(e.value)
                        }).then(a, o)
                    }
                    u((n = n.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function(e, t) {
                var r, n, s, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (s = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(n, i[1])).done) return s;
                                switch (n = 0, s && (i = [0, s.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < s[1]) {
                                            a.label = s[1], s = i;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(i);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(r(1)),
            o = function() {
                function e() {}
                return e.authHeader = function(e) {
                    return {
                        "Content-Type": "application/json",
                        Authorization: e.getAuthHeaderValue()
                    }
                }, e.handleServerErrorResponse = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r;
                        return s(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    t = new a.default(a.ErrorType.ServerError, e.status + " " + e.statusText), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), r = t, [4, e.text()];
                                case 2:
                                    return r.message = n.sent(), [3, 4];
                                case 3:
                                    return n.sent(), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e
            }();
        t.default = o
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(r(4)),
            i = n(r(23)),
            a = n(r(22)),
            o = function() {
                function e(e) {
                    this.systemSettings = e, this.loginManager = new i.default
                }
                return e.shared = function() {
                    return e._instance
                }, e.initialize = function(t) {
                    return e._instance ? (e._instance.systemSettings = t, e._instance) : (e._instance = new e(t), e._instance)
                }, e.prototype.signInSuccessful = function(e, t) {
                    this.sessionManager = new a.default(e, t)
                }, e.prototype.getServiceUrl = function(e, t) {
                    var r = s.default.getBaseServiceURL(e, this.systemSettings.serviceType, this.systemSettings.serviceLocation);
                    return t && (r += t), r
                }, e
            }();
        t.default = o
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, s, i, a, o, u, c, l, d, h, f, p, v, y, m, g, S, b, P, w, E, T = r(35),
            j = function() {
                function e() {}
                return e.getBaseServiceURL = function(e, t, r) {
                    var s = this.userServices;
                    switch (e) {
                        case n.User:
                            s = this.userServices;
                            break;
                        case n.Device:
                            s = this.deviceServices;
                            break;
                        case n.Rules:
                            s = this.ruleServices;
                            break;
                        case n.mdssSubscription:
                            s = this.mdssSubscriptionServiceUrlMap;
                            break;
                        case n.Datastream:
                            s = this.datastreamServiceUrlMap
                    }
                    return s[r][t]
                }, e.userServices = ((s = {})[T.ServiceLocation.USA] = ((i = {})[T.ServiceType.Field] = "https://user-field.aylanetworks.com/", i[T.ServiceType.Development] = "https://user-dev.aylanetworks.com/", i[T.ServiceType.Staging] = "https://staging-user.ayladev.com/", i[T.ServiceType.Demo] = "https://staging-user.ayladev.com/", i), s[T.ServiceLocation.China] = ((a = {})[T.ServiceType.Field] = "https://user-field.ayla.com.cn/", a[T.ServiceType.Development] = "https://user-dev.ayla.com.cn/", a[T.ServiceType.Staging] = "https://staging-user.ayladev.com/", a[T.ServiceType.Demo] = "https://staging-user.ayladev.com/", a), s[T.ServiceLocation.Europe] = ((o = {})[T.ServiceType.Field] = "https://user-field-eu.aylanetworks.com/", o[T.ServiceType.Development] = "https://user-dev.aylanetworks.com/", o[T.ServiceType.Staging] = "https://staging-user.ayladev.com/", o[T.ServiceType.Demo] = "https://staging-user.ayladev.com/", o), s), e.deviceServices = ((u = {})[T.ServiceLocation.USA] = ((c = {})[T.ServiceType.Field] = "https://ads-field.aylanetworks.com/", c[T.ServiceType.Development] = "https://ads-dev.aylanetworks.com/", c[T.ServiceType.Staging] = "https://staging-ads.ayladev.com/", c[T.ServiceType.Demo] = "https://staging-ads.ayladev.com/", c), u[T.ServiceLocation.China] = ((l = {})[T.ServiceType.Field] = "https://ads-field.ayla.com.cn/", l[T.ServiceType.Development] = "https://ads-dev.ayla.com.cn/", l[T.ServiceType.Staging] = "https://staging-ads.ayladev.com/", l[T.ServiceType.Demo] = "https://staging-ads.ayladev.com/", l), u[T.ServiceLocation.Europe] = ((d = {})[T.ServiceType.Field] = "https://ads-eu.aylanetworks.com/", d[T.ServiceType.Development] = "https://ads-dev.aylanetworks.com/", d[T.ServiceType.Staging] = "https://staging-ads.ayladev.com/", d[T.ServiceType.Demo] = "https://staging-ads.ayladev.com/", d), u), e.ruleServices = ((h = {})[T.ServiceLocation.USA] = ((f = {})[T.ServiceType.Field] = "https://ruleservice-field.aylanetworks.com/", f[T.ServiceType.Development] = "https://rulesservice-dev.aylanetworks.com/", f[T.ServiceType.Staging] = "https://staging-rulesservice.ayladev.com/", f[T.ServiceType.Demo] = "https://staging-rulesservice.ayladev.com/", f), h[T.ServiceLocation.China] = ((p = {})[T.ServiceType.Field] = "https://ruleservice-field.ayla.com.cn/", p[T.ServiceType.Development] = "https://rulesservice-dev.ayla.com.cn/", p[T.ServiceType.Staging] = "https://staging-rulesservice.ayladev.com/", p[T.ServiceType.Demo] = "https://staging-rulesservice.ayladev.com/", p), h[T.ServiceLocation.Europe] = ((v = {})[T.ServiceType.Field] = "https://ruleservice-field-eu.aylanetworks.com/", v[T.ServiceType.Development] = "https://rulesservice-dev.aylanetworks.com/", v[T.ServiceType.Staging] = "https://staging-rulesservice.ayladev.com/", v[T.ServiceType.Demo] = "https://staging-rulesservice.ayladev.com/", v), h), e.mdssSubscriptionServiceUrlMap = ((y = {})[T.ServiceLocation.USA] = ((m = {})[T.ServiceType.Field] = "https://mdss-field.aylanetworks.com/", m[T.ServiceType.Development] = "https://mdss-dev.aylanetworks.com/", m[T.ServiceType.Staging] = "https://staging-mdss.ayladev.com/", m[T.ServiceType.Demo] = "https://staging-dstr.ayladev.com/", m), y[T.ServiceLocation.China] = ((g = {})[T.ServiceType.Field] = "https://mdss-field.ayla.com.cn/", g[T.ServiceType.Development] = "https://mdss-dev.ayla.com.cn/", g[T.ServiceType.Staging] = "https://staging-mdss.ayladev.com/", g[T.ServiceType.Demo] = "https://stream.ayla.com.cn/", g), y[T.ServiceLocation.Europe] = ((S = {})[T.ServiceType.Field] = "https://mdss-field-eu.aylanetworks.com/", S[T.ServiceType.Development] = "https://mdss-dev.aylanetworks.com/", S[T.ServiceType.Staging] = "https://staging-mdss.ayladev.com/", S[T.ServiceType.Demo] = "https://staging-dstr.ayladev.com/", S), y), e.datastreamServiceUrlMap = ((b = {})[T.ServiceLocation.USA] = ((P = {})[T.ServiceType.Field] = "https://mstream-field.aylanetworks.com/", P[T.ServiceType.Development] = "https://mstream-dev.aylanetworks.com/", P[T.ServiceType.Staging] = "https://staging-mstream.ayladev.com/", P[T.ServiceType.Demo] = "https://staging-mdss.ayladev.com/", P), b[T.ServiceLocation.China] = ((w = {})[T.ServiceType.Field] = "https://mstream-field.ayla.com.cn/", w[T.ServiceType.Development] = "https://mstream-dev.ayla.com.cn/", w[T.ServiceType.Staging] = "https://staging-mstream.ayladev.com/", w[T.ServiceType.Demo] = "https://stream.ayla.com.cn/", w), b[T.ServiceLocation.Europe] = ((E = {})[T.ServiceType.Field] = "https://mstream-field-eu.aylanetworks.com/", E[T.ServiceType.Development] = "https://mstream-dev.aylanetworks.com/", E[T.ServiceType.Staging] = "https://staging-mstream.ayladev.com/", E[T.ServiceType.Demo] = "https://staging-mdss.ayladev.com/", E), b), e
            }();
        t.default = j,
            function(e) {
                e[e.Device = 0] = "Device", e[e.User = 1] = "User", e[e.Datastream = 2] = "Datastream", e[e.mdssSubscription = 3] = "mdssSubscription", e[e.Log = 4] = "Log", e[e.Rules = 5] = "Rules"
            }(n = t.CloudService || (t.CloudService = {}))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.parameterizeArray = function(e, t) {
                return "?" + t.map(function(t) {
                    return e + "[]=" + encodeURIComponent(t)
                }).join("&")
            }, e.appendParameters = function(e, t) {
                var r = e;
                return t.forEach(function(e, t) {
                    var n = "&";
                    r.indexOf("?") < 0 && (n = "?"), r += "" + n + t + "=" + encodeURIComponent(e)
                }), r
            }, e
        }();
        t.default = n
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))(function(s, i) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        e.done ? s(e.value) : new r(function(t) {
                            t(e.value)
                        }).then(a, o)
                    }
                    u((n = n.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function(e, t) {
                var r, n, s, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (s = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(n, i[1])).done) return s;
                                switch (n = 0, s && (i = [0, s.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < s[1]) {
                                            a.label = s[1], s = i;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(i);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, o, u, c = i(r(7)),
            l = i(r(30)),
            d = i(r(5)),
            h = i(r(2)),
            f = i(r(12)),
            p = i(r(3)),
            v = i(r(9)),
            y = r(28),
            m = i(r(8)),
            g = i(r(11)),
            S = i(r(27)),
            b = i(r(1)),
            P = r(0),
            w = function() {
                function e() {
                    this.connectedAt = "", this.connectionStatus = u.Offline, this.dsn = "", this.hasProperties = !1, this.ip = "", this.key = "", this.lanEnabled = !1, this.lanIp = "", this.lat = "", this.lng = "", this.mac = "", this.model = "", this.moduleUpdatedAt = "", this.oem = "", this.oemModel = "", this.productClass = "", this.productName = "", this.swVersion = "", this.ssid = "", this.userId = -1, this.templateId = -1, this.registrationType = o.None, this.deviceName = "", this.lastUpdateSource = a.CLOUD, this.propertyMap = new Map, this.deviceChangeListeners = new Set, this.pollIntervalMs = e.DEFAULT_POLL_TIMEOUT_MS, this.isPollingActive = !0
                }
                return e.prototype.addListener = function(e) {
                    this.deviceChangeListeners.add(e)
                }, e.prototype.removeListener = function(e) {
                    this.deviceChangeListeners.delete(e)
                }, e.prototype.getProperties = function() {
                    return Array.from(this.propertyMap.values())
                }, e.prototype.getProperty = function(e) {
                    return this.propertyMap.get(e)
                }, e.prototype.fetchProperties = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new Error("No device manager is available"))];
                                    if (!this.deviceManager.sessionManager) return [2, Promise.reject(new Error("Session is not active"))];
                                    if (!this.key) return [2, Promise.reject(new Error("Device " + this.dsn + " does not have a key"))];
                                    t = this.deviceManager.deviceServiceUrl("apiv1/dsns/" + this.dsn + "/properties.json"), e && e.length > 0 && (t += d.default.parameterizeArray("names", e)), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 6, , 7]), [4, c.default(t, {
                                        method: "GET",
                                        headers: h.default.authHeader(this.deviceManager.sessionManager)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), i = n.map(function(e) {
                                        var t = new l.default,
                                            r = e.property;
                                        return Object.assign(t, {
                                            readonly: r.read_only,
                                            metadata: r.metadata,
                                            key: r.key,
                                            baseType: r.base_type,
                                            value: r.value,
                                            dataUpdatedAt: r.data_updated_at,
                                            name: r.name,
                                            displayName: r.display_name,
                                            direction: r.direction,
                                            type: r.type,
                                            ackEnabled: r.ack_enabled,
                                            ackStatus: r.ack_status,
                                            ackMessage: r.ack_message,
                                            ackedAt: r.acked_at
                                        }), t
                                    }), this.mergeProperties(i), [2, i];
                                case 4:
                                    return [2, Promise.reject(new b.default(b.ErrorType.ServerError, r.statusText))];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return a = s.sent(), [2, Promise.reject(new b.default(b.ErrorType.AylaError, a.message))];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.startPolling = function() {
                    return this.isPollingActive || (this.isPollingActive = !0, this.pollProperties()), !0
                }, e.prototype.stopPolling = function() {
                    this.pollTimer && clearTimeout(this.pollTimer), this.isPollingActive = !1
                }, e.prototype.pollProperties = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n = this;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    console.log("Poll properties for " + this.dsn), (t = p.default.shared().systemSettings.deviceDetailProvider) && (e = t.getManagedPropertyNames(this)), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), [4, this.fetchProperties(e)];
                                case 2:
                                    return s.sent(), this.pollTimer = setTimeout(function() {
                                        n.pollProperties()
                                    }, this.pollIntervalMs), [3, 4];
                                case 3:
                                    return r = s.sent(), this.pollTimer = setTimeout(function() {
                                        n.pollProperties()
                                    }, this.pollIntervalMs), this.notifyError(r), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.notifyDeviceChanged = function(e) {
                    var t = this;
                    this.deviceChangeListeners.forEach(function(r) {
                        return r.deviceChanged(t, e)
                    })
                }, e.prototype.notifyError = function(e) {
                    var t = this;
                    this.deviceChangeListeners.forEach(function(r) {
                        return r.deviceError && r.deviceError(t, e)
                    })
                }, e.prototype.mergeProperties = function(e) {
                    for (var t = this, r = [], n = 0, s = e; n < s.length; n++) {
                        var i = s[n],
                            o = this.propertyMap.get(i.name);
                        if (o) {
                            var u = o.updateFrom(i, a.CLOUD);
                            u && r.push(u)
                        } else {
                            i.setOwner(this);
                            var c = i.name;
                            this.propertyMap.set(c, i), r.push(new f.default(c, new Set, i.value))
                        }
                    }
                    r.forEach(function(e) {
                        return t.notifyDeviceChanged(e)
                    })
                }, e.prototype.dataSourceChanged = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (t = this.getSessionManager().dsManager, e !== a.DSS || !t || !t.isConnected()) return [3, 5];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), r = p.default.shared().systemSettings.deviceDetailProvider, n = [], r && (n = r.getManagedPropertyNames(this)), [4, this.fetchProperties(n)];
                                case 2:
                                    return s.sent(), [3, 4];
                                case 3:
                                    return i = s.sent(), this.notifyError(i), [3, 4];
                                case 4:
                                    return this.stopPolling(), [3, 6];
                                case 5:
                                    this.startPolling(), s.label = 6;
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.shutDown = function() {
                    this.stopPolling()
                }, e.prototype.getSessionManager = function() {
                    return this.deviceManager.sessionManager
                }, e.prototype.updateSchedule = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o, u;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    if (!this.key) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Device key is required"))];
                                    if (!e) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Invalid schedule"))];
                                    if (!e.key) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Updating a Schedule requires that the Schedule was first fetched from the service"))];
                                    if (!e.startTimeEachDay) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Start Time for each Day is required"))];
                                    if (!e.direction) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Schedule direction is required"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), t = this.deviceManager.deviceServiceUrl("apiv1/devices/" + this.key + "/schedules/" + e.key + ".json"), [4, c.default(t, {
                                        method: "PUT",
                                        body: JSON.stringify({
                                            schedule: e
                                        }, S.default.replacer),
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), (i = S.default.fromJSON(n)).device = this, [2, i];
                                case 4:
                                    return o = (a = Promise).reject, [4, h.default.handleServerErrorResponse(r)];
                                case 5:
                                    return [2, o.apply(a, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return u = s.sent(), [2, Promise.reject(b.default.generalError(u.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchSchedules = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i, a = this;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    if (!this.key) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Device key is required"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), e = this.deviceManager.deviceServiceUrl("apiv1/devices/" + this.key + "/schedules.json"), [4, c.default(e, {
                                        method: "GET",
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (t = s.sent()).ok ? [4, t.json()] : [3, 4];
                                case 3:
                                    return [2, s.sent().map(function(e) {
                                        var t = S.default.fromJSON(e);
                                        return t.device = a, t
                                    })];
                                case 4:
                                    return n = (r = Promise).reject, [4, h.default.handleServerErrorResponse(t)];
                                case 5:
                                    return [2, n.apply(r, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return i = s.sent(), [2, Promise.reject(b.default.generalError(i.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.createSchedule = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o, u, l, d;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    if (!this.key) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Device key is required"))];
                                    if (!e) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Invalid schedule"))];
                                    if (!e.startTimeEachDay) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Start Time for each Day is required"))];
                                    if (!e.direction) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Schedule direction is required"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 8, , 9]), t = this.deviceManager.deviceServiceUrl("apiv1/devices/" + this.key + "/schedules.json"), [4, c.default(t, {
                                        method: "POST",
                                        body: JSON.stringify(P.decamelizeKeys({
                                            schedule: e
                                        }), S.default.replacer),
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), (i = S.default.fromJSON(n)).device = this, [2, i];
                                case 4:
                                    return o = (a = console).log, [4, r.json()];
                                case 5:
                                    return o.apply(a, [s.sent()]), l = (u = Promise).reject, [4, h.default.handleServerErrorResponse(r)];
                                case 6:
                                    return [2, l.apply(u, [s.sent()])];
                                case 7:
                                    return [3, 9];
                                case 8:
                                    return d = s.sent(), [2, Promise.reject(b.default.generalError(d.message))];
                                case 9:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.deleteSchedule = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    if (!e) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Invalid schedule"))];
                                    if (!e.key) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Deleting a Schedule requires that the Schedule was first fetched from the service"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), t = this.deviceManager.deviceServiceUrl("apiv1/schedules/" + e.key + ".json"), [4, c.default(t, {
                                        method: "DELETE",
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [3, 4] : (i = (n = Promise).reject, [4, h.default.handleServerErrorResponse(r)]);
                                case 3:
                                    return [2, i.apply(n, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return a = s.sent(), [2, Promise.reject(b.default.generalError(a.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.enableSchedule = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t;
                        return s(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return (t = Object.assign({}, e)).active = !0, [4, this.updateSchedule(t)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.prototype.disableSchedule = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t;
                        return s(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return (t = Object.assign({}, e)).active = !1, [4, this.updateSchedule(t)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.prototype.createDatum = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, a, o, u, l, d, f;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    if (!e) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Datum key is required"))];
                                    r = this.deviceManager.deviceServiceUrl("apiv1/dsns/" + this.dsn + "/data.json"), n = {
                                        datum: {
                                            key: e,
                                            value: t
                                        }
                                    }, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, c.default(r, {
                                        body: JSON.stringify(n),
                                        method: "POST",
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (i = s.sent()).ok ? [4, i.json()] : [3, 4];
                                case 3:
                                    return a = s.sent(), o = a.datum, (u = new v.default(o.key, o.value)).createdAt = o.created_at, u.updatedAt = o.updated_at, [2, u];
                                case 4:
                                    return d = (l = Promise).reject, [4, h.default.handleServerErrorResponse(i)];
                                case 5:
                                    return [2, d.apply(l, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return f = s.sent(), [2, Promise.reject(b.default.generalError(f.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchDatum = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    if (!e) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Datum key is required"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), t = this.deviceManager.deviceServiceUrl("apiv1/dsns/" + this.dsn + "/data/" + e + ".json"), [4, c.default(t, {
                                        method: "GET",
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), [2, v.default.fromJSON(n)];
                                case 4:
                                    return a = (i = Promise).reject, [4, h.default.handleServerErrorResponse(r)];
                                case 5:
                                    return [2, a.apply(i, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return o = s.sent(), [2, Promise.reject(b.default.generalError(o.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchDatums = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, a, o;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), r = this.deviceManager.deviceServiceUrl("apiv1/dsns/" + this.dsn + "/data.json"), e && (r += d.default.parameterizeArray("keys", e)), t && (r += "?keys=" + t), [4, c.default(r, {
                                        method: "GET",
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (n = s.sent()).ok ? [4, n.json()] : [3, 4];
                                case 3:
                                    return [2, s.sent().map(function(e) {
                                        return v.default.fromJSON(e)
                                    })];
                                case 4:
                                    return a = (i = Promise).reject, [4, h.default.handleServerErrorResponse(n)];
                                case 5:
                                    return [2, a.apply(i, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return o = s.sent(), [2, Promise.reject(b.default.generalError(o.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateDatum = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, a, o, u, l;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), r = this.deviceManager.deviceServiceUrl("apiv1/dsns/" + this.dsn + "/data/" + e + ".json"), n = {
                                        datum: {
                                            value: t
                                        }
                                    }, [4, c.default(r, {
                                        body: JSON.stringify(n),
                                        method: "PUT",
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (i = s.sent()).ok ? [4, i.json()] : [3, 4];
                                case 3:
                                    return a = s.sent(), [2, v.default.fromJSON(a)];
                                case 4:
                                    return u = (o = Promise).reject, [4, h.default.handleServerErrorResponse(i)];
                                case 5:
                                    return [2, u.apply(o, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return l = s.sent(), [2, Promise.reject(b.default.generalError(l.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.deleteDatum = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    if (!e) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Datum key is required"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), t = this.deviceManager.deviceServiceUrl("apiv1/dsns/" + this.dsn + "/data/" + e + ".json"), [4, c.default(t, {
                                        method: "DELETE",
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [3, 4] : (i = (n = Promise).reject, [4, h.default.handleServerErrorResponse(r)]);
                                case 3:
                                    return [2, i.apply(n, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return a = s.sent(), [2, Promise.reject(b.default.generalError(a.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.unregister = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    e = this.deviceManager.deviceServiceUrl("apiv1/devices/" + this.key + ".json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), [4, c.default(e, {
                                        method: "DELETE",
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (t = s.sent()).ok ? [3, 4] : (n = (r = Promise).reject, [4, h.default.handleServerErrorResponse(t)]);
                                case 3:
                                    return [2, n.apply(r, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return i = s.sent(), [2, Promise.reject(b.default.generalError(i.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.factoryReset = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    e = this.deviceManager.deviceServiceUrl("apiv1/devices/" + this.key + "/cmds/factory_reset.json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), [4, c.default(e, {
                                        method: "PUT",
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (t = s.sent()).ok ? [3, 4] : (n = (r = Promise).reject, [4, h.default.handleServerErrorResponse(t)]);
                                case 3:
                                    return [2, n.apply(r, [s.sent()])];
                                case 4:
                                    return this.deviceManager.fetchDevices(), [3, 6];
                                case 5:
                                    return i = s.sent(), [2, Promise.reject(b.default.generalError(i.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateTimeZone = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o, u;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    t = this.deviceManager.deviceServiceUrl("apiv1/devices/" + this.key + "/time_zones.json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), r = {
                                        tz_id: e
                                    }, [4, c.default(t, {
                                        method: "PUT",
                                        body: JSON.stringify(r),
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (n = s.sent()).ok ? [4, n.json()] : [3, 4];
                                case 3:
                                    return i = s.sent(), [2, y.AylaTimeZone.fromJSON(i)];
                                case 4:
                                    return o = (a = Promise).reject, [4, h.default.handleServerErrorResponse(n)];
                                case 5:
                                    return [2, o.apply(a, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return u = s.sent(), [2, Promise.reject(b.default.generalError(u.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchTimeZone = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i, a;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    e = this.deviceManager.deviceServiceUrl("apiv1/devices/" + this.key + "/time_zones.json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, c.default(e, {
                                        method: "GET",
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (t = s.sent()).ok ? [4, t.json()] : [3, 4];
                                case 3:
                                    return r = s.sent(), [2, y.AylaTimeZone.fromJSON(r)];
                                case 4:
                                    return i = (n = Promise).reject, [4, h.default.handleServerErrorResponse(t)];
                                case 5:
                                    return [2, i.apply(n, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return a = s.sent(), [2, Promise.reject(b.default.generalError(a.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateProductName = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    if (!e) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Display name is requried"))];
                                    t = this.deviceManager.deviceServiceUrl("apiv1/devices/" + this.key + ".json"), r = {
                                        device: {
                                            product_name: e
                                        }
                                    }, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), [4, c.default(t, {
                                        method: "PUT",
                                        body: JSON.stringify(r),
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (n = s.sent()).ok ? [3, 4] : (a = (i = Promise).reject, [4, h.default.handleServerErrorResponse(n)]);
                                case 3:
                                    return [2, a.apply(i, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return o = s.sent(), [2, Promise.reject(b.default.generalError(o.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateLocation = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, o, u, l;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.deviceManager) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No device manager is available"))];
                                    if (!this.getSessionManager()) return [2, Promise.reject(new b.default(b.ErrorType.Precondition, "No session is active"))];
                                    if (!this.key) return [2, Promise.reject(new b.default(b.ErrorType.InvalidArgument, "Display key not found"))];
                                    r = this.deviceManager.deviceServiceUrl("apiv1/devices/" + this.key + "/locations.json"), n = {
                                        location: {
                                            lat: e,
                                            long: t,
                                            provider: "user-based"
                                        }
                                    }, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), [4, c.default(r, {
                                        method: "POST",
                                        body: JSON.stringify(n),
                                        headers: h.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return i = s.sent(), this.updateFrom(e, t, a.CLOUD), i.ok ? [3, 4] : (u = (o = Promise).reject, [4, h.default.handleServerErrorResponse(i)]);
                                case 3:
                                    return [2, u.apply(o, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return l = s.sent(), [2, Promise.reject(b.default.generalError(l.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateFromConnectionStatus = function(e, t) {
                    var r = new Set;
                    if (e !== this.connectionStatus && (this.connectionStatus = e, r.add("connectionStatus")), r.size > 0) {
                        var n = new g.default(r);
                        this.notifyDeviceChanged(n)
                    }
                }, e.prototype.updateFrom = function(e, t, r) {
                    this.lastUpdateSource = r;
                    var n = new Set;
                    if (this.lat !== e && (n.add("lat"), this.lat = e), this.lng !== t && (n.add("lng"), this.lng = t), n.size > 0) {
                        var s = new g.default(n);
                        this.notifyDeviceChanged(s)
                    }
                }, e.prototype.shareWithEmail = function(e, t, r, n, s) {
                    return new m.default(e, t, this.dsn, "device", r, n, s)
                }, e.fromJSON = function(t) {
                    var r = P.camelizeKeys(t.device),
                        n = new e;
                    return Object.assign(n, r), n
                }, e.DEFAULT_POLL_TIMEOUT_MS = 5e3, e
            }();
        t.default = w,
            function(e) {
                e[e.LAN = 0] = "LAN", e[e.CLOUD = 1] = "CLOUD", e[e.DSS = 2] = "DSS", e[e.CACHED = 3] = "CACHED", e[e.LOCAL = 4] = "LOCAL"
            }(a = t.DataSource || (t.DataSource = {})),
            function(e) {
                e.None = "None", e.SameLan = "Same-LAN", e.ButtonPush = "Button-Push", e.APMode = "AP-Mode", e.Display = "Display", e.DSN = "Dsn", e.Node = "Node", e.Local = "Local"
            }(o = t.RegistrationType || (t.RegistrationType = {})),
            function(e) {
                e.Online = "Online", e.Offline = "Offline"
            }(u = t.ConnectionStatus || (t.ConnectionStatus = {})),
            function(e) {
                e.IP = "ip-based", e.WiFi = "wifi-based", e.User = "user-based", e.Setup = "setup-based"
            }(t.LocationProvider || (t.LocationProvider = {}))
    }, function(e, t, r) {
        r(32), e.exports = self.fetch.bind(self)
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            s = function() {
                function e(e, t, r, n, s, i, a) {
                    this.id = "", this.createdAt = "", this.updatedAt = "", this.status = "", this.ownerId = "", this.userId = "", this.grantId = "", this.userEmail = e, this.operation = t, this.resourceId = r, this.resourceName = n, this.roleName = s, this.startDateAt = i, this.endDateAt = a
                }
                return e.fromJSON = function(t) {
                    var r = n.camelizeKeys(t.share),
                        s = new e(r.userEmail, r.operation, r.resourceId, r.resourceName, r.role.name, r.startDateAt, r.endDateAt);
                    return Object.assign(s, r), s
                }, e
            }();
        t.default = s;
        var i = function() {
            return function(e, t, r) {
                this.firstName = e, this.lastName = t, this.email = r
            }
        }();
        t.AylaShareUserProfile = i
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            s = function() {
                function e(e, t) {
                    this.createdAt = "", this.updatedAt = "", this.key = e, this.value = t
                }
                return e.fromJSON = function(t) {
                    var r = n.camelizeKeys(t.datum),
                        s = new e(r.key, r.value);
                    return Object.assign(s, r), s
                }, e
            }();
        t.default = s
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            s = function() {
                function e(e) {
                    this.createdAt = "", this.createdAtFromDevice = "", this.echo = !1, this.metadata = void 0, this.updatedAt = "", this.id = "", this.ackStatus = -1, this.ackMessage = -1, this.ackedAt = "", this.value = e, this.createdAt = (new Date).toISOString(), this.updatedAt = this.createdAt, this.createdAtFromDevice = this.createdAt
                }
                return e.fromJSON = function(t, r) {
                    var s = n.camelizeKeys(t.datapoint),
                        i = new e(s.value);
                    return Object.assign(i, s), i
                }, e
            }();
        t.default = s
    }, function(e, t, r) {
        "use strict";
        var n, s = this && this.__extends || (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                },
                function(e, t) {
                    function r() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                }),
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(r(13)),
            o = function(e) {
                function t(t) {
                    var r = e.call(this, a.ChangeType.Field) || this;
                    return r.changedFieldNames = t, r
                }
                return s(t, e), t
            }(a.default);
        t.default = o
    }, function(e, t, r) {
        "use strict";
        var n, s = this && this.__extends || (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                },
                function(e, t) {
                    function r() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                }),
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function t(t, r, n) {
                var s = e.call(this, r) || this;
                return s.propertyName = t, s.value = n, s
            }
            return s(t, e), t
        }(i(r(11)).default);
        t.default = a
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            return function(e) {
                this.type = e
            }
        }();
        t.default = n,
            function(e) {
                e[e.Field = 0] = "Field", e[e.List = 1] = "List", e[e.Property = 2] = "Property"
            }(t.ChangeType || (t.ChangeType = {}))
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))(function(s, i) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        e.done ? s(e.value) : new r(function(t) {
                            t(e.value)
                        }).then(a, o)
                    }
                    u((n = n.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function(e, t) {
                var r, n, s, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (s = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(n, i[1])).done) return s;
                                switch (n = 0, s && (i = [0, s.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < s[1]) {
                                            a.label = s[1], s = i;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(i);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, o = i(r(7)),
            u = i(r(31)),
            c = i(r(6)),
            l = i(r(3)),
            d = r(4),
            h = i(r(2)),
            f = function() {
                function e(t) {
                    this.deviceHashMap = new Map, this.deviceManagerListeners = new Set, this.state = a.Uninitialized, this.hasInitialized = !1, this.pollIntervalMs = e.DEFAULT_POLL_INTERVAL_MS, this.isPolling = !1, this.deviceInitErrors = new Map, this.sessionManager = t, this.fetchDevices()
                }
                return e.prototype.addListener = function(e) {
                    this.deviceManagerListeners.add(e)
                }, e.prototype.removeListener = function(e) {
                    this.deviceManagerListeners.delete(e)
                }, e.prototype.setState = function(e) {
                    if (this.state !== e) {
                        var t = this.state;
                        this.state = e, this.notifyStateChange(t, this.state), e === a.Ready && (this.hasInitialized = !0, this.notifyInitComplete())
                    }
                }, e.prototype.notifyStateChange = function(e, t) {
                    this.deviceManagerListeners.forEach(function(r) {
                        return r.deviceManagerStateChanged && r.deviceManagerStateChanged(e, t)
                    })
                }, e.prototype.notifyDeviceListChanged = function(e) {
                    this.deviceManagerListeners.forEach(function(t) {
                        return t.deviceListChanged(e)
                    })
                }, e.prototype.notifyError = function(e) {
                    this.deviceManagerListeners.forEach(function(t) {
                        return t.deviceManagerError && t.deviceManagerError(e)
                    })
                }, e.prototype.notifyInitComplete = function() {
                    var e = this;
                    this.deviceManagerListeners.forEach(function(t) {
                        return t.deviceManagerInitComplete(e.deviceInitErrors)
                    })
                }, e.prototype.notifyInitFailure = function(e, t) {
                    this.deviceManagerListeners.forEach(function(r) {
                        return r.deviceManagerInitFailure(e, t)
                    })
                }, e.prototype.getDevices = function() {
                    return Array.from(this.deviceHashMap.values())
                }, e.prototype.deviceWithDSN = function(e) {
                    return this.deviceHashMap.get(e)
                }, e.prototype.fetchDevices = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    !1, this.state !== a.Ready && this.setState(a.FetchingDeviceList), e = this.deviceServiceUrl("apiv1/devices.json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 6, , 7]), [4, o.default(e, {
                                        method: "GET",
                                        headers: h.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (t = s.sent()).ok ? [4, t.json()] : [3, 4];
                                case 3:
                                    return r = s.sent(), n = r.map(function(e) {
                                        return c.default.fromJSON(e)
                                    }), this.mergeDevices(n), this.state === a.FetchingDeviceList ? this.fetchProperties() : this.continuePolling(), [3, 5];
                                case 4:
                                    console.error("Fetch Devices failed: ", t.status), this.setState(a.Error), this.notifyInitFailure(new Error(t.statusText), a.FetchingDeviceList), s.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return i = s.sent(), this.notifyError(i), this.hasInitialized ? this.continuePolling() : (this.setState(a.Error), this.notifyInitFailure(i, a.FetchingDeviceList)), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.addDevice = function(e) {
                    e && e.dsn && !this.deviceHashMap.has(e.dsn) && (e.deviceManager = this, this.deviceHashMap.set(e.dsn, e), this.setState(a.FetchingDeviceList), this.fetchDevices())
                }, e.prototype.continuePolling = function() {
                    var e = this;
                    this.isPolling && (this.pollTimer = setTimeout(function() {
                        e.fetchDevices()
                    }, this.pollIntervalMs))
                }, e.prototype.startPolling = function() {
                    this.isPolling = !0;
                    for (var e = 0, t = this.getDevices(); e < t.length; e++) {
                        t[e].startPolling()
                    }
                    this.fetchDevices()
                }, e.prototype.stopPolling = function() {
                    this.pollTimer && clearTimeout(this.pollTimer), this.isPolling = !1;
                    for (var e = 0, t = this.getDevices(); e < t.length; e++) {
                        t[e].stopPolling()
                    }
                }, e.prototype.shutDown = function() {
                    for (var e = 0, t = this.getDevices(); e < t.length; e++) {
                        t[e].shutDown()
                    }
                    this.stopPolling(), this.deviceManagerListeners.clear(), this.deviceHashMap.clear()
                }, e.prototype.onPause = function() {
                    this.stopPolling();
                    for (var e = 0, t = this.getDevices(); e < t.length; e++) {
                        t[e].stopPolling()
                    }
                    this.setState(a.Paused)
                }, e.prototype.onResume = function() {
                    if (this.state === a.Paused) {
                        this.startPolling();
                        for (var e = 0, t = this.getDevices(); e < t.length; e++) {
                            t[e].startPolling()
                        }
                    }
                }, e.prototype.mergeDevices = function(e) {
                    for (var t = [], r = [], n = new Set, s = 0, i = e; s < i.length; s++) {
                        var o = i[s];
                        n.add(o.dsn), this.deviceHashMap.get(o.dsn) || (o.deviceManager = this, this.deviceHashMap.set(o.dsn, o), t.push(o.dsn), r.push(o))
                    }
                    for (var c = Array.from(this.deviceHashMap.keys()).filter(function(e) {
                            return !n.has(e)
                        }), l = 0, d = c; l < d.length; l++) {
                        var h = d[l];
                        this.deviceHashMap.delete(h)
                    }
                    if (t.length + c.length > 0) {
                        var f = new u.default(r, new Set(c));
                        this.deviceManagerListeners.forEach(function(e) {
                            return e.deviceListChanged(f)
                        })
                    }
                    t.length > 0 && (this.setState(a.FetchingDeviceProperties), this.fetchProperties())
                }, e.prototype.fetchProperties = function() {
                    this.state !== a.Ready ? (this.deviceInitErrors.clear(), this.setState(a.FetchingDeviceProperties), this.fetchNextDeviceProperties()) : console.error("DeviceManager calling fetchProperties when we are already initialized")
                }, e.prototype.fetchNextDeviceProperties = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i, o, u, c;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    e = !1, t = Array.from(this.deviceHashMap.values()), r = 0, n = t, s.label = 1;
                                case 1:
                                    if (!(r < n.length)) return [3, 6];
                                    if (!(i = n[r]).hasProperties || 0 !== i.getProperties().length || this.deviceInitErrors.has(i.dsn)) return [3, 5];
                                    e = !0, console.log("Fetching properties for " + i.dsn), o = [], (u = l.default.shared().systemSettings.deviceDetailProvider) && (o = u.getManagedPropertyNames(i)), s.label = 2;
                                case 2:
                                    return s.trys.push([2, 4, , 5]), [4, i.fetchProperties(o)];
                                case 3:
                                    return s.sent(), console.log("Got properties for " + i.dsn), 0 === i.getProperties().length && this.deviceInitErrors.set(i.dsn, new Error("No properties found for this device")), this.fetchNextDeviceProperties(), [3, 5];
                                case 4:
                                    return c = s.sent(), console.error("Fetching properties error:", c.message), this.deviceInitErrors.set(i.dsn, c), this.fetchNextDeviceProperties(), [3, 5];
                                case 5:
                                    return r++, [3, 1];
                                case 6:
                                    return e || this.setState(a.Ready), [2]
                            }
                        })
                    })
                }, e.prototype.deviceServiceUrl = function(e) {
                    return l.default.shared().getServiceUrl(d.CloudService.Device, e)
                }, e.DEFAULT_POLL_INTERVAL_MS = 15e3, e
            }();
        t.default = f,
            function(e) {
                e[e.Uninitialized = 0] = "Uninitialized", e[e.FetchingDeviceList = 1] = "FetchingDeviceList", e[e.FetchingDeviceProperties = 2] = "FetchingDeviceProperties", e[e.FetchingLanConfig = 3] = "FetchingLanConfig", e[e.Ready = 4] = "Ready", e[e.Error = 5] = "Error", e[e.Paused = 6] = "Paused"
            }(a = t.DeviceManagerState || (t.DeviceManagerState = {}))
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))(function(s, i) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        e.done ? s(e.value) : new r(function(t) {
                            t(e.value)
                        }).then(a, o)
                    }
                    u((n = n.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function(e, t) {
                var r, n, s, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (s = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(n, i[1])).done) return s;
                                switch (n = 0, s && (i = [0, s.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < s[1]) {
                                            a.label = s[1], s = i;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(i);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, o, u = i(r(34)),
            c = r(14),
            l = i(r(25)),
            d = r(6),
            h = i(r(2)),
            f = i(r(1)),
            p = i(r(3)),
            v = r(4),
            y = i(r(24)),
            m = function() {
                function e(e) {
                    this.DS_NAME = "JS_DSS", this.DS_DESCRIPTION = "DATAPOINT", this.dsManagerListeners = new Set, this.state = o.Uninitialized, this.subscriptionRetryCount = 1, this.connectRetryCount = 1, this.pausedState = !1, this.heartbeatCounter = 3, this.sessionManager = e, this.sessionManager.deviceManager.addListener(this), this.subscriptionTypeList = p.default.shared().systemSettings.dssSubscriptionTypes, (!this.subscriptionTypeList || this.subscriptionTypeList.length < 0) && (this.subscriptionTypeList = [a.Datapoint, a.DatapointAck]), this.startHeartbeatTimer()
                }
                return e.prototype.addListener = function(e) {
                    this.dsManagerListeners.add(e)
                }, e.prototype.removeListener = function(e) {
                    this.dsManagerListeners.delete(e)
                }, e.prototype.notifyDsChange = function(e) {
                    this.dsManagerListeners.forEach(function(t) {
                        return t.dsManagerConnectionChanged(e)
                    })
                }, e.prototype.enableRetrySubscription = function() {
                    this.subscriptionRetryCount = 1
                }, e.prototype.disableRetrySubscription = function() {
                    this.subscriptionRetryCount = 0
                }, e.prototype.enableRetryConnect = function() {
                    this.connectRetryCount = 1
                }, e.prototype.disableRetryConnect = function() {
                    this.connectRetryCount = 0
                }, e.prototype.startHeartbeatTimer = function() {
                    var t = this;
                    this.heartbeatTimer = setInterval(function() {
                        t.heartbeatCounter--, t.heartbeatCounter < 0 && t.disconnectSocket()
                    }, e.DEFAULT_HEARTBEAT_INTERVAL_MS)
                }, e.prototype.isConnected = function() {
                    return this.state == o.Connected
                }, e.prototype.isConnecting = function() {
                    return this.state == o.Connecting
                }, e.prototype.onOpen = function() {
                    console.log("on connect"), this.state = o.Connected, this.enableRetryConnect(), this.notifyDsChange(!0), this.dataSourceChanged()
                }, e.prototype.onMessage = function(t) {
                    if (console.log("on event:", t), t === e.HEARTBEAT) this.webSocket.send(t), this.heartbeatCounter++;
                    else if (t !== e.KEEP_ALIVE) {
                        var r = t.indexOf("|");
                        if (-1 !== r) {
                            var n = t.substring(r + 1),
                                s = y.default.fromJSON(JSON.parse(n));
                            this.updateDevice(s)
                        }
                    }
                }, e.prototype.updateDevice = function(e) {
                    var t = e.metadata,
                        r = t.dsn,
                        n = this.sessionManager.deviceManager.deviceWithDSN(r);
                    if (n) switch (t.eventType) {
                        case a.Connectivity:
                            var s = e.connection.status;
                            n.updateFromConnectionStatus(s, d.DataSource.DSS);
                            break;
                        case a.Datapoint:
                        case a.DatapointAck:
                            var i = n.getProperty(t.propertyName);
                            i && i.updateFromDatapoint(e.datapoint, d.DataSource.DSS)
                    } else console.error("Received DSN that is not in deviceManager " + r)
                }, e.prototype.dataSourceChanged = function() {
                    var e = this.sessionManager.deviceManager;
                    e.state !== c.DeviceManagerState.Paused && e.getDevices().forEach(function(e) {
                        return e.dataSourceChanged(d.DataSource.DSS)
                    })
                }, e.prototype.onDisconnect = function() {
                    console.log("on disconnect"), this.state = o.Disconnected, this.enableRetryConnect(), this.notifyDsChange(!1), this.dataSourceChanged()
                }, e.prototype.onPause = function() {
                    console.log("AylaDSManager onPause"), this.disableRetryConnect(), this.disableRetrySubscription(), this.disconnectSocket(), this.pausedState = !0
                }, e.prototype.onResume = function() {
                    var e = this;
                    (console.log("AylaDSManager onResume"), this.pausedState = !1, this.subscription) ? this.isConnected() || this.isConnecting() || this.connectToSocket(this.subscription.streamKey): this.sessionManager.deviceManager.getDevices().length > 0 && this.state !== o.Initialized && this.createSubscription(this.DS_NAME, this.DS_DESCRIPTION, []).then(function(t) {
                        e.subscription = t, t ? e.connectToSocket(t.streamKey) : console.error("Null response received in createSubscription. Unable to connect to websocket")
                    }).catch(function(t) {
                        console.error("Error in createSubscription. Start retry create subscription " + t.type + ", " + t.message), e.retryCreateSubscription()
                    })
                }, e.prototype.retryCreateSubscription = function() {
                    var t = this;
                    console.log("retryCreateSubscription retryCount " + this.subscriptionRetryCount), this.subscriptionRetryCount > 0 && setTimeout(function() {
                        return n(t, void 0, void 0, function() {
                            var e, t;
                            return s(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.createSubscription(this.DS_NAME, this.DS_DESCRIPTION, [])];
                                    case 1:
                                        return e = r.sent(), this.subscription = e, this.connectToSocket(e.streamKey), [3, 3];
                                    case 2:
                                        return t = r.sent(), console.error("Retry createSubscription failed. error " + t), this.disableRetrySubscription(), this.state = o.Disconnected, [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.DEFAULT_RETRY_INTERVAL_MS)
                }, e.prototype.deviceManagerInitComplete = function(e) {
                    console.log("AylaDSManager deviceManagerInitComplete"), this.onResume()
                }, e.prototype.deviceManagerInitFailure = function(e, t) {
                    console.log("AylaDSManager deviceManagerInitFailure"), this.onPause()
                }, e.prototype.deviceListChanged = function(e) {
                    console.log("AylaDSManager deviceListChanged"), this.state !== o.Disconnected || this.pausedState || this.onResume()
                }, e.prototype.deviceManagerError = function(e) {
                    this.sessionManager.deviceManager.state === c.DeviceManagerState.Paused && this.onPause()
                }, e.prototype.deviceManagerStateChanged = function(e, t) {
                    console.log("AylaDSManager deviceManagerStateChanged"), t !== c.DeviceManagerState.Error && t !== c.DeviceManagerState.Paused || this.onPause()
                }, e.prototype.connectToSocket = function(e) {
                    var t = this;
                    if (console.log("connectToSocket"), this.sessionManager.deviceManager.state != c.DeviceManagerState.Paused) {
                        this.state = o.Connecting;
                        var r = (this.datastreamServiceUrl("") + "stream?stream_key=" + e).replace("https", "wss");
                        console.log("connectToSocket url", r), this.webSocket = new u.default(r), this.webSocket.addEventListener("open", function() {
                            return t.onOpen()
                        }), this.webSocket.addEventListener("close", function() {
                            return t.onDisconnect()
                        }), this.webSocket.addEventListener("message", function(e) {
                            return t.onMessage(e.data)
                        })
                    }
                }, e.prototype.disconnectSocket = function() {
                    this.disableRetrySubscription(), this.disableRetryConnect(), this.webSocket && this.webSocket.close(), this.state = o.Disconnected, this.dataSourceChanged(), clearInterval(this.heartbeatTimer)
                }, e.prototype.createSubscription = function(e, t, r) {
                    return n(this, void 0, void 0, function() {
                        var n, i, a, o, u, c, d, p, v, y, m;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    r && r.length > 0 && (n = r.map(function(e) {
                                        return e.dsn
                                    }).join(",")), i = this.subscriptionTypeList.join(","), a = {
                                        name: e,
                                        description: t,
                                        dsn: n,
                                        property_name: "*",
                                        client_type: "mobile",
                                        batch_size: "1",
                                        subscription_type: i
                                    }, o = this.dssSubscriptionServiceUrl("api/v1/subscriptions"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 8, , 9]), [4, fetch(o, {
                                        method: "POST",
                                        headers: h.default.authHeader(this.sessionManager),
                                        body: JSON.stringify(a)
                                    })];
                                case 2:
                                    return (u = s.sent()).ok ? [4, u.json()] : [3, 4];
                                case 3:
                                    return c = s.sent(), [2, l.default.fromJSON(c)];
                                case 4:
                                    return p = (d = console).log, [4, u.json()];
                                case 5:
                                    return p.apply(d, [s.sent()]), y = (v = Promise).reject, [4, h.default.handleServerErrorResponse(u)];
                                case 6:
                                    return [2, y.apply(v, [s.sent()])];
                                case 7:
                                    return [3, 9];
                                case 8:
                                    return m = s.sent(), [2, Promise.reject(f.default.generalError(m.message))];
                                case 9:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchSubscription = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e) return [2, Promise.reject(new f.default(f.ErrorType.Precondition, "Subscription Id is required"))];
                                    t = this.dssSubscriptionServiceUrl("api/v1/subscriptions/" + e), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(t, {
                                        method: "GET",
                                        headers: h.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), [2, l.default.fromJSON(n)];
                                case 4:
                                    return a = (i = Promise).reject, [4, h.default.handleServerErrorResponse(r)];
                                case 5:
                                    return [2, a.apply(i, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return o = s.sent(), [2, Promise.reject(f.default.generalError(o.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchSubscriptions = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    e = this.dssSubscriptionServiceUrl("api/v1/subscriptions"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(e, {
                                        method: "GET",
                                        headers: h.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (t = s.sent()).ok ? [4, t.json()] : [3, 4];
                                case 3:
                                    return [2, s.sent().map(function(e) {
                                        return l.default.fromJSON(e)
                                    })];
                                case 4:
                                    return n = (r = Promise).reject, [4, h.default.handleServerErrorResponse(t)];
                                case 5:
                                    return [2, n.apply(r, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return i = s.sent(), [2, Promise.reject(f.default.generalError(i.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.deleteSubscription = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e) return [2, Promise.reject(new f.default(f.ErrorType.Precondition, "Subscription Id is required"))];
                                    t = this.dssSubscriptionServiceUrl("api/v1/subscriptions/" + e), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), [4, fetch(t, {
                                        method: "DELETE",
                                        headers: h.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [3, 4] : (i = (n = Promise).reject, [4, h.default.handleServerErrorResponse(r)]);
                                case 3:
                                    return [2, i.apply(n, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return a = s.sent(), [2, Promise.reject(f.default.generalError(a.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.datastreamServiceUrl = function(e) {
                    return p.default.shared().getServiceUrl(v.CloudService.Datastream, e)
                }, e.prototype.dssSubscriptionServiceUrl = function(e) {
                    return p.default.shared().getServiceUrl(v.CloudService.mdssSubscription, e)
                }, e.DEFAULT_RETRY_INTERVAL_MS = 3e3, e.DEFAULT_HEARTBEAT_COUNT = 3, e.DEFAULT_HEARTBEAT_INTERVAL_MS = 3e4, e.KEEP_ALIVE = "1|X", e.HEARTBEAT = "1|Z", e
            }();
        t.default = m,
            function(e) {
                e.Connectivity = "connectivity", e.Datapoint = "datapoint", e.DatapointAck = "datapointack"
            }(a = t.AylaDSSubscriptionType || (t.AylaDSSubscriptionType = {})),
            function(e) {
                e[e.Uninitialized = 0] = "Uninitialized", e[e.Initialized = 1] = "Initialized", e[e.Connecting = 2] = "Connecting", e[e.Connected = 3] = "Connected", e[e.Disconnected = 4] = "Disconnected"
            }(o = t.DSManagerState || (t.DSManagerState = {}))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            s = function() {
                function e(e, t) {
                    this.isEnabled = !1, this.name = e, this.expression = t
                }
                return e.fromJSON = function(t) {
                    var r = t,
                        s = new e(r.name, r.expresses);
                    return Object.assign(s, n.camelizeKeys(r)), s
                }, e
            }();
        t.default = s,
            function(e) {
                e.Device = "device", e.User = "user"
            }(t.RuleType || (t.RuleType = {}))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            s = function() {
                function e() {}
                return e.datapointAction = function(t, r, n, s) {
                    var a = e.formatDatapointExpression(r, n, s),
                        o = new e;
                    o.name = t || a;
                    var u = new i;
                    return u.datapoint = a, o.parameters = u, o
                }, e.formatDatapointExpression = function(e, t, r) {
                    var n = e.getOwner().dsn,
                        s = r.toString();
                    return "boolean" === e.baseType && (s = new Boolean(r).toString()), "DATAPOINT(" + n + "," + e.name + ")" + t + s
                }, e.fromJSON = function(t) {
                    var r = t.action,
                        s = new e;
                    return Object.assign(s, n.camelizeKeys(r)), s
                }, e
            }();
        t.default = s,
            function(e) {
                e.Email = "EMAIL", e.Datapoint = "DATAPOINT"
            }(t.ActionType || (t.ActionType = {}));
        var i = function() {
            return function() {}
        }();
        t.AylaActionParameters = i
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))(function(s, i) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        e.done ? s(e.value) : new r(function(t) {
                            t(e.value)
                        }).then(a, o)
                    }
                    u((n = n.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function(e, t) {
                var r, n, s, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (s = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(n, i[1])).done) return s;
                                switch (n = 0, s && (i = [0, s.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < s[1]) {
                                            a.label = s[1], s = i;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(i);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(r(3)),
            o = r(4),
            u = i(r(17)),
            c = i(r(1)),
            l = r(0),
            d = i(r(2)),
            h = i(r(16)),
            f = i(r(5)),
            p = function() {
                function e(e) {
                    this.sessionManager = e
                }
                return e.prototype.createAction = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o, h;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.sessionManager) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "No session is action"))];
                                    t = this.rulesServiceUrl("rulesservice/v1/actions.json"), r = {
                                        action: l.decamelizeKeys(e)
                                    }, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(t, {
                                        method: "POST",
                                        body: JSON.stringify(r),
                                        headers: d.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (n = s.sent()).ok ? [4, n.json()] : [3, 4];
                                case 3:
                                    return i = s.sent(), [2, u.default.fromJSON(i)];
                                case 4:
                                    return o = (a = Promise).reject, [4, d.default.handleServerErrorResponse(n)];
                                case 5:
                                    return [2, o.apply(a, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return h = s.sent(), [2, Promise.reject(new c.default(c.ErrorType.AylaError, h.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchActions = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i, a;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.sessionManager) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "No session is action"))];
                                    e = this.rulesServiceUrl("rulesservice/v1/actions.json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(e, {
                                        method: "GET",
                                        headers: d.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (t = s.sent()).ok ? [4, t.json()] : [3, 4];
                                case 3:
                                    return r = s.sent(), [2, r.actions.map(function(e) {
                                        return u.default.fromJSON(e)
                                    })];
                                case 4:
                                    return i = (n = Promise).reject, [4, d.default.handleServerErrorResponse(t)];
                                case 5:
                                    return [2, i.apply(n, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return a = s.sent(), [2, Promise.reject(new c.default(c.ErrorType.AylaError, a.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchAction = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "UUID is requried"))];
                                    if (!this.sessionManager) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "No session is action"))];
                                    t = this.rulesServiceUrl("rulesservice/v1/actions/" + e + ".json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(t, {
                                        method: "GET",
                                        headers: d.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), [2, u.default.fromJSON(n)];
                                case 4:
                                    return a = (i = Promise).reject, [4, d.default.handleServerErrorResponse(r)];
                                case 5:
                                    return [2, a.apply(i, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return o = s.sent(), [2, Promise.reject(new c.default(c.ErrorType.AylaError, o.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.deleteAction = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "UUID is requried"))];
                                    if (!this.sessionManager) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "No session is action"))];
                                    t = this.rulesServiceUrl("rulesservice/v1/actions/" + e + ".json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), [4, fetch(t, {
                                        method: "DELETE",
                                        headers: d.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [3, 4] : (i = (n = Promise).reject, [4, d.default.handleServerErrorResponse(r)]);
                                case 3:
                                    return [2, i.apply(n, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return a = s.sent(), [2, Promise.reject(new c.default(c.ErrorType.AylaError, a.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateAction = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r;
                        return s(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!e || !e.actionUuid) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "Invalid action, Make sure that Action is first fetched from the cloud"))];
                                    if (!this.sessionManager) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "No session is action"))];
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 4, , 5]), [4, this.deleteAction(e.actionUuid)];
                                case 2:
                                    return n.sent(), (t = new u.default).name = e.name, t.parameters = e.parameters, t.type = e.type, [4, this.createAction(t)];
                                case 3:
                                    return [2, n.sent()];
                                case 4:
                                    return r = n.sent(), [2, Promise.reject(new c.default(c.ErrorType.AylaError, r.message))];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.createRule = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o, u;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.sessionManager) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "No session is action"))];
                                    t = this.rulesServiceUrl("rulesservice/v1/rules.json"), r = {
                                        rule: l.decamelizeKeys(e)
                                    }, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(t, {
                                        method: "POST",
                                        body: JSON.stringify(r),
                                        headers: d.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (n = s.sent()).ok ? [4, n.json()] : [3, 4];
                                case 3:
                                    return i = s.sent(), [2, h.default.fromJSON(i.rule)];
                                case 4:
                                    return o = (a = Promise).reject, [4, d.default.handleServerErrorResponse(n)];
                                case 5:
                                    return [2, o.apply(a, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return u = s.sent(), [2, Promise.reject(new c.default(c.ErrorType.AylaError, u.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchRules = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, a, o, u, l, p, v;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.sessionManager) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "No session is action"))];
                                    r = this.rulesServiceUrl("rulesservice/v1/rules.json"), n = new Map, e && t && (n.set("type", e), n.set("id", t)), n.size > 0 && (r = f.default.appendParameters(r, n)), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 8, , 9]), [4, fetch(r, {
                                        method: "GET",
                                        headers: d.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (i = s.sent()).ok ? [4, i.json()] : [3, 4];
                                case 3:
                                    return a = s.sent(), [2, a.rules.map(function(e) {
                                        return h.default.fromJSON(e)
                                    })];
                                case 4:
                                    return u = (o = console).log, [4, i.json()];
                                case 5:
                                    return u.apply(o, [s.sent()]), p = (l = Promise).reject, [4, d.default.handleServerErrorResponse(i)];
                                case 6:
                                    return [2, p.apply(l, [s.sent()])];
                                case 7:
                                    return [3, 9];
                                case 8:
                                    return v = s.sent(), [2, Promise.reject(new c.default(c.ErrorType.AylaError, v.message))];
                                case 9:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchRule = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "UUID is requried"))];
                                    if (!this.sessionManager) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "No session is action"))];
                                    t = this.rulesServiceUrl("rulesservice/v1/rules/" + e + ".json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(t, {
                                        method: "GET",
                                        headers: d.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), [2, h.default.fromJSON(n.rule)];
                                case 4:
                                    return a = (i = Promise).reject, [4, d.default.handleServerErrorResponse(r)];
                                case 5:
                                    return [2, a.apply(i, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return o = s.sent(), [2, Promise.reject(new c.default(c.ErrorType.AylaError, o.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchRuleActions = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "Rule UUID is requried"))];
                                    if (!this.sessionManager) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "No session is action"))];
                                    t = this.rulesServiceUrl("rulesservice/v1/rules/" + e + "/actions.json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(t, {
                                        method: "GET",
                                        headers: d.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), [2, n.actions.map(function(e) {
                                        return u.default.fromJSON(e)
                                    })];
                                case 4:
                                    return a = (i = Promise).reject, [4, d.default.handleServerErrorResponse(r)];
                                case 5:
                                    return [2, a.apply(i, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return o = s.sent(), [2, Promise.reject(new c.default(c.ErrorType.AylaError, o.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.enableDisableRule = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, a, o, u, l;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!t) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "Rule UUID is requried"))];
                                    if (!this.sessionManager) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "No session is action"))];
                                    r = {
                                        rule: {
                                            is_enabled: e
                                        }
                                    }, n = this.rulesServiceUrl("rulesservice/v1/rules/" + t + ".json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(n, {
                                        method: "POST",
                                        body: JSON.stringify(r),
                                        headers: d.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (i = s.sent()).ok ? [4, i.json()] : [3, 4];
                                case 3:
                                    return a = s.sent(), [2, h.default.fromJSON(a.rule)];
                                case 4:
                                    return u = (o = Promise).reject, [4, d.default.handleServerErrorResponse(i)];
                                case 5:
                                    return [2, u.apply(o, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return l = s.sent(), [2, Promise.reject(new c.default(c.ErrorType.AylaError, l.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.enableRule = function(e) {
                    return n(this, void 0, void 0, function() {
                        return s(this, function(t) {
                            return [2, this.enableDisableRule(!0, e)]
                        })
                    })
                }, e.prototype.disableRule = function(e) {
                    return n(this, void 0, void 0, function() {
                        return s(this, function(t) {
                            return [2, this.enableDisableRule(!1, e)]
                        })
                    })
                }, e.prototype.deleteRule = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "Rule UUID is requried"))];
                                    if (!this.sessionManager) return [2, Promise.reject(new c.default(c.ErrorType.Precondition, "No session is action"))];
                                    t = this.rulesServiceUrl("rulesservice/v1/rules/" + e + ".json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), [4, fetch(t, {
                                        method: "DELETE",
                                        headers: d.default.authHeader(this.sessionManager)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [3, 4] : (i = (n = Promise).reject, [4, d.default.handleServerErrorResponse(r)]);
                                case 3:
                                    return [2, i.apply(n, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return a = s.sent(), [2, Promise.reject(new c.default(c.ErrorType.AylaError, a.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.rulesServiceUrl = function(e) {
                    return a.default.shared().getServiceUrl(o.CloudService.Rules, e)
                }, e
            }();
        t.default = p
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            s = function() {
                function e() {
                    this.id = -1, this.displayName = "", this.firstname = "", this.lastname = "", this.email = "", this.phoneCountryCode = "", this.phoneNumber = "", this.streetAddress = "", this.zipCode = "", this.country = "", this.emailNotification = !1, this.smsNotification = !1, this.metadata = "", this.notes = "", this.createdAt = "", this.updatedAt = "", this.oemModels = []
                }
                return e.fromJSON = function(t) {
                    var r = n.camelizeKeys(t.contact),
                        s = new e;
                    return Object.assign(s, r), s
                }, e
            }();
        t.default = s
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            s = function() {
                function e() {
                    this.email = "", this.password = "", this.firstname = "", this.lastname = "", this.country = "", this.street = "", this.city = "", this.state = "", this.company = "", this.zip = "", this.phoneCountryCode = "", this.phone = "", this.aylaDevKitNum = "", this.uuid = "", this.confirmedAt = "", this.createdAt = "", this.updatedAt = ""
                }
                return e.fromJSON = function(t) {
                    var r = n.camelizeKeys(t),
                        s = new e;
                    return Object.assign(s, r), s
                }, e
            }();
        t.default = s
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t, r, n) {
                this.accessToken = "", this.refreshToken = "", this.role = "", this.createdAt = Date.now(), this.accessToken = e, this.refreshToken = t, this.expiresIn = r, this.role = n
            }
            return e.prototype.getSecondsToExpiry = function() {
                return Math.max(0, this.expiresIn - (Date.now() - this.createdAt) / 1e3)
            }, e
        }();
        t.default = n
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))(function(s, i) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        e.done ? s(e.value) : new r(function(t) {
                            t(e.value)
                        }).then(a, o)
                    }
                    u((n = n.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function(e, t) {
                var r, n, s, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (s = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(n, i[1])).done) return s;
                                switch (n = 0, s && (i = [0, s.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < s[1]) {
                                            a.label = s[1], s = i;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(i);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(r(7)),
            o = i(r(21)),
            u = i(r(3)),
            c = r(4),
            l = i(r(2)),
            d = i(r(20)),
            h = i(r(9)),
            f = i(r(19)),
            p = i(r(8)),
            v = i(r(5)),
            y = i(r(14)),
            m = i(r(1)),
            g = i(r(18)),
            S = i(r(15)),
            b = function() {
                function e(e, t) {
                    this.REFRESH_GRACE_PERIOD = 43200, this.listeners = new Set, this.authorization = e, this.authProvider = t, this.deviceManager = new y.default(this), this.rulesService = new g.default(this), u.default.shared().systemSettings.allowDSS && this.startDSS(), this.authorizationRefreshed(e)
                }
                return e.prototype.startDSS = function() {
                    this.dsManager = new S.default(this)
                }, e.prototype.stopDSS = function() {
                    this.dsManager && this.dsManager.onPause()
                }, e.prototype.addListener = function(e) {
                    this.listeners.add(e)
                }, e.prototype.removeListener = function(e) {
                    this.listeners.delete(e)
                }, e.prototype.refreshAuthorization = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i, u, c, d;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.authorization || !this.authorization.refreshToken || !this.authorization.accessToken) return [2, Promise.reject(new m.default(m.ErrorType.InvalidArgument, "Invalid authorization object"))];
                                    e = this.userServiceUrl("users/refresh_token.json"), t = {
                                        user: {
                                            refresh_token: this.authorization.refreshToken
                                        }
                                    }, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, a.default(e, {
                                        body: JSON.stringify(t),
                                        method: "POST",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), i = new o.default(n.access_token, n.refresh_token, n.expires_in, n.role), this.authorizationRefreshed(i), [2, i];
                                case 4:
                                    return c = (u = Promise).reject, [4, l.default.handleServerErrorResponse(r)];
                                case 5:
                                    return [2, c.apply(u, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return d = s.sent(), console.error("Fail to refresh token"), this.notifySessionClosed(d), [2, Promise.reject(new m.default(m.ErrorType.AylaError, "Fail to refresh token"))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.authorizationRefreshed = function(e) {
                    var t = this;
                    this.authorization = e, this.listeners.forEach(function(t) {
                        return t.authorizationRefreshed(e)
                    });
                    var r = e.getSecondsToExpiry(),
                        n = Math.max(30, r - this.REFRESH_GRACE_PERIOD);
                    this.refreshTimeoutID = setTimeout(function() {
                        t.refreshAuthorization()
                    }, 1e3 * n)
                }, e.prototype.updateUserProfile = function(e) {
                    return n(this, void 0, void 0, function() {
                        return s(this, function(t) {
                            return [2, this.authProvider.updateUserProfile(this, e)]
                        })
                    })
                }, e.prototype.updateUserEmailAddress = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, o, u;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e || !e.includes("@")) return [2, Promise.reject(new m.default(m.ErrorType.InvalidArgument, "Invalid Email address"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), t = this.userServiceUrl("users/update_email.json"), r = {
                                        email: e
                                    }, [4, a.default(t, {
                                        body: JSON.stringify(r),
                                        method: "PUT",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 2:
                                    return (n = s.sent()).ok ? [3, 4] : (o = (i = Promise).reject, [4, l.default.handleServerErrorResponse(n)]);
                                case 3:
                                    return [2, o.apply(i, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return u = s.sent(), [2, Promise.reject(new m.default(m.ErrorType.AylaError, u.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updatePassword = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, o, u, c;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e || !t) return [2, Promise.reject(new m.default(m.ErrorType.InvalidArgument, "Password must not be empty"))];
                                    if (e === t) return [2, Promise.reject(new m.default(m.ErrorType.InvalidArgument, "Current and new password are identical"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), r = this.userServiceUrl("users.json"), n = {
                                        user: {
                                            current_password: e,
                                            password: t
                                        }
                                    }, [4, a.default(r, {
                                        body: JSON.stringify(n),
                                        method: "PUT",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 2:
                                    return (i = s.sent()).ok ? [3, 4] : (u = (o = Promise).reject, [4, l.default.handleServerErrorResponse(i)]);
                                case 3:
                                    return [2, u.apply(o, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return c = s.sent(), [2, Promise.reject(m.default.generalError(c.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchUserProfile = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i, o;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    e = this.userServiceUrl("users/get_user_profile.json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, a.default(e, {
                                        method: "GET",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 2:
                                    return (t = s.sent()).ok ? [4, t.json()] : [3, 4];
                                case 3:
                                    return r = s.sent(), [2, d.default.fromJSON(r)];
                                case 4:
                                    return i = (n = Promise).reject, [4, l.default.handleServerErrorResponse(t)];
                                case 5:
                                    return [2, i.apply(n, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return o = s.sent(), [2, Promise.reject(m.default.generalError(o.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.createDatum = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, o, u, c, d;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e) return [2, Promise.reject(new m.default(m.ErrorType.InvalidArgument, "Datum key is required"))];
                                    r = this.userServiceUrl("api/v1/users/data.json"), n = {
                                        datum: {
                                            key: e,
                                            value: t
                                        }
                                    }, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, a.default(r, {
                                        body: JSON.stringify(n),
                                        method: "POST",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 2:
                                    return (i = s.sent()).ok ? [4, i.json()] : [3, 4];
                                case 3:
                                    return o = s.sent(), [2, h.default.fromJSON(o)];
                                case 4:
                                    return c = (u = Promise).reject, [4, l.default.handleServerErrorResponse(i)];
                                case 5:
                                    return [2, c.apply(u, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return d = s.sent(), [2, Promise.reject(m.default.generalError(d.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchDatum = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, o, u;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 6, , 7]), t = this.userServiceUrl("api/v1/users/data/" + e + ".json"), [4, a.default(t, {
                                        method: "GET",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 1:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 3];
                                case 2:
                                    return n = s.sent(), [2, h.default.fromJSON(n)];
                                case 3:
                                    return o = (i = Promise).reject, [4, l.default.handleServerErrorResponse(r)];
                                case 4:
                                    return [2, o.apply(i, [s.sent()])];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return u = s.sent(), [2, Promise.reject(m.default.generalError(u.message))];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchDatums = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, o, u;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 6, , 7]), r = this.userServiceUrl("api/v1/users/data.json"), e && (r += v.default.parameterizeArray("keys", e)), t && (r += "?keys=" + t), [4, a.default(r, {
                                        method: "GET",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 1:
                                    return (n = s.sent()).ok ? [4, n.json()] : [3, 3];
                                case 2:
                                    return [2, s.sent().map(function(e) {
                                        return h.default.fromJSON(e)
                                    })];
                                case 3:
                                    return o = (i = Promise).reject, [4, l.default.handleServerErrorResponse(n)];
                                case 4:
                                    return [2, o.apply(i, [s.sent()])];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return u = s.sent(), [2, Promise.reject(m.default.generalError(u.message))];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateDatum = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, o, u, c, d;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 6, , 7]), r = this.userServiceUrl("api/v1/users/data/" + e + ".json"), n = {
                                        datum: {
                                            value: t
                                        }
                                    }, [4, a.default(r, {
                                        body: JSON.stringify(n),
                                        method: "PUT",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 1:
                                    return (i = s.sent()).ok ? [4, i.json()] : [3, 3];
                                case 2:
                                    return o = s.sent(), [2, h.default.fromJSON(o)];
                                case 3:
                                    return c = (u = Promise).reject, [4, l.default.handleServerErrorResponse(i)];
                                case 4:
                                    return [2, c.apply(u, [s.sent()])];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return d = s.sent(), [2, Promise.reject(m.default.generalError(d.message))];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.deleteDatum = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, o;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 4, , 5]), t = this.userServiceUrl("api/v1/users/data/" + e + ".json"), [4, a.default(t, {
                                        method: "DELETE",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 1:
                                    return (r = s.sent()).ok ? [3, 3] : (i = (n = Promise).reject, [4, l.default.handleServerErrorResponse(r)]);
                                case 2:
                                    return [2, i.apply(n, [s.sent()])];
                                case 3:
                                    return [3, 5];
                                case 4:
                                    return o = s.sent(), [2, Promise.reject(m.default.generalError(o.message))];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.createContact = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, o, u, c;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 6, , 7]), t = this.userServiceUrl("api/v1/users/contacts.json"), r = {
                                        contact: e
                                    }, [4, a.default(t, {
                                        body: JSON.stringify(r),
                                        method: "POST",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 1:
                                    return (n = s.sent()).ok ? [4, n.json()] : [3, 3];
                                case 2:
                                    return i = s.sent(), [2, f.default.fromJSON(i)];
                                case 3:
                                    return u = (o = Promise).reject, [4, l.default.handleServerErrorResponse(n)];
                                case 4:
                                    return [2, u.apply(o, [s.sent()])];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return c = s.sent(), [2, Promise.reject(m.default.generalError(c.message))];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateContact = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, o, u, c, d;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!(t = e.id)) return [2, Promise.reject(new m.default(m.ErrorType.InvalidArgument, "Invalid contact"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), r = this.userServiceUrl("api/v1/users/contacts/" + t + ".json"), n = {
                                        contact: e
                                    }, [4, a.default(r, {
                                        body: JSON.stringify(n),
                                        method: "PUT",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 2:
                                    return (i = s.sent()).ok ? [4, i.json()] : [3, 4];
                                case 3:
                                    return o = s.sent(), [2, f.default.fromJSON(o)];
                                case 4:
                                    return c = (u = Promise).reject, [4, l.default.handleServerErrorResponse(i)];
                                case 5:
                                    return [2, c.apply(u, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return d = s.sent(), [2, Promise.reject(m.default.generalError(d.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchContacts = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 6, , 7]), e = this.userServiceUrl("api/v1/users/contacts.json"), [4, a.default(e, {
                                        method: "GET",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 1:
                                    return (t = s.sent()).ok ? [4, t.json()] : [3, 3];
                                case 2:
                                    return [2, s.sent().map(function(e) {
                                        return f.default.fromJSON(e)
                                    })];
                                case 3:
                                    return n = (r = Promise).reject, [4, l.default.handleServerErrorResponse(t)];
                                case 4:
                                    return [2, n.apply(r, [s.sent()])];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return i = s.sent(), [2, Promise.reject(m.default.generalError(i.message))];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.deleteContact = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, o, u;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!(t = e.id)) return [2, Promise.reject(new m.default(m.ErrorType.InvalidArgument, "Invalid contact"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), r = this.userServiceUrl("api/v1/users/contacts/" + t + ".json"), [4, a.default(r, {
                                        method: "DELETE",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 2:
                                    return (n = s.sent()).ok ? [3, 4] : (o = (i = Promise).reject, [4, l.default.handleServerErrorResponse(n)]);
                                case 3:
                                    return [2, o.apply(i, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return u = s.sent(), [2, Promise.reject(m.default.generalError(u.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchOwnedShares = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 6, , 7]), e = this.userServiceUrl("api/v1/users/shares.json"), [4, a.default(e, {
                                        method: "GET",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 1:
                                    return (t = s.sent()).ok ? [4, t.json()] : [3, 3];
                                case 2:
                                    return [2, s.sent().map(function(e) {
                                        return p.default.fromJSON(e)
                                    })];
                                case 3:
                                    return n = (r = Promise).reject, [4, l.default.handleServerErrorResponse(t)];
                                case 4:
                                    return [2, n.apply(r, [s.sent()])];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return i = s.sent(), [2, Promise.reject(m.default.generalError(i.message))];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchReceivedShares = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 6, , 7]), e = this.userServiceUrl("api/v1/users/shares/received.json"), [4, a.default(e, {
                                        method: "GET",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 1:
                                    return (t = s.sent()).ok ? [4, t.json()] : [3, 3];
                                case 2:
                                    return [2, s.sent().map(function(e) {
                                        return p.default.fromJSON(e)
                                    })];
                                case 3:
                                    return n = (r = Promise).reject, [4, l.default.handleServerErrorResponse(t)];
                                case 4:
                                    return [2, n.apply(r, [s.sent()])];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return i = s.sent(), [2, Promise.reject(m.default.generalError(i.message))];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchShare = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, o, u;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e) return [2, Promise.reject(new m.default(m.ErrorType.InvalidArgument, "ShareId is required"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), t = this.userServiceUrl("api/v1/users/shares/" + e + ".json"), [4, a.default(t, {
                                        method: "GET",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), [2, p.default.fromJSON(n)];
                                case 4:
                                    return o = (i = Promise).reject, [4, l.default.handleServerErrorResponse(r)];
                                case 5:
                                    return [2, o.apply(i, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return u = s.sent(), [2, Promise.reject(m.default.generalError(u.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.createShare = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, o, u, c;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 6, , 7]), r = this.userServiceUrl("api/v1/users/shares.json"), t && (r += "?email_template_id=" + t), [4, a.default(r, {
                                        body: JSON.stringify({
                                            share: this.toShareJSON(e)
                                        }),
                                        method: "POST",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 1:
                                    return (n = s.sent()).ok ? [4, n.json()] : [3, 3];
                                case 2:
                                    return i = s.sent(), [2, p.default.fromJSON(i)];
                                case 3:
                                    return u = (o = Promise).reject, [4, l.default.handleServerErrorResponse(n)];
                                case 4:
                                    return [2, u.apply(o, [s.sent()])];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return c = s.sent(), [2, Promise.reject(m.default.generalError(c.message))];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.createShares = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, o, u, c, d = this;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 6, , 7]), r = this.userServiceUrl("api/v1/users/shares.json"), t && (r += "?email_template_id=" + t), n = e.map(function(e) {
                                        return {
                                            share: d.toShareJSON(e)
                                        }
                                    }), [4, a.default(r, {
                                        body: JSON.stringify({
                                            shares: n
                                        }),
                                        method: "POST",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 1:
                                    return (i = s.sent()).ok ? [4, i.json()] : [3, 3];
                                case 2:
                                    return [2, s.sent().map(function(e) {
                                        return p.default.fromJSON(e)
                                    })];
                                case 3:
                                    return u = (o = Promise).reject, [4, l.default.handleServerErrorResponse(i)];
                                case 4:
                                    return [2, u.apply(o, [s.sent()])];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return c = s.sent(), [2, Promise.reject(m.default.generalError(c.message))];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateShare = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, o, u;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e.id) return [2, Promise.reject(new m.default(m.ErrorType.InvalidArgument, "Only shares fetched from Ayla service can be updated"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), t = this.userServiceUrl("api/v1/users/shares/" + e.id + ".json"), [4, a.default(t, {
                                        body: JSON.stringify({
                                            share: this.toShareJSON(e)
                                        }),
                                        method: "PUT",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), [2, p.default.fromJSON(n)];
                                case 4:
                                    return o = (i = Promise).reject, [4, l.default.handleServerErrorResponse(r)];
                                case 5:
                                    return [2, o.apply(i, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return u = s.sent(), [2, Promise.reject(m.default.generalError(u.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.deleteShare = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, o;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!e) return [2, Promise.reject(new m.default(m.ErrorType.InvalidArgument, "ShareId is requried"))];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), t = this.userServiceUrl("api/v1/users/shares/" + e + ".json"), [4, a.default(t, {
                                        method: "DELETE",
                                        headers: l.default.authHeader(this)
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [3, 4] : (i = (n = Promise).reject, [4, l.default.handleServerErrorResponse(r)]);
                                case 3:
                                    return [2, i.apply(n, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return o = s.sent(), [2, Promise.reject(m.default.generalError(o.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.deleteAccount = function() {
                    return n(this, void 0, void 0, function() {
                        return s(this, function(e) {
                            return [2, this.authProvider.deleteUser(this)]
                        })
                    })
                }, e.prototype.toShareJSON = function(e) {
                    return {
                        operation: e.operation,
                        user_email: e.userEmail,
                        resource_id: e.resourceId,
                        resource_name: e.resourceName,
                        start_date_at: e.startDateAt,
                        end_date_at: e.endDateAt,
                        role_name: e.roleName
                    }
                }, e.prototype.getAuthHeaderValue = function() {
                    return this.authorization ? "auth_token " + this.authorization.accessToken : ""
                }, e.prototype.getAccessToken = function() {
                    return this.authorization ? this.authorization.accessToken : null
                }, e.prototype.notifySessionClosed = function(e) {
                    this.listeners.forEach(function(t) {
                        return t.sessionClosed(e)
                    })
                }, e.prototype.notifyAuthorizationRefreshed = function(e) {
                    this.listeners.forEach(function(t) {
                        return t.authorizationRefreshed(e)
                    })
                }, e.prototype.userServiceUrl = function(e) {
                    return u.default.shared().getServiceUrl(c.CloudService.User, e)
                }, e.prototype.shutDown = function() {
                    return n(this, void 0, void 0, function() {
                        return s(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.deviceManager && this.deviceManager.shutDown(), [4, this.authProvider.signOut(this)];
                                case 1:
                                    return e.sent(), this.refreshTimeoutID > 0 && clearTimeout(this.refreshTimeoutID), this.authorization = void 0, [2]
                            }
                        })
                    })
                }, e.prototype.onPause = function() {
                    this.refreshTimeoutID > 0 && clearTimeout(this.refreshTimeoutID), this.deviceManager && this.deviceManager.onPause()
                }, e.prototype.onResume = function() {
                    this.authorization && this.authorization.getSecondsToExpiry() < this.REFRESH_GRACE_PERIOD ? this.refreshAuthorization() : this.deviceManager && this.deviceManager.onResume()
                }, e
            }();
        t.default = b
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))(function(s, i) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        e.done ? s(e.value) : new r(function(t) {
                            t(e.value)
                        }).then(a, o)
                    }
                    u((n = n.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function(e, t) {
                var r, n, s, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (s = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(n, i[1])).done) return s;
                                switch (n = 0, s && (i = [0, s.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < s[1]) {
                                            a.label = s[1], s = i;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(i);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(r(3)),
            o = r(4),
            u = function() {
                function e() {}
                return e.prototype.signIn = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t;
                        return s(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, e.authenticate()];
                                case 1:
                                    return t = r.sent(), a.default.shared().signInSuccessful(t, e), [2, t]
                            }
                        })
                    })
                }, e.prototype.userServiceUrl = function(e) {
                    return a.default.shared().getServiceUrl(o.CloudService.User, e)
                }, e
            }();
        t.default = u
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            s = function() {
                function e() {}
                return e.fromJSON = function(t) {
                    var r = new e;
                    return Object.assign(r, n.camelizeKeys(t)), r
                }, e
            }();
        t.default = s
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            s = function() {
                function e() {}
                return e.fromJSON = function(t) {
                    var r = new e,
                        s = t.subscription;
                    return Object.assign(r, n.camelizeKeys(s)), r
                }, e
            }();
        t.default = s
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, s = r(0),
            i = function() {
                function e(e, t, r, n) {
                    this.type = "SchedulePropertyAction", this.name = e, this.active = t, this.baseType = r, this.value = n
                }
                return e.prototype.setScheduleActionFirePoint = function(e) {
                    switch (e) {
                        case n.AtStart:
                            this.atStart = !0, this.atEnd = !1, this.inRange = !1;
                            break;
                        case n.AtEnd:
                            this.atStart = !1, this.atEnd = !0, this.inRange = !1;
                            break;
                        case n.InRange:
                            this.atStart = !1, this.atEnd = !1, this.inRange = !0;
                            break;
                        default:
                            this.atStart = !1, this.atEnd = !1, this.inRange = !1
                    }
                }, e.fromJSON = function(t) {
                    var r = s.camelizeKeys(t.schedule_action),
                        n = new e(r.name, r.active, r.base_type, r.value);
                    return Object.assign(n, r), n
                }, e
            }();
        t.default = i,
            function(e) {
                e[e.AtStart = 0] = "AtStart", e[e.AtEnd = 1] = "AtEnd", e[e.InRange = 2] = "InRange"
            }(n = t.ScheduleActionFirePoint || (t.ScheduleActionFirePoint = {}))
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))(function(s, i) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        e.done ? s(e.value) : new r(function(t) {
                            t(e.value)
                        }).then(a, o)
                    }
                    u((n = n.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function(e, t) {
                var r, n, s, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (s = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(n, i[1])).done) return s;
                                switch (n = 0, s && (i = [0, s.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < s[1]) {
                                            a.label = s[1], s = i;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(i);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(r(26)),
            o = i(r(2)),
            u = i(r(1)),
            c = r(0),
            l = function() {
                function e(e, t) {
                    this.direction = e, this.name = t
                }
                return e.prototype.createAction = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, l, d, h, f, p, v;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!(t = this.getDeviceManager())) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "No device manager is available"))];
                                    if ((r = this.isInValidScheduleAction(e)).invalid) return [2, Promise.reject(r.error)];
                                    if (!this.key) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "Schedule key is required"))];
                                    n = t.sessionManager, i = {
                                        schedule_action: c.decamelizeKeys(e)
                                    }, l = t.deviceServiceUrl("apiv1/schedules/" + this.key + "/schedule_actions.json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(l, {
                                        method: "POST",
                                        body: JSON.stringify(i),
                                        headers: o.default.authHeader(n)
                                    })];
                                case 2:
                                    return (d = s.sent()).ok ? [4, d.json()] : [3, 4];
                                case 3:
                                    return h = s.sent(), [2, a.default.fromJSON(h)];
                                case 4:
                                    return p = (f = Promise).reject, [4, o.default.handleServerErrorResponse(d)];
                                case 5:
                                    return [2, p.apply(f, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return v = s.sent(), [2, Promise.reject(u.default.generalError(v.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateAction = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, l, d, h, f, p, v;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!(t = this.getDeviceManager())) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "No device manager is available"))];
                                    if ((r = this.isInValidScheduleAction(e)).invalid) return [2, Promise.reject(r.error)];
                                    if (!e.key) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "Invalid Schedule Action Key.The Schedule Action should be first fetched from the service"))];
                                    n = t.sessionManager, i = {
                                        scheduleAction: e
                                    }, l = t.deviceServiceUrl("apiv1/schedule_actions/" + e.key + ".json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(l, {
                                        method: "PUT",
                                        body: JSON.stringify(c.decamelizeKeys(i)),
                                        headers: o.default.authHeader(n)
                                    })];
                                case 2:
                                    return (d = s.sent()).ok ? [4, d.json()] : [3, 4];
                                case 3:
                                    return h = s.sent(), [2, a.default.fromJSON(h)];
                                case 4:
                                    return p = (f = Promise).reject, [4, o.default.handleServerErrorResponse(d)];
                                case 5:
                                    return [2, p.apply(f, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return v = s.sent(), [2, Promise.reject(u.default.generalError(v.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateActions = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, o, c, l, d, h;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.getDeviceManager()) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "No device manager is available"))];
                                    if (!e || e.length < 1) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "Invalid Schedule Actions"))];
                                    for (t = 0, r = e; t < r.length; t++) {
                                        if (c = r[t], (n = this.isInValidScheduleAction(c)).invalid) return [2, Promise.reject(n.error)];
                                        if (!c.key) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "Invalid Schedule Action Key.The Schedule Action should be first fetched from the service"))]
                                    }
                                    i = [], s.label = 1;
                                case 1:
                                    s.trys.push([1, 6, , 7]), a = 0, o = e, s.label = 2;
                                case 2:
                                    return a < o.length ? (c = o[a], d = (l = i).push, [4, this.updateAction(c)]) : [3, 5];
                                case 3:
                                    d.apply(l, [s.sent()]), s.label = 4;
                                case 4:
                                    return a++, [3, 2];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return h = s.sent(), [2, Promise.reject(h)];
                                case 7:
                                    return [2, i]
                            }
                        })
                    })
                }, e.prototype.fetchActions = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i, c, l;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!(e = this.getDeviceManager())) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "No device manager is available"))];
                                    if (!this.key) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "Schedule key is required"))];
                                    t = e.sessionManager, r = e.deviceServiceUrl("apiv1/schedules/" + this.key + "/schedule_actions.json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(r, {
                                        method: "GET",
                                        headers: o.default.authHeader(t)
                                    })];
                                case 2:
                                    return (n = s.sent()).ok ? [4, n.json()] : [3, 4];
                                case 3:
                                    return [2, s.sent().map(function(e) {
                                        return a.default.fromJSON(e)
                                    })];
                                case 4:
                                    return c = (i = Promise).reject, [4, o.default.handleServerErrorResponse(n)];
                                case 5:
                                    return [2, c.apply(i, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return l = s.sent(), [2, Promise.reject(u.default.generalError(l.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.deleteAction = function(e) {
                    return n(this, void 0, void 0, function() {
                        var t, r, n, i, a, c, l, d;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!(t = this.getDeviceManager())) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "No device manager is available"))];
                                    if ((r = this.isInValidScheduleAction(e)).invalid) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, r.error))];
                                    if (!e.key) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "Invalid Schedule Action Key.The Schedule Action should be first fetched from the service"))];
                                    n = t.sessionManager, i = t.deviceServiceUrl("apiv1/schedule_actions/" + e.key + ".json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), [4, fetch(i, {
                                        method: "DELETE",
                                        headers: o.default.authHeader(n)
                                    })];
                                case 2:
                                    return (a = s.sent()).ok ? [3, 4] : (l = (c = Promise).reject, [4, o.default.handleServerErrorResponse(a)]);
                                case 3:
                                    return [2, l.apply(c, [s.sent()])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return d = s.sent(), [2, Promise.reject(u.default.generalError(d.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.deleteAllActions = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t = this;
                        return s(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!this.getDeviceManager()) return [2, Promise.reject(new u.default(u.ErrorType.InvalidArgument, "No device manager is available"))];
                                    r.label = 1;
                                case 1:
                                    return r.trys.push([1, 4, , 5]), [4, this.fetchActions()];
                                case 2:
                                    return [4, r.sent().forEach(function(e) {
                                        return t.deleteAction(e)
                                    })];
                                case 3:
                                    return r.sent(), [3, 5];
                                case 4:
                                    return e = r.sent(), [2, Promise.reject(new u.default(u.ErrorType.AylaError, e.message))];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.isInValidScheduleAction = function(e) {
                    var t = !1,
                        r = void 0;
                    return e ? e.name ? e.type ? void 0 === e.value ? (t = !0, r = "Schedule Action value is required") : e.baseType || (t = !0, r = "Schedule Action base type is required") : (t = !0, r = "Schedule Action Type is required") : (t = !0, r = "Schedule Action Name is required") : (t = !0, r = "Invalid Schedule Action"), {
                        invalid: t,
                        error: r
                    }
                }, e.prototype.getDeviceManager = function() {
                    if (this.device) return this.device.deviceManager
                }, e.fromJSON = function(t) {
                    var r = c.camelizeKeys(t.schedule),
                        n = new e(r.direction, r.name);
                    return Object.assign(n, r), n
                }, e.replacer = function(e, t) {
                    if ("device" !== e) return t
                }, e
            }();
        t.default = l
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            s = function() {
                function e() {}
                return e.fromJSON = function(t) {
                    var r = n.camelizeKeys(t),
                        s = new e;
                    return Object.assign(s, r.timezone), s
                }, e
            }();
        t.AylaTimeZone = s
    }, function(e, t, r) {
        "use strict";
        var n, s = this && this.__extends || (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                },
                function(e, t) {
                    function r() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                }),
            i = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))(function(s, i) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        e.done ? s(e.value) : new r(function(t) {
                            t(e.value)
                        }).then(a, o)
                    }
                    u((n = n.apply(e, t || [])).next())
                })
            },
            a = this && this.__generator || function(e, t) {
                var r, n, s, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (s = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(n, i[1])).done) return s;
                                switch (n = 0, s && (i = [0, s.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < s[1]) {
                                            a.label = s[1], s = i;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(i);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            },
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = o(r(10)),
            c = r(0),
            l = o(r(1)),
            d = o(r(2)),
            h = function(e) {
                function t(t) {
                    var r = e.call(this, "") || this;
                    return r.closed = !1, r.property = t, r
                }
                return s(t, e), t.prototype.uploadBlob = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t, r;
                        return a(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!this.file) return [2, Promise.reject(new l.default(l.ErrorType.Precondition, "Invalid file URL"))];
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 6, , 7]), [4, fetch(this.file, {
                                        method: "PUT",
                                        body: e
                                    })];
                                case 2:
                                    return (t = n.sent()).ok ? [4, this.markAsComplete()] : [3, 4];
                                case 3:
                                    return [2, n.sent()];
                                case 4:
                                    return [2, Promise.reject(l.default.generalError(t.statusText))];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return r = n.sent(), [2, Promise.reject(l.default.generalError(r.message))];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.markAsComplete = function() {
                    return i(this, void 0, void 0, function() {
                        var e, t, r, n, s;
                        return a(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!(e = this.property.getDeviceManager())) return [2, Promise.reject(new l.default(l.ErrorType.Precondition, "No device manager is available"))];
                                    if (t = e.sessionManager, !(r = this.value)) return [2, Promise.reject(new l.default(l.ErrorType.Precondition, "Location path is empty"))];
                                    i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, fetch(r, {
                                        method: "PUT",
                                        headers: d.default.authHeader(t)
                                    })];
                                case 2:
                                    return (n = i.sent()).ok ? (console.log("Mark as complete success"), [3, 4]) : [2, Promise.reject(l.default.generalError(n.statusText))];
                                case 3:
                                    return s = i.sent(), [2, Promise.reject(l.default.generalError(s.message))];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.downloadFile = function() {
                    return i(this, void 0, void 0, function() {
                        var e, r, n, s, i, o, u;
                        return a(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!(e = this.property.getDeviceManager())) return [2, Promise.reject(new l.default(l.ErrorType.Precondition, "No device manager is available"))];
                                    if (r = e.sessionManager, !(n = this.value)) return [2, Promise.reject(new l.default(l.ErrorType.Precondition, "Location path is empty"))];
                                    a.label = 1;
                                case 1:
                                    return a.trys.push([1, 7, , 8]), [4, fetch(n, {
                                        method: "GET",
                                        headers: d.default.authHeader(r)
                                    })];
                                case 2:
                                    return (s = a.sent()).ok ? [4, s.json()] : [3, 5];
                                case 3:
                                    return i = a.sent(), o = t.fromJSON(i, this.property), [4, this.downloadFromAWS(o.file)];
                                case 4:
                                    return [2, a.sent()];
                                case 5:
                                    return [2, Promise.reject(l.default.generalError(s.statusText))];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return u = a.sent(), [2, Promise.reject(l.default.generalError(u.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.downloadFromAWS = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t, r, n;
                        return a(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 5, , 6]), [4, fetch(e, {
                                        method: "GET"
                                    })];
                                case 1:
                                    return (t = s.sent()).ok ? [4, t.blob()] : [3, 3];
                                case 2:
                                    return r = s.sent(), this.markAsFetched(), [2, r];
                                case 3:
                                    return [2, Promise.reject(l.default.generalError(t.statusText))];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return n = s.sent(), [2, Promise.reject(l.default.generalError(n.message))];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.markAsFetched = function() {
                    return i(this, void 0, void 0, function() {
                        var e, t, r, n, s, i;
                        return a(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!(e = this.property.getDeviceManager())) return [2, Promise.reject(new l.default(l.ErrorType.Precondition, "No device manager is available"))];
                                    if (t = e.sessionManager, !(r = this.value)) return [2, Promise.reject(new l.default(l.ErrorType.Precondition, "Location path is empty"))];
                                    n = {
                                        datapoint: {
                                            fetched: "true"
                                        }
                                    }, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, fetch(r, {
                                        method: "PUT",
                                        headers: d.default.authHeader(t),
                                        body: JSON.stringify(n)
                                    })];
                                case 2:
                                    return (s = a.sent()).ok ? (console.log("Mark as fetched success"), [3, 4]) : [2, Promise.reject(l.default.generalError(s.statusText))];
                                case 3:
                                    return i = a.sent(), [2, Promise.reject(l.default.generalError(i.message))];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.fromJSON = function(e, r) {
                    var n = c.camelizeKeys(e.datapoint),
                        s = new t(r);
                    return Object.assign(s, n), s
                }, t
            }(u.default);
        t.AylaDatapointBlob = h
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))(function(s, i) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        e.done ? s(e.value) : new r(function(t) {
                            t(e.value)
                        }).then(a, o)
                    }
                    u((n = n.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function(e, t) {
                var r, n, s, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (s = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(n, i[1])).done) return s;
                                switch (n = 0, s && (i = [0, s.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < s[1]) {
                                            a.label = s[1], s = i;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(i);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(6),
            o = i(r(12)),
            u = i(r(10)),
            c = i(r(2)),
            l = r(29),
            d = i(r(5)),
            h = i(r(1)),
            f = function() {
                function e() {
                    this.ackPollingMaxCount = 8, this.ackPollingInterval = 1e3, this.readonly = !1, this.key = -1, this.baseType = "", this.value = void 0, this.dataUpdatedAt = "", this.name = "", this.displayName = "", this.direction = "", this.type = "", this.ackEnabled = !1, this.ackStatus = -1, this.ackMessage = -1, this.ackedAt = "", this.lastUpdateSource = a.DataSource.CLOUD
                }
                return e.prototype.getOwner = function() {
                    return this.owningDevice
                }, e.prototype.setOwner = function(e) {
                    this.owningDevice = e
                }, e.prototype.getDeviceManager = function() {
                    if (this.owningDevice) return this.owningDevice.deviceManager
                }, e.prototype.getSessionManager = function() {
                    if (this.getDeviceManager()) return this.getDeviceManager().sessionManager
                }, e.prototype.createDatapoint = function(e, t, r) {
                    return n(this, void 0, void 0, function() {
                        var n, i, a, o, l, d, f, p, v;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if ("file" === this.baseType) return [2, this.createDataPointBlob()];
                                    if (!this.getOwner()) return [2, Promise.reject(new h.default(h.ErrorType.InvalidArgument, "No owner for this property"))];
                                    if (!this.getDeviceManager()) return [2, Promise.reject(new h.default(h.ErrorType.InvalidArgument, "No device manager"))];
                                    r && (this.ackPollingMaxCount = r), n = this.getDeviceManager().deviceServiceUrl("apiv1/properties/" + this.key + "/datapoints.json"), i = {
                                        value: e
                                    }, t && (i.metadata = t), a = {
                                        datapoint: i
                                    }, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(n, {
                                        method: "POST",
                                        body: JSON.stringify(a),
                                        headers: c.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (o = s.sent()).ok ? [4, o.json()] : [3, 4];
                                case 3:
                                    return l = s.sent(), d = u.default.fromJSON(l), this.ackEnabled ? [2, this.startDatapointAckPolling(d.id, 0)] : [2, d];
                                case 4:
                                    return p = (f = Promise).reject, [4, c.default.handleServerErrorResponse(o)];
                                case 5:
                                    return [2, p.apply(f, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return v = s.sent(), [2, Promise.reject(h.default.generalError(v.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.startDatapointAckPolling = function(e, t) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i, o, l, d, f, p, v;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.getOwner()) return [2, Promise.reject(new h.default(h.ErrorType.InvalidArgument, "No owner for this property"))];
                                    if (!this.getDeviceManager()) return [2, Promise.reject(new h.default(h.ErrorType.InvalidArgument, "No device manager"))];
                                    r = this.getOwner().key, n = this.getDeviceManager().deviceServiceUrl("apiv1/devices/" + r + "/properties/" + this.name + "/datapoints/" + e + ".json"), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 8, , 9]), [4, fetch(n, {
                                        method: "GET",
                                        headers: c.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (i = s.sent()).ok ? [4, i.json()] : [3, 5];
                                case 3:
                                    return o = s.sent(), (l = u.default.fromJSON(o)).ackedAt ? (this.updateFromDatapoint(l, a.DataSource.CLOUD), [2, l]) : (d = t + 1) > this.ackPollingMaxCount ? [2, Promise.reject(h.default.generalError("Ack enable property polling time out"))] : [4, this.timeout(this.ackPollingInterval)];
                                case 4:
                                    return s.sent(), [2, this.startDatapointAckPolling(e, d)];
                                case 5:
                                    return p = (f = Promise).reject, [4, c.default.handleServerErrorResponse(i)];
                                case 6:
                                    return [2, p.apply(f, [s.sent()])];
                                case 7:
                                    return [3, 9];
                                case 8:
                                    return v = s.sent(), [2, Promise.reject(h.default.generalError(v.message))];
                                case 9:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.timeout = function(e) {
                    return new Promise(function(t) {
                        return setTimeout(t, e)
                    })
                }, e.prototype.createDataPointBlob = function() {
                    return n(this, void 0, void 0, function() {
                        var e, t, r, n, i, a, o;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.getOwner()) return [2, Promise.reject(new h.default(h.ErrorType.InvalidArgument, "No owner for this property"))];
                                    if (!this.getDeviceManager()) return [2, Promise.reject(new h.default(h.ErrorType.InvalidArgument, "No device manager"))];
                                    e = this.getDeviceManager().deviceServiceUrl("apiv1/properties/" + this.key + "/datapoints.json"), t = {
                                        datapoint: {}
                                    }, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(e, {
                                        method: "POST",
                                        body: JSON.stringify(t),
                                        headers: c.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (r = s.sent()).ok ? [4, r.json()] : [3, 4];
                                case 3:
                                    return n = s.sent(), [2, l.AylaDatapointBlob.fromJSON(n, this)];
                                case 4:
                                    return a = (i = Promise).reject, [4, c.default.handleServerErrorResponse(r)];
                                case 5:
                                    return [2, a.apply(i, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return o = s.sent(), [2, Promise.reject(h.default.generalError(o.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.fetchDatapoints = function(t, r, i) {
                    return n(this, void 0, void 0, function() {
                        var n, a, o, f, p, v, y = this;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.getDeviceManager()) return [2, Promise.reject(new h.default(h.ErrorType.InvalidArgument, "No device manager"))];
                                    (t <= 0 || t > e.MAX_DATAPOINT_COUNT) && (t = e.MAX_DATAPOINT_COUNT), (n = new Map).set("limit", t), r && n.set("filter[created_at_since_date]", r.toISOString()), i && n.set("filter[created_at_end_date]", i.toISOString()), a = this.getDeviceManager().deviceServiceUrl("apiv1/properties/" + this.key + "/datapoints.json"), a = d.default.appendParameters(a, n), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]), [4, fetch(a, {
                                        method: "GET",
                                        headers: c.default.authHeader(this.getSessionManager())
                                    })];
                                case 2:
                                    return (o = s.sent()).ok ? [4, o.json()] : [3, 4];
                                case 3:
                                    return [2, s.sent().map(function(e) {
                                        return "file" === y.baseType ? l.AylaDatapointBlob.fromJSON(e, y) : u.default.fromJSON(e)
                                    })];
                                case 4:
                                    return p = (f = Promise).reject, [4, c.default.handleServerErrorResponse(o)];
                                case 5:
                                    return [2, p.apply(f, [s.sent()])];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return v = s.sent(), [2, Promise.reject(h.default.generalError(v.message))];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.updateFromDatapoint = function(e, t) {
                    this.lastUpdateSource = a.DataSource.DSS;
                    var r, n = new Set;
                    if (e.value !== this.value && (n.add("value"), this.value = e.value), e.metadata !== this.metadata && (n.add("metadata"), this.metadata = e.metadata), e.updatedAt !== this.dataUpdatedAt && (n.add("dataUpdatedAt"), this.dataUpdatedAt = e.updatedAt), e.ackedAt !== this.ackedAt && (n.add("ackedAt"), n.add("ackMessage"), n.add("ackStatus"), this.ackedAt = e.ackedAt, this.ackMessage = e.ackMessage, this.ackStatus = e.ackStatus), n.size > 0) {
                        r = new o.default(this.name, n, this.value);
                        var s = this.getOwner();
                        s && s.notifyDeviceChanged(r)
                    }
                    return r
                }, e.prototype.updateFrom = function(e, t) {
                    this.lastUpdateSource = t;
                    var r = new Set;
                    if (this.key !== e.key && (this.key = e.key, r.add("key")), this.ackedAt !== e.ackedAt && (this.ackedAt = e.ackedAt, r.add("ackedAt")), this.ackMessage !== e.ackMessage && (this.ackMessage = e.ackMessage, r.add("ackMessage")), this.ackStatus !== e.ackStatus && (this.ackStatus = e.ackStatus, r.add("ackStatus")), this.dataUpdatedAt !== e.dataUpdatedAt && (this.dataUpdatedAt = e.dataUpdatedAt, r.add("dataUpdatedAt")), this.displayName !== e.displayName && (this.displayName = e.displayName, r.add("displayName")), this.value !== e.value && (this.value = e.value, r.add("value")), this.metadata !== e.metadata && (this.metadata = e.metadata, r.add("metadata")), r.size > 0) return new o.default(this.name, r, this.value)
                }, e.MAX_DATAPOINT_COUNT = 100, e.DEFAULT_ACK_WAIT_TIME = 10, e
            }();
        t.default = f
    }, function(e, t, r) {
        "use strict";
        var n, s = this && this.__extends || (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                },
                function(e, t) {
                    function r() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                }),
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(r(13)),
            o = function(e) {
                function t(t, r) {
                    var n = e.call(this, a.ChangeType.List) || this;
                    return n.addedItems = t, n.removedIdentifiers = r, n
                }
                return s(t, e), t
            }(a.default);
        t.default = o
    }, function(e, t) {
        ! function(e) {
            "use strict";
            if (!e.fetch) {
                var t = {
                    searchParams: "URLSearchParams" in e,
                    iterable: "Symbol" in e && "iterator" in Symbol,
                    blob: "FileReader" in e && "Blob" in e && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in e,
                    arrayBuffer: "ArrayBuffer" in e
                };
                if (t.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    n = function(e) {
                        return e && DataView.prototype.isPrototypeOf(e)
                    },
                    s = ArrayBuffer.isView || function(e) {
                        return e && r.indexOf(Object.prototype.toString.call(e)) > -1
                    };
                l.prototype.append = function(e, t) {
                    e = o(e), t = u(t);
                    var r = this.map[e];
                    this.map[e] = r ? r + "," + t : t
                }, l.prototype.delete = function(e) {
                    delete this.map[o(e)]
                }, l.prototype.get = function(e) {
                    return e = o(e), this.has(e) ? this.map[e] : null
                }, l.prototype.has = function(e) {
                    return this.map.hasOwnProperty(o(e))
                }, l.prototype.set = function(e, t) {
                    this.map[o(e)] = u(t)
                }, l.prototype.forEach = function(e, t) {
                    for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                }, l.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push(r)
                    }), c(e)
                }, l.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), c(e)
                }, l.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push([r, t])
                    }), c(e)
                }, t.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
                var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                y.prototype.clone = function() {
                    return new y(this, {
                        body: this._bodyInit
                    })
                }, v.call(y.prototype), v.call(g.prototype), g.prototype.clone = function() {
                    return new g(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new l(this.headers),
                        url: this.url
                    })
                }, g.error = function() {
                    var e = new g(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var a = [301, 302, 303, 307, 308];
                g.redirect = function(e, t) {
                    if (-1 === a.indexOf(t)) throw new RangeError("Invalid status code");
                    return new g(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.Headers = l, e.Request = y, e.Response = g, e.fetch = function(e, r) {
                    return new Promise(function(n, s) {
                        var i = new y(e, r),
                            a = new XMLHttpRequest;
                        a.onload = function() {
                            var e, t, r = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: (e = a.getAllResponseHeaders() || "", t = new l, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                    var r = e.split(":"),
                                        n = r.shift().trim();
                                    if (n) {
                                        var s = r.join(":").trim();
                                        t.append(n, s)
                                    }
                                }), t)
                            };
                            r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                            var s = "response" in a ? a.response : a.responseText;
                            n(new g(s, r))
                        }, a.onerror = function() {
                            s(new TypeError("Network request failed"))
                        }, a.ontimeout = function() {
                            s(new TypeError("Network request failed"))
                        }, a.open(i.method, i.url, !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && t.blob && (a.responseType = "blob"), i.headers.forEach(function(e, t) {
                            a.setRequestHeader(t, e)
                        }), a.send(void 0 === i._bodyInit ? null : i._bodyInit)
                    })
                }, e.fetch.polyfill = !0
            }

            function o(e) {
                if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                return e.toLowerCase()
            }

            function u(e) {
                return "string" != typeof e && (e = String(e)), e
            }

            function c(e) {
                var r = {
                    next: function() {
                        var t = e.shift();
                        return {
                            done: void 0 === t,
                            value: t
                        }
                    }
                };
                return t.iterable && (r[Symbol.iterator] = function() {
                    return r
                }), r
            }

            function l(e) {
                this.map = {}, e instanceof l ? e.forEach(function(e, t) {
                    this.append(t, e)
                }, this) : Array.isArray(e) ? e.forEach(function(e) {
                    this.append(e[0], e[1])
                }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                    this.append(t, e[t])
                }, this)
            }

            function d(e) {
                if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                e.bodyUsed = !0
            }

            function h(e) {
                return new Promise(function(t, r) {
                    e.onload = function() {
                        t(e.result)
                    }, e.onerror = function() {
                        r(e.error)
                    }
                })
            }

            function f(e) {
                var t = new FileReader,
                    r = h(t);
                return t.readAsArrayBuffer(e), r
            }

            function p(e) {
                if (e.slice) return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)), t.buffer
            }

            function v() {
                return this.bodyUsed = !1, this._initBody = function(e) {
                    if (this._bodyInit = e, e)
                        if ("string" == typeof e) this._bodyText = e;
                        else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                    else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                    else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                    else if (t.arrayBuffer && t.blob && n(e)) this._bodyArrayBuffer = p(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                    else {
                        if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !s(e)) throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = p(e)
                    } else this._bodyText = "";
                    this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, t.blob && (this.blob = function() {
                    var e = d(this);
                    if (e) return e;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? d(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(f)
                }), this.text = function() {
                    var e, t, r, n = d(this);
                    if (n) return n;
                    if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, r = h(t), t.readAsText(e), r;
                    if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                        for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
                        return r.join("")
                    }(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, t.formData && (this.formData = function() {
                    return this.text().then(m)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }

            function y(e, t) {
                var r, n, s = (t = t || {}).body;
                if (e instanceof y) {
                    if (e.bodyUsed) throw new TypeError("Already read");
                    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new l(e.headers)), this.method = e.method, this.mode = e.mode, s || null == e._bodyInit || (s = e._bodyInit, e.bodyUsed = !0)
                } else this.url = String(e);
                if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new l(t.headers)), this.method = (r = t.method || this.method || "GET", n = r.toUpperCase(), i.indexOf(n) > -1 ? n : r), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && s) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(s)
            }

            function m(e) {
                var t = new FormData;
                return e.trim().split("&").forEach(function(e) {
                    if (e) {
                        var r = e.split("="),
                            n = r.shift().replace(/\+/g, " "),
                            s = r.join("=").replace(/\+/g, " ");
                        t.append(decodeURIComponent(n), decodeURIComponent(s))
                    }
                }), t
            }

            function g(e, t) {
                t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new l(t.headers), this.url = t.url || "", this._initBody(e)
            }
        }("undefined" != typeof self ? self : this)
    }, function(e, t) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (r = window)
        }
        e.exports = r
    }, function(e, t, r) {
        (function(t) {
            var r = null;
            "undefined" != typeof WebSocket ? r = WebSocket : "undefined" != typeof MozWebSocket ? r = MozWebSocket : void 0 !== t ? r = t.WebSocket || t.MozWebSocket : "undefined" != typeof window ? r = window.WebSocket || window.MozWebSocket : "undefined" != typeof self && (r = self.WebSocket || self.MozWebSocket), e.exports = r
        }).call(this, r(33))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, s, i = r(15),
            a = function() {
                return function(e, t) {
                    this.serviceType = n.Development, this.serviceLocation = s.USA, this.allowDSS = !0, this.dssSubscriptionTypes = [i.AylaDSSubscriptionType.Datapoint], this.appId = e, this.appSecret = t
                }
            }();
        t.default = a,
            function(e) {
                e[e.Field = 0] = "Field", e[e.Development = 1] = "Development", e[e.Staging = 2] = "Staging", e[e.Demo = 3] = "Demo"
            }(n = t.ServiceType || (t.ServiceType = {})),
            function(e) {
                e[e.USA = 0] = "USA", e[e.China = 1] = "China", e[e.Europe = 2] = "Europe"
            }(s = t.ServiceLocation || (t.ServiceLocation = {}))
    }])
});