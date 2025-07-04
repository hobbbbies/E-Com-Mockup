import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from "@testing-library/user-event";

import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';

vi.mock('react-router-dom', () => ({
  useOutletContext: () => ({ 
    setCartItems: () => {} // Empty callback function
  })
}));

describe('Hero', () => {
    it("main image should successuflly load", () => {
        render(<Hero />);

        const image = screen.getByAltText("Van with tent in a desert");
    
        expect(image).toHaveAttribute('src');
        expect(image.getAttribute('src')).not.toBe('');
    });
})

describe('Products', () => {
    it('products successfully load in', async () => {
        render(<Products />);

        await waitFor(() => {
            expect(screen.queryByText('Loading products...')).not.toBeInTheDocument();
        })

        const cards = screen.getAllByRole('cardItem');

        expect(cards.length).toBeGreaterThan(0);
    });
});

