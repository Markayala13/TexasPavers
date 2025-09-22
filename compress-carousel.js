const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function compressCarouselImages() {
    const picDir = './pic';
    const outputDir = './pic-optimized';

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    // Get all PNG files from pic directory
    const files = fs.readdirSync(picDir).filter(file => file.endsWith('.PNG'));

    console.log(`Found ${files.length} PNG files to compress`);

    for (const file of files) {
        const inputPath = path.join(picDir, file);
        const outputPath = path.join(outputDir, file.replace('.PNG', '.webp'));

        try {
            const stats = fs.statSync(inputPath);
            console.log(`Processing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);

            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);

            const newStats = fs.statSync(outputPath);
            const compression = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);
            console.log(`✓ Compressed to ${(newStats.size / 1024).toFixed(1)} KB (${compression}% reduction)`);
        } catch (error) {
            console.error(`Error processing ${file}:`, error.message);
        }
    }

    console.log('\nCompression complete!');
}

compressCarouselImages().catch(console.error);