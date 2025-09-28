function insertFooter() {
    const footer = `
    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-xl font-semibold mb-4">Contact</h3>
                    <p class="mb-2">Phone: (555) 123-4567</p>
                    <p>Email: contact@mindsoul.com</p>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4">Connect</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="hover:text-primary transition-colors">
                            <img src="assets/icons/instagram.svg" alt="Instagram" class="w-6 h-6">
                        </a>
                        <a href="#" class="hover:text-primary transition-colors">
                            <img src="assets/icons/tiktok.svg" alt="TikTok" class="w-6 h-6">
                        </a>
                        <a href="#" class="hover:text-primary transition-colors">
                            <img src="assets/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6">
                        </a>
                    </div>
                </div>
                <div>
                    <p class="text-sm">&copy; 2025 Web & We Counseling. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>`;
    
    document.getElementById('footer').innerHTML = footer;
}
