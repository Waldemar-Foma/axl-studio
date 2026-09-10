// ============================================================
//   ЯЗЫКОВОЙ ПЕРЕКЛЮЧАТЕЛЬ (RU / EN)
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        ru: {
            'nav.home': 'Главная',
            'nav.about': 'О нас',
            'nav.values': 'Подход',
            'nav.projects': 'Проекты',
            'nav.team': 'Команда',
            'nav.contact': 'Связаться',

            'hero.title': 'Быстро.<br>Качественно.<br>Доступно.',
            'hero.desc': 'Инновационные решения для цифрового мира',
            'hero.btn': 'Начни работать с нами',

            'about.badge': 'О команде',
            'about.title': 'Мы создаём цифровые продукты',
            'about.text': 'Создаем сайты, лендинги и сложные программы под ключ. Закрываем полный цикл разработки: от дизайна и кода до менеджмента проекта. Работаем честно, быстро и всегда на связи. Ищете надежную команду? Вы по адресу.',
            'about.stat1': 'Лет опыта',
            'about.stat2': 'Проектов',
            'about.stat3': 'Довольных клиентов',

            'values.badge': 'Наш подход',
            'values.title': 'Айсберг по AXL',
            'values.card1.title': 'Инновации',
            'values.card1.text': 'Современные технологии, быстрый фронтенд и продуманный UX. То, что клиент видит на релизе.',
            'values.card2.title': 'Надежность',
            'values.card2.text': 'Базы данных, API, серверная логика — всё работает как часы. Внутренние процессы и архитектура.',
            'values.card3.title': 'Страсть',
            'values.card3.text': 'Наш фундамент и любовь к делу. Без неё невозможны ни инновации, ни надёжность.',
            'values.branch1': 'Видимая часть',
            'values.branch2': 'Внутренние процессы',
            'values.branch3': 'Фундамент',

            'projects.badge': 'Наши проекты',
            'projects.title': 'Кейсы, которыми мы гордимся',
            'projects.desc': 'Реализованные решения для бизнеса и стартапов',

            'projects.filter.all': 'Все',
            'projects.filter.web': 'Сайты',
            'projects.filter.bot': 'Боты',
            'projects.filter.app': 'Приложения',

            'projects.status.live': 'Live',
            'projects.status.wip': 'В работе',
            'projects.view': 'Смотреть',

            'projects.p1.title': 'AI-бот для поддержки',
            'projects.p1.desc': 'Умный Telegram-бот для клиентской поддержки с интеграцией GPT и базой знаний.',

            'projects.p2.title': 'Интернет-магазин',
            'projects.p2.desc': 'Магазин с каталогом, корзиной, оплатой и админкой. Быстрая загрузка и SEO-оптимизация.',

            'projects.p3.title': 'Мобильное приложение',
            'projects.p3.desc': 'Кроссплатформенное приложение для доставки с real-time трекингом заказов.',

            'projects.p4.title': 'SaaS-дашборд',
            'projects.p4.desc': 'Панель аналитики с графиками, экспортом данных и ролевой моделью доступа.',

            'projects.cta.text': 'Хотите увидеть больше кейсов или обсудить свой проект?',
            'projects.cta.btn': 'Обсудить проект',

            'team.badge': 'Команда',
            'team.title': 'Наши специалисты',
            'team.desc': 'Нас трое. Конкурентов — сотни. Качество — топ.',
            'team.m1.name': 'Максим У.',
            'team.m1.role': 'Тимлидер / Менеджер',
            'team.m2.name': 'Владислав Ф.',
            'team.m2.role': 'Разработчик / Дизайнер',
            'team.m3.name': 'Эрик А.',
            'team.m3.role': 'Разработчик',
            'team.more': 'Подробнее',

            'join.badge': 'Присоединяйся',
            'join.title': 'Стань частью команды',
            'join.text': 'Ты талантливый разработчик или дизайнер? Готов к интересным проектам и профессиональному росту? Тебе к нам!',
            'join.feature1': 'Интересные проекты',
            'join.feature2': 'Проф. развитие',
            'join.send': 'Отправить заявку',
            'join.form': 'Заполнить форму',

            'cta.pre': 'Поможем вашему бизнесу быстро вырасти',
            'cta.with': 'с помощью',
            'cta.post': 'под ключ',
            'cta.subtitle': 'Команда AXL Studio — быстрые, честные и всегда на связи.',
            'cta.btn': 'Оставить заявку',

            'modal.contact.title': 'Связаться с нами',
            'modal.contact.subtitle': 'Выберите удобный способ',
            'modal.member.link': 'Личная страница',

            'footer.desc': 'Мы создаём цифровые продукты под ключ: от идеи и дизайна до запуска и поддержки. Работаем быстро, честно и с фокусом на результат.',
            'footer.product': 'Product',
            'footer.resources': 'Resources',
            'footer.company': 'Company',
            'footer.docs': 'Документация',
            'footer.blog': 'Блог',
            'footer.support': 'Поддержка',
            'footer.faq': 'FAQ',
            'footer.career': 'Карьера',
            'footer.partners': 'Партнёрам',
            'footer.email': 'Email',
            'footer.copyright': '© 2026 AXL Studio. Все права защищены.',
            'footer.privacy': 'Политика конфиденциальности',
            'footer.terms': 'Условия использования',
            'footer.cookie': 'Cookie settings',
        },

        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.values': 'Approach',
            'nav.projects': 'Projects',
            'nav.team': 'Team',
            'nav.contact': 'Contact us',

            'hero.title': 'Fast.<br>Reliable.<br>Affordable.',
            'hero.desc': 'Innovative solutions for the digital world',
            'hero.btn': 'Start working with us',

            'about.badge': 'About the team',
            'about.title': 'We craft digital products',
            'about.text': 'We build websites, landing pages and complex software end-to-end. Full development cycle: from design and code to project management. We work honestly, fast, and always stay in touch. Looking for a reliable team? You’re in the right place.',
            'about.stat1': 'Years of experience',
            'about.stat2': 'Projects',
            'about.stat3': 'Happy clients',

            'values.badge': 'Our approach',
            'values.title': 'The AXL iceberg',
            'values.card1.title': 'Innovation',
            'values.card1.text': 'Modern tech, fast frontend, thoughtful UX. What the client sees at release.',
            'values.card2.title': 'Reliability',
            'values.card2.text': 'Databases, APIs, server logic — everything runs like clockwork. Internal processes and architecture.',
            'values.card3.title': 'Passion',
            'values.card3.text': 'Our foundation and love for what we do. Without it, neither innovation nor reliability is possible.',
            'values.branch1': 'Visible part',
            'values.branch2': 'Internal processes',
            'values.branch3': 'Foundation',

            'projects.badge': 'Our projects',
            'projects.title': 'Work we’re proud of',
            'projects.desc': 'Delivered solutions for businesses and startups',


            'projects.filter.all': 'All',
            'projects.filter.web': 'Websites',
            'projects.filter.bot': 'Bots',
            'projects.filter.app': 'Apps',

            'projects.status.live': 'Live',
            'projects.status.wip': 'In progress',
            'projects.view': 'View',

            'projects.p1.title': 'AI Support Bot',
            'projects.p1.desc': 'Smart Telegram bot for customer support with GPT integration and knowledge base.',

            'projects.p2.title': 'Online Store',
            'projects.p2.desc': 'E-commerce store with catalog, cart, checkout, and admin panel. Fast loading and SEO.',

            'projects.p3.title': 'Mobile App',
            'projects.p3.desc': 'Cross-platform delivery app with real-time order tracking.',

            'projects.p4.title': 'SaaS Dashboard',
            'projects.p4.desc': 'Analytics dashboard with charts, data export, and role-based access.',

            'projects.cta.text': 'Want to see more cases or discuss your project?',
            'projects.cta.btn': 'Discuss the project',
            
            'team.badge': 'Team',
            'team.title': 'Our specialists',
            'team.desc': 'Three of us. Hundreds of competitors. Top quality.',
            'team.m1.name': 'Maxim U.',
            'team.m1.role': 'Team lead / Manager',
            'team.m2.name': 'Vladislav F.',
            'team.m2.role': 'Developer / Designer',
            'team.m3.name': 'Erik A.',
            'team.m3.role': 'Developer',
            'team.more': 'Learn more',

            'join.badge': 'Join us',
            'join.title': 'Become part of the team',
            'join.text': 'Talented developer or designer? Ready for interesting projects and professional growth? We want you!',
            'join.feature1': 'Interesting projects',
            'join.feature2': 'Career growth',
            'join.send': 'Send application',
            'join.form': 'Fill the form',

            'cta.pre': 'We help your business grow fast',
            'cta.with': 'with',
            'cta.post': 'end-to-end',
            'cta.subtitle': 'The AXL Studio team — fast, honest, and always in touch.',
            'cta.btn': 'Get in touch',

            'modal.contact.title': 'Contact us',
            'modal.contact.subtitle': 'Choose a convenient way',
            'modal.member.link': 'Personal page',

            'footer.desc': 'We create digital products end-to-end: from idea and design to launch and support. Fast, honest, and result-focused.',
            'footer.product': 'Product',
            'footer.resources': 'Resources',
            'footer.company': 'Company',
            'footer.docs': 'Documentation',
            'footer.blog': 'Blog',
            'footer.support': 'Support',
            'footer.faq': 'FAQ',
            'footer.career': 'Careers',
            'footer.partners': 'Partners',
            'footer.email': 'Email',
            'footer.copyright': '© 2026 AXL Studio. All rights reserved.',
            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms of Service',
            'footer.cookie': 'Cookie settings',
        }
    };

    const LANG_KEY = 'axlLang';
    const toggle = document.getElementById('langToggle');
    const currentEl = toggle?.querySelector('.lang-toggle__current');
    const otherEl = toggle?.querySelector('.lang-toggle__other');

    function applyLang(lang) {
        const dict = translations[lang] || translations.ru;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = dict[key];
            if (value == null) return;

            if (value.includes('<br>')) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        // data-hover для snip1226
        document.querySelectorAll('.snip1226 a[data-i18n]').forEach(a => {
            const key = a.getAttribute('data-i18n');
            const value = dict[key];
            if (value) a.setAttribute('data-hover', value);
        });

        if (currentEl && otherEl) {
            currentEl.textContent = lang.toUpperCase();
            otherEl.textContent = lang === 'ru' ? 'EN' : 'RU';
        }

        document.documentElement.lang = lang;
        localStorage.setItem(LANG_KEY, lang);
    }
    document.dispatchEvent(new CustomEvent('axlLangChanged', { detail: { lang } }));

    const savedLang = localStorage.getItem(LANG_KEY) || 'ru';
    applyLang(savedLang);

    toggle?.addEventListener('click', () => {
        const current = localStorage.getItem(LANG_KEY) || 'ru';
        applyLang(current === 'ru' ? 'en' : 'ru');
    });
});

