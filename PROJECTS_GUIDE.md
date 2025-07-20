# 📝 Panduan Edit Data Projects

File ini berisi panduan lengkap untuk mengedit data projects di portfolio Anda.

## 📁 Lokasi File

Data projects tersimpan di: `/src/data/projects.ts`

## 🎨 Cara Menambah Project Baru

1. Buka file `/src/data/projects.ts`
2. Copy template di bawah ini:

```typescript
{
  id: 7, // Ganti dengan nomor ID berikutnya
  title: "Nama Project Anda",
  role: "Posisi/Role Anda",
  duration: "Tahun/Periode", 
  description: "Deskripsi lengkap project Anda. Jelaskan fitur-fitur utama, teknologi yang digunakan, dan masalah yang diselesaikan.",
  link: "https://github.com/username/project-name",
  techStack: ["Tech1", "Tech2", "Tech3", "Tech4"],
  bgImage: "bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-800"
}
```

3. Paste di dalam array `projectsData` sebelum penutup `]`
4. Jangan lupa tambahkan koma `,` setelah project sebelumnya

## 🎨 Pilihan Background Gradient

Pilih salah satu dari gradient berikut untuk `bgImage`:

- `"bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"` - Biru-Ungu
- `"bg-gradient-to-br from-green-600 via-teal-600 to-green-800"` - Hijau-Teal  
- `"bg-gradient-to-br from-red-600 via-pink-600 to-red-800"` - Merah-Pink
- `"bg-gradient-to-br from-yellow-600 via-orange-600 to-yellow-800"` - Kuning-Orange
- `"bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-800"` - Indigo-Biru
- `"bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800"` - Ungu-Pink
- `"bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-800"` - Cyan-Biru
- `"bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-800"` - Emerald-Hijau
- `"bg-gradient-to-br from-pink-600 via-rose-600 to-pink-800"` - Pink-Rose
- `"bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-800"` - Amber-Kuning

## 📋 Penjelasan Field

- **id**: Nomor unik untuk setiap project (harus berbeda)
- **title**: Nama project yang akan ditampilkan
- **role**: Posisi/role Anda dalam project ini
- **duration**: Tahun atau periode pengerjaan project
- **description**: Deskripsi lengkap project (akan dipotong di mobile, full di desktop)
- **link**: URL ke repository atau demo project
- **techStack**: Array berisi teknologi yang digunakan (maksimal 4-5 untuk tampilan optimal)
- **bgImage**: Gradient background untuk card project

## ✏️ Contoh Lengkap

```typescript
{
  id: 7,
  title: "Coffee Shop App",
  role: "Mobile Developer",
  duration: "2024",
  description: "Mobile application for coffee shop ordering system. Features include menu browsing, order customization, payment integration, loyalty program, and real-time order tracking. Built with React Native and integrated with backend API for seamless user experience.",
  link: "https://github.com/aaneverything/coffee-shop-app",
  techStack: ["React Native", "Redux", "Firebase", "Stripe"],
  bgImage: "bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-800"
}
```

## 🚀 Tips

1. **Deskripsi**: Tulis deskripsi yang informatif dan menarik (150-300 kata optimal)
2. **Tech Stack**: Pilih teknologi utama yang paling relevan
3. **Link**: Pastikan link valid dan dapat diakses
4. **Background**: Pilih warna yang kontras dengan konten putih
5. **ID**: Selalu gunakan ID yang unik dan berurutan

## 📱 Tampilan Responsive

- **Mobile**: Deskripsi dipotong dengan tombol "Read more"
- **Desktop**: Deskripsi ditampilkan penuh
- **Tech Stack**: Otomatis wrap ke baris baru jika tidak muat

---

*File ini akan otomatis ter-update di website setelah Anda save perubahan.*
