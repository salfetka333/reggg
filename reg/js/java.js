function togglePasswordVisibility() {
    const passwordInput = document.querySelector('.password-input');
    const toggleButton = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.innerHTML = '<img src="image/icons8-удивление-64.png" class="small-icon" alt="скрыть">';
        
    } else {
        passwordInput.type = 'password';
        toggleButton.innerHTML = '<img src="image/icons8-закрытый-глаз-50.png" class="small-icon" alt="показать">';
    }
}
