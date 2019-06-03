import 'regenerator-runtime/runtime';
import {tick} from 'svelte';
import {cleanup, fireEvent, render, wait} from '@testing-library/svelte';

import App from './App.svelte';

describe('App', () => {
  beforeEach(cleanup);

  test('should add a name', async () => {
    const {container, getByTestId, getByText} = render(App);
    let lis = container.querySelectorAll('li');
    expect(lis.length).toBe(0);

    const input = getByTestId('name-input');
    const text = 'Emil';
    fireEvent.input(input, {target: {value: text}});

    const addBtn = getByText('Add');
    expect(addBtn);
    fireEvent.click(addBtn);

    // Wait for Add button click to be processed.
    await tick();

    lis = container.querySelectorAll('li');
    expect(lis.length).toBe(1);
  });
});
