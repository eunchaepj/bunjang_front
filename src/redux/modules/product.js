import axios from 'axios';

function getProducts() {
    axios
        .get('https://run.mocky.io/v3/ce3bcb61-6cb3-471d-bc40-e3243360b529')
        .then((result) => {
            console.log(result);
            return result;
        })
        .catch(() => {
            console.log('실패당');
        });
}
export default getProducts;
