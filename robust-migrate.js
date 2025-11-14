import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function migrateSemesterFile(filename) {
    console.log(`\nProcessing ${filename}...`);
    
    const filepath = join(__dirname, 'data', filename);
    const { default: semesterData } = await import(`./data/${filename}`);
    
    let conversions = 0;
    let errors = [];
    
    function transformMCQ(mcq) {
        if (mcq.correctAnswer !== undefined) {
            return mcq;
        }
        
        if (mcq.answer === undefined) {
            return mcq;
        }
        
        const { question, options, answer } = mcq;
        
        if (!Array.isArray(options) || options.length !== 4) {
            errors.push(`Invalid options for question: ${question.substring(0, 50)}...`);
            return mcq;
        }
        
        const correctIndex = options.findIndex(opt => opt === answer);
        
        if (correctIndex === -1) {
            errors.push(`Answer "${answer.substring(0, 30)}..." not found for: ${question.substring(0, 50)}...`);
            return mcq;
        }
        
        conversions++;
        
        const { answer: _, ...rest } = mcq;
        return {
            ...rest,
            correctAnswer: correctIndex
        };
    }
    
    function traverseAndTransform(obj) {
        if (Array.isArray(obj)) {
            return obj.map(item => {
                if (item && typeof item === 'object' && 'question' in item && 'options' in item) {
                    return transformMCQ(item);
                }
                return traverseAndTransform(item);
            });
        } else if (obj && typeof obj === 'object') {
            const result = {};
            for (const [key, value] of Object.entries(obj)) {
                result[key] = traverseAndTransform(value);
            }
            return result;
        }
        return obj;
    }
    
    const transformed = traverseAndTransform(semesterData);
    
    const outputLines = [
        `const ${filename.replace('.js', 'Data')} = ${JSON.stringify(transformed, null, 2)
            .replace(/"([^"]+)":/g, '$1:')};`,
        '',
        `export default ${filename.replace('.js', 'Data')};`,
        ''
    ];
    
    fs.writeFileSync(filepath, outputLines.join('\n'), 'utf8');
    
    console.log(`  ✅ Converted ${conversions} questions`);
    if (errors.length > 0) {
        console.log(`  ⚠️  ${errors.length} errors:`);
        errors.slice(0, 5).forEach(err => console.log(`     ${err}`));
        if (errors.length > 5) {
            console.log(`     ... and ${errors.length - 5} more`);
        }
    }
    
    return { conversions, errors: errors.length };
}

console.log('=== Robust MCQ Data Migration ===\n');

const files = ['semester1.js', 'semester2.js', 'semester3.js'];
let totalConversions = 0;
let totalErrors = 0;

for (const file of files) {
    try {
        const { conversions, errors } = await migrateSemesterFile(file);
        totalConversions += conversions;
        totalErrors += errors;
    } catch (error) {
        console.error(`  ❌ Failed to process ${file}:`, error.message);
    }
}

console.log(`\n=== Migration Complete! ===`);
console.log(`Total conversions: ${totalConversions}`);
console.log(`Total errors: ${totalErrors}`);
