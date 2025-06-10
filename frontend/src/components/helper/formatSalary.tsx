export function formatSalary(num: string | number) {
    const n = typeof num === "string" ? parseFloat(num) : num;
    if (isNaN(n)) return "";
  
    if (n >= 1_000_000) {
      return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (n >= 1_000) {
      return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return n.toString();
  }
