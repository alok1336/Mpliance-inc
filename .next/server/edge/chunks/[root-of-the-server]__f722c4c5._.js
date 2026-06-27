(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__f722c4c5._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/ [middleware-edge] (unsupported edge import 'crypto', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`crypto`));
}),
"[project]/Downloads/mpliance-inc/src/lib/prisma.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mpliance-inc/node_modules/@prisma/client/default.js [middleware-edge] (ecmascript)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        "query",
        "error",
        "warn"
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
}),
"[project]/Downloads/mpliance-inc/src/lib/auth.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/mpliance-inc/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/mpliance-inc/node_modules/next-auth/providers/credentials.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mpliance-inc/node_modules/@auth/core/providers/credentials.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mpliance-inc/node_modules/bcryptjs/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$src$2f$lib$2f$prisma$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mpliance-inc/src/lib/prisma.ts [middleware-edge] (ecmascript)");
;
;
;
;
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    session: {
        strategy: "jwt"
    },
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize (credentials) {
                const email = credentials.email;
                const password = credentials.password;
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$src$2f$lib$2f$prisma$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        email
                    },
                    include: {
                        dealerProfile: true
                    }
                });
                if (!user) return null;
                const valid = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
                if (!valid) return null;
                return {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    dealerTier: user.dealerProfile?.tier,
                    subscriptionExpiry: user.dealerProfile?.subscriptionExpiry
                };
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
            id: "dealer-credentials",
            name: "dealer-credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize (credentials) {
                const email = credentials.email;
                const password = credentials.password;
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$src$2f$lib$2f$prisma$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        email
                    },
                    include: {
                        dealerProfile: true
                    }
                });
                if (!user) return null;
                if (user.role !== "DEALER") return null;
                const valid = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
                if (!valid) return null;
                return {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    dealerTier: user.dealerProfile?.tier,
                    subscriptionExpiry: user.dealerProfile?.subscriptionExpiry
                };
            }
        })
    ],
    callbacks: {
        async jwt ({ token, user }) {
            if (user) {
                token.userId = user.id;
                token.role = user.role;
                token.dealerTier = user.dealerTier;
                token.subscriptionExpiry = user.subscriptionExpiry;
            }
            return token;
        },
        async session ({ session, token }) {
            session.user.id = token.userId;
            session.user.role = token.role;
            session.user.dealerTier = token.dealerTier;
            session.user.subscriptionExpiry = token.subscriptionExpiry;
            return session;
        }
    },
    pages: {
        signIn: "/login"
    },
    secret: process.env.NEXTAUTH_SECRET
});
}),
"[project]/Downloads/mpliance-inc/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/mpliance-inc/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mpliance-inc/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mpliance-inc/src/lib/auth.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth"])((req)=>{
    const session = req.auth;
    const pathname = req.nextUrl.pathname;
    // Admin
    if (pathname.startsWith("/admin")) {
        if (!session || session.user.role !== "ADMIN") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", req.url));
        }
    }
    // Dealer
    if (pathname.startsWith("/dealer/dashboard")) {
        if (!session || session.user.role !== "DEALER") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/dealer/login", req.url));
        }
        const expiry = session.user.subscriptionExpiry;
        if (expiry && new Date(expiry) < new Date()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/dealer/renew", req.url));
        }
    }
    // Cart
    if (pathname.startsWith("/cart")) {
        if (!session) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", req.url));
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mpliance$2d$inc$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
});
const config = {
    matcher: [
        "/admin/:path*",
        "/dealer/dashboard/:path*",
        "/cart/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__f722c4c5._.js.map