const changer = document.getElementById('theme-changer');
const html = document.documentElement;

changer.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
});

const change = document.getElementById('theme-change');
const index = document.documentElement;

change.addEventListener('change', function() {
    index.toggleAttribute('data-theme-dark');
});
