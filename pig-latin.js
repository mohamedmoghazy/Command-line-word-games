class PigLatinTranslator
{
    constructor() { }

    static translateSentence(sentence)
    {
        const words = sentence.split(' ');
        const translatedWords = words.map(word => this.translateWord(word));
        return translatedWords.join(' ');
    }

    static translateWord(word)
    {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let firstIndex = -1;

        for (let i = 0; i < word.length; i++)
        {
            if (vowels.includes(word[i].toLowerCase()))
            {
                firstIndex = i;
                break;
            }
        }

        if (firstIndex === 0)
        {
            return word + 'yay';
        } else if (firstIndex > 0)
        {
            return word.slice(firstIndex) + word.slice(0, firstIndex) + 'ay';
        } else
        {
            return word + 'ay';
        }
    }

    static GetUserInput()
    {
        const readline = require('readline');

        const input = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        input.question('Enter a sentence to translate to Pig Latin: ', (sentence) =>
        {
            const translation = this.translateSentence(sentence);
            console.log('Pig Latin Translation:', translation);
            input.close();
        });
    }
}

PigLatinTranslator.GetUserInput();