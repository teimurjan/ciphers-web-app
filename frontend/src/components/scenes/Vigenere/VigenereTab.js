import React from 'react';
import EncryptDecryptTabs from '../../common/EncryptDecryptTabs';
import VigenereEncryptForm from './VigenereEncryptForm';
import VigenereDecryptForm from './VigenereDecryptForm';

export default function VigenereTab() {
  return <EncryptDecryptTabs EncryptComponent={<VigenereEncryptForm/>}
                             DecryptComponent={<VigenereDecryptForm/>}
  />;
}