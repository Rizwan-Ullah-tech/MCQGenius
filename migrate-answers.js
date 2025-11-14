import fs from 'fs';
import path from 'path';

const semesterFiles = ['semester1.js', 'semester2.js', 'semester3.js'];

function migrateFile(filename) {
    const filePath = path.join('data', filename);
    console.log(`\nProcessing ${filename}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modifiedCount = 0;
    let errorCount = 0;
    
    const regex = /{\s*question:\s*"([^"]*(?:\\.[^"]*)*)"\s*,\s*options:\s*\[((?:[^[\]]*|\[[^\]]*\])*)\]\s*,\s*answer:\s*"([^"]*(?:\\.[^"]*)*)"\s*}/gs;
    
    content = content.replace(regex, (match, question, optionsStr, answer) => {
        try {
            const optionsArray = optionsStr.match(/"([^"]*(?:\\.[^"]*)*)"/g).map(opt => opt.slice(1, -1));
            
            const correctIndex = optionsArray.findIndex(opt => opt === answer);
            
            if (correctIndex === -1) {
                console.error(`  ⚠️  Could not find answer "${answer.substring(0, 50)}..." in options for question: "${question.substring(0, 50)}..."`);
                errorCount++;
                return match;
            }
            
            modifiedCount++;
            
            const optionsFormatted = optionsArray.map(opt => `"${opt}"`).join(', ');
            return `{
        question: "${question}",
        options: [${optionsFormatted}],
        correctAnswer: ${correctIndex}
      }`;
        } catch (e) {
            console.error(`  ❌ Error processing: ${e.message}`);
            errorCount++;
            return match;
        }
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ Converted ${modifiedCount} questions`);
    if (errorCount > 0) {
        console.log(`  ⚠️  ${errorCount} questions had errors`);
    }
}

console.log('=== MCQ Data Migration: answer → correctAnswer ===\n');

semesterFiles.forEach(file => {
    const filePath = path.join('data', file);
    if (fs.existsSync(filePath)) {
        migrateFile(file);
    } else {
        console.log(`Skipping ${file} (not found)`);
    }
});

console.log('\n=== Migration Complete! ===');
