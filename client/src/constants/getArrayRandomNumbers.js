export const getArrayRandomNumbers = async (photosLength, urlsLength) => {
    const randomNumbers = []

    while (randomNumbers.length < photosLength) {
        const randomNumber = Math.floor(Math.random() * urlsLength)
        !randomNumbers.includes(randomNumber) && randomNumbers.push(randomNumber)
    }

    return randomNumbers
}
