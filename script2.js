new Vue({
    el: '#app',
    data: {
        checkboxes: [
            {label: 'Русский', value: false},
            {label: 'English', value: false},
            {label: 'ГОСТ', value: false},
            {label: 'Scopus', value: false},
            {label: 'Транслитерация', value: false}
        ],
        reference: {
            author: 'Баранов, Л. А.',
            title: 'Интеллектуальное централизованное управление движением внеуличного городского железнодорожного транспорта в условиях интенсивного движения',
            journal: 'Надежность',
            year: '2021',
            volume: 'Т. 21',
            issue: '№ 2',
            pages: 'С. 17-23'
        },
        showAdditionalInfo: false
    },
    computed: {
        formattedReference() {
            const ref = this.reference;
            return {
                russian: `${ref.author} // ${ref.journal}. – ${ref.year}. – ${ref.volume}, ${ref.issue}. – ${ref.pages}.`,
                english: `Baranov L A 2021 ${ref.title} (${ref.journal} vol 21) pp 17–23`,
                gost: `1. ${ref.author} ${ref.title} / ${ref.author} // ${ref.journal}. – ${ref.year}. – ${ref.volume}, ${ref.issue}. – ${ref.pages}.`,
                scopus: `[1] Baranov L A 2021 ${ref.title} (${ref.journal} vol 21) pp 17–23`,
                transliteration: `1. Baranov, L. A. ${ref.title} / L. A. Baranov // ${ref.journal}. – ${ref.year}. – ${ref.volume}, ${ref.issue}. – ${ref.pages}.`
            };
        }
    }
});
