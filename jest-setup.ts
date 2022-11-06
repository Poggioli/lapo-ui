import '@testing-library/jest-dom/extend-expect';
import { toHaveNoViolations } from 'jest-axe';

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
  }));

expect.extend(toHaveNoViolations);
