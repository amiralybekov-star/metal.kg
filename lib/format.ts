/** «5 ноября 2026» без «г.» и без сдвига часового пояса */
export function formatDate(iso: string): string {
  return new Date(iso)
    .toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .replace(/\s?г\.$/, '');
}
