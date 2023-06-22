import { LCDClient } from '../src';

const terra = new LCDClient({
  chainID: 'columbus-5',
  URL: 'https://lcd.terrarebels.net',
});

terra.utils.validatorsWithVotingPower().then(x => console.log(x));
