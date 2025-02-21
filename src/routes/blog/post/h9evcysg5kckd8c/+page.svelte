<script>
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import { toDayOfWeek } from '$lib/helper/common';
	const title = `LeetCode Solutions`;
	// Year, month's index (so month - 1), day, hour, minute, second
	// Let's keep createdDate here as well just to be future proof
	const updatedDate = new Date(2024, 10, 23, 16, 7, 51);
	const createdDate = new Date(2024, 9, 31, 20, 26, 49);
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
			<a
				href="https://leetcode.com/problems/rotate-string/description/"
				target="_blank"
				rel="external"
				><h4 id="796-rotate-string" class="h4 font-bold anchor">796. Rotate String</h4></a
			><br />

			Honestly, I only took this because it was a daily question. Didn't see another approach so I
			went with brute-forcing. It does surprise me that the runtime was 0ms, but consider the input
			strings are 100 characters at max, I think it's reasonable. Anyways, here's the solution:

			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public bool RotateString(string s, string goal) {\n        if(s.Length != goal.Length) return false;\n        if(s == goal) return true;\n        // temporary copy of the original string content\n        var iter = s;\n\n        while(true) {\n            iter = iter.Substring(1, iter.Length - 1) + iter[0];\n            if(iter == goal) return true;\n            if(iter == s) return false;\n        }\n        \n        return false;\n    }\n}'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public bool RotateString(string s, string goal) {\n        if(s.Length != goal.Length) return false;\n        if(s == goal) return true;\n        // temporary copy of the original string content\n        var iter = s;\n\n        while(true) {\n            iter = iter.Substring(1, iter.Length - 1) + iter[0];\n            if(iter == goal) return true;\n            if(iter == s) return false;\n        }\n        \n        return false;\n    }\n}'}
			/>

			You probably can figure this out on your own quite easily.<br /><br />

			<a
				href="https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description/"
				target="_blank"
				rel="external"
				><h4 id="1523-count-odd-numbers-in-an-interval-range" class="h4 font-bold anchor">
					1523. Count Odd Numbers in an Interval Range
				</h4></a
			><br />

			Another range problem. My approach to this is to push <code class="code">low</code> to the
			same ending digit as <code class="code">high</code> and count the number of odds in the
			process. For example, let's say if low is 3 and high is 27, we push 3 to 7 and count (3, 5, 7)
			in the process. This is to ensure that the difference is now divisible by 10. Afterwards, just
			divide the diff by 2.
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public int CountOdds(int low, int high) {\n        int diff = high - low;\n        int count = 0;\n\n        // push low to the same last digit as high\n        // so that the diff is divisible by 10\n        for(int i = low; i <= low + (diff % 10); ++i) {\n            if(i % 2 == 1 ) {\n                count++;\n            }\n        }\n\n        // subtract the accounted part above\n        diff -= (diff % 10);\n\n        // 5 odd numbers in every 10 numbers\n        count += (diff / 2);\n\n        return count;       \n    }\n}'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public int CountOdds(int low, int high) {\n        int diff = high - low;\n        int count = 0;\n\n        // push low to the same last digit as high\n        // so that the diff is divisible by 10\n        for(int i = low; i <= low + (diff % 10); ++i) {\n            if(i % 2 == 1 ) {\n                count++;\n            }\n        }\n\n        // subtract the accounted part above\n        diff -= (diff % 10);\n\n        // 5 odd numbers in every 10 numbers\n        count += (diff / 2);\n\n        return count;       \n    }\n}'}
			/>
			The code performed quite well, dropping in at about 80% percentile (unsure how credible is LeetCode's
			evaluation system though). <br /><br />

			<a
				href="https://leetcode.com/problems/sum-of-digits-in-base-k/description/"
				target="_blank"
				rel="external"
				><h4 id="1837-sum-of-digits-in-base-k" class="h4 font-bold anchor">
					1837. Sum of Digits in Base K
				</h4></a
			><br />

			The description was clear and concise. Convert the number <code class="code">n</code> to base
			<code class="code">k</code>
			and calculate the sum of all the digits in the converted number representation.
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public int SumBase(int n, int k) {\n        var converted = String.Empty;\n        int ans = 0;\n\n        // Convert to base k\n        while(n / k != 0) {      \n            converted = converted + (n % k).ToString();   \n            n /= k;\n        }\n        converted += (n % k).ToString();\n\n        // calculate sum of digits\n        foreach(char ch in converted) {\n            ans += Int32.Parse(ch.ToString());\n        }\n\n        return ans;\n        \n    }\n}'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public int SumBase(int n, int k) {\n        var converted = String.Empty;\n        int ans = 0;\n\n        // Convert to base k\n        while(n / k != 0) {      \n            converted = converted + (n % k).ToString();   \n            n /= k;\n        }\n        converted += (n % k).ToString();\n\n        // calculate sum of digits\n        foreach(char ch in converted) {\n            ans += Int32.Parse(ch.ToString());\n        }\n\n        return ans;\n        \n    }\n}'}
			/>
			Ngl, I had to look up how to convert decimals to an arbitrary base representation to do this question.
			I found
			<a
				class="anchor"
				href="https://www.quora.com/How-do-I-convert-decimal-numbers-to-another-base"
				target="_blank"
				rel="external">this article</a
			>
			quite helpful but I'm sure you can understand the mechanism after 5 minutes of reading. Solution
			was clean and fast, but not that it's super difficult for anyone.<br /><br />

			<a
				href="https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/description/"
				target="_blank"
				rel="external"
				><h4
					id="2099-find-subsequence-of-length-k-with-the-largest-sum"
					class="h4 font-bold anchor"
				>
					2099. Find Subsequence of Length K With the Largest Sum
				</h4></a
			><br />

			An interesting question, to say the least. I thought about retrieving the top <i>k</i> values
			from the array and call it a day, but order matters in this one. This is my working solution:
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public int[] MaxSubsequence(int[] nums, int k) {\n        var ans = new SortedDictionary<int, int>();\n        while(ans.Count < k) {\n            var max = nums.Max();\n            var idx = Array.IndexOf(nums, max);\n            ans.Add(idx, max);\n            nums[idx] = Int32.MinValue;\n        }\n        return ans.Values.ToArray();\n    }\n}'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public int[] MaxSubsequence(int[] nums, int k) {\n        var ans = new SortedDictionary<int, int>();\n        while(ans.Count < k) {\n            var max = nums.Max();\n            var idx = Array.IndexOf(nums, max);\n            ans.Add(idx, max);\n            nums[idx] = Int32.MinValue;\n        }\n        return ans.Values.ToArray();\n    }\n}'}
			/>
			Probably not the cleanest, but it works just fine. Here, through each iteration, we retrieve the
			max value of the list, add it to the
			<a
				class="anchor"
				href="https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.sorteddictionary-2?view=net-8.0"
				rel="external"
				target="_blank">sorted dictionary</a
			>
			and just set the max value to
			<code class="code">Int32.MinValue</code>. I used the SortedDictionary with array indices as
			keys in order to keep the order in check, ensuring that the result array is a valid
			subsequence of the original one. Afterwards, we should have a list with preserved order and we
			just need to return the dictionary values (and, convert it to an array). Not super performant,
			but it did the job. A priority queue will probably work better here.<br /><br />

			<a
				href="https://leetcode.com/problems/a-number-after-a-double-reversal/description/"
				target="_blank"
				rel="external"
				><h4 id="2119-a-number-after-a-double-reversal" class="h4 font-bold anchor">
					2119. A Number After a Double Reversal
				</h4></a
			><br />

			One of those problems that made me question if I missed some edge cases because it can't be
			this easy. Well, it is. My first thought was just checking if the number was divisible by 10
			(i.e the number ends with one or more 0s). 0 was an edge case so it was handled with a simple
			if check.
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="typescript"
				code={'function isSameAfterReversals(num: number): boolean {\n    return num === 0 ? true : num % 10 !== 0;\n};'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="typescript"
				code={'function isSameAfterReversals(num: number): boolean {\n    return num === 0 ? true : num % 10 !== 0;\n};'}
			/>

			<a
				href="https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/"
				target="_blank"
				rel="external"
				><h4 id="2154-keep-multiplying-found-values-by-two" class="h4 font-bold anchor">
					2154. Keep Multiplying Found Values by Two
				</h4></a
			>

			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public int FindFinalValue(int[] nums, int original) {\n        while(Array.IndexOf(nums, original) != -1) {\n            original *= 2;\n        }\n        return original; \n    }\n}'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public int FindFinalValue(int[] nums, int original) {\n        while(Array.IndexOf(nums, original) != -1) {\n            original *= 2;\n        }\n        return original; \n    }\n}'}
			/>

			<a
				href="https://leetcode.com/problems/count-integers-with-even-digit-sum/description/"
				target="_blank"
				rel="external"
				><h4 id="2180-count-integers-with-even-digit-sum" class="h4 font-bold anchor">
					2180. Count Integers With Even Digit Sum
				</h4></a
			><br />

			The key to solving this one is knowing that every ten numbers, there are 5 of them whose
			digits add up to an even number. This helps majorly as I divided the number by 10, multiple by
			5 and I already have the count of all numbers before the ending tenth. To put it simple, if
			<code class="code">num</code>
			was 413 then the division already gave me the count of numbers satisfying the condition in range
			[0:409]. This left me with [410:413] to handle.
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public int CountEven(int num) {\n        int count = 0;\n\n        int lastDigit = num % 10;\n        int countOfTens = num / 10;\n        int allDigitsSum = 0;\n        \n        // every ten numbers, there are 5 whose digits sum will be even. \n        // -1 for the first of the ending tenth \n        count += countOfTens * 5 - 1;\n\n        foreach(char digit in num.ToString()) {\n            allDigitsSum += digit;\n        }\n\n        // the ending tenth\n        for(int i = 0; i <= lastDigit; ++i) {\n            if(allDigitsSum % 2 == 0 && i %2 == 0) count++;\n            else if(allDigitsSum % 2 != 0 && i % 2 != 0) count++; \n        }\n        \n        return count;\n    }\n}'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public int CountEven(int num) {\n        int count = 0;\n\n        int lastDigit = num % 10;\n        int countOfTens = num / 10;\n        int allDigitsSum = 0;\n        \n        // every ten numbers, there are 5 whose digits sum will be even. \n        // -1 for the first of the ending tenth \n        count += countOfTens * 5 - 1;\n\n        foreach(char digit in num.ToString()) {\n            allDigitsSum += digit;\n        }\n\n        // the ending tenth\n        for(int i = 0; i <= lastDigit; ++i) {\n            if(allDigitsSum % 2 == 0 && i %2 == 0) count++;\n            else if(allDigitsSum % 2 != 0 && i % 2 != 0) count++; \n        }\n        \n        return count;\n    }\n}'}
			/>
			Handling the ending tenth is just the matter of determining the sum of all digits. If the sum of
			all digits was even, we traverse from 0 to the last digit and count all even numbers (0, 2, 4,
			6, 8). Vice versa, we count the odd ones (1, 3, 5, 7, 9). Problem solved! I do think this is quite
			optimal as a solution for this specific problems. Some twitch here and there is possible but probably
			not gonna make it noticeably faster.<br /><br />

			<a
				href="https://leetcode.com/problems/decode-the-message/description/"
				target="_blank"
				rel="external"
				><h4 id="2325-decode-the-message" class="h4 font-bold anchor">
					2325. Decode the Message
				</h4></a
			><br />

			A perfect use case for Dictionary, I'd say (some call it a Map).
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={"public class Solution {\n    public string DecodeMessage(string key, string message) {\n        var retVal = String.Empty;\n        var dict = new Dictionary<char, char>();\n\n        // populates the dictionary\n        foreach(var ch in key) {\n            if(ch != ' ' && !dict.ContainsKey(ch)) {\n                // 'a' starts at 97 in the ascii table so we add it up and then convert it back to char type\n                dict.Add(ch, Convert.ToChar(dict.Count + 97));\n            }\n        }\n\n        // constructing a new string by substituting\n        foreach(var ch in message) {\n            if(dict.ContainsKey(ch)) {\n                retVal += dict[ch];\n            } else {\n                retVal += ch;\n            }\n        }\n\n        return retVal;\n    }\n}"}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={"public class Solution {\n    public string DecodeMessage(string key, string message) {\n        var retVal = String.Empty;\n        var dict = new Dictionary<char, char>();\n\n        // populates the dictionary\n        foreach(var ch in key) {\n            if(ch != ' ' && !dict.ContainsKey(ch)) {\n                // 'a' starts at 97 in the ascii table so we add it up and then convert it back to char type\n                dict.Add(ch, Convert.ToChar(dict.Count + 97));\n            }\n        }\n\n        // constructing a new string by substituting\n        foreach(var ch in message) {\n            if(dict.ContainsKey(ch)) {\n                retVal += dict[ch];\n            } else {\n                retVal += ch;\n            }\n        }\n\n        return retVal;\n    }\n}"}
			/>
			We traverse through the key string, map it out in the dictionary. After that is done, we go through
			the message and decode it. If the character is in the dictionary, we append the decoded character.
			Else we just add the raw character to the string. Simple and easy enough to understand.<br
			/><br />

			<a
				href="https://leetcode.com/problems/first-letter-to-appear-twice/description/"
				target="_blank"
				rel="external"
				><h4 id="2351-first-letter-to-appear-twice" class="h4 font-bold anchor">
					2351. First Letter to Appear Twice
				</h4></a
			><br />

			I went with the most simple approach: have a vector of letters that appeared in the string,
			check if the character was in the vector and return it. No crazy sciences.
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={'class Solution {\npublic:\n    char repeatedCharacter(string s) {\n        vector<char> encounteredChars = {};\n        for(int i = 0; i < s.size(); ++i) {\n            if(find(encounteredChars.begin(), encounteredChars.end(), s[i]) != encounteredChars.end()) return s[i];\n            encounteredChars.push_back(s[i]); \n        }\n        return s[0];\n    }\n};'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={'class Solution {\npublic:\n    char repeatedCharacter(string s) {\n        vector<char> encounteredChars = {};\n        for(int i = 0; i < s.size(); ++i) {\n            if(find(encounteredChars.begin(), encounteredChars.end(), s[i]) != encounteredChars.end()) return s[i];\n            encounteredChars.push_back(s[i]); \n        }\n        return s[0];\n    }\n};'}
			/>

			<a
				href="https://leetcode.com/problems/number-of-valid-clock-times/description/"
				target="_blank"
				rel="external"
				><h4 id="2437-number-of-valid-clock-times" class="h4 font-bold anchor">
					2437. Number of Valid Clock Times
				</h4></a
			><br />

			Not much DS knowledge or anything necessary here, just basic logic for this question. Here's
			what I had:
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={"public class Solution {\n    public int CountTime(string time) {\n        var timeParts = time.Split(':');\n        var h1 = timeParts[0][0];\n        var h2 = timeParts[0][1];\n        var m1 = timeParts[1][0];\n        var m2 = timeParts[1][1];\n\n        return CountHours(h1, h2) * CountMinutes(m1, m2);\n    }\n\n    private int CountHours(char h1, char h2) {\n        if (h1 == '?' && h2 == '?') {\n            return 24;\n        }\n        if (h1 == '?') {\n            if(h2 <= '3') {\n                return 3;\n            } else {\n                return 2;\n            }\n        }\n        if (h2 == '?') {\n            if(h1 == '2') return 4;\n            else return 10; \n        }\n\n        return 1;\n    }\n\n    private int CountMinutes(char m1, char m2) {\n        if(m1 == '?' && m2 == '?') {\n            return 60;\n        }\n        if (m1 == '?') {\n            return 6;\n        }\n        if (m2 == '?') {\n            return 10;\n        }\n\n        return 1;\n    }\n}"}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={"public class Solution {\n    public int CountTime(string time) {\n        var timeParts = time.Split(':');\n        var h1 = timeParts[0][0];\n        var h2 = timeParts[0][1];\n        var m1 = timeParts[1][0];\n        var m2 = timeParts[1][1];\n\n        return CountHours(h1, h2) * CountMinutes(m1, m2);\n    }\n\n    private int CountHours(char h1, char h2) {\n        if (h1 == '?' && h2 == '?') {\n            return 24;\n        }\n        if (h1 == '?') {\n            if(h2 <= '3') {\n                return 3;\n            } else {\n                return 2;\n            }\n        }\n        if (h2 == '?') {\n            if(h1 == '2') return 4;\n            else return 10; \n        }\n\n        return 1;\n    }\n\n    private int CountMinutes(char m1, char m2) {\n        if(m1 == '?' && m2 == '?') {\n            return 60;\n        }\n        if (m1 == '?') {\n            return 6;\n        }\n        if (m2 == '?') {\n            return 10;\n        }\n\n        return 1;\n    }\n}"}
			/>

			<a
				href="https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/description/"
				target="_blank"
				rel="external"
				><h4 id="2486-append-characters-to-string-to-make-subsequence" class="h4 font-bold anchor">
					2486. Append Characters to String to Make Subsequence
				</h4></a
			><br />

			One of the more affordable normal difficulty questions for me. The hint gave great direction
			to solving this. Double pointers to traverse through both strings and count how many
			characters of <code class="code">t</code> appeared in <code class="code">s</code> and return
			the length of the characters that were not found.
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public double MinimumAverage(int[] nums) {\n        double minAvg = double.MaxValue;\n        Array.Sort(nums);\n        for(int i = 0; i < nums.Length / 2; ++i) {\n            var min = nums[i];\n            var max = nums[nums.Length - i - 1];\n            var tmp = (min + max) * 1.0 / 2;\n            if(minAvg > tmp) minAvg = tmp;\n        }\n        return minAvg;\n    }\n}'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public double MinimumAverage(int[] nums) {\n        double minAvg = double.MaxValue;\n        Array.Sort(nums);\n        for(int i = 0; i < nums.Length / 2; ++i) {\n            var min = nums[i];\n            var max = nums[nums.Length - i - 1];\n            var tmp = (min + max) * 1.0 / 2;\n            if(minAvg > tmp) minAvg = tmp;\n        }\n        return minAvg;\n    }\n}'}
			/>

			<a
				href="https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/description/"
				target="_blank"
				rel="external"
				><h4 id="3194-minimum-average-of-smallest-and-largest-elements" class="h4 font-bold anchor">
					3194. Minimum Average of Smallest and Largest Elements
				</h4></a
			><br />

			The constraint is important in how we should approach this problem. The
			<code class="code">nums</code>
			array is limited to 50 members at max. This ensures sorting is not super bad for performance, and
			the gain from sorting the array helps solving the problem easily so I proceeded to do that. The
			solution is as follow:
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public double MinimumAverage(int[] nums) {\n        double minAvg = double.MaxValue;\n        Array.Sort(nums);\n        for(int i = 0; i < nums.Length / 2; ++i) {\n            var min = nums[i];\n            var max = nums[nums.Length - i - 1];\n            var tmp = (min + max) * 1.0 / 2;\n            if(minAvg > tmp) minAvg = tmp;\n        }\n        return minAvg;\n    }\n}'}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={'public class Solution {\n    public double MinimumAverage(int[] nums) {\n        double minAvg = double.MaxValue;\n        Array.Sort(nums);\n        for(int i = 0; i < nums.Length / 2; ++i) {\n            var min = nums[i];\n            var max = nums[nums.Length - i - 1];\n            var tmp = (min + max) * 1.0 / 2;\n            if(minAvg > tmp) minAvg = tmp;\n        }\n        return minAvg;\n    }\n}'}
			/>
			The description misled me into having an array of averages, but that's not the optimal solution.
			Instead having a min variable was sufficient. This came in at 0ms, I think it can hardly be more
			optimized.<br /><br />

			<a
				href="https://leetcode.com/problems/find-the-key-of-the-numbers/description/"
				target="_blank"
				rel="external"
				><h4 id="3270-find-the-key-of-the-numbers" class="h4 font-bold anchor">
					3270. Find the Key of the Numbers
				</h4></a
			><br />

			I went with this most intuitive solution for this problem (or at least the most intuitive to
			me): pad the number, loop through and construct the result string before parsing it back to
			int. Works well enough for me.
			<CodeBlock
				class="my-4 hidden md:block"
				lineNumbers={true}
				buttonCopied="Copied ✅"
				language="c#"
				code={"public class Solution {\n    public int GenerateKey(int num1, int num2, int num3) {\n        const int LENGTH = 4;\n        var res = String.Empty;\n\n        var n1Digits = num1.ToString().PadLeft(LENGTH, '0').ToCharArray();\n        var n2Digits = num2.ToString().PadLeft(LENGTH, '0').ToCharArray();\n        var n3Digits = num3.ToString().PadLeft(LENGTH, '0').ToCharArray();\n\n        for(int i = 0; i < LENGTH; ++i) {\n            // Subtract 48 to convert char to int. Unethical but it works and it's fast.\n            res += Math.Min(Math.Min(n1Digits[i], n2Digits[i]), n3Digits[i]) - 48;\n        }\n\n        return Int32.Parse(res);\n    }\n}"}
			/>
			<CodeBlock
				class="my-4 block md:hidden"
				lineNumbers={false}
				buttonCopied="Copied ✅"
				language="c#"
				code={"public class Solution {\n    public int GenerateKey(int num1, int num2, int num3) {\n        const int LENGTH = 4;\n        var res = String.Empty;\n\n        var n1Digits = num1.ToString().PadLeft(LENGTH, '0').ToCharArray();\n        var n2Digits = num2.ToString().PadLeft(LENGTH, '0').ToCharArray();\n        var n3Digits = num3.ToString().PadLeft(LENGTH, '0').ToCharArray();\n\n        for(int i = 0; i < LENGTH; ++i) {\n            // Subtract 48 to convert char to int. Unethical but it works and it's fast.\n            res += Math.Min(Math.Min(n1Digits[i], n2Digits[i]), n3Digits[i]) - 48;\n        }\n\n        return Int32.Parse(res);\n    }\n}"}
			/>
			Comes in at about 47% percentile, but it was at 1ms vs 0ms.<br /><br />
		</article>
	</div>
</div>
