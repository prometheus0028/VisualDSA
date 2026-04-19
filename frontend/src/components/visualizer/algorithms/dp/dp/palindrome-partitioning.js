export function generatePalindromePartitionSteps(s) {
  const steps = [];
  const palindromes = [];

  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sub = s.slice(i, j + 1);

      if (isPalindrome(sub)) {
        palindromes.push(sub);

        steps.push({
          dp: [[1]],
          action: `Palindrome found: ${sub}`,
          palindromes: [...palindromes],
        });
      }
    }
  }

  // final step
  steps.push({
    dp: [[1]],
    action: 'Done',
    palindromes,
  });

  return steps;
}
