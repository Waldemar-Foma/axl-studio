// ============================================================
//   BURGER MENU
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const closeBtn = document.getElementById('mobileMenuClose');
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');
    const mobileCta = document.getElementById('contactNavMobile');

    if (!burger || !mobileMenu) return;

    function openMenu() {
        mobileMenu.classList.add('is-open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        burger.classList.add('is-open');
        burger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        mobileMenu.classList.remove('is-open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    }

    burger.addEventListener('click', () => {
        mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    // Закрытие при клике на пункт меню
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Кнопка "Связаться" в мобильном меню — открывает контактную модалку
    mobileCta?.addEventListener('click', () => {
        closeMenu();
        // Небольшая задержка, чтобы меню успело закрыться и не конфликтовало с модалкой
        setTimeout(() => {
            if (typeof openModal === 'function') {
                openModal(document.getElementById('contactModal'));
            }
        }, 250);
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
            closeMenu();
        }
    });

    // Автоматическое закрытие при переходе на десктопную ширину
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('is-open')) {
            closeMenu();
        }
    });
});