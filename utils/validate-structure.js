// Structure Validation Utility
// Purpose: Validate that all file references are correct after refactoring
// This ensures Clean Code principle of maintaining working functionality

const fs = require('fs');
const path = require('path');

const BASE_DIR = process.cwd();

// Define expected file structure
const EXPECTED_STRUCTURE = {
    'assets/images/logos/PAVERS LOGO.PNG': 'file',
    'assets/images/services/': 'directory',
    'assets/images/gallery/': 'directory',
    'assets/images/flags/': 'directory',
    'assets/videos/': 'directory',
    'config/site-config.json': 'file',
    'config/pages-config.json': 'file',
    'sitemap.xml': 'file',
    'robots.txt': 'file',
    'index.html': 'file',
    'contact/index.html': 'file',
    'gallery/index.html': 'file',
    'our-services/index.html': 'file'
};

// Validation functions
function checkFileExists(filePath) {
    try {
        const fullPath = path.join(BASE_DIR, filePath);
        return fs.existsSync(fullPath);
    } catch (error) {
        return false;
    }
}

function validateStructure() {
    console.log('🔍 Validating Texas Pool & Pavers project structure...\n');

    let passed = 0;
    let failed = 0;

    for (const [filePath, type] of Object.entries(EXPECTED_STRUCTURE)) {
        const exists = checkFileExists(filePath);
        const status = exists ? '✅' : '❌';
        const typeLabel = type === 'directory' ? 'DIR' : 'FILE';

        console.log(`${status} ${typeLabel}: ${filePath}`);

        if (exists) {
            passed++;
        } else {
            failed++;
        }
    }

    console.log(`\n📊 Validation Results:`);
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📈 Success Rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);

    if (failed === 0) {
        console.log('\n🎉 All structure validations passed! Clean Code refactoring successful.');
    } else {
        console.log('\n⚠️ Some files/directories are missing. Check the failed items above.');
    }
}

// Run validation if called directly
if (require.main === module) {
    validateStructure();
}

module.exports = { validateStructure, checkFileExists };