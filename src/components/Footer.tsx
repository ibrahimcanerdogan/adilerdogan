'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/sources/logo.png"
                alt="Gözde Erkek Kuaförü Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">Gözde Erkek Kuaförü</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesyonel ekibimizle sizlere en iyi hizmeti sunuyoruz. Modern ve şık ortamımızda, uzman kuaförlerimizle hizmetinizdeyiz.
            </p>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-700 pb-2">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 text-sm">
                  Hürriyet Mahallesi 151. Sokak,<br />
                  Hilaliye Cd. No: 31,<br />
                  45200 Akhisar/Manisa
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+905435566620" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  0(543) 556 66 20
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <a href="https://wa.me/905435566620" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  WhatsApp ile İletişime Geçin
                </a>
              </div>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-700 pb-2">Hızlı Linkler</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => document.getElementById('anasayfa')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm text-left"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => document.getElementById('hizmetler')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm text-left"
              >
                Hizmetler
              </button>
              <button
                onClick={() => document.getElementById('hakkimizda')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm text-left"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => document.getElementById('galeri')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm text-left"
              >
                Galeri
              </button>
              <button
                onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm text-left"
              >
                İletişim
              </button>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Gözde Erkek Kuaförü. Tüm hakları saklıdır.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              <span>Yukarı Çık</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
} 