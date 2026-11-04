'use client';

import { useState } from 'react';
import { waLink } from '@/data/contacts';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Здравствуйте! Заявка с сайта.
Имя: ${name}
Телефон: ${phone}
Сообщение: ${message}`;

    trackWhatsAppClick('contact_form');
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ваше имя"
        aria-label="Ваше имя"
        autoComplete="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-blue-600"
        required
      />
      <input
        type="tel"
        placeholder="Телефон"
        aria-label="Телефон"
        autoComplete="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-blue-600"
        required
      />
      <textarea
        placeholder="Ваше сообщение (можно указать, какие изделия интересуют)"
        aria-label="Ваше сообщение"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-blue-600"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-3xl font-semibold text-lg transition-colors"
      >
        Отправить заявку
      </button>

      <p className="text-sm text-slate-500 text-center">
        Нажимая «Отправить заявку», вы переходите в WhatsApp — сообщение откроется уже готовым.
      </p>
    </form>
  );
}
