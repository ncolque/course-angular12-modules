export interface ICategory {
  id?: number;
  name: string;
  slug: string;
}

export interface ICategoryCreate {
  name: string;
  slug: string;
}

export interface ICategoryUpdate {
  id: number;
  name: string;
  slug: string;
}

/* export interface CompanyResponse {
  message: string;
  data: Company[];
  status: number;
} */