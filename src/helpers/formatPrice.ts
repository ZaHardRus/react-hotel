export const formatPrice = (price: number): string => {
    const formated = new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'}).format(price)
    return formated.split(/,\d\d/).join('')
}