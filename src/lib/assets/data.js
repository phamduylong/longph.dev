const section_data = Object.freeze([
	{
		title: 'Educations',
		content: `I enrolled to the IT programme at <a class="anchor" href="https://www.metropolia.fi/en" target="_blank" rel="external">Metropolia UAS</a> in 2020.
				It is the biggest college there is in Finland with an interesting curriculum so I decided to give it a shot. After 4 years of grinding,
				I have graduated with a GPA of 4/5. My major was Embedded Systems Programming but I'm way more versatile than just an Embedded guy 😉`
	},
	{
		title: 'Work Experiences',
		content: `Currently, I'm working as Junior Software Developer at <a class="anchor" href="https://digia.com/en/" target="_blank" rel="external">Digia</a>. 
				Digia is a Finnish SaaS company that provides Financial Solutions to banks in Finland and Sweden. My main role is to develop and maintain the software 
				according to the customers requirements. I work with <a class="anchor" href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="external"><i>C#</i></a>,
				<a class="anchor" href="https://learn.microsoft.com/en-us/dotnet/visual-basic/" target="_blank" rel="external"><i>VB.NET</i></a>,
				<a class="anchor" href="https://www.microsoft.com/en-us/sql-server/" target="_blank" rel="external"><i>SQL Server</i></a> and
			    <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="external"><i>JavaScript</i></a> on a daily basis.`
	},
	{
		title: 'Projects',
		content: `I like to spend my time on side projects to learn new technologies and to keep my skills sharp. One of the most interesting open source projects I have contributed to is
				<a class="anchor" href="https://skeleton.dev/" target="_blank" rel="external">SkeletonUI</a>. Skeleton is a fully featured UI Toolkit for building reactive interfaces quickly using 
				<a class="anchor" href="https://svelte.dev" target="_blank" rel="external">Svelte</a> and <a class="anchor" href="https://tailwindcss.com/" target="_blank" rel="external">TailwindCSS</a>.
				I have contributed to fixing bugs, as well as enhancing the documentation in various places. Feel free to check out <a class="anchor" href="/projects ">my personal projects page</a>.`
	}
]);

const projects = Object.freeze([
	{
		name: 'alias',
		alt: 'Alias-like web app',
		repoUrl: 'https://github.com/phamduylong/AliasWebBased',
		demoUrl: 'https://alias-web-based.vercel.app/'
	},
	{
		name: 'cart',
		alt: 'Shopping cart web app',
		repoUrl: 'https://github.com/phamduylong/ShoppingList',
		demoUrl: 'https://shopping-list-pi-three.vercel.app/'
	},
	{
		name: 'cv',
		alt: 'CV web app',
		repoUrl: 'https://github.com/phamduylong/longph.com/',
		demoUrl: 'https://longph.vercel.app/'
	},
	{
		name: 'fpvoter',
		alt: 'Fingerprint voting system',
		repoUrl: 'https://github.com/phamduylong/fp-voter-frontend',
		demoUrl: 'https://fp-voter-frontend.vercel.app/'
	},
	{
		name: 'personal',
		alt: 'Personal website',
		repoUrl: 'https://github.com/phamduylong/longph.dev',
		demoUrl: 'https://longph.com'
	},
	{
		name: 'quotes',
		alt: 'Netflix quotes generator',
		repoUrl: 'https://github.com/phamduylong/RandomNetflixQuotes',
		demoUrl: 'random-netflix-quotes.vercel.app'
	}
]);

export { section_data, projects };
