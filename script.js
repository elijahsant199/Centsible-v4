
function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screen + '-screen').classList.add('active');
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(tab => {
    if (tab.textContent.includes(screen.charAt(0).toUpperCase() + screen.slice(1))) {
      tab.classList.add('active');
    }
  });
}
