import { createElement, useState, useEffect, ReactNode } from 'react';

import { PageLayout } from './PageLayout'

interface IPageLayoutContainer {
  children: ReactNode;
  isAuth?: boolean;
}

export function PageLayoutContainer({
  children,
  isAuth = false,
}: IPageLayoutContainer) {
  return createElement(PageLayout, {
    children,
    isAuth,
  });
}
