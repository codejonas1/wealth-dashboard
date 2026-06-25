import { renderHook, act } from '@testing-library/react'
import { useDebounce } from './useDebounce'

describe('useDebounce - basic', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it('should return the value immediately', () => {
        const { result } = renderHook(() => useDebounce('hello', 300))

        expect(result.current).toBe('hello')
    })

    it('should update value after delay', () => {
        const { result, rerender } = renderHook(
            ({ value }) => useDebounce(value, 300),
            { initialProps: { value: 'hello' } }
        )

        rerender({ value: 'world' })

        expect(result.current).toBe('hello')

        act(() => {
            jest.advanceTimersByTime(300)
        })

        expect(result.current).toBe('world')
    })

    it('should cancel previous timer if value changes again', () => {
        const { result, rerender } = renderHook(
            ({ value }) => useDebounce(value, 300),
            { initialProps: { value: 'a' } }
        )

        rerender({ value: 'b' })
        act(() => {
            jest.advanceTimersByTime(100)
        })
        expect(result.current).toBe('a')

        rerender({ value: 'c' })
        act(() => {
            jest.advanceTimersByTime(100)
        })
        expect(result.current).toBe('a')

        act(() => {
            jest.advanceTimersByTime(300)
        })
        expect(result.current).toBe('c')
    })
})