import copy

class Solution:
    def minimizeConcatenatedLengthMisunderstood(self, words: List[str]) -> int:
        total_count = 0
        for word in words:
            total_count += len(word)

        def recur(count, words ):
            print(count, words)
            max_count = float("-inf")
            for i in range(len(words)):
                for j in range(i + 1, len(words)):
                    word_1 = words[i]
                    word_2 = words[j]
                    start_1 = word_1[0]
                    start_2 = word_2[0]
                    end_1 = word_1[-1]
                    end_2 = word_2[-1]
                    print(word_1, word_2, start_1, start_2, end_1, end_2)
                    if start_1 == end_2:
                        new_word = word_2 + word_1[1:]
                        new_words = words[0: i] + words[i + 1 : j] + words[j + 1:] + [new_word] 
                        max_count = max(max_count, recur(count + 1, new_words))
                    if start_2 == end_1:
                        new_word = word_1 + word_2[1:]
                        new_words = words[0: i] + words[i + 1 : j] + words[j + 1:] + [new_word] 
                        max_count = max(max_count, recur(count + 1, new_words))
            if max_count == float("-inf"):
                return count
            return max_count

        collisions = recur(0, words)
        print(total_count, collisions)
        return total_count - collisions

    def minimizeConcatenatedLengthMisunderstoodFaster(self, words: List[str]) -> int:
        starts_with = defaultdict(list)
        ends_with = defaultdict(list)
        both = defaultdict(int)
        total_count = 0

        for word in words:
            start = word[0]
            end = word[-1]
            total_count += len(word)
            if start == end:
                both[start] += 1
            else:
                starts_with[start].append(end)
                ends_with[end].append(start)
        for letter in both:
            total_count -= both[letter] - 1
            both[letter] = 1
            if letter in starts_with or letter in ends_with:
                total_count -= 1


        def recur(count, starts_with, ends_with, both ):
            print("count", count,"starts_with", starts_with, "ends_with", ends_with, "both", both )
            # print("begin", both,"count", count)
            for letter in both:
                if both[letter] > 1:
                    count += both[letter] - 1
                    both[letter] = 1
                # if letter in starts_with or letter in ends_with:
                #     count += 1
                #     del both[letter]
            # for letter in both:
            #     if both[letter] == 1 and (letter in starts_with or letter in ends_with):
            #         both[letter] = 0
            #         count += 1
            # print("end", both,"count", count)

            max_count = float("-inf")
            for letter in starts_with:
                for end_letter in starts_with[letter]:
                    for start_letter in ends_with[letter]:
                        starts_with_cpy = copy.deepcopy(starts_with)
                        ends_with_cpy = copy.deepcopy(ends_with)
                        starts_with_cpy[letter].remove(end_letter)
                        starts_with_cpy[start_letter].remove(letter)

                        ends_with_cpy[letter].remove(start_letter)
                        ends_with_cpy[end_letter].remove(letter)

                        both_cpy = copy.deepcopy(both)
                        if start_letter == end_letter:
                            both_cpy[start_letter] += 1
                        else:
                            starts_with_cpy[start_letter].append(end_letter)
                            ends_with_cpy[end_letter].append(start_letter)
                        max_count = max(max_count, recur(count + 1, starts_with_cpy, ends_with_cpy,both_cpy ))

            if max_count == float("-inf"):
                return count
            return count + max_count

        collisions = recur(0, starts_with, ends_with, both )
        return total_count - collisions
    
        