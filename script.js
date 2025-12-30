// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typewriter Effect
const texts = ["Software Developer", "Freelancer", "Open Source Contributor", "Java Specialist", "Full Stack Developer", "Backend Architect", "Java Developer", "Full Stack Java Trainer", "SQL Developer", "Angular Developer", "Tester"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    // Check if element exists to avoid errors
    const typewriterElement = document.getElementById("typewriter");
    if (!typewriterElement) return;

    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    typewriterElement.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait 2s before starting next word
    } else {
        setTimeout(type, 100); // Typing speed
    }
})();

// Particles.js Config
function loadParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js',
            {
                "particles": {
                    "number": {
                        "value": 50,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false
                    },
                    "size": {
                        "value": 3,
                        "random": true
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#c770f0", // Purple connection lines
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        }
                    }
                },
                "retina_detect": true
            }
        );
    }
}

// Load particles script dynamically if not present
if (!document.getElementById('particles-script')) {
    const script = document.createElement('script');
    script.id = 'particles-script';
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = loadParticles;
    document.body.appendChild(script);
} else {
    loadParticles();
}
