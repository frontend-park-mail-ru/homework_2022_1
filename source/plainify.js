'use strict';

const plainify = (obj) => {
    if (obj == null || obj == undefined) return obj;
    let res = {};
    for (const k in obj)
    {
        if (obj[k] != null && typeof obj[k] == 'object' && !Array.isArray(obj[k]))
        {
            const tmp = plainify(obj[k]);
            for (const k2 in tmp) res[k+'.'+k2] = tmp[k2];
        }
        else res[k] = obj[k];
    }
    return res
}