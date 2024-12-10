<template>
    <div>
        <button @click="sendEmail">Kirim Email</button>
    </div>
</template>

<script>
export default {
    methods: {
        async sendEmail() {
            const emailData = {
                to: 'dirgaowen87@gmail.com', // Ganti dengan email tujuan
                subject: 'Pesanan Baru - Infinitry',
                text: 'Kamu menerima pesanan baru. Segera cek detail pesanan.',
            };

            try {
                console.error("testing1");
                const response = await fetch('http://localhost:3000/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(emailData),
                });
                console.error("testing2");

                if (response.ok) {
                    alert('Email berhasil dikirim');
                } else {
                    alert('Gagal mengirim email');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                alert('Terjadi kesalahan saat mengirim email');
            }
        },
    },
};
</script>