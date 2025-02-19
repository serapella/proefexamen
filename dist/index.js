"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const raceRoutes_1 = __importDefault(require("./routes/raceRoutes"));
const teamRoutes_1 = __importDefault(require("./routes/teamRoutes"));
const driverRoutes_1 = __importDefault(require("./routes/driverRoutes"));
const circuitRoutes_1 = __importDefault(require("./routes/circuitRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware to parse JSON requests
app.use(express_1.default.json());
// Use Routes
app.use("/races", raceRoutes_1.default);
app.use("/teams", teamRoutes_1.default);
app.use("/drivers", driverRoutes_1.default);
app.use("/circuits", circuitRoutes_1.default);
// Connect to MongoDB
mongoose_1.default
    .connect("mongodb://localhost/formula1")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
