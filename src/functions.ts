function calculateTax(income: number, taxYear?: number): number {
  income = 20;
  if ((taxYear || 2022) < 2022) return income * 1.2;

  return income * 1.2;
}

calculateTax(20_000);
