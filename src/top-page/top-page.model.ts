export enum TopLevelCategory {
  Courses,
  Servises,
  Books,
  Products,
}

export class TopPageModel {
  _id: string;
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advanteges: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string;
}
