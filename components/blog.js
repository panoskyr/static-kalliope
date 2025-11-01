
export function renderPost(post) {
    return `<div class="blog-card">
            <img src="https://placehold.co/400x250" alt="${post.title}" class="w-full h-48 object-cover rounded-t-lg">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">${post.title}</h3>
                <p class="text-gray-600 mb-4">${post.description}</p>
                <a href="post.html?post=${post.filename}" class="text-primary hover:text-primary/80 font-medium">Read More →</a>
            </div>
        </div>`;
}
export function renderPosts(listEl, posts) {
    listEl.innerHTML = posts.map(renderPost).join('');
}

export function fetchAndRender(url, selector, limit) {
    const list = document.querySelector(selector);
    if (!list) return;
    fetch(url)
        .then(res => res.json())
        .then(posts => {
            if (typeof limit === 'number') posts = posts.slice(0, limit);
            renderPosts(list, posts);
        })
        .catch(() => {
            list.innerHTML = '<p class="text-center text-lg">No blog posts found.</p>';
        });
}