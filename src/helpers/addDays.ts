export const addDays = (date:string,days:number):string => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toLocaleDateString().split('.').reverse().join('-');
}