class Solution(object):
    def replaceWords(self, dictionary, sentence):
        """
        :type dictionary: List[str]
        :type sentence: str
        :rtype: str
        """
        result = ""
        dic_set = set(dictionary)

        words = sentence.split(" ")

        for (i, word) in enumerate(words):
            possible_root = word
            for j in range(len(word)):
                sub = word[0: j + 1]
                if sub in dic_set:
                    possible_root = sub
                    break
            result += possible_root
            if i < len(words) - 1:
                result += " "
        return result
