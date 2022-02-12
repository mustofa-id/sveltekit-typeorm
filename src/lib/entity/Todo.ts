import to from 'typeorm'

/**
 * for now, you need to specify the column type to be friend with typeorm.
 * also you cannot use named export like `import { Entity } from 'typeorm'`,
 * you need to use default export instead.
 */
@to.Entity()
export class Todo {
	@to.PrimaryGeneratedColumn({ type: 'integer' }) id: number
	@to.Column({ type: 'text' }) description: string
	@to.Column({ type: 'boolean' }) done: boolean
}
