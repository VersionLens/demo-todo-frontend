const fakeTranslations = {
    "Buy milk": "Köp mjölk",
    "Buy eggs": "Köp ägg",
    "Buy bread": "Köp bröd",
}

export default async function translate(key) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fakeTranslations[key] || "MISSING TRANSLATION")
        }, 1000)
    })
}