interface RootObject {
    projects: ProjectInterface[];
}

export interface ProjectInterface {
    id: string;
    name: string;
    versions: string[];
    articles?: ArticleInterface[];
}

export interface ArticleInterface {
    id: string;
    title: string;
    versions: string[];
    children?: ArticleInterface[];
}
