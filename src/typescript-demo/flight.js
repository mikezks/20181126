class ScheduledFlight {
    calcPrice() {
        return this.distance / 3;
    }
    get unixDate() {
        return new Date(this.date).getTime();
    }
    set unixDate(time) {
        const date = new Date(time);
        this.date = date.toISOString();
    }
}
class FlightManager {
    constructor(cache) {
        this._cache = cache;
    }
    search(from, to) {
        const result = new Array();
        for (let f of this._cache) {
            if (f.from === from && f.to === to) {
                result.push(f);
            }
        }
        return result;
    }
    search2(from, to) {
        return this._cache.filter(f => f.from === from && f.to === to);
    }
    search3(from, to) {
        return this._cache.filter(f => this.fitlerFn(f, from, to));
    }
    fitlerFn(f, from, to) {
        const result = f.from === from && f.to === to;
        return result;
    }
}
