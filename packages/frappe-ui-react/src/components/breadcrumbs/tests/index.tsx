import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumbs from '../breadcrumbs';
import * as router from 'react-router';

const BrowserRouter = router.BrowserRouter;

describe('Breadcrumbs', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(router, 'useNavigate').mockReturnValue(mockNavigate);

    it('renders breadcrumb items correctly', () => {
        const items = [
            { label: 'Home', route: '/' },
            { label: 'Products', route: '/products' },
            { label: 'Details', route: '/products/details' }
        ];

        render(
            <BrowserRouter>
                <Breadcrumbs items={items} />
            </BrowserRouter>
        );

        items.forEach(item => {
            expect(screen.getByText(item.label)).toBeInTheDocument();
        });
    });

    it('calls onClick handler when clicked', () => {
        const onClickMock = jest.fn();
        const items = [
            { label: 'Home', onClick: onClickMock }
        ];

        render(
            <BrowserRouter>
                <Breadcrumbs items={items} />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText('Home'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('navigates when route is provided', () => {
        const items = [
            { label: 'Home', route: '/home' }
        ];

        render(
            <BrowserRouter>
                <Breadcrumbs items={items} />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText('Home'));
        expect(mockNavigate).not.toHaveBeenCalled(); // Link handles navigation
    });

    it('renders prefix and suffix icons', () => {
        const items = [
            { 
                label: 'Home',
                prefixIcon: <span data-testid="prefix">prefix</span>,
                suffixIcon: <span data-testid="suffix">suffix</span>
            }
        ];

        render(
            <BrowserRouter>
                <Breadcrumbs items={items} />
            </BrowserRouter>
        );

        expect(screen.getByTestId('prefix')).toBeInTheDocument();
        expect(screen.getByTestId('suffix')).toBeInTheDocument();
    });
});