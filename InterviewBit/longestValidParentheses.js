
function	longestValidParentheses(A) {
		let max = 0;

		const stack = []
		for (let i = 0; i < A.length; i++) {
			if (A[i] === ")" && stack.length > 0 && stack[stack.length - 1][0] === "(") {
				stack.pop();
				if (stack.length === 0) {
					max = Math.max(max, i + 1)
				} else {
					max = Math.max(max, i - stack[stack.length - 1][1])
				}

			} else {
				stack.push([A[i], i])
			}

		}

		return max;
	}

