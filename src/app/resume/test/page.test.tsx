import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import ResumePage from '@/app/resume/page';

import { ISite } from '@/interfaces/ISite';
import { sites } from '@/fixtures/sites';

describe('ResumePage', () => {
  const renderPage = () => render(<ResumePage/>);

  it("renders 'Resume Page'.", () => {
    const { getByText } = renderPage();

    expect(getByText('Resume Page')).not.toBeNull();
  });

  it('renders site links with name and href.', () => {
    const { getByText, getByRole } = renderPage();

    const localSites: Array<ISite> = [...sites];

    localSites.forEach((site: ISite) => {
      expect(getByText(site.name)).not.toBeNull();
      expect(getByRole('link', { name: site.name })).toHaveAttribute('href', site.href);
    });
  });
});