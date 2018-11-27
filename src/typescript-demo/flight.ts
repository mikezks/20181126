export interface Flight {
    id: number;
    from: string;
    to: string;
    date: string;

    distance?: number;
    calcPrice?(): number;
}

export class ScheduledFlight implements Flight {
    id: number;
    from: string;
    to: string;
    date: string;
    distance: number;
    
    calcPrice(): number {
        return this.distance / 3;
    }

    get unixDate(): number {
        return new Date(this.date).getTime();
    }

    set unixDate(time: number) {
        const date = new Date(time);
        this.date = date.toISOString();
    }
}

export class FlightManager {
    private _cache: Flight[];

    constructor(cache: Flight[]) {
        this._cache = cache;
    }

    search(from: string, to: string): Flight[] {
        const result = new Array<Flight>();
        for (let f of this._cache) {
            if (f.from === from && f.to === to) {
                result.push(f);
            }
        }
        return result;
    }

    search2(from: string, to: string): Flight[] {
        return this._cache.filter(f =>
            f.from === from && f.to === to);
    }

    search3(from: string, to: string): Flight[] {
        return this._cache.filter(f => this.fitlerFn(f, from, to));
    }

    fitlerFn(f: Flight, from: string, to: string): boolean {
        const result = f.from === from && f.to === to;
        return result;
    }
}

console.log(Math.random());

let maxInt = (Number as any).MAX_SAFE_INTEGER;
console.log(maxInt === maxInt - 1, maxInt);
maxInt++;
console.log(maxInt === maxInt + 1, maxInt);
