const btn = document.querySelector('.menu-btn');

// ✅ Check if btn exists before addEventListener()
if (btn) {
    document.querySelector('.menu-btn').addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('show');
    });
}







