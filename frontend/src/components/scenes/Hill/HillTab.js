import React from 'react';
import EncryptDecryptTabs from '../../common/EncryptDecryptTabs';
import HillEncryptForm from './HillEncryptForm';
import HillDecryptForm from './HillDecryptForm';

export default function HillTab() {
  return <EncryptDecryptTabs EncryptComponent={<HillEncryptForm/>}
                             DecryptComponent={<HillDecryptForm/>}
  />;
}