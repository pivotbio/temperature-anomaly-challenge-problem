/**
 * Setup and manage teh MSW for mocking HTTP(S) request over the network in tests
 */

import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { rest } from 'msw';
import { afterEach, afterAll, beforeAll } from 'vitest';

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server, rest };
