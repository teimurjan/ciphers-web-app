import React from 'react';
import EncryptDecryptTabs from '../../common/EncryptDecryptTabs';
import CaesarEncryptForm from './CaesarEncryptForm';
import CaesarDecryptForm from './CaesarDecryptForm';

export default function CaesarTab() {
  return <EncryptDecryptTabs EncryptComponent={<CaesarEncryptForm/>}
                             DecryptComponent={<CaesarDecryptForm/>}
  />;
}