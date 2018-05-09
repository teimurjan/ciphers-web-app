import React from 'react';
import EncryptDecryptTabs from '../../common/EncryptDecryptTabs';
import AffineEncryptForm from './AffineEncryptForm';
import AffineDecryptForm from './AffineDecryptForm';

export default function AffineTab() {
  return <EncryptDecryptTabs EncryptComponent={<AffineEncryptForm/>}
                             DecryptComponent={<AffineDecryptForm/>}
  />;
}