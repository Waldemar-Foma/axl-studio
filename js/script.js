const contactModal = document.getElementById('contactModal');
const teamModal = document.getElementById('teamModal');
const galleryModal = document.getElementById('galleryModal');
const closeButtons = document.querySelectorAll('.close-modal');

// --- Открытие модалок ---
document.getElementById('contactNav')?.addEventListener('click', () => openModal(contactModal));
document.getElementById('joinModalBtn')?.addEventListener('click', () => openModal(contactModal));
document.getElementById('ctaButton')?.addEventListener('click', () => openModal(contactModal));

// --- Навигация (скролл) ---
document.getElementById('heroButton')?.addEventListener('click', () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
});

// --- Универсальные функции для модалок ---
function openModal(modal) {
    if (!modal) return;

    // Закрываем все остальные модалки, чтобы не было конфликтов
    document.querySelectorAll('.modal').forEach(m => {
        if (m !== modal) m.style.display = 'none';
    });

    modal.style.display = 'flex';
    modal.classList.add('show');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    // Фокус на модалку для доступности
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
}

function closeModal(modal) {
    if (!modal) return;
    modal.style.display = 'none';
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');

    // Если других открытых модалок нет — снимаем блокировку
    const anyOpen = Array.from(document.querySelectorAll('.modal'))
        .some(m => m.style.display === 'flex');

    if (!anyOpen) {
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
    }
}
// --- Закрытие модалок (кнопка X) ---
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        closeModal(contactModal);
        closeModal(teamModal);
        closeModal(galleryModal);
    });
});

// --- Закрытие модалок (клик вне окна) ---
window.addEventListener('click', (e) => {
    if (e.target === contactModal) closeModal(contactModal);
    if (e.target === teamModal) closeModal(teamModal);
    if (e.target === galleryModal) closeModal(galleryModal);
});

// --- Данные команды ---
const teamData = {
    maxim: {
        name: "Максим У.",
        role: "Тимлидер / Менеджер",
        bio: "Руководит всеми процессами во время работы над проектами. Организует коммуникацию с клиентами, распределяет задачи внутри команды. Имеет сертификацию PMP и опыт управления распределёнными командами.",
        link: "https://t.me/axel_Invincible",
        photo: "images/maxim.jpg"
    },
    vladislav: {
        name: "Владислав Ф.",
        role: "Разработчик / Дизайнер",
        bio: "Fullstack разработчик с упором на фронтенд и UI/UX дизайн. Создаёт эстетичные и отзывчивые интерфейсы. Владеет React, Vue, TailwindCSS. Также занимается дизайном в Figma.",
        link: "https://t.me/Waldemar_Foma",
        photo: "images/vladislav.jpg"
    },
    erik: {
        name: "Эрик А.",
        role: "Разработчик",
        bio: "Бэкенд-разработчик, специалист по высоконагруженным системам и базам данных. Предпочитает Python, Go и PostgreSQL. Отвечает за архитектуру серверной части и надёжность API.",
        link: "https://t.me/erik_axl",
        photo: "images/erik.jpg"
    }
};

// --- Открытие модалки члена команды ---
function openMemberModal(memberId) {
    const data = teamData[memberId];
    if (!data) return;

    document.getElementById("teamModalName").textContent = data.name;
    document.getElementById("teamModalRoleDisplay").textContent = data.role;
    document.getElementById("teamModalBio").textContent = data.bio;
    document.getElementById("teamModalLink").href = data.link;

    const modalPhoto = document.getElementById("modalMemberPhoto");
    modalPhoto.src = data.photo;
    modalPhoto.alt = data.name;

    modalPhoto.onerror = function() {
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="45" fill="%23e8e8ed"/%3E%3Ctext x="50" y="67" font-size="40" text-anchor="middle" fill="%23999"%3E📷%3C/text%3E%3C/svg%3E';
    };

    openModal(document.getElementById("teamModal"));
}

// --- Обработчики для кнопок "Узнать подробнее" ---
document.querySelectorAll(".member-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const memberId = btn.getAttribute("data-member");
        if (memberId && teamData[memberId]) {
            openMemberModal(memberId);
        }
    });
});

// --- Обработчики для кликов по аватаркам ---
document.querySelectorAll(".member").forEach(card => {
    const silhouette = card.querySelector(".silhouette");
    if (silhouette) {
        silhouette.addEventListener("click", () => {
            const memberId = card.getAttribute("data-member");
            if (memberId && teamData[memberId]) openMemberModal(memberId);
        });
    }
});

// ============= GALLERY =============
const galleryImages = ['images/team.jpg', 'images/team_1.jpg', 'images/team_2.jpg', 'images/team_3.jpg'];
let currentGalleryIndex = 0;
const galleryImage = document.getElementById('galleryImage');
const galleryCurrent = document.getElementById('galleryCurrent');
const galleryTotal = document.getElementById('galleryTotal');
const galleryThumbnails = document.getElementById('galleryThumbnails');

if (galleryTotal) galleryTotal.textContent = galleryImages.length;

function updateGallery() {
    if (galleryImage) galleryImage.src = galleryImages[currentGalleryIndex];
    if (galleryCurrent) galleryCurrent.textContent = currentGalleryIndex + 1;
    document.querySelectorAll('.gallery-thumb').forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === currentGalleryIndex);
    });
}

galleryImages.forEach((img, idx) => {
    const thumb = document.createElement('div');
    thumb.className = 'thumbnail gallery-thumb';
    thumb.style.width = '60px';
    thumb.style.height = '60px';
    thumb.style.cursor = 'pointer';
    thumb.style.borderRadius = '12px';
    thumb.style.overflow = 'hidden';
    thumb.innerHTML = `<img src="${img}" style="width:100%;height:100%;object-fit:cover;">`;
    thumb.addEventListener('click', () => {
        currentGalleryIndex = idx;
        updateGallery();
    });
    galleryThumbnails?.appendChild(thumb);
});

document.getElementById('galleryPrev')?.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
});

document.getElementById('galleryNext')?.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    updateGallery();
});

document.querySelectorAll('.thumbnail[data-img]').forEach(thumb => {
    thumb.addEventListener('click', () => {
        const imgSrc = thumb.dataset.img;
        if (imgSrc) {
            document.getElementById('mainTeamPhoto')?.setAttribute('src', imgSrc);
        }
    });
});

// --- Навигация по якорям (data-nav) ---
document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.nav;
        if (target === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
        else if (target === 'about') document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        else if (target === 'values') document.getElementById('values')?.scrollIntoView({ behavior: 'smooth' });
        else if (target === 'projects') document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        else if (target === 'team') document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
    });
});

// --- Анимация смены главного фото в About ---
document.addEventListener('DOMContentLoaded', function() {
    const mainVector = document.getElementById('mainVectorOverlay');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainPhoto = document.getElementById('mainTeamPhoto');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const imgSrc = this.dataset.img;
            if (mainPhoto && imgSrc) {
                mainPhoto.src = imgSrc;
            }
            if (mainVector) {
                mainVector.style.opacity = '0';
                mainVector.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    mainVector.style.opacity = '1';
                    mainVector.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });
});

// ============================================================
//   АЙСБЕРГ + ТЕКСТ СЛЕВА
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const iceSections = document.querySelectorAll('.ice-section');
    const infoBranches = document.querySelectorAll('.info-branch');
    const dynamicItems = document.querySelectorAll('.dynamic-item');
    const legendBtns = document.querySelectorAll('.legend-btn');

    const levelMap = {
        'innovation': { class: 'highlight-innovation' },
        'reliability': { class: 'highlight-reliability' },
        'passion': { class: 'highlight-passion' }
    };

    function activateLevel(level) {
        const data = levelMap[level];
        if (!data) return;

        iceSections.forEach(section => {
            section.classList.toggle('active-level', section.dataset.section === level);
        });

        infoBranches.forEach(branch => {
            branch.classList.toggle('active-level', branch.dataset.section === level);
        });

        dynamicItems.forEach(item => {
            const isActive = item.dataset.level === level;
            item.classList.toggle('active', isActive);
            item.classList.toggle(data.class, isActive);
        });

        legendBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.level === level);
        });
    }

    function resetLevels() {
        iceSections.forEach(section => section.classList.remove('active-level'));
        infoBranches.forEach(branch => branch.classList.remove('active-level'));
        dynamicItems.forEach(item => {
            item.classList.remove('active');
            Object.values(levelMap).forEach(val => item.classList.remove(val.class));
        });
        legendBtns.forEach(btn => btn.classList.remove('active'));
    }

    [...iceSections, ...infoBranches].forEach(element => {
        element.addEventListener('mouseenter', function() {
            const level = this.dataset.section;
            if (level && levelMap[level]) activateLevel(level);
        });
    });

    legendBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const level = this.dataset.level;
            if (level && levelMap[level]) {
                resetLevels();
                activateLevel(level);
            }
        });
    });

    const icebergWrapper = document.querySelector('.iceberg-visual');
    if (icebergWrapper) {
        icebergWrapper.addEventListener('mouseleave', function(e) {
            const related = e.relatedTarget;
            if (related && (related.closest('.iceberg-visual') || related.closest('.info-branch'))) return;
            iceSections.forEach(section => section.classList.remove('active-level'));
            infoBranches.forEach(branch => branch.classList.remove('active-level'));
        });
    }

    dynamicItems.forEach(item => {
        item.addEventListener('click', function() {
            const level = this.dataset.level;
            if (!level) return;
            resetLevels();
            activateLevel(level);
        });
    });

    setTimeout(() => activateLevel('innovation'), 300);
});

// ============================================================
//   CTA — анимация переключения слов
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const wordEl = document.getElementById('wordSwap');
    if (!wordEl) return;

    const wordsByLang = {
        ru: ['бота', 'сайта', 'лендинга', 'магазина', 'сервиса'],
        en: ['a bot', 'a website', 'a landing page', 'an online store', 'a service']
    };

    // Уважаем системные настройки — не мучаем пользователя анимацией
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let currentLang = localStorage.getItem('axlLang') || 'ru';
    let counter = 0;
    let intervalId = null;

    // Регистрируем view-transition-name для Chrome
    if ('startViewTransition' in document) {
        wordEl.style.viewTransitionName = 'word-swap';
    }

    function setWord(newWord) {
        if ('startViewTransition' in document && !wordEl.classList.contains('is-animating-out')) {
            document.startViewTransition(() => {
                wordEl.textContent = newWord;
            });
            return;
        }

        wordEl.classList.add('is-animating-out');
        setTimeout(() => {
            wordEl.textContent = newWord;
            wordEl.classList.remove('is-animating-out');
            wordEl.classList.add('is-animating-in');
            setTimeout(() => {
                wordEl.classList.remove('is-animating-in');
            }, 400);
        }, 400);
    }

    function tick() {
        const words = wordsByLang[currentLang] || wordsByLang.ru;
        counter = (counter + 1) % words.length;
        setWord(words[counter]);
    }

    function startTimer() {
        if (intervalId !== null) return;
        if (prefersReducedMotion) return;      // не крутим вообще
        if (document.hidden) return;           // вкладка не активна
        intervalId = setInterval(tick, 1800);
    }

    function stopTimer() {
        if (intervalId === null) return;
        clearInterval(intervalId);
        intervalId = null;
    }

    // ---- Наблюдаем за видимостью блока CTA ----
    // Наблюдаем за родителем (карточка), т.к. сам #wordSwap — крошечный span
    const ctaTarget = wordEl.closest('.cta-dark-card') || wordEl;

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startTimer();
                } else {
                    stopTimer();
                }
            });
        }, {
            // Таймер запускается, когда хотя бы 20% блока видно
            threshold: 0.2,
            // Небольшой запас, чтобы слово не «прыгало» при скролле
            rootMargin: '0px 0px -10% 0px'
        });

        io.observe(ctaTarget);
    } else {
        // Fallback для очень старых браузеров — просто запускаем
        startTimer();
    }

    // ---- Пауза при уходе со вкладки ----
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopTimer();
        } else {
            // Возобновляем только если блок ещё виден — это проверит observer
            // Но на случай если IO не сработал, аккуратно проверим вручную:
            const rect = ctaTarget.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) startTimer();
        }
    });

    // ---- Уважаем смену настроек на лету (Safari 14+) ----
    if (typeof prefersReducedMotion === 'boolean') {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        mq.addEventListener?.('change', (e) => {
            if (e.matches) stopTimer();
            // Запуск всё равно произойдёт через IntersectionObserver, если блок виден
        });
    }

    // ---- Следим за сменой языка ----
    document.addEventListener('axlLangChanged', (e) => {
        currentLang = e.detail.lang || 'ru';
        const words = wordsByLang[currentLang] || wordsByLang.ru;
        counter = 0;
        wordEl.textContent = words[0];
    });

    // Начальное значение
    const initialWords = wordsByLang[currentLang] || wordsByLang.ru;
    wordEl.textContent = initialWords[0];

    // ---- Чистим таймер при выгрузке страницы (browser bfcache) ----
    window.addEventListener('pagehide', stopTimer);
});

// ============================================================
//   ЗАКРЫТИЕ МОДАЛОК ПО ESC
// ============================================================
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    const openModals = document.querySelectorAll('.modal.show, .modal[style*="display: flex"]');
    openModals.forEach(m => {
        m.style.display = 'none';
        m.classList.remove('show');
    });

    if (openModals.length) {
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
    }
});

// ============================================================
//   PROJECTS FILTER
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.proj');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Обновляем активную кнопку
            filterButtons.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            // Фильтруем карточки
            projectCards.forEach(card => {
                const category = card.dataset.category;
                const shouldShow = filter === 'all' || category === filter;

                if (shouldShow) {
                    card.classList.remove('is-hidden');
                    // Перезапускаем анимацию появления
                    card.classList.remove('is-appearing');
                    void card.offsetWidth; // reflow
                    card.classList.add('is-appearing');
                } else {
                    card.classList.add('is-hidden');
                }
            });
        });
    });

    // Кнопка CTA под проектами — открывает контактную модалку
    document.getElementById('projectsCtaBtn')?.addEventListener('click', () => {
        if (typeof openModal === 'function') {
            openModal(document.getElementById('contactModal'));
        }
    });
});