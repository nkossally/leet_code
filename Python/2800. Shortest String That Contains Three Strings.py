class Solution:
    def minimumString(self, a: str, b: str, c: str) -> str:
        def combine(word_1, word_2):

            for i in range(len(word_1) + 1):
                tail = word_1[i:]
                prefix = word_2[: len(tail)]
                min_len = min(len(tail), len(prefix))
                tail = tail[: min_len]
                prefix = prefix[: min_len]

                if tail == prefix:
                    combo = word_1 + word_2[len(prefix): ]
                    return combo
                    break

        def get_best_word(arr):
            res = arr[0]
            for i in range(1, len(arr)):
                if len(arr[i]) < len(res):
                    res = arr[i]
                elif len(arr[i]) == len(res) and arr[i] < res:
                    res = arr[i]
            return res

        string_1 = combine(combine(a, b), c)
        string_2 = combine(combine(b, a), c)
        string_3 = combine(combine(a, c), b)
        string_4 = combine(combine(c, a), b)
        string_5 = combine(combine(b, c), a)
        string_6 = combine(combine(c, b), a)

        return get_best_word([string_1, string_2, string_3,string_4, string_5,string_6])