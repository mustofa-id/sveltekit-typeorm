<script lang="ts">
	import type { Todo } from '$lib/entity/Todo'

	export let todos: Todo[] = []
	export let message: string
</script>

<main>
	<h1>Todo</h1>

	<form action="/" method="post">
		<input name="desc" type="text" placeholder="Type here" />
		<button type="submit">Submit</button>
	</form>

	{#if message}
		<em>{message} </em>
	{/if}

	<ul>
		{#each todos as todo}
			<li>
				<label>
					<input type="checkbox" bind:checked={todo.done} />
					<span>
						{todo.description}
					</span>
				</label>
			</li>
		{:else}
			<p>Nothing yet</p>
		{/each}
	</ul>
</main>
