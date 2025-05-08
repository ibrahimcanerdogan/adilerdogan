export default function Hakkimizda() {
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      role: "CEO & Kurucu",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Ayşe Demir",
      role: "Tasarım Direktörü",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Mehmet Kaya",
      role: "Teknik Direktör",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Akhisar Gözde Erkek Kuaförü
          </h1>
          <p className="text-xl text-gray-600">
            Adil & Baki Erdoğan
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Akhisar'ın merkezinde, yılların deneyimiyle hizmet veren Gözde Erkek Kuaförü, 
            Adil ve Baki Erdoğan kardeşlerin titizliği ve güler yüzüyle sizleri bekliyor! 
            Saç kesimi, sakal tıraşı, cilt bakımı ve modern stil uygulamalarıyla hijyenik 
            bir ortamda kaliteli bir hizmet sunuyoruz.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-gray-900 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Profesyonel Ekip</h3>
              <p className="text-gray-600">Profesyonel ve deneyimli ekibimizle kaliteli hizmet</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-gray-900 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Ortam</h3>
              <p className="text-gray-600">Hijyenik ve modern salon ortamında konforlu hizmet</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-gray-900 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Uygun Fiyat</h3>
              <p className="text-gray-600">Uygun fiyat politikası ile herkes için erişilebilir hizmet</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-gray-900 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">Müşteri memnuniyeti odaklı hizmet anlayışı</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-gray-900 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Merkezi Konum</h3>
              <p className="text-gray-600">Şehir merkezinde kolay ulaşılabilir konum</p>
            </div>
          </div>
        </div>

        {/* Service Philosophy Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Hizmet Anlayışımız
          </h2>
          <p className="text-lg text-gray-700">
            Randevuya gerek kalmadan hemen uğrayabilir, stilinizi profesyonellere emanet edebilirsiniz. 
            Kaliteli hizmet, uygun fiyat ve müşteri memnuniyetiyle fark yaratıyoruz. 
            Gözde Erkek Kuaförü – Akhisar'da stilin adresi!
          </p>
        </div>
      </div>
    </div>
  );
} 