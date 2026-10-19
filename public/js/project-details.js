const saveButton = document.getElementById("save-project");
const saveMessage = document.getElementById("save-message");

if (saveButton) {
    saveButton.addEventListener("click", () => {
        saveMessage.textContent =
            "Saving projects will be available when account and database features are connected.";
    });
}