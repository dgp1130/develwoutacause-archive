class Search {
	data() {
		return {
			layout: "layout.11ty.js"
		};
	}

	async render(data) {
		return `
            <h2>Search Tweets:</h2>
            <div class="tweets-search">
                <div id="search" class="tweets-search"></div>
                <link href="/_pagefind/pagefind-ui.css" rel="stylesheet">
                <script src="/_pagefind/pagefind-ui.js" onload="new PagefindUI({ element: '#search', showImages: false });"></script>
            </div>
            <script type="module">
                const query = new URL(location.href).searchParams.get('q');
                if (query) {
                    const input = document.querySelector('#search input');
                    input.value = query;
                    input.dispatchEvent(new Event('input'));
                }
            </script>
        `;
	}
}

module.exports = Search;
