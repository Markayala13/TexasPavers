// HTML Formatter Utility
// Purpose: Format minified HTML files for better readability
// This helps with Clean Code principles by making the code more maintainable

const fs = require('fs');
const path = require('path');

function formatHTML(htmlContent) {
    // Add line breaks after major HTML elements for readability
    return htmlContent
        .replace(/></g, '>\n<')
        .replace(/(<head[^>]*>)/g, '$1\n  ')
        .replace(/(<\/head>)/g, '\n$1')
        .replace(/(<body[^>]*>)/g, '$1\n  ')
        .replace(/(<\/body>)/g, '\n$1')
        .replace(/(<script[^>]*>)/g, '\n  $1')
        .replace(/(<\/script>)/g, '$1\n')
        .replace(/(<meta[^>]*\/>)/g, '  $1\n')
        .replace(/(<link[^>]*\/>)/g, '  $1\n')
        .replace(/(<title[^>]*>)/g, '  $1')
        .replace(/(<\/title>)/g, '$1\n');
}

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatHTML };
}