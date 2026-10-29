const fullNameInput = document.getElementById('full_name');
const displayNameText = document.getElementById('displayNameText');
const avatarInput = document.getElementById('avatarInput');
const avatarPreviewContainer = document.getElementById('avatarPreviewContainer');

fullNameInput.addEventListener('input', function() {
  const value = this.value.trim();
  displayNameText.textContent = value || 'Your Name';
});

avatarInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      avatarPreviewContainer.style.backgroundImage = `url('${e.target.result}')`;
      avatarPreviewContainer.textContent = '';
    }
    reader.readAsDataURL(file);
  }
});

const settingsForm = document.getElementById('settingsForm');
const settingsToggle = document.getElementById('settings-toggle');
const toast = document.getElementById('toast');

settingsForm.addEventListener('submit', function(e) {
  e.preventDefault();

  toast.classList.add('show');
  settingsToggle.checked = false;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
});
