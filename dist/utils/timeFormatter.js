"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRaceTime = void 0;
const formatRaceTime = (timeInMs, format = false, position = 1) => {
    if (!format)
        return timeInMs.toString();
    if (position === 1) {
        const hours = Math.floor(timeInMs / (1000 * 60 * 60));
        const minutes = Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeInMs % (1000 * 60)) / 1000);
        const milliseconds = timeInMs % 1000;
        return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
    }
    else if (position <= 3) {
        const seconds = timeInMs / 1000;
        return seconds.toFixed(3);
    }
    return timeInMs.toString();
};
exports.formatRaceTime = formatRaceTime;
