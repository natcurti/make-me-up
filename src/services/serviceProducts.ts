import { instance } from "src/http/instance";

const serviceProducts = {
  getProducts: async () => {
    const response = await instance.get(
      "77d1c4e09e296dfae7d1e62cf926cbc9/raw/e435fad9a15df8b8ea0f3e92245e94604c78d65e/products.json"
    );
    return response.data;
  },
};

export default serviceProducts;
