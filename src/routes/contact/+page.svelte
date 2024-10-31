<script>
	import { browser } from '$app/environment';
</script>

<main
	class="container h-full mx-auto flex flex-col justify-center items-center p-10 space-y-8 md:space-y-12 lg:space-y-16"
>
	<h1 class="h1 font-serif text-5xl text-center">Contact me</h1>
	<div>
		<form
			action="https://api.staticforms.xyz/submit"
			method="post"
			class="card p-5 space-y-2 w-[300px] md:w-[480px] lg:w-[720px] flex flex-col justify-center"
		>
			<input type="hidden" name="accessKey" value="cb05fe42-31b2-4d6c-8d07-4e45b326a110" />
			<input type="text" name="honeypot" class="hidden" />
			<label class="label" for="name">
				<span>Name</span>
				<input class="input" name="name" type="text" placeholder="John Doe" required />
			</label>
			<label class="label" for="email">
				<span>Email</span>
				<input
					class="input"
					name="email"
					type="email"
					placeholder="John.Doe@example.com"
					required
				/>
			</label>
			<label class="label" for="message">
				<span>Message</span>
				<textarea
					class="textarea"
					name="message"
					rows="4"
					placeholder="Mary had a little lamb 🐏"
					required
				></textarea>
			</label>

			<input type="hidden" name="redirectTo" value={browser ? window.location.origin : ''} />
			<input
				type="submit"
				class="btn variant-filled w-20 self-center !mt-4 md:!mt-8"
				value="Send"
			/>
		</form>
	</div>
</main>
