export interface ICategories {
  face: ICategory[];
  eyes: ICategory[];
  mouth: ICategory[];
}

export interface ICategory {
  name: string;
  id: string;
  description: string;
}
