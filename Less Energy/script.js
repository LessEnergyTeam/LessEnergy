document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        'es': {
            'page_title': 'LessEnergy - Ahorra Energía',
            // HEADER
            'logo': 'LessEnergy',
            'nav_inicio': 'Inicio',
            'nav_funciona': 'Como Funciona',
            'nav_planes': 'Planes',
            'nav_nosotros': 'Nosotros',
            'nav_unete': 'Únete!',

            // HERO SECTION
            'hero_title_p1': 'Ahorra',
            'hero_title_p2': 'Energía',
            'hero_title_p3': 'Dinero',
            'hero_title_p4': 'Inteligencia Artificial',
            'hero_desc': 'Cuida tu consumo energético, detecta y corrige fallos en las facturas con nosotros.',
            'hero_btn': 'Quiero intentar',
            'stat_ahorro': 'Ahorro Promedio',
            'stat_monitoreo': 'Monitoreo',
            'stat_recs': 'Recomendaciones',
            'card_ahorro': 'Ahorro: S/120/mes',
            'chart_title': 'Consumo semanal',
            'card_consumo': 'Consumo: -25%',

            // FEATURES SECTION
            'feat1_title': 'Ahorra más',
            'feat1_desc': 'Te ayudamos a estabilizar tu consumo de energía para que puedas encontrar errores en tu factura de luz',
            'feat2_title': 'Inteligencia artificial',
            'feat2_desc': 'Brindamos recomendaciones personalizadas generadas por IA para que puedas reducir eficientemente tu gasto energético',
            'feat3_title': 'Fácil de usar',
            'feat3_desc': 'Usamos interfaces intuitivas, que se adaptan a todo tipo de edades y niveles tecnológicos.',

            // HOW IT WORKS SECTION
            'how_title': '¿Cómo Funciona LessEnergy?',
            'how_subtitle': 'En solo 3 pasos simples, estarás ahorrando energía y dinero en tu hogar',
            'step1_box': 'Entra a nuestra web y Regístrate',
            'step1_h3': 'Registro',
            'step1_p': 'Regístrate en LessEnergy creando tu cuenta y así podrás iniciar sesión y guardar tu progreso.',
            'step2_box': 'Conecta los Sensores IoT',
            'step2_h3': 'Configuración',
            'step2_p': 'Instala nuestros sensores IoT en tus electrodomésticos principales. Son fáciles de conectar y no requieren conocimientos técnicos.',
            'step3_box': 'Monitorea y Ahorra',
            'step3_h3': 'Optmización',
            'step3_p': 'Recibe recomendaciones personalizadas de nuestra IA y comienza a ver el ahorro en tu próxima factura eléctrica.',

            // PLANS SECTION
            'plans_title': 'Planes Diseñados Para Ti',
            'plans_subtitle': 'Elige el plan que mejor se adapte a tu hogar y comienza a ahorrar desde el primer día',
            'plan_badge': 'Más Popular',
            'plan1_title': 'Básico',
            'plan1_desc': 'Perfecto para apartamentos pequeños',
            'plan1_price': 'Gratis',
            'plan1_feat1': 'Hasta 5 sensores IoT',
            'plan1_feat2': 'Monitoreo básico 24/7',
            'plan1_feat3': 'Alertas por email',
            'plan1_feat4': 'Reportes mensuales',
            'plan1_feat5': 'Soporte por chat',
            'plan_btn': 'Comenzar Ahora',
            'plan2_title': 'Profesional',
            'plan2_desc': 'Ideal para casas familiares',
            'plan2_unit': 'mensual',
            'plan2_feat1': 'Hasta 15 sensores IoT',
            'plan2_feat2': 'Monitoreo avanzado 24/7',
            'plan2_feat3': 'IA con recomendaciones personalizadas',
            'plan2_feat4': 'Alertas push y email',
            'plan2_feat5': 'Reportes semanales y mensuales',
            'plan2_feat6': 'Análisis de facturas',
            'plan2_feat7': 'Soporte prioritario',
            'plan3_title': 'Empresarial',
            'plan3_desc': 'Para oficinas y comercios',
            'plan3_unit': 'mensual',
            'plan3_feat1': 'Sensores IoT ilimitados',
            'plan3_feat2': 'Dashboard empresarial',
            'plan3_feat3': 'IA avanzada con ML',
            'plan3_feat4': 'API personalizada',
            'plan3_feat5': 'Reportes personalizados',
            'plan3_feat6': 'Gestión multi-ubicación',
            'plan3_feat7': 'Soporte 24/7 dedicado',
            'legal1': 'Garantía de 30 días',
            'legal2': 'Sin tarjeta de crédito',
            'legal3': 'Cancela cuando quieras',

            // JOIN US SECTION
            'join_title': 'Únete a nosotros',
            'join_subtitle_p1': 'Crea una cuenta y comienza a',
            'join_subtitle_p2': 'ahorrar',
            'form_nombre': 'Nombre:',
            'form_apellido': 'Apellido:',
            'form_email': 'E-mail:',
            'form_tel': 'Teléfono:',
            'form_pass': 'Contraseña:',
            'form_conf_pass': 'Confirmar contraseña:',
            'form_btn': 'Unirme',
        },
        'en': {
            'page_title': 'LessEnergy - Save Energy',
            // HEADER
            'logo': 'LessEnergy',
            'nav_inicio': 'Home',
            'nav_funciona': 'How It Works',
            'nav_planes': 'Plans',
            'nav_nosotros': 'About Us',
            'nav_unete': 'Join!',

            // HERO SECTION
            'hero_title_p1': 'Save',
            'hero_title_p2': 'Energy',
            'hero_title_p3': 'Money',
            'hero_title_p4': 'Artificial Intelligence',
            'hero_desc': 'Monitor your energy usage, detect and correct billing errors with us.',
            'hero_btn': 'I want to try',
            'stat_ahorro': 'Average Savings',
            'stat_monitoreo': 'Monitoring',
            'stat_recs': 'Recommendations',
            'card_ahorro': 'Savings: S/120/month',
            'chart_title': 'Weekly Consumption',
            'card_consumo': 'Consumption: -25%',

            // FEATURES SECTION
            'feat1_title': 'Save More',
            'feat1_desc': 'We help stabilize your energy consumption so you can find errors in your electricity bill',
            'feat2_title': 'Artificial Intelligence',
            'feat2_desc': 'We provide personalized recommendations generated by AI to efficiently reduce your energy expenditure',
            'feat3_title': 'Easy to Use',
            'feat3_desc': 'We use intuitive interfaces that adapt to all ages and tech levels.',

            // HOW IT WORKS SECTION
            'how_title': 'How Does LessEnergy Work?',
            'how_subtitle': 'In just 3 simple steps, you will be saving energy and money at home',
            'step1_box': 'Visit our site and Register',
            'step1_h3': 'Registration',
            'step1_p': 'Register with LessEnergy by creating your account to log in and save your progress.',
            'step2_box': 'Connect IoT Sensors',
            'step2_h3': 'Configuration',
            'step2_p': 'Install our IoT sensors on your main appliances. They are easy to connect and require no technical knowledge.',
            'step3_box': 'Monitor and Save',
            'step3_h3': 'Optimization',
            'step3_p': 'Receive personalized recommendations from our AI and start seeing savings on your next electricity bill.',

            // PLANS SECTION
            'plans_title': 'Plans Designed For You',
            'plans_subtitle': 'Choose the plan that best suits your home and start saving from day one',
            'plan_badge': 'Most Popular',
            'plan1_title': 'Basic',
            'plan1_desc': 'Perfect for small apartments',
            'plan1_price': 'Free',
            'plan1_feat1': 'Up to 5 IoT sensors',
            'plan1_feat2': 'Basic 24/7 monitoring',
            'plan1_feat3': 'Email alerts',
            'plan1_feat4': 'Monthly reports',
            'plan1_feat5': 'Chat support',
            'plan_btn': 'Start Now',
            'plan2_title': 'Professional',
            'plan2_desc': 'Ideal for family homes',
            'plan2_unit': 'monthly',
            'plan2_feat1': 'Up to 15 IoT sensors',
            'plan2_feat2': 'Advanced 24/7 monitoring',
            'plan2_feat3': 'AI with personalized recommendations',
            'plan2_feat4': 'Push and email alerts',
            'plan2_feat5': 'Weekly and monthly reports',
            'plan2_feat6': 'Bill analysis',
            'plan2_feat7': 'Priority support',
            'plan3_title': 'Business',
            'plan3_desc': 'For offices and commerce',
            'plan3_unit': 'monthly',
            'plan3_feat1': 'Unlimited IoT sensors',
            'plan3_feat2': 'Business dashboard',
            'plan3_feat3': 'Advanced AI with ML',
            'plan3_feat4': 'Custom API',
            'plan3_feat5': 'Custom reports',
            'plan3_feat6': 'Multi-location management',
            'plan3_feat7': 'Dedicated 24/7 support',
            'legal1': '30-day Guarantee',
            'legal2': 'No Credit Card Required',
            'legal3': 'Cancel Anytime',

            // JOIN US SECTION
            'join_title': 'Join Us',
            'join_subtitle_p1': 'Create an account and start',
            'join_subtitle_p2': 'saving',
            'form_nombre': 'First Name:',
            'form_apellido': 'Last Name:',
            'form_email': 'E-mail:',
            'form_tel': 'Phone:',
            'form_pass': 'Password:',
            'form_conf_pass': 'Confirm Password:',
            'form_btn': 'Join',
        }
    };

    // Función principal para cambiar el idioma
    function setLanguage(lang) {
        // Itera sobre todos los elementos con la clave de traducción
        const elements = document.querySelectorAll('[data-i18n]');
        const dictionary = translations[lang];

        // Cambia el texto para cada elemento
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dictionary[key]) {
                el.textContent = dictionary[key];
            }
        });
        
        // Actualiza el título de la página
        const pageTitle = document.querySelector('title');
        if (pageTitle) {
            pageTitle.textContent = translations[lang].page_title;
        }

        // Actualiza el texto del selector de idioma en la barra
        const langToggle = document.getElementById('langToggle');
        if(langToggle) {
            // Reconstruye el texto manteniendo el icono de flecha
            langToggle.innerHTML = lang.toUpperCase() + ' ' + '<i class="fa-solid fa-chevron-down"></i>';
        }

        // Guarda la preferencia de idioma (opcional)
        localStorage.setItem('lang', lang); 
    }

    // Inicializar idioma al cargar (o usa la preferencia guardada)
    const initialLang = localStorage.getItem('lang') || 'es';
    setLanguage(initialLang);


    const chartData = [
        { day: 'L', value: 13.2 },
        { day: 'M', value: 5.5 },
        { day: 'M', value: 2.1 }, // El diseño tiene dos 'M'
        { day: 'J', value: 9.3 },
        { day: 'V', value: 4.9 },
        { day: 'S', value: 10.5 },
        { day: 'D', value: 15.6 }
    ];

    const chartContainer = document.querySelector('.bar-chart');
    const maxValue = Math.max(...chartData.map(item => item.value));
    const maxBarHeight = 180; 

    if (chartContainer) {
        chartContainer.innerHTML = '';

        chartData.forEach(item => {
            const barHeight = (item.value / maxValue) * maxBarHeight;
            const chartItem = document.createElement('div');
            chartItem.className = 'chart-item';

            // Insertamos la estructura HTML para cada barra
            chartItem.innerHTML = `
                <span class="day">${item.day}</span>
                <div class="bar" style="height: ${barHeight}px;"></div>
                <span class="value">${item.value}</span>
            `;

            chartContainer.appendChild(chartItem);
        });
    }

    // Función que maneja el toggle (reutilizable)
    function setupPasswordToggle(inputId, toggleId) {
        const passwordInput = document.getElementById(inputId);
        const toggleIcon = document.getElementById(toggleId);

        if (passwordInput && toggleIcon) {
            toggleIcon.addEventListener('click', function () {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);

                this.classList.toggle('fa-eye-slash');
                this.classList.toggle('fa-eye');
            });
        }
    }

    // Aplica la función a ambos campos de contraseña
    setupPasswordToggle('confirm-password', 'togglePassword');
    setupPasswordToggle('password', 'togglePasswordMain');


    const langToggle = document.getElementById('langToggle');
    const langOptions = document.getElementById('langOptions');

    if (langToggle && langOptions) {
        langToggle.addEventListener('click', function (e) {
            e.preventDefault(); 
            langOptions.classList.toggle('show');
            e.stopPropagation();
        });

        // Cerrar el menú si se hace clic fuera
        document.addEventListener('click', function (e) {
            if (!langToggle.contains(e.target) && !langOptions.contains(e.target)) {
                langOptions.classList.remove('show');
            }
        });
        
        // Manejar la selección de idioma (ENG/ESP)
        langOptions.querySelectorAll('a').forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const newLang = this.getAttribute('data-lang'); 
                
                // Llama a la función de traducción
                setLanguage(newLang);
                
                // Oculta el menú
                langOptions.classList.remove('show');
            });
        });
    }

});