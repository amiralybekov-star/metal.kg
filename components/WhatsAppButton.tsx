export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/996706646264" target="_blank"
       className="fixed bottom-8 right-8 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 text-4xl">
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}