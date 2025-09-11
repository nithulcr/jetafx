"use client";

import React, { Suspense } from 'react';
import MarketsPageTabs from './MarketsPageTabs';

export default function MarketsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MarketsPageTabs />
    </Suspense>
  );
}
