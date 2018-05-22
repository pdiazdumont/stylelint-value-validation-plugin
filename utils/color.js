const colors = require("../definitions/colors");

const isNamedColor = (value) => {
    return namedColors.indexOf(value) !== -1;
};

const isHexColor = (value) => {
    return /^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(value);
};

const isRGBColor = (value) => {
    return /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/.test(value);
};

const isHSLColor = (value) => {
    return /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)/ig.test(value);
}

const isColor = (value) => {
    return isNamedColor(value) ||
    isHexColor(value) ||
    isRGBColor(value) ||
    isHSLColor(value);
};

module.exports = {
    isNamedColor,
    isHexColor,
    isRGBColor,
    isHSLColor,
    isColor
};
