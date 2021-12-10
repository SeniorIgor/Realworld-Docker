"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get('/test', (_, res) => res.send('Our api server is working correctly'));
app.listen(PORT, () => {
    console.log(`🚀 API Server is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map