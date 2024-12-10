Berikut adalah dokumentasi API dalam format `README.md` dalam bahasa Indonesia, sesuai dengan permintaan Anda:


# Dokumentasi API

## Autentikasi

### 1. Login
**Endpoint:** `POST /api/login`  
**Request Body:**
```json
{
    "email": "user@example.com",
    "password": "password"
}
```
**Response:**
- Status: `200 OK`
- Body:
```json
{
    "token": "your-jwt-token"
}
```

### 2. Logout
**Endpoint:** `POST /api/logout`  
**Headers:**
- Authorization: `Bearer {token}`

**Response:**
- Status: `200 OK`
- Body:
```json
{
    "message": "Logout berhasil"
}
```

---

## Proyek

### 3. Mendapatkan Semua Proyek
**Endpoint:** `GET /api/projects`  
**Deskripsi:** Ambil semua proyek tanpa login.  

**Response:**
- Status: `200 OK`
- Body (Contoh):
```json
[
    {
        "id": 1,
        "name": "Proyek 1",
        "description": "Deskripsi proyek",
        "created_at": "2024-12-01T12:00:00.000000Z",
        "updated_at": "2024-12-01T12:00:00.000000Z"
    },
    {
        "id": 2,
        "name": "Proyek 2",
        "description": "Deskripsi proyek",
        "created_at": "2024-12-02T12:00:00.000000Z",
        "updated_at": "2024-12-02T12:00:00.000000Z"
    }
]
```

### 4. Mendapatkan Proyek Berdasarkan ID
**Endpoint:** `GET /api/projects/{id}`  
**Deskripsi:** Ambil proyek berdasarkan ID tanpa login.  

**Response:**
- Status: `200 OK`
- Body (Contoh):
```json
{
    "id": 1,
    "name": "Proyek 1",
    "description": "Deskripsi proyek",
    "created_at": "2024-12-01T12:00:00.000000Z",
    "updated_at": "2024-12-01T12:00:00.000000Z"
}
```

### 5. Menambahkan Proyek (Autentikasi)
**Endpoint:** `POST /api/projects`  
**Headers:**
- Authorization: `Bearer {token}`

**Request Body:**
```json
{
    "name": "Proyek Baru",
    "description": "Deskripsi proyek baru"
}
```

**Response:**
- Status: `201 Created`
- Body:
```json
{
    "id": 3,
    "name": "Proyek Baru",
    "description": "Deskripsi proyek baru",
    "created_at": "2024-12-10T14:00:00.000000Z",
    "updated_at": "2024-12-10T14:00:00.000000Z"
}
```

### 6. Memperbarui Proyek (Autentikasi)
**Endpoint:** `PUT /api/projects/{id}`  
**Headers:**
- Authorization: `Bearer {token}`

**Request Body:**
```json
{
    "name": "Proyek yang Diperbarui",
    "description": "Deskripsi proyek yang diperbarui"
}
```

**Response:**
- Status: `200 OK`
- Body:
```json
{
    "id": 1,
    "name": "Proyek yang Diperbarui",
    "description": "Deskripsi proyek yang diperbarui",
    "created_at": "2024-12-01T12:00:00.000000Z",
    "updated_at": "2024-12-10T14:30:00.000000Z"
}
```

### 7. Menghapus Proyek (Autentikasi)
**Endpoint:** `DELETE /api/projects/{id}`  
**Headers:**
- Authorization: `Bearer {token}`

**Response:**
- Status: `200 OK`
- Body:
```json
{
    "message": "Proyek berhasil dihapus"
}
```

---

## Pesanan

### 8. Membuat Pesanan
**Endpoint:** `POST /api/orders`  
**Request Body:**
```json
{
    "name": "John Doe",
    "type": "Fotografi",
    "description": "Layanan fotografi pernikahan",
    "email": "johndoe@example.com",
    "phone_number": "1234567890"
}
```

**Response:**
- Status: `201 Created`
- Body:
```json
{
    "id": 1,
    "name": "John Doe",
    "type": "Fotografi",
    "description": "Layanan fotografi pernikahan",
    "email": "johndoe@example.com",
    "phone_number": "1234567890",
    "created_at": "2024-12-10T14:00:00.000000Z",
    "updated_at": "2024-12-10T14:00:00.000000Z"
}
```

---

## Penggunaan

### Menguji dengan Postman:

1. **Login:** Gunakan endpoint `POST /api/login` untuk autentikasi dan mendapatkan token JWT.
2. **Melakukan permintaan ke endpoint lain:** Gunakan header `Authorization: Bearer {token}` untuk endpoint yang membutuhkan autentikasi (misalnya `POST /api/projects`, `PUT /api/projects/{id}`, dll.).
3. **Logout:** Gunakan endpoint `POST /api/logout` untuk keluar dengan menginvalidasi token.

---

### Catatan:

- Pastikan untuk mengganti `{token}` dengan token yang sebenarnya yang Anda terima dari API login.
- Untuk permintaan yang memerlukan autentikasi, sertakan header `Authorization` dengan token Bearer.
- Sesuaikan payload dan header permintaan sesuai dengan kebutuhan.

---

## Pemecahan Masalah:

Jika Anda mengalami masalah, pastikan hal berikut:
- Pastikan token dikirim dengan benar pada header untuk endpoint yang memerlukan autentikasi.
- Verifikasi format body permintaan (JSON) dan field yang dibutuhkan.
- Jika terjadi kesalahan, periksa pesan error pada body response untuk detail lebih lanjut.

---

## Kesimpulan

Dokumentasi ini memberikan gambaran lengkap tentang endpoint API yang tersedia untuk mengelola proyek dan pesanan. Anda dapat mengujinya dengan alat seperti Postman dengan mengikuti instruksi yang ada pada bagian **Menggunakan dengan Postman**.
```

Ini adalah dokumentasi API dalam bahasa Indonesia untuk menguji berbagai endpoint, termasuk autentikasi dan pengelolaan proyek serta pesanan. Anda bisa menggunakannya dengan alat seperti Postman untuk menguji API.