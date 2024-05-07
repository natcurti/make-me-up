import { instance } from "src/http/instance";

const serviceProducts = {
  getProducts: async () => {
    const response = await instance.get(
      "77d1c4e09e296dfae7d1e62cf926cbc9/raw/827795dee0d7d35f8d5b7e6f0fa2baca4ad51fae/products.json"
    );
    return response.data;
  },
};

export default serviceProducts;
