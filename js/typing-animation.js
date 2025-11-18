// Word-by-word typing animation for "Hi, I am Umer Zafar"
document.addEventListener('DOMContentLoaded', function() {
    // Wait for personal data to load
    setTimeout(function() {
        const greetingElement = document.querySelector('.greeting');
        const nameElement = document.querySelector('.name');
        
        if (!greetingElement) return;
        
        // Get the full text
        const greetingText = "Hi, I am";
        const nameText = nameElement && nameElement.textContent.trim() ? nameElement.textContent.trim() : "Umer Zafar";
        
        // Clear the elements
        greetingElement.textContent = '';
        if (nameElement) {
            nameElement.textContent = '';
            nameElement.style.opacity = '1';
        }
        
        // Split into words
        const greetingWords = greetingText.split(' ');
        const nameWords = nameText.split(' ');
        
        let wordIndex = 0;
        let currentText = '';
        
        // Function to type words one by one
        function typeWord() {
            if (wordIndex < greetingWords.length) {
                // Type greeting words
                currentText += (wordIndex > 0 ? ' ' : '') + greetingWords[wordIndex];
                greetingElement.textContent = currentText + ' ';
                wordIndex++;
                setTimeout(typeWord, 400); // 400ms delay between words
            } else if (wordIndex - greetingWords.length < nameWords.length) {
                // Type name words
                const nameIndex = wordIndex - greetingWords.length;
                const nameCurrentText = nameWords.slice(0, nameIndex + 1).join(' ');
                if (nameElement) {
                    nameElement.textContent = nameCurrentText;
                }
                wordIndex++;
                setTimeout(typeWord, 400);
            }
        }
        
        // Start typing after a small delay
        setTimeout(typeWord, 300);
    }, 100); // Wait for personal data to load
});
