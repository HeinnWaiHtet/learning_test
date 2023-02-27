function processObj(obj) {
    var _a, _b;
    console.log("Name ", obj.name);
    console.log("School ", (_b = (_a = obj.school) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "No");
}
var obj = {
    name: "HWH",
    age: 21
};
processObj(obj);
