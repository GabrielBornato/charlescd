export class ReadK8sConfigurationDto {

    public readonly id: string

    public readonly name: string

    public readonly authorId: string

    public readonly applicationId: string

    public readonly createdAt: Date

    public readonly moduleId: string

    constructor(
        id: string,
        name: string,
        authorId: string,
        applicationId: string,
        createdAt: Date,
        moduleId: string
    ) {
        this.id = id
        this.name = name
        this.authorId = authorId
        this.applicationId = applicationId
        this.createdAt = createdAt
        this.moduleId = moduleId
    }
}
