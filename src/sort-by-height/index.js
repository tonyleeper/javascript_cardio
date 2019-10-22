module.exports = data => {
    const people = data.filter(value => value !== -1).sort((a, b) => a - b)
    return data.map(value => (value === -1 ? -1 : people.shift()))
}
