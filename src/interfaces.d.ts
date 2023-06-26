export interface ITaskCategory {
    categoryName: string,
    id: string
}
interface ICategoryContainer {
    categories: ITaskCategory[]
}
interface ITaskCard {
    description: string
}
interface ITaskContainer {
    tasks: ITaskCard[]
}