const isLength = (value) => {
    return /^(0)$|^[0-9]+.?([0-9]+)?(em|ex|ch|rem|vw|vh|vmin|vmax|%|cm|mm|in|px|pt|pc)$/.test(value);
};

module.export = {
    isLength
};