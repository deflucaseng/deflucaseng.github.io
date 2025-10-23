class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        
        this.ship = new Ship(this.width / 2, this.height / 2);
        this.bullets = [];
        this.asteroids = [];
        this.particles = [];
        this.starStreaks = [];
        this.respawnTimer = 0;
        this.asteroidRespawnTimer = 0;
        this.resumeItems = [ 
            {
                label: 'EXPERIENCE',
                content: `
                    <h3>Work Experience</h3>
                    
                    <p><strong>AI/ML Software Engineering Intern</strong><br>
                    <em>HashedTokens | August 2024 - December 2024</em></p>
                    <ul>
                        <li>Developed a C++/OpenCL based Python Library for accelerated matrix computation</li>
                        <li>Optimized inference pipelines for agent-based systems and training ML models</li>
                        <li>Implemented real-time model serving APIs for production environments</li>
                    </ul>
                    
                    <p><strong>Head Computer Science Teaching Assistant</strong><br>
                    <em>NYU | September 2024 - May 2025</em></p>
                    <ul>
                        <li>Designed and implemented interactive React dashboards with D3.js for real-time analytics</li>
                        <li>Built scalable AWS data infrastructure processing 200+ student records weekly</li>
                        <li>Orchestrated workflows using RDS, S3, and Lambda functions for curriculum insights</li>
                        <li>Coordinated a team of 9 teaching assistants for office hours, content, and grading</li>
                    </ul>
                    
                    <p><strong>Test-Day Software Developer</strong><br>
                    <em>NYU | December 2024 - May 2025</em></p>
                    <ul>
                        <li>Architected full-stack web application using React/Node.js, Python Flask, and PostgreSQL</li>
                        <li>Deployed on AWS, automating exam logistics for 1000+ students</li>
                        <li>Implemented real-time barcode scanning and optimized room assignment algorithms</li>
                        <li>Reduced administration time by 40% through process automation</li>
                    </ul>
                `,
                type: 'content'
            },
            {
                label: 'EDUCATION',
                content: `
                    <h3>Education</h3>
                    
                    <p><strong>New York University, Tandon School of Engineering</strong><br>
                    <em>New York, NY | Expected May 2025</em></p>
                    <ul>
                        <li>Bachelor of Science in Computer Science</li>
                        <li>Mathematics Minor</li>
                        <li>Focus areas: Machine Learning, Data Analysis, Operating Systems</li>
                        <li>Relevant coursework in AI/ML, databases, and software engineering</li>
                    </ul>
                `,
                type: 'content'
            },
            {
                label: 'SKILLS',
                content: `
                    <h3>Technical Skills</h3>
                    
                    <p><strong>Programming Languages</strong></p>
                    <ul>
                        <li>Python (Advanced) - Primary language for ML/AI development</li>
                        <li>C/C++ (Proficient) - Systems programming and performance optimization</li>
                        <li>JavaScript/HTML/CSS (Proficient) - Full-stack web development</li>
                        <li>SQL (Proficient) - Database design and optimization</li>
                    </ul>
                    
                    <p><strong>Machine Learning & AI</strong></p>
                    <ul>
                        <li>Frameworks: TensorFlow, PyTorch, Keras, SciKit-learn</li>
                        <li>Data Processing: Pandas, NumPy, data analysis pipelines</li>
                        <li>AI Agents: LangChain, conversational AI, document analysis</li>
                        <li>Performance: CUDA programming, OpenCL acceleration</li>
                    </ul>
                    
                    <p><strong>Web Development</strong></p>
                    <ul>
                        <li>Frontend: React, Vue.js (Vuex, Vue Router), Next.js, TailwindCSS</li>
                        <li>Backend: Node.js, Python Flask, RESTful APIs</li>
                        <li>Visualization: D3.js, interactive dashboards, real-time analytics</li>
                        <li>State Management: Redux, Vuex, component architecture</li>
                    </ul>
                    
                    <p><strong>Cloud & Infrastructure</strong></p>
                    <ul>
                        <li>AWS Services: S3, EC2, Lambda, RDS, DynamoDB (1+ year experience)</li>
                        <li>Workflow Orchestration: Apache Airflow, n8n automation</li>
                        <li>Databases: PostgreSQL, MySQL, MongoDB, NoSQL design</li>
                        <li>DevOps: Git, Docker, CI/CD, scaling applications</li>
                    </ul>
                `,
                type: 'content'
            },
            {
                label: 'GITHUB',
                content: 'https://github.com/deflucaseng',
                type: 'link'
            },
            {
                label: 'PROJECTS',
                content: `
                    <h3>Notable Projects</h3>
                    
                    <p><strong>Jurus.AI</strong><br>
                    <em>Personal Project | Legal AI Agent Platform</em></p>
                    <ul>
                        <li>Built legal AI agent platform using Python, Vue.js (Vuex, Vue Router), and Apache Airflow</li>
                        <li>Implemented LangChain-based agentic workflows for legal document analysis</li>
                        <li>Developed conversational UI with streaming responses and multi-turn dialogue management</li>
                        <li>Created full-stack document processing pipeline with n8n automation and LLM orchestration</li>
                        <li>Integrated AWS S3 for scalable document storage and retrieval</li>
                    </ul>
                    
                    <p><strong>LeisureLink</strong><br>
                    <em>NYU Capstone Project | Activity Recommendation Platform</em></p>
                    <ul>
                        <li>Built responsive Next.js/React frontend with TailwindCSS for NYC activity recommendations</li>
                        <li>Implemented intelligent agent-driven personalization through end-to-end data pipeline</li>
                        <li>Developed high-performance Python/C++/CUDA API library for real-time vector similarity calculations</li>
                        <li>Integrated MySQL database on AWS for user data and recommendation storage</li>
                        <li>Delivered instantaneous recommendations to users through optimized algorithms</li>
                    </ul>
                    
                    <p><strong>ShadowDash Build System</strong><br>
                    <em>Open Source Project | Innovative Compilation Tool</em></p>
                    <ul>
                        <li>Developed innovative build system with pseudo C/C++ syntax</li>
                        <li>Enabled direct compilation rather than traditional parsing approaches</li>
                        <li>Engineered ninja-like build tool leveraging familiar C/C++ constructs</li>
                        <li>Improved developer experience and build performance</li>
                        <li>Contributed to NYU Open Source Software Development initiative</li>
                    </ul>
                `,
                type: 'content'
            },
            {
                label: 'LINKEDIN',
                content: 'https://www.linkedin.com/in/lucas-eng/',
                type: 'link'
            },
            {
                label: 'CERTIFICATIONS',
                content: `
                    <h3>Certifications & Cloud Experience</h3>
                    
                    <p><strong>AWS Cloud Practitioner</strong><br>
                    <em>Amazon Web Services | Current</em></p>
                    <ul>
                        <li>Certified in AWS cloud fundamentals and best practices</li>
                        <li>1+ year hands-on experience deploying and scaling applications</li>
                        <li>Proficient with core services: S3, EC2, DynamoDB, Lambda, RDS</li>
                        <li>Experience with cloud architecture, security, and cost optimization</li>
                        <li>Applied knowledge in production environments for multiple projects</li>
                    </ul>
                `,
                type: 'content'
            },
            {
                label: 'OPEN SOURCE',
                content: `
                    <h3>Open Source Contributions</h3>
                    
                    <p><strong>ShadowDash Compiled Build System</strong><br>
                    <em>NYU Open Source Software Development | Active Contributor</em></p>
                    <ul>
                        <li>Lead developer on innovative build system with pseudo C/C++ syntax</li>
                        <li>Implemented direct compilation approach, bypassing traditional parsing methods</li>
                        <li>Engineered ninja-like build tool leveraging familiar C/C++ constructs</li>
                        <li>Achieved improved build performance and enhanced developer experience</li>
                        <li>Collaborated with open source community for code reviews and feature development</li>
                        <li>Maintained comprehensive documentation and contribution guidelines</li>
                    </ul>
                `,
                type: 'content'
            },
            {
                label: 'COURSEWORK',
                content: `
                    <h3>Relevant Coursework</h3>
                    
                    <p><strong>Core Computer Science</strong></p>
                    <ul>
                        <li>Operating Systems - Process management, memory allocation, file systems</li>
                        <li>Data Structures & Algorithms - Advanced problem solving and optimization</li>
                        <li>Software Engineering - Large-scale system design and architecture</li>
                    </ul>
                    
                    <p><strong>Data & Machine Learning</strong></p>
                    <ul>
                        <li>Data Analysis & Machine Learning - Statistical modeling and ML algorithms</li>
                        <li>Relational Databases - SQL optimization, database design principles</li>
                        <li>NoSQL Systems - Document stores, graph databases, distributed systems</li>
                    </ul>
                    
                    <p><strong>Development Methodologies</strong></p>
                    <ul>
                        <li>Agile/Scrum Methodologies - Sprint planning, iterative development</li>
                        <li>Open Source Software Development - Collaboration, version control, CI/CD</li>
                        <li>Project Management - Team coordination, requirements analysis</li>
                    </ul>
                `,
                type: 'content'
            }
        ];
        
        this.keys = {};
        this.sidebar = document.getElementById('sidebar');
        this.contentArea = document.getElementById('contentArea');
        this.gameContainer = document.querySelector('.game-container');
        this.typewriterActive = false;
        this.typewriterText = '';
        this.typewriterIndex = 0;
        this.typewriterSpeed = 800;
        
        this.initializeAsteroids();
        this.initializeStarStreaks();
        this.setupEventListeners();
        this.gameLoop();
    }
    
    initializeAsteroids() {
        this.resumeItems.forEach((item, index) => {
            const angle = (index / this.resumeItems.length) * Math.PI * 2;
            const distance = 200 + Math.random() * 150;
            const x = this.width / 2 + Math.cos(angle) * distance;
            const y = this.height / 2 + Math.sin(angle) * distance;
            
            this.asteroids.push(new Asteroid(x, y, item));
        });
    }
    
    initializeStarStreaks() {
        for (let i = 0; i < 40; i++) {
            this.starStreaks.push(new StarStreak(this.width, this.height));
        }
    }
    
    spawnRandomAsteroid() {
        if (this.asteroids.length < this.resumeItems.length) {
            const item = this.resumeItems[Math.floor(Math.random() * this.resumeItems.length)];
            const edge = Math.floor(Math.random() * 4);
            let x, y;
            
            switch (edge) {
                case 0: x = Math.random() * this.width; y = -50; break;
                case 1: x = this.width + 50; y = Math.random() * this.height; break;
                case 2: x = Math.random() * this.width; y = this.height + 50; break;
                case 3: x = -50; y = Math.random() * this.height; break;
            }
            
            this.asteroids.push(new Asteroid(x, y, item));
        }
    }
    
    findSafeRespawnPosition() {
        const minDistance = 120;
        let attempts = 0;
        let x, y;
        
        while (attempts < 100) {
            x = Math.random() * this.width;
            y = Math.random() * this.height;
            
            let isSafe = true;
            for (const asteroid of this.asteroids) {
                const dx = x - asteroid.x;
                const dy = y - asteroid.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < minDistance) {
                    isSafe = false;
                    break;
                }
            }
            
            if (isSafe) {
                return { x, y };
            }
            
            attempts++;
        }
        
        return { x: this.width / 2, y: this.height / 2 };
    }
    
    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            if (e.code === 'Space') {
                e.preventDefault();
                this.ship.shoot(this.bullets);
            }
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
        
        document.getElementById('closeBtn').addEventListener('click', () => {
            this.closeSidebar();
        });
    }
    
    update() {
        if (this.respawnTimer > 0) {
            this.respawnTimer--;
            if (this.respawnTimer === 0) {
                const safePosition = this.findSafeRespawnPosition();
                this.ship.respawn(safePosition.x, safePosition.y);
            }
        } else {
            this.ship.update(this.keys);
            
            this.asteroids.forEach(asteroid => {
                if (this.ship.collidesWith(asteroid)) {
                    this.createExplosion(this.ship.x, this.ship.y);
                    this.ship.destroy();
                    this.respawnTimer = 60;
                }
            });
        }
        
        this.bullets.forEach((bullet, bulletIndex) => {
            bullet.update();
            
            if (bullet.isOffScreen(this.width, this.height)) {
                this.bullets.splice(bulletIndex, 1);
                return;
            }
            
            this.asteroids.forEach((asteroid, asteroidIndex) => {
                if (bullet.collidesWith(asteroid)) {
                    this.createExplosion(asteroid.x, asteroid.y);
                    this.handleAsteroidHit(asteroid);
                    this.bullets.splice(bulletIndex, 1);
                    this.asteroids.splice(asteroidIndex, 1);
                    this.asteroidRespawnTimer = Math.random() * 300 + 180;
                }
            });
        });
        
        for (let i = 0; i < this.asteroids.length; i++) {
            for (let j = i + 1; j < this.asteroids.length; j++) {
                const asteroid1 = this.asteroids[i];
                const asteroid2 = this.asteroids[j];
                
                if (asteroid1.collidesWith(asteroid2)) {
                    this.bounceAsteroids(asteroid1, asteroid2);
                }
            }
        }
        
        this.asteroids.forEach(asteroid => asteroid.update(this.ship));
        
        if (this.asteroidRespawnTimer > 0) {
            this.asteroidRespawnTimer--;
            if (this.asteroidRespawnTimer === 0) {
                this.spawnRandomAsteroid();
            }
        }
        
        this.particles.forEach((particle, index) => {
            particle.update();
            if (particle.life <= 0) {
                this.particles.splice(index, 1);
            }
        });
        
        this.starStreaks.forEach((streak, index) => {
            streak.update();
            if (streak.y > this.height + 20) {
                this.starStreaks[index] = new StarStreak(this.width, this.height);
            }
        });
    }
    
    bounceAsteroids(asteroid1, asteroid2) {
        const dx = asteroid2.x - asteroid1.x;
        const dy = asteroid2.y - asteroid1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < asteroid1.size + asteroid2.size && distance > 0) {
            const nx = dx / distance;
            const ny = dy / distance;
            
            const relativeVelocityX = asteroid2.velocity.x - asteroid1.velocity.x;
            const relativeVelocityY = asteroid2.velocity.y - asteroid1.velocity.y;
            
            const speed = relativeVelocityX * nx + relativeVelocityY * ny;
            
            if (speed > 0) return;
            
            const restitution = 0.8;
            const impulse = 2 * speed / 2 * restitution;
            
            asteroid1.velocity.x += impulse * nx;
            asteroid1.velocity.y += impulse * ny;
            asteroid2.velocity.x -= impulse * nx;
            asteroid2.velocity.y -= impulse * ny;
            
            const overlap = asteroid1.size + asteroid2.size - distance;
            const separationX = nx * overlap * 0.5;
            const separationY = ny * overlap * 0.5;
            
            asteroid1.x -= separationX;
            asteroid1.y -= separationY;
            asteroid2.x += separationX;
            asteroid2.y += separationY;
        }
    }
    
    handleAsteroidHit(asteroid) {
        if (asteroid.data.type === 'link') {
            window.open(asteroid.data.content, '_blank');
        } else {
            this.showSidebar(asteroid.data.content);
        }
    }
    
    showSidebar(content) {
        this.sidebar.classList.add('open');
        this.gameContainer.classList.add('sidebar-open');
        this.startTypewriter(content);
    }
    
    startTypewriter(htmlContent) {
        this.contentArea.innerHTML = '';
        this.typewriterHtml = this.processHtmlForTypewriter(htmlContent);
        this.typewriterIndex = 0;
        this.typewriterActive = true;
    }
    
    processHtmlForTypewriter(html) {
        return html
            .replace(/<h3>/g, '<h3 style="color: #00ff00; font-family: \'Courier New\', monospace; font-size: 1.2rem; margin-bottom: 1rem;">')
            .replace(/<p>/g, '<p style="color: #00ff00; font-family: \'Courier New\', monospace; line-height: 1.4; margin-bottom: 1rem;">')
            .replace(/<ul>/g, '<ul style="color: #00ff00; font-family: \'Courier New\', monospace; margin-bottom: 1rem;">')
            .replace(/<li>/g, '<li style="color: #00ff00; font-family: \'Courier New\', monospace;">')
            .replace(/<strong>/g, '<strong style="color: #00ff00;">')
            .replace(/<br>/g, '<br>');
    }
    
    updateTypewriter() {
        if (!this.typewriterActive) return;
        
        if (this.typewriterIndex < this.typewriterHtml.length) {
            let currentHtml = this.typewriterHtml.substring(0, this.typewriterIndex + 1);
            
            if (currentHtml.endsWith('<')) {
                const nextTagEnd = this.typewriterHtml.indexOf('>', this.typewriterIndex);
                if (nextTagEnd !== -1) {
                    currentHtml = this.typewriterHtml.substring(0, nextTagEnd + 1);
                    this.typewriterIndex = nextTagEnd;
                }
            }
            
            this.contentArea.innerHTML = currentHtml + '<span class="typewriter-cursor"></span>';
            this.typewriterIndex++;
            
            setTimeout(() => this.updateTypewriter(), this.typewriterSpeed);
        } else {
            this.contentArea.innerHTML = this.typewriterHtml;
            this.typewriterActive = false;
        }
    }
    
    closeSidebar() {
        this.sidebar.classList.remove('open');
        this.gameContainer.classList.remove('sidebar-open');
        this.typewriterActive = false;
        this.asteroidRespawnTimer = Math.random() * 300 + 180;
    }
    
    createExplosion(x, y) {
        for (let i = 0; i < 8; i++) {
            this.particles.push(new Particle(x, y));
        }
    }
    
    render() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        this.starStreaks.forEach(streak => streak.render(this.ctx, this.asteroids));
        
        if (this.respawnTimer === 0) {
            this.ship.render(this.ctx);
        }
        this.bullets.forEach(bullet => bullet.render(this.ctx));
        this.asteroids.forEach(asteroid => asteroid.render(this.ctx));
        this.particles.forEach(particle => particle.render(this.ctx));
    }
    
    gameLoop() {
        this.update();
        this.render();
        this.updateTypewriter();
        requestAnimationFrame(() => this.gameLoop());
    }
}

class Ship {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.velocity = { x: 0, y: 0 };
        this.thrust = 0.3;
        this.friction = 0.98;
        this.size = 8;
        this.destroyed = false;
    }
    
    update(keys) {
        if (this.destroyed) return;
        
        if (keys['ArrowLeft']) this.angle -= 0.1;
        if (keys['ArrowRight']) this.angle += 0.1;
        
        if (keys['ArrowUp']) {
            this.velocity.x += Math.cos(this.angle) * this.thrust;
            this.velocity.y += Math.sin(this.angle) * this.thrust;
        }
        
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
        
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        
        if (this.x < 0) this.x = 800;
        if (this.x > 800) this.x = 0;
        if (this.y < 0) this.y = 600;
        if (this.y > 600) this.y = 0;
    }
    
    shoot(bullets) {
        if (this.destroyed) return;
        
        const bullet = new Bullet(
            this.x + Math.cos(this.angle) * this.size,
            this.y + Math.sin(this.angle) * this.size,
            this.angle
        );
        bullets.push(bullet);
    }
    
    collidesWith(asteroid) {
        if (this.destroyed) return false;
        
        const dx = this.x - asteroid.x;
        const dy = this.y - asteroid.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.size + asteroid.size;
    }
    
    destroy() {
        this.destroyed = true;
    }
    
    respawn(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.velocity = { x: 0, y: 0 };
        this.destroyed = false;
    }
    
    render(ctx) {
        if (this.destroyed) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.size, 0);
        ctx.lineTo(-this.size, -this.size / 2);
        ctx.lineTo(-this.size / 2, 0);
        ctx.lineTo(-this.size, this.size / 2);
        ctx.closePath();
        ctx.stroke();
        
        ctx.restore();
    }
}

class Bullet {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: Math.cos(angle) * 8,
            y: Math.sin(angle) * 8
        };
        this.size = 2;
    }
    
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
    
    isOffScreen(width, height) {
        return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
    }
    
    collidesWith(asteroid) {
        const dx = this.x - asteroid.x;
        const dy = this.y - asteroid.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.size + asteroid.size;
    }
    
    render(ctx) {
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Asteroid {
    constructor(x, y, data) {
        this.x = x;
        this.y = y;
        this.data = data;
        this.size = this.calculateSize();
        this.angle = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
        this.velocity = {
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5
        };
        this.points = this.generatePoints();
    }
    
    calculateSize() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = '14px Orbitron';
        
        const label = this.data.label;
        const textWidth = ctx.measureText(label).width;
        
        const baseSize = Math.max(40, textWidth * 0.8 + 20);
        const randomVariation = Math.random() * 10 - 5;
        
        return baseSize + randomVariation;
    }
    
    generatePoints() {
        const points = [];
        const numPoints = 8 + Math.floor(Math.random() * 4);
        for (let i = 0; i < numPoints; i++) {
            const angle = (i / numPoints) * Math.PI * 2;
            const radius = this.size * (0.7 + Math.random() * 0.3);
            points.push({
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
            });
        }
        return points;
    }
    
    update(ship) {
        if (ship && !ship.destroyed) {
            const dx = ship.x - this.x;
            const dy = ship.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 0) {
                const gravitationalForce = 0.0002;
                const forceX = (dx / distance) * gravitationalForce;
                const forceY = (dy / distance) * gravitationalForce;
                
                this.velocity.x += forceX;
                this.velocity.y += forceY;
            }
        }
        
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.angle += this.rotationSpeed;
        
        if (this.x < -this.size) this.x = 800 + this.size;
        if (this.x > 800 + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = 600 + this.size;
        if (this.y > 600 + this.size) this.y = -this.size;
    }
    
    collidesWith(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.size + other.size;
    }
    
    render(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        this.points.forEach((point, index) => {
            if (index === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        });
        ctx.closePath();
        ctx.stroke();
        
        ctx.fillStyle = '#fff';
        ctx.font = '14px Orbitron';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const label = this.data.label;
        ctx.fillText(label, 0, 0);
        
        ctx.restore();
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: (Math.random() - 0.5) * 6,
            y: (Math.random() - 0.5) * 6
        };
        this.life = 30;
        this.maxLife = 30;
        this.size = Math.random() * 3 + 1;
    }
    
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.x *= 0.98;
        this.velocity.y *= 0.98;
        this.life--;
    }
    
    render(ctx) {
        const alpha = this.life / this.maxLife;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * alpha, 0, Math.PI * 2);
        ctx.fill();
    }
}

class StarStreak {
    constructor(canvasWidth, canvasHeight) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * -canvasHeight;
        this.length = Math.random() * 30 + 10;
        this.speed = Math.random() * 3 + 2;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.width = Math.random() * 1.5 + 0.5;
    }
    
    update() {
        this.y += this.speed;
    }
    
    render(ctx, asteroids = []) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = this.width;
        
        // Check if streak intersects with any asteroid
        const streakSegments = this.getVisibleSegments(asteroids);
        
        streakSegments.forEach(segment => {
            ctx.beginPath();
            ctx.moveTo(this.x, segment.start);
            ctx.lineTo(this.x, segment.end);
            ctx.stroke();
        });
        
        ctx.restore();
    }
    
    getVisibleSegments(asteroids) {
        const streakStart = this.y;
        const streakEnd = this.y + this.length;
        
        // Start with the full streak as one segment
        let currentSegments = [{ start: streakStart, end: streakEnd }];
        
        // For each asteroid, cut out the parts that would be behind it
        asteroids.forEach(asteroid => {
            const newSegments = [];
            
            currentSegments.forEach(segment => {
                // Check if streak intersects with asteroid
                const dx = this.x - asteroid.x;
                const dy = (segment.start + segment.end) / 2 - asteroid.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < asteroid.size) {
                    // Calculate the vertical range where the streak is blocked
                    const verticalDistance = Math.sqrt(Math.max(0, asteroid.size * asteroid.size - dx * dx));
                    const blockStart = asteroid.y - verticalDistance;
                    const blockEnd = asteroid.y + verticalDistance;
                    
                    // Split the segment around the blocked area
                    if (segment.start < blockStart && blockStart < segment.end) {
                        // Add the part before the block
                        if (segment.start < blockStart) {
                            newSegments.push({ start: segment.start, end: Math.min(blockStart, segment.end) });
                        }
                        // Add the part after the block
                        if (blockEnd < segment.end) {
                            newSegments.push({ start: Math.max(blockEnd, segment.start), end: segment.end });
                        }
                    } else if (!(blockStart <= segment.start && segment.end <= blockEnd)) {
                        // Segment is not completely blocked, keep it
                        newSegments.push(segment);
                    }
                    // If segment is completely blocked, don't add it
                } else {
                    // No intersection, keep the segment
                    newSegments.push(segment);
                }
            });
            
            currentSegments = newSegments;
        });
        
        return currentSegments;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Game();
});