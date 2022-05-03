export default ({ app }, inject) => {
    inject('api', async endpoint => {
        let res = await fetch('https://cancerfit.up.railway.app/items/' + endpoint)
        let obj = await res.json()
        return obj.data
    })
    inject('sort', (items, order) => {
        let byId = {}
        for (let item of items) {
            byId[item.id] = item
        }
        let sorted = []
        for (let id of order) {
            sorted.push(byId[id])
        }
        return sorted
    })
    inject('setCookie', (cName, cValue, expDays) => {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    })
    inject('getCookie', (cName) => {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie); //to be careful
        const cArr = cDecoded.split('; ');
        let res;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res;
    })
}
