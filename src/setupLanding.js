export function setupLanding() {
    if (window.__landingSetupDone) return;
    window.__landingSetupDone = true;

    // ========== CUSTOM CURSOR ==========
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    const canUseCustomCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (cursor && cursorDot && canUseCustomCursor && !prefersReducedMotion) {
        let cursorX = 0, cursorY = 0;
        let mouseX = 0, mouseY = 0;
        let nearLinkRaf = false;
        const nearLinkThreshold = 80;
        const linkTargets = Array.from(document.querySelectorAll('a[href]'));

        const isNearElement = (x, y, rect, threshold) => {
            const dx = Math.max(rect.left - x, 0, x - rect.right);
            const dy = Math.max(rect.top - y, 0, y - rect.bottom);
            return Math.hypot(dx, dy) <= threshold;
        };

        // Smooth animation loop using linear interpolation (lerp)
        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.3;
            cursorY += (mouseY - cursorY) * 0.3;

            const scale = cursor.classList.contains('next')
                ? 2.2
                : (cursor.classList.contains('hover') ? 2 : 1);

            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) scale(${scale})`;
            cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!nearLinkRaf) {
                nearLinkRaf = true;
                requestAnimationFrame(() => {
                    nearLinkRaf = false;
                    const isNearLink = linkTargets.some((link) => {
                        const rect = link.getBoundingClientRect();
                        return isNearElement(mouseX, mouseY, rect, nearLinkThreshold);
                    });

                    cursor.classList.toggle('next', isNearLink);
                    cursorDot.classList.toggle('next', isNearLink);
                });
            }
        }, { passive: true });

        // Enhanced hover interactions
        const hoverSelectors = 'a, button, .service-card, .result-card, .team-card, .process-step, input, select, textarea';
        document.querySelectorAll(hoverSelectors).forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    } else {
        if (cursor) cursor.style.display = 'none';
        if (cursorDot) cursorDot.style.display = 'none';
        document.body.style.cursor = 'auto';
    }

    // ========== NAVBAR SCROLL ==========
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const navLinks = document.querySelector('.nav-links');
                if (navLinks) navLinks.classList.remove('active');
            }
        });
    });

    // ========== HERO PARALLAX ==========
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && !prefersReducedMotion) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < 1000) {
                heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
                heroContent.style.opacity = Math.max(0, 1 - (scrolled / 600));
            }
        }, { passive: true });
    }

    // ========== TEAM CAROUSEL ==========
    const carousel = document.getElementById('teamCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');

    if (carousel && prevBtn && nextBtn && dotsContainer) {
        let currentIndex = 0;
        let cardWidth = 440; // card width + gap
        let visibleCards = 3;
        let totalCards = carousel.children.length;
        let maxIndex = 0;

        // Calculate responsive values
        function calculateCarousel() {
            const containerWidth = carousel.parentElement.offsetWidth;
            if (window.innerWidth <= 480) {
                cardWidth = 320;
                visibleCards = 1;
            } else if (window.innerWidth <= 768) {
                cardWidth = 340;
                visibleCards = 1;
            } else if (window.innerWidth <= 1200) {
                cardWidth = 390;
                visibleCards = 2;
            } else {
                cardWidth = 440;
                visibleCards = 3;
            }
            maxIndex = Math.max(0, totalCards - visibleCards);
            
            // Create dots
            dotsContainer.innerHTML = '';
            for (let i = 0; i <= maxIndex; i++) {
                const dot = document.createElement('div');
                dot.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            // Update dots
            document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = Math.max(0, Math.min(index, maxIndex));
            updateCarousel();
        }

        function nextSlide() {
            currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
            updateCarousel();
        }

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // Touch/Drag support
        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;

        carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX;
            carousel.style.cursor = 'grabbing';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX;
            const walk = (startX - x);
            if (Math.abs(walk) > 50) {
                if (walk > 0) nextSlide();
                else prevSlide();
                isDragging = false;
                carousel.style.cursor = 'grab';
            }
        });

        const stopDrag = () => {
            isDragging = false;
            carousel.style.cursor = 'grab';
        };

        carousel.addEventListener('mouseup', stopDrag);
        carousel.addEventListener('mouseleave', stopDrag);

        // Touch events
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
        }, { passive: true });

        carousel.addEventListener('touchmove', (e) => {
            if (!startX) return;
            const x = e.touches[0].pageX;
            const walk = startX - x;
            if (Math.abs(walk) > 50) {
                if (walk > 0) nextSlide();
                else prevSlide();
                startX = 0;
            }
        }, { passive: true });

        // Initialize and handle resize
        calculateCarousel();
        window.addEventListener('resize', () => {
            calculateCarousel();
            currentIndex = Math.min(currentIndex, maxIndex);
            updateCarousel();
        });
    }

    // ========== FORM ==========
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function () {
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.style.opacity = '0.8';
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            }
        });
    }

    // ========== SCROLL ANIMATIONS ==========
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedGroups = [
        '.service-card',
        '.result-card',
        '.about-feature',
        '.team-card'
    ];

    animatedGroups.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            const delay = (i % 4) * 0.1;
            el.style.transition = `opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`;
            observer.observe(el);
        });
    });

    // ========== PROCESS STEPS SEQUENCE ==========
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });

    const processSection = document.querySelector('.process-section');
    if (processSection && processSteps.length) {
        let processAnimated = false;
        const processObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !processAnimated) {
                    processAnimated = true;
                    processSteps.forEach((step, index) => {
                        setTimeout(() => {
                            step.style.opacity = '1';
                            step.style.transform = 'translateY(0)';
                        }, index * 1000);
                    });
                    processObserver.unobserve(processSection);
                }
            });
        }, { threshold: 0.2 });

        processObserver.observe(processSection);
    }

    // ========== COUNTER ANIMATION ==========
    const counters = document.querySelectorAll('.result-value');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const value = target.textContent;
                const isNegative = value.includes('-');
                const isPlus = value.includes('+');
                const number = parseInt(value.replace(/[^0-9]/g, ''));

                let current = 0;
                const duration = 1500; // 1.5s duration
                const steps = 50;
                const increment = number / steps;
                const stepTime = duration / steps;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        target.textContent = value;
                        clearInterval(timer);
                    } else {
                        const prefix = isNegative ? '-' : (isPlus ? '+' : '');
                        target.textContent = prefix + Math.floor(current) + '%';
                    }
                }, stepTime);

                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}
