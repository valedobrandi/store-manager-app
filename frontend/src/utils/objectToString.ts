export default function objectTostring(object: object) {
    if (Array.isArray(object)) [object] = object

    if (!object) return ''
    const objectEntries = Object.entries(object);
    const toUpperCaseKeys = objectEntries.map((obj) => [obj[0].toUpperCase(), obj[1]])
    const joinEntries = toUpperCaseKeys.map((obj) => obj.join(": "));

    return joinEntries.join(" - ");
};

