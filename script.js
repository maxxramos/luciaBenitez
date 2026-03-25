/* ============================================================
   LUCÍA BENÍTEZ PSICOLOGÍA — script.js
   ============================================================ */

/* ======================== SERVICE DATA ======================== */
const serviceData = {
    ansiedad: {
        icon: '<i class="fa-solid fa-wind"></i>',
        title: 'Ansiedad',
        desc: `La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés o amenaza, pero cuando se vuelve persistente puede interferir significativamente en la vida cotidiana de niños y adolescentes.

<strong>¿Cómo se manifiesta?</strong>
• Preocupación excesiva y dificultad para relajarse
• Síntomas físicos como dolores de estómago, tensión muscular o dificultad para dormir
• Evitación de situaciones sociales o escolares
• Irritabilidad y dificultad para concentrarse
• Miedos intensos o ataques de pánico

<strong>¿Cómo trabajamos juntos?</strong>
A través de un enfoque personalizado, ayudamos a identificar los desencadenantes de la ansiedad, desarrollar herramientas de regulación emocional y construir recursos internos que permitan afrontar los desafíos con mayor seguridad y calma.

El acompañamiento incluye orientación a las familias para generar un entorno de apoyo y contención.`
    },
    atencionales: {
        icon: '<i class="fa-solid fa-bullseye"></i>',
        title: 'Dificultades Atencionales',
        desc: `Las dificultades atencionales —ya sean asociadas o no a un diagnóstico de TDAH— pueden impactar en el rendimiento escolar, las relaciones interpersonales y la autoestima de niños y adolescentes.

<strong>¿Qué evaluamos e intervenimos?</strong>
• Problemas de concentración y distracción frecuente
• Dificultades para organizar tareas y completar actividades
• Impulsividad asociada a la falta de atención
• Bajo rendimiento académico sin causa aparente
• Evaluaciones psicodiagnósticas para identificar el perfil atencional

<strong>Abordaje integral</strong>
Trabajamos en sesión individual con el niño o adolescente, y en coordinación con la familia y el equipo educativo cuando es necesario, para diseñar estrategias adaptadas a cada perfil.`
    },
    depresion: {
        icon: '<i class="fa-solid fa-cloud-rain"></i>',
        title: 'Depresión',
        desc: `La depresión en infancias y adolescencias puede presentarse de manera diferente a la esperada: no siempre se manifiesta con tristeza visible, sino con irritabilidad, aislamiento, pérdida de interés en actividades antes disfrutadas o cambios en el sueño y apetito.

<strong>Señales a tener en cuenta</strong>
• Aislamiento social y pérdida de vínculos
• Desmotivación persistente y bajo rendimiento
• Cambios en los hábitos de sueño o alimentación
• Sentimientos de inutilidad o culpa excesiva
• En casos graves, pensamientos negativos recurrentes

<strong>Nuestro enfoque</strong>
Ofrecemos un espacio seguro, empático y sin juicios, donde cada niño o adolescente puede expresarse libremente. A través del acompañamiento terapéutico trabajamos para restablecer el bienestar emocional y reconectar con el placer de vivir.`
    },
    angustia: {
        icon: '<i class="fa-solid fa-heart-pulse"></i>',
        title: 'Angustia',
        desc: `La angustia es una experiencia emocional que puede manifestarse como una sensación difusa de malestar, tensión interna o un estado de alarma sin causa identificable, y que afecta profundamente la calidad de vida de quienes la padecen.

<strong>¿Cómo se presenta en niños y adolescentes?</strong>
• Sensación de opresión en el pecho o dificultad para respirar
• Estado de alerta constante o hipervigilancia
• Llanto sin causa aparente o irritabilidad
• Dificultad para separarse de figuras de apego
• Perturbaciones del sueño

<strong>¿Cómo trabajamos?</strong>
Identificamos los factores que generan o sostienen la angustia —internos y ambientales— y construimos juntos estrategias para elaborarla, utilizando recursos terapéuticos adaptados a la edad y la particularidad de cada caso.`
    },
    duelo: {
        icon: '<i class="fa-solid fa-hand-holding-heart"></i>',
        title: 'Duelo',
        desc: `El duelo es un proceso natural ante cualquier pérdida significativa: la muerte de un ser querido, la separación de los padres, el cambio de escuela, la pérdida de una amistad o el alejamiento de un familiar.

<strong>El duelo en niños y adolescentes</strong>
Los más jóvenes viven el duelo de manera diferente a los adultos. Pueden expresarlo a través de cambios en la conducta, regresiones, problemas escolares o síntomas físicos, más que con llanto o tristeza explícita.

<strong>¿Cuándo buscar ayuda?</strong>
• Cuando el duelo se prolonga más allá de lo esperado
• Cuando interfiere en el funcionamiento cotidiano
• Cuando aparecen síntomas de ansiedad o depresión
• Cuando el niño o adolescente cierra el tema totalmente

Acompañamos el proceso con cuidado, respeto y al ritmo de cada persona, orientando también a la familia en cómo acompañar desde casa.`
    },
    bullying: {
        icon: '<i class="fa-solid fa-shield-halved"></i>',
        title: 'Bullying',
        desc: `El bullying —ya sea presencial o en formato digital (ciberbullying)— es una forma de violencia repetida que puede generar consecuencias muy serias en la salud mental de quienes lo padecen.

<strong>¿Qué es el bullying?</strong>
• Maltrato físico, verbal, social o psicológico entre pares
• Se caracteriza por la repetición y el desequilibrio de poder
• Puede ocurrir en la escuela, en grupos de amigos o en plataformas digitales

<strong>Nuestra intervención</strong>
Trabajamos con la víctima en el proceso de recuperación emocional, la reconstrucción de su autoestima y el fortalecimiento de habilidades de autoprotección.

También orientamos a las familias sobre cómo acompañar en casa y en la interfaz con la institución educativa, promoviendo entornos más seguros y saludables.`
    },
    autoestima: {
        icon: '<i class="fa-solid fa-seedling"></i>',
        title: 'Baja Autoestima',
        desc: `La autoestima es la base de la salud emocional. Cuando un niño o adolescente no confía en sus capacidades, se siente inferior a los demás o vive en constante autocrítica, esto impacta en todas las áreas de su vida.

<strong>Señales de baja autoestima</strong>
• "No puedo", "soy el peor", "nadie me quiere"
• Dificultad para defender su punto de vista
• Evitación de desafíos por miedo al fracaso
• Sensibilidad extrema a la crítica
• Necesidad excesiva de aprobación externa

<strong>¿Cómo trabajamos?</strong>
A través de un enfoque positivo y centrado en las fortalezas, ayudamos a construir una imagen más realista y valorada de uno mismo. El trabajo incluye el reconocimiento de logros, el manejo del error y el desarrollo de mayor seguridad personal.`
    },
    desregulacion: {
        icon: '<i class="fa-solid fa-water"></i>',
        title: 'Desregulación Emocional',
        desc: `La desregulación emocional ocurre cuando una persona tiene dificultades para gestionar la intensidad o duración de sus emociones, lo que puede llevar a reacciones muy intensas ante situaciones cotidianas.

<strong>¿Cómo se manifiesta?</strong>
• Explosiones emocionales desproporcionadas
• Dificultad para calmarse después de un episodio
• Cambios de humor abruptos
• Sensación de que "todo es muy intenso"
• Conductas de evitación o escape ante situaciones difíciles

<strong>Estrategias terapéuticas</strong>
Trabajamos con técnicas de regulación emocional basadas en la neurociencia del desarrollo: identificación de emociones, tolerancia a la frustración, mindfulness y habilidades para el autocuidado.

El objetivo es que cada niño o adolescente aprenda a navegar sus emociones de manera más eficiente y saludable.`
    },
    conducta: {
        icon: '<i class="fa-solid fa-arrows-to-circle"></i>',
        title: 'Dificultades en la Conducta',
        desc: `Las dificultades conductuales en niños y adolescentes —como la oposición, los berrinches frecuentes o las conductas disruptivas— generalmente comunican una necesidad no satisfecha o una dificultad emocional subyacente.

<strong>¿Qué abordamos?</strong>
• Comportamientos oposicionistas o desafiantes
• Agresividad física o verbal
• Dificultad para respetar normas y límites
• Conductas disruptivas en el hogar o en el aula
• Mentiras, hurtos u otras conductas problemáticas

<strong>Abordaje integral</strong>
El trabajo terapéutico incluye al niño o adolescente y orientación parental, ya que los cambios conductuales requieren de la participación activa de los adultos de referencia.

Buscamos comprender el "por qué" detrás del comportamiento para generar cambios sostenibles y genuinos.`
    },
    sociales: {
        icon: '<i class="fa-solid fa-people-group"></i>',
        title: 'Habilidades Sociales',
        desc: `Las habilidades sociales son competencias fundamentales que permiten relacionarse, comunicarse y vincularse con otros de manera efectiva y satisfactoria.

<strong>¿Cuándo se interviene?</strong>
• Dificultad para hacer o mantener amigos
• Timidez extrema o retraimiento social
• Problemas para resolver conflictos sin agresión
• Dificultad en el juego cooperativo o en grupos
• Conductas evitativas en situaciones sociales

<strong>¿Cómo trabajamos?</strong>
A través de estrategias lúdicas y dinámicas adaptadas a cada edad, desarrollamos habilidades como la escucha activa, la expresión asertiva, el manejo de conflictos y la empatía.

El objetivo es que cada niño o adolescente se sienta más seguro y cómodo en sus vínculos sociales.`
    },
    impulsividad: {
        icon: '<i class="fa-solid fa-bolt"></i>',
        title: 'Impulsividad',
        desc: `La impulsividad es la tendencia a actuar sin reflexionar sobre las consecuencias, lo que puede generar problemas en las relaciones, en el ámbito escolar y en la convivencia familiar.

<strong>¿Cómo se manifiesta?</strong>
• Interrumpe conversaciones o no espera su turno
• Reacciona de forma intensa ante la frustración
• Dificultad para planificar o pensar antes de actuar
• Toma de decisiones apresuradas
• Accidentes frecuentes por no evaluar el riesgo

<strong>Estrategias de intervención</strong>
Trabajamos el autocontrol a través de técnicas cognitivo-conductuales, el desarrollo de la función ejecutiva y el entrenamiento en la pausa antes de actuar.

Con orientación a la familia, generamos estrategias de acompañamiento consistentes y efectivas para el hogar y la escuela.`
    },
    mindfulness: {
        icon: '<i class="fa-solid fa-spa"></i>',
        title: 'Mindfulness',
        desc: `El mindfulness —o atención plena— es una práctica basada en la conciencia del momento presente, adaptada para niños y adolescentes de manera lúdica y accesible.

<strong>¿Para qué sirve el mindfulness?</strong>
• Reducción del estrés y la ansiedad
• Mejora de la concentración y el rendimiento académico
• Mayor conciencia emocional
• Desarrollo de la calma y la paciencia
• Mejora en la calidad del sueño

<strong>¿Cómo lo trabajamos?</strong>
A través de ejercicios de respiración, meditación guiada, movimiento consciente y prácticas sensoriales adaptadas a la edad, enseñamos a cada niño o adolescente a habitar el presente con mayor calma y claridad.

El mindfulness puede incorporarse al trabajo terapéutico individual o usarse como herramienta preventiva de bienestar.`
    }
};

/* ======================== DOM REFERENCES ======================== */
const hamburger    = document.getElementById('hamburger');
const navLinks     = document.getElementById('navLinks');
const navbar       = document.getElementById('navbar');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalCTA     = document.getElementById('modalCTA');
const modalIcon    = document.getElementById('modalIcon');
const modalTitle   = document.getElementById('modalTitle');
const modalDesc    = document.getElementById('modalDesc');

/* ======================== HAMBURGER MENU ======================== */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

/* ======================== NAVBAR ON SCROLL ======================== */
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ======================== ACTIVE NAV LINK ON SCROLL ======================== */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top    = section.offsetTop;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
            navAnchors.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
            });
        }
    });
}, { passive: true });

/* ======================== SCROLL REVEAL ======================== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ======================== SERVICE MODALS ======================== */
function openModal(key) {
    const data = serviceData[key];
    if (!data) return;

    modalIcon.innerHTML    = data.icon;
    modalTitle.textContent = data.title;
    modalDesc.innerHTML    = data.desc.replace(/\n/g, '<br>');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.service-card[data-service]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.service));
});

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

/* ======================== SMOOTH SCROLL (offset navbar) ======================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const top = target.offsetTop - 72;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});
