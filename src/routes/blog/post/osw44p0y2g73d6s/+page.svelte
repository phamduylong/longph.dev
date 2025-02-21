<script>
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import { toDayOfWeek } from '$lib/helper/common';
	const title = `JavaScript's console object is more than just a console.log()`;
	// Year, month's index (so month - 1), day, hour, minute, second
	// Let's keep createdDate here as well just to be future proof
	const updatedDate = new Date(2024, 10, 14, 19, 34, 49);
	const createdDate = new Date(2024, 10, 3, 14, 3, 57);
</script>

<TableOfContents class="hidden xl:block fixed top-1/4 w-64 p-2 mx-4 h-1/2 overflow-scroll" />
<div>
	<div class="text-sm text-center">
		{updatedDate.toLocaleString('default', { month: 'short' })}
		{updatedDate.getDate()}, {updatedDate.getFullYear().toString().substring(2)} ({toDayOfWeek(
			updatedDate.getDay(),
			true
		)})
	</div>

	<div
		class="container mx-auto h-full flex flex-wrap items-center space-y-5 md:space-y-10 justify-center md:w-4/5 xl:w-3/5 p-5"
		use:tocCrawler={{
			mode: 'generate',
			scrollTarget: '#page'
		}}
	>
		<h2 class="h2 font-bold text-center">
			{title}
		</h2>
		<article class="text-pretty">
			I think I speak for a lot of web developers when I say we underutilized the console object.
			Recently, I found out that the JavaScript console object offers a wide range of
			functionalities that would help during development. I knew that there are things outside of <a
				class="anchor"
				href="https://developer.mozilla.org/en-US/docs/Web/API/console/log_static"
				target="_blank"
				rel="external">log</a
			>, namely
			<a
				class="anchor"
				href="https://developer.mozilla.org/en-US/docs/Web/API/console/warn_static"
				target="_blank"
				rel="external">warn</a
			>
			and
			<a
				class="anchor"
				href="https://developer.mozilla.org/en-US/docs/Web/API/console/error_static"
				target="_blank"
				rel="external">error</a
			>. But these are the things that everyone knew, nothing special here, right? Let's go through
			the more interesting usages.<br /><br />

			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/console/count_static"
				target="_blank"
				rel="external"><h4 id="console-count" class="h4 font-bold anchor">1. console.count()</h4></a
			><br />

			The count function is used to specify the amount of times it was called. It offers an optional
			parameter
			<code class="code">label</code>. It specified, the count will be separate for each label. A
			case where the count function can be helpful is as follow: The code above counts the amount of
			registered students and employees. Unsure how useful this is in a production environment but I
			can see this coming in handy when debugging code during development. Try to copy and test the
			code above in the browser's console tab or a transpiler.<br />
			<!-- Let's not have line numbers in smaller views so that it is easier to read wrapped text -->
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="javascript"
				code={`const PersonType = {\n\tSTUDENT: 'Student',\n\tEMPLOYEE: 'Employee'\n};\n\nfunction registerPerson(personType) {\n\tconsole.count(personType);\n}\n\nregisterPerson(PersonType.STUDENT);\nregisterPerson(PersonType.STUDENT);\n\nregisterPerson(PersonType.EMPLOYEE);\nregisterPerson(PersonType.EMPLOYEE);\nregisterPerson(PersonType.EMPLOYEE);\n\n/* Output:\n\nStudent: 1\nStudent: 2\nEmployee: 1\nEmployee: 2\nEmployee: 3\n*/`}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="javascript"
				code={`const PersonType = {\n\tSTUDENT: 'Student',\n\tEMPLOYEE: 'Employee'\n};\n\nfunction registerPerson(personType) {\n\tconsole.count(personType);\n}\n\nregisterPerson(PersonType.STUDENT);\nregisterPerson(PersonType.STUDENT);\n\nregisterPerson(PersonType.EMPLOYEE);\nregisterPerson(PersonType.EMPLOYEE);\nregisterPerson(PersonType.EMPLOYEE);\n\n/* Output:\n\nStudent: 1\nStudent: 2\nEmployee: 1\nEmployee: 2\nEmployee: 3\n*/`}
			/>
			To reset the count, use
			<a
				class="anchor"
				target="_blank"
				rel="external"
				href="https://developer.mozilla.org/en-US/docs/Web/API/console/countReset_static"
				>countReset</a
			>. The function also takes an optional parameter
			<code class="code">label</code>
			to determine which label to be reset.<br /><br />
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/console/table_static"
				target="_blank"
				rel="external"><h4 id="console-table" class="h4 font-bold anchor">2. console.table()</h4></a
			><br />

			I find the
			<code class="code">table</code>
			function specifically helpful when logging nested object types, such as array of objects. An example
			usage:
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="javascript"
				code={`const menu = [\n    { dish: \"Pizza\", image: \"🍕\", price: \"10$\" },\n    { dish: \"Spaghetti\", image: \"🍝\", price: \"12$\" },\n    { dish: \"Sushi\", image: \"🍣\", price: \"5$\" },\n    { dish: \"Ice cream\", image: \"🍦\", price: \"3$\" }\n];\n\nconsole.table(menu);\n\n/* Output:\n┌─────────┬─────────────┬───────┬───────┐\n│ (index) │    dish     │ image │ price │\n├─────────┼─────────────┼───────┼───────┤\n│    0    │   'Pizza'   │ '🍕'  │ '10$' │\n│    1    │ 'Spaghetti' │ '🍝'  │ '12$' │\n│    2    │   'Sushi'   │ '🍣'  │ '5$'  │\n│    3    │ 'Ice cream' │ '🍦'  │ '3$'  │\n└─────────┴─────────────┴───────┴───────┘\n*/`}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="javascript"
				code={`const menu = [\n    { dish: \"Pizza\", image: \"🍕\", price: \"10$\" },\n    { dish: \"Spaghetti\", image: \"🍝\", price: \"12$\" },\n    { dish: \"Sushi\", image: \"🍣\", price: \"5$\" },\n    { dish: \"Ice cream\", image: \"🍦\", price: \"3$\" }\n];\n\nconsole.table(menu);\n\n/* Output:\n┌─────────┬─────────────┬───────┬───────┐\n│ (index) │    dish     │ image │ price │\n├─────────┼─────────────┼───────┼───────┤\n│    0    │   'Pizza'   │ '🍕'  │ '10$' │\n│    1    │ 'Spaghetti' │ '🍝'  │ '12$' │\n│    2    │   'Sushi'   │ '🍣'  │ '5$'  │\n│    3    │ 'Ice cream' │ '🍦'  │ '3$'  │\n└─────────┴─────────────┴───────┴───────┘\n*/`}
			/>
			The output is formatted in a beautified table format. This is way better in my opinion as usually
			objects with multiple properties will be folded in the console like this:
			<code class="code">&#9660; Array(4)</code>.<br /><br />

			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/console/time_static"
				target="_blank"
				rel="external"><h4 id="console-time" class="h4 font-bold anchor">3. console.time()</h4></a
			><br />

			The time function is used to measure the execution time of a particular part of the program or
			the whole program itself. Its principles are quite similar to the
			<a class="anchor" href="#console-count">count function</a>. It also takes an optional
			<code class="code">label</code>
			argument for the name of the timer.
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="javascript"
				code={'const NMBR = 10000000;\n\nconsole.time(`Loop over ${NMBR} items`);\nfor(let i = 0; i < NMBR; ++i);\nconsole.timeEnd(`Loop over ${NMBR} items`);\n\n/* Output:\nLoop over 10000000 items: 6.733ms\n*/'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="javascript"
				code={'const NMBR = 10000000;\n\nconsole.time(`Loop over ${NMBR} items`);\nfor(let i = 0; i < NMBR; ++i);\nconsole.timeEnd(`Loop over ${NMBR} items`);\n\n/* Output:\nLoop over 10000000 items: 6.733ms\n*/'}
			/>
			The logged time will be the amount of time it took to execute statements between the
			<code class="code">time()</code>
			and
			<code class="code">timeEnd()</code>
			calls. This signifies that it took 6.733ms to do 10 millions iterations.<br /><br />

			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/console/dir_static"
				target="_blank"
				rel="external"><h4 id="console-dir" class="h4 font-bold anchor">4. console.dir()</h4></a
			><br />

			The <code class="code">dir</code>
			function list properties of a JavaScript object to the console.
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="javascript"
				code={'console.dir(console);\n\n/* Output\nconsole\nassert: ƒ assert()\nclear: ƒ clear()\ncontext: ƒ context()\ncount: ƒ count()\ncountReset: ƒ countReset()\ncreateTask: ƒ createTask()\ndebug: ƒ debug()\ndir: ƒ dir()\ndirxml: ƒ dirxml()\nerror: ƒ error()\ngroup: ƒ group()\ngroupCollapsed: ƒ groupCollapsed()\ngroupEnd: ƒ groupEnd()\ninfo: ƒ info()\nlog: ƒ log()\nmemory: MemoryInfo {totalJSHeapSize: 19300000, usedJSHeapSize: 15200000, jsHeapSizeLimit: 3760000000}\nprofile: ƒ profile()\nprofileEnd: ƒ profileEnd()\ntable: ƒ table()\ntime: ƒ time()\ntimeEnd: ƒ timeEnd()\ntimeLog: ƒ timeLog()\ntimeStamp: ƒ timeStamp()\ntrace: ƒ trace()\nwarn: ƒ warn()\nSymbol(Symbol.toStringTag): "console"\n[[Prototype]]: Object\n*/'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="javascript"
				code={'console.dir(console);\n\n/* Output\nconsole\nassert: ƒ assert()\nclear: ƒ clear()\ncontext: ƒ context()\ncount: ƒ count()\ncountReset: ƒ countReset()\ncreateTask: ƒ createTask()\ndebug: ƒ debug()\ndir: ƒ dir()\ndirxml: ƒ dirxml()\nerror: ƒ error()\ngroup: ƒ group()\ngroupCollapsed: ƒ groupCollapsed()\ngroupEnd: ƒ groupEnd()\ninfo: ƒ info()\nlog: ƒ log()\nmemory: MemoryInfo {totalJSHeapSize: 19300000, usedJSHeapSize: 15200000, jsHeapSizeLimit: 3760000000}\nprofile: ƒ profile()\nprofileEnd: ƒ profileEnd()\ntable: ƒ table()\ntime: ƒ time()\ntimeEnd: ƒ timeEnd()\ntimeLog: ƒ timeLog()\ntimeStamp: ƒ timeStamp()\ntrace: ƒ trace()\nwarn: ƒ warn()\nSymbol(Symbol.toStringTag): "console"\n[[Prototype]]: Object\n*/'}
			/>
			I do recommend trying this out in the browser console so you'd be able to inspect the properties
			more clearly.<br /><br />

			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/console/group_static"
				target="_blank"
				rel="external"><h4 id="console-group" class="h4 font-bold anchor">5. console.group()</h4></a
			><br />

			The console object also comes with a grouping mechanism to help organize logs in the console.
			This is especially helpful when the amount of logs grows and they need to be separated from
			each other for the sake of keeping the developers sane. See example below:
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="javascript"
				code={'console.log("############################################");\nconsole.group("Group 1");\nconsole.group("Nested group 1");\nconsole.info("Logging from nested group 1");\nconsole.groupEnd("Nested group 1");\nconsole.info("Now I\'m under group 1");\nconsole.groupEnd("Group 1");\nconsole.group("Group 2");\nconsole.groupEnd("Group 2");\nconsole.log("############################################");\n\n/* Output\n############################################\nGroup 1\n  Nested group 1\n    Logging from nested group 1\n  Now I\'m under group 1\nGroup 2\n############################################\n*/'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="javascript"
				code={'console.log("############################################");\nconsole.group("Group 1");\nconsole.group("Nested group 1");\nconsole.info("Logging from nested group 1");\nconsole.groupEnd("Nested group 1");\nconsole.info("Now I\'m under group 1");\nconsole.groupEnd("Group 1");\nconsole.group("Group 2");\nconsole.groupEnd("Group 2");\nconsole.log("############################################");\n\n/* Output\n############################################\nGroup 1\n  Nested group 1\n    Logging from nested group 1\n  Now I\'m under group 1\nGroup 2\n############################################\n*/'}
			/>
			We can see from the code above that group uses indentations to group logs and nested logs. This
			is simple yet quite effective. If your code is full of logs, be sure to give group a try.<br
			/><br />

			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/console#examples"
				target="_blank"
				rel="external"><h4 id="pretty-print" class="h4 font-bold anchor">6. Pretty-print</h4></a
			><br />

			One of the fun things about JavaScript is that it integrates well with everything in the web
			and CSS is one of those things. You can style logs with CSS. For example:
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="javascript"
				code={'console.log(\n  "Colors of a rainbow %cred %corange %cyellow %cgreen %cblue %cindigo %cviolet",\n  "color: red",\n  "color: orange",\n  "color: yellow",\n  "color: green",\n  "color: blue",\n  "color: indigo",\n  "color: violet"\n);'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="javascript"
				code={'console.log(\n  "Colors of a rainbow %cred %corange %cyellow %cgreen %cblue %cindigo %cviolet",\n  "color: red",\n  "color: orange",\n  "color: yellow",\n  "color: green",\n  "color: blue",\n  "color: indigo",\n  "color: violet"\n);'}
			/>
			I suggest running this in the terminal or browser console and see the effect yourself, or just
			spend time playing around with it.<br /><br />

			Hopefully you learned something from this post, or just simply had a good time. I was amazed
			when I found these as it makes my experience with JavaScript a touch less boring. I'll
			definitely use some of these in my projects in the future and so should you 😉
		</article>
	</div>
</div>
