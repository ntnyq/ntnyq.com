export interface IProject {
  description: string
  name: string
  url: string
  icon?: string
}

export interface IProjectGroup {
  projects: IProject[]
  title: string
}
