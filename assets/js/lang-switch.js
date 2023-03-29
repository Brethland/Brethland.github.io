function setLang() {
    const lang = event.target.title;
    const stored_lang = window.localStorage.getItem("perferred_language");
    if(stored_lang != lang) {
        window.localStorage.setItem("perferred_language", lang);
    }
}