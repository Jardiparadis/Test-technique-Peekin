export function getSavedTimeStats() {
  return new Promise<{savedTime: string, baseTime: string}>((resolve) => {
    setTimeout(() => {
      resolve({
        savedTime: '16 j 12 h 45 min',
        baseTime: '32 j 18h 21 min'
      });
    }, 2000);
  });
}
