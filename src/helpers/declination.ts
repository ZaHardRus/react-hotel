function declination(number: number, txt: Array<string>): string {
    const cases = [2, 0, 1, 1, 1, 2];
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export const declinationHotels = (count: number) => {
    const arr = ['отель', 'отеля', 'отелей']
    return declination(count, arr)
}

export const declinationDays = (count: number) => {
    const arr = ['день', 'дня', 'дней']
    return declination(count, arr)
}