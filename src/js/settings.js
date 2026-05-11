import $ from "jquery";

export const translations = {
    ua: {
        settingsTitle: "Налаштування",
        userNameLabel: "Ваше ім'я",
        langLabel: "Мова інтерфейсу",
        notesTitle: "Нотатки",
        calendarTitle: "Статус календаря",
        placeholderName: "Введіть ім'я...",
        syncText: "Нотатки синхронізовано",
        backBtn: "← Назад",
        hello: "Привіт,",
        modalNewTitle: "Нова нотатка",
        modalEditTitle: "Редагувати нотатку",
        summaryLabel: "Заголовок",
        descriptionLabel: "Опис",
        locationLabel: "Локація",
        startLabel: "Початок",
        endLabel: "Кінець",
        summaryPlaceholder: "Коротка назва нотатки",
        descriptionPlaceholder: "Опишіть вашу нотатку...",
        locationPlaceholder: "Додати місце (опціонально)",
        createBtn: "Створити нотатку",
        saveBtn: "Зберегти зміни",
        cancelBtn: "Скасувати",
        summaryEmpty: "Заголовок не може бути порожнім"
    },
    en: {
        settingsTitle: "Settings",
        userNameLabel: "Your Name",
        langLabel: "Interface Language",
        notesTitle: "Notes",
        calendarTitle: "Calendar Status",
        placeholderName: "Enter name...",
        syncText: "Notes currently synced",
        backBtn: "← Back",
        hello: "Hello,",
        modalNewTitle: "New Note",
        modalEditTitle: "Edit Note",
        summaryLabel: "Summary",
        descriptionLabel: "Description",
        locationLabel: "Location",
        startLabel: "Start date-time",
        endLabel: "End date-time",
        summaryPlaceholder: "Short note title",
        descriptionPlaceholder: "Describe your note...",
        locationPlaceholder: "Optional location",
        createBtn: "Create note",
        saveBtn: "Save Changes",
        cancelBtn: "Cancel",
        summaryEmpty: "Summary can't be empty"
    }
};

export function getCurrentLang() {
    const savedLang = localStorage.getItem('app-lang');
    return (translations[savedLang]) ? savedLang : 'en';
}


export function updateUserGreeting() {
    const name = localStorage.getItem('user-name');
    const lang = getCurrentLang() || 'en'; 
    const t = translations[lang] || translations['en']; 
    
    if (t && name) { 
        $('#user-greeting').text(`${t.hello} ${name}!`);
    } else {
        $('#user-greeting').text('');
    }
}


export function initSettingsListeners() {
    $(document).on('input', '#settings-user-name', function() {
        localStorage.setItem('user-name', $(this).val());
        updateUserGreeting();
    });

    $(document).on('change', '#settings-lang', function() {
        const newLang = $(this).val();
        const inputName = $('#settings-user-name').val();
        if (inputName && inputName.trim()) {
            localStorage.setItem('user-name', inputName.trim());
        }
        localStorage.setItem('app-lang', newLang);
        updateUserGreeting();
        $(document).trigger('app:langChanged');
    });
}