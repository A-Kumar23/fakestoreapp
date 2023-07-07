

export  async function getProducts() {

    const url = 'https://fakestoreapi.com/products'
    const response = await fetch(url)
    const result = await response.json()

    return result;
};

// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const response = await fetch(url, { headers: headers });
// const result = await response.json();

// return result;