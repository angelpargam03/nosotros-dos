// ==========================================
// CONFIGURACIÓN DE NUESTRA HISTORIA
// Edita aquí las imágenes y textos de tus hitos de forma fácil
// ==========================================
const hitosHistoria = [
    {
        id: 1,
        titulo: "Aquel primer día",
        fecha: "Aquel primer día",
        imagenMiniatura: "img/nosotrosJuntos.jpg",
        imagenDetalle: "img/primeraFoto.JPEG",
        textoCorto: "Ese día que lo cambió todo, porque gracias a él ahora tengo a la mejor persona del mundo mundial a mi lado.",
        textoLargo: "Sé que tu primera reacción al ver esta foto será querer matarme, pero tranquila que tiene una explicación. Esta foto es la primera que tengo de ti, y aunque no sea la mejor que tenga, viendo esta foto me vuelven a dar ganas de ir hacia ese Jueves Santo que cambió nuestras vidas para siempre. Ese día, casi sin darnos cuenta, sabíamos que algo muy bonito iba a empezar pero jamás iba a tener final.",
        videoUrl: ""
    },
    {
        id: 2,
        titulo: "El primer mensaje",
        fecha: "El primer mensaje",
        imagenMiniatura: "img/primerMensaje.JPEG",
        imagenDetalle: "img/primerMensaje.JPEG",
        textoCorto: "Ese primer mensaje tan mítico, gracias a él estamos juntos ahora (que bien hice escribiéndote).",
        textoLargo: "Y cómo olvidar ese primer mensaje tan mítico, ese pedazo de holaa que lo empezó todo. Hoy lo miro y me hace gracia lo fácil que fue, pero la verdad es que gracias a ese mensaje estamos juntos ahora. Siempre presumiré de lo bien que hice en arriesgarme y escribirte ese día. Menos mal que no me lo pensé dos veces, porque ese holaa que parecía tan poco importante se convirtió, sin saberlo, en el mejor acierto de mi vida.",
        videoUrl: ""
    },
    {
        id: 3,
        titulo: "El primer beso",
        fecha: "El primer beso",
        imagenMiniatura: "img/fotoAscensorAriana.JPEG",
        imagenDetalle: "img/fotoAscensorAriana.JPEG",
        textoCorto: "Ese momento en el que el tiempo se paró. Ojalá volver a repetir esa sensación.",
        textoLargo: "Ese 17 de abril que tanto esperamos, después de esas dos semanas que estuvimos conocíendonos. Siempre bromeando y riéndonos, pero en realidad ambos estábamos pensando en lo mismo. Cuando por fin nos acercamos el uno al otro estando en el portal de Ari, noté que el tiempo se paró y solo estábamos tú y yo. No fue un beso cualquiera, fue nuestro primer beso, sincero y cariñoso. Superó cualquier expectativa, gracias a ese beso ahora no puedo parar de dártelos.",
        videoUrl: ""
    },
    {
        id: 4,
        titulo: "Domingo de Resurreción",
        fecha: "Domingo de Resurreción",
        imagenMiniatura: "img/virgen1.JPEG",
        imagenDetalle: ["img/virgen1.JPEG", "img/fotoDanielaFarol.JPEG", "img/virgen2.JPEG"],
        textoCorto: "El día más importante para ti de toda la Semana Santa y la salida del Resucitado (2 años más tarde pero con la misma ilusión).",
        textoLargo: "Llegaba ese día tan importante para ti, ese Domingo de Resurreción y con él, un momento que es muy dificil de olvidar. Quería ir a ver este paso porque en tu cofradía lo hacen todo genial pero sobre todo quería ir a verte a ti. Sé perfectamente que el día de antes lo pasaste fatal, lo mal que se volvió todo y el esfuerzo tan grande que pudiste hacer al día siguiente. Por eso ese día, verte por la calle con esa luz de tu farol, me hizo estar muy orgulloso de ti, porque a pesar de que se te vino el mundo encima el día anterior, te propusiste salir en la procesión y eso es de ser muy valiente. Estoy muy muy orgulloso de ti Daniela.",
        videoUrl: ""
    },
    {
        id: 5,
        titulo: "Romería",
        fecha: "Romería",
        imagenMiniatura: "img/fotoBesoRecortada.JPEG",
        imagenDetalle: ["img/fotoBesoRecortada.JPEG", "img/fotoRomeriaJuntos.JPEG", "img/fotoRomeriaRara.JPEG", "img/fotoRomeriaTontos.JPEG"],
        textoCorto: "Nuestra primera romería juntos, con las casetas casi al lado (necesito volver a ese momento)",
        textoLargo: "Seguro que te acuerdas de estos días tan bonitos que pudimos pasar juntos, desde ese viernes hasta el domingo cuando salió Santa Ana y la vimos abrazados. Ese puente se me pasó volando a tu lado, cualquier momento que paso contigo es oro y estar en la caseta, tranquilos, en algunos momentos hasta me tuviste que cuidar pero siempre juntos. Millones de gracias por ser como eres y acompañarme en estos momentos.",
        videoUrl: "img/videoRomeria.MP4"
    },
    {
        id: 6,
        titulo: "Ruta por el Megatín",
        fecha: "Ruta por el Megatín",
        imagenMiniatura: "img/fotoMegatin.JPEG",
        imagenDetalle: ["img/fotoMegatin.JPEG", "img/paisajeMegatin.JPEG"],
        textoCorto: "Quién diria que haríamos nuestra primera ruta juntos, con lo vagos que somos y a pesar de que te quedaste sin batería, siempre estuvimos juntos.",
        textoLargo: "Ese trabajo de Educación Fisica por el que estabas tan nerviosa para poder aprobar, planeando ya la ruta y avisando a cuanta más gente mejor para ir todos juntos y que sumara nota. Al final no se animó nadie y fuimos juntos y fue de las mejores experiencias que he podido tener porque pasar tantas horas seguidas contigo hablando de la vida o de tonterías, me hacen ser muy feliz. Gracias por acompañarme en otra aventura más. Eso si, te gustaba demasiado tirarte por el suelo pa que yo te levantara eh, y luego que si te convertías en gusano y tu pregunta de que si te iba a querer JAJAJAJAJAJ, claro que si, vamos tu y yo al fin del mundo juntos pequee.",
        videoUrl: "img/videoTiradaMegatin.MP4"
    },
    {
        id: 7,
        titulo: "Por fin novios",
        fecha: "Por fin novios",
        imagenMiniatura: "img/fotoPrimeraJuntos.JPEG",
        imagenDetalle: ["img/fotoDanielaRamo.JPEG", "img/fotoPrimeraJuntos.JPEG", "img/fotoPrimerRamo.JPEG"],
        textoCorto: "Tantos segundos, minutos, horas y días pasando hasta que por fin se pudo decir que oficialmente estamos juntos y nadie nos va a poder separar.",
        textoLargo: "Después de tantas indirectas, de tantas risas entre los dos, de ese primer mensaje mítico y de momentos que ya son inolvidables, llegó el día. Ese momento en el que dejamos de ser 'tú y yo' para convertirnos oficialmente en un 'nosotros'. Decir que somos novios no es solo algo que se suele decir por decir, es elegir los dos querernos hasta el fin de nuestros días, de la mano, y estar juntos en cada plan que nos propongamos. Gracias por este día, aunque sabíamos que ibamos justos de tiempo hicimos que esas horas fuesen perfectas haciendo nuestro cuadro de las manos y supuestamente mirando el atardecer pero salío cuando nos fuimos JAJAJAJAJAJ (por cierto pedazo ramo te regala tu novio, si es que es el mejor).",
        videoUrl: "img/videoPrimerRamoDaniela.MP4"
    },
    {
        id: 8,
        titulo: "Tu graduación",
        fecha: "Tu graduación",
        imagenMiniatura: "img/besoGraduacion.JPEG",
        imagenDetalle: ["img/besoFiltroGraduacion.JPG", "img/beso2Graduacion.JPEG", "img/besoGraduacion.JPEG", "img/sonrisaGraduacionRecortada.JPEG"],
        textoCorto: "Después de tanto tiempo con exámenes, momentos que nunca olvidarás y siempre rodeada de gente que te quiere, por fin ha llegado el día que tanto esperabas.",
        textoLargo: "Tu graduación es uno de los momentos más importantes en la vida de una persona y me siento muy orgulloso de poder haber estado y compartido este momento contigo, hiciste que el día que tan dificil se te va a hacer olvidar, para mí tambien sea inolvidable. Ver la alegría que tenías al salir del teatro y recibir el ramo, siempre con la gente que te quiere me pareció un momento precioso. Estoy muy orgulloso de todo el esfuerzo que has hecho, porque solamente tú sabes cuanto te ha costado y que no ha sido fácil. Gracias por pasar esa noche conmigo allí en la ermita bailando, fue una locura y lo que ocurrió luego mejor nos lo callamos JAJAJAJAJAJ, teamo muchísimo miamorrr."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // --- 0. Render timeline dynamically ---
    function renderTimeline() {
        const container = document.getElementById('timeline-container');
        if (!container) return;
        
        container.innerHTML = ''; // Clear container

        hitosHistoria.forEach(hito => {
            const card = document.createElement('div');
            card.className = 'timeline-item';
            card.innerHTML = `
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${hito.fecha}</span>
                    <img src="${hito.imagenMiniatura}" alt="${hito.titulo}" class="timeline-img">
                    <p>${hito.textoCorto}</p>
                    <button class="expand-milestone-btn" data-milestone="${hito.id}">¿Qué pasó ese día? 🤍</button>
                </div>
            `;
            container.appendChild(card);
        });
    }
    renderTimeline();

    // --- 1. Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = hamburger.querySelectorAll('span');
        
        // Hamburger to X animation
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // --- 2. SPA Navigation ---
    const navItems = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.page-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active-section'));
            
            item.classList.add('active');
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active-section');

            // Reset history section back to timeline if we navigate away/to it
            const detailView = document.getElementById('milestone-detail-view');
            const timelineContainer = document.getElementById('timeline-container');
            const historiaTitle = document.getElementById('historia-section-title');
            if (detailView && timelineContainer && historiaTitle) {
                detailView.style.display = 'none';
                detailView.style.opacity = '0';
                timelineContainer.style.display = 'block';
                timelineContainer.style.opacity = '1';
                historiaTitle.style.display = 'block';
                historiaTitle.style.opacity = '1';
            }
            
            if (window.innerWidth <= 768) {
                hamburger.click();
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // --- 3. Recuerdos Tabs (Dynamic Filtering) ---
    // NOTA: Esta lógica es 100% genérica. Al hacer clic en cualquier pestaña con la clase '.tab-btn',
    // el script lee su atributo 'data-tab' y activa automáticamente el contenedor correspondiente
    // con el id '#tab-[data-tab]'.
    //
    // Por lo tanto, soporta de forma nativa e inmediata las nuevas categorías:
    // - data-tab="bullying-daniela" -> Activa #tab-bullying-daniela
    // - data-tab="bullying-angel"   -> Activa #tab-bullying-angel
    //
    // Ejemplo de estructura de datos por si en el futuro deseas renderizar la galería dinámicamente:
    /*
    const fotosBullying = {
        daniela: [
            { src: "img/bullying_daniela_1.jpg", alt: "Daniela haciendo caras divertidas 1" },
            { src: "img/bullying_daniela_2.jpg", alt: "Daniela haciendo caras divertidas 2" }
        ],
        angel: [
            { src: "img/bullying_angel_1.jpg", alt: "Angel en un momento despistado 1" },
            { src: "img/bullying_angel_2.jpg", alt: "Angel en un momento despistado 2" }
        ]
    };
    */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });

    // --- 4. Smart Counter Logic ---
    const targetDateStr = "2026-05-22T19:00:00"; 
    const targetDate = new Date(targetDateStr).getTime();
    const counterTitle = document.getElementById('counter-title');
    const counterDisplay = document.getElementById('counter-display');

    function updateCounter() {
        const now = new Date().getTime();
        const difference = targetDate - now;
        
        if (difference > 0) {
            // Future Date -> Countdown
            counterTitle.textContent = "Faltan exactamente para nuestro momento:";
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            counterDisplay.innerHTML = `
                <div class="time-box"><span>${days}</span><label>Días</label></div>
                <div class="time-box"><span>${String(hours).padStart(2, '0')}</span><label>Horas</label></div>
                <div class="time-box"><span>${String(minutes).padStart(2, '0')}</span><label>Minutos</label></div>
                <div class="time-box"><span>${String(seconds).padStart(2, '0')}</span><label>Segundos</label></div>
            `;
        } else {
            // Past Date -> Countup (Time Together)
            counterTitle.textContent = "Llevamos juntos y sumando:";
            const pastDiff = now - targetDate;
            
            const dateTargetObj = new Date(targetDateStr);
            const dateNowObj = new Date();
            
            let years = dateNowObj.getFullYear() - dateTargetObj.getFullYear();
            let months = dateNowObj.getMonth() - dateTargetObj.getMonth();
            let days = dateNowObj.getDate() - dateTargetObj.getDate();
            
            if (days < 0) {
                months--;
                const prevMonth = new Date(dateNowObj.getFullYear(), dateNowObj.getMonth(), 0);
                days += prevMonth.getDate();
            }
            if (months < 0) {
                years--;
                months += 12;
            }

            const hours = Math.floor((pastDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((pastDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((pastDiff % (1000 * 60)) / 1000);

            let html = '';
            if(years > 0) html += `<div class="time-box"><span>${years}</span><label>${years === 1 ? 'Año' : 'Años'}</label></div>`;
            if(months > 0 || years > 0) html += `<div class="time-box"><span>${months}</span><label>${months === 1 ? 'Mes' : 'Meses'}</label></div>`;
            
            html += `
                <div class="time-box"><span>${days}</span><label>Días</label></div>
                <div class="time-box"><span>${String(hours).padStart(2, '0')}</span><label>Hrs</label></div>
                <div class="time-box"><span>${String(minutes).padStart(2, '0')}</span><label>Min</label></div>
                <div class="time-box"><span>${String(seconds).padStart(2, '0')}</span><label>Seg</label></div>
            `;
            
            counterDisplay.innerHTML = html;
        }
    }

    updateCounter();
    setInterval(updateCounter, 1000);

    // --- 5. Coupon Interactions ---
    const couponCards = document.querySelectorAll('.coupon-card');
    const couponModal = document.getElementById('coupon-modal');
    const modalMessage = document.getElementById('coupon-modal-message');
    const modalIcon = document.getElementById('coupon-modal-icon');
    const btnCancel = document.getElementById('coupon-modal-cancel');
    const btnConfirm = document.getElementById('coupon-modal-confirm');
    
    let activeConfirmCallback = null;
    
    function showModal(message, isSpecial, onConfirm) {
        modalMessage.textContent = message;
        if (isSpecial) {
            modalIcon.textContent = '';
            btnConfirm.className = 'coupon-modal-btn confirm-btn gold-style';
            btnConfirm.textContent = 'Reclamar Vale';
        } else {
            modalIcon.textContent = '';
            btnConfirm.className = 'coupon-modal-btn confirm-btn';
            btnConfirm.textContent = 'Canjear Cupón';
        }
        
        activeConfirmCallback = onConfirm;
        couponModal.classList.add('show');
    }
    
    function hideModal() {
        couponModal.classList.remove('show');
        activeConfirmCallback = null;
    }
    
    btnCancel.addEventListener('click', hideModal);
    btnConfirm.addEventListener('click', () => {
        if (activeConfirmCallback) {
            activeConfirmCallback();
        }
        hideModal();
    });
    
    // Close modal if clicking backdrop
    couponModal.addEventListener('click', (e) => {
        if (e.target === couponModal) {
            hideModal();
        }
    });

    couponCards.forEach((coupon, index) => {
        const isSpecial = coupon.classList.contains('special-coupon');
        const storageKey = isSpecial ? 'coupon-special' : `coupon-${index}`;
        
        // Restore state on load
        if (localStorage.getItem(storageKey) === 'canjeado') {
            if (isSpecial) {
                coupon.classList.add('canjeado-especial');
                const content = coupon.querySelector('.coupon-content');
                if (content && !content.querySelector('.coupon-status-special')) {
                    const statusDiv = document.createElement('div');
                    statusDiv.className = 'coupon-status-special';
                    statusDiv.textContent = 'EL GRAN VALE HA SIDO RECLAMADO';
                    content.appendChild(statusDiv);
                }
            } else {
                coupon.classList.add('canjeado');
                const content = coupon.querySelector('.coupon-content');
                if (content && !content.querySelector('.coupon-status')) {
                    const statusDiv = document.createElement('div');
                    statusDiv.className = 'coupon-status';
                    statusDiv.textContent = '¡Cupón Canjeado!';
                    content.appendChild(statusDiv);
                }
            }
        }
        
        // Add click listener
        coupon.addEventListener('click', function() {
            // If already redeemed, do nothing
            if (this.classList.contains('canjeado') || this.classList.contains('canjeado-especial')) {
                return;
            }
            
            // Visual feedback bounce
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            setTimeout(() => {
                if (isSpecial) {
                    showModal(
                        "Tienes que estar muy, pero que muy segura de que quieres usar este vale. Solo tienes uno cada mes, así que aprovéchalo en el mejor momento.",
                        true,
                        () => {
                            this.classList.add('canjeado-especial');
                            localStorage.setItem(storageKey, 'canjeado');
                            const content = this.querySelector('.coupon-content');
                            if (content && !content.querySelector('.coupon-status-special')) {
                                const statusDiv = document.createElement('div');
                                statusDiv.className = 'coupon-status-special';
                                statusDiv.textContent = 'EL GRAN VALE HA SIDO RECLAMADO';
                                content.appendChild(statusDiv);
                            }
                        }
                    );
                } else {
                    showModal(
                        "¿Segura de que quieres canjear este vale? Mira que luego no hay más eh. Piénsalo bien.",
                        false,
                        () => {
                            this.classList.add('canjeado');
                            localStorage.setItem(storageKey, 'canjeado');
                            const content = this.querySelector('.coupon-content');
                            if (content && !content.querySelector('.coupon-status')) {
                                const statusDiv = document.createElement('div');
                                statusDiv.className = 'coupon-status';
                                statusDiv.textContent = '¡Cupón Canjeado!';
                                content.appendChild(statusDiv);
                            }
                        }
                    );
                }
            }, 200); // Wait for the scale anim to complete before showing modal
        });
    });

    // --- 6. Initial Animation Trigger ---
    setTimeout(() => {
        const activeSection = document.querySelector('.active-section');
        if(activeSection) {
            activeSection.style.opacity = '1';
        }
    }, 100);

    // --- 7. Dynamic Greeting by Hour ---
    function updateGreeting() {
        const greetingElement = document.getElementById('dynamic-greeting');
        if (greetingElement) {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const totalTime = hours + minutes / 60;

            if (totalTime >= 7 && totalTime < 12) {
                greetingElement.textContent = "Bon dia pequee";
            } else if (totalTime >= 12 && totalTime <= 20) {
                greetingElement.textContent = "Buenas tardes pequee";
            } else {
                greetingElement.textContent = "Buenas noches pequee";
            }
        }
    }
    updateGreeting();

    // --- 8. Dark Mode Toggler ---
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
        const sunIcon = toggleBtn.querySelector('.sun-icon');
        const moonIcon = toggleBtn.querySelector('.moon-icon');

        // Check localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            document.body.classList.remove('dark-theme');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }

        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            if (isDark) {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        });
    }

    // --- 9. Timeline Expand and Carousel Logic ---
    const timelineContainer = document.getElementById('timeline-container');
    const historiaTitle = document.getElementById('historia-section-title');
    const detailView = document.getElementById('milestone-detail-view');

    if (timelineContainer && historiaTitle && detailView) {
        let carouselImages = [];
        let currentImageIndex = 0;

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const dotsContainer = document.getElementById('carousel-dots');
        const detailImg = document.getElementById('detail-img');

        function goToImage(newIndex) {
            if (newIndex === currentImageIndex) return;
            
            detailImg.classList.add('fade-out');
            
            setTimeout(() => {
                currentImageIndex = newIndex;
                detailImg.src = carouselImages[currentImageIndex];
                
                // Update active dot
                if (dotsContainer) {
                    const dots = dotsContainer.querySelectorAll('.carousel-dot');
                    dots.forEach((dot, idx) => {
                        if (idx === currentImageIndex) {
                            dot.classList.add('active');
                        } else {
                            dot.classList.remove('active');
                        }
                    });
                }
                
                setTimeout(() => {
                    detailImg.classList.remove('fade-out');
                }, 50);
            }, 400); // 400ms matches style.css transition
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                if (carouselImages.length <= 1) return;
                let newIndex = currentImageIndex - 1;
                if (newIndex < 0) newIndex = carouselImages.length - 1;
                goToImage(newIndex);
            });

            nextBtn.addEventListener('click', () => {
                if (carouselImages.length <= 1) return;
                let newIndex = currentImageIndex + 1;
                if (newIndex >= carouselImages.length) newIndex = 0;
                goToImage(newIndex);
            });
        }

        // Enlazamos los eventos de click a los botones generados dinámicamente
        document.querySelectorAll('.expand-milestone-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-milestone'), 10);
                const story = hitosHistoria.find(h => h.id === id);
                if (story) {
                    document.getElementById('detail-title').textContent = story.titulo;
                    document.getElementById('detail-text').textContent = story.textoLargo;

                    // Setup gallery images (support both single string and array of strings)
                    carouselImages = Array.isArray(story.imagenDetalle) ? story.imagenDetalle : [story.imagenDetalle];
                    currentImageIndex = 0;
                    detailImg.src = carouselImages[0];
                    detailImg.classList.remove('fade-out'); // Ensure image is visible initially

                    // Show or hide controls based on image count
                    if (carouselImages.length > 1) {
                        if (prevBtn) prevBtn.style.display = 'flex';
                        if (nextBtn) nextBtn.style.display = 'flex';
                        if (dotsContainer) {
                            dotsContainer.style.display = 'flex';
                            dotsContainer.innerHTML = '';
                            carouselImages.forEach((img, idx) => {
                                const dot = document.createElement('span');
                                dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
                                dot.addEventListener('click', () => {
                                    goToImage(idx);
                                });
                                dotsContainer.appendChild(dot);
                            });
                        }
                    } else {
                        if (prevBtn) prevBtn.style.display = 'none';
                        if (nextBtn) nextBtn.style.display = 'none';
                        if (dotsContainer) {
                            dotsContainer.style.display = 'none';
                            dotsContainer.innerHTML = '';
                        }
                    }

                    // Renderizado del video local opcional
                    const videoContainer = document.getElementById('detail-video-container');
                    const videoTitle = document.getElementById('detail-video-title');
                    const videoElement = document.getElementById('detail-video');
                    if (videoContainer && videoTitle && videoElement) {
                        if (story.videoUrl) {
                            videoContainer.style.display = 'block';
                            videoTitle.textContent = `Video de ${story.titulo}`;
                            videoElement.src = story.videoUrl;
                            videoElement.load();
                        } else {
                            videoContainer.style.display = 'none';
                            videoElement.pause();
                            videoElement.removeAttribute('src');
                            videoElement.load();
                        }
                    }

                    // Transition out timeline
                    timelineContainer.style.opacity = '0';
                    historiaTitle.style.opacity = '0';

                    setTimeout(() => {
                        timelineContainer.style.display = 'none';
                        historiaTitle.style.display = 'none';

                        // Show detail view
                        detailView.style.display = 'block';
                        setTimeout(() => {
                            detailView.style.opacity = '1';
                        }, 50);
                    }, 300);

                    // Smooth scroll to top of content
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });

        const backBtn = document.getElementById('back-to-timeline-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                detailView.style.opacity = '0';

                // Pausar y limpiar el vídeo para evitar fugas de sonido en segundo plano
                const videoElement = document.getElementById('detail-video');
                if (videoElement) {
                    videoElement.pause();
                    videoElement.removeAttribute('src');
                    videoElement.load();
                }

                setTimeout(() => {
                    detailView.style.display = 'none';

                    // Show timeline
                    timelineContainer.style.display = 'block';
                    historiaTitle.style.display = 'block';

                    setTimeout(() => {
                        timelineContainer.style.opacity = '1';
                        historiaTitle.style.opacity = '1';
                    }, 50);
                }, 300);

                // Smooth scroll to top of content
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
});
