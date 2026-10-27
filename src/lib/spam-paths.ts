// Hack residue from the old WordPress site (pre-18 Aug 2026): casino / gambling
// spam pages Google still crawls. These get 410 Gone so they drop out of the index
// faster than a 404. Built from the GSC Pages report (26 Oct 2026).
//
// Safety rules:
// - Only the FIRST path segment is tested, and only for paths that are not a real route.
// - Unknown paths that don't match keep the normal 404.

const REAL_ROUTES = new Set([
  "about", "catalogue", "fabrication", "industries", "partners",
  "products", "references", "solutions", "api",
]);

// Whole hyphen-delimited tokens (so "bet" never matches "alphabet").
const SPAM_TOKENS = new Set([
  "casino", "casinos", "kasyno", "kazino", "kazinosu", "slot", "slots", "bet", "betting",
  "gambling", "gamble", "coolzino", "caspero", "roostake", "stake", "chicken", "monaco",
  "jack", "moonspin", "pin", "interac", "jeu", "poker", "roulette", "jackpot", "spins",
  "kerdwn", "diaskedasis", "candyland", "choriomon", "a98", "nv", "sayt366",
]);

// Substrings for non-Latin / glued spellings.
const SPAM_SUBSTRINGS = ["καζίν", "casino", "kasyno", "kazino", "gambling", "coolzino", "caspero"];

export function isSpamPath(pathname: string): boolean {
  let first: string;
  try {
    first = decodeURIComponent(pathname).toLowerCase().split("/").filter(Boolean)[0] ?? "";
  } catch {
    return false;
  }
  if (!first || REAL_ROUTES.has(first) || first.includes(".")) return false;
  if (SPAM_SUBSTRINGS.some((s) => first.includes(s))) return true;
  return first.split("-").some((t) => SPAM_TOKENS.has(t));
}
