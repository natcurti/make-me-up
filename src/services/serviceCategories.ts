import { instance } from "src/http/instance";

const serviceCategories = {
  getCategories: async () => {
    const response = await instance.get(
      "4b9395055559550ac70740bba08d14e0/raw/69e5ab49db145a002a702aae4bf90e97bacf444c/categories.json"
    );
    return response.data;
  },
};

export default serviceCategories;
