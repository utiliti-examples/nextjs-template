import React from 'react';
import { ISidebarPageTemplate } from './SidebarPageTemplate';

const base: ISidebarPageTemplate = {
    sidebar: '<div>sidebar</div>' as unknown as React.ReactNode,
};

export const mockSidebarPageTemplateProps = {
    base,
};
