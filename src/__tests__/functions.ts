import { toUpperCaseFirsrLetter } from "../helpers/functions"

describe('toUpperCaseFirsrLetter', () => {
    it('Validate value', () => {
        expect(toUpperCaseFirsrLetter('string')).toBe('String')
        expect(toUpperCaseFirsrLetter('string')).toBe('String')
    })
    it('toUpperCaseFirsrLetter snapshot', () => {
        expect(toUpperCaseFirsrLetter('string')).toMatchSnapshot()
    })
})
