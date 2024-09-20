const itemsPerPage = 20; // عدد الصور في الصفحة الواحدة
let currentPage = 1;

const gallery = document.getElementById('gallery');
const newLocal = 'C:\\Users\\NOUR SOFT\\Desktop\\movies website\\Movie-Website\\Movie Website\\images\\movies\\captain-marvel.png';
const images = [
    { src: 'images/movies/end-game.jpg', description: 'Beautiful Landscape 1', text: 'strangier thing' },
    { src: 'images\\movies\\blood-shot.jpg', description: 'Beautiful Landscape 2', text: 'black banner' },
    { src: 'images\\movies\\call.jpg', description: 'Beautiful Landscape 3', text: 'Gatg vol3' },
    { src: 'images\\movies\\captain-marvel.png', description: 'Beautiful Landscape 4', text: 'john wick' },
    { src: 'images\\movies\\end-game.jpg', description: 'Beautiful Landscape 5', text: 'transformer' },
    { src: 'images\\movies\\hunter-killer.jpg', description: 'Beautiful Landscape 6', text: 'Mandalorian' },
    { src: 'images\\movies\\insidious.jpg', description: 'Beautiful Landscape 7', text: 'Penthehouse' },
    { src: 'images\\movies\\love-roise.jpg', description: 'Beautiful Landscape 8', text: 'star trek' },
    { src: 'images\\movies\\resident-evil.jpg', description: 'Beautiful Landscape 9', text: 'strangier thing' },
    { src: 'images\\movies\\theatre-dead.jpg', description: 'Beautiful Landscape 10', text: 'super girl' },
    { src: 'images\\movies\\transformer.jpg', description: 'Beautiful Landscape 11', text: 'the falcon webp' },
    { src: 'images\\series\\penthouses.jpg', description: 'Beautiful Landscape 12', text: 'wanda' },
    { src: 'images\\series\\star-trek.jpg', description: 'Beautiful Landscape 13', text: 'Batman' },
    { src: 'images\\series\\stranger-thing.jpg', description: 'Beautiful Landscape 14', text: 'bloodshoot' },
    { src: 'images\\series\\the-falcon.webp', description: 'Beautiful Landscape 15', text: 'call' },
    { src: 'images\\cartoons\\coco.jpg', description: 'Beautiful Landscape 16', text: 'hunter-killer' },
   
    // First repetition
    { src: 'images\\movies\\bat-man.jpg', description: 'Beautiful Landscape 17', text: 'ِAvengers' },
    { src: 'images\\movies\\blood-shot.jpg', description: 'Beautiful Landscape 18', text: 'black banner' },
    { src: 'images\\movies\\call.jpg', description: 'Beautiful Landscape 19', text: 'Gatg vol3' },
    { src: 'images\\movies\\captain-marvel.png', description: 'Beautiful Landscape 20', text: 'john wick' },
    { src: 'images\\movies\\end-game.jpg', description: 'Beautiful Landscape 21', text: 'transformer' },
    { src: 'images\\movies\\hunter-killer.jpg', description: 'Beautiful Landscape 22', text: 'Mandalorian' },
    { src: 'images\\movies\\insidious.jpg', description: 'Beautiful Landscape 23', text: 'Penthehouse' },
    { src: 'images\\movies\\love-roise.jpg', description: 'Beautiful Landscape 24', text: 'star trek' },
    { src: 'images\\movies\\resident-evil.jpg', description: 'Beautiful Landscape 25', text: 'strangier thing' },
    { src: 'images\\movies\\theatre-dead.jpg', description: 'Beautiful Landscape 26', text: 'super girl' },
    { src: 'images\\movies\\transformer.jpg', description: 'Beautiful Landscape 27', text: 'the falcon webp' },
    { src: 'images\\series\\penthouses.jpg', description: 'Beautiful Landscape 28', text: 'wanda' },
    { src: 'images\\series\\star-trek.jpg', description: 'Beautiful Landscape 29', text: 'Batman' },
    { src: 'images\\series\\stranger-thing.jpg', description: 'Beautiful Landscape 30', text: 'bloodshoot' },
    { src: 'images\\series\\the-falcon.webp', description: 'Beautiful Landscape 31', text: 'call' },
    { src: 'images\\cartoons\\coco.jpg', description: 'Beautiful Landscape 32', text: 'hunter-killer' },
    { src: 'images\\cartoons\\dragon.jpg', description: 'Beautiful Landscape 33', text: 'love-rose' },
    { src: 'images\\movies\\bat-man.jpg', description: 'Beautiful Landscape 34', text: 'ِAvengers' },
    { src: 'images\\movies\\blood-shot.jpg', description: 'Beautiful Landscape 35', text: 'black banner' },
    { src: 'images\\movies\\call.jpg', description: 'Beautiful Landscape 36', text: 'Gatg vol3' },
    { src: 'images\\movies\\captain-marvel.png', description: 'Beautiful Landscape 37', text: 'john wick' },
    { src: 'images\\movies\\end-game.jpg', description: 'Beautiful Landscape 39', text: 'transformer' },
    { src: 'images\\movies\\hunter-killer.jpg', description: 'Beautiful Landscape 40', text: 'Mandalorian' },
    { src: 'images\\movies\\insidious.jpg', description: 'Beautiful Landscape 41', text: 'Penthehouse' },
    { src: 'images\\movies\\love-roise.jpg', description: 'Beautiful Landscape 42', text: 'star trek' },
    { src: 'images\\movies\\resident-evil.jpg', description: 'Beautiful Landscape 43', text: 'strangier thing' },
    { src: 'images\\movies\\theatre-dead.jpg', description: 'Beautiful Landscape 44', text: 'super girl' },
    { src: 'images\\movies\\transformer.jpg', description: 'Beautiful Landscape 45', text: 'the falcon webp' },
    { src: 'images\\series\\penthouses.jpg', description: 'Beautiful Landscape 46', text: 'wanda' },
    { src: 'images\\series\\star-trek.jpg', description: 'Beautiful Landscape 47', text: 'Batman' },
    { src: 'images\\series\\stranger-thing.jpg', description: 'Beautiful Landscape 48', text: 'bloodshoot' },
    { src: 'images\\series\\the-falcon.webp', description: 'Beautiful Landscape 49', text: 'call' },
    { src: 'images\\cartoons\\coco.jpg', description: 'Beautiful Landscape 50', text: 'hunter-killer' },
    { src: 'images\\cartoons\\dragon.jpg', description: 'Beautiful Landscape 51', text: 'love-rose' },
    { src: 'images\\cartoons\\demon-slayer.jpg', description: 'Beautiful Landscape 52', text: 'resident' },
    { src: 'images\\cartoons\\your-name.jpg', description: 'Beautiful Landscape 53', text: 'transformer' },

    // First repetition
    { src: 'images\\movies\\bat-man.jpg', description: 'Beautiful Landscape 54', text: 'ِAvengers' },
    { src: 'images\\movies\\blood-shot.jpg', description: 'Beautiful Landscape 55', text: 'black banner' },
    { src: 'images\\movies\\call.jpg', description: 'Beautiful Landscape 56', text: 'Gatg vol3' },
    { src:'images\\movies\\call.jpg' , description: 'Beautiful Landscape 57', text: 'john wick' },
    { src: 'images\\movies\\end-game.jpg', description: 'Beautiful Landscape 58', text: 'transformer' },
    { src: 'images\\movies\\hunter-killer.jpg', description: 'Beautiful Landscape 59', text: 'Mandalorian' },
    { src: 'images\\movies\\insidious.jpg', description: 'Beautiful Landscape 60', text: 'Penthehouse' },
    { src: 'images\\movies\\love-roise.jpg', description: 'Beautiful Landscape 61', text: 'star trek' },
    { src: 'images\\movies\\resident-evil.jpg', description: 'Beautiful Landscape 62', text: 'strangier thing' },
    { src: 'images\\movies\\theatre-dead.jpg', description: 'Beautiful Landscape 63', text: 'super girl' },
    { src: 'images\\movies\\transformer.jpg', description: 'Beautiful Landscape 64', text: 'the falcon webp' },
    { src: 'images\\series\\penthouses.jpg', description: 'Beautiful Landscape 65', text: 'wanda' },
    { src: 'images\\series\\star-trek.jpg', description: 'Beautiful Landscape 66', text: 'Batman' },
    { src: 'images\\series\\stranger-thing.jpg', description: 'Beautiful Landscape 67', text: 'bloodshoot' },
    { src: 'images\\series\\the-falcon.webp', description: 'Beautiful Landscape 68', text: 'call' },
    { src: 'images\\cartoons\\coco.jpg', description: 'Beautiful Landscape 69', text: 'hunter-killer' },
    { src: 'images\\cartoons\\dragon.jpg', description: 'Beautiful Landscape 70', text: 'love-rose' },

    { src: 'images\\movies\\bat-man.jpg', description: 'Beautiful Landscape 71', text: 'ِAvengers' },
    { src: 'images\\movies\\blood-shot.jpg', description: 'Beautiful Landscape 72', text: 'black banner' },
    { src: 'images\\movies\\call.jpg', description: 'Beautiful Landscape 73', text: 'Gatg vol3' },
    { src: 'images\\movies\\captain-marvel.png', description: 'Beautiful Landscape 74', text: 'john wick' },
    { src: 'images\\movies\\end-game.jpg', description: 'Beautiful Landscape 75', text: 'transformer' },
    { src: 'images\\movies\\hunter-killer.jpg', description: 'Beautiful Landscape 76', text: 'Mandalorian' },
    { src: 'images\\movies\\insidious.jpg', description: 'Beautiful Landscape 77', text: 'Penthehouse' },
    { src: 'Movie Website\\images\\movies\\love-roise.jpg', description: 'Beautiful Landscape 78', text: 'star trek' },
    { src: 'images\\movies\\resident-evil.jpg', description: 'Beautiful Landscape 79', text: 'strangier thing' },
    { src: 'images\\movies\\theatre-dead.jpg', description: 'Beautiful Landscape 80', text: 'super girl' },
    { src: 'images\\movies\\transformer.jpg', description: 'Beautiful Landscape 81', text: 'the falcon webp' },
    { src: 'images\\series\\penthouses.jpg', description: 'Beautiful Landscape 82', text: 'wanda' },
    { src: 'images\\series\\star-trek.jpg', description: 'Beautiful Landscape 83', text: 'Batman' },
    { src: 'images\\series\\stranger-thing.jpg', description: 'Beautiful Landscape 84', text: 'bloodshoot' },
    { src: 'images\\series\\the-falcon.webp', description: 'Beautiful Landscape 85', text: 'call' },
    { src: 'images\\cartoons\\coco.jpg', description: 'Beautiful Landscape 86', text: 'hunter-killer' },
    { src: 'images\\cartoons\\dragon.jpg', description: 'Beautiful Landscape 87', text: 'love-rose' },
    { src: 'images\\cartoons\\demon-slayer.jpg', description: 'Beautiful Landscape 88', text: 'resident' },
    { src: 'images\\cartoons\\your-name.jpg', description: 'Beautiful Landscape 89', text: 'transformer' },
        { src: 'images\\movies\\bat-man.jpg', description: 'Beautiful Landscape 90', text: 'ِAvengers' },
        { src: 'images\\movies\\blood-shot.jpg', description: 'Beautiful Landscape 91', text: 'black banner' },
        { src: 'images\\movies\\call.jpg', description: 'Beautiful Landscape 92', text: 'Gatg vol3' },
        { src: 'images\\movies\\captain-marvel.png', description: 'Beautiful Landscape 93', text: 'john wick' },
        { src: 'images\\movies\\end-game.jpg', description: 'Beautiful Landscape 94', text: 'transformer' },
        { src: 'images\\movies\\hunter-killer.jpg', description: 'Beautiful Landscape 95', text: 'Mandalorian' },
        { src: 'images\\movies\\insidious.jpg', description: 'Beautiful Landscape 96', text: 'Penthehouse' },
        { src: 'images\\movies\\love-roise.jpg', description: 'Beautiful Landscape 97', text: 'star trek' },
        { src: 'images\\movies\\resident-evil.jpg', description: 'Beautiful Landscape 98', text: 'strangier thing' },
        { src: 'images\\movies\\theatre-dead.jpg', description: 'Beautiful Landscape 99', text: 'super girl' },
        { src: 'images\\movies\\transformer.jpg', description: 'Beautiful Landscape 100', text: 'the falcon webp' },
        { src: 'images\\series\\penthouses.jpg', description: 'Beautiful Landscape 101', text: 'wanda' },
        { src: 'images\\series\\star-trek.jpg', description: 'Beautiful Landscape 102', text: 'Batman' },
        { src: 'images\\series\\stranger-thing.jpg', description: 'Beautiful Landscape 103', text: 'bloodshoot' },
        { src: 'images\\series\\the-falcon.webp', description: 'Beautiful Landscape 104', text: 'call' },
        { src: 'images\\cartoons\\coco.jpg', description: 'Beautiful Landscape 105', text: 'hunter-killer' },
        { src: 'images\\cartoons\\dragon.jpg', description: 'Beautiful Landscape 106', text: 'love-rose' },
    
        { src: 'images\\movies\\bat-man.jpg', description: 'Beautiful Landscape 107', text: 'ِAvengers' },
        { src: 'images\\movies\\blood-shot.jpg', description: 'Beautiful Landscape 108', text: 'black banner' },
        { src: 'images\\movies\\call.jpg', description: 'Beautiful Landscape 109', text: 'Gatg vol3' },
        { src: 'images\\movies\\captain-marvel.png', description: 'Beautiful Landscape 110', text: 'john wick' },
        { src: 'images\\movies\\end-game.jpg', description: 'Beautiful Landscape 111', text: 'transformer' },
        { src: 'images\\movies\\hunter-killer.jpg', description: 'Beautiful Landscape 112', text: 'Mandalorian' },
        { src: 'images\\movies\\insidious.jpg', description: 'Beautiful Landscape 113', text: 'Penthehouse' },
        { src: 'images\\movies\\love-roise.jpg', description: 'Beautiful Landscape 114', text: 'star trek' },
        { src: 'images\\movies\\resident-evil.jpg', description: 'Beautiful Landscape 115', text: 'strangier thing' },
        { src: 'images\\movies\\theatre-dead.jpg', description: 'Beautiful Landscape 116', text: 'super girl' },
        { src: 'images\\movies\\transformer.jpg', description: 'Beautiful Landscape 117', text: 'the falcon webp' },
        { src: 'images\\series\\penthouses.jpg', description: 'Beautiful Landscape 118', text: 'wanda' },
        { src: 'images\\series\\star-trek.jpg', description: 'Beautiful Landscape 119', text: 'Batman' },
        { src: 'images\\series\\stranger-thing.jpg', description: 'Beautiful Landscape 120', text: 'bloodshoot' },
        ];
        
    
        function displayImages() {
            gallery.innerHTML = ''; // Remove previous images
    
            // Calculate start and end index for the current page
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const imagesToDisplay = images.slice(startIndex, endIndex);
    
            // Display images for the current page
            imagesToDisplay.forEach(image => {
                const imageDiv = document.createElement('div');
                imageDiv.classList.add('image-item');
                
                const imgElement = document.createElement('img');
                imgElement.src = image.src;
                imgElement.alt = image.description;
                
                // Add click event to redirect to the specified link
                imageDiv.addEventListener('click', () => {
                    window.location.href = 'LANDING.HTML';
                });
    
                const textOverlay = document.createElement('div');
                textOverlay.classList.add('text-overlay');
                textOverlay.textContent = image.text;
                
                const descriptionDiv = document.createElement('div');
                descriptionDiv.classList.add('description');
                descriptionDiv.innerHTML = `<p>${image.description}</p>`;
                
                imageDiv.appendChild(imgElement);
                imageDiv.appendChild(textOverlay);
                imageDiv.appendChild(descriptionDiv);
                gallery.appendChild(imageDiv);
            });
        }
    
        function nextPage() {
            const totalPages = Math.ceil(images.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                displayImages();
            }
        }
    
        function prevPage() {
            if (currentPage > 1) {
                currentPage--;
                displayImages();
            }
        }
    
        // Display images on page load
        displayImages();
  