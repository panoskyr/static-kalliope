function insertHeader() {
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const linkPrefix = isIndexPage ? '#' : 'index.html#';
    const homeLink = isIndexPage ? '#' : 'index.html';
    
    const header = `
    <header class="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <a href="${homeLink}" class="text-2xl font-semibold text-primary">Web & We</a>
                
                <!-- Mobile Menu Button -->
                <button id="menuBtn" class="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path class="block" id="menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        <path class="hidden" id="menuClose" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-8">
                    <a href="${linkPrefix}home" class="nav-link">Home</a>
                    <a href="${linkPrefix}services" class="nav-link">Services</a>
                    <a href="${linkPrefix}about" class="nav-link">About</a>
                    <a href="${linkPrefix}blog" class="nav-link">Blog</a>
                    <a href="${linkPrefix}book" class="btn-primary">Κλέιστε Ραντεβού</a>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <div id="mobileMenu" class="hidden lg:hidden mt-4 pb-4">
                <div class="flex flex-col items-center space-y-4">
                    <a href="${linkPrefix}home" class="nav-link">Home</a>
                    <a href="${linkPrefix}services" class="nav-link">Services</a>
                    <a href="${linkPrefix}about" class="nav-link">About</a>
                    <a href="${linkPrefix}blog" class="nav-link">Blog</a>
                    <a href="${linkPrefix}book" class="nav-link">Κλείστε Ραντεβού</a>
                </div>
            </div>
        </nav>
    </header>`;
    
    document.getElementById('header').innerHTML = header;
    
    // Initialize mobile menu functionality
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuOpen.classList.toggle('hidden');
        menuClose.classList.toggle('hidden');
    });
}
