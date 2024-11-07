'use client'

import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';

export function Switcher() {
  const [value, setValue] = useState('Client');

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      data={['Client','Contractor']}
    />
  );
}