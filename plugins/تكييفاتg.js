let handler = async (m, { conn, usedPrefix, command, text }) => {
    const messages = [
        [
`
الجهاز رقم 
`,
            '©بوت (عبدالله الجندي)',
            'https://telegra.ph/file/e9239fa926d3a2ef48df2.jpg',
[['[ شراء ]', '.شراء-ج (تكييفات) جهاز رقم']],
[], [], []
        ],
        [
`
الجهاز رقم 
`,
            '©بوت (عبدالله الجندي)',
            'https://telegra.ph/file/e9239fa926d3a2ef48df2.jpg',
[['[ شراء ]', '.شراء-ج (تكييفات) جهاز رقم']],
[], [], []
        ],
        [
`
الجهاز رقم 
`,
            '©بوت (عبدالله الجندي)',
            'https://telegra.ph/file/e9239fa926d3a2ef48df2.jpg',
[['[ شراء ]', '.شراء-ج (تكييفات) جهاز رقم']],
[], [], []
        ],
        [
`
الجهاز رقم 
`,
            '©بوت (عبدالله الجندي)',
            'https://telegra.ph/file/e9239fa926d3a2ef48df2.jpg',
[['[ شراء ]', '.شراء-ج (تكييفات) جهاز رقم']],
[], [], []
        ],

        // ضع الكثير من أدوات الرول اذا احتجت
    ];
// تعريف رساله الازرار

    // إرسال رسالة الرول
    await conn.sendCarousel(m.chat, '_*قسم شراء الاجهزه المنزليه الجديده*_', '©JoAnimi•3MK', '_*التكييفات الجديده المتاحه :*_', messages, m);
}

handler.command = /^(تكييفات-ج)$/i; // Command to trigger the handler function

export default handler; // استخراج المتغيرات والمتعرفات من الهندلر
