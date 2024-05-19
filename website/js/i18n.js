/**
 * Update the content of the page with the provided language data.
 * @param {*} langData The language data to update the page with.
 */
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    });
}

/**
 * Change the language preference of the user.
 * @param {*} lang The language to change to.
 */
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

/**
 * Fetch the language data for the specified language.
 * @param {*} lang The language to fetch the data for.
 */
async function fetchLanguageData(lang) {
    try {
        const response = await fetch(`./${lang}.json`);
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    } catch (error) {
        console.error('Error fetching language data:', error);
    }
}

/**
 * Change the language of the page.
 * @param {*} lang The language to change to.
 */
async function changeLanguage(lang) {
    setLanguagePreference(lang);

    const langData = await fetchLanguageData(lang);
    updateContent(langData);
}