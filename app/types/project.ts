export interface IProject {
  description: string
  name: string
  url: string
}

export interface IProjectGroup {
  projects: readonly IProject[]
  title: string
}
