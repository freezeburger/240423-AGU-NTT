import { ToPrintableAddressPipe } from './to-printable-address.pipe';

describe('ToPrintableAddressPipe', () => {
  it('create an instance', () => {
    const pipe = new ToPrintableAddressPipe();
    expect(pipe).toBeTruthy();
  });
});
