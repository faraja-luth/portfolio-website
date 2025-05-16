// Greeting function based on time of day
window.onload = function() {
    const greeting = document.createElement('h2');
    const hour = new Date().getHours();
    if (hour < 12) {
        greeting.textContent = "Good Morning!";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon!";
    } else {
        greeting.textContent = "Good Evening!";
    }
    document.body.prepend(greeting);
};

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeStatus = document.getElementById('themeStatus');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    applyTheme(currentTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
    });
    
    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!savedTheme) { // Only change if user hasn't set a preference
        currentTheme = e.matches ? 'dark' : 'light';
        applyTheme(currentTheme);
      }
    });
    
    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      themeStatus.textContent = theme;
    }
  });

  document.getElementById('someElement').innerHTML = 'Updated content';
  document.getElementById('someElement').style.color = 'blue';
  
