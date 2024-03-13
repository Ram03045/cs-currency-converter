import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_GrMqT5OzBJyLAGDkK4ifUKy6GZkKffcxmmSyvUzY');

export async function convertcurrency(fromcurrency, tocurrency,units) {
    const res= await freecurrencyapi.latest({
    base_currency: 'USD',
    currencies: 'INR'
});
const multiplier =res.data[tocurrency];
return multiplier*units;
}