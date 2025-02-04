<script>
	import { CodeBlock } from '@skeletonlabs/skeleton';
	const title = `Why VB.NET might be better than what you think it is`;
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
			<i
				>First of all, this post is anything but absolute facts. It is my personal opinion on why I
				think Microsoft's Visual Basic is a good language and why I enjoy using it in my day job.
				Having different views on a programming language is very common and it's good to read
				counter arguments (sometimes). Hfhf!</i
			><br /><br />
			Before we go into the world of
			<a
				class="anchor"
				href="https://learn.microsoft.com/en-us/dotnet/visual-basic/"
				target="_blank"
				rel="external">Visual Basic</a
			>
			(I'll refer to it as VB), it is a high-level strongly-typed OOP language created to build applications
			with the .NET framework. It is not to be confused with the popular VBA language, whose main purpose
			is to embed in Office applications (Excel, Access, e.t.c).<br /><br />

			So, what is so worth considering of this 20+ years old language that looks like a clone
			version of Python with less features? First of all, the collection of features it offers. The
			amount of built-in features for VB.NET feels just right for me. Not too much that it turns
			into a feature hell in C++ is trying to be, but not as limited as C (sorry to the C freaks out
			there). Along with its features, I find the syntax very verbose and English-like. For example,
			generic syntax is written as so in VB.NET:

			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="vb.net"
				code={"Imports System.Collections\n' This is how you create a list of int\nDim listOfInt As New List(Of Integers)"}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="vb.net"
				code={"Imports System.Collections\n' This is how you create a list of int\nDim listOfInt As New List(Of Integers)"}
			/>

			Obviously, the generic version with XML-like tags are also understandable and it symbolizes
			generic type, I just find the VB syntax really neat in this particular instance. For
			reference, this is what I was talking about:

			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="typescript"
				code={'// A list of number in TS\nconst arr = new Array<number>();'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="typescript"
				code={'// A list of number in TS\nconst arr = new Array<number>();'}
			/>

			Secondly, VB.NET is quite performant. I have worked on multiple desktop app projects written
			in VB.NET and it has been able to keep the performance of the application to the level that
			the company rarely receives performance complaints. And on those rare occasions, it has been
			traditionally someone writing stupid code (loading objects one by one instead of just one
			single query). Honestly, who wouldn't want a language whose code looks clean accompanied with
			fast compile time. <br /><br />

			One thing I find underrated about the .NET business is that the
			<a
				class="anchor"
				href="https://learn.microsoft.com/en-us/dotnet/desktop/winforms/forms/events?view=netdesktop-8.0"
				target="_blank"
				rel="external">event-driven nature of WinForm applications</a
			>. It was designed very elegantly and it speeds up the development process rapidly. A typical
			event handler in VB.NET can look like this:

			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="vb.net"
				code={`Imports System.Windows.Forms\n' Handle text changes for TextBox1 element\nProtected Sub TextBox1_TextChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles TextBox1.TextChanged\n    Console.WriteLine("Content of text box: " + TextBox1.Text)\nEnd Sub`}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="vb.net"
				code={`Imports System.Windows.Forms\n' Handle text changes for TextBox1 element\nProtected Sub TextBox1_TextChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles TextBox1.TextChanged\n    Console.WriteLine("Content of text box: " + TextBox1.Text)\nEnd Sub"'`}
			/>

			The <i class="code">sender</i> parameter contains relevant information about the element that
			triggered the event. This is not important in our context but it is helpful when we have
			shared event handlers functions that handle events for multiple components. The
			<i class="code">e</i>
			object provides the context of the event. The keywords themselves are very much explanatory and
			there's hardly any explanation needed for anyone to understand what the code is doing here.<br
			/><br />

			Though I cannot say that a lot of people agree with my opinion, but it has been a pleasure so
			far to work with VB.NET. I do think it's an underrated options for developers who are into
			desktop app (Windows, specifically). If that person is you, do check it out 😉
		</article>
	</div>
</div>
