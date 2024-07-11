const getProducts = async () => {
await axios.get("https://fakestoreapi.com/products/")
      .then((res) => {
        for(let product of res.data){
            const itemWrapper = document.createElement('div')
            itemWrapper.className = 'card'
            itemWrapper.innerHTML = `
            <img src="${product.image}" />
            <p class='title'>${product.title}</p>
            <p class='price'>${product.price} €</p>
            <button>Peržiūrėti</button>`;
            document.querySelector('.products').appendChild(itemWrapper)
        }
      })
      .catch((e) => console.log(e));
};

document.addEventListener('load', getProducts())


