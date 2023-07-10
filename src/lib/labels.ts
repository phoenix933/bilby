/**
 * Returns a random label from a seed list
 * @returns a random label from a seed list
 */
export function getRandomLabel() {
    const seed = [
        "china",
        "russia",
        "twitter",
        "taiwan",
        "eu",
        "military",
        "research",
        "oil",
        "economy",
        "defense",
        "hong kong",
        "ai",
        "biomanufacturing",
        "investment bank",
        "trade policy",
        "germany",
        "raw materials",
        "batteries",
        "semiconductors",
        "bank of east asia"
    ];

    return seed[Math.floor(Math.random() * seed.length)];
}