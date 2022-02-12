import { Todo } from '$lib/entity/Todo'
import to from 'typeorm'

to.createConnection({
	type: 'sqlite',
	database: './database.db3',
	entities: [Todo],
	synchronize: true
})
