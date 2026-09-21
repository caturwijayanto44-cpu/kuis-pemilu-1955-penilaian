/* ============================================================
   BANK SOAL SEJARAH KELAS XII - FASE F - SEMESTER 1
   MATERI: PEMILU 1955 - TONGGAK DEMOKRASI DALAM SEJARAH INDONESIA
   TOTAL: 60 SOAL PILIHAN GANDA, 5 OPSI (A-E)
   Kunci jawaban telah disebar agar tidak menumpuk pada satu posisi.
   ============================================================ */

const bankSoalBesar = [
  {
    q: "Pemilu 1955 memiliki kedudukan penting dalam sejarah politik Indonesia karena merupakan...",
    answers: [
      "Pemilu nasional pertama setelah Indonesia merdeka",
      "Pemilu terakhir pada masa Demokrasi Liberal",
      "Pemilu pertama untuk memilih presiden secara langsung",
      "Penghapusan lembaga perwakilan rakyat",
      "Pemilu pertama pada masa Orde Baru"
    ],
    correct: 0
  },
  {
    q: "Salah satu latar belakang utama diselenggarakannya Pemilu 1955 adalah keinginan pemerintah untuk...",
    answers: [
      "Penghapusan lembaga perwakilan rakyat",
      "Membentuk lembaga perwakilan yang memperoleh legitimasi dari rakyat",
      "Mengubah Indonesia menjadi negara federal",
      "Menghapus sistem multipartai",
      "Mengembalikan kekuasaan kepada pemerintah kolonial"
    ],
    correct: 1
  },
  {
    q: "Sebelum Pemilu 1955, keanggotaan lembaga perwakilan belum seluruhnya terbentuk berdasarkan...",
    answers: [
      "Pemilihan langsung oleh rakyat melalui pemilu nasional",
      "Perjanjian dengan Belanda",
      "Penunjukan presiden",
      "Dewan Nasional",
      "Keputusan partai politik"
    ],
    correct: 0
  },
  {
    q: "Pemilu 1955 dilaksanakan ketika Indonesia menerapkan sistem politik...",
    answers: [
      "Penghapusan lembaga perwakilan rakyat",
      "Demokrasi Terpimpin",
      "Demokrasi Liberal",
      "Orde Baru",
      "Demokrasi Pancasila pada masa Reformasi"
    ],
    correct: 2
  },
  {
    q: "Salah satu tujuan utama Pemilu 1955 adalah memilih anggota...",
    answers: [
      "DPR dan Konstituante",
      "Penghapusan lembaga perwakilan rakyat",
      "MPR dan Presiden",
      "DPR dan Presiden",
      "DPA dan Mahkamah Agung"
    ],
    correct: 0
  },
  {
    q: "Lembaga Konstituante yang dipilih melalui Pemilu 1955 memiliki tugas utama...",
    answers: [
      "Memilih presiden dan wakil presiden",
      "Mengangkat menteri-menteri kabinet",
      "Menyusun program pembangunan lima tahun",
      "Mengawasi pemerintahan daerah",
      "Menyusun undang-undang dasar yang baru"
    ],
    correct: 4
  },
  {
    q: "Pada saat Pemilu 1955 dilaksanakan, konstitusi yang berlaku di Indonesia adalah...",
    answers: [
      "Piagam Jakarta sebagai konstitusi tetap",
      "UUD Sementara 1950",
      "UUD 1945",
      "UUD hasil amandemen",
      "Konstitusi RIS"
    ],
    correct: 1
  },
  {
    q: "Pemilu 1955 diharapkan dapat memperkuat kehidupan demokrasi karena...",
    answers: [
      "Militer mengambil alih pemerintahan",
      "Seluruh partai politik dibubarkan",
      "Rakyat diberi kesempatan menentukan wakilnya melalui pemungutan suara",
      "Presiden menentukan seluruh anggota parlemen",
      "Penghapusan lembaga perwakilan rakyat"
    ],
    correct: 2
  },
  {
    q: "Kondisi politik Indonesia menjelang Pemilu 1955 ditandai oleh...",
    answers: [
      "Berakhirnya seluruh kegiatan politik",
      "Tidak adanya partai politik",
      "Berkembangnya banyak partai dan kekuatan politik",
      "Berlakunya sistem satu partai",
      "Penghapusan lembaga perwakilan rakyat"
    ],
    correct: 2
  },
  {
    q: "Dalam konteks Demokrasi Liberal, pelaksanaan pemilu menjadi penting terutama untuk memperoleh...",
    answers: [
      "Dukungan pemerintah kolonial",
      "Legitimasi politik dari rakyat",
      "Penghapusan lembaga parlemen",
      "Kekuasaan mutlak presiden",
      "Penghapusan lembaga perwakilan rakyat"
    ],
    correct: 1
  },
  {
    q: "Landasan hukum penting yang mengatur pelaksanaan Pemilu 1955 adalah...",
    answers: [
      "Undang-Undang Nomor 5 Tahun 1959",
      "Dekret Presiden 5 Juli 1959",
      "Penghapusan lembaga perwakilan rakyat",
      "Undang-Undang Nomor 7 Tahun 1953",
      "Maklumat Pemerintah 3 November 1945"
    ],
    correct: 3
  },
  {
    q: "Pemilu 1955 dilaksanakan dalam dua tahap pemungutan suara karena rakyat memilih anggota...",
    answers: [
      "DPR dan kabinet",
      "Penghapusan lembaga perwakilan rakyat",
      "Konstituante dan presiden",
      "DPR dan MPR",
      "DPR dan Konstituante"
    ],
    correct: 4
  },
  {
    q: "Pemungutan suara untuk memilih anggota DPR dilaksanakan pada...",
    answers: [
      "29 September 1955",
      "17 Agustus 1955",
      "10 November 1955",
      "15 Desember 1955",
      "27 Desember 1949"
    ],
    correct: 0
  },
  {
    q: "Pemungutan suara untuk memilih anggota Konstituante dilaksanakan pada...",
    answers: [
      "15 Desember 1955",
      "29 September 1955",
      "27 Desember 1949",
      "1 Oktober 1955",
      "10 November 1955"
    ],
    correct: 0
  },
  {
    q: "Urutan pelaksanaan dua pemungutan suara dalam Pemilu 1955 yang tepat adalah...",
    answers: [
      "MPR kemudian Konstituante",
      "DPR kemudian Konstituante",
      "Penghapusan lembaga perwakilan rakyat",
      "Konstituante kemudian DPR",
      "Presiden kemudian DPR"
    ],
    correct: 1
  },
  {
    q: "Kabinet yang berhasil melaksanakan Pemilu 1955 adalah Kabinet...",
    answers: [
      "Kabinet Ali Sastroamidjojo II",
      "Burhanuddin Harahap",
      "Wilopo",
      "Djuanda",
      "Natsir"
    ],
    correct: 1
  },
  {
    q: "Tahapan sebelum pemungutan suara yang sangat penting dalam penyelenggaraan pemilu adalah...",
    answers: [
      "Pembubaran seluruh partai politik",
      "Pendaftaran pemilih dan peserta pemilu",
      "Penghapusan lembaga perwakilan rakyat",
      "Penghapusan DPR",
      "Pembentukan Demokrasi Terpimpin"
    ],
    correct: 1
  },
  {
    q: "Pemilu 1955 dapat berlangsung di berbagai wilayah Indonesia meskipun kondisi transportasi dan komunikasi saat itu masih terbatas. Fakta ini menunjukkan...",
    answers: [
      "Pemilu hanya ditujukan bagi pejabat pemerintah",
      "Partai Murba",
      "Pemilu hanya dilaksanakan di Pulau Jawa",
      "Rakyat tidak terlibat dalam pemilu",
      "Besarnya usaha penyelenggaraan pemilu secara nasional"
    ],
    correct: 4
  },
  {
    q: "Dalam pemungutan suara, rakyat memberikan pilihannya secara langsung. Prinsip tersebut menunjukkan bahwa...",
    answers: [
      "Partai politik memilih atas nama rakyat",
      "Anggota DPR ditunjuk oleh presiden",
      "Pilihan rakyat ditentukan oleh pemerintah",
      "Partai Murba",
      "Pemilih memberikan sendiri suaranya kepada peserta yang dipilih"
    ],
    correct: 4
  },
  {
    q: "Keberhasilan penyelenggaraan Pemilu 1955 di negara yang masih relatif muda menunjukkan adanya...",
    answers: [
      "Partai Murba",
      "Penghapusan partisipasi masyarakat",
      "Ketergantungan penuh kepada pemerintah kolonial",
      "Berakhirnya kehidupan demokrasi",
      "Kemampuan Indonesia menyelenggarakan proses politik nasional"
    ],
    correct: 4
  },
  {
    q: "Salah satu ciri penting Pemilu 1955 adalah banyaknya peserta pemilu. Kondisi tersebut mencerminkan...",
    answers: [
      "Berlakunya sistem satu partai",
      "Penghapusan lembaga perwakilan rakyat",
      "Keragaman kekuatan politik masyarakat Indonesia",
      "Tidak adanya kebebasan politik",
      "Tidak adanya perbedaan pandangan politik"
    ],
    correct: 2
  },
  {
    q: "Empat kekuatan politik yang memperoleh suara terbesar dalam Pemilu DPR 1955 adalah...",
    answers: [
      "PNI, PSI, Parkindo, dan Murba",
      "NU, PSII, Murba, dan Parkindo",
      "PNI, Masyumi, NU, dan PKI",
      "Masyumi, Partai Katolik, PSI, dan Perti",
      "Partai Murba"
    ],
    correct: 2
  },
  {
    q: "Partai yang memperoleh suara terbanyak dalam Pemilu DPR 1955 adalah...",
    answers: [
      "PKI",
      "PNI",
      "Partai Murba",
      "Masyumi",
      "NU"
    ],
    correct: 1
  },
  {
    q: "Masyumi merupakan salah satu kekuatan politik besar dalam Pemilu 1955 yang memiliki basis politik utama pada kelompok...",
    answers: [
      "Islam",
      "Komunis",
      "Partai Murba",
      "Sosialis Eropa",
      "Kolonial"
    ],
    correct: 0
  },
  {
    q: "Nahdlatul Ulama (NU) dalam Pemilu 1955 tampil sebagai salah satu kekuatan politik yang mewakili...",
    answers: [
      "Kelompok komunis",
      "Partai Murba",
      "Kelompok federalis Belanda",
      "Pemerintah kolonial",
      "Kelompok Islam"
    ],
    correct: 4
  },
  {
    q: "PKI dalam Pemilu 1955 berhasil menjadi salah satu dari empat kekuatan politik terbesar. PKI berhaluan...",
    answers: [
      "Federalis",
      "Partai Murba",
      "Nasionalis",
      "Komunis",
      "Monarkis"
    ],
    correct: 3
  },
  {
    q: "Keberadaan partai nasionalis, Islam, komunis, dan kelompok politik lainnya dalam Pemilu 1955 menunjukkan...",
    answers: [
      "Seluruh masyarakat memiliki pilihan politik yang sama",
      "Indonesia hanya memiliki satu ideologi politik",
      "Masyarakat Indonesia memiliki orientasi politik yang beragam",
      "Partai politik tidak memiliki pengaruh",
      "Partai Murba"
    ],
    correct: 2
  },
  {
    q: "Tidak adanya satu partai yang memperoleh mayoritas mutlak dalam Pemilu 1955 menyebabkan...",
    answers: [
      "Partai Murba",
      "Seluruh partai politik otomatis dibubarkan",
      "Presiden dipilih langsung oleh rakyat",
      "Kerja sama dan koalisi antarpartai menjadi penting",
      "Indonesia kembali menjadi negara kolonial"
    ],
    correct: 3
  },
  {
    q: "Banyaknya partai politik dalam Pemilu 1955 dapat dipandang positif karena...",
    answers: [
      "Menghilangkan seluruh perbedaan politik",
      "Membuat pemerintah tidak membutuhkan parlemen",
      "Memberikan ruang bagi beragam aspirasi masyarakat",
      "Menghapus kebebasan memilih",
      "Partai Murba"
    ],
    correct: 2
  },
  {
    q: "Di sisi lain, banyaknya kekuatan politik juga menjadi tantangan bagi Demokrasi Liberal karena dapat menyebabkan...",
    answers: [
      "Partai Murba",
      "Terbentuknya sistem satu partai",
      "Fragmentasi politik dan sulitnya membangun pemerintahan yang stabil",
      "Tidak adanya perdebatan di parlemen",
      "Hilangnya seluruh partai politik"
    ],
    correct: 2
  },
  {
    q: "Berdasarkan hasil Pemilu DPR 1955, empat partai dengan perolehan suara terbesar adalah PNI, Masyumi, NU, dan...",
    answers: [
      "Partai Katolik",
      "Partai Murba",
      "PSI",
      "PKI",
      "Parkindo"
    ],
    correct: 3
  },
  {
    q: "Hasil Pemilu 1955 menunjukkan bahwa tidak ada satu partai pun yang berhasil memperoleh...",
    answers: [
      "Partai Murba",
      "Mayoritas mutlak",
      "Kursi DPR",
      "Suara",
      "Pendukung"
    ],
    correct: 1
  },
  {
    q: "PNI memperoleh suara terbanyak dalam pemilihan anggota...",
    answers: [
      "MPR",
      "Partai Murba",
      "Mahkamah Agung",
      "Presiden",
      "DPR"
    ],
    correct: 4
  },
  {
    q: "Jika hasil pemilu menunjukkan beberapa partai memperoleh dukungan besar dengan selisih yang tidak terlalu jauh, kondisi tersebut menunjukkan...",
    answers: [
      "Pemilu tidak diikuti partai politik",
      "Kekuatan politik tersebar di antara beberapa partai",
      "Partai Murba",
      "Rakyat tidak memiliki pilihan politik",
      "Satu partai menguasai seluruh politik Indonesia"
    ],
    correct: 1
  },
  {
    q: "Komposisi hasil Pemilu DPR 1955 memperlihatkan bahwa kehidupan politik Indonesia saat itu bersifat...",
    answers: [
      "Dewan Nasional",
      "Satu partai",
      "Monarki absolut",
      "Tanpa parlemen",
      "Majemuk dan multipartai"
    ],
    correct: 4
  },
  {
    q: "Hasil Pemilu Konstituante 1955 secara umum juga menunjukkan...",
    answers: [
      "Kekuatan politik yang tersebar di antara berbagai kelompok",
      "Pembubaran seluruh partai nasionalis",
      "Partai Murba",
      "Kemenangan mutlak satu partai",
      "Tidak adanya partai Islam"
    ],
    correct: 0
  },
  {
    q: "Fragmentasi kekuatan politik hasil Pemilu 1955 berpengaruh terhadap pemerintahan karena...",
    answers: [
      "Kabinet membutuhkan dukungan beberapa kekuatan politik",
      "Presiden memperoleh kekuasaan absolut",
      "Partai Murba",
      "Kabinet tidak membutuhkan dukungan parlemen",
      "Seluruh keputusan dibuat oleh satu partai"
    ],
    correct: 0
  },
  {
    q: "Walaupun Pemilu 1955 berhasil membentuk DPR hasil pemilihan rakyat, persoalan politik Indonesia belum sepenuhnya selesai karena...",
    answers: [
      "Persaingan dan perbedaan kepentingan antarpartai tetap kuat",
      "Partai Murba",
      "Pemilu tidak menghasilkan suara",
      "Indonesia tidak memiliki partai politik",
      "DPR tidak pernah terbentuk"
    ],
    correct: 0
  },
  {
    q: "Lembaga hasil Pemilu 1955 yang kemudian mengalami kebuntuan dalam menyusun undang-undang dasar baru adalah...",
    answers: [
      "Mahkamah Agung",
      "Konstituante",
      "Dewan Pertimbangan Agung",
      "DPR",
      "Dewan Nasional"
    ],
    correct: 1
  },
  {
    q: "Kegagalan Konstituante menyelesaikan tugasnya terutama berkaitan dengan sulitnya mencapai kesepakatan mengenai...",
    answers: [
      "Menyusun program pembangunan lima tahun",
      "Dasar negara dan konstitusi baru",
      "Nama partai politik",
      "Tanggal pelaksanaan Pemilu DPR",
      "Lokasi ibu kota negara"
    ],
    correct: 1
  },
  {
    q: "Salah satu kekuatan utama Pemilu 1955 bagi perkembangan demokrasi Indonesia adalah...",
    answers: [
      "Menghapus hak memilih masyarakat",
      "Membatasi peserta hanya pada satu partai",
      "Penghapusan lembaga perwakilan rakyat",
      "Menyerahkan seluruh kekuasaan kepada presiden",
      "Memberikan kesempatan luas kepada rakyat untuk berpartisipasi dalam politik"
    ],
    correct: 4
  },
  {
    q: "Pemilu 1955 sering dipandang sebagai tonggak demokrasi Indonesia karena...",
    answers: [
      "Tidak ada partai politik yang ikut",
      "Pemilu hanya berlangsung di Jakarta",
      "Penghapusan lembaga perwakilan rakyat",
      "Presiden memilih seluruh anggota DPR",
      "Rakyat terlibat langsung dalam menentukan wakilnya"
    ],
    correct: 4
  },
  {
    q: "Partisipasi masyarakat dalam Pemilu 1955 menunjukkan bahwa rakyat Indonesia...",
    answers: [
      "Menolak keberadaan lembaga perwakilan",
      "Tidak tertarik terhadap kehidupan politik",
      "Partai Murba",
      "Memiliki keterlibatan dalam proses politik negara",
      "Menyerahkan seluruh pilihan kepada pemerintah"
    ],
    correct: 3
  },
  {
    q: "Salah satu keterbatasan kehidupan politik setelah Pemilu 1955 adalah...",
    answers: [
      "Tidak adanya partisipasi rakyat",
      "Tidak terbentuknya DPR",
      "Fragmentasi politik tetap tinggi",
      "Penghapusan lembaga perwakilan rakyat",
      "Tidak adanya partai politik"
    ],
    correct: 2
  },
  {
    q: "Mengapa kemenangan beberapa partai dengan kekuatan relatif berimbang dapat menyulitkan pembentukan kabinet yang stabil?",
    answers: [
      "Pemilu secara otomatis membubarkan kabinet",
      "Semua partai dilarang bekerja sama",
      "Pemerintah memerlukan koalisi dan kompromi antarpartai",
      "Presiden tidak diperbolehkan memiliki kabinet",
      "Partai Murba"
    ],
    correct: 2
  },
  {
    q: "Pergantian kabinet yang cukup sering pada masa Demokrasi Liberal menunjukkan adanya masalah dalam...",
    answers: [
      "Ketersediaan sumber daya alam",
      "Letak geografis Indonesia",
      "Partai Murba",
      "Jumlah penduduk Indonesia",
      "Stabilitas politik pemerintahan"
    ],
    correct: 4
  },
  {
    q: "Hubungan yang tepat antara sistem multipartai dan kondisi kabinet pada masa Demokrasi Liberal adalah...",
    answers: [
      "Banyak partai membuat koalisi penting tetapi juga rentan terhadap konflik kepentingan",
      "Banyak partai menyebabkan kabinet tidak membutuhkan parlemen",
      "Sistem multipartai menghilangkan seluruh perbedaan politik",
      "Partai Murba",
      "Sistem multipartai menjadikan presiden penguasa mutlak"
    ],
    correct: 0
  },
  {
    q: "Pemilu 1955 menunjukkan bahwa demokrasi tidak hanya berkaitan dengan pemungutan suara, tetapi juga membutuhkan...",
    answers: [
      "Penghapusan seluruh perbedaan pendapat",
      "Partai Murba",
      "Kemampuan berdialog dan membangun kompromi politik",
      "Larangan terhadap partai politik",
      "Kekuasaan tanpa batas"
    ],
    correct: 2
  },
  {
    q: "Berakhirnya Demokrasi Liberal kemudian ditandai oleh peristiwa...",
    answers: [
      "Supersemar 11 Maret 1966",
      "Dekret Presiden 5 Juli 1959",
      "Proklamasi 17 Agustus 1945",
      "Konferensi Meja Bundar",
      "Penghapusan lembaga perwakilan rakyat"
    ],
    correct: 1
  },
  {
    q: "Salah satu isi penting Dekret Presiden 5 Juli 1959 adalah...",
    answers: [
      "Piagam Jakarta sebagai konstitusi tetap",
      "Pembubaran Indonesia sebagai negara kesatuan",
      "Pemberlakuan kembali Konstitusi RIS",
      "Pembentukan Republik Indonesia Serikat",
      "Pemberlakuan kembali UUD 1945"
    ],
    correct: 4
  },
  {
    q: "Perhatikan fakta berikut: Pemilu 1955 diikuti banyak kekuatan politik dan tidak menghasilkan satu partai dengan mayoritas mutlak. Kesimpulan yang paling tepat adalah...",
    answers: [
      "Rakyat tidak berpartisipasi dalam politik",
      "Seluruh rakyat memiliki pandangan politik yang sama",
      "Masyarakat Indonesia memiliki keragaman orientasi politik",
      "Partai Murba",
      "Sistem multipartai telah berakhir"
    ],
    correct: 2
  },
  {
    q: "Jika seorang sejarawan ingin meneliti tingkat partisipasi masyarakat dalam Pemilu 1955, sumber yang paling relevan adalah...",
    answers: [
      "Data produksi perkebunan",
      "Cerita fiksi tanpa rujukan sejarah",
      "Data jumlah pemilih dan jumlah suara yang diberikan",
      "Daftar hasil pertandingan olahraga",
      "Peta persebaran gunung api"
    ],
    correct: 2
  },
  {
    q: "Untuk mengetahui secara langsung bagaimana hasil perolehan suara Pemilu 1955 diumumkan pada masa itu, sumber primer yang paling sesuai adalah...",
    answers: [
      "Novel sejarah yang ditulis masa kini",
      "Cerita fiksi tanpa rujukan sejarah",
      "Komentar media sosial modern",
      "Film fiksi bertema politik",
      "Dokumen resmi hasil pemilu dan surat kabar tahun 1955"
    ],
    correct: 4
  },
  {
    q: "Seorang siswa menyatakan, 'Pemilu 1955 gagal karena tidak menghasilkan satu partai mayoritas.' Penilaian yang lebih tepat terhadap pernyataan tersebut adalah...",
    answers: [
      "Benar, karena sistem demokrasi tidak membutuhkan banyak partai",
      "Partai Murba",
      "Kurang tepat, karena keberhasilan pemilu juga dinilai dari partisipasi rakyat dan terlaksananya proses demokratis",
      "Benar, karena pemilu hanya berhasil jika satu partai menang mutlak",
      "Benar, karena hasil pemilu seharusnya ditentukan pemerintah"
    ],
    correct: 2
  },
  {
    q: "Perbedaan antara keberhasilan penyelenggaraan Pemilu 1955 dan ketidakstabilan politik setelahnya menunjukkan bahwa...",
    answers: [
      "Partai Murba",
      "Pemilu demokratis tidak otomatis menjamin stabilitas pemerintahan",
      "Pemilu tidak memiliki hubungan dengan demokrasi",
      "Partisipasi rakyat selalu menyebabkan konflik",
      "Stabilitas hanya dapat tercapai tanpa parlemen"
    ],
    correct: 1
  },
  {
    q: "Jika empat partai besar memperoleh dukungan yang relatif tersebar, konsekuensi politik yang paling mungkin adalah...",
    answers: [
      "Seluruh partai otomatis melebur",
      "Satu partai dapat memerintah tanpa dukungan pihak lain",
      "Partai Murba",
      "Diperlukannya koalisi untuk membangun dukungan pemerintahan",
      "Parlemen tidak lagi diperlukan"
    ],
    correct: 3
  },
  {
    q: "Pemilu 1955 dan kegagalan Konstituante menunjukkan dua sisi perkembangan demokrasi Indonesia. Dua sisi tersebut adalah...",
    answers: [
      "Keberhasilan pemerintahan militer dan kegagalan pemerintahan sipil",
      "Partai Murba",
      "Keberhasilan sistem satu partai dan kegagalan multipartai",
      "Keberhasilan kolonialisme dan kegagalan kemerdekaan",
      "Keberhasilan partisipasi elektoral dan kesulitan mencapai kompromi politik"
    ],
    correct: 4
  },
  {
    q: "Manakah hubungan sebab-akibat yang paling tepat mengenai hasil Pemilu 1955?",
    answers: [
      "Tidak ada partai politik sehingga parlemen dibubarkan",
      "Penghapusan lembaga perwakilan rakyat",
      "Kekuatan politik terfragmentasi sehingga pembentukan koalisi menjadi penting",
      "Satu partai menang mutlak sehingga koalisi tidak diperlukan",
      "Rakyat tidak memilih sehingga pemerintah kehilangan seluruh legitimasi"
    ],
    correct: 2
  },
  {
    q: "Apabila tujuan pembelajaran adalah menilai keberhasilan Pemilu 1955 secara kritis, indikator yang sebaiknya digunakan adalah...",
    answers: [
      "Jumlah kendaraan yang digunakan peserta pemilu",
      "Partisipasi rakyat, kualitas pelaksanaan, representasi politik, dan dampaknya terhadap pemerintahan",
      "Banyaknya poster kampanye saja",
      "Penghapusan lembaga perwakilan rakyat",
      "Jumlah gedung pemerintahan yang dibangun"
    ],
    correct: 1
  },
  {
    q: "Mengapa hasil Pemilu 1955 penting digunakan untuk memahami masyarakat Indonesia pada masa Demokrasi Liberal?",
    answers: [
      "Hasilnya menggambarkan keragaman dukungan dan orientasi politik masyarakat",
      "Hasilnya menunjukkan partai politik tidak memiliki pendukung",
      "Hasilnya membuktikan seluruh masyarakat memiliki ideologi yang sama",
      "Hasilnya membuktikan Indonesia tidak mengenal demokrasi",
      "Penghapusan lembaga perwakilan rakyat"
    ],
    correct: 0
  },
  {
    q: "Manakah pernyataan yang paling tepat untuk membandingkan Pemilu DPR dengan Pemilu Konstituante tahun 1955?",
    answers: [
      "Keduanya memiliki tugas utama menyusun undang-undang dasar baru",
      "Keduanya dipilih rakyat, tetapi lembaga yang dibentuk memiliki fungsi yang berbeda",
      "27 Desember 1949",
      "Konstituante memilih presiden sedangkan DPR menyusun UUD baru",
      "DPR dipilih rakyat sedangkan Konstituante ditunjuk Belanda"
    ],
    correct: 1
  },
  {
    q: "DPR hasil Pemilu 1955 dan Konstituante memiliki fungsi berbeda. Perbedaan yang tepat adalah...",
    answers: [
      "Menyusun program pembangunan lima tahun",
      "DPR menyusun UUD baru, sedangkan Konstituante memilih kepala daerah",
      "DPR memilih presiden, sedangkan Konstituante membentuk partai politik",
      "DPR dan Konstituante memiliki fungsi yang sepenuhnya sama",
      "DPR menjalankan fungsi perwakilan dan legislatif, sedangkan Konstituante bertugas menyusun UUD baru"
    ],
    correct: 4
  },
  {
    q: "Kronologi yang tepat untuk memahami perkembangan politik dari Pemilu 1955 menuju berakhirnya Demokrasi Liberal adalah...",
    answers: [
      "Konferensi Meja Bundar → Dekret Presiden → Pemilu DPR → Pemilu Konstituante",
      "Pemilu DPR → Pemilu Konstituante → kebuntuan Konstituante → Dekret Presiden 5 Juli 1959",
      "Pemilu Konstituante → Proklamasi → Pemilu DPR → Dekret Presiden",
      "Partai Murba",
      "Dekret Presiden → Pemilu DPR → Pemilu Konstituante → Proklamasi"
    ],
    correct: 1
  },
  {
    q: "Dari sudut pandang sejarah demokrasi, pelajaran penting dari Pemilu 1955 adalah bahwa perbedaan pilihan politik...",
    answers: [
      "Membuktikan bahwa demokrasi tidak dapat diterapkan",
      "Penghapusan lembaga perwakilan rakyat",
      "Dapat dikelola melalui mekanisme demokrasi dan penghormatan terhadap pilihan rakyat",
      "Harus dihilangkan agar seluruh rakyat memiliki pilihan yang sama",
      "Menjadi alasan untuk menghapus pemilu"
    ],
    correct: 2
  },
  {
    q: "Mengapa sejarawan tidak cukup hanya melihat siapa pemenang Pemilu 1955 ketika menilai arti penting pemilu tersebut?",
    answers: [
      "Karena sejarah hanya membahas tokoh politik",
      "Cerita fiksi tanpa rujukan sejarah",
      "Karena data hasil pemilu tidak dapat digunakan sebagai sumber sejarah",
      "Karena hasil pemilu sama sekali tidak memiliki nilai sejarah",
      "Karena makna sejarah juga mencakup proses, partisipasi rakyat, representasi, dan dampak politiknya"
    ],
    correct: 4
  },
  {
    q: "Kesimpulan yang paling tepat mengenai kedudukan Pemilu 1955 dalam sejarah Indonesia adalah...",
    answers: [
      "Penghapusan lembaga perwakilan rakyat",
      "Pemilu 1955 merupakan tonggak penting demokrasi karena memperluas partisipasi rakyat, tetapi hasilnya juga memperlihatkan tantangan fragmentasi dan kompromi politik",
      "Pemilu 1955 tidak memiliki pengaruh terhadap perkembangan demokrasi Indonesia",
      "Pemilu 1955 menghasilkan satu partai yang menguasai seluruh pemerintahan",
      "Pemilu 1955 sepenuhnya mengakhiri seluruh konflik politik Indonesia"
    ],
    correct: 1
  }
];
