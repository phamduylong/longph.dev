import bootstrap_img_url from '$lib/assets/tech/bootstrap.svg';
import c_img_url from '$lib/assets/tech/c.svg';
import chai_img_url from '$lib/assets/tech/chai.svg';
import chartjs_img_url from '$lib/assets/tech/chartjs.svg';
import cpp_img_url from '$lib/assets/tech/cpp.svg';
import c_sharp_img_url from '$lib/assets/tech/csharp.svg';
import css3_img_url from '$lib/assets/tech/css3.svg';
import cypress_img_url from '$lib/assets/tech/cypress.svg';
import dotnet_img_url from '$lib/assets/tech/dotnet.svg';
import ejs_img_url from '$lib/assets/tech/ejs.svg';
import express_img_url from '$lib/assets/tech/express.svg';
import html5_img_url from '$lib/assets/tech/html5.svg';
import javascript_img_url from '$lib/assets/tech/javascript.svg';
import jquery_img_url from '$lib/assets/tech/jquery.svg';
import mocha_img_url from '$lib/assets/tech/mocha.svg';
import mongodb_img_url from '$lib/assets/tech/mongodb.svg';
import nodejs_img_url from '$lib/assets/tech/nodejs.svg';
import nuget_img_url from '$lib/assets/tech/nuget.svg';
import python_img_url from '$lib/assets/tech/python.svg';
import robotframework_img_url from '$lib/assets/tech/robotframework.svg';
import sqldb_img_url from '$lib/assets/tech/sqldb.svg';
import svelte_img_url from '$lib/assets/tech/svelte.svg';
import tailwindcss_img_url from '$lib/assets/tech/tailwindcss.svg';
import typescript_img_url from '$lib/assets/tech/typescript.svg';
import visualbasic_img_url from '$lib/assets/tech/visualbasic.svg';

const bootstrap = {
	img: bootstrap_img_url,
	url: 'https://getbootstrap.com/',
	alt: 'Bootstrap Logo',
	text: 'Bootstrap'
};
const c = {
	img: c_img_url,
	url: 'https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html',
	alt: 'C Programming Language Logo',
	text: 'C'
};
const chai = {
	img: chai_img_url,
	url: 'https://www.chaijs.com/',
	alt: 'Chai Assertion Library',
	text: 'Chai Assertion Library'
};
const chartjs = {
	img: chartjs_img_url,
	url: 'https://www.chartjs.org/',
	alt: 'Chart.js Logo',
	text: 'Chart.js'
};
const cpp = {
	img: cpp_img_url,
	url: 'https://cplusplus.com/',
	alt: 'C++ Programming Language Logo',
	text: 'C++'
};
const csharp = {
	img: c_sharp_img_url,
	url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
	alt: 'C# Programming Language Logo',
	text: 'C#'
};
const css3 = {
	img: css3_img_url,
	url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
	alt: 'CSS Logo',
	text: 'CSS'
};
const cypress = {
	img: cypress_img_url,
	url: 'https://www.cypress.io/',
	alt: 'Cypress Logo',
	text: 'Cypress Testing Framework'
};
const dotnet = {
	img: dotnet_img_url,
	url: 'https://dotnet.microsoft.com/',
	alt: '.NET Logo',
	text: '.NET Framework'
};
const ejs = {
	img: ejs_img_url,
	url: 'https://ejs.co/',
	alt: 'EJS Template Language Logo',
	text: 'EJS Template Language'
};
const express = {
	img: express_img_url,
	url: 'https://expressjs.com/',
	alt: 'Express Framework Logo',
	text: 'Express Framework'
};
const html5 = {
	img: html5_img_url,
	url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
	alt: 'HTML5 Markup Language Logo',
	text: 'HTML'
};
const javascript = {
	img: javascript_img_url,
	url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	alt: 'JavaScript Programming Language Logo',
	text: 'JavaScript'
};
const jquery = {
	img: jquery_img_url,
	url: 'https://jquery.com/',
	alt: 'JQuery Logo',
	text: 'JQuery'
};
const mocha = {
	img: mocha_img_url,
	url: 'https://mochajs.org/',
	alt: 'Mocha Testing Framework',
	text: 'Mocha Testing Framework'
};
const mongodb = {
	img: mongodb_img_url,
	url: 'https://www.mongodb.com/',
	alt: 'MongoDB Logo',
	text: 'MongoDB'
};
const nodejs = {
	img: nodejs_img_url,
	url: 'https://nodejs.org/en/',
	alt: 'NodeJs Logo',
	text: 'NodeJs'
};
const nuget = {
	img: nuget_img_url,
	url: 'https://www.nuget.org/',
	alt: 'NuGet Logo',
	text: 'NuGet Package Manager'
};
const python = {
	img: python_img_url,
	url: 'https://www.python.org/',
	alt: 'Python Programming Language Logo',
	text: 'Python'
};
const robotframework = {
	img: robotframework_img_url,
	url: 'https://robotframework.org/',
	alt: 'Robot Framework Logo',
	text: 'Robot Framework'
};
const sqldb = {
	img: sqldb_img_url,
	url: 'https://www.microsoft.com/en-us/sql-server/',
	alt: 'SQL Database Logo',
	text: 'SQL Database'
};
const svelte = {
	img: svelte_img_url,
	url: 'https://svelte.dev/',
	alt: 'SvelteKit Framework Logo',
	text: 'SvelteKit Framework'
};
const tailwindcss = {
	img: tailwindcss_img_url,
	url: 'https://tailwindcss.com/',
	alt: 'Tailwind CSS Logo',
	text: 'Tailwind CSS'
};
const typescript = {
	img: typescript_img_url,
	url: 'https://www.typescriptlang.org/',
	alt: 'TypeScript Programming Language Logo',
	text: 'TypeScript'
};
const visualbasic = {
	img: visualbasic_img_url,
	url: 'https://docs.microsoft.com/en-us/dotnet/visual-basic/',
	alt: 'Visual Basic Programming Language Logo',
	text: 'Visual Basic'
};

const section_data = [
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
			    <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="external"><i>JavaScript</i></a> on a daily basis.`,

	},
	{
		title: 'Projects',
		content: `I like to spend my time on side projects to learn new technologies and to keep my skills sharp. One of the most interesting open source projects I have contributed to is
				<a class="anchor" href="https://skeleton.dev/" target="_blank" rel="external">SkeletonUI</a>. Skeleton is a fully featured UI Toolkit for building reactive interfaces quickly using 
				<a class="anchor" href="https://svelte.dev" target="_blank" rel="external">Svelte</a> and <a class="anchor" href="https://tailwindcss.com/" target="_blank" rel="external">TailwindCSS</a>.
				I have contributed to fixing bugs, as well as enhancing the documentation in various places. My other personal projects can be found in <a class="anchor" href="/portfolio">my portfolio page</a>.`,

	}
];

export { section_data };