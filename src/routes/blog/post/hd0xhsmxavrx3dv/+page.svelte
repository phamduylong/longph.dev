<script>
	const title = `Choose your first open source project carefully.`;
	// Year, month's index (so month - 1), day, hour, minute, second
	// Let's keep createdDate here as well just to be future proof
	const updatedDate = new Date(2024, 10, 3, 12, 51, 33);
	const createdDate = new Date(2024, 9, 28, 22, 20, 12);
</script>

<div>
	<div class="text-sm text-center">
		{updatedDate.toLocaleString('default', { month: 'long' })}
		{updatedDate.getDate()}, {updatedDate.getFullYear()}
	</div>

	<div
		class="container mx-auto h-full flex flex-wrap items-center space-y-5 md:space-y-10 justify-center md:w-4/5 xl:w-3/5 p-5"
	>
		<h2 class="h2 font-bold text-center">
			{title}
		</h2>
		<article class="text-pretty">
			What do I mean by that you may ask? I delivered it correctly I believe.<br /><br />

			I'll start off by saying I haven't contributed to many open source projects, somewhere around
			5 (and proudly no README.md update). The biggest project I have been able to influence is
			<a
				class="anchor"
				href="https://github.com/skeletonlabs/skeleton"
				target="_blank"
				rel="external">Skeleton</a
			>. And it has been an absolutely amazing experience and the interaction I had with people who
			maintained Skeleton had given me the confidence to reach out to many other projects.
			<a class="anchor" href="https://github.com/endigo9740" target="_blank" rel="external"
				>Chris Simmons</a
			>
			- the core maintainer of Skeleton and his team have been very helpful and supportive.<br /><br
			/>
			I started out with
			<a
				class="anchor"
				href="https://github.com/skeletonlabs/skeleton/pull/2226"
				target="_blank"
				rel="external">a documentation usage update commit</a
			>. The response came quickly with gratitude and it gave a strong sense of meaning to me,
			though the affect of the change was minor. I didn't start doing open source to get thanked by
			a man whom I have never met and lives on the other hemisphere, but it feels nice to get
			recognized. I have had few commits since then, ranging from documentation update to features
			and I'm completely satisfied with all of them.<br /><br />

			Seeing people who started contributing by editing README files of bigger projects just pop a
			question in me: who are gonna guide these people to a better direction? Take
			<a class="anchor" href="https://expressjs.com/" target="_blank" rel="external">Express.js</a>
			for example, they are getting hit with
			<a
				class="anchor"
				href="https://github.com/expressjs/express/pulls?q=is%3Apr+is%3Aclosed+.md"
				target="_blank"
				rel="external">a relentless storm of new-bie devs' PRs</a
			>
			(hopefully not guided by DevinAI or ChatGPT). ExpressJS maintainers are will not comment on each
			and every of these PRs to tell people that this is not how they go about things. Sad, but totally
			understandable.<br /><br />

			Imagine another scenario where a new developer tries to contribute to an open source project
			like Linux, and they encountered the great Linus Torsvald. I don't expect things to end well
			for the guy if he attempted to merge some BS changes and Linus actually took a look at his PR.
			I'm not bashing Linus here, open source maintainers (especially big projects maintainers)
			don't owe new developers any explanation. These people are typically really really busy. I
			just can't help but too think if I got traumatized like these unlucky lads, I'd probably give
			up in the blink of an eye.<br /><br />

			To sum up, I'm big on being kind to contributors, long as they don't intentionally do
			something stupid or malicious. Choosing the right open source projects to start on might just
			wheel your whole journey in a different direction, and I hope it's the right direction for
			you.<br /><br />

			<b>EDIT:</b> I have been invited to be a team member of the Skeleton project after a year of contribution.
			If I can do it, so can you!
		</article>
	</div>
</div>
