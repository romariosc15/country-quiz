import { getCountries } from '../services'

export const generateQuestions = async (totalQuestions) => {
    const response = await getCountries()

    const questions = Array.from(Array(totalQuestions).keys()).map(() => {
        const randomOptions = Array.from(Array(4).keys()).map(() => {
            const randomIndex = Math.floor((Math.random() * response.data.length) + 1)
            return {
                capital: response.data[randomIndex].capital[0],
                country: response.data[randomIndex].name.common
            }
        })
        let randomQuestionIndex = Math.floor((Math.random() * 4) + 1);
        return {
            question: `Which country is ${randomOptions[randomQuestionIndex - 1].country} the capital?`,
            options: randomOptions,
            answer: randomOptions[randomQuestionIndex - 1].capital,
        }
    })
    return questions
}