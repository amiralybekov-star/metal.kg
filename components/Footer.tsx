import Link from 'next/link';
import WhatsAppIcon from './WhatsAppIcon';
import WhatsAppLink from './WhatsAppLink';
import PhoneLink from './PhoneLink';
import { ADDRESS, PHONES, WORK_HOURS } from '@/data/contacts';
import { navCategories } from '@/data/catalog';
import { CONTENT_UPDATED, FOUNDING_YEAR } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center text-blue-900 text-3xl font-bold">
                Р
              </div>
              <div className="text-white font-bold text-xl">ИП Райымжанов</div>
            </div>
            <p className="text-sm">Производство металлоизделий в Бишкеке с {FOUNDING_YEAR} года.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Продукция</h4>
            <ul className="space-y-2 text-sm">
              {navCategories.map((category) => (
                <li key={category.id}>
                  <Link href={`/catalog/${category.id}`} className="hover:text-white">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <address className="space-y-3 text-sm not-italic">
              {PHONES.map((phone) => (
                <div key={phone.tel}>
                  <PhoneLink tel={phone.tel} source="footer" className="hover:text-white">
                    {phone.display}
                  </PhoneLink>
                </div>
              ))}
              <div>
                {ADDRESS.street}, {ADDRESS.city}
              </div>
              <div>{WORK_HOURS}</div>
            </address>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Мы в мессенджерах</h4>
            <WhatsAppLink
              source="footer"
              ariaLabel="Написать в WhatsApp"
              className="inline-flex items-center gap-3 hover:text-green-500 transition-colors"
            >
              <WhatsAppIcon className="w-9 h-9" />
              <span className="text-sm">WhatsApp</span>
            </WhatsAppLink>
          </div>
        </div>

        <div className="text-center text-xs pt-12 border-t border-slate-800 mt-12">
          © {new Date().getFullYear()} ИП Райымжанов. Все права защищены.
          <span className="block mt-2">
            Информация обновлена:{' '}
            <time dateTime={CONTENT_UPDATED}>
              {new Date(CONTENT_UPDATED).toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                timeZone: 'UTC',
              })}
            </time>
          </span>
        </div>
      </div>
    </footer>
  );
}
