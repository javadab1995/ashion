

export async function getProduct() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");

  if (!res.ok) throw Error("Failed getting shop");

  const data  = await res.json();
    return data;
    
}




export async function getOrder(id) {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

// export async function updateOrder(id, updateObj) {
//   try {
//     const res = await fetch(`${API_URL}/order/${id}`, {
//       method: "PATCH",
//       body: JSON.stringify(updateObj),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!res.ok) throw Error();
//     // We don't need the data, so we don't return anything
//   } catch (err) {
//     throw Error("Failed updating your order");
//   }
// }
