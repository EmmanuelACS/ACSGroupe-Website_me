// Garantit une URL exploitable telle quelle : une URL externe (http/https)
// passe inchangée, sinon force un chemin absolu depuis la racine web (évite
// les 404 si une donnée venait à stocker un simple nom de fichier au lieu de
// "/img/...").
export function resolveImagePath(path) {
    if (!path) return path;
    if (/^https?:\/\//.test(path)) return path;
    return path.startsWith('/') ? path : `/${path}`;
}
