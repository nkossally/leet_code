module.exports = {
    //param A : string
    //return an integer

    findRank: function (A) {
        const mod = 1000003

        const getCounts = (str) => {
            const counts = {};
            for (let i = 0; i < str.length; i++) {
                const letter = str[i];
                if (counts[letter] === undefined) counts[letter] = 0;
                counts[letter]++;
            }
            return counts;
        };

        const getUniquePermutationCount = (str) => {
            const counts = getCounts(str);
            return factorial(str.length, Object.values(counts));
        };

        const countHigerRankedStrings = (i) => {
            const startingLetters = new Set();
            const letter = A[i];
            const sortedTail = A.slice(i)
                .split("")
                .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
                .join("");
            const letterIdx = sortedTail.indexOf(letter);
            let count = 0;
            for (let i = 0; i < letterIdx; i++) {
                const currLetter = sortedTail[i];
                if (!startingLetters.has(currLetter)) {
                    startingLetters.add(currLetter);
                    const tail = sortedTail.slice(0, i) + sortedTail.slice(i + 1);
                    count += getUniquePermutationCount(tail);
                    count = count % mod;
                }
            }

            return count;
        };

        const factorial = (num, divisors) => {
            let i = 2
            let numerator = 1;
            const divisorArr = []
            while (i <= num) {
                numerator *= i;
                divisors.forEach((divisor) => {
                    if (i <= divisor) {
                        divisorArr.push(divisor)
                    }
                });
                let j = 0;
                while(j < divisorArr.length){
                    const val = divisorArr[j]
                    if(numerator %  val === 0){
                        numerator /= val;
                        divisorArr.splice(j, 1)
                    } else {
                        j++
                    }
                }
                i++;
                numerator = numerator % mod;
            }

            return numerator % mod;
        };

        let i = 0;
        let rank = 0;
        while (i < A.length) {
            rank += countHigerRankedStrings(i);
            rank = rank % mod;
            i++;
        }

        const result = (rank + 1) % mod;
        console.log(result)
        return result;
    },
};

module.exports.findRank("sadasdsasassasas");
module.exports.findRank("lDoAgpWmipGWOUuCIksS");
module.exports.findRank("MTrsfRcPnqhTOpMiTlgxtNePVPsvzONuzpQhCVUEdbXXZRygRASyvlaYlyXQzlLKIcoudZSQGNDimOiLZnthPlEAyPJSxPbUEWyJmYaGwxeCdVMGHVdaSqWBxddneOFdvesReQJPwgWvWsRpKCNLxCojQaGeZnTFcMekFcyNGtxXrOuODPJYqBkmKSoFmvocVTWBSdeaadDCpFArGwvtyTITGOoVNTGifHRDcBGqVUxOCdpYieKPNObMUchYCdbcgDDTKEycRaJPIfzJFxTeLUBGYccIVviXifAUFuBwtmuuDkbUhiqnmahEldaHhupOJUokLOztOECPgVSgxqqsSWgovSGVnkELsygdoeUIgoIguZqAbeHFwuphiaDdGRjNnleusCvXuQCBjfADGwpzgwNxWFqciJGkOIwpf");
