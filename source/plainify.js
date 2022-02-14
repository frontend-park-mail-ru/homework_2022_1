'use strict';

function plainify(obj, parent, out = {}){
    for (let k in obj)
    {
        let prop = parent ? parent + '.' + k : k;
        if (typeof obj[k] == 'object')
        {
            plainify(obj[k], prop, out);
        }
        else
        {
            out[prop] = obj[k];
        }
    }
    return out;
}
