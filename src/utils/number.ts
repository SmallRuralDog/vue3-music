export function useNumberFormat(number: number): string | number {


    if (number > 100000000) {
        return Number((number / 100000000).toFixed(1)) + ' 亿';
    }

    if (number > 10000000) {
        return Number((number / 10000000).toFixed(1)) + ' 千万';
    }

    if (number > 10000) {
        return Number((number / 10000).toFixed(1)) + ' 万';
    }

    return number;
}

export function useFormatDuring(during: number) {
    const s = Math.floor(during) % 60;
    during = Math.floor(during / 60);
    const i = during % 60;

    const ii = i < 10 ? `0${i}` : i;
    const ss = s < 10 ? `0${s}` : s;

    return ii + ':' + ss;

}
