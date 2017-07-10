/**
 * @jest-environment jsdom
 */

describe('block comments', function() {
  it('should work in TypeScript', function() {
    expect(global.document).toBeTruthy();
  });
});