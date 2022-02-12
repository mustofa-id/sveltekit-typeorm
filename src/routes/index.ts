import { Todo } from '$lib/entity/Todo'
import type { RequestHandler } from '@sveltejs/kit'
import to from 'typeorm'

const todoRepo = to.getManager().getRepository(Todo)

export const get: RequestHandler = async () => {
	const todos: any[] = await todoRepo.find()
	return { body: { todos } }
}

export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	const description = form.get('desc').toString()
	const newTodo = await todoRepo.save({ description, done: false })
	if (!newTodo) {
		return {
			status: 500,
			body: { message: `Failed to create todo` }
		}
	}
	return { status: 201 }
}
