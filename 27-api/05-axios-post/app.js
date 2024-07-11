const form = document.querySelector("form");

const postProduct = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      "https://dummyjson.com/products/add",
      {
        title: form.title.value,
        price: form.price.value,
        amount: form.amount.value,
        discount: form.discount.value,
        description: form.description.value,
      },
      {
        headers: {
          ContentType: "multipart/form-data",
        },
      }
    );
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};

form.addEventListener("submit", postProduct);
