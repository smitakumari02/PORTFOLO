
    // Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
      hamburger.querySelector('i').classList.toggle('fa-xmark');
    });
