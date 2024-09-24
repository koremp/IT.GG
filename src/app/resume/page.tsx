import Link from 'next/link';

import { ISite } from '@/interfaces/ISite';
import { sites } from '@/fixtures/sites';

export default function ResumePage() {

  return (
    <div>
      <h1>Resume Page</h1>
      <div>
        <ul>
          {
            sites.map((site: ISite) => (
              <Link href={'/resume/' + site.href} key={site.name}>
                <li>
                  {site.name}
                </li>
              </Link>
            ))
          }
        </ul>
      </div>
    </div>
  );
}