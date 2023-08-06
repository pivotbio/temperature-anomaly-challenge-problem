import './msw';
import { vi } from 'vitest';

vi.mock('use-debounce', () => ({
  useDebounce: (value) => [value]
}));
