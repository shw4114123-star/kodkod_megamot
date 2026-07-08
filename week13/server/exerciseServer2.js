import http from "http"


// // 1.
// function extractId(url) {
//     const parts = url.split("/");
//     if (parts.length < 3){
//         return NaN
//     }
//     return parts[2]
// }
// const id1 = extractId("/users/42")
// const id2 = extractId("/users/1")
// const id3 = extractId("/users")
// console.log(id1, id2, id3);


// // 2.
// function parseQuery(url) {
//     const qs = url.split("?")[1] || "";
//     if (qs) {
//         const qs2 = qs.split("&")
//         const qs3 = qs2.map((qw) => qw.split("="))
//         return Object.fromEntries(qs3);
//     } else {
//         return {}
//     }
// }
// const pp = parseQuery("/users?role=admin&page=2")
// const pp1 = parseQuery("/users")
// console.log(pp, "\n", pp1);


// // 3.
// function getQueryParams(rawUrl) {
//     const parsed = new URL(rawUrl, "http://localhost");
//     const qs = parsed.searchParams;
//     return {
//         page: qs.get("page") || "1",
//         limit: qs.get("limit") || "10",
//         sort: qs.get("sort") || "1"
//     };
// }
// console.log(getQueryParams("/users?page=3&sort=name"))
// console.log(getQueryParams("/users?page=23&sort=shlomo"))


// // 4.
// const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];

// function getParam(url, pattern) {
//     // /users/:id vs /users/42
//     const pp = pattern.split("/");
//     const up = url.split("/");
//     const key = pp.find(s => s.startsWith(":"))?.slice(1);
//     const idx = pp.findIndex(s => s.startsWith(":"));
//     return { [key]: up[idx] }
// }
// // handler:
// const url = "/users/19";
// const { id } = getParam(url, "/users/:id");
// const user = users.find(u => u.id === +id);
// if (user) {
//     console.log(`200 ${JSON.stringify(user)}`);
// } else {
//     console.log(`404 ${JSON.stringify({ error: "Not found" })}`);
// }
// const url2 = "/users/1";
// const { id:id2 } = getParam(url2, "/users/:id");
// const user2 = users.find(u => u.id === +id2);
// if (user2) {
//     console.log(`200 ${JSON.stringify(user2)}`);
// } else {
//     console.log(`404 ${JSON.stringify({ error: "Not found" })}`);
// }


// 5.
function handler(req, res) {
    const parsed = new URL(req.url, "http://localhost");
    const qs = parsed.searchParams;
    const role = qs.get("role");
    const page = +(qs.get("page") || 1);
    const limit = +(qs.get("limit") || 10);
    let result = users;
    if (role) {
        // כתוב כאן — filter לפי role
    }
    // כתוב כאן — slice לפי page ו-limit
    sendJSON(res, 200, result);
}










