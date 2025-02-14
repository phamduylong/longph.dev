const section_data = Object.freeze([
	{
		title: 'Educations',
		content: `I enrolled to the IT programme at <a class="anchor" href="https://www.metropolia.fi/en" target="_blank" rel="external">Metropolia UAS</a> in 2020.
				It is the biggest college in Finland with an interesting curriculum so I decided to give it a shot. After 4 years of grinding, I have graduated with a GPA of 3.2/4.`
	},
	{
		title: 'Work Experiences',
		content: `Currently, I'm working as Junior Software Developer at <a class="anchor" href="https://digia.com/en/" target="_blank" rel="external">Digia</a>. 
				Digia is a Finnish SaaS company that provides solutions and products to major financial sectors in Finland and Sweden. My main responsibilities at Digia include:
				<ol class="list my-4">
					<li>
						<span class="flex-auto">&#8680;&nbsp;Maintaining software products</span>
					</li>
					<li>
						<span class="flex-auto">&#8680;&nbsp;Implementing new features into products</span>
					</li>
					<li>
						<span class="flex-auto">&#8680;&nbsp;Constructing delivery packages for customers</span>
					</li>
					<li>
						<span class="flex-auto">&#8680;&nbsp;Improving and optimizing legacy code</span>
					</li>
				</ol>
				I work with <a class="anchor" href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="external">C#</a>,
				<a class="anchor" href="https://learn.microsoft.com/en-us/dotnet/visual-basic/" target="_blank" rel="external">VB.NET</a>,
				<a class="anchor" href="https://www.microsoft.com/en-us/sql-server/" target="_blank" rel="external">SQL Server</a>,
			    <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="external">JavaScript</a> 
				and <a class="anchor" href="https://jquery.com/" target="_blank" rel="external">jQuery</a> on a daily basis. Occasionally,
				I build features that requires interacting with <a class="anchor" href="https://www.oracle.com/database/" target="_blank" rel="external">Oracle databases</a>
				and <a class="anchor" href="https://www.oracle.com/database/technologies/appdev/plsql.html" target="_blank" rel="external">PL/SQL</a> scripting.`
	},
	{
		title: 'Projects',
		content: `I like to spend my time on side projects to learn new technologies and to keep my skills sharp. One of the most interesting open source projects I have contributed to is
				<a class="anchor" href="https://skeleton.dev/" target="_blank" rel="external">Skeleton</a>. Skeleton is a design system used to build reactive interfaces quickly using 
				<a class="anchor" href="https://tailwindcss.com/" target="_blank" rel="external">TailwindCSS</a>. I have contributed to <a class="anchor" href="https://github.com/skeletonlabs/skeleton/pulls?q=+is%3Apr+author%3Aphamduylong+" target="_blank" rel="external">fixing bugs</a> and offer support to community members 
				who use Skeleton for their projects. After stacking around for a while, I have joined the core team maintaining Skeleton in late 2024. Feel free to check out 
				<a class="anchor" href="/projects">the project page</a> for more interesting projects.`
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
		name: 'fpvoter',
		alt: 'Fingerprint voting system',
		repoUrl: 'https://github.com/phamduylong/fp-voter-frontend',
		demoUrl: 'https://fp-voter-frontend.vercel.app/'
	},
	{
		name: 'cli',
		alt: 'CLI website',
		repoUrl: 'https://github.com/phamduylong/cli',
		demoUrl: 'https://cli.longph.dev/'
	},
	{
		name: 'quotes',
		alt: 'Netflix quotes generator',
		repoUrl: 'https://github.com/phamduylong/RandomNetflixQuotes',
		demoUrl: 'https://random-netflix-quotes.vercel.app'
	},
	{
		name: 'skeleton',
		alt: 'SkeletonUI',
		repoUrl: 'https://github.com/skeletonlabs/skeleton',
		demoUrl: 'https://skeleton.dev'
	}
]);

const blogs = Object.freeze([
	{
		id: 'osw44p0y2g73d6s',
		title: "JavaScript's console object is more than just a console.log()",
		tags: ['console', 'javascript', 'typescript', 'programming'],
		updated: new Date(2024, 10, 14, 19, 34, 49),
		created: new Date(2024, 10, 3, 14, 3, 57)
	},
	{
		id: 'h9evcysg5kckd8c',
		title: 'LeetCode Solutions',
		tags: ['leet-code', 'programming', 'csharp', 'javascript', 'typescript', 'c++'],
		updated: new Date(2024, 10, 23, 16, 7, 51),
		created: new Date(2024, 9, 31, 20, 26, 49)
	},
	{
		id: 'hd0xhsmxavrx3dv',
		title: 'Choose your first open source project carefully.',
		tags: ['open-source', 'github', 'programming'],
		updated: new Date(2024, 10, 3, 12, 51, 33),
		created: new Date(2024, 9, 28, 22, 20, 12)
	},
	{
		id: 'wx694lgsvrga1c7',
		title: 'Why VB.NET might be better than what you think it is',
		tags: ['visual-basic', '.net', 'vb', 'programming'],
		updated: new Date(2024, 10, 3, 12, 51, 33),
		created: new Date(2024, 9, 28, 22, 20, 12)
	}
]);

export { section_data, projects, blogs };
