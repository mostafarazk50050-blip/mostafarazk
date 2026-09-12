const langBtn = document.getElementById('lang-btn');
let currentLang = 'en';

langBtn.addEventListener('click', () => {
    // Switch Language
    currentLang = currentLang === 'en' ? 'ar' : 'en';

    // 1. Update HTML dir and lang attributes
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    // 2. Update Toggle Button Text
    langBtn.textContent = currentLang === 'en' ? 'عربي' : 'English';

    // 3. Update all text elements with data-en & data-ar
    const elementsToTranslate = document.querySelectorAll('.lang');
    elementsToTranslate.forEach(element => {
        const text = element.getAttribute(`data-${currentLang}`);
        if (text) {
            element.textContent = text;
        }
    });
});