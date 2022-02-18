/**
 * Returns plain-like object given an object with nested properties.
 * @param {object} obj - Object with nested properties
 * @returns {object} Plain-like object
 */
const plainify = (obj) => {
    if (typeof obj !== 'object' || Array.isArray(obj) || !obj)
    {
        throw new TypeError('Unsupported argument');
    }
    return Object.entries(obj).reduce((acc, kv) => {
        var [k1, o1] = kv;
        let res = {};
        if (o1 && typeof o1 === 'object' && !Array.isArray(o1))
        {
            const tmp = plainify(o1);
            Object.entries(tmp).forEach((kv2) => {
                res[k1+'.'+kv2[0]] = kv2[1];
            });
        }
        else
            res[k1] = o1;
        return Object.assign(acc, res)
    }, {})
}
