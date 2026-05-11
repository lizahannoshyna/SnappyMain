import './js/switch';
import './js/note-modal';
import './js/sidebar';
import { gapiLoaded, gisLoaded } from './js/google-api.js';
import './js/settings.js';

window.addEventListener('load', () => {
    gapiLoaded();
    gisLoaded();
});
$(document).on("app:langChanged", () => {
    console.log("Language changed, re-rendering...");
    
    updateUserGreeting();
    
    const params = new URLSearchParams(window.location.search);
    const view = params.get("view");
    
    if (view === "settings") {
        showSettingsView(); 
    } else {
        showNotesView();
    }
});
