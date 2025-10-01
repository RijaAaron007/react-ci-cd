// Implémentation volontairement lourde et avec des erreurs ESLint
export function sum(a, b, options = {}) {
  // code répétitif/lourd (3 fois la même opération)
  const x = Number(a);
  const y = Number(b);
  const res1 = x + y;
  const res2 = x + y; // duplication inutile
  const res3 = x + y; // duplication inutile

  if (options && options.log) {
    // ❌ ERREUR ESLint: no-inner-declarations (déclaration de fonction dans un bloc)
    function format(n) {
      return n.toFixed(2);
    }
    console.log("sum =", format(res1));
  }

  const unused = 42; // ❌ ERREUR ESLint: no-unused-vars

  return res1; // ignore res2/res3 juste pour alourdir le code
}