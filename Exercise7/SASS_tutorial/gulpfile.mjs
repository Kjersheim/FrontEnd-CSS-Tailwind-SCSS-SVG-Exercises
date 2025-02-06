import { src, dest, watch, series } from 'gulp';
import { exec } from 'child_process';
import purgecss from 'gulp-purgecss'; // Import gulp-purgecss
import sourcemaps from 'gulp-sourcemaps';

// Building the styles to css through the pipe/Compile
function buildStyles() {
    console.log("Building styles...");
    return new Promise((resolve, reject) => {
        exec('sass shinobi/index.scss:css/index.css', { stdio: 'inherit' }, (error) => {
            if (error) {
                console.error(`exec error: ${error}`);
                reject(error);
            } else {
                // After Sass has compiled, run PurgeCSS
                src('css/index.css') // Source the compiled CSS file
                    .pipe(purgecss({ content: ['*.html'] })) // Purge unused CSS based on HTML
                    .pipe(dest('css')); // Output the purged CSS
                resolve(); // Resolve the promise after processing
            }
        });
    });
}

// Watch and run BuildStyles automatically
function watchTask() {
    watch(['shinobi/**/*.scss','*.html'], buildStyles); // Watch for changes and call buildStyles
}

export default series(buildStyles, watchTask); // Export default task
