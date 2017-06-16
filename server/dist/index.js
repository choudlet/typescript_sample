"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path_1 = require("path");
const app = express();
app.use(express.static(path_1.resolve(__dirname, '..', '..', 'client', 'dist')));
app.listen(3000, () => {
    console.log('listening on port 3000 jahhh');
});
//# sourceMappingURL=index.js.map